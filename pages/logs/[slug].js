const [slug] = ({ film }) => {
  const [title, _id, name, staticImageUrl, brand] = [
    film.title,
    film._id,
    film.name,
    film.staticImage,
    Url,
    brand,
  ];
  return (
    <div>
      {/* {films.map((film) => {
        <div className="grid grid-col-3 gap-4 px-4 md:grid-cols-2 sm:grid-col-1">
          <p>{title}</p>;<p>{name}</p>;<p>{brand}</p>;
        </div>;
      })} */}
    </div>
  );
};

// export async function getStaticPaths({films}) {
//   return {
//     paths: {films.map((film)=>{
//       param:{}

//     })},
//   };
// }

export default [slug];
