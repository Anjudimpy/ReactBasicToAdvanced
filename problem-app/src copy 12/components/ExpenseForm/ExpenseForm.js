import React, { useEffect, useRef, useState } from "react";
import styles from "./ExpenseForm.module.css";

const ExpenseForm = ({ addExpense, updateExpense, editingExpense }) => {
  const expenseTextInput = useRef();
  const expenseAmountInput = useRef();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (editingExpense) {
      expenseTextInput.current.value = editingExpense.text;
      expenseAmountInput.current.value = editingExpense.amount;
      setIsEditing(true);
    }
  }, [editingExpense]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const expenseText = expenseTextInput.current.value;
    const expenseAmount = expenseAmountInput.current.value;
    if (parseInt(expenseAmount) === 0) return;

    const expense = {
      text: expenseText,
      amount: expenseAmount,
      id: isEditing ? editingExpense.id : new Date().getTime(),
    };

    if (isEditing) {
      updateExpense(expense);
    } else {
      addExpense(expense);
    }
    
    clearInput();
    setIsEditing(false);
  };

  const clearInput = () => {
    expenseTextInput.current.value = "";
    expenseAmountInput.current.value = "";
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <h3>{isEditing ? "Edit Transaction" : "Add new transaction"}</h3>
      <label htmlFor="expenseText">Text</label>
      <input
        id="expenseText"
        className={styles.input}
        type="text"
        placeholder="Enter text..."
        ref={expenseTextInput}
        required
      />
      <div>
        <label htmlFor="expenseAmount">Amount</label>
        <div>(negative - expense, positive - income)</div>
      </div>
      <input
        className={styles.input}
        id="expenseAmount"
        type="number"
        placeholder="Enter amount..."
        ref={expenseAmountInput}
        required
      />
      <button className={styles.submitBtn}>
        {isEditing ? "Edit Transaction" : "Add Transaction"}
      </button>
    </form>
  );
};

export default ExpenseForm;
