import { useState, useEffect } from "react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1524069290683-0457abfe42c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Unlock Your Potential with Quality Education",
      description:
        "Expert tuition for grades 5-10 with personalized attention and proven results.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Achieve Excellence in Every Subject",
      description:
        "Interactive lessons and dedicated mentors help you excel academically.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  return (
    <div id="home" className="relative">
      <div className="absolute inset-0">
        <img
          src={slides[currentSlide].image}
          alt="Education Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Black transparent overlay */}
      </div>
      <div className="relative container mx-auto px-4 py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 opacity-90">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl text-white mb-8 opacity-80">{slides[currentSlide].description}</p>
          <a
  href="#courses"
  className="inline-block border-2 border-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
>
  Explore Courses
</a>

        </div>
      </div>
    </div>
  );
}
