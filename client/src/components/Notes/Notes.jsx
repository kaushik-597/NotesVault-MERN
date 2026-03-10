import { useState, useEffect } from "react";
import { Edit2, Trash2, Plus, X } from "lucide-react";
import { addNote, getNotes, delNote, editNote } from "../../API/notesAPI.js";

const Notes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({
    title: "",
    description: "",
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getNotes();
      setNotes(data);
    };

    fetchData();
  }, []);

  const add = async (newNote) => {
    const note = await addNote(newNote);
    setNotes((prev) => [note, ...prev]);
    setNewNote({
      title: "",
      description: "",
    });
  };

  const del = async (id) => {
    await delNote(id);
    setNotes((prev) => prev.filter((note) => note._id !== id));
  };

  const edit = async (id, note) => {
    const editedNote = await editNote(id, note);
    setNotes((prev) =>
      prev.map((note) => (note._id === id ? editedNote : note)),
    );
    setEditingId(null);
    setNewNote({
      title: "",
      description: "",
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 relative min-h-screen">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl font-semibold text-slate-800 tracking-tight">
            Your Notes
          </h2>
          <p className="text-slate-500 mt-2">
            Capture your thoughts and ideas.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="group flex items-center gap-2 bg-slate-800 text-slate-50 px-5 py-3 rounded-full shadow-lg shadow-slate-300/50 hover:scale-105 hover:shadow-slate-400/50 hover:bg-slate-700 transition-all duration-300 cursor-pointer"
        >
          <div className="bg-slate-600/50 p-1 rounded-full group-hover:rotate-90 transition-transform duration-300">
            <Plus size={18} />
          </div>
          <span className="font-medium pr-1">New Note</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {notes.map((note) => {
          const isEditing = editingId === note._id;
          return (
            <div
              key={note._id}
              className="group flex flex-col bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-md shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-300/60 hover:scale-105 transition-all duration-300 ease-out"
            >
              <div className="bg-slate-800 px-5 py-4 flex items-center justify-between border-b border-slate-700">
                <input
                  className="text-slate-100 font-medium tracking-wide truncate pr-4 w-full"
                  value={isEditing ? newNote.title : note.title}
                  disabled={!isEditing}
                  onChange={(e) => {
                    setNewNote((prev) => {
                      return { ...prev, title: e.target.value };
                    });
                  }}
                />
              </div>

              <div className="px-5 py-5 flex-grow">
                <textarea
                  className="text-slate-600 leading-relaxed text-sm w-full resize-none"
                  value={isEditing ? newNote.description : note.description}
                  disabled={!isEditing}
                  onChange={(e) => {
                    setNewNote((prev) => {
                      return { ...prev, description: e.target.value };
                    });
                  }}
                ></textarea>
              </div>

              <div className="px-5 py-4 border-t border-slate-100 flex justify-end gap-3 bg-white/50">
                <button
                  className="p-2.5 rounded-xl bg-slate-800 text-white shadow-sm hover:bg-slate-700 hover:shadow-md transition-all duration-200 focus:ring-2 focus:ring-slate-400 focus:outline-none cursor-pointer"
                  aria-label="Edit note"
                  onClick={() => {
                    if (!isEditing) {
                      setEditingId(note._id);
                      setNewNote({
                        title: note.title,
                        description: note.description,
                      });
                    } else {
                      if (
                        newNote.title === note.title &&
                        newNote.description === note.description
                      ) {
                        setEditingId(null);
                        return;
                      }
                      edit(note._id, newNote);
                    }
                  }}
                >
                  <Edit2 size={16} />
                </button>

                <button
                  className="p-2.5 rounded-xl bg-white border border-slate-200 text-rose-500 shadow-sm hover:bg-rose-50 hover:border-rose-200 hover:shadow-md transition-all duration-200 focus:ring-2 focus:ring-rose-200 focus:outline-none cursor-pointer"
                  aria-label="Delete note"
                  onClick={() => del(note._id)}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          ></div>

          <div className="relative w-full max-w-lg bg-slate-50 rounded-2xl shadow-2xl shadow-slate-900/20 border border-slate-200 overflow-hidden transform transition-all animate-in fade-in zoom-in-95 duration-200">
            <div className="bg-slate-800 px-6 py-4 flex items-center justify-between">
              <h3 className="text-lg font-medium text-slate-100 tracking-wide">
                Create New Note
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-white transition-colors cursor-pointer p-1 rounded-md hover:bg-slate-700/50"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 space-y-5">
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  placeholder="e.g., Weekly Groceries"
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-all"
                  onChange={(e) => {
                    setNewNote((prev) => {
                      return { ...prev, title: e.target.value };
                    });
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  rows="4"
                  placeholder="Write your thoughts here..."
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-all resize-none"
                  onChange={(e) => {
                    setNewNote((prev) => {
                      return { ...prev, description: e.target.value };
                    });
                  }}
                ></textarea>
              </div>
            </div>

            <div className="px-6 py-4 bg-slate-100/50 border-t border-slate-200 flex justify-end gap-3">
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setNewNote({
                    title: "",
                    description: "",
                  });
                }}
                className="px-5 py-2.5 rounded-xl font-medium text-slate-600 hover:bg-slate-200 hover:text-slate-800 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={(e) => {
                  add(newNote);
                  setIsModalOpen(false);
                }}
                className="px-5 py-2.5 rounded-xl font-medium bg-slate-800 text-slate-50 shadow-md hover:bg-slate-700 hover:shadow-lg transition-all cursor-pointer"
              >
                Save Note
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notes;
