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
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-5">
      <div className="flex items-center space-x-4">
        <h1 className="font-[Archivo] text-[24px] md:text-[30px] tracking-[0.02em]">
          CRAFTLY
        </h1>
      </div>

      <Menubar
        className="bg-white text-black flex flex-wrap justify-center md:justify-evenly space-x-2 md:space-x-3 w-full md:w-[562px] h-[40px] mt-4 md:mt-0 rounded-lg shadow-md"
        style={{ border: "2px solid white" }}
      >
        <MenubarMenu className="flex space-x-2 md:space-x-3">
          <MenubarTrigger className="font-[Archivo] text-[16px] md:text-[20px] w-[70px] md:w-[90px] h-full">
            Products
          </MenubarTrigger>
          <MenubarTrigger className="font-[Archivo] text-[16px] md:text-[20px] w-[70px] md:w-[90px] h-full">
            Demos
          </MenubarTrigger>
          <MenubarTrigger className="font-[Archivo] text-[16px] md:text-[20px] w-[70px] md:w-[90px] h-full">
            Resources
          </MenubarTrigger>
          <MenubarTrigger className="font-[Archivo] text-[16px] md:text-[20px] w-[70px] md:w-[90px] h-full">
            Pricing
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>

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
