// import React from 'react';
// import ReactPlayer from 'react-player';
// import Carousel from 'react-bootstrap/Carousel';
// import manager from "../video.mp4";
// import patil from "../viraj_patil.mp4";
// import vijay from "../vijay_sir.mp4";
// import TL from "../TL.mp4";
// import shashikant from "../shashikant_sir.mp4";
// import manager2 from "../manager2sir.mp4";
// import "bootstrap/dist/css/bootstrap.css";
// import './VideoCarousel.css';

// const Appreciations = () => {
//     const videos = [
//         {
//             id: 1,
//             src: manager,
//         },
//         {
//             id: 2,
//             src: patil,
//         },
//         {
//             id: 3,
//             src: TL,
//         },
//         {
//             id: 4,
//             src: vijay,
//         },
//         {
//             id: 5,
//             src: shashikant,
//         },
//         {
//             id: 6,
//             src: manager2,
//         },
//     ];

//     return (
//         <section
//             id="appreciation"
//             className="px-10 w-full flex flex-col lg:flex-row py-20 align-center bg-emerald-200 max-w-5xl mx-auto"
//         >
//             <div className="flex-1 flex flex-col justify-center items-center">
//                 <h2 className="text-center text-emerald-600 text-5xl font-bold">
//                     Appreciations:
//                 </h2><br></br>
//                 <p>
//                     As a passionate junior software developer with a thirst for knowledge and limitless potential,
//                     I'm excited to share my journey with you.
//                 </p>
//                 <p>
//                     A collaborative innovator with a passion for creating impactful solutions,

//                     I thrive in fast-paced environments and enjoy working with talented teams.

//                     My Real-Time Chat Application project and

//                     Second Rank Award in MCA showcase my ability to collaborate with cross-functional teams.

//                     I'm excited to contribute my skills and enthusiasm to a dynamic organization.
//                 </p>


//             </div>
//             <div className="flex-1 flex flex-col justify-left items-center gap-6 px-1 order-1">
//                 <Carousel>
//                     <Carousel.Item key={videos[0].id}>
//                         <ReactPlayer
//                             url={videos[0].src}
//                             width="60%"
//                             height="60%"
//                             controls={true}
//                             playing={true}
//                         />
//                     </Carousel.Item>
//                 </Carousel>
//             </div>
//         </section>
//     );
// };

// export default Appreciations;


import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import Carousel from 'react-bootstrap/Carousel';
import manager from "../video.mp4";
import patil from "../viraj_patil.mp4";
import vijay from "../vijay_sir.mp4";
import TL from "../TL.mp4";
import shashikant from "../shashikant_sir.mp4";
import manager2 from "../manager2sir.mp4";
// import RankAward from "../rankaward.jpg";
import "bootstrap/dist/css/bootstrap.css";
import './VideoCarousel.css';

const Appreciations = () => {
    const videos = [
        {
            id: 1,
            src: manager,
        },
        {
            id: 2,
            src: patil,
        },
        {
            id: 3,
            src: TL,
        },
        {
            id: 4,
            src: vijay,
        },
        {
            id: 5,
            src: shashikant,
        },
        {
            id: 6,
            src: manager2,
        },
        // {
        //     id: 7,
        //     src: RankAward,
        // },

    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);

    };

    return (
        <section
            id="about"
            className="px-10 w-full flex flex-col lg:flex-row py-20 align-center bg-emerald-200 max-w-5xl mx-auto"
        >
            <div className="flex-1 flex flex-col justify-center items-center">
                <h2 className="text-center text-emerald-600 text-5xl font-bold">
                    Appreciations:
                </h2><br></br>
                <br></br>
                <p>
                    At Allied Analytics, I had the incredible opportunity to work as a Software Developer Intern.
                </p>
                <p>
                    My time there was a truly amazing experience.

                    I worked on three projects and had the privilege of collaborating with a fantastic team.

                    I'm grateful for the opportunity to learn and grow, to adapt to new technologies with ease, and to be fearless in my approach to work. The love and support I received from my team were invaluable.

                    I want to express my sincere gratitude to my team for believing in me and appreciating my contributions.

                    I will always be grateful for your guidance and support.
                </p>
            </div>
            <div className="flex-1 flex flex-col justify-left items-center gap-6 px-1 order-1">
                {/* <Carousel activeIndex={activeIndex} onSelect={setActiveIndex}>
                    {videos.map((video) => (
                        <Carousel.Item key={video.id}>
                            <ReactPlayer
                                url={video.src}
                                width="60%"
                                height="60%"
                                controls={true}
                                playing={true}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel> */}
                <Carousel activeIndex={activeIndex} onSelect={setActiveIndex}>
                    {videos.map((video, index) => (
                        <Carousel.Item key={video.id}>
                            <ReactPlayer
                                url={video.src}
                                width="60%"
                                height="60%"
                                controls={true}
                                playing={activeIndex === index} // Play only the active video
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
                <div className="carousel-nav">
                    <button onClick={handlePrev} disabled={activeIndex === 0}>

                    </button>
                    <button onClick={handleNext} disabled={activeIndex === videos.length - 1}>

                    </button>
                </div>
            </div>
        </section>
    );
};

export default Appreciations;