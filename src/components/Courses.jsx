export default function Courses() {
  const courses = [
    {
      grade: "Grade 5-6",
      subjects: ["Mathematics", "Science", "English"],
      description: "Foundation building with focus on basics",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80"
    },
    {
      grade: "Grade 7-8",
      subjects: ["Mathematics", "Science", "English"],
      description: "Advanced concepts with practical applications",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80"
    },
    {
      grade: "Grade 9-10",
      subjects: ["Mathematics", "Science", "English"],
      description: "Exam preparation and concept mastery",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section id="courses" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Courses</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={course.image}
                alt={course.grade}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{course.grade}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Subjects:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {course.subjects.map((subject, idx) => (
                      <li key={idx}>{subject}</li>
                    ))}
                  </ul>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
                  View Recorded Lectures
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}