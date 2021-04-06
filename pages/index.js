import Head from "next/head";
import { useSession } from "next-auth/client";
import Navbar from "../components/Navbar";
import Welcome from "../components/TemporaryLanding";
import Link from "next/link";

import Layout from "../components/Layout";
export default function Home() {
  const [session, loading] = useSession();

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
      {/* Upper Portion */}

      {/* Lower portion */}
      {!session && (
        <div className="containter mx-auto">
          <div className="h-screen w-screen ">
            <Welcome />
          </div>
        </div>
      )}

      {/* {session && <Navbar />} */}

      {session && (
        <>
          <Layout>
            <div className="container mx-auto">
              <p className="text-center text-5xl">filmDex</p>
            </div>
          </Layout>
        </>
      )}
    </>
  );
}
