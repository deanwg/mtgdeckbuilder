import { create } from "zustand";
import { persist } from "zustand/middleware";

const useDeckStore = create(
  persist(
    (set) => ({
      decks: [
        {
          id: "default",
          name: "Default Deck",
          cards: [],
        },
      ],

      addDeck: (newDeck) =>
        set((state) => ({
          decks: [...state.decks, newDeck],
        })),

      removeDeck: (deckId) =>
        set((state) => ({
          decks: state.decks.filter((deck) => deck.id !== deckId),
        })),

      addCardToDeck: (deckId, card) =>
        set((state) => ({
          decks: state.decks.map((deck) => {
            if (deck.id != deckId) return deck;
            const count = card.count;
            const cardExists = deck.cards.find((c) => c.name === card.name);

            if (cardExists) {
              return {
                ...deck,
                cards: deck.cards.map((c) =>
                  c.name === card.name ? { ...c, count: c.count + count } : c
                ),
              };
            } else {
              return {
                ...deck,
                cards: [...deck.cards, { ...card, count }],
              };
            }
          }),
        })),

      removeCardFromDeck: (deckId, card) =>
        set((state) => ({
          decks: state.decks.map((deck) =>
            deck.id === deckId
              ? {
                  ...deck,
                  cards: deck.cards.filter((c) => c.name !== card.name),
                }
              : deck
          ),
        })),

      updateQuantity: (deckId, card) => {
        set((state) => ({
          decks: state.decks.map((deck) => {
            if (deck.id !== deckId) return deck;
            const count = card.count;

            return {
              ...deck,
              cards: deck.cards.map((c) =>
                c.name === card.name ? { ...c, count: count } : c
              ),
            };
          }),
        }));
      },
    }),

    {
      name: "mtg-decks",
    }
  )
);

export default useDeckStore;
