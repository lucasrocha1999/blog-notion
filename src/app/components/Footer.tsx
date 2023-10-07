import Link from "next/link";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";

export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col justify-center items-center gap-4 h-56 bg-[#3d255e] dark:bg-[#080808]">
      <div className="flex gap-4">
        <Link
          href="https://www.linkedin.com/in/lucas-lira-dev/"
          target="_blank"
        >
          <AiFillLinkedin size={24} />
        </Link>
        <Link href="https://github.com/lucasrocha1999" target="_blank">
          <AiFillGithub size={24} />
        </Link>
        <Link
          href="https://www.instagram.com/luccas.rocha_/?hl=pt-br"
          target="_blank"
        >
          <AiFillInstagram size={24} />
        </Link>
      </div>
      <p className="text-sm">
        Blog do Lucas Lira &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};
