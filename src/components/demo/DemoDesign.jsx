import * as React from "react";
import { Button } from "@/components/ui/button";

export default function DemoCard() {
  return (
    <div>
      <div className="w-full h-full mt-20 bg-black rounded-t-[200px] p-5 flex items-center justify-start">
        <div className="space-y-6 max-w-[50%]">
          <h1 className="font-archivo text-4xl md:text-5xl text-white text-left">
            Design & Built
          </h1>
          <h1 className="font-archivo text-4xl md:text-5xl font-bold text-white text-left">
            Using Craftly
          </h1>
          <p className="font-archivo text-lg md:text-xl text-white text-left">
            Around 100+ templates, 2k users, 500+ images have been designed and
            built using Craftly
          </p>
          <Button
            className="mt-6 text-black text-lg md:text-xl px-8 py-4 flex items-center justify-center"
            style={{
              fontFamily: "Archivo",
              borderBottom: "4px solid black",
              borderRadius: "120px",
              backgroundColor: "#F3FE00",
            }}
          >
            Get Started
          </Button>
        </div>
        <div className="flex justify-end mt-5">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            <img
              src="/Images/Instagram post - 16.svg"
              alt="Additional Image"
              className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] object-cover mx-auto transform translate-y-[-10px]"
            />
            <img
              src="/Images/Instagram post - 10.svg"
              alt="Additional Image"
              className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] object-cover mx-auto transform translate-y-[10px]"
            />
            <img
              src="/Images/Instagram post - 13.svg"
              alt="Additional Image"
              className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] object-cover mx-auto transform translate-y-[-10px]"
            />
            <img
              src="/Images/Instagram post - 12.svg"
              alt="Additional Image"
              className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] object-cover mx-auto transform translate-y-[10px]"
            />
            <img
              src="/Images/Instagram post - 2.svg"
              alt="Additional Image"
              className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] object-cover mx-auto transform translate-y-[-10px]"
            />
            <img
              src="/Images/Instagram post - 7.svg"
              alt="Additional Image"
              className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] object-cover mx-auto transform translate-y-[10px]"
            />
            <img
              src="/Images/Instagram post - 9.svg"
              alt="Additional Image"
              className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] object-cover mx-auto transform translate-y-[-10px]"
            />
            <img
              src="/Images/Instagram post - 8.svg"
              alt="Additional Image"
              className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] object-cover mx-auto transform translate-y-[10px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
