const Films = ({ films }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-5xl mt-5">
        {films.length.toString()} Films so far...
      </div>

      <div className="grid grid-auto justify-evenly lg:grid-cols-3 md:grid-cols-2">
        {films.map((film, idx) => {
          return (
            // card
            <div key={film._id} className="rounded shadow-lg p-7 minh-full">
              {/* text */}
              <div className="my-4 pr-4 space-y-3">
                {/* <h1>film {idx++ + 1}</h1> */}
                <img className="h-40 w-40 mx-auto" src={film.staticImageUrl} />
                <div>Brand {film.brand}</div>
                <div>{film.name}</div>
                <div>{film.description}</div>
                <div>{film.dateAdded}</div>
                <div className="grid grid-cols-2">
                  <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mx-5">
                    save
                  </button>{" "}
                  <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mx-5">
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
