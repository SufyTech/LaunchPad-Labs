import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { PartnersSection } from '@/components/sections/PartnersSection';
import { ImpactSection } from '@/components/sections/ImpactSection';
import { WorkSection } from '@/components/sections/WorkSection';
import { ApproachSection } from '@/components/sections/ApproachSection';
import  {ProcessSection}  from '@/components/sections/ProcessSection';
import  {Testimonials}  from '@/components/sections/Testimonials';
import { Footer } from '@/components/sections/Footer';
import { Navbar } from '@/components/sections/Navbar';
import { WhyLaunchpad } from '@/components/sections/WhyLaunchpad';
import { BannerWithFrame } from '@/components/sections/BannerWithFramer';
const Index = () => {
  return (
    <main className="bg-[rgba(243,247,248,1)] flex flex-col overflow-hidden items-stretch relative">
      <Navbar />
      <HeroSection />
                   {/* Banner renders MainContentSection + SidebarSection */}
      <PartnersSection />
      <ImpactSection />
      <WorkSection />
      
      {/* <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/f6dce2ea706d154c2cee785b8d0ed8aef680655d?placeholderIfAbsent=true"
        alt="Decorative separator"
        className="aspect-[1.68] object-contain w-full max-md:max-w-full"
      /> */}
      <WhyLaunchpad  />
      <ApproachSection />
      <ProcessSection />
      <Testimonials />
      <BannerWithFrame />
      <Footer />
    </main>
  );
};

export default Index;
