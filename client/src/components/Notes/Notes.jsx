import { useEffect, useState } from "react";
import { getNotes, delNote } from "../../API/notesAPI";
import NoteCard from "./NoteCard";
import { FaPlus } from "react-icons/fa";

function Notes() {
  const [notesArr, setNotesArr] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getNotes();
      setNotesArr(data);
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await delNote(id);
    setNotesArr(notesArr.filter((note) => note._id !== id));
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Notes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {notesArr.map((note) => (
          <NoteCard key={note._id} note={note} onDelete={handleDelete} />
        ))}
      </div>

      {/* Floating Add Button */}
      <button className="fixed bottom-8 right-8 bg-gray-900 text-white p-4 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition">
        <FaPlus size={18} />
      </button>
    </div>
  );
}

export default Notes;
