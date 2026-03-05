import { FaEdit, FaTrash } from "react-icons/fa";

function NoteCard({ note, onDelete, onEdit }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200 p-4 flex flex-col justify-between">
      {/* Title */}
      <div>
        <div className="bg-gray-900 text-white font-semibold px-3 py-2 rounded-md mb-2">
          {note.title}
        </div>

        <p className="text-gray-700 text-sm">{note.description}</p>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-2 mt-4">
        {/* Edit */}
        <button
          onClick={() => onEdit(note)}
          className="bg-gray-900 p-2 rounded-md hover:bg-black transition"
        >
          <FaEdit className="text-white" />
        </button>

        {/* Delete */}
        <button
          onClick={() => onDelete(note._id)}
          className="bg-white border p-2 rounded-md hover:bg-red-50 transition"
        >
          <FaTrash className="text-red-500" />
        </button>
      </div>
    </div>
  );
}

export default NoteCard;
