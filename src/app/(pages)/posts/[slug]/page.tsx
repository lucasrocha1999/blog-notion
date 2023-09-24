import ReactMarkdown from "react-markdown";
import { getSingleBlogPostBySlug } from "../../../lib/notion";

interface PostProps {
  params: {
    slug: string;
  };
}

const Post = async ({ params }: PostProps) => {
  const post = await getSingleBlogPostBySlug(params.slug);
  return (
    <section className="max-w-[1200px] mx-auto mt-8">
      <h2 className="text-4xl font-black text-zinc-800 dark:text-white mt-1">
        {post.metadata.title}
      </h2>
      <span className="text-zinc-600 dark:text-zinc-200 mt-2">
        {post.metadata.date}
      </span>
      <p className="text-xs">{post.metadata.tags.join(", ")}</p>

      <ReactMarkdown className="mt-4">{post.markdown.parent}</ReactMarkdown>
    </section>
  );
};

export default Post;
