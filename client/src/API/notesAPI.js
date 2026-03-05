const BASE_URL = "http://localhost:3000/api/v1/notes";

const getNotes = async () => {
  const response = await fetch(`${BASE_URL}/fetchAll`);
  const data = await response.json();
  return data.data;
};

const addNote = async (note) => {
  const response = await fetch(`${BASE_URL}/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(note),
  });
};
