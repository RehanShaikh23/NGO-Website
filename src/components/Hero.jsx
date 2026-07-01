import { IMAGES } from '../data/siteData';
import AnimatedText from './AnimatedText';

export default function Hero() {
  return (
    <section className="relative max-w-container-max mx-auto px-margin-mobile md:px-gutter mt-stack-md rounded-card overflow-hidden h-[600px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url("${IMAGES.heroBackground}")` }}
        role="img"
        aria-label="A group photograph of diverse young people and children standing together outdoors against a lush green hedge, smiling and looking at the camera."
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r md:from-black/70 md:to-transparent" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center px-8 md:px-16 md:w-2/3">
        <h1 className="text-headline-xl text-white mb-6">
          <div className="flex flex-col gap-2">
            <AnimatedText text="Vision4Youth" className="font-google-sans font-black" style={{ fontFamily: "'Google Sans', sans-serif" }} delay={0} stagger={0.05} />
            <AnimatedText text="Filament of hope" className="font-italiana text-2xl md:text-3xl opacity-90" style={{ fontFamily: "'Italiana', serif" }} delay={0.6} stagger={0.15} byWord={true} />
            <AnimatedText text="EDUCATION for all" className="font-google-sans font-bold uppercase tracking-widest text-primary-container text-label-lg" style={{ fontFamily: "'Google Sans', sans-serif" }} delay={1.1} stagger={0.04} />
          </div>
        </h1>

        {/* Pagination Dots */}
        <div className="absolute bottom-8 left-8 md:left-16 flex gap-2">
          <div className="w-2 h-2 rounded-full bg-white" />
          <div className="w-2 h-2 rounded-full bg-white/50" />
          <div className="w-2 h-2 rounded-full bg-white/50" />
        </div>
      </div>
    </section>
  );
}
