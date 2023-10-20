import { useSession } from "next-auth/react";
import Layout from "../../components/Layout";
import Welcome from "../../components/TemporaryLanding";

const Saved = () => {
  const { data: session, status } = useSession()
  
    if (status === 'authenticated'){
      return(
        <>
          <Layout>
            <div className="container mx-auto">
              <p className="text-center text-5xl mb-10">
                ❤️
              </p>
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

export default Saved;
