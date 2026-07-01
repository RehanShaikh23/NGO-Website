import { IMAGES } from '../data/siteData';
import AnimatedContent from '@/components/ui/AnimatedContent';

export default function About() {
  return (
    <section id="about" className="max-w-container-max mx-auto px-margin-mobile md:px-gutter py-section-padding relative">
      {/* Decorative Doodle */}
      <div className="absolute top-10 right-1/2 translate-x-32 text-tertiary-fixed z-0 opacity-50">
        <span className="material-symbols-outlined text-[100px]">stars</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center relative z-10">
        {/* Text Content */}
        <AnimatedContent
          distance={80}
          direction="vertical"
          duration={1.0}
          ease="power3.out"
          threshold={0.15}
        >
          <div>
            <h2 className="text-headline-lg text-on-surface mb-6">About Vision Foundation</h2>
            <p className="text-body-md text-on-surface-variant mb-4">
              Vision Foundation is a secular, not-for-profit organization in India, registered under the
              Societies Registration Act of 1860. Set up in 2014, we are dedicated to the upliftment of
              society through social and educational institutions.
            </p>
            <p className="text-body-md text-on-surface-variant mb-8">
              Our mission is to prepare students for higher knowledge through career counseling and
              professional guidance. We focus on developing moral and ethical values, inculcating
              self-discipline, and fostering an ideal national character for the next generation.
            </p>
            <button className="bg-primary-container text-on-primary-container text-label-lg px-8 py-3 rounded-full hover:bg-primary/90 hover:text-on-primary transition-all">
              About Us
            </button>
          </div>
        </AnimatedContent>

        {/* Logo Image */}
        <AnimatedContent
          distance={100}
          direction="vertical"
          duration={1.2}
          ease="power3.out"
          delay={0.15}
          scale={0.9}
          threshold={0.15}
        >
          <div className="relative">
            <img
              alt="Vision4Youth Foundation Logo"
              className="w-full h-full rounded-card object-contain bg-surface-container-low p-8"
              src={IMAGES.aboutLogo}
            />
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}

