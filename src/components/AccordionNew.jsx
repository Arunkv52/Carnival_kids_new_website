import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from './ui/accordion/'

const AccordionNew = () => {
  return (
    <>
      <div>
        <Accordion
          type='single'
          collapsible
          className='w-full'
          defaultValue='item-1'
        >
          <AccordionItem
            value='item-1'
            className={'bg-[#ebf9fb] px-3 py-1 rounded-2xl mb-3 cursor-pointer'}
          >
            <AccordionTrigger>
              <p className='text-[20px] hover:underline-none'>Practical Life</p>
            </AccordionTrigger>
            <AccordionContent className='flex flex-col gap-4 text-balance'>
              <p className='text-[16px]'>
                {' '}
                Children are naturally interested in activities that are done in
                the day to day living like sweeping, mopping or washing clothes
                etc. The activities of Practical Life are to help the child gain
                control and coordination of his movement, help the child to gain
                independence and thereby adapt to his society. The Practical
                Life Area has materials that help children to acquire these
                skills. For example, the various “dressing frames” help toddlers
                learn to button, zip, and even tie a shoe lace. There are
                activities like washing hands, washing clothes which are
                activities of our daily life. Children are offered grace and
                courtesy activities in groups which help them adapt to the
                society.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value='item-2'
            className={'bg-[#ebf9fb] px-3 py-1 rounded-2xl mb-3 cursor-pointer'}
          >
            <AccordionTrigger>
              <p className='text-[20px] hover:underline-none'>Sensorial</p>
            </AccordionTrigger>
            <AccordionContent className='flex flex-col gap-4 text-balance'>
              <p className='text-[16px]'>
                {' '}
                Senses play a vital role in gathering information to function in
                the environment. The young child collects all information that
                he needs, through his senses. The child must refine his senses
                in his first six years of life. For this the child must have
                opportunity for refinement. The Montessori environment has
                materials that help children refine their visual, auditory,
                tactile, taste, hearing sense etc.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value='item-3'
            className={'bg-[#ebf9fb] px-3 py-1 rounded-2xl mb-3 cursor-pointer'}
          >
            <AccordionTrigger>
              <p className='text-[20px] hover:underline-none'>Language</p>
            </AccordionTrigger>
            <AccordionContent className='flex flex-col gap-4 text-balance'>
              <p className='text-[16px]'>
                {' '}
                The environment is filled with opportunities to build language.
                There's a variety of books in the reading corner, and children
                are exposed to different word sounds and a rich vocabulary.
                Young children first spontaneously develop speech. Later,
                between the ages of 2.5 and 4.5, if they are in the right
                environment, writing will also emerge naturally, followed by
                reading. Beyond language, the Montessori method is designed to
                help children build self-esteem, solve problems with confidence,
                and develop self-control. It supports the child's overall
                development, helping them believe in themselves and become
                independent, well-adjusted individuals.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value='item-4'
            className={'bg-[#ebf9fb] px-3 py-1 rounded-2xl mb-3 cursor-pointer'}
          >
            <AccordionTrigger>
              <p className='text-[20px] hover:underline-none'>Mathematics</p>
            </AccordionTrigger>
            <AccordionContent className='flex flex-col gap-4 text-balance'>
              <p className='text-[16px]'>
                {' '}
                Our daily life is filled with calculation, precision and
                exactness. We prepare the children through sensorial and
                practical life activities before introducing them to math
                concepts. In the Montessori environment starting right from the
                recognition of numbers, counting they go beyond like the
                arithmetic operations addition, subtraction, multiplication and
                division.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  )
}

export default AccordionNew
