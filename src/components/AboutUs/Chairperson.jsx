import React from "react";

const Chairperson = () => {
  return (
    <>
      <section className="relative mt-2 w-full h-auto">
        <div className="absolute -z-10 w-full h-full bg-orange-400 overflow-hidden rounded-lg">
          <div className="absolute w-1/4 h-1/5 bg-white top-28 rounded-xl left-24"></div>
          <div className="w-52 h-52 rounded-full bg-white absolute -bottom-32 left-[16%] flex items-center justify-center">
            <div className="w-1/2 h-1/2 bg-orange-400 rounded-full"></div>
          </div>
          <div className="w-32 h-32 rounded-xl bg-white absolute flex items-center justify-center -right-10 -top-10">
            <div className="w-1/2 h-1/2 bg-orange-400 rounded-xl"></div>
          </div>
          <div className="w-32 h-32 rounded-xl bg-white absolute flex items-center justify-center right-20 top-20">
            <div className="w-1/2 h-1/2 bg-orange-400 rounded-xl"></div>
          </div>
        </div>

        <div className=" rounded-xl">
          <div className="w-full h-full p-10 lg:p-28">
            <div className="flex w-full justify-between items-center">
              <h1 className="font-bold text-3xl xl:text-6xl text-yellow">
                A VISION <br />
                FOR <br />
                THE FUTURE
              </h1>
              <div>
                <img
                  className="w-28 lg:w-60"
                  src="src/assets/lamp.png"
                  alt=""
                />
              </div>
            </div>
            <p className="mt-10 text-sm md:text-lg font-semibold">
              We at Kapol love children and it was in 1982 that the Trustees
              started the first institute in Nalasopara called as Adarsh
              Education Society (SSC). In 2002{" "}
              <b>Kapol Vidyanidhi International School (ICSE)</b>&nbsp;came into
              existence and later came Kapol Vidyanidhi College of Hotel
              Management & Technology and Jiten Mody Junior College (HSC) of
              Arts, Commerce and Science. In a sense, today we nurture the 3
              years old who come to us till they grow up into confident and
              responsible adults with a degree and skillsets to make their own
              path way in life. <br />
              <br />
              Few years back we dreamt of going one step further to prepare
              children for a global competitive world by starting an IGCSE
              School, affiliated to the Cambridge Board, UK.
              <br />
              <br />
              Our dream school, <b>Kapol Global Academy (IGCSE)</b>
              has embarked a journey of transformation, embracing new
              technologies, pedagogical approaches, and global perspectives to
              enrich the learning experience of our students. We are focusing on
              nurturing talent, fostering creativity and instilling a sense of{" "}
              <br />
              responsibility and integrity in our students sets Cambridge School
              apart as a beacon of educational excellence.
              <br />
              <br />
              As we move ahead on a path illuminated by the transformative power
              of education, we seek your support to fulfill our noble
              endeavours.
              <br />
              <br />
              Warm regards,
              <br />
              <br />
              <b>Alka Paresh Vora</b>
              <br />
              Chairperson <br />
              Kapol Global Academy Foundation
            </p>
            <img
              className="absolute bottom-0 right-0 w-40 lg:w-96"
              src="/assets/Chairperson.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Chairperson;
