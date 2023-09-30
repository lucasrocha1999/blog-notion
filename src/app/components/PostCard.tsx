import { randomUUID } from "crypto";
import Link from "next/link";

interface Post {
  createdAt: string;
  description: string;
  id: string;
  slug: string;
  tags: string[];
  title: string;
}

export const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <article className="flex flex-col justify-around bg-[#F4F8FD] dark:bg-[#141920] h-80 w-full max-w-[360px] rounded-lg p-3">
        <header className="flex flex-col gap-2">
          <span>{post.tags.join(" | ")}</span>
          <strong className="text-xl font-semibold">{post.title}</strong>
        </header>
        <footer>
          <span className="text-sm">{post.createdAt}</span>
          <span className="text-sm"> • </span>
          <span className="text-sm">1 min de leitura</span>
        </footer>
      </article>
    </Link>
  );
};
