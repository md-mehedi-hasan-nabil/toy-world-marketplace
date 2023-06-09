import { RouterProvider } from "react-router-dom";
import { router } from "./routes/root";
import "./App.css";

export default function App() {
  return <RouterProvider router={router} />;
}
