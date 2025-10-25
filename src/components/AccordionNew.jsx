import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion/"

const AccordionNew = () => {
    return (
        <>
            <div>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                >
                    <AccordionItem value="item-1" className={'bg-[#ebf9fb] px-3 py-1 rounded-2xl mb-3 cursor-pointer'}>
                        <AccordionTrigger>
                            <p className='text-[20px] hover:underline-none'>Practical Life</p>
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p className='text-[16px]'> Children are naturally interested in activities that are done in
                                the day to day living like sweeping, mopping or washing clothes
                                etc. The activities of Practical Life are to help the child gain
                                control and coordination of his movement, help the child to gain
                                independence and thereby adapt to his society. The Practical Life
                                Area has materials that help children to acquire these skills. For
                                example, the various “dressing frames” help toddlers learn to
                                button, zip, and even tie a shoe lace. There are activities like
                                washing hands, washing clothes which are activities of our daily
                                life. Children are offered grace and courtesy activities in groups
                                which help them adapt to the society.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className={'bg-[#ebf9fb] px-3 py-1 rounded-2xl mb-3 cursor-pointer'}>
                        <AccordionTrigger>
                            <p className='text-[20px] hover:underline-none'>Practical Life</p>
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p className='text-[16px]'> Children are naturally interested in activities that are done in
                                the day to day living like sweeping, mopping or washing clothes
                                etc. The activities of Practical Life are to help the child gain
                                control and coordination of his movement, help the child to gain
                                independence and thereby adapt to his society. The Practical Life
                                Area has materials that help children to acquire these skills. For
                                example, the various “dressing frames” help toddlers learn to
                                button, zip, and even tie a shoe lace. There are activities like
                                washing hands, washing clothes which are activities of our daily
                                life. Children are offered grace and courtesy activities in groups
                                which help them adapt to the society.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className={'bg-[#ebf9fb] px-3 py-1 rounded-2xl mb-3 cursor-pointer'}>
                        <AccordionTrigger>
                            <p className='text-[20px] hover:underline-none'>Practical Life</p>
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p className='text-[16px]'> Children are naturally interested in activities that are done in
                                the day to day living like sweeping, mopping or washing clothes
                                etc. The activities of Practical Life are to help the child gain
                                control and coordination of his movement, help the child to gain
                                independence and thereby adapt to his society. The Practical Life
                                Area has materials that help children to acquire these skills. For
                                example, the various “dressing frames” help toddlers learn to
                                button, zip, and even tie a shoe lace. There are activities like
                                washing hands, washing clothes which are activities of our daily
                                life. Children are offered grace and courtesy activities in groups
                                which help them adapt to the society.</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4" className={'bg-[#ebf9fb] px-3 py-1 rounded-2xl mb-3 cursor-pointer'}>
                        <AccordionTrigger>
                            <p className='text-[20px] hover:underline-none'>Practical Life</p>
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p className='text-[16px]'> Children are naturally interested in activities that are done in
                                the day to day living like sweeping, mopping or washing clothes
                                etc. The activities of Practical Life are to help the child gain
                                control and coordination of his movement, help the child to gain
                                independence and thereby adapt to his society. The Practical Life
                                Area has materials that help children to acquire these skills. For
                                example, the various “dressing frames” help toddlers learn to
                                button, zip, and even tie a shoe lace. There are activities like
                                washing hands, washing clothes which are activities of our daily
                                life. Children are offered grace and courtesy activities in groups
                                which help them adapt to the society.</p>
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>
            </div>
        </>
    )
}

export default AccordionNew