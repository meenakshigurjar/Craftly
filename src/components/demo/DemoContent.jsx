import * as React from "react";
import Vector2 from "/Images/Vector2.svg";
import Vector3 from "/Images/Vector3.svg";
import Frame from "/Images/Frame.png";
import image27 from "/Images/image 27.svg";
import image28 from "/Images/image 28.svg";

export default function DemoContent() {
  return (
    <div className="p-4 md:p-8 lg:p-12">
      {/* Top Section */}
      <div className="relative flex flex-col items-center justify-center space-y-4">
        <div className="text-center">
          <h1 className="font-archivo text-5xl md:text-6xl lg:text-7xl tracking-[0.02em]">
            10X
          </h1>
          <span className="font-archivo text-2xl md:text-3xl lg:text-4xl tracking-tight">
            your asset creation speed
          </span>
        </div>

        <div className="absolute top-[150px] md:top-[200px] w-full max-w-3xl mx-auto text-center">
          <h1 className="font-archivo text-4xl md:text-5xl lg:text-6xl tracking-[0.02em]">
            <span className="text-[#496AF1]">With Craftly</span>
          </h1>
        </div>
      </div>

      {/* Section 1 */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-[250px] space-y-6 md:space-y-0">
        {/* Text */}
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="font-archivo text-xl md:text-2xl font-bold text-[#496AF1]">
            Enhance designer productivity with an <br /> authentic multi-format
            design solution
          </h1>
          <p className="font-archivo text-sm md:text-base text-[#000000]">
            Equip designers with the necessary tools to swiftly design
            multi-format campaigns in a fraction of the time. Say goodbye to
            struggling with antiquated software from the 1990s.
          </p>
        </div>

        {/* Image and Video */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative">
          <div className="relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[250px] lg:h-[250px]">
            <img
              src={Vector2}
              alt="Vector2"
              className="absolute top-[-40px] left-[50%] transform -translate-x-1/2 w-full h-full object-cover rounded-lg"
            />
          </div>
          <video
            className="w-full h-auto object-cover rounded-lg"
            autoPlay
            loop
            muted
            src="/Images/Video5.mp4"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-12 space-y-6 md:space-y-0">
        {/* Image and Video */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative">
          <div className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] lg:w-[160px] lg:h-[160px] rotate-12">
            <img
              src={Vector3}
              alt="Vector3"
              className="absolute top-[-30px] left-[-30px] sm:top-[-40px] sm:left-[-40px] md:top-[-50px] md:left-[-50px] w-full h-full object-cover rounded-lg"
            />
          </div>
          <video
            className="w-full h-auto object-cover rounded-lg"
            autoPlay
            loop
            muted
            src="/Images/Video6.mp4"
          />
          <div className="absolute top-[-20px] w-[150px] h-[100px] sm:w-[180px] sm:h-[120px] md:w-[208px] md:h-[147px] lg:w-[250px] lg:h-[180px]">
            <img
              src={image27}
              alt="image27"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="font-archivo text-xl md:text-2xl font-bold text-[#496AF1]">
            Unblock campaign production by <br /> empowering marketers &
            operators.
          </h1>
          <p className="font-archivo text-sm md:text-base text-[#000000]">
            Provide marketers, operators, and clients with the means to
            independently create campaigns whenever necessary, all while
            adhering to creative parameters predetermined by the designer.
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-12 space-y-6 md:space-y-0">
        {/* Text */}
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="font-archivo text-xl md:text-2xl font-bold text-[#496AF1]">
            Scale asset production by automating <br /> generation
          </h1>
          <p className="font-archivo text-sm md:text-base text-[#000000]">
            Connect your existing data and tools to automatically generate
            campaigns in a fraction of the time. Say goodbye to struggling with
            thousands of asset variations in seconds.
          </p>
          <div className="relative w-[150px] h-[100px] sm:w-[180px] sm:h-[120px] md:w-[208px] md:h-[147px] lg:w-[250px] lg:h-[180px]">
            <img
              src={image28}
              alt="image28"
              className="absolute top-[-20px] w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Image and Video */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative">
          <div className="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px]">
            <img
              src={Frame}
              alt="Frame"
              className="absolute top-[-20px] sm:top-[-30px] md:top-[-40px] left-[50%] transform -translate-x-1/2 w-full h-full object-cover rounded-lg"
            />
          </div>
          <video
            className="w-full h-auto object-cover rounded-lg"
            autoPlay
            loop
            muted
            src="/Images/Video7.mp4"
          />
        </div>
      </div>
    </div>
  );
}
