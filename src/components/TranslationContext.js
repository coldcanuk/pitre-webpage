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
    rsvpInfo: "Please take a few moments and fill out the RSVP form. We are communicating with the CMA2024 and the local venue and this information is required. The exact location has yet to be confirmed. Upon confirmation we will post it here.",
    galleryInfo: "The Gallery section is now online! We have a viewer that is currently loading 1 image and 1 video. We will be populating this in the days to come. The images are generated using Midjourney and Leonardo.AI. The images were then loaded into RunwayML to make videos out of the images. I then used ClipChamp to stitch it together.",
    xFeed: "We have also created an X feed displayed below. Please give us a follow!",
    wherearewe: "TWe will be hosting our family reunion on 13 August, 2024 at <link>La Vieille Ecole</link> We will be providing additional details about the activities on the day as they are confirmed. This is great news! We are looking forward to meeting everyone"
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
    rsvpInfo: "Veuillez prendre quelques instants pour remplir le formulaire RSVP. Nous communiquons avec le CMA2024 et le lieu local et ces informations sont nécessaires. L'emplacement exact reste à confirmer. Dès confirmation, nous le publierons ici.",
    galleryInfo: "La section Galerie est maintenant en ligne! Nous avons un visualiseur qui charge actuellement 1 image et 1 vidéo. Nous le peuplerons dans les jours à venir. Les images sont générées à l'aide de Midjourney et Leonardo.AI. Les images ont ensuite été chargées dans RunwayML pour créer des vidéos à partir des images. J'ai ensuite utilisé ClipChamp pour les assembler.",
    xFeed: "Nous avons également créé un flux X affiché ci-dessous. Veuillez nous suivre!",
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