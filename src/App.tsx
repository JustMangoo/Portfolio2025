import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <div className="bg-secondary text-primary min-h-screen font-regular text-base md:text-xl">
      <Navigation />
      <Outlet />
    </div>
  );
}
