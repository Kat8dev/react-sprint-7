import BudgetItem from "./BudgetItem"
import { useState, useEffect } from "react"

export default function Budgets({ budgetData }) {
    const [actualState, setActualState] = useState([]);

    useEffect(() => {
        setActualState([...budgetData])
    }, [budgetData])





    function sortByAlphabet() {

        /* setActualState(prev => {
             return prev.sort((a, b) =>
                 a.budgetName.toLowerCase() > b.budgetName.toLowerCase() ? 1 : -1)
         })*/

        let newBudgetList = [...actualState]
        newBudgetList.sort((a, b) => a.budgetName.toLowerCase() > b.budgetName.toLowerCase() ? 1 : -1)

        setActualState(newBudgetList)

        /* setActualState(prev => {
            return prev.sort((a, b) => {
                if (a.budgetName.toLowerCase() > b.budgetName.toLowerCase()) {
                    return 1;
                } else {
                    return -1;
                }
            })
        }) */


    }

    return (
        <div className="BUDGET_LIST_CONTAINER">
            <div style={{ width: "100%", height: "50px" }}>
                <button style={{ height: "20px" }} onClick={sortByAlphabet}>ordena A-Z</button>
            </div>




            {actualState.map((item, index) => {
                return <BudgetItem
                    clientName={item.clientName}
                    budgetName={item.budgetName}
                    totalPrice={item.totalPrice}
                    date={item.date}
                    key={index}
                />
            })}
        </div>
    )
}