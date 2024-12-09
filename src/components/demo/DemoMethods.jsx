import * as React from "react";
import union from "/Images/Union.png";
import Group21 from "/Images/Group 21.png";

export default function DemoMethods() {
  return (
    <div className="h-fit space-y-4">
      {/* Hero Section */}
      <div
        className="relative w-full h-[120vh] md:h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${union})` }}
      >
        <div className="absolute top-[15%] md:top-[25%] inset-x-0 flex flex-col items-center text-center px-4 space-y-4">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-Archivo text-black">
            Various methods to engage
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-black font-Archivo">
            Generate images and videos using a range of integrations and plugins
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 py-6">
            {[
              { src: "/Images/code 1.svg", label: "API" },
              { src: "/Images/asterisk (1) 1..svg", label: "Zapier" },
              { src: "/Images/Group 28.svg", label: "Airtable" },
              { src: "/Images/google-forms 1.svg", label: "Forms" },
              { src: "/Images/url 1.svg", label: "URL" },
            ].map((icon, index) => (
              <div
                key={index}
                className={`flex flex-col items-center bg-white border border-black p-4 rounded-xl 
                `
              }
              >
                <img
                  src={icon.src}
                  alt={icon.label}
                  className="w-16 h-16 md:w-24 md:h-24"
                />
                <h1 className="text-sm md:text-base font-bold mt-2">
                  {icon.label}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8 bg-gray-50 text-center">
        {[
          { value: "100+", description: "Pre-made designs" },
          { value: "2K+", description: "Users automated with us" },
          { value: "500+", description: "Generated images" },
        ].map((stat, index) => (
          <div key={index}>
            <h1 className="text-2xl md:text-4xl font-bold text-black">
              {stat.value}
            </h1>
            <p className="text-sm md:text-lg text-black">{stat.description}</p>
          </div>
        ))}
      </div>

      {/* Use Cases Section */}
      <div
        className="relative py-12"
        style={{
          backgroundImage: `url(${Group21})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-500">
            Craftly
          </h1>
          <p className="mt-4 text-xl md:text-3xl font-bold text-black">
            Use Cases
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-16">
          {[
            { src: "image 44.svg" },
            { src: "pinterest_logo_icon_147250 1.svg" },
            { src: "twitter.svg" },
            { src: "mail.svg" },
            { src: "image 41.svg" },
            { src: "reel 1.svg" },
            { src: "image 42.svg" },
          ].map((icon, index) => (
            <img
              key={index}
              src={`/Images/${icon.src}`}
              alt="Use Case"
              className="w-16 h-16 md:w-24 md:h-24 object-cover mx-auto"
            />
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-12">
        {[
          { bgColor: "bg-yellow-300", text: "Generate Images via API/ Zapier" },
          { bgColor: "bg-blue-500", text: "Watermark Videos via API/Zapier" },
          { bgColor: "bg-yellow-300", text: "Generate PDFs via API/Zapier" },
          { bgColor: "bg-blue-500", text: "E-Mail Marketing" },
          { bgColor: "bg-yellow-300", text: "Social media" },
          { bgColor: "bg-blue-500", text: "Sales and Outreach" },
        ].map((feature, index) => (
          <div
            key={index}
            className={`flex items-center justify-center p-4 ${feature.bgColor} border-r-2 border-b-2 border-black rounded-xl`}
          >
            <h1 className="text-sm md:text-lg text-black text-center">
              {feature.text}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}
