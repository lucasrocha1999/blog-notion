import { getPosts } from "../lib/notion";
import { PostCard } from "./PostCard";

export default async function Posts() {
  const posts = await getPosts();

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto py-14 px-4">
      {posts.map((post, index) => (
        <PostCard post={post} key={index} />
      ))}
    </section>
  );
}
