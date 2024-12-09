import * as React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function DemoBlogs() {
  return (
    <div>
      <div
        className="space-y-8 w-full h-[1000px] mt-12"
        style={{
          backgroundColor: "#496AF1",
        }}
      >
        <div className="text-center">
          <h1 className="font-archivo text-[60px] leading-[88px] tracking-[0.02em] text-center text-[#FFFFFF]">
            Blogs by Craftly
          </h1>
        </div>
        <div className="flex justify-evenly items-center w-full gap-8">
          <Card
            className="w-[90%] md:w-[300px] h-[544px] space-x-4"
            style={{
              border: "none",
              borderRadius: "14px",
              backgroundColor: "#FFFFFF",
            }}
          >
            <CardHeader>
              <div className="flex flex-col space-y-4">
                <img
                  src="/Images/image 47.svg"
                  alt="Rectangle 22"
                  className="w-full h-[225px] object-cover rounded-lg"
                  style={{
                    border: "none",
                    borderRadius: "4px",
                  }}
                />
              </div>
              <CardTitle
                className="w-full text-[24px] text-center"
                style={{
                  fontFamily: "Archivo",
                }}
              >
                Allow your customers to create visuals from a Form
              </CardTitle>
              <CardDescription
                className="w-full h-[56px] pt-[16px] text-center"
                style={{
                  fontFamily: "Archivo",
                }}
              >
                Learn step by step how to empower your customers with image generation.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card
            className="w-[90%] md:w-[300px] h-[544px] space-x-4"
            style={{
              border: "none",
              borderRadius: "14px",
              backgroundColor: "#FFFFFF",
            }}
          >
            <CardHeader>
              <div className="flex flex-col space-y-4">
                <img
                  src="/Images/image 48.svg"
                  alt="Rectangle 22"
                  className="w-full h-[225px] object-cover rounded-lg"
                  style={{
                    border: "none",
                    borderRadius: "4px",
                  }}
                />
              </div>
              <CardTitle
                className="w-full text-[24px] text-center"
                style={{
                  fontFamily: "Archivo",
                }}
              >
                Allow your customers to create visuals from a Form
              </CardTitle>
              <CardDescription
                className="w-full h-[56px] pt-[16px] text-center"
                style={{
                  fontFamily: "Archivo",
                }}
              >
                Learn step by step how to empower your customers with image generation.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card
            className="w-[90%] md:w-[300px] h-[544px] space-x-4"
            style={{
              border: "none",
              borderRadius: "14px",
              backgroundColor: "#FFFFFF",
            }}
          >
            <CardHeader>
              <div className="flex flex-col space-y-4">
                <img
                  src="/Images/image 49.svg"
                  alt="Rectangle 22"
                  className="w-full h-[225px] object-cover rounded-lg"
                  style={{
                    border: "none",
                    borderRadius: "4px",
                  }}
                />
              </div>
              <CardTitle
                className="w-full text-[24px] text-center"
                style={{
                  fontFamily: "Archivo",
                }}
              >
                Allow your customers to create visuals from a Form
              </CardTitle>
              <CardDescription
                className="w-full h-[56px] pt-[16px] text-center"
                style={{
                  fontFamily: "Archivo",
                }}
              >
                Learn step by step how to empower your customers with image generation.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}
