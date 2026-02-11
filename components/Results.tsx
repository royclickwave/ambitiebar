import React from 'react';
import { Layout } from './Layout';
import { UserAnswers, UserDetails, Option } from '../types';
import { IMAGES } from '../constants';
import { CheckCircle, AlertTriangle, Calendar, Mail, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from './ui/Button';

interface ResultsProps {
    answers: UserAnswers;
    userDetails: UserDetails;
    isFirstView: boolean;
}

export const Results: React.FC<ResultsProps> = ({ answers, userDetails, isFirstView }) => {
    const calculateScores = () => {
        let total = 0;
        const categories = {
            branding: 0,    // Q7, Q4
            strategy: 0,    // Q1, Q2, Q3, Q5
            experience: 0,  // Q8
            retention: 0    // Q6
        };

        Object.entries(answers).forEach(([qId, option]) => {
            const id = parseInt(qId);
            total += option.points;

            if (id === 7 || id === 4) categories.branding += option.points;
            else if (id === 1 || id === 2 || id === 3 || id === 5) categories.strategy += option.points;
            else if (id === 8) categories.experience += option.points;
            else if (id === 6) categories.retention += option.points;
        });

        return {
            total: Math.min(100, total),
            categories
        };
    };

    const { total: score, categories } = calculateScores();

    const getInterpretation = () => {
        // Find weakest category (biggest percentage gap)
        const maxPoints = { branding: 25, strategy: 55, experience: 5, retention: 15 };
        const gaps = Object.entries(categories).map(([key, value]) => ({
            key,
            gap: maxPoints[key as keyof typeof maxPoints] - value,
            percentage: value / maxPoints[key as keyof typeof maxPoints]
        }));

        const weakest = gaps.reduce((prev, curr) => (prev.gap > curr.gap ? prev : curr));

        if (score < 40) {
            return {
                intro: "Je staat nog aan het begin van je reis naar een ijzersterk recruitmentbeleid voor medior en senior talent. Geen zorgen, dit is hét moment om de koers te wijzigen en écht het verschil te gaan maken in de markt.",
                structure: {
                    text: "Je employer brand is momenteel nog niet onderscheidend genoeg voor senior talent.",
                    why: "Senioren zoeken niet alleen een baan, maar een plek die past bij hun ambitie. Zonder helder verhaal kies je alleen op basis van salaris, en dat verlies je altijd.",
                    action: "Definieer jullie unieke Employee Value Proposition (EVP). Waarom zou een senior developer of manager bij júllie willen werken in plaats van bij de concurrent?"
                },
                data: {
                    text: "Je wervingsproces is nog reactief in plaats van proactief.",
                    why: "Medior en senior talent zit vaak niet actief op vacaturesites. Je moet ze opzoeken waar ze zijn en hen verleiden met een gericht aanbod.",
                    action: "Start met 'active sourcing'. Gebruik LinkedIn niet alleen voor vacatures, maar ga het gesprek aan zonder directe druk."
                },
                transparency: {
                    text: "Candidate experience is een blinde vlek in jullie proces.",
                    why: "Een senior kandidaat verwacht respect voor hun tijd en expertise. Een traag proces of gebrek aan feedback is dodelijk voor je reputatie.",
                    action: "Meld elke stap in het proces vooraf. Geef binnen 48 uur na elk gesprek inhoudelijke feedback."
                },
                compliance: {
                    text: "Je loopbaanpaden zijn nog te onduidelijk.",
                    why: "Groei is de belangrijkste drijfveer voor senior talent. Als ze niet zien waar ze over twee jaar staan, haken ze af.",
                    action: "Maak voor elke senior rol een 'roadmap' voor de eerste twee jaar. Welke impact gaan ze maken? Welke projecten pakken ze op?"
                },
                topActions: [
                    { step: "EVP Scherpstellen", deadline: "Binnen 2 weken", text: "Vraag je huidige senioren waarom ze blijven. Dat is je startpunt voor je wervingsverhaal." },
                    { step: "Sourcing Strategie", deadline: "Binnen 4 weken", text: "Stop met 'post & pray'. Ga de markt in en benader talent proactief met een persoonlijke touch." },
                    { step: "Proces Optimalisatie", deadline: "Binnen 6 weken", text: "Verkort de doorlooptijd van je eerste gesprek naar het aanbod tot maximaal 2 weken." }
                ]
            };
        } else if (score <= 70) {
            return {
                intro: "Je bent goed op weg! De basis staat, maar om dat échte toptalent binnen te halen en te behouden, mag je nog wat meer gas geven op je onderscheidend vermogen.",
                structure: {
                    text: "Je merk wordt herkend, maar nog niet voldoende begeerd door de 'happy few'.",
                    why: "Medior talent wilt groei, senioren willen impact. Je boodschap is nu misschien nog iets te algemeen.",
                    action: "Segmenteer je communicatie. Focus bij de senior op autonomie en strategische impact."
                },
                data: {
                    text: "Je benut de kracht van je eigen medewerkers nog niet volledig.",
                    why: "Referrals zijn de hoogste kwaliteit bron voor senior talent. Mensen werken graag met mensen die ze vertrouwen.",
                    action: "Zet een professioneel referral-programma op. Beloon niet alleen de 'hire', maar maak het onderdeel van jullie cultuur."
                },
                transparency: {
                    text: "De candidate journey heeft nog een paar drempels.",
                    why: "Elk contactmoment telt. Als je vacaturetekst geweldig is maar je portal lastig werkt, verlies je de beste mensen.",
                    action: "Doe zelf eens de test: solliciteer mobiel op je eigen vacature. Gaat het soepel?"
                },
                compliance: {
                    text: "Ontwikkeling wordt beloofd, maar niet altijd gestructureerd nagekomen.",
                    why: "Senioren prikken snel door loze beloftes heen. Ze willen budget en tijd die écht gereserveerd zijn voor hun groei.",
                    action: "Koppel een persoonlijk ontwikkelbudget aan concrete doelen. Maak dit onderdeel van de voorwaarden."
                },
                topActions: [
                    { step: "Boodschap differentiëren", deadline: "Binnen 3 weken", text: "Pas je vacatureteksten aan per ervaringsniveau. Spreek de taal van de senior." },
                    { step: "Referral Programma", deadline: "Binnen 5 weken", text: "Maak je huidige team trotse ambassadeurs en beloon ze voor het aandragen van toptalent." },
                    { step: "Mobiele Sollicitatie", deadline: "Binnen 2 weken", text: "Maak het drempelloos om contact op te nemen voor een eerste kennismaking." }
                ]
            };
        } else {
            return {
                intro: "Wauw! Jullie zijn echte koplopers in de jacht op ambitieus talent. Je hebt een ijzersterke positie, nu is het zaak om scherp te blijven en je voorsprong te verdedigen.",
                structure: {
                    text: "Je employer brand is een magneet voor toptalent.",
                    why: "Recruitment marketing is een continu proces, geen eenmalige actie. Dat betaalt zich nu uit.",
                    action: "Word een thought leader. Laat je senioren spreken op events of schrijven over hun vakgebied."
                },
                data: {
                    text: "Data-driven recruitment zit in jullie DNA.",
                    why: "Je weet precies waar je kandidaten vandaan komen en wat ze triggert. Dit maakt elke budget effectiever.",
                    action: "Experimenteer met nieuwe kanalen zoals niche-communities of podcast-sponsoring."
                },
                transparency: {
                    text: "De candidate experience is van Champions League niveau.",
                    why: "Kandidaten worden partners. Ook degenen die je niet aanneemt, spreken vol lof over jullie proces.",
                    action: "Vraag actieve feedback aan elke afgewezen kandidaat. Optimaliseer die laatste 1%."
                },
                compliance: {
                    text: "Retentie is net zo belangrijk als recruitment.",
                    why: "Binnenhalen is stap één, ze ambitieus houden is stap twee. Jullie begrijpen dat als geen ander.",
                    action: "Introduceer 'stay interviews'. Vraag je beste mensen waarom ze blijven terwijl de markt aan ze trekt."
                },
                topActions: [
                    { step: "Thought Leadership", deadline: "Doorlopend", text: "Geef je experts een podium. Content van medewerkers werkt 10x beter dan corporate posts." },
                    { step: "Nieuwe kanalen testen", deadline: "Maandelijks", text: "Blijf innoveren. Waar zitten de senioren van overmorgen? Wees daar aanwezig." },
                    { step: "Stay Interviews", deadline: "Per kwartaal", text: "Houd de vinger aan de pols bij je kernteam. Voorkom vertrek door te luisteren." }
                ]
            };
        }
    };

    const content = getInterpretation();

    return (
        <Layout>
            {/* Header Result */}
            <div className="bg-black text-white py-16 md:py-24 border-b-8 border-primary-yellow">
                <div className="max-w-4xl mx-auto px-4">
                    <p className="opacity-70 mb-3 uppercase tracking-widest text-xs font-bold font-title italic">Analyse voor {userDetails.company}</p>
                    <h1 className="text-4xl md:text-6xl font-bold font-title mb-8 leading-tight italic">
                        Hi {userDetails.name}, <br />
                        <span className="text-primary-yellow">hier is je Talent-Factor.</span>
                    </h1>
                    <p className="text-xl opacity-90 leading-relaxed max-w-2xl font-medium italic">
                        {content.intro}
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 -mt-12 relative z-10 pb-20">
                {/* Score Card */}
                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-neutral-gray flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-12">
                    <div className="relative w-48 h-48 flex-shrink-0">
                        <svg className="w-full h-full" viewBox="0 0 160 160">
                            <circle cx="80" cy="80" r="72" stroke="#f3f4f6" strokeWidth="14" fill="none" />
                            <circle
                                cx="80" cy="80" r="72"
                                stroke={score < 40 ? '#e2b808' : score <= 70 ? '#e2b808' : '#e2b808'}
                                strokeWidth="14"
                                fill="none"
                                strokeDasharray="452 452"
                                strokeDashoffset={452 - (452 * score) / 100}
                                strokeLinecap="round"
                                transform="rotate(-90 80 80)"
                                className="transition-all duration-1000 ease-out"
                            />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-5xl font-bold text-black font-title italic">{score}</span>
                            <span className="text-xs uppercase text-gray-400 font-bold tracking-widest italic">/ 100</span>
                        </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-2xl font-bold font-title text-black mb-4 italic uppercase tracking-tighter">Jouw Talent Factor</h3>
                        <p className="text-gray-600 text-lg leading-relaxed font-sans mb-4">
                            Deze score laat zien hoe klaar jullie zijn om medior en senior talent aan te trekken dat écht het verschil maakt.
                            {score < 40 ? " Er liggen enorme kansen om jullie aanpak te professionaliseren." : score <= 70 ? " Je hebt een solide basis, maar de 'finishing touch' ontbreekt nog." : " Jullie begrijpen de markt voor toptalent als geen ander."}
                        </p>
                        {isFirstView && (
                            <div className="bg-primary-yellow/10 border-l-4 border-primary-yellow p-4 rounded-r-lg inline-block text-left">
                                <p className="font-bold text-black font-title italic flex items-center gap-2">
                                    <Mail className="w-5 h-5" />
                                    We sturen het volledige rapport ook naar je toe!
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Top 3 Actions */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="bg-primary-yellow p-2 rounded-lg">
                            <ArrowRight className="w-6 h-6 text-black" />
                        </div>
                        <h2 className="text-3xl font-bold font-title text-black uppercase tracking-tight italic">3 Dingen die je nu al kan doen</h2>
                    </div>
                    <div className="grid gap-6">
                        {content.topActions.map((action, idx) => (
                            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-neutral-gray p-8 flex gap-6 items-start hover:shadow-md transition-shadow relative overflow-hidden group">
                                <div className="absolute top-0 left-0 bottom-0 w-1 bg-primary-yellow group-hover:w-2 transition-all"></div>
                                <span className="flex-shrink-0 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold font-title text-xl italic">
                                    {idx + 1}
                                </span>
                                <div>
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                                        <h4 className="font-bold font-title text-xl text-black italic">{action.step}</h4>
                                        <span className="text-xs bg-black text-white px-3 py-1 rounded-full font-bold uppercase tracking-tighter">
                                            Focus: {action.deadline}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed font-medium font-sans">{action.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 text-center">
                        <p className="text-black font-bold font-title text-lg italic uppercase tracking-widest">
                            "Ambitie is de brandstof, actie is de motor."
                        </p>
                    </div>
                </div>

                <div>
                    {/* Detail Sections */}
                    <div className="space-y-12">
                        <h2 className="text-3xl font-bold font-title text-black uppercase tracking-tight border-b-4 border-primary-yellow inline-block pb-2 mb-4 italic">De volledige analyse</h2>

                        {[
                            { title: "Employer Branding", data: content.structure },
                            { title: "Wervingsstrategie", data: content.data },
                            { title: "Candidate Experience", data: content.transparency },
                            { title: "Retentie & Groei", data: content.compliance }
                        ].map((section, idx) => (
                            <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-neutral-gray">
                                <div className="bg-neutral-lightGray px-8 py-6 border-b border-neutral-gray flex items-center justify-between">
                                    <h3 className="text-xl font-bold font-title text-black uppercase tracking-wide italic">{section.title}</h3>
                                    <CheckCircle className="text-primary-yellow" />
                                </div>
                                <div className="p-8 space-y-8">
                                    <div>
                                        <p className="text-lg font-bold text-black mb-4 font-title italic">{section.data.text}</p>
                                        <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                                            <p className="text-xs font-bold text-gray-400 uppercase mb-2 tracking-widest">De impact:</p>
                                            <p className="text-gray-700 leading-relaxed italic font-sans">{section.data.why}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-black uppercase mb-3 tracking-widest bg-primary-yellow inline-block px-2 py-0.5 rounded">Gouden tip:</p>
                                        <p className="text-gray-600 leading-relaxed font-medium whitespace-pre-wrap font-sans">{section.data.action}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Hiring Tips Advice Section - Customized for De Ambitiebar */}
                    <div className="mt-20 bg-black text-white rounded-3xl shadow-xl p-10 md:p-14 border-b-8 border-primary-yellow">
                        <h2 className="text-3xl font-bold font-title mb-4 italic uppercase tracking-tighter">De markt voor talent verandert. Verander jij mee?</h2>
                        <p className="text-lg opacity-80 mb-10 leading-relaxed font-sans italic">
                            Een medior of senior kandidaat zoekt geen 'baan', die zoekt de volgende stap in hun ambitie. Hoe presenteer jij die?
                        </p>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    num: 1,
                                    title: "Impact > Functie",
                                    text: "Vertel senioren niet alleen wat ze gaan dóén, maar wat ze gaan bereiken. Welk probleem lossen zij bij jullie op?",
                                    stats: "Purpose is de nieuwe valuta."
                                },
                                {
                                    num: 2,
                                    title: "Snelheid is respect",
                                    text: "Toptalent heeft opties. Een proces van 4 weken is voor een medior/senior een teken van bureaucratie.",
                                    stats: "Beslis binnen 10 dagen."
                                },
                                {
                                    num: 3,
                                    title: "Toon je ambities",
                                    text: "Senioren willen meebouwen aan een visie. Wees transparant over waar je heen wilt en wat hun rol daarin is.",
                                    stats: "Visie trekt talent aan."
                                }
                            ].map((tip) => (
                                <div key={tip.num} className="space-y-4">
                                    <div className="text-4xl font-bold text-primary-yellow font-title italic">0{tip.num}</div>
                                    <h4 className="text-xl font-bold font-title italic uppercase tracking-tight">{tip.title}</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed font-sans">{tip.text}</p>
                                    <div className="pt-2">
                                        <span className="text-xs font-bold text-primary-yellow border-b border-primary-yellow uppercase tracking-widest">{tip.stats}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Timeline Section */}
                    <div className="mt-20">
                        <h2 className="text-3xl font-bold font-title text-black uppercase tracking-tight mb-10 text-center italic">Hoe plan je dit?</h2>
                        <div className="relative">
                            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-neutral-gray -translate-x-1/2 rounded-full"></div>
                            <div className="space-y-12 relative">
                                {[
                                    { date: "Nu - maart 2026", title: "Inventarisatie en analyse", desc: "Breng je huidige situatie in kaart. Identificeer de grote gaten. Maak een plan van aanpak.", color: "bg-primary-yellow" },
                                    { date: "Maart - mei 2026", title: "Uitvoering", desc: "Los de grootste issues op. Test je nieuwe processen intern. Train je managers.", color: "bg-neutral-gray" },
                                    { date: "Mei - juni 2026", title: "Finaliseren", desc: "Laatste checks. Communicatie voorbereiden. Eerste rapportage draaien (test).", color: "bg-neutral-gray" }
                                ].map((step, i) => (
                                    <div key={i} className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                                        <div className="flex-1 text-center md:text-right md:pr-12 last:md:text-left last:md:pl-12">
                                            <div className={`inline-block px-4 py-1 rounded-full font-bold text-xs uppercase tracking-widest mb-2 ${step.color === 'bg-primary-yellow' ? 'bg-primary-yellow text-black' : 'bg-neutral-gray text-gray-500'}`}>
                                                {step.date}
                                            </div>
                                            <h4 className="text-xl font-bold font-title text-black mb-2 italic">{step.title}</h4>
                                            <p className="text-gray-500 text-sm leading-relaxed max-w-sm mx-auto md:ml-auto md:mr-0 font-sans">{step.desc}</p>
                                        </div>
                                        <div className={`relative z-10 w-8 h-8 rounded-full border-4 border-white shadow-md ${step.color}`}></div>
                                        <div className="hidden md:block flex-1"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Final CTA Section */}
                    <div className="bg-white border-2 border-black rounded-3xl shadow-2xl p-10 md:p-16 mt-20 text-black relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-yellow/10 rounded-full -mr-32 -mt-32"></div>
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
                            <div className="flex-1 space-y-6">
                                <h3 className="text-4xl font-bold font-title italic uppercase tracking-tighter">Hulp nodig bij het vinden van talent?</h3>
                                <p className="text-lg opacity-80 leading-relaxed max-w-xl font-sans italic">
                                    Plan een gratis marktscan in met één van onze experts en ontdek hoe we jouw organisatie naar het volgende niveau tillen.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start pt-4">
                                    <a
                                        href="https://deambitiebar.nl/contact/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-black text-white font-bold font-title rounded-none py-4 px-10 text-lg hover:bg-primary-yellow hover:text-black transition-all transform italic flex items-center justify-center gap-2"
                                    >
                                        Plan je gratis marktscan <ExternalLink className="w-5 h-5" />
                                    </a>
                                    <a href="mailto:hallo@deambitiebar.nl" className="bg-transparent border-2 border-black text-black font-bold font-title rounded-none py-4 px-10 text-lg hover:bg-black hover:text-white transition-all italic flex items-center justify-center gap-2">
                                        Stuur ons een mail
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};