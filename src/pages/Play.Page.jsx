import React from "react"
import DefaultLayoutHoc from '../layout/Default.layout';


//Components
import Poster from "../components/Poster/Poster.Component";
import PlayFilter from "../components/PlayFilters/PlayFilters.Component";

const PlayPage = () => {
    return (
        <>
            <div className="container mx-auto px-4 my-10">
                <div className="w-full flex flex-col-reverse lg:flex-row-reverse gap-4">
                    <div className="lg:w-3/4 p-4 bg-white rounded">
                        <h2 className="text-2xl font-bold mb-4">Plays in Gaya</h2>
                        <div className="flex flex-wrap">
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                                <Poster
                                    isPlay={true}
                                    playSrc="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-sameer-anjaan-teaches-lyrics-writing-0-2021-11-9-t-13-15-25.jpg"
                                    title="Sameer Anjaan Teaches Lyrics Writing"
                                    subtitle="Books and Literature, Writing | English | All age groups | 3hrs 30mins"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                                <Poster
                                    isPlay={true}
                                    playSrc="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-monali-thakur-teaches-singing-0-2021-3-27-t-15-10-57.jpg"
                                    title="Monali Thakur Teaches Singing"
                                    subtitle="Music | English | All age groups | 2hrs 30mins"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                                <Poster
                                    isPlay={true}
                                    playSrc="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-abstract-portrait-painting-0-2021-2-22-t-17-31-49.jpg"
                                    title="Abstract Portrait Painting"
                                    subtitle="Arts and Crafts | English, Hindi | 5yrs + | 1hr 30mins"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                                <Poster
                                    isPlay={true}
                                    playSrc="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-radhika-karle-teaches-pilates-1-2021-3-12-t-14-31-21.jpg"
                                    title="Radhika Karle Teaches Pilates"
                                    subtitle="Health and Fitness, Masterclass | English | 1hr 30mins"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                                <Poster
                                    isPlay={true}
                                    playSrc="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-johnny-lever-teaches-comedy-2-2021-2-3-t-18-23-27.jpg"
                                    title="Johnny Lever Teaches Comedy"
                                    subtitle="Comedy | Hindi, English | All age groups | 2hrs"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                                <Poster
                                    isPlay={true}
                                    playSrc="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-shashank-khaitan-teaches-direction-1-2021-2-7-t-11-52-30.jpg"
                                    title="Shashank Khaitan teaches Direction"
                                    subtitle="Film Making | English | 2hrs"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                                <Poster
                                    isPlay={true}
                                    playSrc="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-creating-wordless-stories-online-workshop-0-2023-1-26-t-15-28-25.jpg"
                                    title="Creating Wordless Stories - Online Workshop"
                                    subtitle="Online Streaming Events, Workshops | English | 18yrs + | 2hrs"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                                <Poster
                                    isPlay={true}
                                    playSrc="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-prasad-from-vrindavan-0-2021-12-1-t-13-41-25.jpg"
                                    title="Prasad from Vrindavan"
                                    subtitle="Spirituality"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/4 p-4 bg-white rounded">
                        <h2 className="text-2xl font-bold mb-4">Filters</h2>
                        <div>
                            <PlayFilter
                                title="Date"
                                tags={["Today", "Tomorrow", "This Weekend"]}
                            />
                        </div>
                        <div>
                            <PlayFilter
                                title="Language"
                                tags={["English", "Hindi", "Tamil"]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DefaultLayoutHoc(PlayPage);