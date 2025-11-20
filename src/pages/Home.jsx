import React from "react";
import Header from "../components/Header";
import ImgRight from "../assets/main-img.png";
import BgStudy from "../assets/iCloud/1.jpeg";
import SmallImg from "../assets/about-sub.jpg";
import Card from "../components/CardItem";
import CardItem from "../components/CardItem";
import Footer from "../components/Footer";
import DrawImg from "../assets/choose-1.jpg";
import IconImg1 from "../assets/experience.svg";
import TeachersList from "../components/TeachersList";
import VideoPopup from "../components/VideoPopup";
import Testimonial from "../components/Testimonial";
import Blog from "../components/Blog";
import CardTeach from "../components/CardTeach";
import BlogCard from "../components/Blogcard";
import { Link } from "react-router";
import ColorfulTitle from "../components/ColorFullTitle";

const Home = () => {
  return (
    <>
      <div className="bg-home h-auto">
        <section className="md:px-10 px-2 pt-18 md:pt-0 md:py-0">
          <Header />
          <div className="md:flex md:justify-around gap-0">
            <div className="left md:w-1/2 w-full md:relative md:top-[230px] relative top-10 md:px-10 px-2">
              <p className="text-[#95c535] md:text-[18px] text-base uppercase font-bold">
                Play. <span className="text-[#7b68ee]">Learn.</span> Grow
              </p>
              <h4 className="md:text-6xl text-4xl font-bold py-3">
                Welcome to Carnival Kids
                <span className="text-[#7b68ee]"> Montessori</span>
              </h4>
              <p>
                We believe every child is naturally curious, capable, and eager
                to learn. Our Montessori environment nurtures independence,
                creativity, and confidence helping children grow into
                compassionate, lifelong learners.
              </p>
              <div className="py-5 flex justify-start gap-5">
                <Link to={"/contact"}>
                  <button className="bg-[#fefcfc] text-[#7b68ee] rounded-[50px] shadow-xl/30 px-9 py-3 cursor-pointer">
                    Enroll Now
                  </button>
                </Link>
                <Link to={"/gallery"}>
                  <button className="bg-[#7b68ee] text-white rounded-[50px] shadow-xl/30 px-9 py-3 cursor-pointer">
                    Gallery
                  </button>
                </Link>
              </div>
            </div>
            <div className="right md:w-1/2 w-full h-auto md:relative md:top-30 relative top-10">
              <img
                src={ImgRight}
                alt=""
                className="md:w-full md:h-[70%] h-[250px] object-contain"
              />
            </div>
          </div>
        </section>

        <section className="md:py-0 md:pt-0 pt-50 md:pb-10 pb-20">
          <div className="bg-shape">
            <div className="md:flex md:justify-around items-start gap-0">
              <div className="left md:w-1/2 w-full md:relative md:top-[250px] relative top-10 md:px-20 px-5">
                <p className="text-[#95c535] md:text-[18px] text-base uppercase font-bold">
                  <ColorfulTitle />
                </p>
                <h4 className="md:text-5xl text-3xl font-bold py-3">
                  Why Choose Montessori Education?
                </h4>
                <p>
                  ✦ Individualized Learning – Children progress at their own
                  pace with guidance from Montessori-trained educators.
                </p>
                <p>
                  ✦ Hands-On Exploration – Purposeful materials encourage
                  discovery, problem-solving, and critical thinking.
                </p>
                <p>
                  ✦ Independence & Confidence – Students develop
                  self-motivation, responsibility, and respect for others.
                </p>
                <p>
                  ✦ Whole-Child Development – Supporting academic, emotional,
                  and social growth in a joyful setting.
                </p>
                <div className="md:py-5 py-5 flex justify-start gap-5">
                  <Link to={"/curriculum"}>
                    <button className="bg-[#7b68ee] text-white rounded-[50px] shadow-xl/30 px-9 py-3 cursor-pointer">
                      Learn more
                    </button>
                  </Link>
                </div>
              </div>
              <div className="right md:w-1/2 max-w-fit md:relative md:top-60 md:left-0 left-5 relative top-20 p-1">
                <img
                  src={BgStudy}
                  alt=""
                  className="w-10/12 h-10/12 object-cover"
                />
                <div className="toolTip bg-white flex justify-start gap-2 w-[300px] rounded-[10px] shadow-2xl md:relative md:-top-30 md:left-30 relative left-0 -top-30 py-2">
                  <img src={SmallImg} alt="" className="w-[150px] px-5" />
                  <div>
                    <h4 className="md:text-5xl text-5xl font-bold text-[#95c535]">
                      2014
                    </h4>
                    <h6 className="text-[18px]">School Since</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="md:pt-15 pt-20">
          <div className="bg-[#f6f5ff] py-10 text-center">
            <h1 className="text-[#95c535] text-[18px] uppercase font-bold md:pt-5 pt-3">
              On Going Classes
            </h1>
            <h4 className="md:text-5xl text-3xl font-bold pt-5 md:pb-10 pb-5">
              Popular Classes
            </h4>
            <CardItem />
          </div>
        </section>

        <section>
          <div className="bg-[#5c84eb] text-white pt-30 pb-10">
            <div className=" md:flex justify-around">
              <div className="text-center ">
                <p className="text-6xl font-bold">10+</p>
                <p className="text-[20px]">Years of Experience</p>
                <img
                  src={IconImg1}
                  alt=""
                  className="w-20 relative -top-25 left-20 opacity-30"
                />
              </div>
              <div className="text-center">
                <p className="text-6xl font-bold">5+</p>
                <p className="text-[20px]">Qualified Teachers</p>
                <img
                  src={IconImg1}
                  alt=""
                  className="w-20 relative -top-25 left-20 opacity-30"
                />
              </div>
              <div className="text-center">
                <p className="text-6xl font-bold">100+</p>
                <p className="text-[20px]">Students Enrolled</p>
                <img
                  src={IconImg1}
                  alt=""
                  className="w-20 relative -top-25 left-30 opacity-30"
                />
              </div>
              <div className="text-center">
                <p className="text-6xl font-bold">10+</p>
                <p className="text-[20px]">Total Award</p>
                <img
                  src={IconImg1}
                  alt=""
                  className="w-20 relative -top-25 left-10 opacity-30"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="md:pt-0">
          <div className="bg-[#f6f5ff] py-10 text-center">
            <h4 className="md:text-5xl text-3xl font-bold pt-5 md:pb-10 pb-5">
              At Carnival Kids, we don’t just teach <br /> we inspire a{" "}
              <span className="text-[#7b5bff]"> love for learning!</span>
            </h4>
            <CardTeach />
          </div>
        </section>
        <section>
          <div className="py-20 md:px-20 px-5 md:flex justify-around items-start gap-5">
            <div className="left md:w-1/2 w-full md:p-5 p-0">
              <img src={DrawImg} alt="" />
            </div>
            <div className="right md:w-1/2 w-full">
              <p className="text-[#95c535] text-[18px] uppercase font-bold md:pt-5 pt-3">
                Why Choose us?
              </p>
              <h2 className="md:text-5xl text-3xl font-semibold py-2">
                Montessori Learning,
                <span className="text-[#7b5bff]"> Joyful Growing</span>
              </h2>
              <p className="text-[18px] py-2">
                At Carnival Kids, we don’t just teach — we nurture curious minds
                and kind hearts. Every child here feels seen, loved, and
                inspired to learn joyfully every day. Through our Montessori
                approach, every child blossoms at their own pace — growing in
                confidence, curiosity, and a lifelong love for learning.
              </p>
              <div className="md:grid md:grid-cols-2 grid grid-cols-1 gap-5 md:gap-8 py-5">
                <div className="shadow-2xl bg-[#ffffff] p-4 border-l-amber-400 border-l-2 rounded-2xl">
                  <p className="md:text-[18px] text-[20px]">
                    🌟 Individual Attention
                  </p>
                </div>
                <div className="shadow-2xl bg-[#ffffff] p-4 border-l-amber-400 border-l-2 rounded-2xl">
                  <p className="md:text-[18px] text-[20px]">
                    🌱 Holistic Development
                  </p>
                </div>
                <div className="shadow-2xl bg-[#ffffff] p-4 border-l-amber-400 border-l-2 rounded-2xl">
                  <p className="md:text-[18px] text-[20px]">
                    🌿 Personalized Learning Path
                  </p>
                </div>
                <div className="shadow-2xl bg-[#ffffff] p-4 border-l-amber-400 border-l-2 rounded-2xl">
                  <p className="md:text-[18px] text-[20px]">
                    🎨 Creative & Sensory Exploration
                  </p>
                </div>
                <div className="shadow-2xl bg-[#ffffff] p-4 border-l-amber-400 border-l-2 rounded-2xl">
                  <p className="md:text-[18px] text-[20px]">
                    🧠 Confidence Through Independence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Teacher List */}
        <section>
          <div className="bg-[#f6f5ff] md:py-20 text-center md:p-0 p-5">
            
            <h4 className="md:text-5xl text-3xl font-bold pt-5 md:pb-10 pb-5">
              Expert Teacher
            </h4>
            <TeachersList />
          </div>
        </section>
        {/* Video Sections */}
        <section>
          <div className="bg-[#f6f5ff] py-0 text-center w-full overflow-x-hidden">
            <VideoPopup />
          </div>
        </section>

        {/* Testimonial Sections */}
        <section>
          <div className=" py-5 text-center">
            <h4 className="md:text-5xl text-3xl font-bold pt-5 md:pb-10 pb-5">
              Testimonials
            </h4>
            <div className="py-5">
              <Testimonial />
            </div>
          </div>
        </section>
        {/* Blog Sections */}
        <section>
          <div className="bg-[#f6f5ff] py-10 text-center">
            <h1 className="text-[#95c535] text-[18px] uppercase font-bold md:pt-5 pt-3">
              Blog & News
            </h1>
            <h4 className="md:text-5xl text-3xl font-bold pt-5 md:pb-10 pb-5">
              Recent Blog
            </h4>
            <div className="py-10">
              <BlogCard />
            </div>
            <div className="py-5 flex justify-center cursor-pointer">
              {/* Desktop Button */}
              <Link to={"/blog"}>
                <button className="md:block bg-[#7b5bff] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#6b4bf8] cursor-pointer transition cursor-pointe">
                  View More Blog
                </button>
              </Link>
            </div>
          </div>
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </>
  );
};

export default Home;
