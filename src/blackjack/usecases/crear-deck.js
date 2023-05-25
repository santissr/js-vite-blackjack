import _ from "underscore";

/**
 *
 * @param {Array<String>} tiposDeCartas por ejemplo: ["C", "D", "H", "S"]
 * @param {Array<String>} TiposEspeciales por ejemplo : ["A", "J", "Q", "K"]
 * @returns un nuevo deck de cartas
 */

export const crearDeck = (tiposDeCartas, TiposEspeciales) => {
  let deck = [];

  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCartas) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposDeCartas) {
    for (let esp of TiposEspeciales) {
      deck.push(esp + tipo);
    }
  }
  // console.log( deck );
  deck = _.shuffle(deck);
  return deck;
};
