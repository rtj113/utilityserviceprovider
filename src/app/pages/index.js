import Image from "next/image";
import Link from "next/link";

export default function AboutIndex() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-black">

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left text-black">
        <Link href="/pages/about">Test index, pages About Us</Link>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-900"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold text-black`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm text-black`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>
      </div>
    </main>
  );
}
