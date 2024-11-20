import React from "react";
import { Link } from "react-router-dom";
import "./Tutorials.css"; // Import the CSS file

export default function Tutorials() {
  return (
    <div className="container mx-auto p-2">
      <h1 className="text-3xl font-bold text-center mb-4">
        Learn Vocabularies
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <div className="card card-border video-responsive">
          
            <iframe width="560" height="315" src="https://www.youtube.com/embed/SDA6f2cCkjY?si=gGgX1r4bj3IJ8DpR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="card card-border video-responsive">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/orsyE5gex8M?si=60gFNgVm0vr8NQgz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="card card-border video-responsive">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/RyA4nE56398?si=yAOCOCThI2ho0yIH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="card card-border video-responsive">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/fQqyZqFtIhE?si=9fGcsvmU6gpQXPD-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="card card-border video-responsive">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/i0lQZHnvAUc?si=sjtf7-HoXVy02I9d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="card card-border video-responsive">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/kuKgASwyVJ0?si=N5NkvKxXUcnap1om" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
      <div className="flex justify-center">
        <Link to="/start-learning" className="btn btn-accent mt-4">
          Start Lesson
        </Link>
      </div>
    </div>
  );
}