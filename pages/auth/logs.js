import { useSession } from "next-auth/react";
import Layout from "../../components/Layout";
import Welcome from "../../components/TemporaryLanding";

const Logs = () => {
  const { data: session, status } = useSession()

  if (status === 'authenticated'){
    return(
      <>
      <Layout>
        <div className="container mx-auto">
          <p className="text-center text-5xl mb-10">
            logs
          </p>
          <div className="text-center">
            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow mx-5">
              + new log
            </button>
          </div>
        </div>
      </Layout>
    </>
    )
  }
  return(
    <>
      <Welcome />
    </>
  )
}

export async function getStaticProps(ctx) {
  return {
    props: {
      data: null,
    },
  };
}

export default Logs;
