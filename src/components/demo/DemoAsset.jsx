import * as React from "react";
import { Button } from "@/components/ui/button";
import union from "/Images/Union.png";

export default function DemoAsset() {
  return (
    <div>
      {/* Hero Section */}
      <div
  className="relative w-full h-[100vh] bg-cover bg-center"
  style={{ backgroundImage: `url(${union})` }}
>
  {/* Main Content Wrapper */}
  <div className="absolute top-[200px] inset-x-0 flex flex-col items-center text-center px-4">
    {/* Heading */}
    <h1 className="text-black font-Archivo text-center w-full max-w-[90%] 
      text-[20px] sm:text-[24px] md:text-[30px] lg:text-[50px] leading-tight">
      Slow asset production is killing your growth. Unlock your true potential now.
    </h1>

    {/* Button Wrapper */}
    <div className="absolute w-[90%] sm:w-[300px] md:w-[400px] lg:w-[400px] 
      h-[60px] sm:h-[70px] md:h-[90px] lg:h-[98px] 
      top-[200px] sm:top-[150px] lg:top-[300px] flex justify-center">
      <Button
        className="text-white flex items-center justify-center w-full h-full 
          text-[16px] sm:text-[20px] md:text-[24px] lg:text-[34px] mx-auto"
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
            <div className="text-white text-[30px]/[79px] font-Archivo ">
              Use Cases
            </div>
            <div className="text-[#FFFFFF61] font-medium font-Inter text-[20px]/[59px]">
              Generate Images via API
            </div>
            <div className="text-[#FFFFFF61] font-medium font-Inter text-[20px]/[59px]">
              Watermark Videos via API
            </div>
            <div className="text-[#FFFFFF61] font-medium font-Inter text-[20px]/[59px]">
              Generate PDFs via API
            </div>
            <div className="text-[#FFFFFF61] font-medium font-Inter text-[20px]/[59px]">
              Generate Images with Zapier
            </div>
            <div className="text-[#FFFFFF61] font-medium font-Inter text-[20px]/[59px]">
              Watermark Videos with Zapier
            </div>
            <div className="text-[#FFFFFF61] font-medium font-Inter text-[20px]/[59px]">
              Generate PDFs with Zapier
            </div>
            <div className="text-[#FFFFFF61] font-medium font-Inter text-[20px]/[59px]">
              More Use Cases
            </div>
          </div>
          <div className="flex flex-col h-fit md:h-[437px]">
            <div className="text-white text-[30px]/[79px] font-Archivo ">
              Products
            </div>
            <div className="text-[#FFFFFF61] font-medium font-Inter text-[20px]/[59px]">
              Image Generation API
            </div>
            <div className="text-[#FFFFFF61] font-medium font-Inter text-[20px]/[59px]">
              Multi Image Generation API
            </div>
            <div className="text-[#FFFFFF61] font-medium font-Inter text-[20px]/[59px]">
              Video Generation API
            </div>
            <div className="text-[#FFFFFF61] font-medium font-Inter text-[20px]/[59px]">
              PDF Generation API
            </div>
            <div className="text-[#FFFFFF61] font-medium font-Inter text-[20px]/[59px]">
              Template Library
            </div>
            <div className="text-[#FFFFFF61] font-medium font-Inter text-[20px]/[59px]">
              Template Library
            </div>
          </div>
          <div className="flex flex-col  h-fit md:h-[437px]">
            <div className="text-white text-[30px]/[79px] font-Archivo">
              Integration
            </div>
            <div className="text-[#FFFFFF61] font-medium font-Inter text-[20px]/[59px]">
              Airtable Integration
            </div>
            <div className="text-[#FFFFFF61] font-medium font-Inter text-[20px]/[59px]">
              Zapier Integration
            </div>
            <div className="text-[#FFFFFF61] font-medium font-Inter text-[20px]/[59px]">
              Integromat Integration
            </div>
            <div className="text-[#FFFFFF61] font-medium font-Inter text-[20px]/[59px]">
              Forms
            </div>
            <div className="text-[#FFFFFF61] font-medium font-Inter text-[20px]/[59px]">
              URLS
            </div>
            <div className="text-[#FFFFFF61] font-medium font-Inter text-[20px]/[59px]">
              WordPress
            </div>
          </div>
          <div className="flex flex-col  h-fit md:h-[708px]">
            <div className="text-white text-[30px]/[79px] font-Archivo">
              Demos
            </div>
            <div className="text-[#FFFFFF61] font-medium font-Inter text-[20px]/[59px]">
              Multi Image Demo
            </div>
            <div className="text-[#FFFFFF61] font-medium font-Inter text-[20px]/[59px]">
              Al Face Detect Demo
            </div>
            <div className="text-[#FFFFFF61] font-medium font-Inter text-[20px]/[59px]">
              Twitter to Instagram
            </div>
            <div className="text-[#FFFFFF61] font-medium font-Inter text-[20px]/[59px]">
              Real Estate Demo
            </div>
            <div className="text-[#FFFFFF61] font-medium font-Inter text-[20px]/[59px]">
              Github Social
            </div>
            <div className="text-[#FFFFFF61] font-medium font-Inter text-[20px]/[59px]">
              Open Graph
            </div>
            <div className="text-[#FFFFFF61] font-medium font-Inter text-[20px]/[59px]">
              Smart Crop Demo
            </div>
            <div className="text-[#FFFFFF61] font-medium font-Inter text-[20px]/[59px]">
              Online Certificate Maker
            </div>
            <div className="text-[#FFFFFF61] font-medium font-Inter text-[20px]/[59px]">
              Online Wedding Invite Maker
            </div>
            <div className="text-[#FFFFFF61] font-medium font-Inter text-[20px]/[59px]">
              Online Event ID Card Maker
            </div>
            <div className="text-[#FFFFFF61] font-medium font-Inter text-[20px]/[59px]">
              Online Photo Collage Maker
            </div>
            <div className="text-[#FFFFFF61] font-medium font-Inter text-[20px]/[59px]">
              Online Invoice Maker
            </div>
          </div>
          <div className="flex flex-col  h-fit md:h-[378px]">
            <div className="text-white text-[30px]/[79px] font-Archivo">
              Docs & Guides
            </div>
            <div className="text-[#FFFFFF61] font-medium font-Inter text-[20px]/[59px]">
              Help Articles
            </div>
            <div className="text-[#FFFFFF61] font-medium font-Inter text-[20px]/[59px]">
              Blog
            </div>
            <div className="text-[#FFFFFF61] font-medium font-Inter text-[20px]/[59px]">
              eBooks
            </div>
            <div className="text-[#FFFFFF61] font-medium font-Inter text-[20px]/[59px]">
              API Quick Start
            </div>
            <div className="text-[#FFFFFF61] font-medium font-Inter text-[20px]/[59px]">
              API Reference
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
