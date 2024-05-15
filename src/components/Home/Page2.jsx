import React from "react";

const Page2 = () => {
  return (
    <>
      <div className="w-full h-screen">
        <div className="w-full h-full">
          <div className="w-full h-full flex-col lg:flex-row">

            <div>
              <div className="py-5 md:py-10">
                <h1 className="bg-bluekga px-5 font-semibold w-fit text-center text-white text-4xl md:text-6xl">
                  LET YOUR CHILD
                </h1>
              </div>

              <div className="px-5 space-y-4">
                <div className="md:text-xl">
                  <h1 className="font-semibold w-fit text-center text-bluekga text-4xl md:text-6xl">
                    LEARN
                  </h1>
                  <p>
                    problem-solving and life skills through play and activities
                  </p>
                </div>
                <div className="md:text-xl">
                  <h1 className="font-semibold w-fit text-center text-pinkkga text-4xl md:text-6xl">
                    PLAY
                  </h1>
                  <p>
                    indore & outdoor sports like table tennis, <br /> chess,
                    badminton, karate, gymnastic, skating and more.
                  </p>
                </div>
                <div className="md:text-xl">
                  <h1 className="font-semibold w-fit text-center text-orange-500 text-4xl md:text-6xl">
                    EXCEL
                  </h1>
                  <p>as global citizens</p>
                </div>
              </div>

              <div className="py-10 text-gray-700">
                <h1 className="px-5 font-semibold w-fit text-center text-2xl md:text-4xl">
                  WITH NEW AGE
                </h1>
                <h1 className="px-5 font-semibold w-fit text-center text-2xl md:text-4xl">
                  LEARNING METHODS
                </h1>
              </div>

              <div className="space-y-4">
                <h1 className="bg-bluekga px-5 font-semibold w-fit text-center md:text-2xl">
                  ONLY 20 CHILDREN PER CLASS
                </h1>
                <h1 className="bg-greenkga px-5 font-semibold w-fit text-center md:text-2xl">
                  DEDICATED SCHOOL COUNSELLOR
                </h1>
                <h1 className="bg-orange-500 px-5 font-semibold w-fit text-center md:text-2xl">
                  STATE-OF-THE ART INFRASTRUCTURE
                </h1>
              </div>
            </div>

            <div className="relative">
              <div className="lg:absolute bottom-0 right-0 -z-10">
                <img className="w-full h-full" src="/assets/images/paint girl.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page2;
