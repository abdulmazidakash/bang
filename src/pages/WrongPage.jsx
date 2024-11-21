import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

export default function WrongPage() {
  const navigate = useNavigate();

  return (

    <div className="flex justify-center items-center flex-col min-h-full gap-10">
          <Helmet>
            <title>404 Not Found | Lingo Bingo</title>
         </Helmet>
      <h1 className="text-center font-bold text-3xl">Page Not Found</h1>
      <button className="btn btn-accent" onClick={() => navigate("/")}>
        Go Back to Home
      </button>
    </div>
  );
}