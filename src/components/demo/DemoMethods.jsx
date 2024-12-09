import * as React from "react";
import union from "/Images/Union.png";
import Group21 from "/Images/Group 21.png";

export default function DemoMain() {
  return (
    <div className="space-y-4 gap-8">
      {/* Hero Section */}
      <div
        className="relative w-full h-[745px] bg-cover bg-center -p-0 -m-0"
        style={{ backgroundImage: `url(${union})` }}
      >
        <div className="absolute top-[200px] inset-x-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-Archivo text-black">
            Various methods to engage
          </h1>
          <p className="text-lg md:text-xl text-black mt-2.5 font-Archivo">
            Generate images and videos using a range of integrations and plugins
          </p>
          <div className="flex flex-wrap justify-evenly py-10 gap-4">
            {[
              { src: "/Images/code 1.svg", label: "API" },
              { src: "/Images/asterisk (1) 1..svg", label: "Zapier" },
              { src: "/Images/Group 28.svg", label: "Airtable" },
              { src: "/Images/google-forms 1.svg", label: "Forms" },
              { src: "/Images/url 1.svg", label: "URL" },
            ].map((icon, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-[200px] h-[190px] p-12 bg-white border border-black rounded-xl flex flex-col items-center">
                  <img src={icon.src} alt={icon.label} className="w-24 h-24" />
                </div>
                <div className="text-center mt-2">
                  <h1 className="text-lg font-bold">{icon.label}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-around py-12 bg-gray-50">
        {[
          { value: "100+", description: "Pre-made designs" },
          { value: "2K+", description: "Users automated with us" },
          { value: "500+", description: "Generated images" },
        ].map((stat, index) => (
          <div key={index} className="text-center">
            <h1 className="text-4xl font-bold text-black">{stat.value}</h1>
            <p className="text-lg text-black">{stat.description}</p>
          </div>
        ))}
      </div>

      <div
        className="relative py-12"
        style={{
          backgroundImage: `url(${Group21})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold text-blue-500">Craftly</h1>
          <p className="mt-4 text-3xl font-bold text-black">Use Cases</p>
        </div>

        <div className="relative h-full w-full">
          {[
            { src: "image 44.svg", position: "top-15 left-60" },
            {
              src: "pinterest_logo_icon_147250 1.svg",
              position: "top-10 right-20",
            },
            { src: "twitter.svg", position: "top-40 left-10" },
            { src: "mail.svg", position: "bottom-20 right-24" },
            { src: "image 41.svg", position: "bottom-24 left-14" },
            {
              src: "reel 1.svg",
              position: "bottom-10 left-1/2 transform -translate-x-1/2",
            },
            { src: "image 42.svg", position: "bottom-20 right-20" },
          ].map((icon, index) => (
            <img
              key={index}
              src={`/Images/${icon.src}`}
              alt="Use Case"
              className={`absolute ${icon.position} w-[100px] h-[100px] object-cover`}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-between gap-6 py-12">
  {[
    {
      bgColor: "bg-yellow-300",
      text: "Generate Images via API/ Zapier",
    },
    {
      bgColor: "bg-blue-500",
      text: "Watermark Videos via API/Zapier",
    },
    {
      bgColor: "bg-yellow-300",
      text: "Generate PDFs via API/Zapier",
    },
    {
      bgColor: "bg-blue-500",
      text: "E-Mail Marketing",
    },
    {
      bgColor: "bg-yellow-300",
      text: "Social media",
    },
    {
      bgColor: "bg-blue-500",
      text: "Sales and Outreach",
    },
  ].map((feature, index) => (
    <div
      key={index}
      className={`flex items-center justify-center p-4 w-full sm:w-[48%] md:w-[30%] h-[150px] ${feature.bgColor} border-r-2 border-b-2 border-black rounded-xl`}
    >
      <h1 className="text-xl text-black text-center">{feature.text}</h1>
    </div>
  ))}
</div>

    </div>
  );
}
