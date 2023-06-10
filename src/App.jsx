import { RouterProvider } from "react-router-dom";
import { router } from "./routes/root";
import "./App.css";
import "react-tabs/style/react-tabs.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./Context/AuthProvider";

export default function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster position="top-center" reverseOrder={false} />
    </AuthProvider>
  );
}
