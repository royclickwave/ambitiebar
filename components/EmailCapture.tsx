import React, { useState } from 'react';
import { Layout } from './Layout';
import { Button } from './ui/Button';
import { UserDetails } from '../types';
import { IMAGES } from '../constants';

interface EmailCaptureProps {
  onSubmit: (details: UserDetails) => void;
}

export const EmailCapture: React.FC<EmailCaptureProps> = ({ onSubmit }) => {
  const [details, setDetails] = useState<UserDetails>({ name: '', email: '', company: '' });
  const [optIn, setOptIn] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (details.name && details.email && details.company) {
      onSubmit(details);
    }
  };

  return (
    <Layout simpleHeader>
      <div className="min-h-[80vh] flex items-center justify-center py-12 px-4">
        <div className="bg-white max-w-lg w-full rounded-2xl shadow-xl p-8 md:p-12 border border-neutral-gray relative overflow-hidden">
          {/* Top border accent */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-primary-yellow" />

          <div className="relative z-10">
            <h2 className="text-3xl font-bold font-title text-black mb-2 italic">Bijna klaar!</h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              We hebben je Talent-Factor berekend. Waar mogen we de persoonlijke analyse en de 5 gouden tips voor medior/senior werving naartoe sturen?
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1 font-title italic">Voornaam</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-yellow focus:border-transparent outline-none transition-all font-sans"
                  placeholder="Je voornaam"
                  value={details.name}
                  onChange={e => setDetails({ ...details, name: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-1 font-title italic">Bedrijfsnaam</label>
                <input
                  type="text"
                  id="company"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-yellow focus:border-transparent outline-none transition-all font-sans"
                  placeholder="Bedrijfsnaam"
                  value={details.company}
                  onChange={e => setDetails({ ...details, company: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1 font-title italic">Zakelijk e-mailadres</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-yellow focus:border-transparent outline-none transition-all font-sans"
                  placeholder="naam@bedrijf.nl"
                  value={details.email}
                  onChange={e => setDetails({ ...details, email: e.target.value })}
                />
              </div>

              <div className="flex items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  id="optIn"
                  checked={optIn}
                  onChange={e => setOptIn(e.target.checked)}
                  className="mt-1 w-4 h-4 text-primary-yellow rounded border-gray-300 focus:ring-primary-yellow"
                />
                <label htmlFor="optIn" className="text-sm text-gray-600 font-sans">
                  Ja, stuur mij ook waardevolle updates over de arbeidsmarkt en employer branding.
                </label>
              </div>

              <Button type="submit" fullWidth className="mt-4 bg-primary-yellow text-black hover:bg-black hover:text-white transition-all">
                Krijg mijn analyse
              </Button>
            </form>

            <div className="mt-8 flex items-center justify-center gap-3 opacity-80">
              <p className="text-xs text-gray-400 text-center italic">
                "We gaan zorgvuldig om met je gegevens. Geen spam, alleen de beste ambities." <br /> — Team De Ambitie Bar
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};