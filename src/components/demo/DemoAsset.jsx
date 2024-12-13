import * as React from "react";
import { Button } from "@/components/ui/button";
import union from "/Images/Union.png";

export default function DemoAsset() {
  const footerData = [
    {
      title: "Use Cases",
      items: [
        "Generate Images via API",
        "Watermark Videos via API",
        "Generate PDFs via API",
        "Generate Images with Zapier",
        "Watermark Videos with Zapier",
        "Generate PDFs with Zapier",
        "More Use Cases",
      ],
    },
    {
      title: "Products",
      items: [
        "Image Generation API",
        "Multi Image Generation API",
        "Video Generation API",
        "PDF Generation API",
        "Template Library",
        "Template Library",
      ],
    },
    {
      title: "Integration",
      items: [
        "Airtable Integration",
        "Zapier Integration",
        "Integromat Integration",
        "Forms",
        "URLS",
        "WordPress",
      ],
    },
    {
      title: "Demos",
      items: [
        "Multi Image Demo",
        "AI Face Detect Demo",
        "Twitter to Instagram",
        "Real Estate Demo",
        "Github Social",
        "Open Graph",
        "Smart Crop Demo",
        "Online Certificate Maker",
        "Online Wedding Invite Maker",
        "Online Event ID Card Maker",
        "Online Photo Collage Maker",
        "Online Invoice Maker",
      ],
    },
    {
      title: "Docs & Guides",
      items: [
        "Help Articles",
        "Blog",
        "eBooks",
        "API Quick Start",
        "API Reference",
      ],
    },
  ];
  return (
    <div className="h-fit">
      {/* Hero Section */}
      <div
  className="relative w-full h-[100vh] md:h-[80vh] sm:h-[20vh] bg-cover bg-center"
  style={{ backgroundImage: `url(${union})` }}
>
  {/* Main Content Wrapper */}
  <div className="absolute top-[15%] md:top-[25%] inset-x-0 flex flex-col items-center text-center px-4 space-y-8">
    {/* Heading */}
    <h1 className="text-2xl md:text-4xl lg:text-5xl font-Archivo text-black">
      Slow asset production is killing your growth. Unlock your true potential now.
    </h1>

    {/* Button Wrapper */}
    <div className=" w-[90%] sm:w-[200px] md:w-[300px] lg:w-[300px] 
      h-[60px] sm:h-[70px] md:h-[80px] lg:h-[90px] 
       flex justify-center">
      <Button
        className="text-white flex items-center justify-center w-full h-full 
          text-[16px] sm:text-[20px] md:text-[24px] lg:text-[30px] mx-auto"
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
        {footerData.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col h-fit ${
              section.title === "Demos"
                ? "md:h-[708px]"
                : section.title === "Use Cases"
                ? "md:h-[496px]"
                : section.title === "Products" || section.title === "Integration"
                ? "md:h-[437px]"
                : "md:h-[378px]"
            }`}
          >
            <div className="text-white text-[30px]/[79px] font-Archivo">
              {section.title}
            </div>
            {section.items.map((item, idx) => (
              <div
                key={idx}
                className="text-[#FFFFFF61] font-medium font-Inter text-[20px]/[59px]"
              >
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
