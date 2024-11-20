
import React, { useContext, useEffect, useState } from "react";
import "animate.css"; // Import Animate.css
import { AuthContext } from "../contexts/AuthProvider";
import { Link } from "react-router-dom";

export default function StartLearning() {
  //fetch data from web like lesson page
  const [dataVoc, setdataVoc] = useState(null);
  useEffect(() => {
    const fetchVocabulary = async () => {
      try {
        const response = await fetch(
          "/src/data/learnwithvocabularies.json"
        );
        const data = await response.json();
        setdataVoc(data);
      } catch (error) {
        setdataVoc("Failed to fetch lesson data");
      }
    };

    fetchVocabulary();
  }, []);

  const { user, logIn } = useContext(AuthContext);

  // console.log("from start learning", logIn);
  return (
    <div className="mx-auto mt-10 px-4">

      {/* Main Section with Animated Heading */}
      <div className="text-center mt-10">
        <h1 className="animate__animated animate__fadeIn animate__delay-1s text-4xl font-bold text-gray-900">
          Ready to Learn a New Language?
        </h1>
        <p className="animate__animated animate__fadeIn animate__delay-2s text-lg text-gray-600 mt-4">
          Explore lessons, build vocabulary, and master a new language with
          ease. Let's get started today!
        </p>
      </div>
      {/* Static Lesson Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {dataVoc ? (
          dataVoc.lessons.map((lesson) => (
            <Link key={lesson.lesson_no} to={`/lesson/${lesson.lesson_no}`}>
              <div className="card bg-[#00BBA6]  w-full aspect-w-9 aspect-h-16 shadow-xl text-center p-6">
                <h2 className="text-2xl font-bold">
                  Lesson {lesson.lesson_no}
                </h2>
                <p className="text-lg text-gray-700 mt-2">
                  {lesson.lesson_title}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <div className="flex justify-center items-center">
            <div
              className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
              role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>

      {/* Tutorial section */}
      <div className="mt-10">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Learn the Alphabet
        </h2>
        <div className="flex justify-center mt-6 border border-gray-200 p-2 rounded-lg lg:w-8/12 mx-auto">
         
            <iframe 
            className="w-full rounded-lg"
             
            height="450" 
            src="https://www.youtube.com/embed/HeBcxdgQI3c?si=JwfL4Bj1SQGCYoRj" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="text-center mt-6">
          <Link to="/tutorials">
            <button className="btn-accent btn text-white px-4 py-2 rounded">
              View more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}