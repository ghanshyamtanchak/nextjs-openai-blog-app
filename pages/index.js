import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>
        Home page <Link href={"/api/auth/login"}>Login</Link>
      </h1>
    </div>
  );
}
