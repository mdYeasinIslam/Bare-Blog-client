import { motion } from 'motion/react'

type Prop = {
    heading1: string,
    heading2: string,
    para1: string
    para2: string
    img1: string,
    img2:string
}

export const BannerContent = ({ heading1, heading2, para1, para2, img1, img2 }: Prop) => {
    
     const width = window.innerWidth;
  // Dynamically set animation based on screen width
  const animateStyle1 = {
    y: width <= 640 ? [0, 30, 0] : // sm
       width <= 768 ? [0, 30, 0] : // md
       width <= 1024 ? [0, 30, 0] : // lg
       [0, 30, 0], // xl
  };
  const animateStyle2 = {
    x: width <= 640 ? [170, 200, 170] : // sm
       width <= 768 ? [100, 130, 100] : // md
       width <= 1024 ? [115, 145, 115] : // lg
       [170, 200, 170], // xl
  };
    
  return (
      <>
       <div className="col-span-1 space-y-2 lg:space-y-7 flex flex-col lg:justify-center text-left">
            <motion.h1
                // animate={{ y: [0, 15, 0] }}
                // transition={{ duration: 3, repeat: Infinity }}

                  className="text-xl md:text-3xl lg:text-5xl xl:text-6xl font-semibold  s">{heading1}  <motion.span animate={{ color: ['#3c65f5'] }}>{heading2}</motion.span></motion.h1>
            
              <p className=" xl:w-4/5 text-gray-600 text-xl">{para1} <span className=''>{para2}</span>.</p>
        </div>
        <div className='h-full mx-1 md:m-0 '>
            <figure className="w-1/2 md:w-[60%]   lg:w-[70%] xl:w-[70%] ">
                <motion.img
                    animate={animateStyle1}
                    transition={{ duration: 10, repeat: Infinity }}
                    src={img1} 
                    className="w-full h-full rounded-t-3xl rounded-br-3xl border-l-8 border-b-8 border-[#3c65f5] " alt="blog related img" />
                <motion.img
                    animate={animateStyle2}
                    transition={{ duration: 10, repeat: Infinity }}
                    src={img2} 
                    className="relative w-full h-full -top-14 md:-top-7 lg:-top-12 rounded-t-3xl rounded-br-3xl border-l-8 border-b-8 border-[#3c65f5]" alt="blog related img" />
            </figure>
        </div>
      </>
  )
}
