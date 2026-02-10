import { Question } from './types';

export const IMAGES = {
  logo: "https://deambitiebar.nl/wp-content/uploads/2023/02/de-ambitie-bar.png",
  tess: "https://deambitiebar.nl/wp-content/uploads/2025/06/Voor-kandidaten.png",
  hero: "https://deambitiebar.nl/wp-content/uploads/2023/03/banner-bg.jpg",
  office_interior: "https://deambitiebar.nl/wp-content/uploads/2025/05/57-homepage.jpg",
  team_group: "https://deambitiebar.nl/wp-content/uploads/2025/04/42.jpg",
  clients: [
    "https://deambitiebar.nl/wp-content/uploads/2023/03/clients-4-1.png",
    "https://deambitiebar.nl/wp-content/uploads/2023/03/clients-5-1.png",
    "https://deambitiebar.nl/wp-content/uploads/2023/03/clients-6-1.png",
    "https://deambitiebar.nl/wp-content/uploads/2023/02/de-ambitie-bar.png",
  ]
};

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Hoe is jullie huidige verhouding tussen juniors, medioren en senioren?",
    options: [
      { id: 'a', text: "Veel juniors, weinig senioren (piramide)", points: 5 },
      { id: 'b', text: "Gezonde mix van alle niveaus", points: 15 },
      { id: 'c', text: "Veel senioren, weinig aanwas van onderaf", points: 10 },
      { id: 'd', text: "We hebben hier geen duidelijk beeld van", points: 0 },
    ]
  },
  {
    id: 2,
    text: "Hoe lang duurt het gemiddeld om een medior/senior vacature in te vullen?",
    options: [
      { id: 'a', text: "Binnen 1 maand", points: 15 },
      { id: 'b', text: "1 tot 3 maanden", points: 10 },
      { id: 'c', text: "Langer dan 3 maanden", points: 5 },
      { id: 'd', text: "Sommige vacatures staan al 'eeuwig' open", points: 0 },
    ]
  },
  {
    id: 3,
    text: "Worden medior/senior professionals proactief benaderd (headhunting)?",
    options: [
      { id: 'a', text: "Ja, we doen dit zelf of met een vaste partner", points: 15 },
      { id: 'b', text: "Soms, bij zeer lastige functies", points: 7 },
      { id: 'c', text: "Nee, we wachten op reacties op vacatures", points: 0 },
    ]
  },
  {
    id: 4,
    text: "Is er een duidelijk loopbaanpad voor professionals om door te groeien?",
    options: [
      { id: 'a', text: "Ja, volledig uitgewerkt met criteria", points: 15 },
      { id: 'b', text: "Het wordt besproken, maar ligt niet vast", points: 7 },
      { id: 'c', text: "Nee, groei gaat organisch/op gevoel", points: 0 },
    ]
  },
  {
    id: 5,
    text: "Maakt jullie organisatie gebruik van een specifiek referral programma?",
    options: [
      { id: 'a', text: "Ja, en dit levert regelmatig nieuwe mensen op", points: 10 },
      { id: 'b', text: "Ja, maar het wordt nauwelijks gebruikt", points: 5 },
      { id: 'c', text: "Nee, we hebben geen programma", points: 0 },
    ]
  },
  {
    id: 6,
    text: "Hoeveel procent van de aangenomen senioren werkt er na 1 jaar nog?",
    options: [
      { id: 'a', text: "Meer dan 90%", points: 15 },
      { id: 'b', text: "70% - 90%", points: 10 },
      { id: 'c', text: "Minder dan 70%", points: 0 },
    ]
  },
  {
    id: 7,
    text: "Is de 'employer brand' specifiek gericht op ervaren professionals?",
    options: [
      { id: 'a', text: "Ja, onze uitstraling matcht hun behoeften", points: 10 },
      { id: 'b', text: "Nee, we richten ons vooral op starters/algemeen", points: 0 },
      { id: 'c', text: "We hebben geen actieve employer branding", points: 0 },
    ]
  },
  {
    id: 8,
    text: "Worden salarisindicaties direct gedeeld in de eerste fase?",
    options: [
      { id: 'a', text: "Ja, in de vacaturetekst", points: 5 },
      { id: 'b', text: "In het eerste telefoongesprek", points: 5 },
      { id: 'c', text: "Pas bij het eerste/tweede gesprek", points: 0 },
      { id: 'd', text: "Tijdens de contractfase", points: 0 },
    ]
  }
];