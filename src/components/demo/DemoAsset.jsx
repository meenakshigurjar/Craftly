import * as React from "react";
import { Button } from "@/components/ui/button";
import union from "/Images/Union.png";

export default function DemoAsset() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative w-full h-[130vh] bg-cover bg-center -p-0 -m-0"
        style={{ backgroundImage: `url(${union})` }}
      >
        <div className="absolute top-[150px] inset-x-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-black text-[30px] sm:text-[40px] lg:text-[50px] font-Archivo w-full max-w-[90%] text-center">
            Slow asset production is killing your growth. Unlock your true
            potential now.
          </h1>

          <div className="absolute w-[90%] sm:w-[500px] h-[118px] top-[450px] sm:top-[500px] sm:left-[10%] lg:left-[20%]">
            <Button
              className="text-white w-full h-full text-center flex items-center text-[20px] sm:text-[24px] lg:text-[34px] mx-auto"
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
      <div className="flex flex-col items-center justify-center bg-black p-8 mb-[100px]">
        <div className="flex flex-wrap justify-evenly gap-y-8 gap-x-4 mb-[100px]">
          <div className="flex flex-col h-fit md:h-[496px]">
            <div className="text-[30px]/[79px] font-Archivo text-[#FFFFFF61]">
              Use Cases
            </div>
            <div className="text-white font-medium font-Inter text-[20px]/[59px]">
              Generate Images via API
            </div>
            <div className="text-white font-medium font-Inter text-[20px]/[59px]">
              Watermark Videos via API
            </div>
            <div className="text-white font-medium font-Inter text-[20px]/[59px]">
              Generate PDFs via API
            </div>
            <div className="text-white font-medium font-Inter text-[20px]/[59px]">
              Generate Images with Zapier
            </div>
            <div className="text-white font-medium font-Inter text-[20px]/[59px]">
              Watermark Videos with Zapier
            </div>
            <div className="text-white font-medium font-Inter text-[20px]/[59px]">
              Generate PDFs with Zapier
            </div>
            <div className="text-white font-medium font-Inter text-[20px]/[59px]">
              More Use Cases
            </div>
          </div>
          <div className="flex flex-col h-fit md:h-[437px]">
            <div className="text-[30px]/[79px] font-Archivo text-[#FFFFFF61]">
              Products
            </div>
            <div className="text-white font-medium font-Inter text-[20px]/[59px]">
              Image Generation API
            </div>
            <div className="text-white font-medium font-Inter text-[20px]/[59px]">
              Multi Image Generation API
            </div>
            <div className="text-white font-medium font-Inter text-[20px]/[59px]">
              Video Generation API
            </div>
            <div className="text-white font-medium font-Inter text-[20px]/[59px]">
              PDF Generation API
            </div>
            <div className="text-white font-medium font-Inter text-[20px]/[59px]">
              Template Library
            </div>
            <div className="text-white font-medium font-Inter text-[20px]/[59px]">
              Template Library
            </div>
          </div>
          <div className="flex flex-col  h-fit md:h-[437px]">
            <div className="text-[30px]/[79px] font-Archivo text-[#FFFFFF61]">
              Integration
            </div>
            <div className="text-white font-medium font-Inter text-[20px]/[59px]">
              Airtable Integration
            </div>
            <div className="text-white font-medium font-Inter text-[20px]/[59px]">
              Zapier Integration
            </div>
            <div className="text-white font-medium font-Inter text-[20px]/[59px]">
              Integromat Integration
            </div>
            <div className="text-white font-medium font-Inter text-[20px]/[59px]">
              Forms
            </div>
            <div className="text-white font-medium font-Inter text-[20px]/[59px]">
              URLS
            </div>
            <div className="text-white font-medium font-Inter text-[20px]/[59px]">
              WordPress
            </div>
          </div>
          <div className="flex flex-col  h-fit md:h-[708px]">
            <div className="text-[30px]/[79px] font-Archivo text-[#FFFFFF61]">
              Demos
            </div>
            <div className="text-white font-medium font-Inter text-[20px]/[59px]">
              Multi Image Demo
            </div>
            <div className="text-white font-medium font-Inter text-[20px]/[59px]">
              Al Face Detect Demo
            </div>
            <div className="text-white font-medium font-Inter text-[20px]/[59px]">
              Twitter to Instagram
            </div>
            <div className="text-white font-medium font-Inter text-[20px]/[59px]">
              Real Estate Demo
            </div>
            <div className="text-white font-medium font-Inter text-[20px]/[59px]">
              Github Social
            </div>
            <div className="text-white font-medium font-Inter text-[20px]/[59px]">
              Open Graph
            </div>
            <div className="text-white font-medium font-Inter text-[20px]/[59px]">
              Smart Crop Demo
            </div>
            <div className="text-white font-medium font-Inter text-[20px]/[59px]">
              Online Certificate Maker
            </div>
            <div className="text-white font-medium font-Inter text-[20px]/[59px]">
              Online Wedding Invite Maker
            </div>
            <div className="text-white font-medium font-Inter text-[20px]/[59px]">
              Online Event ID Card Maker
            </div>
            <div className="text-white font-medium font-Inter text-[20px]/[59px]">
              Online Photo Collage Maker
            </div>
            <div className="text-white font-medium font-Inter text-[20px]/[59px]">
              Online Invoice Maker
            </div>
          </div>
          <div className="flex flex-col  h-fit md:h-[378px]">
            <div className="text-[30px]/[79px] font-Archivo text-[#FFFFFF61]">
              Docs & Guides
            </div>
            <div className="text-white font-medium font-Inter text-[20px]/[59px]">
              Help Articles
            </div>
            <div className="text-white font-medium font-Inter text-[20px]/[59px]">
              Blog
            </div>
            <div className="text-white font-medium font-Inter text-[20px]/[59px]">
              eBooks
            </div>
            <div className="text-white font-medium font-Inter text-[20px]/[59px]">
              API Quick Start
            </div>
            <div className="text-white font-medium font-Inter text-[20px]/[59px]">
              API Reference
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
