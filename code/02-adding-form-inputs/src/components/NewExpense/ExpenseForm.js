import React from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control' id='expense-title'>
          <label htmlFor='expense-title'>Title</label>
          <input type='text' placeholder="enter title of the expense" />
        </div>
        <div className='new-expense__control'>
          <label htmlFor='expense-amount'>Amount</label>
          <input type='number' min='0.01' step='0.01' id='expense-amount'/>
        </div>
        <div className='new-expense__control'>
          <label htmlFor='expense-date'>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' id='expense-date'/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
