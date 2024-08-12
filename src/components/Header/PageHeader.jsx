import React from "react";

const PageHeader = ({ pageTitle, desc1, desc2, imgUrl }) => {
  return (
    <header className="flex gap-6 md:gap-12 p-6 mb-8 text-white text-lg md:text-2xl backdrop-blur-2xl bg-white/15 w-[90%] md:w-2/3 mx-auto rounded-2xl">
      <section className="flex flex-col items-start gap-8">
        <div className="">
          <h1 className="-left-12 -top-12 text-7xl">&#10100;</h1>
          <h1 className="pl-10 text-7xl">{pageTitle}</h1>
        </div>
        <h2 className="pl-10 text-4xl">{desc1}</h2>
        <h3 className="pl-10 text-3xl">{desc2}</h3>
      </section>
      <img src={imgUrl}></img>
    </header>
  );
};

export default PageHeader;
