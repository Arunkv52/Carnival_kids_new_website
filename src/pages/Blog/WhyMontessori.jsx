import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const WhyMontessori = () => {
  return (
    <>
      <div className="blog-main md:py-20 md:pt-0 md:pb-10 pt-60 pb-10">
        <Header />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#a2d9ff"
            fill-opacity="0.54"
            d="M0,96L20,106.7C40,117,80,139,120,122.7C160,107,200,53,240,64C280,75,320,149,360,170.7C400,192,440,160,480,128C520,96,560,64,600,58.7C640,53,680,75,720,80C760,85,800,75,840,90.7C880,107,920,149,960,165.3C1000,181,1040,171,1080,149.3C1120,128,1160,96,1200,106.7C1240,117,1280,171,1320,165.3C1360,160,1400,96,1420,64L1440,32L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"
          ></path>
        </svg>
        <div className="blog-area md:absolute md:top-1/4 md:left-1/3 absolute top-30 flex flex-col justify-center items-center text-center">
          <h1 className="md:text-5xl text-3xl font-bold py-2">
            News Insights !
          </h1>
          <p className="text-base">
            kindergarten is an early childhood educational environment where
            young children, <br /> typically aged 2 to 6, engage in playful
            learning.
          </p>
        </div>
      </div>
      <main className="blog_area md:px-60 md:py-20 py-5 px-5">
        <h1 className="text-3xl font-bold">
          ⭐ Why Montessori? The Science Behind Child-Led Learning
        </h1>
        <p className="text-base py-3">
          Choosing the right learning environment for a child is one of the most
          important decisions for any parent. Among the many education methods
          available today, the Montessori approach stands out for one powerful
          reason:
        </p>
        <h3 className="text-[20px] font-semibold">
          Children learn best when they learn at their own pace.
        </h3>
        <p>
          This idea isn’t just a philosophy — it’s backed by science. Let’s
          explore why child-led learning works and how Montessori uses this
          naturally.
        </p>
        {/* Content place */}
        <div className="py-5">
          <h3 className="text-2xl font-bold">
            🌱 1. Children Learn More Deeply When They Choose What to Learn
          </h3>
          <p className="pt-3">
            Modern neuroscience shows that when children make choices, their
            brain releases dopamine, a chemical that boosts:
          </p>
          <ul className="py-3 list-disc">
            <li>Motivation</li>
            <li>Curiosity</li>
            <li>Memory</li>
            <li>Long-term learning</li>
          </ul>
          <p>
            Montessori classrooms encourage children to choose activities
            independently, which activates the parts of the brain responsible
            for exploration and problem-solving.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default WhyMontessori;
