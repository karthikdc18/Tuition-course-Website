import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function About() {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const handleFAQClick = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Static Image Section with Borders */}
        <div className="relative group">
        <div className="relative mb-12">
  <img
    src="https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="Tuition Center"
    className="w-full h-[400px] object-cover rounded-lg shadow-2xl"
  />
  <div className="absolute inset-0 bg-black opacity-50"></div>
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
    <h2 className="opacity-90 text-8xl font-bold mb-4">About Us</h2>
    <p className="opacity-90 text-lg font-small max-w-4xl">
      Home - Believes that the discipline of the students and the knowledge acquired from the be ginning becomes the most important asset for the students to succeed in their present as well as future.
    </p>
  </div>
</div>

        </div>

        {/* DOWN ARROW MARK */}
        <div className="flex justify-center mb-8">
          <style>
            {`
              @keyframes blink {
                0%, 100% {
                  opacity: 1;
                }
                50% {
                  opacity: 0;
                }
              }
              .blinking {
                animation: blink 1s infinite;
              }
            `}
          </style>
          <img src="downArrow.png" alt="Down Arrow" className="w-8 h-8 blinking" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div>
            <img src="about-img.png" alt="Tuition Center" className="w-full h-auto rounded-lg" />
          </div>

          {/* Right Text Content */}
          <div>
            <h3 className="text-4xl font-bold mb-4">I will stay with you until you pass your exam</h3>
            <p className="text-gray-600 mb-6">
              A student's go-to blog for the latest stories, discoveries, fun activities, exam tips, and more.
              Take the next step toward your personal and professional goals with EDU-TUITION.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center hover:text-blue-500">
                <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                Experienced and qualified teachers
              </li>
              <li className="flex items-center hover:text-blue-500">
                <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                Small batch sizes for personal attention
              </li>
              <li className="flex items-center hover:text-blue-500">
                <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                Regular assessments and feedback
              </li>
              <li className="flex items-center hover:text-blue-500">
                <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                Recorded video lectures for revision
              </li>
            </ul>
          </div>
        </div>

        {/* OUR BELIEFS Section */}
        <div className="mt-14 text-center">
          <h2 className="text-4xl font-bold mb-6 mt-20">OUR BELIEFS</h2>
          <p className="text-lg text-gray-600 mb-8 mt-8 mb-14 text-shadow-lg">
            At EDU-TUITION, we believe that every student is unique and deserves an educational experience tailored to their individual needs.
            Our guiding principles focus on fostering an environment that promotes self-confidence, patience, and flexibility. We are committed
            to providing personalized learning experiences that empower students to excel at their own pace. These beliefs shape everything we do, 
            from how we teach to the support we offer along the way.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-[0px_4px_12px_rgba(0,0,255,0.3)] hover:shadow-[0px_6px_20px_rgba(0,0,255,0.5)] hover:bg-blue-50 hover:text-blue-800 flex justify-center items-center transition-all duration-300">
              <p className="text-gray-600 text-center">Every student can succeed with the right guidance and support.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-[0px_4px_12px_rgba(0,0,255,0.3)] hover:shadow-[0px_6px_20px_rgba(0,0,255,0.5)] hover:bg-blue-50 hover:text-blue-800 flex justify-center items-center transition-all duration-300">
              <p className="text-gray-600 text-center">Learning is most effective when it is engaging and enjoyable.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-[0px_4px_12px_rgba(0,0,255,0.3)] hover:shadow-[0px_6px_20px_rgba(0,0,255,0.5)] hover:bg-blue-50 hover:text-blue-800 flex justify-center items-center transition-all duration-300">
              <p className="text-gray-600 text-center">Every student deserves a personalized approach to learning.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-[0px_4px_12px_rgba(0,0,255,0.3)] hover:shadow-[0px_6px_20px_rgba(0,0,255,0.5)] hover:bg-blue-50 hover:text-blue-800 flex justify-center items-center transition-all duration-300">
              <p className="text-gray-600 text-center">Growth is achieved through patience, practice, and persistence.</p>
            </div>
          </div>
        </div>


 {/* BOX INTRODUCTION Section */}
 <div className="border border-lightDark rounded-[0.625rem] mt-24">
          <div className="flex flex-col md:flex-row gap-8 items-center pt-[2.5rem] px-[2.5rem]">
            {/* Name/Description above the image */}
            <div className="flex-shrink-0 w-full md:w-[40%] text-center">
  <h2 className="text-2xl font-bold text-gray-800">Hello, I'm Saira Banu </h2>
  <p className="text-gray-500 mt-2">Founder | Teacher | Volunteering</p>
  <img
    src="wp2180562.jpg"
    alt="Photographer"
    className="w-full object-cover rounded-lg mt-8 shadow-2xl"
  />
</div>


            {/* Content on the right */}
            <div className="flex-grow">
              <div className="flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-yellow-400">
                  <polygon points="12 17.27 18.18 21 15.54 13.97 21 9.24 14.81 9.24 12 2 9.19 9.24 3 9.24 8.46 13.97 5.82 21 12 17.27"></polygon>
                </svg>
                <p className="text-lightGray font-[500] text-[1.25rem] md:text-[1.875rem]">
                  Introduction
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed text-[0.875rem] mt-[0.75rem]">
                My journey as an educator has always been driven by a passion to empower students and help them unlock their full potential.
                As a dedicated teacher from India, I specialize in providing personalized tuition for students in grades 5 to 10. With years of experience,
                I strive to make learning an engaging and transformative experience, blending traditional teaching methods with modern techniques.
                My approach focuses on not only improving academic performance but also fostering a love for learning that lasts a lifetime. Join me at Edu-Tuition,
                where every lesson is designed to inspire, guide, and support students as they take the next step toward academic success.
              </p>

              {/* Let's Work Together Button */}
              <div className="mt-6 ml-6">
  <a
    href="/contact"
    className="inline-block px-4 py-2 mt-4 border border-yellow-500 text-yellow-500 font-medium rounded-md text-sm hover:bg-yellow-500 hover:text-white focus:outline-none focus:ring-1 focus:ring-yellow-400 shadow-2xl hover:shadow-xl"
  >
    Let's Work Together
  </a>
</div>

            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-8 px-[2.5rem] flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-[1.23rem] mb-4 md:mb-0">
              <strong>Email:</strong>
              <span className="mx-2"></span>
              <a href="mailto:your.email@example.com" className="hover:text-blue-500 focus:text-blue-500">
                your.email@example.com
              </a>
            </p>
            <div className="flex gap-4 mb-4 md:mb-0">
  <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 shadow-2xl hover:shadow-2xl">
    <FaFacebookF className="w-7 h-7" />
  </a>
  <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 shadow-2xl hover:shadow-2xl">
    <FaTwitter className="w-7 h-7" />
  </a>
  <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700 shadow-2xl hover:shadow-2xl">
    <FaInstagram className="w-7 h-7" />
  </a>
</div>

            <p className="text-gray-600 text-[1.23rem]">
              <strong>Phone:</strong>
              <a href="tel:+1234567890" className="hover:text-blue-500 focus:text-blue-500">
                +123 456 7890
              </a>
            </p>
          </div>
          <div className="border-b-2 border-customGray mt-8"></div> {/* This line adds the border below the section */}
        </div>


        {/* FAQ Section */}
        <div className="mt-20 bg-gray-100 py-12 mt-24">
          <div className="w-full max-w-4xl mx-auto ">
            <h3 className="text-5xl font-bold text-center text-gray-800 mb-20 mt-8 ">Frequently Asked Questions</h3>
            <div className="flex flex-col gap-8">
              
              {/* FAQ Card 1 */}
              <div
                className="border border-gray-300 p-6 rounded-lg shadow-sm cursor-pointer hover:shadow-md hover:bg-gray-50 transition-all duration-300"
                onClick={() => handleFAQClick(0)}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <span className="text-xl text-gray-600">&#x1F4D6;</span>
                    <h4 className="text-xl font-medium text-gray-800">What subjects do you offer tuition for?</h4>
                  </div>
                  <span className={`text-xl text-gray-600 transform transition-all ${activeFAQ === 0 ? 'rotate-180' : ''}`}>
                    &#x2193;
                  </span>
                </div>
                {activeFAQ === 0 && (
                  <p className="text-gray-600 mt-4 text-lg">
                    I offer tuition for various subjects including Mathematics, Science, English, and Social Studies for students from grades 5 to 10.
                  </p>
                )}
              </div>

              {/* FAQ Card 2 */}
              <div
                className="border border-gray-300 p-6 rounded-lg shadow-sm cursor-pointer hover:shadow-md hover:bg-gray-50 transition-all duration-300"
                onClick={() => handleFAQClick(1)}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <span className="text-xl text-gray-600">&#x1F4DD;</span>
                    <h4 className="text-xl font-medium text-gray-800">How do I schedule a tuition session?</h4>
                  </div>
                  <span className={`text-xl text-gray-600 transform transition-all ${activeFAQ === 1 ? 'rotate-180' : ''}`}>
                    &#x2193;
                  </span>
                </div>
                {activeFAQ === 1 && (
                  <p className="text-gray-600 mt-4 text-lg">
                    You can schedule a session by contacting me via email or the contact form. I will coordinate with you to select a convenient time.
                  </p>
                )}
              </div>

              {/* FAQ Card 3 */}
              <div
                className="border border-gray-300 p-6 rounded-lg shadow-sm cursor-pointer hover:shadow-md hover:bg-gray-50 transition-all duration-300"
                onClick={() => handleFAQClick(2)}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <span className="text-xl text-gray-600">&#x1F4C8;</span>
                    <h4 className="text-xl font-medium text-gray-800">Do you offer online tuition?</h4>
                  </div>
                  <span className={`text-xl text-gray-600 transform transition-all ${activeFAQ === 2 ? 'rotate-180' : ''}`}>
                    &#x2193;
                  </span>
                </div>
                {activeFAQ === 2 && (
                  <p className="text-gray-600 mt-4 text-lg">
                    Yes, I offer online tuition via video calls, making it easy for students to learn from the comfort of their own home.
                  </p>
                )}
              </div>

              {/* FAQ Card 4 */}
              <div
                className="border border-gray-300 p-6 rounded-lg shadow-sm cursor-pointer hover:shadow-md hover:bg-gray-50 transition-all duration-300"
                onClick={() => handleFAQClick(3)}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <span className="text-xl text-gray-600">&#x1F4C3;</span>
                    <h4 className="text-xl font-medium text-gray-800">What is the cost of tuition?</h4>
                  </div>
                  <span className={`text-xl text-gray-600 transform transition-all ${activeFAQ === 3 ? 'rotate-180' : ''}`}>
                    &#x2193;
                  </span>
                </div>
                {activeFAQ === 3 && (
                  <p className="text-gray-600 mt-4 text-lg">
                    Tuition fees vary depending on the subject and duration of the lessons. Please reach out for a personalized quote.
                  </p>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
