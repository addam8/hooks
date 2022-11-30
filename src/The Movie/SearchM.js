import ReactStars from "react-stars";

const SearchM = ({ setSearch , setRating}) => {
  const ratingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div >
        
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      {
        <ReactStars
          count={5}
          size={24}
          color2={"#ffd700"}
          edit={true}
          onChange={ratingChange}
        />
      }
    </div>
  );
};
export default SearchM;