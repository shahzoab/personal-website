import Image from "next/image";

export default function Home() {
  return (
    <main className="grid sm:grid-cols-2 w-full min-h-screen">
      <div className="col-span-1 bg-[#f5f5f5] flex items-center justify-center">
        <div className="p-8 flex flex-col text-center items-center">
          <div className="w-52 h-52 overflow-hidden">
            <Image
              src="/profile-pic.png"
              alt="Profile Picture"
              width={208}
              height={208}
              className="rounded-custom"
              priority
            />
          </div>
          <h1 className="text-3xl font-bold mt-6">Shahzoab Khan (Shazz)</h1>
          <p className="text-xl text-gray-600 mt-1">Front-End Developer</p>
          <a
            href="mailto:shahzoab@gmail.com"
            className="my-6 bg-yellow-400 text-black rounded-full w-52 h-10 border border-solid border-black flex justify-center items-center"
          >
            Email me
          </a>
          <div className="flex mt-4">
            <a
              href="https://www.linkedin.com/in/shahzoab-khan/"
              className="mx-1"
              target="_blank"
              rel="noopener"
            >
              <Image
                src="/linkedin.svg"
                alt="LinkedIn"
                width={40}
                height={40}
              />
            </a>
            <a
              href="https://github.com/shahzoab"
              className="mx-1"
              target="_blank"
              rel="noopener"
            >
              <Image src="/github.svg" alt="GitHub" width={40} height={40} />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~0197e6d2b5bd5f4085"
              className="mx-1"
              target="_blank"
              rel="noopener"
            >
              <Image src="/upwork.svg" alt="Upwork" width={40} height={40} />
            </a>
            <a
              href="https://www.facebook.com/shazz.dev"
              className="mx-1"
              target="_blank"
              rel="noopener"
            >
              <Image
                src="/facebook.svg"
                alt="Facebook"
                width={40}
                height={40}
              />
            </a>
            <a
              href="https://www.instagram.com/shazz.dev"
              className="mx-1"
              target="_blank"
              rel="noopener"
            >
              <Image
                src="/instagram.svg"
                alt="Instagram"
                width={40}
                height={40}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="col-span-1 bg-[#f3f1e1] flex items-center justify-center">
        <div className="p-8 lg:p-20">
          <h2 className="text-2xl font-bold">ABOUT ME</h2>
          <p className="mt-4 text-gray-700">
            Experienced Front-End Developer with 10+ years of expertise. Proven
            track record in building modern websites and apps, leading teams to
            achieve outstanding outcomes. Strong communicator, collaborative,
            continuous learner.
          </p>
          <div className="flex flex-wrap justify-evenly mt-8 sm:mt-28">
            <a
              href="./Shazz-Resume.pdf"
              download="Shazz-Resume"
              target="_blank"
              rel="noopener"
              className="bg-yellow-400 text-black rounded-full w-52 h-10 mb-4 border border-solid border-black flex justify-center items-center"
            >
              Resume
            </a>
            <a
              href="https://portfolio.shahzoab.com/"
              target="_blank"
              rel="noopener"
              className="bg-yellow-400 text-black rounded-full w-52 h-10 border border-solid border-black flex justify-center items-center"
            >
              Portfolio
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
