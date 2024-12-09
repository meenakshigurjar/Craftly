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
        <div className="relative">
          <div className="absolute w-36 h-36 top-20 justify-evenly">
            <img
              src={Frame}
              alt="Frame"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div
          className="flex flex-col justify-center w-full max-w-3xl mx-auto"
          style={{ fontFamily: "Archivo" }}
        >
          {/* First Row */}
          <div className="flex flex-col md:flex-row items-center text-4xl justify-center mt-10">
            <span>Transform Your</span>
            <div className="w-64 h-16 mx-6">
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
              className="w-12 h-12 rotate-12 object-cover rounded-lg"
            />
          </div>

          {/* Second Row */}
          <div className="flex flex-col md:flex-row items-center text-4xl justify-center mt-6">
            <span>with</span>
            <div className=" w-64 h-16 mx-4">
              <video
                className=" w-full h-full object-cover rounded-full"
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
            <p className="absolute font-Archivo text-lg md:text-2xl w-full max-w-3xl text-center top-18 px-4">
              "Utilize our API and integrations to automatically create social
              media visuals,
              <br /> ecommerce banners, and various other graphics."
            </p>
          </div>
        </div>

        <div
          className="flex justify-center mt-8 relative "
          style={{
            backgroundImage: "",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "200px",
          }}
        >
          <Button
            className="absolute text-black w-[371px] h-[80px] text-center flex items-center justify-center text-[30px] top-[100px]"
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

      <div className="flex justify-center w-full mt-16 space-x-4 ">
        <Card
          className="w-[250px] h-[350px] "
          style={{
            border: "none",
            borderRadius: "40px",
            backgroundColor: "#F3FE00",
          }}
        >
          <CardHeader>
            <div className="flex flex-col space-y-8">
              <img
                src={Rectangle22}
                alt="Rectangle 22"
                className="w-[200px] h-[200px] object-cover rounded-lg"
              />
            </div>
            <CardTitle
              className="w-[200px] h-[30px]"
              style={{ fontFamily: "Archivo" }}
            >
              Automate
            </CardTitle>
            <CardDescription
              className="w-[200px] h-[30px]"
              style={{ fontFamily: "Archivo" }}
            >
              Marketing Tasks using No-Code
            </CardDescription>
          </CardHeader>
        </Card>

        <Card
          className="w-[250px] h-[350px] bg-black text-white"
          style={{
            border: "none",
            borderRadius: "40px",
          }}
        >
          <CardHeader>
            <CardDescription
              className="w-[200px] h-[30px]"
              style={{ fontFamily: "Archivo" }}
            >
              Create Videos & Images using a REST API
            </CardDescription>
            <div className="flex flex-col space-y-8">
              <video
                className="w-full h-full bg-cover bg-center rounded-[120px]"
                autoPlay
                src="/Images/Video3.mp4"
                loop
                muted
              />
            </div>
          </CardHeader>
        </Card>

        <Card
          className="w-[250px] h-[350px] bg-[#496AF1]"
          style={{
            border: "none",
            borderRadius: "40px",
          }}
        >
          <CardHeader>
            <CardTitle
              className="w-[200px] h-[30px]"
              style={{ fontFamily: "Archivo" }}
            >
              Mass-Produce Through a Spreadsheet
            </CardTitle>
            <CardDescription
              className="w-[92px] h-[59px] py-12"
              style={{ fontFamily: "Archivo" }}
            >
              Explore
            </CardDescription>
            <div className="flex items-end space-y-8">
              <video
                className="w-[472px] h-[155px] bg-cover bg-center rounded-[120px]"
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
