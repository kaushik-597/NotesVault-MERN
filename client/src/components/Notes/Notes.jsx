import { useEffect, useState } from "react";
import { getNotes } from "../../API/notesAPI";

function Notes() {
  const [notesArr, setNotesArr] = useState([]);
  const fetchData = async () => {
    const data = await getNotes();
    //   console.log(notesArr);
    setNotesArr(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        {notesArr &&
          notesArr.map((note) => {
            return (
              <div key={note._id}>
                <h2>{note?.title}</h2>
                <p>{note?.description}</p>
              </div>
            );
          })}
      </div>
    </>
  );
}
export default Notes;
