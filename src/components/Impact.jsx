import { IMPACT_STATS } from '../data/siteData';
import AnimatedContent from '@/components/ui/AnimatedContent';
import AnimatedNumber from '@/components/ui/AnimatedNumber';

function StatCard({ icon, value, label, delay = 0 }) {
  return (
    <div className="bg-surface-container-low p-8 rounded-card border border-outline-variant/30 flex flex-col items-center text-center hover:shadow-lg transition-shadow h-full">
      <div className="w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center text-primary mb-6">
        <span className="material-symbols-outlined text-headline-md">{icon}</span>
      </div>
      <div className="text-headline-md text-primary mb-2">
        <AnimatedNumber value={value} delay={delay} />
      </div>
      <div className="text-label-lg text-on-surface-variant">{label}</div>
    </div>
  );
}

export default function Impact() {
  return (
    <section className="py-section-padding px-margin-mobile md:px-gutter bg-surface">
      <div className="max-w-container-max mx-auto">
        {/* Header */}
        <AnimatedContent
          distance={40}
          direction="vertical"
          duration={0.8}
          threshold={0.15}
        >
          <div className="text-center mb-stack-lg">
            <h2 className="text-headline-lg text-on-surface mb-4">Our Impact &amp; Reach</h2>
            <p className="text-body-md text-on-surface-variant max-w-2xl mx-auto">
              Vision Foundation has been very active in the past and during the pandemic COVID-19,
              helping families and training students across the region.
            </p>
          </div>
        </AnimatedContent>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {IMPACT_STATS.map((stat, idx) => (
            <AnimatedContent
              key={stat.label}
              distance={50}
              direction="vertical"
              delay={idx * 0.15}
              duration={0.8}
              threshold={0.1}
              className="h-full"
            >
              <StatCard {...stat} delay={idx * 0.15} />
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
}

