import axios from "axios";


// export default async function handler(req, res) {
//   try {
//     // Fetch data from the Node.js Express backend
//     const response = await axios.get("http://localhost:4000/");
//     res.status(200).json(response.data);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching data from backend" });
//   }
// }
export async function GET() {
  const response = await axios.get("http://localhost:4000/");
  const obj1= Response.json(response.data);
  return obj1;
}