import EmblaCarousel from "@/components/carousel/EmblaCarousel";
import NavBar from "@/components/navbar/NavBar";
import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }
const SLIDE_COUNT = 3
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Home = () => {
  return (
    <>
    <NavBar />
    <section className="absolute w-screen left-0 top-0">
     <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </section>
    </>
  );
};

export default Home;