import Head from "next/head";
import { useSession } from "next-auth/react";
// import Navbar from "../components/Navbar";
import Welcome from "../components/TemporaryLanding";
// import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
export default function Home() {
  // const [session, loading] = useSession();
  const { data: session } = useSession();

  // if !session display <Welcome /> else display landing page

  return (
    <>
      <Head>
        <title>FilmDex</title>

        <link rel="icon" href="/favicon.ico" />

        <script
          src="https://unpkg.com/react/umd/react.production.min.js"
          crossOrigin="true"
        ></script>

        <script
          src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
          crossOrigin="true"
        ></script>
      </Head>

      {!session && <Welcome />}

      {session && (
        <>
          <Layout>
            <div className="container mx-auto">
              <p className="text-center text-5xl mb-10">home</p>

              <div className="flex justify-center">
                <Image
                  src="/film_guy512.png"
                  alt="Picture of the author"
                  width={500}
                  height={500}
                ></Image>
              </div>
            </div>
          </Layout>
        </>
      )}
    </>
  );
}
