import { useSession } from "next-auth/client";
import Layout from "../../components/Layout";
import Welcome from "../../components/TemporaryLanding";

const Logs = () => {
  const [session, loading] = useSession();

  function displayAuthenticatedContent(session) {
    if (session) {
      return (
        <>
          <Layout>
            <div className="container mx-auto">
              <p className="text-center text-5xl mb-10">logs</p>{" "}
            </div>{" "}
          </Layout>
        </>
      );
    } else {
      return (
        <>
          <Welcome />
        </>
      );
    }
  }
  return <>{displayAuthenticatedContent(session)}</>;
};

export async function getStaticProps(ctx) {
  return {
    props: {
      data: null,
    },
  };
}

export default Logs;
