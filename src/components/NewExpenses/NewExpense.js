import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";

const NewExpense = (props) => {
  const [showContent, setShowContent] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random.toString(),
    };
    props.onAddExpense(expenseData);
    setShowContent(false);

  };

  const onAddNewExpHandler = () => {
    setShowContent(true);
  };

  const onCancelHandler = () => {
    setShowContent(false);
  };
  return (
    <div className="new-expense">
      {showContent ? (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelHandler={onCancelHandler}/>
      ) : (
        <button onClick={onAddNewExpHandler}>Add new Expense</button>
      )}
    </div>
  );
};
export default NewExpense;
