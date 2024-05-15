import React from "react";

const Tribute = () => {
  return (
    <>
      <section className="relative mt-2 w-full">
        <div className="absolute -z-10 w-full h-full bg-yellow overflow-hidden rounded-lg">
          <div className="w-52 h-52 rounded-full bg-blue absolute -bottom-40 -left-[4%]"></div>
          <div className="w-52 h-52 rounded-full bg-blue absolute -bottom-36 left-[6%]"></div>
          <div className="w-52 h-52 rounded-full bg-blue absolute -bottom-32 left-[16%] flex items-center justify-center">
            <div className="w-1/2 h-1/2 bg-yellow rounded-full"></div>
          </div>
          <div className="w-32 h-32 rounded-full bg-blue absolute flex items-center justify-center -top-4 -left-4">
            <div className="w-1/2 h-1/2 bg-yellow rounded-full"></div>
          </div>
          <div className="w-40 h-40 rounded-full bg-blue absolute flex items-center justify-center top-14 left-14">
            <div className="w-1/2 h-1/2 bg-yellow rounded-full"></div>
          </div>
          <div className="w-32 h-32 rounded-full bg-blue absolute flex items-center justify-center bottom-10 left-[22%]">
            <div className="w-1/2 h-1/2 bg-yellow rounded-full"></div>
          </div>
          <div className="w-32 h-32 rounded-xl bg-blue absolute flex items-center justify-center -right-10 -top-10">
            <div className="w-1/2 h-1/2 bg-yellow rounded-xl"></div>
          </div>
          <div className="w-32 h-32 rounded-xl bg-blue absolute flex items-center justify-center right-20 top-20">
            <div className="w-1/2 h-1/2 bg-yellow rounded-xl"></div>
          </div>
        </div>

        <div className="rounded-xl">
          <div className="w-full h-ful p-5 lg:p-10 text-center xl:text-left">
            <h1 className="font-bold text-3xl xl:text-5xl text-center text-blue">
              A TRIBUTE
            </h1>
            <h1 className="text-2xl xl:text-4xl text-center p-2">
              TO OUR CHAIRMAN
            </h1>
            <div className="w-full flex items-center justify-center">
              <div className="bg-white rounded-2xl">
                <img
                  className="xl:w-80 xl:h-80 w-40 h-40 m-5 rounded-full"
                  src=""
                  alt=""
                />
              </div>
            </div>
            <div className="font-bold text-xl xl:text-3xl flex items-center justify-center p-2">
              <h1>Late Dr. Jiten P. Mody</h1>
            </div>
            <p className="text-sm md:text-lg p-5 lg:p-10 font-semibold">
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
        </div>
      </section>
    </>
  );
};

export default Tribute;
