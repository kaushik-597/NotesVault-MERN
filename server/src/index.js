import { app } from "./app.js";
import { connectDB } from "./db/db.js";
const port = process.env.PORT;

try {
  await connectDB();
  app.listen(port, () => {
    console.log(`Server is listening to http://localhost:${port}`);
  });
} catch (error) {
  console.log(error, "Server not listening :X");
}
