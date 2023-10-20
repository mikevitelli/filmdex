import Head from "next/head";
import { useSession } from "next-auth/react";
// import Navbar from "../components/Navbar";
import Welcome from "../components/TemporaryLanding";
// import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import Layout from "../components/Layout";
export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>FilmDex</title>

        <link rel="icon" href="/favicon.ico" />

        <Script
          src="https://unpkg.com/react/umd/react.production.min.js"
          crossOrigin="true"
        ></Script>

        {/* <Script
          src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
          crossOrigin="true"
        ></Script> */}
      </Head>

      {!session && <Welcome />}

      {session && (
        <>
          <Layout>
            <div className="container mx-auto">
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
