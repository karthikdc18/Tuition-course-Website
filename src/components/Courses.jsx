import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function Courses() {
  // Course card state
  const cards = [
    {
      title: "Mental Mathematics",
      description: "Improve your mental math skills with specialized courses for all age groups.",
      grade: "Class 1-10",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904"
    },
    {
      title: "Primary School Tutoring",
      description: "Tailored lessons to help young students excel in their studies.",
      grade: "Class 1-5",
      image: "https://images.unsplash.com/photo-1522661067900-ab829854a57f"
    },
    {
      title: "Class Specific Tuition",
      description: "Custom tuition programs designed based on the student's grade and needs.",
      grade: "Class 6-10",
      image: "https://media.istockphoto.com/id/1270791879/photo/indian-young-girl-tutor-teaching-a-little-boy.webp"
    },
    {
      title: "Strong Foundations",
      description: "Coaching for elementary school students to build a strong academic foundation.",
      grade: "Class 1-5",
      image: "https://media.istockphoto.com/id/1376136521/photo/focus-on-teacher-teacher-asking-questions-and-girl-raising-hands-to-answer-at-classroom.webp"
    },
    {
      title: "PCMB Coaching",
      description: "Intensive coaching for Physics, Chemistry, Mathematics, and Biology.",
      grade: "Class 11-12",
      image: "https://media.istockphoto.com/id/1901756364/photo/science-tutor-looking-into-the-microscope-and-explaining-and-describing-its-functions-and.webp"
    },
    {
      title: "Exam Preparation Coaching",
      description: "Coaching to prepare for various entrance exams and board exams.",
      grade: "Class 10-12",
      image: "https://media.istockphoto.com/id/1072472414/photo/male-student-in-classroom-writing-in-notebook-stock-image.webp"
    },
    {
      title: "Summer Course",
      description: "A fun and educational summer course to enhance various skills.",
      grade: "Class 1-12",
      image: "https://plus.unsplash.com/premium_photo-1686920245681-9d8ab3df153b"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : cards.length - 3);
  const handleNext = () => setCurrentIndex(currentIndex < cards.length - 3 ? currentIndex + 1 : 0);
  const currentCards = cards.slice(currentIndex, currentIndex + 3);

  // Teacher section state
  const [teacherScrollIndex, setTeacherScrollIndex] = useState(0);
  const teachers = [
    {
      name: "Ms. Asha Sharma",
      subject: "Mathematics (Class 6–10)",
      description: "Specializes in mental math and problem-solving techniques. 10+ years of experience.",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Mrs. Priya Desai",
      subject: "Science & Biology (Class 8–12)",
      description: "Engaging science classes with practical insights. Expert in biology and exam prep.",
      image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Mr. Arvind Kumar",
      subject: "Physics & Chemistry (Class 9–12)",
      description: "Physics and chemistry expert, known for simplifying tough concepts.",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Ms. Nisha Reddy",
      subject: "English & Communication (All Grades)",
      description: "Focuses on fluency, writing skills, and academic English for all classes.",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section id="courses" className="py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="relative mb-12">
          <img
            src="https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?q=80&w=2070&auto=format&fit=crop"
            alt="Tuition Center"
            className="w-full h-[400px] object-cover rounded-lg shadow-2xl"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
            <h2 className="opacity-90 text-8xl font-bold mb-4">Our Courses</h2>
            <p className="opacity-90 text-lg font-small max-w-4xl">
              We believe that only if students have the necessary skills, the right attitude, and well-built self-confidence, they would have the ability to rightly approach the next challenge with success.
            </p>
          </div>
        </div>

        {/* Best Courses Section */}
        <div className="text-left mb-16">
          <h2 className="text-4xl font-bold text-gray-800">Best Courses</h2>
        </div>

        <div className="flex items-center justify-between mb-12">
          <button onClick={handlePrev} className="text-2xl font-bold text-white p-4 bg-orange-500 rounded-full shadow-lg hover:bg-orange-600 transition-all w-16 h-16 flex items-center justify-center">
            <FaArrowLeft />
          </button>

          <div className="flex space-x-8 overflow-hidden w-full justify-center">
            {currentCards.map((card, index) => (
              <div key={index} className="w-[350px] h-[550px] bg-white shadow-lg flex flex-col border border-orange-500 rounded-none hover:bg-orange-50 transition-all">
                <img src={card.image} alt={card.title} className="w-full h-[300px] object-cover" />
                <div className="p-6 flex-1">
                  <h3 className="text-2xl font-semibold mb-4">{card.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    <span className="font-bold">Subject:</span> {card.description}
                    <br />
                    <span className="font-bold">Grade:</span> {card.grade}
                  </p>
                  <div className="flex justify-center items-center">
                    <button className="w-36 py-2 bg-orange-500 text-white text-lg rounded-none border border-transparent hover:bg-white hover:text-orange-500 hover:border-orange-500">
                      Apply Now &gt;
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button onClick={handleNext} className="text-2xl font-bold text-white p-4 bg-orange-500 rounded-full shadow-lg hover:bg-orange-600 transition-all w-16 h-16 flex items-center justify-center">
            <FaArrowRight />
          </button>
        </div>

        {/* Courses Offered Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 mt-20">Courses Offered</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At NLC, we offer a diverse range of courses designed to meet the individual needs and academic goals of students across different grade levels. Our experienced tutors provide personalized instruction and comprehensive support to ensure every student's success.
          </p>

          <div className="flex justify-center gap-4 mt-8">
            {["TUTORS BY GRADE", "TUTORS BY STREAM", "TUTORS BY ACTIVITIES"].map((label, i) => (
              <button key={i} className="text-orange-500 border-2 border-orange-500 px-6 py-2 rounded-none hover:bg-orange-500 hover:text-white transition duration-300">
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* CBSE / ICSE Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 mt-20">CBSE/ICSE/STATE SYLLABUS/NIOS</h2>
          <p className="text-lg text-gray-600">Class 1st to Class 6th</p>
          <p className="text-lg text-gray-600">All Subjects</p>
        </div>

        <div className="flex justify-center gap-2 mt-8 flex-wrap">
          {[
            "https://st4.depositphotos.com/1022914/22996/i/450/depositphotos_229966952-stock-photo-letters-fly-off-the-open.jpg",
            "https://cache.careers360.mobi/media/article_images/2023/1/13/English-essay.jpg",
            "https://img.freepik.com/free-vector/colorful-science-education-background_23-2148490697.jpg",
            "https://images.vexels.com/media/users/3/197058/raw/15626d7a0d8a12c8d255da606cade743-social-studies-elements-illustration-set.jpg",
            "https://static.india.com/wp-content/uploads/2023/01/hindi-main.jpg?impolicy=Medium_Resize&w=1200&h=800"
          ].map((img, i) => (
            <img key={i} src={img} alt={`subject-${i}`} className="w-64 h-32 object-cover" />
          ))}
        </div>



        {/* Our Dedicated Teachers Section */}
<div className="mt-20 w-full">
  <h2 className="text-5xl font-bold text-gray-800 text-center mb-12">Our Dedicated Teachers</h2>

  <div className="flex items-center justify-center gap-12">
    {/* Left Button */}
    <button
      onClick={() =>
        setTeacherScrollIndex((prev) => (prev > 0 ? prev - 1 : teachers.length - 1))
      }
      className="bg-orange-500 hover:bg-orange-600 text-white p-6 rounded-full shadow-xl flex items-center justify-center"
      style={{ width: 64, height: 64 }}
    >
      <FaArrowLeft size={32} />
    </button>

    {/* Single Teacher Card */}
    <div className="w-[800px] bg-white border border-orange-500 shadow-2xl rounded-md flex overflow-hidden transition-all duration-500">
      <img
        src={teachers[teacherScrollIndex].image}
        alt={teachers[teacherScrollIndex].name}
        className="w-[350px] h-auto object-cover"
      />
      <div className="p-10 flex flex-col justify-center">
        <h3 className="text-4xl font-bold text-gray-800 mb-6">{teachers[teacherScrollIndex].name}</h3>
        <p className="text-orange-600 font-semibold mb-4 text-2xl">{teachers[teacherScrollIndex].subject}</p>
        <p className="text-xl text-gray-700 max-w-lg">{teachers[teacherScrollIndex].description}</p>
      </div>
    </div>

    {/* Right Button */}
    <button
      onClick={() =>
        setTeacherScrollIndex((prev) => (prev < teachers.length - 1 ? prev + 1 : 0))
      }
      className="bg-orange-500 hover:bg-orange-600 text-white p-6 rounded-full shadow-xl flex items-center justify-center"
      style={{ width: 64, height: 64 }}
    >
      <FaArrowRight size={32} />
    </button>
  </div>
</div>

      </div>
    </section>
  );
}
