import React from "react"
import DefaultLayoutHoc from '../layout/Default.layout';


//Components
import Poster from "../components/Poster/Poster.Component";
import PlayFilter from "../components/PlayFilters/PlayFilters.Component";

const PlayPage = () => {
    return (
        <>
            <div className="container mx-auto px-4 my-10">
                <div className="w-full lg:flex lg:flex-row-reverse gap-4">
                    <div className="lg:w-3/4 p-4 bg-white rounded">
                        <h2 className="text-2xl font-bold mb-4">Plays in Gaya</h2>
                        <div className="flex- flex-wrap">
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                                <Poster
                                    isPlay={true}
                                    playSrc="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-sameer-anjaan-teaches-lyrics-writing-0-2021-11-9-t-13-15-25.jpg"
                                    title="Sameer Anjaan Teaches Lyrics Writing"
                                    subtitle="Books and Literature, Writing | English | All age groups | 3hrs 30mins"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DefaultLayoutHoc(PlayPage);