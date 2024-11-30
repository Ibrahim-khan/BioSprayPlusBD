import Certificate_Gallery from "@/components/Certificate_Gallery";
import Hero from "@/components/Hero";
import Home_Blog from "@/components/Home_Blog";
import Testimony_Picture from "@/components/Testimony_Picture";

import Testimonials from "@/components/Testimonials";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import '../app/globals.css';


export default function Home() {
  return (
    <main>
       <Hero />
       <Home_Blog />
       <Testimonials />
       <Certificate_Gallery />
       <Testimony_Picture />
    </main>
  );
}
