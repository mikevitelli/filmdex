import SaveButton from "../SaveFilm";
import ViewButton from "../ViewFilm";

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
              <div className="my-4 pr-4 h-full space-y-3">
                <img className="h-40 w-40 mx-auto" src={film.staticImageUrl} />
                <h3 className="font-serif font-bold text-2xl">{film.brand}</h3>
                <h4 className="font-serif font-bold text-3xl">{film.name}</h4>
                <div className="font-serif text-xl">
                  {film.description.substring(0, 140) + "..."}
                </div>
                <div className="grid grid-cols-2 space-x-6">
                  <SaveButton props={film}/>
                  <ViewButton props={film}/>
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
