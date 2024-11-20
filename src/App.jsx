// import React from "react";

// const App = () => {
//   // Create a function to play the sound
  

//   return (
//     <div className="App">
//       <h1>Welcome to the Learning App</h1>
//       <button onClick={playClickSound} className="btn btn-primary">
//         Start Learning
//       </button>
//     </div>
//   );
// };

// export default App;


// new code -----------------------------------------------------

import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("Here is your toast.");

const App = () => {
  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </div>
  );
};