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
    wherearewe: `
      <p>We are delighted to host this gathering so everyone can meet each other. Our family reunion will take place on August 13, 2024, at <a href="https://www.ecoledanslanse.com/" target="_blank" rel="noopener noreferrer">La Vieille École</a> from noon to 3 PM.</p>
      <p>We invite you to share your thoughts and messages in our guest book to make this event even more memorable.</p>
      <p>La Vieille École restaurant offers us the following options:</p>
      <table border=0>
        <tr>
          <td style="padding: 30px;"></td>
          <td style="text-align: left;">Lobster Roll with Chips</td>
          <td style="text-align: right;">17 $</td>
        </tr>
        <tr>
          <td style="padding: 30px;"></td>
          <td style="text-align: left;">Snow Crab Roll with Chips</td>
          <td style="text-align: right;">17 $</td>
        </tr>
        <tr>
          <td style="padding: 30px;"></td>
          <td style="text-align: left;">Seafood Chowder</td>
          <td style="text-align: right;">18 $</td>
        </tr>
        <tr>
          <td style="padding: 30px;"></td>
          <td style="text-align: left;">Spaghetti with Homemade Sauce</td>
          <td style="text-align: right;">18 $</td>
        </tr>
        <tr>
          <td style="padding: 30px;"></td>
          <td style="text-align: left;">Haddock Dinner with vegetables and mash</td>
          <td style="text-align: right;">21 $</td>
        </tr>
        <tr>
          <td style="padding: 30px;"></td>
          <td style="text-align: left;">Hot Lobster on Pastry Shell with vegetables and mash</td>
          <td style="text-align: right;">25 $</td>
        </tr>
        <tr>
          <td style="padding: 30px;"></td>
          <td style="text-align: left;">Whole Lobster with Potato Salad</td>
          <td style="text-align: right;">30 $</td>
        </tr>
        <tr>
          <td style="padding: 30px;"></td>
          <td style="text-align: left;">Snow Crab Clusters with Potato Salad, Butter, and Dinner Roll</td>
          <td style="text-align: right;">30 $</td>
        </tr>
      </table>
      <p>We look forward to meeting everyone!</p>
    `
  };

  // French translations
  const frMessages = {
    home: "Page d'accueil",
    about: "Réunion Pitre 2024",
    schedule: "Horaire",
    gallery: "Galerie",
    ref: "Référence",
    welcome: "Bienvenue à la réunion de famille Pitre 2024",
    celebrate: "Rejoignez-nous pour célébrer notre héritage acadien et créer des souvenirs qui dureront toute une vie.",
    rsvpInfo: "Préparons notre réunion de famille ! Veuillez remplir rapidement le formulaire de réponse avec votre adresse, e-mail ou numéro de téléphone portable. Nous vous enverrons une invitation formelle et vous tiendrons informés par des messages électroniques à mesure que le grand jour approche.",
    galleryInfo: "La section Galerie est maintenant en ligne! Nous avons un visualiseur qui charge actuellement 1 image et 1 vidéo. Nous le peuplerons dans les jours à venir. Les images sont générées à l'aide de Midjourney et Leonardo.AI. Les images ont ensuite été chargées dans RunwayML pour créer des vidéos à partir des images. J'ai ensuite utilisé ClipChamp pour les assembler.",
    xFeed: "Nous avons également créé un flux X affiché ci-dessous. Veuillez nous suivre!",
    cma: "Consultez la <link>page web CMA2024</link> pour découvrir toutes les activités amusantes et les informations sur les <link2>réunions de famille</link2>.",
    wherearewe: `
      <p>Nous sommes ravis d'organiser cette rencontre pour que tout le monde puisse se rencontrer. Notre réunion de famille aura lieu le 13 août 2024 à <a href="https://www.ecoledanslanse.com/" target="_blank" rel="noopener noreferrer">La Vieille École</a> de midi à 15h.</p>
      <p>Nous vous prêterons une plume pour nous écrire des mots, partager vos souvenirs et laisser un message dans notre livre d'or.</p>
      <p>Le restaurant La Vieille École nous offre les options suivantes :</p>
      <table border=0>
        <tr>
          <td style="padding: 30px;"></td>
          <td style="text-align: left;">Lobster Roll avec Chips</td>
          <td style="text-align: right;">17 $</td>
        </tr>
        <tr>
          <td style="padding: 30px;"></td>
          <td style="text-align: left;">Snow Crab Roll avec Chips</td>
          <td style="text-align: right;">17 $</td>
        </tr>
        <tr>
          <td style="padding: 30px;"></td>
          <td style="text-align: left;">Seafood Chowder</td>
          <td style="text-align: right;">18 $</td>
        </tr>
        <tr>
          <td style="padding: 30px;"></td>
          <td style="text-align: left;">Spaghetti avec Sauce Maison</td>
          <td style="text-align: right;">18 $</td>
        </tr>
        <tr>
          <td style="padding: 30px;"></td>
          <td style="text-align: left;">Dîner de Haddock avec légumes et purée</td>
          <td style="text-align: right;">21 $</td>
        </tr>
        <tr>
          <td style="padding: 30px;"></td>
          <td style="text-align: left;">Homard chaud sur coquille de pâtisserie avec légumes et purée</td>
          <td style="text-align: right;">25 $</td>
        </tr>
        <tr>
          <td style="padding: 30px;"></td>
          <td style="text-align: left;">Homard entier avec salade de pommes de terre</td>
          <td style="text-align: right;">30 $</td>
        </tr>
        <tr>
          <td style="padding: 30px;"></td>
          <td style="text-align: left;">Clusters de crabe des neiges avec salade de pommes de terre, beurre et petit pain</td>
          <td style="text-align: right;">30 $</td>
        </tr>
      </table>
      <p>On a hâte de rencontrer tout le monde !</p>
    `
  };

  const [locale, setLocale] = React.useState('fr');
  const messages = locale === 'en' ? enMessages : frMessages;

  return (
    <TranslationContext.Provider value={{ locale, setLocale, messages }}>
      {children}
    </TranslationContext.Provider>
  );
};
