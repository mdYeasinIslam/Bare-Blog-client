/* eslint-disable @typescript-eslint/no-explicit-any */
import  { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import './swiperStyle.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import { Typewriter } from 'react-simple-typewriter';

const BannerSwiper = () => {
    const progressCircle = useRef<SVGSVGElement>(null);
    const progressContent = useRef<HTMLDivElement>(null);
    const onAutoplayTimeLeft = (_s: any, time: any, progress: any) => { 
        if (progressCircle?.current) {
            progressCircle?.current.style.setProperty('--progress', `${1 - progress}`);
        }
        if (progressContent.current) {
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }
    };
    return (
        <div className=''>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 6000000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide>
                    <article className='relative'>
                        <figure className='h-full w-full md:h-[500px] lg:h-[600px] xl:h-full'>
                            <img className='h-full w-full brightness-50 ' src="/images/banner4.jpg" alt="" />
                        </figure>
                        {/* <div className='absolute top-[20%] md:top-[20%] lg:top-[25%] xl:top-[35%] w-full lg:left-10 space-y-3 '>
                            <h1 className='font-semibold text-xl md:text-5xl '>
                                Where Every Game<br className='hidden md:block  lg:hidden' /> Tells {' '}
                                <span style={{ color: 'red', fontWeight: 'bold' }}>
                                  
                                    <Typewriter
                                        words={['a Story', 'a Journey', 'an Adventure', '']}
                                        loop={100}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </span>
                            </h1>
                            <p className=''>Explore diverse gaming worlds, from mystical forests to futuristic cities<span className='hidden md:block'>and experience the thrill of top-rated games reviewed by passionate gamers</span> .</p>
                        </div> */}
                    </article>
                </SwiperSlide>

                {/* second slider */}

                {/* <SwiperSlide className=''>
                    <div className="grid grid-cols-2 max-w-7xl mx-auto  ">
                        <div className="col-span-1 space-y-7">
                            <motion.h1
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}

                                className="text-5xl font-medium leading-tight">The Easiest Way <br />
                                to <motion.span animate={{ color: ['#3c65f5'] }}>Get Your New Job</motion.span></motion.h1>
                            <p className="w-4/5 text-gray-600 text-xl">Each month, more than 3 million job seekers turn to website in their search for work, making over 140,000 applications every single day</p>

                            <div>
                                <select className='bg-white p-4'>
                                    <option value="Industry">Industry</option>
                                    <option value="Management">Management</option>
                                    <option value="Finance">Finance</option>
                                    <option value="Software">Software</option>

                                </select>
                                <select className='bg-white p-4'>
                                    <option value="Industry">Location</option>
                                    <option value="Management">New Yourk</option>
                                    <option value="Finance">Dhaka</option>
                                    <option value="Software">London</option>
                                </select>
                                <input type="text" className='bg-white p-4' placeholder='Key Word' />

                            </div>
                        </div>
                        <div className='h-full'>
                            <figure className="w-1/2 ">
                                <motion.img
                                    animate={{ y: [0, 20, 0] }}
                                    transition={{ duration: 10, repeat: Infinity }}
                                    src="/images/banner1 (1).jpg" className="rounded-t-3xl rounded-br-3xl border-l-8 border-b-8 border-[#3c65f5]" alt="" />
                                <motion.img
                                    animate={{ x: [180, 200, 180] }}
                                    transition={{ duration: 10, repeat: Infinity }}
                                    src="/images/banner2 (1).jpg" className="relative -top-10 rounded-t-3xl rounded-br-3xl border-l-8 border-b-8 border-[#3c65f5]" alt="" />
                            </figure>


                        </div>

                    </div>
                </SwiperSlide> */}
           
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    );
}
export default BannerSwiper
