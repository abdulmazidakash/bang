import React from 'react';

const FeaturedLesson = () => {

      return (
        <div class="max-w-3xl mx-auto border rounded-lg p-12 shadow-md mt-14 bg-base-200">
            <h2 class="font-bold mb-2 text-center text-4xl">Get the latest language tips</h2>
            <p class="text-gray-600 mb-4 text-center font-semibold">Awesome language learners get awesome language updates</p>
            <form class="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                class="input input-bordered w-full"
                required
              />
              <button class="btn btn-accent w-full">Subscribe</button>
            </form>
            <p class="text-xs text-gray-500 mt-4">
              By clicking Subscribe you agree to receive blog updates. More information can be found in our <a href="">Privacy Terms</a>

            </p>
        </div>

      );
    };


export default FeaturedLesson;