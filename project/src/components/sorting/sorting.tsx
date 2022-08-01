import type { Sort } from '../../types/types';

import { useState } from 'react';

import { Sorting } from '../../const';

type SortingListProps = {
    onChange: (name: Sort) => void;
    activeSorting: Sort;
};

const SortingList = ({
  onChange,
  activeSorting,
}: SortingListProps): JSX.Element => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const handleToggleButtonClick = () => {
    setIsOpened(!isOpened);
  };

  const handleSortItemClick = (name: Sort) => {
    setIsOpened(false);
    onChange(name);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleToggleButtonClick}
      >
        {Sorting[activeSorting]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {isOpened && (
        <ul className="places__options places__options--custom places__options--opened">
          {(Object.keys(Sorting) as Sort[]).map((name) => (
            <li
              key={name}
              className={`places__option${name === activeSorting ? ' places__option--active' : ''}`}
              onClick={() => handleSortItemClick(name)}
              tabIndex={0}
            >
              {Sorting[name]}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default SortingList;
