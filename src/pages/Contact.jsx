import React from "react";
import Footer from "../components/Footer";
import { RiFacebookBoxFill, RiInstagramFill } from "react-icons/ri";
import Header from "../components/Header";
import ContactImg from "../assets/contact.png";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const contactData = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <div className="md:py-20 md:pt-0 md:pb-10 pt-60 pb-10">
        <Header />
        <div className="md:relative md:top-70 py-0">
          <h1 className="text-5xl font-bold text-center">Contact</h1>
          <p className="text-base text-center py-2">
            We're happy to support you in choosing the right environment for
            your child. <br /> Contact us for admissions, queries, or to schedule a
            visit.
          </p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#a2d9ff"
            d="M0,96L20,106.7C40,117,80,139,120,122.7C160,107,200,53,240,64C280,75,320,149,360,170.7C400,192,440,160,480,128C520,96,560,64,600,58.7C640,53,680,75,720,80C760,85,800,75,840,90.7C880,107,920,149,960,165.3C1000,181,1040,171,1080,149.3C1120,128,1160,96,1200,106.7C1240,117,1280,171,1320,165.3C1360,160,1400,96,1420,64L1440,32L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"
          ></path>
        </svg>{" "}
      </div>

      <div className="form-place md:px-20 px-5 md:py-20 py-5 md:flex justify-around">
        {/* Contact Info */}
        <div className="md:w-1/2 w-full md:pb-0 pb-20">
          <h2 className="md:text-4xl text-2xl">
            At Carnival Kids Montessori, we don’t just prepare children for
            school – we prepare them for life!
          </h2>
          <ul className="py-10">
            <li className="md:text-[20px] text-[20px] md:py-1 py-1">
              <span className="font-semibold text-[#7b5bff]">Mobile :</span> +91
              98402 22744
            </li>
            <li className="md:text-[20px] text-[20px] md:py-1 py-1">
              <span className="font-semibold text-[#7b5bff]">Email :</span>{" "}
              info@carnivalkidsmontessori.com
            </li>
            <li className="md:text-[20px] text-[20px] md:py-1 py-1">
              <span className="font-semibold text-[#7b5bff]">Address :</span> No
              9, Rajalakshmi Nagar, <br /> Subramaniam palayam, <br /> GN Mills,{" "}
              <br />
              Coimbatore – 641029
            </li>
          </ul>
          <ul className="text-[#7b5bff] text-[20px] ">
            <li className="hover:text-[#000000] cursor-pointer pb-2">
              <a
                href="https://www.facebook.com/people/Carnival-Kids-Montessori/100057778115140/"
                className="md:flex flex justify-start items-center gap-3"
              >
                <RiFacebookBoxFill />
                Facebook
              </a>
            </li>
            <li className="hover:text-[#000000] cursor-pointer">
              <a
                href="https://www.instagram.com/carnival_kids_montessori/"
                className="md:flex flex justify-start items-center gap-3"
              >
                <RiInstagramFill />
                Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2 w-full">
          <form
            onSubmit={handleSubmit(contactData)}
            className="md:px-10 px-0 py-0 rounded-2xl"
          >
            {/* Parent name */}
            <div className="py-2">
              <label htmlFor="parentname" className="text-black"></label>
              <input
                type="text"
                name="parentname"
                id=""
                placeholder="Enter parent name"
                className="bg-[#f6f5ff] w-full md:py-2 py-4 px-3 text-black/50 border-0 outline-0"
                {...register("parentname", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  maxLength: {
                    value: 20,
                    message: "This field only accepted max 20 letters only",
                  },
                  minLength: {
                    value: 3,
                    message: "This field only accept min 3 letters",
                  },
                })}
              />
              {errors.parentname && (
                <p className="text-red-500">{errors.parentname.message}</p>
              )}
            </div>
            {/* Child name */}
            <div className="py-2">
              <label htmlFor="childname" className="text-black"></label>
              <input
                type="text"
                name="childname"
                id=""
                placeholder="Enter child name"
                className="bg-[#f6f5ff] w-full md:py-2 py-4 px-3 text-black/50 border-0 outline-0"
                {...register("childname", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  maxLength: {
                    value: 20,
                    message: "This field only accepted max 20 letters only",
                  },
                  minLength: {
                    value: 5,
                    message: "This field only accept min 3 letters",
                  },
                })}
              />
              {errors.childname && (
                <p className="text-red-500">{errors.childname.message}</p>
              )}
            </div>
            <div className="py-2">
              <select
                name="enquiry"
                id=""
                className="bg-[#f6f5ff] w-full md:py-2 py-4 px-3 text-black/50 border-0 outline-0"
                {...register("enquiry", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                })}
              >
                <option value="" selected>
                  Enquiry for son / daughter
                </option>
                <option value="son">Son</option>
                <option value="daughter">Daughter</option>
              </select>
              {errors.enquiry && (
                <p className="text-red-500">{errors.enquiry.message}</p>
              )}
            </div>
            <div className="py-2">
              <label htmlFor="date" className="text-black/50">
                Select date of birth
              </label>
              <input
                type="date"
                name="date"
                id=""
                placeholder="Select date of birth"
                className="bg-[#f6f5ff] w-full md:py-2 py-4 px-3 text-black/50 border-0 outline-0"
                {...register("date", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  maxLength: {
                    value: 20,
                    message: "This field only accepted max 20 letters only",
                  },
                  minLength: {
                    value: 5,
                    message: "This field only accept min 3 letters",
                  },
                })}
              />
              {errors.date && (
                <p className="text-red-500">{errors.date.message}</p>
              )}
            </div>
            <div className="py-2">
              <label htmlFor="tel" className="text-black"></label>
              <input
                type="tel"
                name="tel"
                id=""
                placeholder="Enter phone number"
                className="bg-[#f6f5ff] w-full md:py-2 py-4 px-3 text-black/50 border-0 outline-0"
                {...register("tel", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  maxLength: {
                    value: 10,
                    message: "This field only accepted max 10 numbers only",
                  },
                })}
              />
              {errors.tel && (
                <p className="text-red-500">{errors.tel.message}</p>
              )}
            </div>
            <div className="py-2">
              <label htmlFor="alttel" className="text-black"></label>
              <input
                type="tel"
                name="alttel"
                id=""
                placeholder="Alternative phone number"
                className="bg-[#f6f5ff] w-full md:py-2 py-4 px-3 text-black/50 border-0 outline-0"
                {...register("alttel", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  maxLength: {
                    value: 20,
                    message: "This field only accepted max 10 numbers only",
                  },
                })}
              />
              {errors.alttel && (
                <p className="text-red-500">{errors.alttel.message}</p>
              )}
            </div>
            <div className="py-2">
              <label htmlFor="email" className="text-black"></label>
              <input
                type="email"
                name="email"
                id=""
                placeholder="Enter email address"
                className="bg-[#f6f5ff] w-full md:py-2 py-4 px-3 text-black/50 border-0 outline-0"
                {...register("email", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  maxLength: {
                    value: 20,
                    message: "This field only accepted max 20 letters only",
                  },
                  minLength: {
                    value: 5,
                    message: "This field only accept min 3 letters",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="py-2">
              <label htmlFor="text" className="text-black"></label>
              <select
                name="grade"
                id=""
                className="bg-[#f6f5ff] w-full md:py-2 py-4 px-3 text-black/50 border-0 outline-0"
                {...register("grade", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                })}
              >
                <option value="" selected>
                  Select Child Age
                </option>
                <option value="Age0">Age 1 to 2</option>
                <option value="Age1">Age 2 to 3</option>
                <option value="Age2">Age 3 to 4</option>
                <option value="Age3">Age 4 to 5</option>
                <option value="Age4">Above 5</option>
              </select>
              {errors.grade && (
                <p className="text-red-500">{errors.grade.message}</p>
              )}
            </div>
            <div className="py-2">
              <label htmlFor="text" className="text-white"></label>
              <select
                name="city"
                id=""
                className="bg-[#f6f5ff] w-full md:py-2 py-4 px-3 text-black/50 border-0 outline-0"
                {...register("city", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                })}
              >
                <option value="" selected>
                  Select Branch
                </option>
                <option value="Coimbatore">Coimbatore</option>
              </select>
              {errors.city && (
                <p className="text-red-500">{errors.city.message}</p>
              )}
            </div>

            <div className="py-4">
              <button
                type="submit"
                className="bg-[#51a2ff] border-none text-white font-bold px-8 py-3 hover:bg-black hover:text-white hover:cursor-pointer w-1/2"
              >
                Send Enquiry
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Embedded Map */}
      <div className="md:w-full md:px-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.6647093664506!2d76.9354615!3d11.0637452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f61be0a53b27%3A0x1787c85597f4d28e!2sCarnival%20Kids!5e0!3m2!1sen!2sus!4v1756730835115!5m2!1sen!2sus"
          className="w-full h-1/2 object-cover"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
