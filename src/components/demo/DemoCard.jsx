import * as React from "react";
import Rectangle22 from "/Images/Rectangle 22.svg";


import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function DemoCard() {
  return (
    <div>
      <div className="flex justify-evenly w-full space-x-2">
        <Card
          className="w-[250px] h-[350px] top-[833px] left-[205px] space-y-10"
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
                style={{
                  border: "none",
                  borderRadius: "10px",
                }}
              />
            </div>
            <CardTitle
              className="w-[200px] h-[30px] top-[1000px] left-[200px] space-y-4"
              style={{
                fontFamily: "Archivo",
              }}
            >
              Automate
            </CardTitle>
            <CardDescription
              className="w-[200px] h-[30px] top-[1000px] left-[200px] space-y-4"
              style={{
                fontFamily: "Archivo",
              }}
            >
              Marketing Tasks using No-Code
            </CardDescription>
          </CardHeader>
        </Card>

        <Card
          className="w-[250px] h-[350px] top-[833px] left-[205px] space-y-10"
          style={{
            border: "none",
            borderRadius: "40px",
            backgroundColor: "#000000",
          }}
        >
          <CardHeader>
            <CardDescription
              className="bg-black text-white w-[200px] h-[30px] top-[1000px] left-[200px] space-y-4"
              style={{
                fontFamily: "Archivo",
              }}
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
              ></video>
            </div>
          </CardHeader>
        </Card>

        <div>
          <Card
            className="w-[250px] h-[350px] top-[833px] left-[205px] space-y-10"
            style={{
              border: "none",
              borderRadius: "40px",
              backgroundColor: "#496AF1",
            }}
          >
            <Card
              className="w-[550px] h-[200px] top-[833px] left-[205px] px-10 py-10"
              style={{
                border: "none",
                borderRadius: "40px",
                backgroundColor: "#496AF1",
              }}
            >
              <div className="flex items-end space-y-8">
                <video
                  className="w-[472px] h-[155px] bg-cover bg-center rounded-[120px]"
                  autoPlay
                  src="/Images/Video4.mp4"
                  loop
                  muted
                ></video>
              </div>
              <CardHeader>
                <CardTitle
                  className="w-[200px] h-[30px] top-[1000px] left-[200px] space-y-4"
                  style={{
                    fontFamily: "Archivo",
                  }}
                >
                  Mass-Produce Through a Spreadsheet
                </CardTitle>
                <CardDescription
                  className="w-[92px] h-[59px] top-[1000px] left-[200px] py-12"
                  style={{
                    fontFamily: "Archivo",
                  }}
                >
                  Explore
                </CardDescription>
              </CardHeader>
            </Card>
          </Card>
        </div>
        <div className="flex items-end h-[360px] w-[550px]">
          <Card
            className="w-[270px] h-[150px]"
            style={{
              bottom: "0",
              border: "none",
              borderTopRightRadius: "40px",
              borderBottomRightRadius: "40px",
              borderBottomLeftRadius: "40px",
              backgroundColor: "#F3FE00",
            }}
          >
            <CardHeader>
              <CardTitle
                className="w-[200px] h-[40px] top-[1216px] left-[1410px] space-y-4"
                style={{
                  fontFamily: "Archivo",
                }}
              >
                80%
              </CardTitle>
              <CardDescription
                className="w-[284px] h-[93px] top-[1251px] left-[1410px] space-y-4"
                style={{
                  fontFamily: "Archivo",
                }}
              >
                Faster Creative Content Creation.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
      <div className="flex items-center justify-center h-[100px] mb-[2px]">
        <h1 className="font-archivo text-[80px] font-bold leading-[88px] tracking-[0.02em] text-center">
          10X
        </h1>
        <span className="font-archivo text-[60px] font-bold leading-[88px] tracking-extra-tight text-center">
           your asset creation speed
        </span>
      </div>
      <div className="flex items-center justify-center h-[100px] space-x-1">
        <h1 className="font-archivo text-[80px] font-bold leading-[88px] tracking-[0.02em] text-center">
          <span className="text-[#496AF1]">With Craftly</span>
        </h1>
      </div>
    </div>
  );
}