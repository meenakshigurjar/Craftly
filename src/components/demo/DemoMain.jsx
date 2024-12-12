import * as React from "react";
import avatar1 from "/Images/avatar-1.webp.svg";
import hpOverview from "/Images/hp overview.svg.svg";
import avatar3 from "/Images/avatar-3.svg";
import avatar2 from "/Images/avatar-2.svg";
import avatar4 from "/Images/avatar-4.svg";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function DemoMain() {
  return (
    <div className="bg-black mb-[-82px] rounded-t-[200px]">
      {/* Header Section */}
      <div
        className="px-6 py-12 bg-black text-white rounded-t-[200px] space-y-4"
      >
        <h1 className="text-center text-3xl md:text-5xl font-bold font-archivo mt-4 p-2">
          What Craftly Can Do For You?
        </h1>
        <p className="text-center text-lg md:text-xl font-archivo">
          No matter your role or level of design skills, we’re here to make your
          <br />
          work life easier with our all-in-one solution.
        </p>
      </div>

      {/* Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pb-[26rem]">
        {/* Left Column */}
        <div className="space-y-6">
          <Card className="p-6 bg-yellow-300 rounded-xl sm:rounded-xl md:rounded-2xl lg:rounded-3xl shadow-md">
            <CardHeader>
              <img
                src={avatar1}
                alt="Business Owner"
                className="w-full rounded-md object-cover"
              />
              <CardTitle className="mt-4 text-xl font-semibold text-gray-900">
                Business Owner
              </CardTitle>
              <CardDescription className="mt-2 text-gray-700">
                Create professional branded content in 70% less time.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="p-6 bg-white rounded-xl sm:rounded-xl md:rounded-2xl lg:rounded-3xl shadow-md">
            <CardHeader>
              <img
                src={avatar2}
                alt="Marketing Manager"
                className="w-full rounded-md object-cover"
              />
              <CardTitle className="mt-4 text-xl font-semibold text-gray-900">
                Marketing Manager
              </CardTitle>
              <CardDescription className="mt-2 text-gray-700">
                Produce pixel-perfect content, no matter your design skills.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Middle Column */}
        <div className="relative w-full h-screen">
  <Card className="py-4 bg-blue-100 rounded-xl sm:rounded-xl md:rounded-2xl lg:rounded-3xl shadow-md w-full h-full">
    <CardHeader className="relative w-full h-full">
      <img
        src={hpOverview}
        alt="Overview"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <h1 className="absolute inset-x-0 top-8 text-center text-3xl text-white font-bold text-gray-800">
        Create Content, Faster
      </h1>
    </CardHeader>
  </Card>
</div>




        {/* Right Column */}
        <div className="space-y-6">
        <Card className="p-6 bg-yellow-300 rounded-xl sm:rounded-xl md:rounded-2xl lg:rounded-3xl shadow-md">
  <CardHeader>
    <img
      src={avatar3}
      alt="Developers"
      className="w-full rounded-md object-cover"
    />
    <CardTitle className="mt-4 text-xl font-semibold text-gray-900">
      Developers
    </CardTitle>
    <CardDescription className="mt-2 text-gray-700">
      Add image and video generation capability to apps using REST APIs or official libraries in Ruby, Node, and PHP.
    </CardDescription>
  </CardHeader>
</Card>


          <Card className="p-6 bg-white rounded-xl sm:rounded-xl md:rounded-2xl lg:rounded-3xl shadow-md">
            <CardHeader>
              <img
                src={avatar4}
                alt="Sales Manager"
                className="w-full rounded-md object-cover"
              />
              <CardTitle className="mt-4 text-xl font-semibold text-gray-900">
                Sales Manager
              </CardTitle>
              <CardDescription className="mt-2 text-gray-700">
                Make impactful pitch decks and proposals that convert.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}
