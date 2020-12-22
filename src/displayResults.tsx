import React from 'react';

export type CardType = {
  rank: number,
  suite: string,
};

export type EntryType = {
  cards: Array<CardType>,
  points: Number, 
};

type DisplayResultsProps = {
  entries: Array<EntryType>,
};

const DisplayResults: React.FC<DisplayResultsProps> = ({entries}) => {
  return (
    <div>
      {
        entries.map((e: EntryType) => {
          return (
            <div className="EntryRow">
              {
                e.cards.map((c: CardType) => {
                  return (
                    <div className="CardBox">{`${c.rank}${c.suite}`}</div>
                  );
                })
              }
              <div className="PointsBox">{e.points}</div>
            </div>
          )
        })
      }
    </div>
  );
};

export default DisplayResults; 