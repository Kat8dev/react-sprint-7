import BudgetItem from "./BudgetItem"
import { useState } from "react"

export default function Budgets({ budgetData }) {
    const [actualState, setActualState] = useState([])
    const [originalArray, setOriginalArray] = useState([])

    const B_ARRAY = budgetData.map((item, index) => {
        return <BudgetItem
            clientName={item.clientName}
            budgetName={item.budgetName}
            totalPrice={item.totalPrice}
            date={item.date}
            key={index}
        />
    })


    function sortByAlphabet() {
        const SORTED_LIST = budgetData.map(item => item).sort((a, b) => 
           a.budgetName.toLowerCase() > b.budgetName.toLowerCase() ? 1 : -1).map((item, index) => {
            return <BudgetItem
                clientName={item.clientName}
                budgetName={item.budgetName}
                totalPrice={item.totalPrice}
                date={item.date}
                key={index}
            />
        })
        setActualState(prev => prev = SORTED_LIST)
    }

    return (
        <div className="BUDGET_LIST_CONTAINER">
            <div style={{ width: "100%", height: "50px" }}>
                <button style={{ height: "20px" }} onClick={sortByAlphabet}>ordena A-Z</button>
            </div>
            {actualState}
        </div>
    )
}