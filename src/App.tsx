/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { ClinicalPhilosophy } from './components/ClinicalPhilosophy.tsx';
import { Procedures } from './components/Procedures.tsx';
import { CasesGallery } from './components/CasesGallery.tsx';
import { PatientJourney } from './components/PatientJourney.tsx';
import { InstitutionalAuthority } from './components/InstitutionalAuthority.tsx';
import { FAQAndContact } from './components/FAQAndContact.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col selection:bg-amber-500/20 selection:text-amber-200">
      {/* Top Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* Section 1: Hero Section */}
        <Hero />

        {/* Section 2: Clinical Philosophy & Manifesto */}
        <ClinicalPhilosophy />

        {/* Section 3: Procedures (Porcelain Veneers & Stratified Resin) */}
        <Procedures />

        {/* Section 4: Clinical Cases Gallery (Interactive Before/After & Macro Texture) */}
        <CasesGallery />

        {/* Section 5: Exclusive Patient Journey (3 Clear Phases) */}
        <PatientJourney />

        {/* Section 6: Institutional Authority (Dra. Caroline Tigre & Instituto Tigre) */}
        <InstitutionalAuthority />

        {/* Section 7: FAQ & Quick VIP Booking */}
        <FAQAndContact />
      </main>

      {/* Imposing Footer */}
      <Footer />

      {/* Floating Concierge Action */}
      <FloatingWhatsApp />
    </div>
  );
}
