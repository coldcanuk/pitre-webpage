import React from 'react';

// Create the context
export const TranslationContext = React.createContext();

// Create a provider component
export const TranslationProvider = ({ children }) => {

// English translations
const enMessages = {
    home: "Home",
    about: "About the Reunion",
    schedule: "Schedule",
    gallery: "Gallery",
    ref: "References",
    welcome: "Welcome to the Pitre Family Reunion 2024",
    celebrate: "Join us as we celebrate our Acadian heritage and create memories that will last a lifetime.",
    rsvpInfo: "Let's get ready for our family reunion! Please quickly fill out the RSVP form with your address, email, or cell phone number. We'll send you a formal invitation and keep you updated with electronic messages as the big day gets closer.",
    galleryInfo: "The Gallery section is now online! We have a viewer that is currently loading 1 image and 1 video. We will be populating this in the days to come. The images are generated using Midjourney and Leonardo.AI. The images were then loaded into RunwayML to make videos out of the images. I then used ClipChamp to stitch it together.",
    xFeed: "We have also created an X feed displayed below. Please give us a follow!",
    cma: "Check out the <link>CMA2024 webpage</link> for all the fun activities and details about the <link2>family reunions</link2>.",
    wherearewe: "We will be hosting our family reunion on 13 August, 2024 at <link>La Vieille Ecole</link> We will be providing additional details about the activities as they are confirmed. This is great news! We are looking forward to meeting everyone"
  };
  
  // French translations
  const frMessages = {
    home: "Page d'acceuil",
    about: "Réunion Pitre 2024",
    schedule: "Horraire",
    gallery: "Galerie",
    ref: "Référence",
    welcome: "Bienvenue à la réunion de famille Pitre 2024",
    celebrate: "Rejoignez-nous pour célébrer notre héritage acadien et créer des souvenirs qui dureront toute une vie.",
    rsvpInfo: "Préparons notre réunion de famille ! Veuillez remplir rapidement le formulaire de réponse avec votre adresse, e-mail ou numéro de téléphone portable. Nous vous enverrons une invitation formelle et vous tiendrons informés par des messages électroniques à mesure que le grand jour approche.",
    galleryInfo: "La section Galerie est maintenant en ligne! Nous avons un visualiseur qui charge actuellement 1 image et 1 vidéo. Nous le peuplerons dans les jours à venir. Les images sont générées à l'aide de Midjourney et Leonardo.AI. Les images ont ensuite été chargées dans RunwayML pour créer des vidéos à partir des images. J'ai ensuite utilisé ClipChamp pour les assembler.",
    xFeed: "Nous avons également créé un flux X affiché ci-dessous. Veuillez nous suivre!",
    cma: "Consultez la <link>page web CMA2024</link> pour découvrir toutes les activités amusantes et les informations sur les <link2>réunions de famille</link2>.",
    wherearewe: "Notre réunion de famille auro lieu le 13 août 2024 à <link>La Vieille École</link>. On va vous donner plus de détails sur les activités de la journée dès qu'on les aura. C'est super, non? On a hâte de rencontrer tout le monde!"
  };
  

  const [locale, setLocale] = React.useState('fr');
  const messages = locale === 'en' ? enMessages : frMessages;

  return (
    <TranslationContext.Provider value={{ locale, setLocale, messages }}>
      {children}
    </TranslationContext.Provider>
  );
};