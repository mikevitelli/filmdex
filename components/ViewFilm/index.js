const ViewButton = (film) => {
  const handleClick = (film) => {
    console.log("viewed " + film.props.name);
  };
  return (
    <button
      onClick={() => {
        handleClick(film);
      }}
      className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow mx-5"
    >
      view
    </button>
  );
};
export default ViewButton;
