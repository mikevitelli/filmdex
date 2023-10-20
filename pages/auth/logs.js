import { useSession } from "next-auth/react";
import Layout from "../../components/Layout";
import Welcome from "../../components/TemporaryLanding";
import FilmForm from "../../components/LogForm/logform";

const Logs = () => {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <>
        <Layout>
          <div className="container mx-auto">
            <p className="text-center text-5xl mb-10">Log Film</p>
            <div className="text-center">
              <FilmForm className="mt-10" />
            </div>
          </div>
        </Layout>
      </>
    );
  }
  return (
    <>
      <Welcome />
    </>
  );
};

export async function getStaticProps(ctx) {
  return {
    props: {
      data: null,
    },
  };
}

export default Logs;
