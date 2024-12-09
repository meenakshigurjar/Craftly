import { useState } from "react";
import { Menubar, MenubarMenu } from "@/components/ui/menubar";
import { Button } from "../ui/button";
import { MenubarTrigger } from "@radix-ui/react-menubar";

export default function DemoMenubar() {
  const menuItems = [
    { name: "Products" },
    { name: "Demos" },
    { name: "Resources" },
    { name: "Pricing" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex md:flex-row items-center justify-between p-5">
      {/* Logo Section */}
      <div className="flex items-center space-x-4">
      <button
        className="md:hidden flex items-center justify-center p-2 rounded-lg border border-gray-300"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰ {/* Hamburger Icon */}
      </button>
       
      </div>

      {/* Hamburger Menu Button */}
      <h1 className="font-[Archivo] text-[24px] md:text-[30px] tracking-[0.02em]">
          CRAFTLY
        </h1>

      {/* Menubar */}
      <Menubar
        className={`bg-white text-black flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-3 w-full mt-4 md:mt-0 rounded-lg shadow-md ${
          isMenuOpen ? "block" : "hidden"
        } md:flex`}
        style={{ border: "2px solid white" }}
      >
        <MenubarMenu>
          {menuItems.map((item, index) => (
            <MenubarTrigger
              key={index}
              className="flex items-center py-2 px-4 sm:px-6 md:px-8"
            >
              {item.name}
            </MenubarTrigger>
          ))}
        </MenubarMenu>
      </Menubar>

      {/* Sign In Button */}
      <div className="mt-4 md:mt-0">
        <Button
          className="text-white w-full md:w-[143px] h-[42px] transition duration-200 hover:bg-blue-600"
          style={{
            border: "2px solid white",
            borderRadius: "120px",
            backgroundColor: "#496AF1",
          }}
        >
          Sign In
        </Button>
      </div>
    </div>
  );
}
