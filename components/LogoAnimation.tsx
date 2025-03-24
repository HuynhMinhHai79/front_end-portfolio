"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'
import communication from '../assets/communication.png'
import figma from '../assets/figma.png'
import ielts from '../assets/ielts.png'
import java from '../assets/java.png'
import teamwork from '../assets/teamwork.png'



const images = [

    // repeat 4 times to pop up no space time
    { src: figma, alt: 'figma' },
    { src: communication, alt: 'communication' },
    { src: ielts, alt: 'ielts' },
    { src: java, alt: 'java' },
    { src: teamwork, alt: 'teamwork' },
    { src: figma, alt: 'figma' },
    { src: communication, alt: 'communication' },
    { src: ielts, alt: 'ielts' },
    { src: java, alt: 'java' },
    { src: teamwork, alt: 'teamwork' },
    { src: figma, alt: 'figma' },
    { src: communication, alt: 'communication' },
    { src: ielts, alt: 'ielts' },
    { src: java, alt: 'java' },
    { src: teamwork, alt: 'teamwork' },
 
]
export const LogoAnimaiton = () => {
    return (
        <div className='py-8 bg-purple-200/10'>
            <div className='container mx-auto'>
                <div className='overflow-hidden
                [mask-image:linear-gradient(to right,transparent,_black 25%,_black_75%,_transparent)]'
                >
                    <motion.div
                        className='flex gap-14 flex-none pr-14'
                        animate={{
                            translateX: '-50%'
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 35,
                            ease: 'linear',
                            repeatType: 'loop'
                            // Removed repeatType as it is not a valid property for the transition object
                        }}
                    >
                        {images.map((image, index) => (
                            <Image
                                key={index}
                                src={image.src}
                                alt={image.alt}
                                height={40}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
