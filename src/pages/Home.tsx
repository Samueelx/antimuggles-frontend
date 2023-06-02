import './home.css'

function Home() {
    return (
        <div className="relative">
            <div className="relative top-0 left-0 h-full w-full z-0">
                <video autoPlay muted loop id="video" className="w-full h-full">
                    <source
                        src="https://video-database.vercel.app/video/result2.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>
            <div className="overlay overlay_1 flex justify-center items-center">
                <div className='text-6xl text-center text-slate-200 font-extrabold leading-loose'>
                    <p className='text-lg font-semibold'>REAL-TIME TOOLS AND MORE</p>
                    <h2 className='block'>LEARN</h2>
                    <h2 className='block'>WITH SCHOOLNAME</h2>
                </div>
            </div>
        </div>
    );
}

export default Home;