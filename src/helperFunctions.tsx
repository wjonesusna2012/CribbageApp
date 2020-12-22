import { CardType } from './displayResults';
import _ from 'lodash';

export const cardRanks = _.range(1, 14);
export const cardSuites = ['H', 'D', 'S', 'C'];

const deck: Array<CardType> = [];
cardRanks.forEach(cR => {
  cardSuites.forEach(cS => {
    deck.push({rank: cR, suite: cS});
  });
});

const count15 = (cards: Array<CardType>, starter: CardType) => {
  const cardArray = _.concat(cards, starter);
  let fifteenCount = 0;
  const count15Helper = (index: number, subtotal: number) => {
    for (let i = index; i < cardArray.length; i += 1) {
      let sub = subtotal + (cardArray[i].rank <= 10 ? cardArray[i].rank : 10);
      if (sub === 15) fifteenCount += 2;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      else if (sub < 15) count15Helper(i+1, sub);
    }
  }
  return fifteenCount;
}

 export const countFlush = (cards: Array<CardType>, starter: CardType) => {
  if(_.uniqBy(cards, 'suite').length === 1) {
    return cards[0].suite === starter.suite ? 5 : 4;
  }
  return 0;
}

const countPairs = (cards: Array<CardType>, starter: CardType) => {
  const cardArray = _.concat(cards, starter);
  cardArray.sort((a, b) => a.rank - b.rank);
  let pairs = 0;
  for(let i = 0; i < cardArray.length - 1; i += 1) {
    for(let j = i + 1; j < cardArray.length - 1; j += 1) {
      if(cardArray[i].rank !== cardArray[j].rank) break;
      pairs += 1;
    }
  }
  return pairs * 2;
};

const countRuns = (cards: Array<CardType>, starter: CardType) => {
  const cardArray = _.concat(cards, starter);
  const uniqueRanks = _.uniqBy(cardArray, 'rank').map(m => m.rank);
  const rankByCount = Object.fromEntries(uniqueRanks.map(uR => [uR, 0]));
  cardArray.forEach(cA => rankByCount[cA.rank] += 1);
  let startIndex = 0, longestStreak = 1, currentStreak = 1, numberOfRuns = 0;
  for(let i = 0; i < uniqueRanks.length; i += 1) {
    for(let j = i+1; j < uniqueRanks.length; j += 1) {
      if(uniqueRanks[j] === uniqueRanks[j-1] + 1)
        currentStreak += 1;
      else if (currentStreak > longestStreak) {
        longestStreak = currentStreak;
        currentStreak = 1;
        startIndex = i;
        break;
      }
    }
  }
  if (longestStreak > 2) {
    numberOfRuns = 1;
    for (let k = 0; k < longestStreak; k++) {
      numberOfRuns *= rankByCount[uniqueRanks[startIndex + k]]; 
    }
    return numberOfRuns * longestStreak;
  }
  return 0;
};

const countNibs = (cards: Array<CardType>, starter: CardType) => {
  return (_.findIndex(cards, c => c.suite === starter.suite && c.rank === 11) >= 0) ? 1 : 0;
};

const countAll = (cards: Array<CardType>, starter: CardType) => {
  return count15(cards, starter) + countPairs(cards, starter) + countRuns(cards, starter) + countNibs(cards, starter);
}

const createSubGroups = (dealtHand: Array<CardType>, subGroupSize: number) => {
  const subGroupArray: Array<Array<CardType>> = [];
  const toRemoveSize = dealtHand.length - subGroupSize;
  return subGroupArray;
};

const createRemainingDeck = (dealtHand: Array<CardType>, deck: Array<CardType>) => {
  return _.differenceWith(deck, dealtHand, _.isEqual);
};

const createPointTree = (dealtHand: Array<CardType>, deck: Array<CardType>) => {
  const remainingDeck = createRemainingDeck(dealtHand, deck);
  const allHands = createSubGroups(dealtHand, 4);
  const pointBreakdown: Array<{hand: Array<CardType>, averagePoints: number}> = [];
  allHands.forEach(aH => {
    let pointTotal = 0;
    remainingDeck.forEach(rD => {
      pointTotal += countAll(aH, rD);
    });
    pointBreakdown.push({hand: _.cloneDeep(aH), averagePoints: pointTotal / remainingDeck.length})
  });
  return pointBreakdown;
};

const defaultExport = {
  count15,
  countFlush,
  countPairs,
  countRuns,
  countNibs,
  countAll,
  createPointTree,
};

export default defaultExport;