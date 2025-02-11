import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { rightImg, watchImg } from "../utils"

import VideoCarousel from './VideoCarousel.jsx';

const Highlights = () => {
  useGSAP(() => {
    gsap.to('#title', { opacity: 1, y: 0 })
    gsap.to('.link', { opacity: 1, y: 0, duration: 1, stagger: 0.25 })
  }, [])

  return (
    <section id="highlights" className="w-full overflow-hidden h-auto common-padding bg-zinc">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-8 md:mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading mb-4 md:mb-0">Узнайте главное.</h1>

          <div className="flex flex-wrap items-end gap-3 md:gap-5">
            <p className="link text-base md:text-lg">
              Смотреть фильм
              <img src="/assets/images/watch.svg" alt="watch" className="ml-2 inline w-3 md:w-4" />
            </p>
            <p className="link text-base md:text-lg">
              Смотреть презентацию
              <img src="/assets/images/right.svg" alt="right" className="ml-2 inline w-3 md:w-4" />
            </p>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  )
}

export default Highlights