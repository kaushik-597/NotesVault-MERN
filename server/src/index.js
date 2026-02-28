import { app } from "./app.js";
const port = process.env.PORT;

try {
  app.listen(port, () => {
    console.log(`Server is listening to http://localhost:${port}`);
  });
} catch (error) {
  console.log(error, "Server not listening :X");
}
