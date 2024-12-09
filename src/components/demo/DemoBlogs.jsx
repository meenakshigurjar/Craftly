import * as React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function DemoBlogs() {
  return (
    <div>
      <div
        className="space-y-8 w-full py-12 "
        style={{
          backgroundColor: "#496AF1",
        }}
      >
        {/* Header */}
        <div className="text-center">
          <h1 className="font-archivo text-3xl md:text-[60px] leading-[88px] tracking-[0.02em] text-center text-white">
            Blogs by Craftly
          </h1>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-12">
          {[
            {
              img: "/Images/image 47.svg",
              title: "Allow your customers to create visuals from a Form",
              description:
                "Learn step by step how to empower your customers with image generation.",
            },
            {
              img: "/Images/image 48.svg",
              title: "Create stunning visuals effortlessly",
              description:
                "Discover tips and tricks for creating beautiful visuals quickly.",
            },
            {
              img: "/Images/image 49.svg",
              title: "Boost your design workflow",
              description:
                "Explore how to speed up your design workflow with these hacks.",
            },
          ].map((blog, index) => (
            <Card
              key={index}
              className="w-full md:w-auto h-auto space-y-4"
              style={{
                border: "none",
                borderRadius: "14px",
                backgroundColor: "#FFFFFF",
              }}
            >
              <CardHeader>
                {/* Image */}
                <div className="flex flex-col space-y-4">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="w-full h-[225px] object-cover rounded-lg"
                  />
                </div>

                {/* Title */}
                <CardTitle
                  className="text-lg md:text-[24px] text-center px-2"
                  style={{
                    fontFamily: "Archivo",
                  }}
                >
                  {blog.title}
                </CardTitle>

                {/* Description */}
                <CardDescription
                  className="text-sm md:text-base text-center px-4 pt-4"
                  style={{
                    fontFamily: "Archivo",
                  }}
                >
                  {blog.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
