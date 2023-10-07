import { Suspense, lazy } from "react";
import Loading from "./components/Loading";
const Posts = lazy(() => import("./components/Posts"));

export default async function Home() {
  return (
    <>
      <article className="bg-[#FFFFFF] dark:bg-[#111111]">
        <section className="flex justify-center bg-gradient-to-r from-[#3d255e] to-[#100b15]">
          <div className="flex flex-col justify-center items-center h-[32rem] w-[960px]">
            <h1 className="text-4xl sm:text-6xl font-black text-white">
              Blog do Lucas Lira
            </h1>
            <p className="text-lg sm:text-xl text-center text-zinc-200 m-4 max-w-2xl">
              NodeJS, Reactjs e muito mais de desenvolvimento web para te
              ajudar, de dev para dev
            </p>
          </div>
        </section>
        <Suspense fallback={<Loading />}>
          <Posts />
        </Suspense>
      </article>
    </>
  );
}
