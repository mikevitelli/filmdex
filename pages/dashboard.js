import React, { useState } from "react";
import { useSession } from "next-auth/client";
import Home from "./index";
import Navbar from "../components/Navbar";

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

export default function Dashboard({ films }) {
  const [session, loading] = useSession();
  const [content, setContent] = useState();

  // // Fetch content from protected route
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch("/api/userData");
  //     const json = await res.json();
  //     if (json.content) {
  //       setContent(json.content);
  //     }
  //   };
  //   fetchData();
  // }, [session]);

  // When rendering client side don't display anything until loading is complete
  if (typeof window !== "undefined" && loading) return null;

  // If no session exists, display access denied message
  if (!session) {
    return <Home />;
  }

  function getTimestamp(x) {
    let timeStamp = x;
    let options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    let newTime = timeStamp.toLocaleDateString("en-US", options);
    return newTime;
  }

  return (
    <>
      <Navbar />
      <div className="grid grid-col-1">
        <div className="flex-1">
          <h3>User Image Area</h3>
        </div>
        <div className="flex-1">
          <h3>User Information Area</h3>
        </div>
      </div>
      <div className="grid grid-col-1">
        {films.map((film, x) => (
          <div key={film._id} {...film}>
            <h3>Film Gallery Tile #{x + 1}</h3>
            <h4>{film.name}</h4>
            <h4>{film.brand}</h4>
            <h4>Created at: {getTimestamp(new Date())}</h4>
          </div>
        ))}
      </div>
    </>
  );
}
