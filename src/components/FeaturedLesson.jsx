// import React from "react";
// import { Link } from "react-router-dom";
// import "animate.css"; // Import Animate.css

// export default function Banner() {
//   const playClickSound = () => {
//     const audio = new Audio("../src/assets/sounds/click.mp3"); // Path to the click sound file in the public directory
//     audio.play().catch((error) => {
//       console.error("Error playing sound:", error);
//     });
//   };
//   return (
//     <div
//       className="hero min-h-screen rounded-md mt-8"
//       style={{
//         backgroundImage:
//           "url(https://png.pngtree.com/thumb_back/fh260/background/20240812/pngtree-top-view-various-colorful-english-vocabulary-image_16129633.jpg)",
//       }}>
//       <div className="hero-overlay bg-opacity-60"></div>
//       <div className="hero-content text-neutral-content text-center">
//         <div className="max-w-md">
//           {/* Animated Header */}
//           <h1 className="animate__animated animate__fadeIn animate__delay-1s mb-5 text-4xl sm:text-5xl font-bold">
//             Start Your Language Journey!
//           </h1>
//           {/* Animated Paragraph */}
//           <p className="animate__animated animate__fadeIn animate__delay-2s mb-5">
//             Explore lessons, build vocabulary, and master a new language with
//             ease. Let's get started today!
//           </p>
//           {/* Animated Button */}
//           <Link to="/start-learning">
//             <button
//               className="btn btn-primary animate__animated animate__bounceIn animate__delay-3s"
//               onClick={playClickSound}>
//               Get Started
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react';

const FeaturedLesson = () => {

  const lessons = [
    {
      id: "lesson1",
      title: "Basic Greetings",
      difficulty: "Easy",
      description: "Learn how to greet people in Spanish.",
      details: "Start with the basics like 'Hello', 'Good Morning', and 'Good Night'.",
    },
    {
      id: "lesson2",
      title: "Numbers & Counting",
      difficulty: "Medium",
      description: "Master numbers and counting in Spanish.",
      details: "Practice counting from 1 to 100 and learn essential number-based phrases.",
    },
    {
      id: "lesson3",
      title: "Common Phrases",
      difficulty: "Hard",
      description: "Familiarize yourself with commonly used phrases.",
      details: "Understand essential phrases for daily conversations.",
    },
  ];
      return (
        <div className="my-12 px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-center mb-8">Explore Popular Lessons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lessons.map((lesson) => (
              <div
                key={lesson.id}
                className="card bg-base-100 shadow-md hover:shadow-lg transition-all hover:scale-105"
              >
                <div className="card-body">
                  <h3 className="text-xl font-semibold">{lesson.title}</h3>
                  <p className="text-gray-600 mb-4">{lesson.description}</p>
                  <div className="badge badge-outline">{lesson.difficulty}</div>
                  <div className="mt-4">
                    <button
                      className="btn btn-sm btn-primary w-full"
                      onClick={() => alert(lesson.details)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };


export default FeaturedLesson;