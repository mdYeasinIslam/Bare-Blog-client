/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import useContextHook from '../../../Hooks/useContextHook';

import './swiperStyle.css';

import { BannerContent } from './BannerContent';
 
import img1 from '/images/blog1.jpg'
import img2 from '/images/banner2 (1).jpg'
import img3 from "/images/banner1 (1).jpg"
import img4 from "/images/blog2.jpg" 


const SwiperSlider = () => {
    const {darkMode} = useContextHook()
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
    // F9FAFB
    return (
        <div className={`${darkMode ? 'dark' : ''} bg-[#f1f5fa] dark:bg-[#111827] dark:text-white`}>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper "
            >
                <SwiperSlide className=''>
                    <div className="flex flex-col-reverse md:grid  md:grid-cols-2 max-w-7xl mx-auto md:w-[90%]   gap-5">
                        {/* <div className="col-span-1 space-y-7">
                            <motion.h1
                                // animate={{ y: [0, 15, 0] }}
                                // transition={{ duration: 3, repeat: Infinity }}

                                className="text-xl md:text-3xl xl:text-5xl font-medium leading-tight">The best blogging platform  <motion.span animate={{ color: ['#3c65f5'] }}>for developers and teams.</motion.span></motion.h1>
                           
                            <p className=" xl:w-4/5 text-gray-600 text-xl">Effortlessly run your blog, solo or with a team. Customize everything — <span className='hidden lg:block'>map a domain, subdomain, or use a company sub-path. Already loved by millions of devs worldwide</span>.</p>
                        </div>
                        <div className='h-full'>
                            <figure className="w-1/2 lg:w-1/2">
                                <motion.img
                                    
                                    animate={{ y: [10, 30, 10] }}
                                    transition={{ duration: 10, repeat: Infinity }}
                                    src="/images/blog1.jpg" className=" rounded-t-3xl rounded-br-3xl border-l-8 border-b-8 border-[#3c65f5]" alt="" />
                                <motion.img
                                    animate={{ x: [180, 200, 180] }}
                                    transition={{ duration: 10, repeat: Infinity }}
                                    src="/images/banner2 (1).jpg" className="relative -top-10 rounded-t-3xl rounded-br-3xl border-l-8 border-b-8 border-[#3c65f5]" alt="" />
                            </figure>
                        </div> */}
                        <BannerContent
                            heading1='The best blogging platform'
                            heading2='for developers and teams.'
                            para1='Effortlessly run your blog, solo or with a team. Customize everything — '
                            para2='map a domain, subdomain, or use a company sub-path. Already loved by millions of devs worldwide'
                            img1={img1}
                            img2={img2}
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col-reverse md:grid grid-cols-2 max-w-7xl mx-auto md:w-[90%]   gap-5 ">
                        {/* <div className="col-span-1 space-y-7">
                            <motion.h1
                                // animate={{ y: [0, 15, 0] }}
                                // transition={{ duration: 3, repeat: Infinity }}

                                className="text-xl md:text-3xl xl:text-5xl font-medium leading-tight">
                                Tech Experts Predict 15 Areas
                                to <motion.span animate={{ color: ['#3c65f5'] }}>AI And VR Are Set To Revolutionize</motion.span></motion.h1>
                           
                            <p className=" xl:w-4/5 text-gray-600 text-xl">Effortlessly run your blog, solo or with a team. Customize everything — <span className='hidden lg:block'>map a domain, subdomain, or use a company sub-path. Already loved by millions of devs worldwide</span>.</p>
                          
                        </div>
                        <div className='h-full'>
                            <figure className="w-1/2 lg:w-1/2">
                                <motion.img
                                    animate={{ y: [10, 30, 10] }}
                                    transition={{ duration: 10, repeat: Infinity }}
                                    src="/images/banner1 (1).jpg" className="rounded-t-3xl rounded-br-3xl border-l-8 border-b-8 border-[#3c65f5]" alt="" />
                                <motion.img
                                    animate={{ x: [180, 200, 180] }}
                                    transition={{ duration: 10, repeat: Infinity }}
                                    src="/images/blog2.jpg" className="relative -top-10 rounded-t-3xl rounded-br-3xl border-l-8 border-b-8 border-[#3c65f5]" alt="" />
                            </figure>
                        </div> */}
                        <BannerContent
                        heading1='Tech Experts Predict 15 Areas
                                to'
                        heading2='AI And VR Are Set To Revolutionize'
                            para1='Effortlessly run your blog, solo or with a team. Customize everything — '
                            para2='map a domain, subdomain, or use a company sub-path. Already loved by millions of devs worldwide'
                            img1={img3}
                            img2={img4}
                            
                        />
                    </div>
                </SwiperSlide>
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
export default SwiperSlider
