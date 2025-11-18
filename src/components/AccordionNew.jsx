import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion/";
import GirlPng from "../assets/about-girl.png";
import Event from "../assets/New-img/13.jpg";
import Language from '../assets/New-img/DSC00227.jpg'
import Math from '../assets/New-img/7.webp'
import Culture from "../assets/gallery/gallery-img-1.jpeg";


const AccordionNew = () => {
  const [activeImage, setActiveImage] = useState(GirlPng);

  const imageMap = {
    "item-1": GirlPng,
    "item-2": Event,
    "item-3": Language,
    "item-4": Math,
    "item-5": Culture,
  };
  return (
    <>
      <div>
        <div className="md:px-50 px-5 py-20 wave-center">
          <div className=" md:flex justify-between items-center gap-5">
            <div className="md:w-1/2 w-full">
              <h2 className="md:text-5xl text-4xl font-bold">
                Montessori{" "}
                <span className="text-[#7b5bff]"> 5 Core Areas:</span>{" "}
              </h2>
              <p className="py-3">
                What Do Materials in Practical Life, Sensorial, Language, Math &
                Culture Actually Do? If you’re new to Montessori, you might
                notice classrooms are filled with unique materials—from pouring
                cups to bead frames, color tablets to world maps. But these
                aren’t random “toys”—they’re carefully curated tools that align
                with Maria Montessori’s belief in holistic child development.
              </p>
              <p>
                Montessori learning is divided into 5 core areas, each with a
                distinct purpose. Let’s break down what each area’s materials
                do, and how they work together to nurture independent, curious
                learners:
              </p>
              <div className="mt-5">
                <Accordion
                  type="single"
                  collapsible
                  onValueChange={(val) => {
                    if (val) setActiveImage(imageMap[val]); // update image
                  }}
                  className="w-full"
                  defaultValue="item-1"
                >
                  <AccordionItem
                    value="item-1"
                    className={
                      "bg-[#ebf9fb] px-3 py-1 rounded-2xl mb-3 cursor-pointer"
                    }
                  >
                    <AccordionTrigger>
                      <p className="text-[20px] hover:underline-none">
                        Practical Life
                      </p>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                      <p className="text-[16px]">
                        Core Purpose: Build independence, responsibility, and
                        fine motor skills—while connecting learning to real
                        life.Practical Life materials mimic everyday tasks kids
                        see adults do, giving them the chance to “do it
                        themselves.” <br />
                        <br /> Key Materials: Dressing frames
                        (buttoning/zipping), pouring sets (water/beans),
                        cleaning tools (mini brooms, cloths), food preparation
                        kits (spreading jam, cutting fruit). <br />
                        <br /> What They Do: Teach physical skills (hand-eye
                        coordination, finger strength) that prepare for writing
                        and math. Foster confidence (“I can dress myself!” “I
                        can help clean!”) and a sense of belonging in the
                        community. Cultivate focus and patience—kids repeat
                        these tasks until they master them, at their own pace.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-2"
                    className={
                      "bg-[#ebf9fb] px-3 py-1 rounded-2xl mb-3 cursor-pointer"
                    }
                  >
                    <AccordionTrigger>
                      <p className="text-[20px] hover:underline-none">
                        Sensorial
                      </p>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                      <p className="text-[16px]">
                        Core Purpose: Refine the 5 senses (touch, sight, sound,
                        smell, taste) and lay the foundation for abstract
                        thinking.Montessori believed sensory exploration is the
                        first step to understanding the world. These materials
                        isolate one sensory quality (e.g., color, texture,
                        weight) so kids can focus and compare. <br />
                        <br />
                        Key Materials: Color tablets (visual discrimination),
                        sandpaper letters (touch + language), sound cylinders
                        (auditory training), geometric solids (shape/weight
                        recognition). <br />
                        <br /> What They Do: Help kids categorize, compare, and
                        describe the world (“This is smoother than that,” “These
                        sounds are the same”). Develop concentration and
                        observation skills. Create neural pathways that make
                        math (e.g., understanding size/quantity) and language
                        (e.g., describing textures) easier later.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-3"
                    className={
                      "bg-[#ebf9fb] px-3 py-1 rounded-2xl mb-3 cursor-pointer"
                    }
                  >
                    <AccordionTrigger>
                      <p className="text-[20px] hover:underline-none">
                        Language
                      </p>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                      <p className="text-[16px]">
                        Core Purpose: Spark a love of reading/writing and build
                        communication skills—through hands-on
                        exploration.Montessori language materials move from
                        “sounds” to “words” to “stories” in a way that feels
                        like play, not work.
                        <br />
                        <br />
                        Key Materials: Sandpaper letters (learning phonics
                        through touch), movable alphabet (spelling words without
                        writing), object boxes (matching words to items),
                        storybooks (simple, meaningful tales).
                        <br />
                        <br />
                        What They Do: Teach phonics naturally—kids trace
                        sandpaper letters and say the sound, linking touch to
                        sound. Let kids “write” before they can hold a pencil
                        (using the movable alphabet to spell words). Encourage
                        self-expression and a lifelong love of books.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-4"
                    className={
                      "bg-[#ebf9fb] px-3 py-1 rounded-2xl mb-3 cursor-pointer"
                    }
                  >
                    <AccordionTrigger>
                      <p className="text-[20px] hover:underline-none">
                        Mathematics
                      </p>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                      <p className="text-[16px]">
                        Core Purpose: Turn abstract math concepts into tangible,
                        understandable ideas—so kids understand math, not just
                        memorize it.Montessori math materials use concrete
                        objects to teach numbers, operations, and even advanced
                        concepts in a sequential way.
                        <br />
                        <br />
                        Key Materials: Number rods (counting + quantity), bead
                        chains (multiplication/division), golden beads (place
                        value)
                        <br />
                        <br />
                        What They Do: Help kids “see” math: A 4-year-old uses
                        golden beads to understand that “10 ones = 1 ten.” Build
                        logical thinking and problem-solving skills—kids
                        discover math rules through exploration, not lectures.
                        Make math fun! Kids love moving beads, stacking rods,
                        and solving “math puzzles.”
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-5"
                    className={
                      "bg-[#ebf9fb] px-3 py-1 rounded-2xl mb-3 cursor-pointer"
                    }
                  >
                    <AccordionTrigger>
                      <p className="text-[20px] hover:underline-none">
                        Culture
                      </p>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                      <p className="text-[16px]">
                        Core Purpose: Expand kids’ worldview, teach respect for
                        diversity, and inspire curiosity about the natural
                        world.This area covers geography, botany, zoology,
                        history, art, and science—all through hands-on
                        materials. Key Materials: Puzzle maps (learning
                        continents/countries), plant life cycles , animal
                        classification cards, timeline materials (history), art
                        supplies (painting, weaving).
                        <br />
                        <br />
                        What They Do: Nurture global citizenship—kids learn
                        about different cultures, animals, and environments.
                        Connect kids to nature and teach responsibility (caring
                        for classroom). Encourage questions like “Where do
                        pandas live?” or “How do flowers grow?”—fostering a love
                        of learning beyond the classroom.
                        <br />
                        <br />
                        The Magic of Montessori: It’s All Connected! What makes
                        Montessori special is how these 5 areas work together. A
                        child might practice pouring water (Practical Life) to
                        build hand strength for holding a pencil (Language).
                        They might use color tablets (Sensorial) to sort flowers
                        (Culture) and count petals (Math). Every material serves
                        a purpose—nurturing the whole child: cognitive, social,
                        emotional, and physical.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <img
                src={activeImage}
                alt=""
                className="w-full h-[500px] object-contain transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccordionNew;
