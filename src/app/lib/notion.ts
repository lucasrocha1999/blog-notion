import { Client } from "@notionhq/client";
import { NotionAPI } from "notion-client";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const notionApi = new NotionAPI({
  authToken: process.env.NOTION_TOKEN,
});

interface Posts {
  date: string;
  description: string;
  id: string;
  slug: string;
  tags: string[];
  title: string;
}

export const getAllPublished = async () => {
  const posts = await notion.databases.query({
    database_id: process.env.DATABASE_ID!,
    filter: {
      property: "Published",
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: "Date",
        direction: "descending",
      },
    ],
  });
  const allPosts = posts.results;
  return allPosts.map((post) => {
    return getPageMetaData(post);
  });
};
const getPageMetaData = (post: any): Posts => {
  const getTags = (tags: any[]) => {
    const allTags = tags.map((tag) => {
      return tag.name;
    });
    return allTags;
  };
  return {
    id: post.id,
    title: post.properties.Name.title[0].plain_text,
    tags: getTags(post.properties.Tags.multi_select),
    description: post.properties.Description.rich_text[0].plain_text,
    date: getToday(post.properties.Date.last_edited_time),
    slug: post.properties.Slug.rich_text[0].plain_text,
  };
};

function getToday(datestring: string) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let date = new Date();
  if (datestring) {
    date = new Date(datestring);
  }
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  let today = `${month} ${day}, ${year}`;
  return today;
}

import { NotionToMarkdown } from "notion-to-md";
const n2m = new NotionToMarkdown({ notionClient: notion });

export const getSingleBlogPostBySlug = async (slug: string) => {
  const response = await notion.databases.query({
    database_id: process.env.DATABASE_ID!,
    filter: {
      property: "Slug",
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  });
  const page = response.results[0];
  const metadata = getPageMetaData(page);
  const mdblocks = await n2m.pageToMarkdown(page.id);
  const mdString = n2m.toMarkdownString(mdblocks);
  return {
    metadata,
    markdown: mdString,
  };
};
