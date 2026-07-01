import { PROGRAMS } from '../data/siteData';
import AnimatedContent from '@/components/ui/AnimatedContent';

function ProgramCard({ title, number, color, textColor, image, imageAlt }) {
  return (
    <div className="bg-white rounded-card overflow-hidden flex flex-col border border-outline-variant/20 hover:shadow-lg transition-shadow h-full">
      {/* Colored Header */}
      <div className="p-6 flex-grow" style={{ backgroundColor: color, color: textColor }}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-headline-sm">{title}</h3>
          <div
            className="w-8 h-8 rounded-full border flex items-center justify-center text-label-sm"
            style={{ borderColor: textColor === 'white' ? 'rgba(255,255,255,0.5)' : 'rgba(30,28,0,0.5)' }}
          >
            {number}
          </div>
        </div>
      </div>
      {/* Image */}
      <img
        alt={imageAlt}
        className="w-full h-48 object-cover p-2 rounded-card"
        src={image}
      />
    </div>
  );
}

export default function Programs() {
  return (
    <section id="programs" className="bg-gradient-yellow-green py-section-padding px-margin-mobile md:px-gutter relative">
      <div className="max-w-container-max mx-auto">
        {/* Header */}
        <AnimatedContent
          distance={40}
          direction="vertical"
          duration={0.8}
          threshold={0.15}
        >
          <div className="flex flex-col items-center justify-center mb-stack-lg gap-6">
            <div className="w-full text-center">
              <h2 className="text-headline-lg text-on-surface mb-4">Our Programs</h2>
              <p className="text-body-md text-on-surface-variant">
                Every child&apos;s need is unique but every act of care matters. Select one of the six
                essentials below and make it stronger today.
              </p>
            </div>
          </div>
        </AnimatedContent>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.map((program, idx) => (
            <AnimatedContent
              key={program.number}
              distance={60}
              direction="vertical"
              delay={idx * 0.1}
              duration={0.8}
              threshold={0.1}
              className="h-full"
            >
              <ProgramCard {...program} />
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}

