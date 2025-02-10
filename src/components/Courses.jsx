import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';  // FontAwesome icons

export default function Courses() {
  // Define all the course cards
  const cards = [
    {
      title: "Mental Mathematics",
      description: "Improve your mental math skills with specialized courses for all age groups.",
      grade: "Class 1-10",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Primary School Tutoring",
      description: "Tailored lessons to help young students excel in their studies.",
      grade: "Class 1-5",
      image: "https://images.unsplash.com/photo-1522661067900-ab829854a57f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      title: "Class Specific Tuition",
      description: "Custom tuition programs designed based on the student's grade and needs.",
      grade: "Class 6-10",
      image: "https://media.istockphoto.com/id/1270791879/photo/indian-young-girl-tutor-teaching-a-little-boy.webp?a=1&b=1&s=612x612&w=0&k=20&c=xDYupYqaX7baYbivLWveAW3HYx2AZoH_mb9hex0hn-g="
    },
    {
      title: "Strong Foundations",
      description: "Coaching for elementary school students to build a strong academic foundation.",
      grade: "Class 1-5",
      image: "https://media.istockphoto.com/id/1376136521/photo/focus-on-teacher-teacher-asking-questions-and-girl-raising-hands-to-answer-at-classroom.webp?a=1&b=1&s=612x612&w=0&k=20&c=c7YzKoz-qs8t3T0c9jR2yL9rXsZ1YcIvxvN8V2RDkPg="
    },
    {
      title: "PCMB Coaching",
      description: "Intensive coaching for Physics, Chemistry, Mathematics, and Biology.",
      grade: "Class 11-12",
      image: "https://media.istockphoto.com/id/1901756364/photo/science-tutor-looking-into-the-microscope-and-explaining-and-describing-its-functions-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=c5_DWEwg5zpnFWChBuJqqdVQDYDjQ1UI_cV_fGiQMkQ="
    },
    {
      title: "Exam Preparation Coaching",
      description: "Coaching to prepare for various entrance exams and board exams.",
      grade: "Class 10-12",
      image: "https://media.istockphoto.com/id/1072472414/photo/male-student-in-classroom-writing-in-notebook-stock-image.webp?a=1&b=1&s=612x612&w=0&k=20&c=E0-2iQ_60Rt3W5kUhQ6jqteyiK8sAFoIrIhxY5iomDU="
    },
    {
      title: "Summer Course",
      description: "A fun and educational summer course to enhance various skills.",
      grade: "Class 1-12",
      image: "https://plus.unsplash.com/premium_photo-1686920245681-9d8ab3df153b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHN1bW1lciUyMGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
    }
  ];

  // State to track which set of 3 cards to display
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(cards.length - 3); // Loop back to the last set
    }
  };

  const handleNext = () => {
    if (currentIndex < cards.length - 3) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back to the first set
    }
  };

  // Get the next 3 cards to display based on the current index
  const currentCards = cards.slice(currentIndex, currentIndex + 3);

  return (
    <section id="courses" className="py-20">
      <div className="container mx-auto px-4">
        {/* Static Image Section with Borders */}
        <div className="relative mb-12">
          <img
            src="https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Tuition Center"
            className="w-full h-[400px] object-cover rounded-lg shadow-2xl"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
            <h2 className="opacity-90 text-8xl font-bold mb-4">Our Courses</h2>
            <p className="opacity-90 text-lg font-small max-w-4xl">
              Home - We believe that only if students have the necessary skills, the right attitude, and well-built self-confidence, they would have the ability to rightly approach the next challenge with success.
            </p>
          </div>
        </div>

        {/* Title for the best courses */}
        <div className="text-left mb-16">
          <h2 className="text-4xl font-bold text-gray-800">Best Courses</h2>
        </div>

        {/* Cards Section */}
        <div className="flex items-center justify-between mb-12">
          {/* Left button */}
          <button
            onClick={handlePrev}
            className="text-2xl font-bold text-white p-4 bg-orange-500 rounded-full shadow-lg hover:bg-orange-600 transition-all flex items-center justify-center w-16 h-16"
          >
            <FaArrowLeft className="text-white" size={24} />
          </button>

          {/* Cards container */}
          <div className="flex space-x-8 overflow-hidden w-full justify-center">
            {currentCards.map((card, index) => (
              <div
                key={index}
                className="w-[350px] h-[550px] bg-white shadow-lg flex flex-col border border-orange-500 rounded-none hover:bg-orange-50 transition-all"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-[300px] object-cover rounded-none"
                />
                <div className="p-6 flex-1">
  <h3 className="text-2xl font-semibold mb-4">{card.title}</h3>
  <p className="text-sm text-gray-600 mb-4">
    <span className="font-bold">Subject:</span> {card.description}
    <br />
    <span className="font-bold">Grade:</span> {card.grade}
  </p>
                  <p className="text-base mb-6">
                    {card.description}
                  </p>
                  <div className="flex justify-center items-center">
                    <button className="w-36 py-2 bg-orange-500 text-white text-lg rounded-none hover:bg-blue-600">
                      Apply Now &gt;
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right button */}
          <button
            onClick={handleNext}
            className="text-2xl font-bold text-white p-4 bg-orange-500 rounded-full shadow-lg hover:bg-orange-600 transition-all flex items-center justify-center w-16 h-16"
          >
            <FaArrowRight className="text-white" size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
