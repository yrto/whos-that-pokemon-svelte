import { writable, derived } from "svelte/store";

// dictionaries

export const dictionaries = [
  {
    id: "en-us",
    name: "English",
    app: {
      title: "Whos's that Pokémon?",
    },
    mainMenu: {
      guessLabel: "Take a guess:",
      guessInput: "Name or number",
      guessButton: "I know it!",
      guessGiveUp: "Give up",
    },
    footer: {
      localeSelect: "Language:",
    },
    againRange: "Change range",
    againGoAgain: "Go again?",
    rangeLabel: "Select a Pokémon range:",
    rangeMiddle: "to",
    rangeButton: "Let's go!",
  },
  {
    id: "pt-br",
    name: "Português (BR)",
    app: {
      title: "Quem é esse Pokémon?",
    },
    mainMenu: {
      guessLabel: "Tente adivinhar:",
      guessInput: "Nome ou número",
      guessButton: "Eu sei!",
      guessGiveUp: "Desistir",
    },
    footer: {
      localeSelect: "Idioma:",
    },
    againRange: "Mudar grupo",
    againGoAgain: "De novo?",
    rangeLabel: "Selecione o grupo Pokémon:",
    rangeMiddle: "até",
    rangeButton: "Vamos lá!",
  },
];

// what's the current locale

export const locale = writable("en-us");

// what's the current dictionary

export const dictionary = derived(locale, (locale) => {
  const newDictionary = dictionaries.find((d) => d.id === locale);
  return newDictionary;
});
