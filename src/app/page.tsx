import { PostCard } from "./components/PostCard";

export default function Home() {
  const posts = [1, 2, 3, 4, 5];
  return (
    <>
      <section className="flex justify-center bg-gradient-to-r from-[#3d255e] to-[#100b15]">
        <div className="flex flex-col justify-center items-center h-[32rem] w-[960px]">
          <h1 className="text-5xl font-black text-white sm:text-6xl">
            Blog do Lucas Lira
          </h1>
          <p className="text-xl text-center text-zinc-200 m-4 max-w-2xl">
            NodeJS, Reactjs e muito mais de desenvolvimento web para te ajudar,
            de dev para dev
          </p>
        </div>
      </section>
      <section className="grid grid-cols-3 gap-6 max-w-[1200px] mx-auto py-14 px-4">
        {posts.map((post) => (
          <PostCard key={post} />
        ))}
      </section>
    </>
  );
}
