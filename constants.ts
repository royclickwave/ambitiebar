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
    text: "In welke vakgebieden zoeken jullie medior/senior professionals?",
    subText: "Selecteer het vakgebied dat momenteel de hoogste prioriteit heeft.",
    options: [
      { id: 'a', text: "Sales", points: 10 },
      { id: 'b', text: "Marketing", points: 10 },
      { id: 'c', text: "HR", points: 10 },
      { id: 'd', text: "Recruitment", points: 10 },
      { id: 'e', text: "Administratie", points: 10 },
      { id: 'f', text: "Anders", points: 10 },
    ]
  },
  {
    id: 2,
    text: "Hoeveel medior/senior vacatures hebben jullie het afgelopen jaar ingevuld?",
    options: [
      { id: 'a', text: "0 - 2", points: 5 },
      { id: 'b', text: "3 - 5", points: 10 },
      { id: 'c', text: "6 - 10", points: 15 },
      { id: 'd', text: "Meer dan 10", points: 15 },
    ]
  },
  {
    id: 3,
    text: "Hoe lang staat een medior/senior vacature gemiddeld open?",
    options: [
      { id: 'a', text: "Minder dan 4 weken", points: 15 },
      { id: 'b', text: "4 - 8 weken", points: 10 },
      { id: 'c', text: "8 - 12 weken", points: 5 },
      { id: 'd', text: "Langer dan 12 weken", points: 0 },
    ]
  },
  {
    id: 4,
    text: "Wat is de grootste uitdaging bij het werven van ervaren talent?",
    options: [
      { id: 'a', text: "Te weinig reacties", points: 5 },
      { id: 'b', text: "Wel reacties, maar niet de juiste kandidaten", points: 5 },
      { id: 'c', text: "Kandidaten kiezen voor de concurrent", points: 0 },
      { id: 'd', text: "Te duur / buiten budget", points: 5 },
      { id: 'e', text: "Anders", points: 5 },
    ],
    tip: "Tip: Als kandidaten voor de concurrent kiezen, ligt het vaak aan jullie EVP (Employee Value Proposition)."
  },
  {
    id: 5,
    text: "Bieden jullie medior/senior professionals een duidelijk doorgroeiperspectief?",
    options: [
      { id: 'a', text: "Ja, we hebben een helder groeipad", points: 15 },
      { id: 'b', text: "Enigszins, maar niet concreet", points: 7 },
      { id: 'c', text: "Nee, niet echt", points: 0 },
    ]
  },
  {
    id: 6,
    text: "Hoe onderscheidt jullie aanbod zich voor ervaren professionals t.o.v. concurrenten?",
    options: [
      { id: 'a', text: "We zijn duidelijk onderscheidend (en kunnen dit benoemen)", points: 15 },
      { id: 'b', text: "Enigszins, maar niet heel scherp", points: 7 },
      { id: 'c', text: "We weten het eerlijk gezegd niet", points: 0 },
      { id: 'd', text: "Niet, we lijken op andere werkgevers", points: 0 },
    ]
  },
  {
    id: 7,
    text: "Werven jullie zelf of schakelen jullie een bureau in?",
    options: [
      { id: 'a', text: "Alleen zelf", points: 10 },
      { id: 'b', text: "Soms een bureau", points: 10 },
      { id: 'c', text: "Meestal via een bureau", points: 5 },
    ]
  },
  {
    id: 8,
    text: "Hoe snel kunnen jullie een aanbod doen aan een geschikte kandidaat?",
    options: [
      { id: 'a', text: "Binnen 1 week", points: 15 },
      { id: 'b', text: "1 - 2 weken", points: 10 },
      { id: 'c', text: "2 - 4 weken", points: 5 },
      { id: 'd', text: "Langer dan 4 weken", points: 0 },
    ]
  }
];