const Films = ({ films }) => {
  return (
    <div className="container mx-auto">
      <div className="text-5xl mt-5 text-center">
        {films.length.toString()} Films so far...
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2">
        {films.map((film, idx) => {
          return (
            // card
            <div key={idx} className="rounded shadow-lg p-7">
              {/* text */}
              <div className="my-4 pr-4 h-full space-y-3">
                {/* <h1>film {idx++ + 1}</h1> */}
                <img className="h-40 w-40 mx-auto" src={film.staticImageUrl} />
                <h3 className="font-serif font-bold text-2xl">{film.brand}</h3>
                <h4 className="font-serif font-bold text-3xl">{film.name}</h4>
                <div className="font-serif text-xl">
                  {film.description.substring(0, 140) + "..."}
                </div>
                {/* <div>{film.dateAdded}</div> */}
                <div className="grid grid-cols-2 space-x-6">
                  <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow mx-5">
                    save
                  </button>{" "}
                  <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow mx-5">
                    view
                  </button>{" "}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Films;
