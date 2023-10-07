import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center bg-[#FFFFFF] dark:bg-[#111111] max-w-[1200px] h-16 mx-auto px-4">
      <Link href="/">
        <h1>Lucas Lira | BLOG</h1>
      </Link>

      <div className="flex gap-4">
        <Link href="/about">About</Link>
        <ThemeSwitcher />
      </div>
    </header>
  );
};
