import './home.css'
import Categories from '../components/Categories';

function Home() {
    return (
        <>
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
                    <div className='text-6xl text-center text-slate-300 font-extrabold leading-loose'>
                        <p className='text-lg font-semibold'>REAL-TIME TOOLS AND MORE</p>
                        <h2 className='block'>WELCOME TO KONOHA</h2>
                        <h2 className='block'>e-LEARNING CENTRE</h2>
                    </div>
                </div>
            </div>

            <div className='flex justify-center items-center min-h-screen bg-stone-800 text-center font-extrabold leading-loose text-5xl'>
                <div>
                    <h2 className='block m-2 p-2 text-slate-300'>BIG DREAMS TO BIG SUCCESS</h2>
                    <p className='block m-2 p-2 text-slate-300'>&#8208;</p>
                    <h2 className='block m-2 p-2 text-slate-300'>IT ALL STARTS HERE</h2>
                </div>

                <div>
                <img className='flex-grow lg:flex-grow-0 p-2 md:w-1/2 h-max  w-full sm:min-w-[400px] max-w-lg m-6' src='/Web/man_on_laptop.png' alt="man_on_laptop" />
                </div>
            </div>

            <Categories />
        </>
    );
}

export default Home;