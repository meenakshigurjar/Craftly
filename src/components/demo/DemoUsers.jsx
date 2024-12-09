import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function DemoUsers() {
  return (
    <div className="pt-8">
      {/* Header */}
      <div className="flex justify-center">
        <h1 className="text-black text-3xl md:text-[60px] font-Archivo text-center">
          Our Users Loved Us!
        </h1>
      </div>

      {/* Avatars Section */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {[
          { src: "/Images/user 5.png", alt: "User 5" },
          { src: "/Images/user 4.png", alt: "User 4" },
          { src: "/Images/user 3.png", alt: "User 3" },
          { src: "/Images/user 2.svg", alt: "User 2" },
          { src: "/Images/user 1.png", alt: "User 1" },
        ].map((user, index) => (
          <Avatar
            key={index}
            className={`w-16 h-16 md:w-[67.69px] md:h-[67.69px] ${
              index !== 0 ? "-ml-4 md:-ml-5" : ""
            }`}
          >
            <AvatarImage src={user.src} alt={user.alt} />
            <AvatarFallback>{user.alt}</AvatarFallback>
          </Avatar>
        ))}
      </div>

      {/* Rating Section */}
      <div className="flex flex-col items-center mt-4">
        <div className="flex justify-center mb-2">
          {Array(5)
            .fill("/Images/star.png")
            .map((src, index) => (
              <img
                key={index}
                src={src}
                alt="Rating"
                className="w-5 h-5 md:w-[25px] md:h-[25px] object-cover"
              />
            ))}
        </div>
        <h1 className="font-Inter text-sm md:text-lg text-[#6B7589] text-center">
          Loved by 200+ customers
        </h1>
      </div>

      {/* Testimonials Section */}
      <div className="animate-marquee">
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 px-4">
        {[
          {
            
            img: "/Images/avatar-3.svg",
            text: "If a new tool comes out and it saves you time and costs less than the equivalent value, it's usually an insta buy.",
            name: "Jackson Schaal",
          },
          {
            
            img: "/Images/avatar-1.webp.svg",
            text: "This tool exceeded my expectations and streamlined my entire workflow seamlessly.",
            name: "Jane Doe",
          },
          {
            
            img: "/Images/avatar-2.svg",
            text: "A must-have tool for anyone looking to improve their productivity and efficiency!",
            name: "John Smith",
          },
        ].map((testimonial, index) => (
          <div
            key={index}
            className={`flex items-center justify-center ${testimonial.bgColor} rounded-xl`}
          >
            <div className="bg-white w-full md:w-[400px] p-4 rounded-xl shadow-md border border-gray-300 flex flex-col items-center text-center space-y-4">
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="w-[100px] h-[84px] object-cover"
              />
              <p className="text-sm md:text-base text-gray-700 font-Inter">
                {testimonial.text}
              </p>
              <div className="flex justify-center space-x-1">
                {Array(5)
                  .fill("/Images/star.png")
                  .map((src, idx) => (
                    <img
                      key={idx}
                      src={src}
                      alt="Star"
                      className="w-4 h-4 md:w-5 md:h-5"
                    />
                  ))}
              </div>
              <h1 className="font-Inter text-sm md:text-lg">{testimonial.name}</h1>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}
