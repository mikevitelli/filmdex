import Navbar from "../Navbar";

const Layout = (props) => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />
        <main className="flex-1 overflow-y-auto"> {props.children}</main>
      </div>
    </>
  );
};

export default Layout;
