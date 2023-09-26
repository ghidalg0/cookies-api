import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24">
      <Link
        className="flex items-center gap-4 focus:outline-none"
        href="https://www.youtube.com/@CodeWithCookies"
        target="_blank"
      >
        <Image
          src="/cookieLogo.png"
          width={100}
          height={100}
          alt="logo"
          className="rounded-full"
        />
        <h1 className="text-2xl font-bold text-creme">Code with Cookies API</h1>
      </Link>
    </main>
  );
}
