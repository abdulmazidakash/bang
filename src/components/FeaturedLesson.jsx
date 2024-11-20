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