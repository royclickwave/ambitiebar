import React from 'react';
import { Layout } from './Layout';
import { Button } from './ui/Button';
import { IMAGES } from '../constants';
import { ArrowRight, CheckCircle2, Clock, FileBarChart } from 'lucide-react';
import { motion } from 'framer-motion';

interface LandingPageProps {
    onStart: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
    return (
        <Layout>
            {/* Hero Section */}
            <div className="relative bg-white overflow-hidden text-black border-b-4 border-primary-yellow">
                <div className="absolute inset-0 z-0">
                    <img src={IMAGES.hero} alt="Office" className="w-full h-full object-cover opacity-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-primary-yellow/20 text-black border border-primary-yellow/50 text-sm font-semibold mb-4">
                                Voor Werkgevers
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold font-title leading-tight italic">
                                Medior/Senior <br />
                                <span className="text-primary-yellow">Talent Scan</span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed"
                        >
                            Het vinden van ervaren professionals is lastiger dan ooit. Maar nog belangrijker: hoe zorg je dat ze voor jóu kiezen? Ontdek met onze scan hoe aantrekkelijk jouw organisatie is voor medior en senior talent en waar de kansen liggen.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="flex flex-col sm:flex-row gap-4 pt-4"
                        >
                            <Button onClick={onStart} className="gap-2 bg-primary-yellow text-black hover:bg-black hover:text-white transition-all">
                                Start de scan <ArrowRight className="w-5 h-5" />
                            </Button>
                        </motion.div>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1"><FileBarChart className="w-4 h-4" /> 8 vragen</span>
                            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 2 minuten</span>
                            <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> Direct inzicht</span>
                        </div>
                    </div>

                    <div className="hidden md:block flex-1 relative">
                        <img
                            src={IMAGES.office_interior}
                            alt="De Ambitie Bar"
                            className="rounded-2xl shadow-2xl border-4 border-primary-yellow/20 rotate-1 hover:rotate-0 transition-transform duration-500"
                        />
                        <div className="absolute -bottom-6 -left-6 bg-black text-white p-4 rounded-xl shadow-lg max-w-xs border-l-4 border-primary-yellow">
                            <div className="flex items-center gap-3">
                                <div>
                                    <p className="font-bold text-sm italic">"Senior talent zoekt niet alleen een baan, maar een plek waar ze echt impact kunnen maken en hun ambities kwijt kunnen."</p>
                                    <p className="text-xs text-gray-300 mt-2">Team De Ambitie Bar</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="py-20 bg-workon-bg leading-relaxed">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-neutral-gray/50">
                        <h2 className="text-3xl font-bold font-title text-black mb-6 italic">Het probleem: ervaren talent is 'blind' voor standaard vacatures</h2>
                        <div className="space-y-6 text-lg text-neutral-darkGray">
                            <p>
                                Juniors kun je vaak nog wel verleiden met een leuke pingpongtafel of een hippe koffiebar. Maar medioren en senioren? Die kijken verder. Die kijken naar diepgang, autonomie, en een visie die matcht met hun eigen ambities.
                            </p>
                            <p className="bg-primary-yellow/5 p-6 rounded-xl border-l-4 border-primary-yellow italic">
                                "Wist je dat 74% van de ervaren professionals openstaat voor een nieuwe uitdaging, maar dat slechts 12% ook daadwerkelijk actief solliciteert?"
                            </p>
                            <p>
                                Dat betekent dat je ze moet <strong>triggeren</strong>. Je moet laten zien waarom jouw bar de plek is waar zij hun volgende grote stap willen zetten.
                            </p>
                        </div>

                        <div className="mt-12 mb-6 font-title text-xl font-bold text-black italic">
                            Wat ervaren professionals echt triggert:
                        </div>

                        <div className="mb-10 grid md:grid-cols-3 gap-6">
                            {[
                                { title: "Autonomie", desc: "Ze willen de ruimte om hun eigen expertise in te zetten zonder micromanagement." },
                                { title: "Impact", desc: "De zekerheid dat hun werk direct bijdraagt aan de groei van de organisatie." },
                                { title: "Ambition Match", desc: "Een omgeving die hun ambitie niet remt, maar juist versnelt." }
                            ].map((item, i) => (
                                <div key={i} className="bg-neutral-lightGray p-6 rounded-xl border border-neutral-gray hover:border-primary-yellow transition-colors">
                                    <h3 className="font-bold font-title text-black mb-2 italic border-b border-primary-yellow pb-1 inline-block">{item.title}</h3>
                                    <p className="text-sm mt-2">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-black text-white p-8 rounded-xl flex flex-col md:flex-row items-center gap-6 shadow-xl">
                            <div className="flex-1">
                                <h4 className="font-bold font-title text-lg mb-2 italic text-primary-yellow">Krijg direct inzicht in jouw 'Talent-Factor'</h4>
                                <p className="text-gray-300 text-sm">
                                    Binnen 2 minuten weet je waar jouw organisatie staat en krijg je concrete tips om die lastige medior/senior posities sneller én beter in te vullen.
                                </p>
                            </div>
                            <Button onClick={onStart} className="bg-primary-yellow text-black hover:bg-white transition-all">Start de scan</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};