const SaveButton = (film) => {

    const handleClick = (film) => {
      console.log(film.props.name)
      console.log(film.props.description)
    }
    return(
    
    <button onClick={() => {
      handleClick(film);
    }} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow mx-5">
      ❤️
    </button>
    )
}
export default SaveButton;
