import Modal from "react-modal";
import { useState } from "react";


const Poupap = ({addMovie}) => {
  let[modalIsOpen, setIsOpen] = useState(false);
  
  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };
  
  const Submit = () => {
    let addMovie = {
      Title , Rating, year, Poster
    };
    setIsOpen(false);
  };
 let [Title, setTitle] = useState("");
 let [Poster, setPoster] = useState("");
 let [year, setyear] = useState("");
 let [Rating, setRating] = useState("");


  return (
    <div>
      <button onClick={open}>Add Movie</button>
      <Modal
       
        isOpen={modalIsOpen}
        onRequestClose={close}
      >
        <h1>Add A Movie</h1>
        <form>
          <label>Movie Name</label>
          <input type="text" onChange={(e) => setTitle(e.target.value)} />
          <label>Date</label>
          <input type="text" onChange={(e) => setyear(e.target.value)} />
          <label>Image</label>
          <input type="text" onChange={(e) => setPoster(e.target.value)} />
          <label>Rating</label>
          <input type="text" onChange={(e) => setRating(e.target.value)} />
        </form>
        <button  onClick={Submit}>
          Submit
        </button>
        <button  onClick={close}>
          close
        </button>
      </Modal>
    </div>
  );
};
export default Poupap;
