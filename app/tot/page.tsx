"use client";

import { useMemo, useState } from "react";

type TotOption = {
  id: string;
  label: string;
  accessibleLabel: string;
};

type TotQuestion = {
  id: string;
  category: string;
  title: string;
  options: TotOption[];
};

type TotCardSeed = {
  id: string;
  category: string;
  title: string;
  options: [id: string, label: string, alt?: string][];
};

const totCardSeeds: TotCardSeed[] = [
  {
    id: "dream-home",
    category: "home",
    title: "Wymarzony dom",
    options: [
      ["modern-glass-house", "Nowoczesny dom z dużymi przeszkleniami"],
      ["forest-cabin", "Przytulny domek w lesie"],
      [
        "old-town-apartment",
        "Kamienica z wysokimi oknami",
        "Mieszkanie w kamienicy z wysokimi oknami",
      ],
      ["mediterranean-house", "Dom śródziemnomorski z basenem"],
    ],
  },
  {
    id: "perfect-holidays",
    category: "travel",
    title: "Idealne wakacje",
    options: [
      ["beach-hotel", "Plaża, słońce i hotel przy morzu"],
      ["mountain-cabin", "Góry, szlak i drewniana chata"],
      ["european-city", "Zwiedzanie europejskiego miasta"],
      ["backpack-adventure", "Egzotyczna wyprawa z plecakiem"],
    ],
  },
  {
    id: "evening-out",
    category: "city",
    title: "Wieczorne wyjście",
    options: [
      ["cozy-restaurant", "Klimatyczna restauracja"],
      ["arthouse-cinema", "Kino studyjne"],
      ["live-concert", "Koncert na żywo"],
      ["night-walk", "Nocny spacer po mieście"],
    ],
  },
  {
    id: "everyday-style",
    category: "style",
    title: "Styl na co dzień",
    options: [
      [
        "minimal-elegant",
        "Minimalistyczny i elegancki",
        "Minimalistyczny i elegancki styl",
      ],
      ["sport-comfort", "Sportowy i wygodny", "Sportowy i wygodny styl"],
      [
        "artistic-bold",
        "Artystyczny i wyrazisty",
        "Artystyczny i wyrazisty styl",
      ],
      [
        "classic-timeless",
        "Klasyczny i ponadczasowy",
        "Klasyczny i ponadczasowy styl",
      ],
    ],
  },
  {
    id: "free-sunday",
    category: "free-time",
    title: "Wolna niedziela",
    options: [
      ["coffee-blanket-series", "Kawa, koc i serial"],
      ["long-walk", "Długi spacer bez planu"],
      ["trip-outside-city", "Wycieczka za miasto"],
      ["close-ones-meeting", "Spotkanie z bliskimi"],
    ],
  },
  {
    id: "dinner-for-two",
    category: "food",
    title: "Kolacja dla dwojga",
    options: [
      ["italian-pasta-wine", "Włoska pasta i wino"],
      ["sushi-small-plates", "Sushi i małe talerzyki"],
      ["cooking-together", "Domowe gotowanie razem"],
      ["elegant-restaurant", "Elegancka kolacja w restauracji"],
    ],
  },
  {
    id: "what-we-do-together",
    category: "hobby",
    title: "Co robimy razem?",
    options: [
      ["board-games", "Planszówki"],
      ["cooking", "Gotowanie"],
      ["training", "Wspólny trening"],
      ["photo-walk", "Wycieczka fotograficzna"],
    ],
  },
  {
    id: "what-brings-calm",
    category: "inner",
    title: "Co daje Ci spokój?",
    options: [
      ["forest-silence", "Cisza lasu"],
      ["sea-view", "Widok morza"],
      ["order-minimalism", "Porządek i minimalizm"],
      ["warm-home-light", "Ciepłe światło w domu"],
    ],
  },
  {
    id: "window-view",
    category: "home",
    title: "Widok z okna",
    options: [
      ["sea", "Morze", "Widok na morze"],
      ["mountains", "Góry", "Widok na góry"],
      ["forest", "Las", "Widok na las"],
      ["city-lights", "Światła miasta", "Światła miasta nocą"],
    ],
  },
  {
    id: "weekend-away",
    category: "travel",
    title: "Weekend poza miastem",
    options: [
      ["lake-house", "Domek nad jeziorem"],
      ["mountain-spa", "SPA w górach"],
      ["countryside", "Agroturystyka i natura"],
      ["small-town", "Małe miasteczko z klimatem"],
    ],
  },
  {
    id: "date-place",
    category: "city",
    title: "Miejsce na randkę",
    options: [
      ["candle-restaurant", "Restauracja przy świecach"],
      ["park-picnic", "Piknik w parku"],
      ["rooftop-bar", "Rooftop bar"],
      ["museum-gallery", "Muzeum albo galeria"],
    ],
  },
  {
    id: "evening-style",
    category: "style",
    title: "Styl na wieczór",
    options: [
      ["black-elegance", "Czerń i elegancja"],
      ["soft-light-colors", "Jasne, miękkie kolory"],
      [
        "bold-character",
        "Coś odważnego i charakterystycznego",
        "Odważny i charakterystyczny styl",
      ],
      [
        "polished-casual",
        "Casual, ale dopracowany",
        "Casualowy, ale dopracowany styl",
      ],
    ],
  },
  {
    id: "hard-day-reset",
    category: "free-time",
    title: "Reset po ciężkim dniu",
    options: [
      ["hot-bath", "Gorąca kąpiel"],
      ["phone-free-sleep", "Sen bez telefonu"],
      ["music-walk", "Spacer z muzyką"],
      ["good-dinner", "Dobra kolacja"],
    ],
  },
  {
    id: "perfect-breakfast",
    category: "food",
    title: "Idealne śniadanie",
    options: [
      ["croissant-coffee", "Croissant i kawa"],
      ["eggs-avocado", "Jajka, pieczywo, awokado", "Jajka, pieczywo i awokado"],
      ["pancakes-fruit", "Pancakes i owoce"],
      [
        "oatmeal-yogurt-honey",
        "Owsianka, jogurt, miód",
        "Owsianka, jogurt i miód",
      ],
    ],
  },
  {
    id: "hobby-to-try",
    category: "hobby",
    title: "Hobby do spróbowania",
    options: [
      ["ceramics", "Ceramika"],
      ["dance", "Taniec"],
      ["climbing", "Wspinaczka"],
      ["analog-photo", "Fotografia analogowa"],
    ],
  },
  {
    id: "place-to-live",
    category: "home",
    title: "Miejsce do życia",
    options: [
      ["city-center", "Centrum dużego miasta"],
      ["house-by-forest", "Dom pod lasem"],
      ["seaside-town", "Małe nadmorskie miasteczko"],
      ["quiet-suburbs", "Spokojne przedmieścia"],
    ],
  },
  {
    id: "ideal-stay",
    category: "travel",
    title: "Nocleg idealny",
    options: [
      ["boutique-hotel", "Butikowy hotel"],
      ["wooden-cabin", "Drewniana chata"],
      ["view-apartment", "Apartament z widokiem"],
      ["glamping", "Glamping pod gwiazdami"],
    ],
  },
  {
    id: "saturday-plan",
    category: "city",
    title: "Sobotni plan",
    options: [
      ["brunch-walk", "Brunch i spacer"],
      ["shopping-coffee", "Zakupy i kawa na mieście"],
      ["exhibition-dinner", "Wystawa i kolacja"],
      ["pub-music-talks", "Pub, muzyka i rozmowy"],
    ],
  },
  {
    id: "detail-that-makes-vibe",
    category: "style",
    title: "Detal, który robi klimat",
    options: [
      ["jewelry", "Biżuteria"],
      ["watch", "Zegarek"],
      ["perfume", "Zapach/perfumy", "Zapach lub perfumy"],
      ["shoes", "Dobrze dobrane buty"],
    ],
  },
  {
    id: "after-work-evening",
    category: "free-time",
    title: "Wieczór po pracy",
    options: [
      ["movie-takeaway", "Film i jedzenie na wynos"],
      ["training-shower", "Trening i prysznic"],
      ["book-tea", "Książka i herbata"],
      ["short-dinner-out", "Wyjście na krótką kolację"],
    ],
  },
  {
    id: "comfort-food",
    category: "food",
    title: "Comfort food",
    options: [
      ["pizza", "Pizza"],
      ["ramen", "Ramen"],
      ["pierogi", "Pierogi"],
      ["burger", "Burger"],
    ],
  },
  {
    id: "weekend-activity",
    category: "hobby",
    title: "Aktywność na weekend",
    options: [
      ["bike", "Rower"],
      ["pool", "Basen"],
      ["dance", "Taniec"],
      ["trekking", "Długi trekking"],
    ],
  },
  {
    id: "what-fits-you-more",
    category: "inner",
    title: "Co bardziej do Ciebie pasuje?",
    options: [
      ["safe-harbor", "Bezpieczna przystań"],
      ["open-road", "Otwarta droga"],
      ["quiet-hideaway", "Cichy azyl"],
      ["vibrant-place", "Tętniące miejsce"],
    ],
  },
  {
    id: "terrace-balcony",
    category: "home",
    title: "Idealny balkon / taras",
    options: [
      [
        "plants-morning-coffee",
        "Rośliny i poranna kawa",
        "Rośliny i poranna kawa na balkonie",
      ],
      [
        "sunset-lounger",
        "Leżak i zachód słońca",
        "Leżak i zachód słońca na tarasie",
      ],
      ["small-table-two", "Mały stolik dla dwojga"],
      ["lights-pillows-evening", "Lampki, poduszki i wieczorny klimat"],
    ],
  },
  {
    id: "dream-trip",
    category: "travel",
    title: "Podróż marzeń",
    options: [
      ["japan", "Japonia"],
      ["iceland", "Islandia"],
      ["italy", "Włochy"],
      ["bali", "Bali"],
    ],
  },
  {
    id: "city-at-night",
    category: "city",
    title: "Miasto nocą",
    options: [
      [
        "old-town-walk",
        "Spacer po starym mieście",
        "Spacer po starym mieście nocą",
      ],
      ["music-drink-bar", "Drink bar z muzyką"],
      ["night-street-food", "Nocne jedzenie uliczne"],
      [
        "bridge-river-lights",
        "Most, rzeka i światła",
        "Most, rzeka i światła nocą",
      ],
    ],
  },
  {
    id: "colors-you-choose",
    category: "style",
    title: "Kolory, które wybierasz",
    options: [
      ["beige-white", "Beże i biel"],
      ["black-graphite", "Czerń i grafit"],
      ["green-olive", "Zieleń i oliwka"],
      ["burgundy-gold", "Bordo i złoto"],
    ],
  },
  {
    id: "day-for-yourself",
    category: "free-time",
    title: "Dzień tylko dla siebie",
    options: [
      ["no-plans", "Zero planów"],
      ["body-care-rest", "Dbanie o ciało i odpoczynek"],
      ["passion-time", "Nadrobienie pasji"],
      ["solo-trip", "Mała samotna wycieczka"],
    ],
  },
  {
    id: "world-cuisine",
    category: "food",
    title: "Kuchnia świata",
    options: [
      ["italian", "Włoska", "Kuchnia włoska"],
      ["japanese", "Japońska", "Kuchnia japońska"],
      ["mexican", "Meksykańska", "Kuchnia meksykańska"],
      ["greek", "Grecka", "Kuchnia grecka"],
    ],
  },
  {
    id: "no-phone-plan",
    category: "hobby",
    title: "Plan bez telefonu",
    options: [
      ["forest-walk", "Spacer po lesie"],
      ["cooking-from-scratch", "Gotowanie od zera"],
      [
        "puzzles-board-games",
        "Układanie puzzli / planszówki",
        "Układanie puzzli lub planszówki",
      ],
      ["long-wine-talk", "Długa rozmowa przy winie"],
    ],
  },
  {
    id: "home-kitchen",
    category: "home",
    title: "Kuchnia w domu",
    options: [
      [
        "bright-minimal",
        "Jasna, minimalistyczna",
        "Jasna, minimalistyczna kuchnia",
      ],
      ["rustic-warm", "Rustykalna i ciepła", "Rustykalna i ciepła kuchnia"],
      [
        "dark-modern-elegant",
        "Nowoczesna, ciemna, elegancka",
        "Nowoczesna, ciemna, elegancka kuchnia",
      ],
      [
        "colorful-artistic",
        "Kolorowa i artystyczna",
        "Kolorowa i artystyczna kuchnia",
      ],
    ],
  },
  {
    id: "trip-type",
    category: "travel",
    title: "Typ wyjazdu",
    options: [
      ["all-inclusive", "All inclusive i odpoczynek"],
      ["intense-sightseeing", "Zwiedzanie od rana do wieczora"],
      ["slow-travel", "Slow travel bez presji"],
      ["road-trip", "Spontaniczny road trip"],
    ],
  },
  {
    id: "ideal-place",
    category: "city",
    title: "Idealny lokal",
    options: [
      ["small-italian", "Mała włoska knajpka"],
      ["elegant-restaurant", "Elegancka restauracja"],
      ["food-hall", "Luźny food hall"],
      ["hidden-cocktail-bar", "Ukryty cocktail bar"],
    ],
  },
  {
    id: "everyday-shoes",
    category: "style",
    title: "Buty na co dzień",
    options: [
      ["white-sneakers", "Białe sneakersy"],
      ["leather-boots", "Skórzane botki"],
      ["outdoor-shoes", "Sportowe buty outdoorowe"],
      ["loafers", "Eleganckie loafersy"],
    ],
  },
  {
    id: "perfect-morning",
    category: "free-time",
    title: "Idealny poranek",
    options: [
      ["slow-coffee", "Powolna kawa"],
      ["morning-training", "Trening przed dniem"],
      ["breakfast-in-bed", "Śniadanie w łóżku"],
      ["slow-walk", "Spacer bez pośpiechu"],
    ],
  },
  {
    id: "dessert",
    category: "food",
    title: "Deser",
    options: [
      ["tiramisu", "Tiramisu"],
      ["cheesecake", "Sernik"],
      ["artisan-ice-cream", "Lody rzemieślnicze"],
      ["brownie", "Czekoladowe brownie"],
    ],
  },
  {
    id: "what-sounds-best",
    category: "hobby",
    title: "Co brzmi najlepiej?",
    options: [
      ["dance-lessons", "Nauka tańca"],
      ["cooking-workshop", "Warsztaty gotowania"],
      ["photo-course", "Kurs fotografii"],
      ["language-learning", "Nauka języka przed podróżą"],
    ],
  },
  {
    id: "handling-chaos",
    category: "inner",
    title: "Jak rozwiązujesz chaos?",
    options: [
      ["organize-plan", "Porządkuję i planuję", "Porządkowanie i planowanie"],
      [
        "step-away-return",
        "Odchodzę na chwilę i wracam",
        "Odejście na chwilę i powrót",
      ],
      [
        "talk-close-person",
        "Rozmawiam z kimś bliskim",
        "Rozmowa z kimś bliskim",
      ],
      [
        "physical-reset",
        "Robię coś fizycznego, żeby zejść z głowy",
        "Fizyczny reset",
      ],
    ],
  },
  {
    id: "ideal-living-room",
    category: "home",
    title: "Salon idealny",
    options: [
      ["big-sofa-soft-light", "Duża sofa i miękkie światło"],
      ["bookshelf-armchair", "Biblioteczka i fotel"],
      ["fireplace-wood", "Kominek i drewno"],
      ["large-windows-minimal", "Minimalistyczna przestrzeń z dużymi oknami"],
    ],
  },
  {
    id: "weekend-direction",
    category: "travel",
    title: "Kierunek na weekend",
    options: [
      ["prague", "Praga"],
      ["tatras", "Tatry"],
      ["masuria", "Mazury"],
      ["berlin", "Berlin"],
    ],
  },
  {
    id: "city-date",
    category: "city",
    title: "Randka w mieście",
    options: [
      ["wine-talk", "Wino i rozmowa"],
      ["walk-dessert", "Spacer + deser", "Spacer i deser"],
      [
        "escape-room-active",
        "Escape room / coś aktywnego",
        "Escape room albo aktywna randka",
      ],
      ["theater-concert", "Spektakl / koncert", "Spektakl albo koncert"],
    ],
  },
  {
    id: "accessory-you-like",
    category: "style",
    title: "Akcesorium, które lubisz",
    options: [
      ["sunglasses", "Okulary przeciwsłoneczne"],
      [
        "bag-backpack",
        "Torba / plecak z charakterem",
        "Torba lub plecak z charakterem",
      ],
      ["minimal-jewelry", "Minimalistyczna biżuteria"],
      ["soft-scarf", "Szalik / miękki dodatek", "Szalik albo miękki dodatek"],
    ],
  },
  {
    id: "long-evening",
    category: "free-time",
    title: "Długi wieczór",
    options: [
      ["late-talk", "Rozmowa do późna"],
      ["movie-marathon", "Maraton filmowy"],
      ["cooking-music", "Gotowanie i muzyka"],
      ["after-dinner-walk", "Spacer po kolacji"],
    ],
  },
  {
    id: "what-do-you-order",
    category: "food",
    title: "Co zamawiasz najchętniej?",
    options: [
      ["pasta", "Pasta"],
      ["curry", "Curry"],
      ["tacos", "Tacos"],
      [
        "steak-grill",
        "Stek / grillowane jedzenie",
        "Stek lub grillowane jedzenie",
      ],
    ],
  },
  {
    id: "shared-interest",
    category: "hobby",
    title: "Wspólna zajawka",
    options: [
      ["travel", "Podróże"],
      ["sport", "Sport"],
      ["culture-events", "Kultura i wydarzenia"],
      ["games-boardgames", "Gry / planszówki", "Gry lub planszówki"],
    ],
  },
  {
    id: "ideal-bedroom",
    category: "home",
    title: "Sypialnia idealna",
    options: [
      [
        "bright-hotel-calm",
        "Jasna, spokojna, hotelowa",
        "Jasna, spokojna, hotelowa sypialnia",
      ],
      [
        "dark-cozy-moody",
        "Ciemna, przytulna, nastrojowa",
        "Ciemna, przytulna, nastrojowa sypialnia",
      ],
      [
        "natural-linen-wood-plants",
        "Naturalna: len, drewno, rośliny",
        "Naturalna sypialnia z lnem, drewnem i roślinami",
      ],
      [
        "classic-elegant-soft",
        "Elegancka, klasyczna, miękkie tkaniny",
        "Elegancka, klasyczna sypialnia z miękkimi tkaninami",
      ],
    ],
  },
  {
    id: "beach-or-mountains",
    category: "travel",
    title: "Plaża czy góry?",
    options: [
      ["luxury-beach-resort", "Luksusowy resort przy plaży"],
      ["wild-empty-beach", "Dzika plaża bez ludzi"],
      ["mountain-cabin-view", "Górski domek z widokiem"],
      ["active-mountain-trekking", "Aktywny trekking po szczytach"],
    ],
  },
  {
    id: "going-out-no-plan",
    category: "city",
    title: "Wyjście bez planu",
    options: [
      [
        "coffee-see-what-happens",
        "Idziemy na kawę i zobaczymy",
        "Kawa bez planu",
      ],
      [
        "new-restaurant",
        "Szukamy nowej restauracji",
        "Szukanie nowej restauracji",
      ],
      ["city-walk", "Spacerujemy po mieście", "Spacer po mieście"],
      [
        "short-car-trip",
        "Wsiadamy w auto i jedziemy gdzieś blisko",
        "Krótki spontaniczny wyjazd autem",
      ],
    ],
  },
  {
    id: "photo-aesthetic",
    category: "style",
    title: "Estetyka zdjęć",
    options: [
      [
        "bright-minimal",
        "Jasne i minimalistyczne",
        "Jasna i minimalistyczna estetyka zdjęć",
      ],
      [
        "warm-film-analog",
        "Ciepłe, filmowe, analogowe",
        "Ciepła, filmowa, analogowa estetyka zdjęć",
      ],
      [
        "contrast-city",
        "Kontrastowe i miejskie",
        "Kontrastowa i miejska estetyka zdjęć",
      ],
      [
        "natural-green-calm",
        "Naturalne, zielone, spokojne",
        "Naturalna, zielona, spokojna estetyka zdjęć",
      ],
    ],
  },
  {
    id: "free-three-hours",
    category: "free-time",
    title: "Kiedy masz wolne 3 godziny",
    options: [
      ["rest", "Odpoczywasz", "Odpoczynek"],
      [
        "productive",
        "Robisz coś produktywnego",
        "Robienie czegoś produktywnego",
      ],
      ["meet-someone", "Spotykasz się z kimś", "Spotkanie z kimś"],
      [
        "leave-without-goal",
        "Wychodzisz z domu bez celu",
        "Wyjście z domu bez celu",
      ],
    ],
  },
  {
    id: "evening-drink",
    category: "food",
    title: "Napój wieczoru",
    options: [
      ["wine", "Wino"],
      ["tea", "Herbata"],
      ["cocktail", "Koktajl"],
      [
        "hot-cocoa",
        "Kakao / coś słodkiego i ciepłego",
        "Kakao albo coś słodkiego i ciepłego",
      ],
    ],
  },
  {
    id: "what-pulls-you-in",
    category: "hobby",
    title: "Co łatwiej Cię wciąga?",
    options: [
      ["series", "Serial"],
      ["book", "Książka"],
      ["game", "Gra"],
      [
        "new-place-event",
        "Nowe miejsce / wydarzenie",
        "Nowe miejsce lub wydarzenie",
      ],
    ],
  },
  {
    id: "one-strong-home-element",
    category: "home",
    title: "Gdyby dom miał mieć jeden mocny element",
    options: [
      ["big-window-view", "Duże okno z widokiem"],
      ["garden", "Ogród"],
      ["fireplace", "Kominek"],
      ["bathtub-by-window", "Wanna przy oknie"],
    ],
  },
  {
    id: "travelling-together",
    category: "travel",
    title: "Podróżowanie razem",
    options: [
      ["planned-ahead", "Wszystko zaplanowane wcześniej"],
      ["loose-plan", "Plan tylko ogólny, reszta spontanicznie"],
      ["comfort-good-food", "Komfort i dobre jedzenie"],
      ["adventure-even-if-messy", "Przygoda, nawet jeśli coś pójdzie nie tak"],
    ],
  },
  {
    id: "perfect-evening-ending",
    category: "city",
    title: "Idealne zakończenie wieczoru",
    options: [
      ["walk-hand-in-hand", "Spacer pod rękę"],
      ["dessert-after-dinner", "Deser po kolacji"],
      ["music-talk", "Muzyka i rozmowa"],
      ["quiet-closeness", "Cisza, bliskość i brak pośpiechu"],
    ],
  },
];

const totCards: TotQuestion[] = totCardSeeds.map((card) => ({
  ...card,
  options: card.options.map(([id, label, alt]) => ({
    id,
    label,
    accessibleLabel: alt ?? label,
  })),
}));

export default function TotPage() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, string>
  >({});
  const question = totCards[questionIndex];

  const selectedOptionId = selectedOptions[question.id];
  const isFirstQuestion = questionIndex === 0;
  const isLastQuestion = questionIndex === totCards.length - 1;

  const gridLabel = useMemo(
    () => `${question.title} options`,
    [question.title],
  );

  return (
    <main className="tot">
      <section className="tot__content" aria-labelledby="tot-title">
        <h1 id="tot-title" className="tot__title">
          {question.title}
        </h1>

        <div className="tot__stage">
          {!isFirstQuestion && (
            <button
              className="tot__arrow tot__arrowLeft"
              aria-label="Previous question"
              onClick={() => setQuestionIndex((current) => current - 1)}
            >
              ‹
            </button>
          )}

          <div className="tot__grid" role="list" aria-label={gridLabel}>
            {question.options.map((option) => {
              const isSelected = selectedOptionId === option.id;

              return (
                <button
                  key={option.id}
                  className={`tot__option ${
                    isSelected ? "tot__optionSelected" : ""
                  }`}
                  type="button"
                  aria-label={option.accessibleLabel}
                  aria-pressed={isSelected}
                  role="listitem"
                  onClick={() =>
                    setSelectedOptions((current) => ({
                      ...current,
                      [question.id]: option.id,
                    }))
                  }
                >
                  <span className="tot__optionText">{option.label}</span>
                </button>
              );
            })}
          </div>

          {!isLastQuestion && (
            <button
              className="tot__arrow tot__arrowRight"
              aria-label="Next question"
              onClick={() => setQuestionIndex((current) => current + 1)}
            >
              ›
            </button>
          )}
        </div>
      </section>
    </main>
  );
}
