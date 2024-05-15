import React from "react";

const Page3 = () => {

  return (
    <div>
      <div className="w-full space-y-4 md:space-y-0 md:space-x-2 lg:space-x-4 overflow-hidden">
        <div className="w-full h-auto">
          <div className="w-full relative">
            <div className="absolute w-full h-full bg-sky-400 -z-10">
              <div
                className="absolute w-1/2 h-2/3 -top-4 -left-10 bg-white rounded-full"
              ></div>
              <div
                className="absolute w-3/4 h-1/2 bottom-0 left-[30%] bg-white rounded-full"
              ></div>
            </div>
            <div className="w-full h-36">
              <img
                className="max-w-max h-full"
                src="/assets/images/grow.png"
                alt=""
              />
            </div>
            <div className="md:w-full md:h-28 flex justify-center">
              <img
                className="max-w-max h-full"
                src="/assets/images/with.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-full  p-3 border-t-2 border-t-black border-b-2 border-b-black">
            <h1 className="font-bold text-5xl font-[Cardo-Bold]">
              KAPOL GLOBAL ACADEMY (IGCSE)
            </h1>
          </div>
        </div>

        <div className="relative w-full h-full flex flex-col lg:flex-row items-center space-x-2">
          <div className="absolute bg-red-200 w-1/3 -z-10 h-full">
            <div className="absolute w-1/2 h-1/2 bg-white"></div>
            <div className="absolute w-1/2 h-1/2 bottom-0 right-0 bg-white"></div>
          </div>
          <div id="textscroll" className="w-full h-1/2 lg:h-full lg:w-1/3 text-3xl p-2">
            <div className="grid-flow-col space-y-2 md:space-y-4 font-bold">
              <div className="flex space-x-2 font-bold text-xl md:text-2xl xl:text-4xl">
                <h1 className="text-blue">OUR CORE</h1>
                <h1>FEATURES</h1>
              </div>
              <div className="flex space-x-2 text-lg md:text-xl lg:text-2xl">
                <h2 className="text-pink">SMALL CLASS</h2>
                <h2>SIZES</h2>
              </div>
              <div className="text-sm md:text-lg font-semibold">
                <p>
                  Each class will have a maximum of 20 students, with a
                  dedicated class teacher and an assisting teacher, in addition
                  to subject teachers. This ensures that each child receives
                  individualized care and is encouraged to learn according to
                  his or her unique strengths and learning styles.
                </p>
              </div>
              <div className="flex space-x-2 text-lg md:text-xl lg:text-2xl">
                <h2>DEDICATED</h2>
                <h2 className="text-pink">SCHOOL COUNSELLOR</h2>
              </div>
              <div className="text-sm md:text-lg font-semibold">
                <p>
                  We understand it is important to help children with their
                  emotional and social development. Whether it's making friends,
                  dealing with feelings, or facing tough times, the school
                  counselor is here to make sure every child does well and is
                  happy in school.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-1/2 lg:h-full lg:w-2/3 gap-2 p-2">
            <div className="w-full h-full">
              <div className="w-full grid grid-cols-2 grid-rows-2 space-y-2 overflow-hidden h-1/2">
                <div className="space-x-2 col-span-2 row-span-1 flex h-">
                  <img
                    id="imagescaling"
                    className="w-1/2 h-auto"
                    src="/assets/images/classroom-1.jpg"
                  />
                  <img
                    id="imagescaling"
                    className="w-1/2"
                    src="/assets/images/classroom-2.jpg"
                  />
                </div>
                <div className="space-x-2 col-span-2 row-span-1 flex h-64">
                  <img
                    id="imagescaling"
                    className="w-1/2"
                    src="/assets/images/mini-library.jpg"
                  />
                  <img
                    id="imagescaling"
                    className="w-1/2"
                    src="/assets/images/slide.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
