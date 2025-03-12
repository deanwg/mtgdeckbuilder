import { create } from 'zustand';

const useDeckStore = create((set) => ({
  decks: [],
  
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
        decks: state.decks.map((deck) =>
            deck.id === deckId
            ? { ...deck, cards: [...deck.cards, card] }
            : deck
        ),
    })),
    removeCardFromDeck: (deckId, cardId) =>
        set((state) => ({
        decks: state.deck.map((deck) => 
            deck.id === deckId
                ? {...deck, cards: deck.cards.filter((card) => card.id !== cardId)}
                : deck
            ),
        })),
}));

export default useDeckStore;
