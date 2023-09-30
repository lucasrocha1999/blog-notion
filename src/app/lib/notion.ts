"use server";

import { Client } from "@notionhq/client";
import { NotionDatabaseResponse } from "./types";
import { NotionToMarkdown } from "notion-to-md";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function getPosts() {
  const response = await notion.databases.query({
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

  const typedResponse = response as unknown as NotionDatabaseResponse;

  return typedResponse.results.map((post) => {
    return {
      id: post.id,
      title: post.properties.Title.title[0].plain_text,
      description: post.properties.Description.rich_text[0].plain_text,
      slug: post.properties.Slug.rich_text[0].plain_text,
      tags: post.properties.Tags.multi_select.map((tag) => tag.name),
      createdAt: getToday(post.properties.Date.last_edited_time),
    };
  });
}

export async function getPost(slug: string) {
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

  const pageId = response.results[0].id;

  const n2m = new NotionToMarkdown({ notionClient: notion });

  const mdblocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdblocks);

  const typedResponse = response as unknown as NotionDatabaseResponse;

  return {
    title: typedResponse.results[0].properties.Title.title[0].plain_text,
    description:
      typedResponse.results[0].properties.Description.rich_text[0].plain_text,
    tags: typedResponse.results[0].properties.Tags.multi_select.map(
      (tag) => tag.name
    ),
    content: mdString.parent,
  };
}

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
