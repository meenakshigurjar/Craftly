import * as React from "react";
import { Button } from "@/components/ui/button";
import union from "/Images/Union.png";

export default function DemoAsset() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative w-full top-[-73px] h-[800px] bg-cover bg-center -p-0 -m-0"
        style={{ backgroundImage: `url(${union})` }}
      >
        <div className="absolute top-[150px] inset-x-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-black text-[50px] font-Archivo w-full max-w-[90%] text-center">
            Slow asset production is killing your growth Unlock your true
            potential now *
          </h1>

          <div className="absolute w-[500px] h-[118px] top-[300px] left-[15%] sm:left-[30%]">
            <Button
              className="text-white w-full h-full text-center flex items-center text-[34px] mx-auto"
              style={{
                fontFamily: "Archivo",
                borderBottom: "4px solid black",
                borderRadius: "120px",
                backgroundColor: "#496AF1",
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="w-full h-auto bg-[#000000] mt-[-145px]">
        <div className="flex flex-wrap justify-center lg:justify-between gap-4 pt-[160px] pb-[80px]">
          <div className="w-full sm:w-[200px]">
            <img
              src="/Images/footer1.png"
              alt="Rating"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="w-full sm:w-[200px]">
            <img
              src="/Images/footer2.png"
              alt="Rating"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="w-full sm:w-[200px]">
            <img
              src="/Images/footer3.png"
              alt="Rating"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="w-full sm:w-[200px]">
            <img
              src="/Images/footer4.png"
              alt="Rating"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="w-full sm:w-[200px]">
            <img
              src="/Images/footer5.png"
              alt="Rating"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
