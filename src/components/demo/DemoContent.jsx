import * as React from "react";
import Vector2 from "/Images/Vector2.svg";
import Vector3 from "/Images/Vector3.svg";
import Frame from "/Images/Frame.png";
import image27 from "/Images/image 27.svg";
import image28 from "/Images/image 28.svg";

export default function DemoContent() {
  return (
    <div>
      <div className="relative justify-center mt-4 p-6 md:p-16 lg:p-20">
        <div className="flex items-center justify-center h-auto w-full max-w-3xl mx-auto mb-2">
          <h1 className="font-archivo text-5xl md:text-6xl lg:text-7xl tracking-[0.02em] text-center">
            10X
          </h1>
          <span className="font-archivo text-3xl md:text-4xl lg:text-5xl tracking-extra-tight text-center">
            your asset creation speed
          </span>
        </div>

        <div className="absolute flex items-center justify-center h-auto w-full max-w-3xl mx-auto top-[200px] left-1/2 transform -translate-x-1/2 space-x-1">
          <h1 className="font-archivo text-5xl md:text-6xl lg:text-7xl tracking-[0.02em] text-center">
            <span className="text-[#496AF1]">With Craftly</span>
          </h1>
        </div>
      </div>

      <div className="relative">
        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center justify-between p-2 md:p-4 mt-[200px]">
          {/* Text Section */}
          <div className="flex flex-col justify-start mb-4 md:mb-0 w-full md:w-1/2">
            <h1 className="font-archivo text-[20px] md:text-[24px] font-bold leading-[30px] tracking-[0.02em] text-justify text-[#496AF1]">
              Enhance designer productivity with an <br />
              authentic multi-format design solution
            </h1>
            <p className="font-archivo text-[12px] md:text-[14px] leading-[20px] tracking-[0.02em] text-justify text-[#000000]">
              Equip designers with the necessary tool to swiftly design
              multi-format
              <br /> campaigns in a fraction of the time. Say goodbye to
              struggling with
              <br /> antiquated software from the 1990s.
            </p>
          </div>

          {/* Image and Video Section */}
          <div className="flex justify-center items-center w-full md:w-1/2 relative">
            <div className="relative flex justify-end mb-2 w-[150px] h-[150px] sm:w-[175px] sm:h-[175px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]">
              <img
                src={Vector2}
                alt="Vector"
                className="absolute w-full h-full top-[-50px] left-[50%] transform -translate-x-1/2 bg-cover rounded-lg"
              />
            </div>

            <video
              className="w-full h-auto object-cover rounded-lg"
              autoPlay
              loop
              muted
              src="/Images/Video5.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="flex flex-col md:flex-row items-center justify-between p-2 md:p-4">
          <div className="flex justify-center items-center w-full md:w-1/2 relative mb-4 md:mb-0">
            <div className="relative flex justify-start w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[139px] md:h-[139px] lg:w-[160px] lg:h-[160px] rotate-[25.18deg]">
              <img
                src={Vector3}
                alt="Vector"
                className="absolute w-full h-full top-[-30px] sm:top-[-40px] md:top-[-50px] left-[-30px] sm:left-[-40px] md:left-[-50px] bg-cover rounded-lg"
              />
            </div>

            <video
              className="w-full h-auto object-cover rounded-lg"
              autoPlay
              loop
              muted
              src="/Images/Video6.mp4"
            >
              Your browser does not support the video tag.
            </video>
            <div className="relative flex justify-center w-[150px] h-[100px] sm:w-[180px] sm:h-[120px] md:w-[208px] md:h-[147px] lg:w-[250px] lg:h-[180px]">
              <img
                src={image27}
                alt="image27"
                className="absolute top-[-20px] sm:top-[-30px] md:top-[-40px] left-[50%] transform -translate-x-1/2 w-full h-full bg-cover rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col justify-end  mb-4 md:mb-0 w-full md:w-1/2">
            <h1 className="font-archivo text-[20px] md:text-[24px] font-bold leading-[30px] tracking-[0.02em] text-justify text-[#496AF1]">
              Unblock campaign production by <br />
              empowering marketers & operators.
            </h1>
            <p className="font-archivo text-[12px] md:text-[14px] leading-[20px] tracking-[0.02em] text-justify text-[#000000]">
              Provide marketers, operators, and clients with the means to
              <br />
              independently create campaigns whenever necessary, all while
              adhering <br />
              to creative parameters predetermined by the designer.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between p-4 md:p-8 h-auto">
        <div className="flex flex-col justify-start w-full md:w-1/2 mb-4 md:mb-0">
          <h1 className="font-archivo text-[20px] md:text-[24px] font-bold leading-[30px] tracking-[0.02em] text-left text-[#496AF1]">
            Scale asset production by automating <br />
            generation
          </h1>
          <p className="font-archivo text-[12px] md:text-[14px] leading-[20px] tracking-[0.02em] text-justify text-[#000000]">
            Connect your existing data and tools to automatically generate
            <br /> campaigns in a fraction of the time. Say goodbye to
            struggling with <br />
            thousands of asset variations in seconds.
          </p>
          <div className="relative flex justify-center w-[150px] h-[100px] sm:w-[180px] sm:h-[120px] md:w-[208px] md:h-[147px] lg:w-[250px] lg:h-[180px] mt-4">
            <img
              src={image28}
              alt="image28"
              className="absolute top-[-20px] sm:top-[-30px] md:top-[-50px] left-1/2 transform -translate-x-1/2 w-full h-full bg-cover rounded-lg"
            />
          </div>
        </div>
        <div className="flex justify-center items-center w-full md:w-1/2 relative">
          <div className="relative flex w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] justify-start mb-2">
            <img
              src={Frame}
              alt="Frame"
              className="absolute w-full h-full top-[-20px] sm:top-[-30px] md:top-[-50px] left-1/2 transform -translate-x-1/2 bg-cover rounded-lg"
            />
          </div>

          <video
            className="w-full h-auto object-cover rounded-lg"
            autoPlay
            loop
            muted
            src="/Images/Video7.mp4"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
