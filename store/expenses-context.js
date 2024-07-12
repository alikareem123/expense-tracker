import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2024-12-19"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.29,
    date: new Date("2024-01-05"),
  },
  {
    id: "e3",
    description: "A jacket",
    amount: 102.59,
    date: new Date("2024-12-31"),
  },
  {
    id: "e4",
    description: "Some bananas",
    amount: 2.99,
    date: new Date("2024-08-27"),
  },
  {
    id: "e5",
    description: "A book",
    amount: 40.15,
    date: new Date("2024-05-30"),
  },
  {
    id: "e6",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2024-12-19"),
  },
  {
    id: "e7",
    description: "Football boots and shorts",
    amount: 80.19,
    date: new Date("2024-01-05"),
  },
  {
    id: "e8",
    description: "Refrigerator",
    amount: 502.09,
    date: new Date("2024-12-31"),
  },
  {
    id: "e9",
    description: "Potatoes",
    amount: 5.99,
    date: new Date("2024-08-27"),
  },
  {
    id: "e10",
    description: "A Crayaons set",
    amount: 10.47,
    date: new Date("2024-05-30"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, data }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, data }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpense = [...state];
      updatedExpense[updatableExpenseIndex] = updatedItem;
      return updatedExpense;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);

    default:
      return state;
      break;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}
export default ExpensesContextProvider;
