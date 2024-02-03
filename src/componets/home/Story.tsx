import { memo } from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './story.css'
type StoryPropsType = { data: any[] }

const Story = memo(({ data }: StoryPropsType) => {
    console.log(data);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="mx-auto  story-slider-container p-1">
            <Slider {...settings} className="story-slider">
                {data.map((item, index) => (
                    <div key={index} className="border- cursor-pointer flex items-center justify-center !w-[70px] !h-[70px]">
                        <div className="bg-blue-500 border-gray-500 border-solid-[4px] rounded-full w-16 h-16 flex items-center justify-center">
                            <h3 className="text-white">{index + 1}</h3>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
})

export default Story;
