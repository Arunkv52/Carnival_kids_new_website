import React, { useState } from "react";
import "../App.css";
import Header from "../components/Header";
import curriculumImg from "../assets/curriculum-next.png";
import Icon_34 from "../assets/34.svg";
import VideoPopup from "../components/VideoPopup";
import Footer from "../components/Footer";
import Event from "../assets/about-04.png";
import Wave from "../assets/hero-boy-2.png";
import GirlPng from "../assets/about-girl.png";
import AccordionNew from "../components/AccordionNew";
import Bird1 from "../assets/bird-1.png";
import Bird2 from "../assets/bird-2.png";
import Bird3 from "../assets/bird-bottom.png";

const Curriculam = () => {


  return (
    <>
      <div className="curriculam-bg">
        <Header />
        <div className=" px-15 w-full py-20 hidden md:block">
          <h2 className="md:text-5xl text-2xl text-left md:relative md:top-20 md:left-[60%] relative top-12 -left-5  font-bold ">
            Welcome to our <br />
            <span className="text-[#7b5bff] text-6xl">child care school</span>
          </h2>
        </div>
      </div>
      <div className="md:flex justify-between items-center gap-5 py-20 md:px-20 px-5 bg-[#f4f4f4]">
        <div className="md:w-1/2 w-full">
          <img src={curriculumImg} alt="" />
        </div>
        <div className="md:w-1/2 w-full">
          <h5 className="md:text-5xl text-4xl font-bold">
            A Child-Centered Montessori
            <span className="text-[#7b5bff]"> Learning Journey</span>
          </h5>
          <p className="py-5">
            At Carnival Kids, our curriculum is rooted in the Montessori
            philosophy, which encourages children to explore, discover, and
            learn at their own pace. We focus on nurturing independence,
            creativity, critical thinking, and emotional well-being through
            hands-on learning experiences.
          </p>
          <div className="md:flex justify-start items-center gap-5 py-2">
            <span className="bg-[#c28b8b] p-1 rounded-[50px]">
              <img src={Icon_34} alt="" className=" relative -left-4" />
            </span>

            <div>
              <p className="text-3xl font-bold">Develop real-world skills</p>
              <p className="py-2 text-black/60">
                By engaging in meaningful tasks, children gain confidence, learn
                to care for themselves and their surroundings, and develop
                habits that support lifelong success.
              </p>
            </div>
          </div>
          <div className="md:flex justify-start items-center gap-5 py-2">
            <span className="bg-[#779ad3] p-1 rounded-[50px]">
              <img src={Icon_34} alt="" className=" relative -left-4" />
            </span>
            <div>
              <p className="text-3xl font-bold">
                Grow socially and emotionally
              </p>
              <p className="py-2 text-black/60">
                By nurturing a safe and supportive space, we help children
                become confident individuals who trust themselves, connect
                easily with others, and handle new situations with courage and
                optimism.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Video Sections */}

      <div className="bg-[#f6f5ff] py-0 text-center w-full overflow-x-hidden">
        <VideoPopup />
      </div>

      {/* wave start */}
      <div>
        <AccordionNew />
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Curriculam;
