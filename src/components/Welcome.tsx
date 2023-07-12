import React from "react";

const Welcome: React.FC = () => {
    return (
        <div className="bg-stone-800 leading-loose text-slate-300 flex justify-around px-6">
            <div className='max-w-xl mx-4'>
                <h2 className='text-2xl font-extrabold my-2'>Welcome to Konoha e-Learning Center.</h2>
                <p>
                    Here we guide you to the best online courses, e-learning advice, technology and resources
                    for education and training.
                </p>
                <ul className="my-6 px-10">
                    <li className="my-4">
                        <h4 className="text-lg font-extrabold">Safe & Secured</h4>
                        <p className="font-extralight">
                            Our services are safe and secure through every step of the process.
                        </p>
                    </li>
                    <li className="my-4">
                        <h4 className="text-lg font-extrabold">High Expert Instructors</h4>
                        <p className="font-extralight">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, enim magnam?
                            Distinctio quam, debitis maxime, accusamus enim sint, excepturi fuga ducimus nisi
                            voluptatibus eveniet eum veniam alias odio maiores animi.
                        </p>
                    </li>
                </ul>
            </div>

            <div className='mx-8'>
                <img src="/Web/girl_on_laptop_couch.png" alt="girl on laptop" className="h-4/6"/>
            </div>
        </div>
    );
}

export default Welcome;