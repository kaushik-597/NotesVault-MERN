const BASE_URL = "http://localhost:3000/api/v1/notes";

const getNotes = async () => {
  const response = await fetch(`${BASE_URL}/fetchAll`);
  const data = await response.json();
  // console.log(data.data);
  return data.data;
};

const addNote = async (note) => {
  const response = await fetch(`${BASE_URL}/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(note),
  });

  const data = await response.json();
  return data.data;
};

const delNote = async (id) => {
  const response = await fetch(`${BASE_URL}/del/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data.data;
};

const editNote = async (id, note) => {
  const response = await fetch(`${BASE_URL}/edit/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(note),
  });

  const data = await response.json();
  return data.data;
};

export { getNotes, delNote, addNote, editNote };
