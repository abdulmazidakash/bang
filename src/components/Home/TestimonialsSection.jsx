import React from "react";
import "animate.css"; // Import Animate.css

const testimonials = [
  {
    name: "John Doe",
    role: "Student",
    quote:
      "This is the best vocabulary app I have ever used. It made learning fun and easy!",
  },
  {
    name: "Jane Smith",
    role: "Teacher",
    quote:
      "I recommend this app to all my students. It’s very effective for expanding vocabulary.",
  },
  {
    name: "Carlos Garcia",
    role: "Parent",
    quote:
      "My child has improved their Spanish vocabulary significantly after using this app!",
  },
];

function TestimonialsSection() {
  return (
    <section className="bg-gray-100 py-12 md:py-24 px-4 shadow-lg border border-gray-200 rounded-lg animate__animated animate__fadeIn">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6 animate__animated animate__fadeInDown">
          What Our Users Say
        </h2>
        <p className="text-xl text-gray-600 mb-12 animate__animated animate__fadeInUp">
          Don’t just take our word for it. Here’s what our users think!
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-[#00BBA6] shadow-2xl rounded-lg animate__animated animate__zoomIn ">
              <p className="text-lg text-gray-700 italic">
                "{testimonial.quote}"
              </p>
              <div className="mt-4">
                <h3 className="text-xl font-bold text-gray-700 italic">
                  {testimonial.name}
                </h3>
                <p className="text-gray-700 font-semibold italic">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;