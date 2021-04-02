import LoginForm from "../../components/LoginForm";
import PageTemplate from "../../components/PageTemplate";
import styles from "../../styles/Home.module.css";

// import { providers } from "next-auth/client";

// This is the recommended way for Next.js 9.3 or newer
// export async function getStaticProps() {
//   const providers = await providers();
//   return {
//     props: { providers },
//   };
// }

const Login = (props) => {
  return (
    <>
      <PageTemplate>
        <h1 className={styles.title}>
          <a href="https://filmdex.app">filmDex</a>
        </h1>
        <br />
        <br />
        <LoginForm {...props} />
      </PageTemplate>
    </>
  );
};

export default Login;
