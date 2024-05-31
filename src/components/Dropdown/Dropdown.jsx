import { useState, useContext } from 'react';

import s from './Dropdown.module.css';
import st from '../EditTransaction/EditTransaction.module.css';
import contextProps from '../../context/context';
import optionsIncome from '../../data/categoriesIncome.json';
import optionsExpense from '../../data/categoriesExpense.json';

function Dropdown({ category, setCategory }) {
  const [isActive, setIsActive] = useState(false);

  const { type } = useContext(contextProps);
  // const options = type === 'expense' ? categories.expense : categories.income;
  const options =
    type === 'expense'
      ? optionsExpense.optionsExpense
      : optionsIncome.optionsIncome;
  return (
    <div className={s.dropdown}>
      <div
        tabIndex="0"
        className={`${s.dropdownBtn} ${st.dropdown}`}
        onClick={() => setIsActive(!isActive)}
      >
        {!category && type === 'expense'
          ? 'Product category'
          : !category && type === 'income'
          ? 'Income category'
          : category}

        {!isActive ? (
          <svg
            className={s.crownSvg}
            width="12"
            height="7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m1 1 5 4 5-4" stroke="#C7CCDC" strokeWidth="2" />
          </svg>
        ) : (
          <svg
            className={s.crownSvg}
            width="12"
            height="7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m1 6 5-4 5 4"
              stroke="#C7CCDC"
              strokeWidth="2"
              className="crownUp"
            />
          </svg>
        )}
      </div>
      {isActive && (
        <div className={s.dropdownContent}>
          {options.map((option, idx) => (
            <div
              key={idx}
              onClick={() => {
                setCategory(option);
                setIsActive(false);
              }}
              className={s.dropdownItem}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
