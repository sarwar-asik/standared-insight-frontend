import React from 'react'

export default function Testimonial() {
    const testimonialsCard = [
        {
            title: "UI Soup",
            discription:
                "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
        },
        {
            title: "UI Soup",
            discription:
                "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
        },
    ];

    return (
        <div className='flex flex-col items-center justify-center w-full gap-14 md:mt-[75px] mt-9 px-5'>
            <div className=" text-center w-full text-3xl md:text-5xl text-[#331B3B] font-hindVadodara -tracking-[0.01em]">
                <h1 className="whitespace-nowrap font-bold leading-[99.8%] text-center">
                    Our Testimonials
                </h1>
                <span className="md:whitespace-nowrap !text-center font-light mt-1 max-w-sm md:max-w-xl mx-auto">
                    What Our Clients Are
                    <span className="relative z-10 ml-2">
                        Saying
                        <span className="bg-[#FDC221] h-2 md:bottom-2 bottom-1 -z-[1] absolute w-full right-[100px] sm:right-0 left-0" />
                    </span>
                </span>
            </div>

            <div className="flex sm:gap-[69px] gap-7 flex-col md:flex-row">
                {testimonialsCard.map((data, index) => (
                    <div
                        key={index}
                        className="flex flex-col gap-7 justify-start drop-shadow-[0_7px_9px_rgba(0,0,0,0.15)] bg-white pl-[29px] pr-[35px] py-9"
                    >
                        <div>
                            <svg
                                width="46"
                                height="40"
                                viewBox="0 0 46 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M35.4128 39.5905L45.4 18.5185V0.409668H24.9856V19.6161H32.7776L24.9856 39.5905H35.4128ZM28.0336 16.5681V3.45927H42.3504V17.8321L33.4816 36.5409H29.4464L37.2352 16.5697H28.0336V16.5681Z"
                                    fill="#FDC221"
                                />
                                <path
                                    d="M11.0272 39.5905L21.0144 18.5185V0.409668H0.600006V19.6161H8.39361L0.600006 39.5905H11.0272ZM3.64801 16.5681V3.45927H17.9648V17.8321L9.09761 36.5409H5.06241L12.8512 16.5697H3.64801V16.5681Z"
                                    fill="#FDC221"
                                />
                            </svg>
                        </div>
                        <div className="flex flex-col justify-start gap-3">
                            <span className=" max-w-[384px] w-full text-base font-normal font-hindVadodara leading-[159.8%] tracking-wide">
                                {data.discription}
                            </span>
                            <span className="flex gap-2 items-center text-base font-semibold font-hindVadodara leading-[159.8%] tracking-wide">
                                <span className=" border-[2px] border-[#FDC221] w-3 relative bottom-0.5" />
                                {data.title}
                            </span>
                        </div>
                    </div>
                ))}
            </div></div>
    )
}
