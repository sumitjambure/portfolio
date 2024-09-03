export default function About() {
    return (
        <section
            id="about"
            className="px-10 w-full flex flex-col lg:flex-row py-20 
                       align-center bg-emerald-200 max-w-5xl mx-auto">
            <div className="flex-1">
                <img src=
                    "./images/DP_photo.png"
                    alt="About"
                    className="w-full h-full bg-cover" />
            </div>
            <div className="flex-1 flex flex-col justify-center
                            items-center gap-5 px-6">
                <div>
                    <h2 className="text-center text-emerald-500 
                                   text-5xl font-bold">
                        About Me :
                    </h2>
                </div>
                <p>
                    As a passionate junior software developer with a thirst for knowledge and limitless potential,
                    I'm excited to share my journey with you.
                </p>
                <p>
                    A collaborative innovator with a passion for creating impactful solutions,

                    I thrive in fast-paced environments and enjoy working with talented teams.

                    My Real-Time Chat Application project and

                    Second Rank Award in MCA showcase my ability to collaborate with cross-functional teams.

                    I'm excited to contribute my skills and enthusiasm to a dynamic organization.

                </p>
            </div>
        </section>
    );
}
