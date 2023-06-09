import { RouterProvider } from "react-router-dom";
import { router } from "./routes/root";
import "./App.css";
import 'react-tabs/style/react-tabs.css';

export default function App() {
  return <RouterProvider router={router} />;
}
