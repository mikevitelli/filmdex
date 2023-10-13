import { useSession } from "next-auth/react";
import Layout from "../../components/Layout";
import Welcome from "../../components/TemporaryLanding";

const Bookmarks = () => {
  // const [session, loading] = useSession();
  const { data: session, status } = useSession()
  
    if (status === 'authenticated'){
      return(
        <>
          <Layout>
            <div className="container mx-auto">
              <p className="text-center text-5xl mb-10">bookmarks</p>{" "}
            </div>{" "}
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


//   function displayAuthenticatedContent(session) {
//     if (session) {
//       return (
//         <>
//           <Layout>
//             <div className="container mx-auto">
//               <p className="text-center text-5xl mb-10">bookmarks</p>{" "}
//             </div>{" "}
//           </Layout>
//         </>
//       );
//     } else {
//       return (
//         <>
//           <Welcome />
//         </>
//       );
//     }
//   }
//   return <>{displayAuthenticatedContent(session)}</>;
// };

export async function getStaticProps(ctx) {
  return {
    props: {
      data: null,
    },
  };
}

export default Bookmarks;
