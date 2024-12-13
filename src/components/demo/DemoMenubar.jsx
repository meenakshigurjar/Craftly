import { useState } from "react";
import { Button } from "../ui/button";

export default function DemoSidebarMenu() {
  const menuItems = ["Products", "Demos", "Resources", "Pricing"];
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="flex flex-col md:flex-row items-center justify-between p-4 relative">
      <div className="flex items-center justify-between w-full md:w-auto">
      <button
          className="md:hidden flex items-center justify-center p-2 rounded-lg border border-gray-300"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          aria-label="Toggle Menu"
        >
          ☰ {/* Hamburger Icon */}
        </button>
        <h1 className="font-[Archivo] text-[24px] md:text-[30px]">CRAFTLY</h1>
        <Button
          className="text-white w-[90px] h-[36px] transition duration-200 hover:bg-blue-600 ml-4 md:hidden"
          style={{
            border: "2px solid white",
            borderRadius: "120px",
            backgroundColor: "#496AF1",
          }}
        >
          Sign In
        </Button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-white text-black transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold">Menu</h2>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-black text-2xl"
            aria-label="Close Menu"
          >
            ×
          </button>
        </div>
        <ul className="flex flex-col mt-6 px-4 space-y-4">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="text-lg font-medium cursor-pointer hover:text-gray-700"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>


      {/* //////////////////////////////// */}


      <nav className="hidden md:flex flex-1 justify-center space-x-8">
        {menuItems.map((item, index) => (
          <span
            key={index}
            className="text-black cursor-pointer text-lg hover:text-blue-600"
          >
            {item}
          </span>
        ))}
      </nav>

      
      <div className="hidden md:flex">
        <button
          className="text-white px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 transition"
        >
          Sign In
        </button>
      </div>
    </header>
  );
}
