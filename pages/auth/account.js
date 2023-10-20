import { useSession } from "next-auth/react";
import Layout from "../../components/Layout";
import Welcome from "../../components/TemporaryLanding";

const Account = () => {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <>
        <Layout>
          <div className="container mx-auto">
            <p className="text-center text-5xl mb-10">Account Settings</p>
            <p className="text-center text-xl mb-10">
              username: {session.user.name}
            </p>
            <p className="text-center text-xl mb-10">
              email: {session.user.email}
            </p>
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

export default Account;
