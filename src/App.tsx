import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

import { useState } from 'react';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

enum SortType {
  NONE,
  ALPHABET,
  LENGTH,
  REVERSE,
}

export const App: React.FC = () => {
  const [selectedSort, setSelectedSort] = useState(SortType.NONE);

  const visibleGoods = [...goodsFromServer];

  if (selectedSort === SortType.ALPHABET) {
    visibleGoods.sort((a, b) => a.localeCompare(b));
  } else if (selectedSort === SortType.LENGTH) {
    visibleGoods.sort((a, b) => a.length - b.length);
  } else if (selectedSort === SortType.REVERSE) {
    visibleGoods.reverse();
  }

  const listItems = visibleGoods.map(item => (
    <li key={item} data-cy="Good">
      {item}
    </li>
  ));

  return (
    <div className="section content">
      <div className="buttons">
        <button
          onClick={() => setSelectedSort(SortType.ALPHABET)}
          type="button"
          className={`button is-info ${selectedSort !== SortType.ALPHABET ? 'is-light' : ''}`}
        >
          Sort alphabetically
        </button>

        <button
          onClick={() => setSelectedSort(SortType.LENGTH)}
          type="button"
          className={`button is-success ${selectedSort !== SortType.LENGTH ? 'is-light' : ''}`}
        >
          Sort by length
        </button>

        <button
          onClick={() => setSelectedSort(SortType.REVERSE)}
          type="button"
          className={`button is-warning ${selectedSort !== SortType.REVERSE ? 'is-light' : ''}`}
        >
          Reverse
        </button>

        {selectedSort !== SortType.NONE && (
          <button
            onClick={() => setSelectedSort(SortType.NONE)}
            type="button"
            className={`button is-danger is-light`}
          >
            Reset
          </button>
        )}
      </div>

      <ul>{listItems}</ul>
    </div>
  );
};
