import { Button } from "@/components/ui/button";
import Frame from "/Images/Frame.png";
import Clip from "/Images/Clip path group.png";
import Rectangle22 from "/Images/Rectangle 22.svg";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function DemoHeader() {
  return (
    <div
      className="relative flex flex-col justify-center mb-8 space-x-0 md:space-x-8 h-auto mt-8 p-5"
      style={{
        border: "none",
        borderRadius: "60px",
        backgroundColor: "#F4F4F4",
      }}
    >
      <div className="space-y-10 mt-10">
        {/* Floating Frame Image */}
        <div className="relative">
          <div className="absolute w-20 h-20 sm:w-36 sm:h-36 top-15 sm:top-30">
            <img
              src={Frame}
              alt="Frame"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Main Header Content */}
        <div
          className="flex flex-col justify-center w-full max-w-3xl mx-auto"
          style={{ fontFamily: "Archivo" }}
        >
          {/* First Row */}
          <div className="flex flex-col md:flex-row items-center text-2xl sm:text-3xl md:text-4xl justify-center mt-10 space-y-4 md:space-y-0">
            <span>Transform Your</span>
            <div className="w-48 h-12 md:w-64 md:h-16 mx-4 md:mx-6">
              <video
                className="w-full h-full object-cover rounded-full"
                autoPlay
                loop
                muted
                src="/Images/Video1.mp4"
              />
            </div>
            <span>Business</span>
            <img
              src={Clip}
              alt="clip"
              className="w-6 h-6 md:w-12 md:h-12 rotate-12 object-cover rounded-lg"
            />
          </div>

          {/* Second Row */}
          <div className="flex flex-col md:flex-row items-center text-2xl sm:text-3xl md:text-4xl justify-center mt-6 space-y-4 md:space-y-0">
            <span>with</span>
            <div className="w-48 h-12 md:w-64 md:h-16 mx-4">
              <video
                className="w-full h-full object-cover rounded-full"
                autoPlay
                src="/Images/Video2.mp4"
                loop
                muted
              />
            </div>
            <span>Creative Automation.</span>
          </div>

          {/* Quote Section */}
          <div className="relative flex justify-center mt-8">
            <p className="font-Archivo text-sm sm:text-lg md:text-2xl w-full max-w-3xl text-center px-4">
              "Utilize our API and integrations to automatically create social
              media visuals, ecommerce banners, and various other graphics."
            </p>
          </div>
        </div>

        {/* Get Started Button */}
        <div className="flex justify-center mt-8 relative">
          <Button
            className="text-black w-[200px] sm:w-[280px] md:w-[371px] h-[50px] sm:h-[65px] md:h-[80px] text-center flex items-center justify-center text-lg sm:text-xl md:text-[30px]"
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
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center w-full mt-16 space-x-0 sm:space-x-4 gap-4">
        {/* Card 1 */}
        <Card
          className="w-[250px] h-[350px] p-4"
          style={{
            border: "none",
            borderRadius: "40px",
            backgroundColor: "#F3FE00",
          }}
        >
          <CardHeader>
            <div className="flex flex-col space-y-4">
              <img
                src={Rectangle22}
                alt="Rectangle 22"
                className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] object-cover rounded-lg mx-auto"
              />
            </div>
            <CardTitle
              className="text-center mt-4"
              style={{ fontFamily: "Archivo" }}
            >
              Automate
            </CardTitle>
            <CardDescription
              className="text-center"
              style={{ fontFamily: "Archivo" }}
            >
              Marketing Tasks using No-Code
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Card 2 */}
        <Card
          className="w-[250px] h-[350px] bg-black text-white p-4"
          style={{
            border: "none",
            borderRadius: "40px",
          }}
        >
          <CardHeader>
            <CardDescription
              className="text-center mb-4"
              style={{ fontFamily: "Archivo" }}
            >
              Create Videos & Images using a REST API
            </CardDescription>
            <div className="flex flex-col space-y-4">
              <video
                className="w-[200px] h-[150px] sm:w-full sm:h-full bg-cover bg-center rounded-[120px] mx-auto"
                autoPlay
                src="/Images/Video3.mp4"
                loop
                muted
              />
            </div>
          </CardHeader>
        </Card>

        {/* Card 3 */}
        <Card
          className="w-[250px] h-[350px] bg-[#496AF1] text-white p-4"
          style={{
            border: "none",
            borderRadius: "40px",
          }}
        >
          <CardHeader>
            <CardTitle
              className="text-center mt-4"
              style={{ fontFamily: "Archivo" }}
            >
              Mass-Produce Through a Spreadsheet
            </CardTitle>
            <CardDescription
              className="text-center mt-4"
              style={{ fontFamily: "Archivo" }}
            >
              Explore
            </CardDescription>
            <div className="flex items-end space-y-4">
              <video
                className="w-[200px] h-[150px] sm:w-full sm:h-[155px] bg-cover bg-center rounded-[120px] mx-auto"
                autoPlay
                src="/Images/Video4.mp4"
                loop
                muted
              />
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
