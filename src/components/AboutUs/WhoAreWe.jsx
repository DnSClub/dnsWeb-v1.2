import React from "react";

function WhoAreWe() {
  return (
    <header className="flex flex-col xl:flex-row gap-6 md:gap-12 p-6 mb-8 text-white text-lg md:text-2xl backdrop-blur-2xl bg-white/15 w-[90%] md:w-2/3 mx-auto rounded-2xl">
      <img
        src="/images/sphere.gif"
        className="flex flex-col xl:flex-row items-start gap-8"
      ></img>
      <section className="ml-auto xl:ml-0 xl:mt-8 ml-auto text-right">
        <div className="">
          <h1 className="text-7xl">about us</h1>
        </div>
        <h2 className="mt-5 text-4xl">who are we?</h2>
        <h3 className="mt-5 text-3xl">
          a club dedicated to bringing workshop/hackathon styled events for
          programmers of all levels
        </h3>
      </section>
    </header>
  );
}

export default WhoAreWe;
