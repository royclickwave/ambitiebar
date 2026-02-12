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
            <div className="relative min-h-[75vh] md:min-h-[80vh] flex items-center bg-black overflow-hidden border-b-4 border-primary-yellow">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://deambitiebar.nl/wp-content/uploads/2025/05/57-homepage.jpg"
                        alt="Office"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 md:py-24 w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl space-y-6 bg-white/10 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] border border-white/20 shadow-2xl text-white"
                    >
                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                            >
                                <h1 className="text-3xl md:text-5xl font-bold font-title leading-tight italic">
                                    Talent Scan voor <br />
                                    <span className="text-primary-yellow">Ervaren Professionals</span>
                                </h1>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                className="text-sm md:text-lg text-white/90 max-w-2xl leading-relaxed font-sans"
                            >
                                Het vinden van ervaren professionals is lastiger dan ooit. Ze hebben al een baan, een prima salaris en worden wekelijks benaderd. Ontdek met onze scan hoe aantrekkelijk jouw organisatie is voor ervaren professionals en waar jullie kansen liggen.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                                className="flex flex-col sm:flex-row gap-4 pt-4"
                            >
                                <Button onClick={onStart} className="gap-2 bg-primary-yellow text-black hover:bg-white transition-all transform hover:scale-105 active:scale-95 duration-200 px-8 py-6 text-lg">
                                    Start de scan <ArrowRight className="w-5 h-5" />
                                </Button>
                            </motion.div>
                            <div className="flex flex-wrap items-center gap-4 text-xs text-white/70 font-medium pt-2">
                                <span className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10"><FileBarChart className="w-4 h-4 text-primary-yellow" /> 8 vragen</span>
                                <span className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10"><Clock className="w-4 h-4 text-primary-yellow" /> 2 minuten</span>
                                <span className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10"><CheckCircle2 className="w-4 h-4 text-primary-yellow" /> Direct inzicht</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/50"
                >
                    <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1 h-8 bg-gradient-to-b from-primary-yellow to-transparent rounded-full"
                    />
                </motion.div>
            </div>

            {/* Problem Section */}
            <div className="py-20 bg-cream overflow-hidden">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-16 border border-neutral-gray relative">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <FileBarChart className="w-32 h-32" />
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold font-title text-black mb-8 italic uppercase tracking-tighter decoration-primary-yellow decoration-4 underline-offset-8">
                            Het probleem: ervaren professionals scrollen voorbij
                        </h2>

                        <div className="space-y-8 text-lg text-gray-700 leading-relaxed font-sans">
                            <p className="font-medium">
                                Ervaren professionals verleid je niet met een pingpongtafel of een vrijdagmiddagborrel. Ze hebben dat allemaal al gezien. Ze kijken naar perspectief, autonomie en een bedrijf dat laat zien dat het ze serieus neemt. En ze beslissen binnen 10 seconden of je vacature interessant is.
                            </p>

                            <div className="bg-cream text-black p-8 rounded-2xl border-l-8 border-primary-yellow relative overflow-hidden group shadow-sm border border-neutral-gray">
                                <span className="absolute -top-4 -left-2 text-8xl text-primary-yellow/20 font-serif leading-none">"</span>
                                <p className="relative z-10 text-xl md:text-2xl font-bold font-title italic leading-tight group-hover:text-primary-yellow transition-colors duration-300">
                                    De beste kandidaten zijn binnen 10 dagen van de markt. Het gemiddelde bedrijf doet er 44 dagen over om een vacature te vullen. In die 34 dagen verlies je ze aan bedrijven die sneller en scherper zijn.
                                </p>
                            </div>

                            <p className="border-t border-gray-100 pt-8">
                                Ondertussen kost een vacature die twee maanden openstaat al snel <strong>30% van het jaarsalaris</strong>. Bij €55.000 is dat zo'n <strong>€16.500</strong> aan verloren productiviteit, extra druk op het team en uitgestelde projecten. En dan heb je nog steeds niemand.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Triggers Section */}
            <div className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold font-title text-black italic uppercase">
                            Wat ervaren professionals <span className="text-primary-yellow">echt triggert:</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Groeiperspectief",
                                desc: "Ze willen weten waar ze over een jaar staan. Niet \"er zijn mogelijkheden\" maar een concreet pad. Carrièrekansen zijn de nummer één reden waarom mensen van baan wisselen.",
                                icon: <ArrowRight className="w-6 h-6" />
                            },
                            {
                                title: "Autonomie",
                                desc: "Ze willen de ruimte om hun eigen expertise in te zetten zonder micromanagement. De vrijheid om het op hun manier te doen.",
                                icon: <ArrowRight className="w-6 h-6" />
                            },
                            {
                                title: "Snelheid & Respect",
                                desc: "Een ervaren professional die twee weken niks hoort na een gesprek? Die is niet boos. Die is gewoon verder. Want er staan drie andere bedrijven in de inbox.",
                                icon: <ArrowRight className="w-6 h-6" />
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="bg-white p-8 rounded-3xl border-2 border-neutral-gray hover:border-primary-yellow transition-all shadow-sm hover:shadow-xl"
                            >
                                <div className="bg-primary-yellow w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-primary-yellow/20">
                                    {item.icon}
                                </div>
                                <h3 className="font-bold font-title text-2xl text-black mb-4 italic uppercase tracking-tight">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed font-sans">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Banner Banner */}
            <div className="pb-24 pt-12 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="bg-cream text-black rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl border-b-8 border-primary-yellow border-2 border-neutral-gray">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(226,184,8,0.3),transparent)] pointer-events-none"></div>
                        <div className="relative z-10 space-y-8">
                            <h2 className="text-3xl md:text-5xl font-bold font-title italic uppercase tracking-tighter">
                                Ontdek waar jullie <span className="text-primary-yellow">kansen liggen</span>
                            </h2>
                            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-sans leading-relaxed">
                                Binnen 2 minuten weet je waar jouw organisatie staat en krijg je concrete actiepunten om ervaren professionals sneller en gerichter aan te trekken.
                            </p>
                            <div className="pt-4">
                                <Button
                                    onClick={onStart}
                                    className="bg-primary-yellow text-black hover:bg-black hover:text-white px-12 py-8 text-2xl font-bold font-title italic transition-all transform hover:scale-105"
                                >
                                    Start de scan
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};