import { useSession } from "next-auth/react";
import Welcome from "../../components/TemporaryLanding";
import Films from "../../components/Films";
import Layout from "../../components/Layout";

export async function getStaticProps() {
  const res = await fetch(`https://filmapi.vercel.app/api/films`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { films: JSON.parse(JSON.stringify(data)) },
  };
}

const FilmsPage = (props) => {
  const { data: session, status } = useSession()

  if (status === 'authenticated'){
    return(
      <>
        <Layout>
          <Films {...props} />
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

export default FilmsPage;
