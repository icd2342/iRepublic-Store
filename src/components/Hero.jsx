import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [screenType, setScreenType] = useState(window.innerWidth < 760 ? 'small' : 'large')
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

  const handleVideoSrcSet = () => {
    if(window.innerWidth < 760) {
      setScreenType('small')
      setVideoSrc(smallHeroVideo)
    } else {
      setScreenType('large')
      setVideoSrc(heroVideo)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);

    return () => {
      window.removeEventListener('resize', handleVideoSrcSet)
    }
  }, [])

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 2 })
    gsap.to('#cta', { opacity: 1, y: -50, delay: 2 })
  }, [])

  return (
    <section className="w-full min-h-screen bg-black relative pt-[60px]">
      <div className="h-full w-full flex-center flex-col">
        <div className="md:w-10/12 w-9/12">
          <video 
            className={screenType == 'small' ? 'pointer-events-none w-10/12 mx-auto' : ''}
            autoPlay 
            muted 
            playsInline={true} 
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">Buy</a>
        <p className="font-normal text-xl">From ₹21483.00/mo. or ₹134900.00</p>
      </div>
    </section>
  )
}

export default Hero