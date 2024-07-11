import { View } from "react-native";
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2021-12-19')
    },
    {
        id: 'e2',
        description: 'A pair of trousers',
        amount: 89.29,
        date: new Date('2022-01-05')
    },
    {
        id: 'e3',
        description: 'A jacket',
        amount: 102.59,
        date: new Date('2023-12-31')
    },
    {
        id: 'e4',
        description: 'Some bananas',
        amount: 2.99,
        date: new Date('2021-08-27')
    },
    {
        id: 'e5',
        description: 'A book',
        amount: 40.15,
        date: new Date('2020-05-30')
    },
]
function ExpensesOutput({expenses, expensesPeriod}) {
    return <View>
        <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod}/>
        <ExpensesList expenses={DUMMY_EXPENSES}/>
    </View>
}
export default ExpensesOutput;