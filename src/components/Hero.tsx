import { motion } from 'framer-motion';
import { styles } from '@/styles/styles';
import { LandscapeCanvas } from './canvas';

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Welcome to my playground.
          </p>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m
            <span className='text-[#ff940b]'> Deepak Bhadoriya</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I built web and mobile apps
          </p>
        </div>
      </div>

      {/* <ComputersCanvas /> */}
      <LandscapeCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
