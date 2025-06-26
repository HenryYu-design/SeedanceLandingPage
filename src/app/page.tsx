import { HeroSection, ComparisonTable, KeyFeatures, BenchmarkResults, ArenaAndCost, GenerationSpeed, Applications, CTASection } from '@/components';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ComparisonTable />
      <KeyFeatures />
      <BenchmarkResults />
      <ArenaAndCost />
      <GenerationSpeed />
      <Applications />
      <CTASection />
    </div>
  );
} 