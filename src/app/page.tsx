import Image from "next/image";
import Header from "./components/Header";
import SocialLinks from "./components/SocialLinks";
import ProjectTableWrapper from "./components/ProjectTableWrapper";

export default function Home() {
  return (
    <div>
      <Header />

      <main className="mt-12 flex flex-col items-center">
        <Image
          src="/man.gif"
          alt="Man GIF"
          width={0}
          height={0}
          sizes="100vw"
          className="w-[150px] h-auto"
          unoptimized={true}
        />

        <p className="mt-8 text-xl font-normal text-center max-w-3xl">
          I am a CS student at Boston University who loves <em>creating, coding,</em> and <em>experimenting</em>. I like testing crypto trading strategies (mostly private), working with data, and building business/lifestyle automation projects.
          <br />
          <br />
           <span className="font-semibold">Currently</span>, testing trading strategies on prediction markets, and learning about building consumer products.
        </p>
        
        <SocialLinks />

        <h2 className="mt-12 font-normal text-left w-full text-gray-500">Projects:</h2>
        
        <ProjectTableWrapper />
      </main>
    </div>
  );
}