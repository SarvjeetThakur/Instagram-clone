import { memo, useRef } from "react";
import "./story.css";
import classNames from "classnames";
import { Link } from "react-router-dom";

type StoryPropsType = { data: any[] };

const Story = memo(({ data }: StoryPropsType) => {
    const storyRef = useRef<any>();
    const handleScroll = (direction: "left" | "right") => {
        if (storyRef.current) {
            const scrollAmount = direction === "left" ? -200 : 200;
            storyRef.current?.scrollBy({
                left: scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="bg-gray-100 pt-1 ">
            <div className="mx-auto bg-white  rounded-lg overflow-hidden">
                <div className="md:flex bg-gray-100">
                    <div className="w-full px-5 relative group">
                        <button
                            className=" absolute scale-0 group-hover:scale-100 top-1/2 transform -translate-y-1/2 left-[20px] z-40 bg-gray-200 px-2 py-1 rounded-full"
                            onClick={() => handleScroll("left")}
                        >
                            {"<"}
                        </button>
                        <button
                            className="absolute scale-0 group-hover:scale-100 top-1/2 transform -translate-y-1/2 right-[110px] z-40 bg-gray-200 px-2 py-1 rounded-full"
                            onClick={() => handleScroll("right")}
                        >
                            {">"}
                        </button>
                        <ul
                            ref={storyRef}
                            id="story-container"
                            className="bg-gray-100 max-w-[800px] flex space-x-4 overflow-y-hidden overflow-x-scroll"
                        >
                            {data.map((_, index: number) => (
                                <li key={index + " " + index} className="flex flex-col items-center">
                                    <div className={classNames("rounded-full bg-gradient-to-br p-1", { 'from-yellow-200 to-red-500': true }, { 'from-gray-200 to-gray-500': false })}>
                                        <Link
                                            to={'/story/' + 'user12/123221'}
                                            className="bg-white p-1 rounded-full block transform transition hover:rotate-6"
                                        >
                                            <img
                                                loading="lazy"
                                                src={`https://picsum.photos/id/${Math.floor(Math.random() * 99)}/900/900`}
                                                className="rounded-full"
                                                width="60"
                                                height="60"
                                                alt={`story ${Math.floor(Math.random() * 99)}`}
                                            />
                                        </Link>
                                    </div>
                                    <span className="text-sm w-16 overflow-hidden overflow-ellipsis">
                                        riksy_stam143543
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Story;
