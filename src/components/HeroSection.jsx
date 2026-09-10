import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import hero from '../assets/Hero.png'

const words = ["React Developer", "Front-End Developer", "Full Stack Developer"]

const HeroSection = () => {
    const [index, setIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[index];
        let timeout;

        if (isDeleting) {
            timeout = setTimeout(() => {
                setDisplayedText(currentWord.substring(0, displayedText.length - 1));
                if (displayedText.length === 0) {
                    setIsDeleting(false);
                    setIndex((prev) => (prev + 1) % words.length);
                }
            }, 80);
        } else {
            timeout = setTimeout(() => {
                setDisplayedText(currentWord.substring(0, displayedText.length + 1));
                if (displayedText.length === currentWord.length) {
                    setTimeout(() => {
                        setIsDeleting(true);
                    }, 1000);
                }
            }, 120);
        }
        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, index]);

    return (
        <section
            id='home'
            className='lg:min-h-screen text-white flex items-center justify-center relative  overflow-hidden pt-30 lg:pt-24 pb-20 sm:pb-16 px-4 sm:px-6 font-ubuntu'>
            <div className='absolute top-0.5 left-0.5 -translate-x-0.5 -translate-y-0.5 w-50 h-50 sm:w-75 sm:h-75 md:w-100 md:h-100 lg:w-125 lg:h-125 rounded-full bg-yellow-400/10 blur-3xl pointer-events-none '></div>
            <div className='max-w-6xl mx-auto w-full items-center grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 z-10'>
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className='lg:col-span-5 flex items-center justify-center order-1 lg:order-0'>
                    <div className='relative w-64 sm:w-72 h-80 sm:h-90 flex items-center justify-center my-4'>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: -10 }}
                            animate={{ opacity: 1, scale: 1, rotate: -10 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className='absolute rounded-2xl shadow-xl'
                            style={{
                                width: '100%',
                                height: '100%',
                                background: 'linear-linear(145deg, #fef9c3, #fde047)',
                                transform: 'translateX(-28px) translateY(18px) rotate(-10deg)', zIndex: 1,
                                border: '3px solid rgba(250, 204, 21, 0.5)',
                                boxShadow: '0 20px 60px rgba(250 , 204 , 21 , 0.2)'
                            }}>

                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                            animate={{ opacity: 1, scale: 1, rotate: -5 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className='absolute rounded-2xl shadow-xl'
                            style={{
                                width: '100%',
                                height: '100%',
                                background: 'linear-linear(145deg, #fef9c3, #fde047)',
                                transform: 'translateX(-28px) translateY(18px) rotate(-10deg)', zIndex: 2,
                                border: '3px solid rgba(250, 204, 21, 0.5)',
                                boxShadow: '0 20px 60px rgba(250 , 204 , 21 , 0.2)'
                            }}>

                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9,  }}
                            animate={{ opacity: 1, scale: 1, y:[0, -8, 0]  }}
                            transition={{ duration: 0.7, delay: 0.2 , y: { repeat: Infinity, duration
                                : 3 , ease: "easeInOut" }
                             }}
                            className='absolute rounded-2xl shadow-xl bg-linear-to-br from-yellow-400 to-yellow-500 flex items-end justify-center overflow-hidden'
                            style={{
                                width: '100%',
                                height: '100%',
                                background: 'linear-linear(145deg, #fef9c3, #fde047)',
                                transform: 'translateX(-28px) translateY(18px) rotate(-10deg)', 
                                zIndex: 3,
                                border: '3px solid rgba(250, 204, 21, 0.8)',
                                boxShadow: '0 20px 60px rgba(250 , 204 , 21 , 0.4)'
                            }}>
                                <motion.img
                                    src={hero}
                                    alt='Hero Image'
                                    className='w-full h-full object-cover object-top'
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.7, delay: 0.3 }}
                                />
                                <div className='absolute inset-0 bg-linear-to-t from-yellow-400/20 via-transparent to-transparent pointer-events-none'>
                                </div>

                        </motion.div>
                    </div>
                </motion.div>
                <div className='lg:col-span-7 flex flex-col items-center lg:items-start lg:text-left order-2 lg:order-0'>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className='text-zinc-200 text-sm sm:text-base lg:text-lg font-medium mb-2 sm:mb-3 lg:mb-4'>
                        Hi, I'm <span className='text-yellow-400 font-bold'>Jash Bheda</span>
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className='text-5xl lg:text-6xl  font-bold tracking-tight my-4 sm:my-6'>
                        <div className='inline-flex items-center min-h-[1.2em] relative justify center lg:justify-start '>
                            <span className='text-yellow-400 font-ubuntu text-3xl lg:text-5xl xl:text-6xl'>{displayedText}</span>
                            <span className='w-1 h-6 sm:h-8 md:h-10 lg:h-12 bg-yellow-400 ml-1 sm:ml-2 inline-block animate-pulse'></span>
                        </div>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className='text-zinc-200 text-sm sm:text-base lg:text-lg font-medium mb-2 sm:mb-3 lg:mb-4'>
                        I'm a passionate full stack developer with a love for creating beautiful and functional web applications.
                    </motion.p>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
