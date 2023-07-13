import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

export default function Home() {
  const { user } = useUser();
  return (
    <div>
      <h1>Home page</h1>

      {!!user ? (
        <>
          <div>
            <Image src={user.picture} alt={user.name} height={50} width={50} />
            <Link href={"/api/auth/logout"}>Logout</Link>
          </div>
        </>
      ) : (
        <Link href={"/api/auth/login"}>Login</Link>
      )}
    </div>
  );
}
