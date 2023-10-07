import ReactMarkdown from "react-markdown";
import { getPost } from "../../../lib/notion";

interface PostProps {
  params: {
    slug: string;
  };
}

const Post = async ({ params }: PostProps) => {
  const post = await getPost(params.slug);
  return (
    <section className="max-w-[1200px] mx-auto mt-8 px-4 py-6">
      <h2 className="text-4xl font-black text-zinc-800 dark:text-white my-2">
        {post.title}
      </h2>
      <span className="text-zinc-600 dark:text-zinc-200 mt-4">
        {post.description}
      </span>
      <p className="text-xs mb-6">{post.tags.join(", ")}</p>
      <ReactMarkdown className="mt-4">{post.content}</ReactMarkdown>
    </section>
  );
};

export default Post;
