import Image from "next/image";
import Header from "./components/Header";
import SocialLinks from "./components/SocialLinks";
import ProjectTable from "./components/ProjectTable";

export default function Home() {
  return (
    <div>
      <Header />

      <main className="mt-24 flex flex-col items-center">
        <Image
          src="/man.gif"
          alt="Man GIF"
          width={0}
          height={0}
          sizes="100vw"
          className="w-[150px] h-auto"
          unoptimized={true}
        />

        <p className="mt-12 text-xl font-normal text-center max-w-3xl">
          I am a CS student who loves <em>creating, coding,</em> and <em>expirementing</em>. I like testing crypto trading strategies (mostly private), working with data, and building business/lifestyle automation projects.
          <br />
          <br />
           <span className="font-semibold">Currently</span>, testing trading strategies on prediction markets, and learning about building consumer products.
        </p>
        
        <SocialLinks />

        <h2 className="mt-16 font-normal text-left w-full text-gray-500 dark:text-gray-300">Projects:</h2>
        
        <ProjectTable />
      </main>
    </div>
  );
}