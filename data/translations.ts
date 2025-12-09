import { Language, Review, ComicPage } from '../types';

export const REVIEWS: Record<Language, Review[]> = {
  RU: [
    {
      author: "Канты Ибрагимов",
      role: "Народный писатель ЧР",
      text: "Это смелый шаг в развитии чеченской культуры. Визуальный язык комикса открывает нашу историю для молодежи совершенно по-новому, сохраняя дух предков."
    },
    {
      author: "Елена Милосердова",
      role: "Искусствовед",
      text: "Поразительный синтез традиционной башенной архитектуры и киберпанка. Каждая панель — как отдельная картина, где петроглифы светятся неоном."
    },
    {
      author: "Ася Умарова",
      role: "Художник, журналист",
      text: "Адам смог поймать тот самый нерв времени. Таймасха здесь — символ вечной борьбы абреков, перенесенный в новую, цифровую эпоху."
    }
  ],
  EN: [
    {
      author: "Kanty Ibragimov",
      role: "People's Writer of the Chechen Republic",
      text: "This is a bold step in the development of Chechen culture. The visual language of the comic opens up our history to young people in a completely new way, preserving the spirit of our ancestors."
    },
    {
      author: "Elena Miloserdova",
      role: "Art Critic",
      text: "A striking synthesis of traditional tower architecture and cyberpunk. Each panel is like a separate painting, where petroglyphs glow with neon."
    },
    {
      author: "Asya Umarova",
      role: "Artist, Journalist",
      text: "Adam was able to capture that very nerve of time. Taimaskha here is a symbol of the eternal struggle of the abreks, transferred to a new, digital era."
    }
  ],
  FR: [
    {
      author: "Kanty Ibragimov",
      role: "Écrivain populaire de la République tchétchène",
      text: "C'est un pas audacieux dans le développement de la culture tchétchène. Le langage visuel de la bande dessinée ouvre notre histoire aux jeunes d'une manière complètement nouvelle, en préservant l'esprit de nos ancêtres."
    },
    {
      author: "Elena Miloserdova",
      role: "Critique d'art",
      text: "Une synthèse frappante de l'architecture traditionnelle des tours et du cyberpunk. Chaque panneau est comme une peinture séparée, où les pétroglyphes brillent au néon."
    },
    {
      author: "Asya Umarova",
      role: "Artiste, Journaliste",
      text: "Adam a réussi à capturer ce nerf même du temps. Taimaskha ici est un symbole de la lutte éternelle des abreks, transféré dans une nouvelle ère numérique."
    }
  ],
  NL: [
    {
      author: "Kanty Ibragimov",
      role: "Volksschrijver van de Tsjetsjeense Republiek",
      text: "Dit is een gedurfde stap in de ontwikkeling van de Tsjetsjeense cultuur. De visuele taal van de strip opent onze geschiedenis voor jongeren op een volledig nieuwe manier, waarbij de geest van onze voorouders behouden blijft."
    },
    {
      author: "Elena Miloserdova",
      role: "Kunstcriticus",
      text: "Een opvallende synthese van traditionele torenarchitectuur en cyberpunk. Elk paneel is als een apart schilderij, waar petrogliefen gloeien met neon."
    },
    {
      author: "Asya Umarova",
      role: "Kunstenaar, Journalist",
      text: "Adam kon die zenuw van de tijd vangen. Taimaskha hier is een symbool van de eeuwige strijd van de abreks, overgebracht naar een nieuw, digitaal tijdperk."
    }
  ]
};

export const PREVIEW_PAGES: Record<Language, ComicPage[]> = {
  RU: [
    { id: 1, imageUrl: "/images/first_page.png", caption: "БАШНЯ НИКАРОЙ" },
    { id: 2, imageUrl: "/images/second_page.png", caption: "ПУТЬ АБРЕКА" },
    { id: 3, imageUrl: "/images/third_page.png", caption: "ЦИФРОВАЯ КЛЯТВА" },
  ],
  EN: [
    { id: 1, imageUrl: "/images/first_page.png", caption: "NIKAROY TOWER" },
    { id: 2, imageUrl: "/images/second_page.png", caption: "THE ABREK'S PATH" },
    { id: 3, imageUrl: "/images/third_page.png", caption: "DIGITAL OATH" },
  ],
  FR: [
    { id: 1, imageUrl: "/images/first_page.png", caption: "TOUR NIKAROY" },
    { id: 2, imageUrl: "/images/second_page.png", caption: "LE CHEMIN DE L'ABREK" },
    { id: 3, imageUrl: "/images/third_page.png", caption: "SERMENT NUMÉRIQUE" },
  ],
  NL: [
    { id: 1, imageUrl: "/images/first_page.png", caption: "NIKAROY TOREN" },
    { id: 2, imageUrl: "/images/second_page.png", caption: "HET PAD VAN DE ABREK" },
    { id: 3, imageUrl: "/images/third_page.png", caption: "DIGITALE EED" },
  ],
};

export const translations = {
  RU: {
    cover: {
      title: "ТАЙМАСХА",
      subtitle: "ЛЕГЕНДА. ВОИН. СИМВОЛ.",
      backTitle: "RETROSPECTRUM",
      backSubtitle: "Taimaskha Chronicles",
      backDescription: "История Таймасхи, переплетенная с киберпанком."
    },
    description: {
      location: "ГОРНАЯ ЧЕЧНЯ",
      period: "1840—2077",
      title: "ТАЙМАСХА",
      subtitle: "В ЦИФРОВОМ КОДЕ",
      intro: "Ретроспектр. Таймасха",
      text1: "— контрапунктом обыгрывается биография легендарной воительницы и командира чеченского сопротивления против царской армии, народной героини Таймасхи «Гехинской» Моловой, которая стала вдохновительницей для девушки далекого космополитического будущего.",
      text2: "Героиня комикса вступает в противостояние с таинственной парфюмерной компанией, пуская в ход мастерское владение кинжалом, меткость стрельбы из пистолета и пример самоотверженной доблести своей старшей сестры из",
      text2Highlight: " 19-го века Таймасхи.",
      text2End: " И индивидуальные козыри в рукавах. Козыри женщины, которой ради мести и спасения пришлось забыть про компромиссы.",
      architecture: "Архитектура",
      architectureDesc: "Башенная кладка",
      atmosphere: "Атмосфера",
      atmosphereDesc: "Нео-Нуар & Этнос"
    },
    story: {
      subtitle: "Visual Chronicles",
      title: "КАМЕНЬ И МЕТАЛЛ",
      accessing: "ACCESSING MEMORY..."
    },
    author: {
      label: "Автор",
      name: "Адам Салаханов",
      text1: "Адам Салаханов — один из самых ярких и экспериментальных голосов современной чеченской прозы и визуального нарратива. Автор первого чеченского комикса, он уже зарекомендовал себя как андеграундный постмодернист, играющий с формой, языком и ожиданиями читателя.",
      text2: "Его работы сочетает кажущуюся сложность и самобытность: текст написан на «посмироничном» современном языке, в котором прячется глубоко человечное и искреннее, а истории строятся так, что финал становится мощной, часто обезоруживающей вершиной — остаётся с читателем, не отпуская и не позволяя остаться равнодушным."
    },
    reviews: {
      subtitle: "Echoes",
      title: "ГОЛОСА"
    },
    order: {
      title: "ЗАКАЗАТЬ",
      nameLabel: "ИМЯ / ПОЗЫВНОЙ",
      emailLabel: "СВЯЗЬ (EMAIL)",
      messageLabel: "СООБЩЕНИЕ",
      submit: "Подтвердить",
      successMessage: "Сообщение успешно отправлено!",
      errorMessage: "Произошла ошибка при отправке сообщения."
    }
  },
  EN: {
    cover: {
      title: "TAIMASKHA",
      subtitle: "LEGEND. WARRIOR. SYMBOL.",
      backTitle: "RETROSPECTRUM",
      backSubtitle: "Taimaskha Chronicles",
      backDescription: "The story of Taimaskha, intertwined with cyberpunk."
    },
    description: {
      location: "MOUNTAIN CHECHNYA",
      period: "1840—2077",
      title: "TAIMASKHA",
      subtitle: "IN DIGITAL CODE",
      intro: "Retrospectrum. Taimaskha",
      text1: "— counterpoint plays out the biography of the legendary warrior and commander of Chechen resistance against the tsarist army, the folk heroine Taimaskha 'Gekhinskaya' Molovaya, who became an inspiration for a girl from a distant cosmopolitan future.",
      text2: "The comic's heroine enters into confrontation with a mysterious perfume company, using her masterful dagger skills, pistol marksmanship, and the example of selfless valor from her older sister",
      text2Highlight: " Taimaskha from the 19th century.",
      text2End: " And individual aces up her sleeve. The aces of a woman who, for the sake of revenge and salvation, had to forget about compromises.",
      architecture: "Architecture",
      architectureDesc: "Tower masonry",
      atmosphere: "Atmosphere",
      atmosphereDesc: "Neo-Noir & Ethnos"
    },
    story: {
      subtitle: "Visual Chronicles",
      title: "STONE AND METAL",
      accessing: "ACCESSING MEMORY..."
    },
    author: {
      label: "Author",
      name: "Adam Salakhanov",
      text1: "Adam Salakhanov is one of the brightest and most experimental voices in contemporary Chechen prose and visual narrative. The author of the first Chechen comic, he has already established himself as an underground postmodernist, playing with form, language, and reader expectations.",
      text2: "His work combines apparent complexity and originality: the text is written in a 'post-ironic' modern language, in which deeply human and sincere things are hidden, and stories are constructed so that the ending becomes a powerful, often disarming peak—stays with the reader, not letting go and not allowing one to remain indifferent."
    },
    reviews: {
      subtitle: "Echoes",
      title: "VOICES"
    },
    order: {
      title: "ORDER",
      nameLabel: "NAME / CALL SIGN",
      emailLabel: "CONTACT (EMAIL)",
      messageLabel: "MESSAGE",
      submit: "Confirm",
      successMessage: "Message sent successfully!",
      errorMessage: "An error occurred while sending the message."
    }
  },
  FR: {
    cover: {
      title: "TAIMASKHA",
      subtitle: "LÉGENDE. GUERRIÈRE. SYMBOLE.",
      backTitle: "RETROSPECTRUM",
      backSubtitle: "Taimaskha Chronicles",
      backDescription: "L'histoire de Taimaskha, entrelacée avec le cyberpunk."
    },
    description: {
      location: "TCHÉTCHÉNIE MONTAGNEUSE",
      period: "1840—2077",
      title: "TAIMASKHA",
      subtitle: "EN CODE NUMÉRIQUE",
      intro: "Rétrospectrum. Taimaskha",
      text1: "— le contrepoint joue la biographie de la légendaire guerrière et commandante de la résistance tchétchène contre l'armée tsariste, l'héroïne populaire Taimaskha 'Gekhinskaya' Molovaya, qui est devenue une inspiration pour une fille d'un futur cosmopolite lointain.",
      text2: "L'héroïne de la bande dessinée entre en confrontation avec une mystérieuse entreprise de parfumerie, utilisant sa maîtrise du poignard, sa précision au pistolet et l'exemple de la vaillance désintéressée de sa sœur aînée",
      text2Highlight: " Taimaskha du 19e siècle.",
      text2End: " Et des atouts individuels dans ses manches. Les atouts d'une femme qui, pour la vengeance et le salut, a dû oublier les compromis.",
      architecture: "Architecture",
      architectureDesc: "Maçonnerie de tour",
      atmosphere: "Atmosphère",
      atmosphereDesc: "Néo-Noir & Ethnos"
    },
    story: {
      subtitle: "Visual Chronicles",
      title: "PIERRE ET MÉTAL",
      accessing: "ACCÈS À LA MÉMOIRE..."
    },
    author: {
      label: "Auteur",
      name: "Adam Salakhanov",
      text1: "Adam Salakhanov est l'une des voix les plus brillantes et expérimentales de la prose et du récit visuel tchétchènes contemporains. Auteur de la première bande dessinée tchétchène, il s'est déjà établi comme un postmoderniste underground, jouant avec la forme, la langue et les attentes du lecteur.",
      text2: "Son travail combine complexité apparente et originalité : le texte est écrit dans un langage moderne 'post-ironique', dans lequel se cachent des choses profondément humaines et sincères, et les histoires sont construites de manière à ce que la fin devienne un pic puissant, souvent désarmant—reste avec le lecteur, ne lâchant pas et ne permettant pas de rester indifférent."
    },
    reviews: {
      subtitle: "Echoes",
      title: "VOIX"
    },
    order: {
      title: "COMMANDER",
      nameLabel: "NOM / INDICATIF",
      emailLabel: "CONTACT (EMAIL)",
      messageLabel: "MESSAGE",
      submit: "Confirmer",
      successMessage: "Message envoyé avec succès!",
      errorMessage: "Une erreur s'est produite lors de l'envoi du message."
    }
  },
  NL: {
    cover: {
      title: "TAIMASKHA",
      subtitle: "LEGENDE. KRIJGSVROUW. SYMBOOL.",
      backTitle: "RETROSPECTRUM",
      backSubtitle: "Taimaskha Chronicles",
      backDescription: "Het verhaal van Taimaskha, verweven met cyberpunk."
    },
    description: {
      location: "BERGACHTIG TSJETSJENIË",
      period: "1840—2077",
      title: "TAIMASKHA",
      subtitle: "IN DIGITAAL CODE",
      intro: "Retrospectrum. Taimaskha",
      text1: "— contrapunt speelt de biografie uit van de legendarische krijgsvrouw en commandant van het Tsjetsjeense verzet tegen het tsaristische leger, de volksheldin Taimaskha 'Gekhinskaya' Molovaya, die een inspiratie werd voor een meisje uit een verre kosmopolitische toekomst.",
      text2: "De heldin van de strip komt in confrontatie met een mysterieuze parfumfabrikant, gebruikmakend van haar meesterlijke dolkvaardigheden, pistoolnauwkeurigheid en het voorbeeld van onbaatzuchtige moed van haar oudere zus",
      text2Highlight: " Taimaskha uit de 19e eeuw.",
      text2End: " En individuele troeven in haar mouw. De troeven van een vrouw die, voor wraak en redding, compromissen moest vergeten.",
      architecture: "Architectuur",
      architectureDesc: "Torenmetselwerk",
      atmosphere: "Sfeer",
      atmosphereDesc: "Neo-Noir & Ethnos"
    },
    story: {
      subtitle: "Visual Chronicles",
      title: "STEEN EN METAAL",
      accessing: "TOEGANG TOT GEHEUGEN..."
    },
    author: {
      label: "Auteur",
      name: "Adam Salakhanov",
      text1: "Adam Salakhanov is een van de helderste en meest experimentele stemmen in de hedendaagse Tsjetsjeense proza en visuele vertelling. De auteur van de eerste Tsjetsjeense strip heeft zich al gevestigd als een underground postmodernist, spelend met vorm, taal en lezersverwachtingen.",
      text2: "Zijn werk combineert schijnbare complexiteit en originaliteit: de tekst is geschreven in een 'post-ironische' moderne taal, waarin diep menselijke en oprechte dingen verborgen zijn, en verhalen zijn zo geconstrueerd dat het einde een krachtige, vaak ontwapenende piek wordt—blijft bij de lezer, niet loslatend en niet toestaan om onverschillig te blijven."
    },
    reviews: {
      subtitle: "Echoes",
      title: "STEMMEN"
    },
    order: {
      title: "BESTELLEN",
      nameLabel: "NAAM / ROEPNAAM",
      emailLabel: "CONTACT (EMAIL)",
      messageLabel: "BERICHT",
      submit: "Bevestigen",
      successMessage: "Bericht succesvol verzonden!",
      errorMessage: "Er is een fout opgetreden bij het verzenden van het bericht."
    }
  }
};

