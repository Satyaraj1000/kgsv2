import React from "react";

const OurLegacy = () => {
  return (
    <>
      <section className="w-full h-auto">
        <div className="relative rounded-xl">
          <div className="absolute -z-10 w-full h-full bg-blue overflow-hidden rounded-lg">
            <div className="w-52 h-52 rounded-full bg-white absolute -bottom-40 -left-[4%]"></div>
            <div className="w-52 h-52 rounded-full bg-white absolute -bottom-36 left-[6%]"></div>
            <div className="w-52 h-52 rounded-full bg-white absolute -bottom-32 left-[16%] flex items-center justify-center">
              <div className="w-1/2 h-1/2 bg-yellow rounded-full"></div>
            </div>
            <div className="w-32 h-32 rounded-full bg-white absolute flex items-center justify-center -top-4 -left-4">
              <div className="w-1/2 h-1/2 bg-yellow rounded-full"></div>
            </div>
            <div className="w-32 h-32 rounded-full bg-white absolute flex items-center justify-center bottom-10 left-[22%]">
              <div className="w-1/2 h-1/2 bg-yellow rounded-full"></div>
            </div>
          </div>

          <div className="w-full h-ful p-5 lg:p-10 text-center xl:text-left space-y-4">
            <h1 className="font-bold text-4xl xl:text-5xl text-green">
              THE KAPOL LEGACY
            </h1>
            <p className="text-sm md:text-lg p-2 font-semibold">
              In 2002, the seeds of Kapol Vidyanidhi International School were
              sown with a profound vision: to cultivate a realm of enlightenment
              through education. With a steadfast commitment to this noble
              cause, the management laid the foundation of the school,
              establishing a stronghold for goodness to flourish. <br />
              <br />
              From its inception, Kapol Vidyanidhi International School emerged
              as a sanctuary for nurturing the holistic development of every
              child – fostering growth not only of the mind, but also of the
              heart and soul.
              <br />
              <br />
              Affiliated to the ICSE curriculum, the school embarked on its
              pioneering journey with a humble cohort of 69 students. Yet,
              fueled by a dedication to academic excellence and holistic
              education, the institution swiftly grew in prominence, earning
              accolades as one of the foremost educational institutions in the
              suburban landscape.
            </p>
          </div>
          <div className="w-full space-y-2 lg:p-10 lg:flex lg:space-x-5 items-center justify-center">
            <img className="w-96" src="src/assets/cr-2.jpg" alt="" />
            <img className="w-96" src="src/assets/paintingbaby.jpg" alt="" />
            <img className="w-96" src="src/assets/KGA-1.jpg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default OurLegacy;
