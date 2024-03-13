import React from 'react'

export default function HeaderPage() {
    return (
        <div className="mx-auto max-w-screen-2xl">
            <div className="px-5 flex flex-col md:flex-row md:justify-between items-center relative sm:pl-[50px] mt-10 lg:mt-20 gap-7 md:gap-0 md:mb-4 mb-8">
                <div className="flex flex-col items-center md:items-start gap-7">
                    <div className="w-full text-center md:text-left max-w-xl overflow-hidden text-4xl sm:text-5xl lg:text-[87px] text-[#331B3B] font-bold font-hindVadodara leading-[99.8%] tracking-[0.01]">
                        <h1 className="whitespace-nowrap">We Help you</h1>
                        <p />
                        <span className="font-light">
                            to grow your
                            <br />
                            <span className="relative w-full z-10">
                                Business
                                <span className="bg-[#FDC221] lg:h-5 h-2 sm:bottom-2.5 bottom-1.5 lg:bottom-4 -z-[1] left-0 absolute w-full" />
                            </span>
                        </span>
                    </div>
                    <div className="max-w-[515px] flex flex-col gap-8">
                        <span className="text-[17px] Light font-normal font-hindVadodara leading-[146.3%] tracking-wide text-center md:text-left">
                            Lorem Ipsum has been the industry&apos;s standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of
                            type and scrambled it to make a type specimen book.
                        </span>
                        <button
                            className="self-center md:self-start max-w-[207px] py-[22px] w-full flex justify-center items-center font-bold leading-[137.3%] tracking-wide bg-yellow-500 text-white rounded"
                        // label="GET STARTED"
                        >Get Started</button>
                    </div>
                </div>
                <div>
                    <img

                        src={"https://www.tailwindtap.com/assets/dreamagency/home.png"}
                        alt="Home"
                        className="h-[362px] lg:h-full"
                    />
                </div>
            </div>
        </div>
    )
}
