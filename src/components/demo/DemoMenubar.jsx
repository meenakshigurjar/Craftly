
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
    <div className="flex flex-col md:flex-row items-center justify-center p-2">
      {/* Header Section for Small Screens */}
      <div className="flex items-center justify-center w-[148px] space-x-2">
        {/* Logo */}
        <h1 className="font-[Archivo] text-[24px] md:text-[30px] text-left">
          CRAFTLY
        </h1>

        {/* Hamburger Button */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-lg border border-gray-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          ☰ {/* Hamburger Icon */}
        </button>

        {/* Sign In Button */}
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

      {/* Menubar */}
      <Menubar
  className={`bg-white text-black grid md:mt-0 rounded-lg transition-all duration-200 ${
    isMenuOpen ? "grid-cols-2" : "hidden"
  } md:flex md:flex-row mx-auto`}
  style={{ border: "none", width: "fit-content" }}
>
  <MenubarMenu>
    {menuItems.map((item, index) => (
      <MenubarTrigger
        key={index}
        className="flex items-center justify-center py-2 px-4 sm:px-6 md:px-8 text-sm sm:text-base"
      >
        {item.name}
      </MenubarTrigger>
    ))}
  </MenubarMenu>
</Menubar>


      {/* Sign In Button for Larger Screens */}
      <div className="hidden md:flex mt-6 lg:mt-auto items-center">
        <Button
          className="text-white w-[143px] h-[42px] transition duration-200 hover:bg-blue-600 ml-4"
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