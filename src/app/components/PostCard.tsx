import Link from "next/link";

export const PostCard: React.FC = () => {
  return (
    <article className="flex flex-col justify-around bg-[#F4F8FD] dark:bg-[#141920] h-80 w-full max-w-[360px] rounded-lg p-3">
      <header className="flex flex-col gap-2">
        <span>NodeJS</span>
        <strong className="text-xl font-semibold">
          Boas práticas para devs em início de carreira
        </strong>
      </header>
      <footer>
        <span className="text-sm">há um ano</span>
        <span className="text-sm"> • </span>
        <span className="text-sm">1 min de leitura</span>
      </footer>
    </article>
  );
};
