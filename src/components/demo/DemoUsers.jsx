import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function DemoUsers() {
  return (
    <div className="pt-8">
      {" "}
      {/* Added space at the top */}
      <div className="flex justify-center">
        <h1 className="text-black text-[60px] font-Archivo w-full text-center">
          Our Users loved us!
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="relative flex justify-center w-full max-w-screen-xl">
          <div>
            <Avatar className="w-[67.69px] h-[67.69px]">
              <AvatarImage src="/Images/user 5.png" alt="@shadcn" />
              <AvatarFallback>User 5</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <Avatar className="w-[67.69px] h-[67.69px] ml-[-20px]">
              <AvatarImage src="/Images/user 4.png" alt="@shadcn" />
              <AvatarFallback>User 4</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <Avatar className="w-[67.69px] h-[67.69px] ml-[-20px]">
              <AvatarImage src="/Images/user 3.png" alt="@shadcn" />
              <AvatarFallback>User 3</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <Avatar className="w-[67.69px] h-[67.69px] ml-[-20px]">
              <AvatarImage src="/Images/user 2.svg" alt="@shadcn" />
              <AvatarFallback>User 2</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <Avatar className="w-[67.69px] h-[67.69px] ml-[-20px]">
              <AvatarImage src="/Images/user 1.png" alt="@shadcn" />
              <AvatarFallback>User 1</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-col items-center mb-2">
            <div className="flex justify-center mb-2">
              <img
                src="/Images/star.png"
                alt="Rating"
                className="w-[25px] h-[25px] object-cover rounded-lg"
              />
              <img
                src="/Images/star.png"
                alt="Rating"
                className="w-[25px] h-[25px] object-cover rounded-lg"
              />
              <img
                src="/Images/star.png"
                alt="Rating"
                className="w-[25px] h-[25px] object-cover rounded-lg"
              />
              <img
                src="/Images/star.png"
                alt="Rating"
                className="w-[25px] h-[25px] object-cover rounded-lg"
              />
              <img
                src="/Images/star.png"
                alt="Rating"
                className="w-[25px] h-[25px] object-cover rounded-lg"
              />
            </div>
            <div className="w-full max-w-xs text-center mt-2">
              <h1 className="font-Inter text-[18px] text-[#6B7589]">
                Loved by 200+ customers
              </h1>
            </div>
          </div>
        </div>
      </div>
        <div className="flex animate-marquee justify-evenly mt-[100px] mt-[100px]">
          
          <div className="flex items-center justify-center bg-[#496AF1] w-[90%] md:w-[406px] h-[304px] rounded-xl mx-2">
            <div className="items-center bg-[#FFFFFF] w-[90%] md:w-[400px] h-[298px] rounded-xl p-4 border border-black-2 border-radius-12 flex flex-col items-center justify-between">
              <div>
                <img
                  src="/Images/avatar-3.svg"
                  alt="avatar3"
                  className="w-[131px] h-[84px] object-cover"
                />
              </div>
              <div className="w-[339px] h-[103px] text-center pt-[15px] font-Inter font-normal text-[14px]/[25.6px]">
                  If a new tool comes out and it saves you time and costs less
                  than the equivalent value, it's usually an insta buy.
              </div>
              <div className="flex justify-center space-x-1">
                <img
                  src="/Images/star.png"
                  alt="Rating"
                  className="w-[25px] h-[25px]"
                />
                <img
                  src="/Images/star.png"
                  alt="Rating"
                  className="w-[25px] h-[25px]"
                />
                <img
                  src="/Images/star.png"
                  alt="Rating"
                  className="w-[25px] h-[25px]"
                />
                <img
                  src="/Images/star.png"
                  alt="Rating"
                  className="w-[25px] h-[25px]"
                />
                <img
                  src="/Images/star.png"
                  alt="Rating"
                  className="w-[25px] h-[25px]"
                />
                </div>
              
                <div className="flex justify-center mt-2">
                <h1 className="font-Inter text-[18px] text-center">
                  Jackson Schaal
                </h1>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center bg-[#496AF1] w-[90%] md:w-[406px] h-[304px] rounded-xl mx-2">
            <div className="items-center bg-[#FFFFFF] w-[90%] md:w-[400px] h-[298px] rounded-xl p-4 border border-black-2 border-radius-12 flex flex-col items-center justify-between">
              <div>
                <img
                  src="/Images/avatar-1.webp.svg"
                  alt="avatar3"
                  className="w-[131px] h-[84px] object-cover"
                />
              </div>
              <div className="w-[339px] h-[103px] text-center pt-[15px] font-Inter font-normal text-[14px]/[25.6px]">
                  If a new tool comes out and it saves you time and costs less
                  than the equivalent value, it's usually an insta buy.
              </div>
              <div className="flex justify-center space-x-1">
                <img
                  src="/Images/star.png"
                  alt="Rating"
                  className="w-[25px] h-[25px]"
                />
                <img
                  src="/Images/star.png"
                  alt="Rating"
                  className="w-[25px] h-[25px]"
                />
                <img
                  src="/Images/star.png"
                  alt="Rating"
                  className="w-[25px] h-[25px]"
                />
                <img
                  src="/Images/star.png"
                  alt="Rating"
                  className="w-[25px] h-[25px]"
                />
                <img
                  src="/Images/star.png"
                  alt="Rating"
                  className="w-[25px] h-[25px]"
                />
                </div>
              
                <div className="flex justify-center mt-2">
                <h1 className="font-Inter text-[18px] text-center">
                  Jackson Schaal
                </h1>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center bg-[#F3FE00] w-[90%] md:w-[406px] h-[304px] rounded-xl mx-2">
            <div className="items-center bg-[#FFFFFF] w-[90%] md:w-[400px] h-[298px] rounded-xl p-4 border border-black-2 border-radius-12 flex flex-col items-center justify-between">
              <div>
                <img
                  src="/Images/avatar-2.svg"
                  alt="avatar3"
                  className="w-[131px] h-[84px] object-cover"
                />
              </div>
              <div className="w-[339px] h-[103px] text-center pt-[15px] font-Inter font-normal text-[14px]/[25.6px]">
                  If a new tool comes out and it saves you time and costs less
                  than the equivalent value, it's usually an insta buy.
              </div>
              <div className="flex justify-center space-x-1">
                <img
                  src="/Images/star.png"
                  alt="Rating"
                  className="w-[25px] h-[25px]"
                />
                <img
                  src="/Images/star.png"
                  alt="Rating"
                  className="w-[25px] h-[25px]"
                />
                <img
                  src="/Images/star.png"
                  alt="Rating"
                  className="w-[25px] h-[25px]"
                />
                <img
                  src="/Images/star.png"
                  alt="Rating"
                  className="w-[25px] h-[25px]"
                />
                <img
                  src="/Images/star.png"
                  alt="Rating"
                  className="w-[25px] h-[25px]"
                />
              </div>
              <div className="flex justify-center mt-2">
                <h1 className="font-Inter text-[18px] text-center">
                  Jackson Schaal
                </h1>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center bg-[#496AF1] w-[90%] md:w-[406px] h-[304px] rounded-xl mx-2">
            <div className="items-center bg-[#FFFFFF] w-[90%] md:w-[400px] h-[298px] rounded-xl p-4 border border-black-2 border-radius-12 flex flex-col items-center justify-between">
              <div>
                <img
                  src="/Images/avatar-3.svg"
                  alt="avatar3"
                  className="w-[131px] h-[84px] object-cover"
                />
              </div>
              <div className="w-[339px] h-[103px] text-center pt-[15px] font-Inter font-normal text-[14px]/[25.6px]">
                  If a new tool comes out and it saves you time and costs less
                  than the equivalent value, it's usually an insta buy.
              </div>
              <div className="flex justify-center space-x-1">
                <img
                  src="/Images/star.png"
                  alt="Rating"
                  className="w-[25px] h-[25px]"
                />
                <img
                  src="/Images/star.png"
                  alt="Rating"
                  className="w-[25px] h-[25px]"
                />
                <img
                  src="/Images/star.png"
                  alt="Rating"
                  className="w-[25px] h-[25px]"
                />
                <img
                  src="/Images/star.png"
                  alt="Rating"
                  className="w-[25px] h-[25px]"
                />
                <img
                  src="/Images/star.png"
                  alt="Rating"
                  className="w-[25px] h-[25px]"
                />
              </div>
              <div className="flex justify-center mt-2">
                <h1 className="font-Inter text-[18px] text-center">
                  Jackson Schaal
                </h1>
              </div>
            </div>
          </div>
        </div>
     
    </div>
  );
}
