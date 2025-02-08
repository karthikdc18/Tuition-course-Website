export default function Portfolio() {
  const achievements = [
    {
      title: "Student Success Stories",
      count: "500+",
      description: "Students achieved excellent grades"
    },
    {
      title: "Video Lectures",
      count: "1000+",
      description: "High-quality recorded sessions"
    },
    {
      title: "Years of Experience",
      count: "8+",
      description: "Teaching excellence"
    },
    {
      title: "Student Satisfaction",
      count: "98%",
      description: "Based on student feedback"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Achievements</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {achievements.map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold mb-2">{item.count}</div>
              <div className="text-xl font-semibold mb-2">{item.title}</div>
              <div className="text-blue-100">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}