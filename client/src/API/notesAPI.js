const BASE_URL = "http://localhost:3000/api/v1/notes";

const getNotes = async () => {
  const response = await fetch(`${BASE_URL}/fetchAll`);
  const data = await response.json();
  // console.log(data.data);
  return data.data;
};

export { getNotes };
