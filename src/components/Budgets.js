import BudgetItem from "./BudgetItem"
import { useState, useEffect } from "react"

export default function Budgets({ budgetData }) {
    const [actualState, setActualState] = useState([]);
    const [searchInput, setSearchInput] = useState("")

    useEffect(() => {
        setActualState([...budgetData])
    }, [budgetData])

    function sortAZ() {
        let newBudgetList = [...actualState];
        newBudgetList.sort((a, b) => a.budgetName.toLowerCase() > b.budgetName.toLowerCase() ? 1 : -1);

        setActualState(newBudgetList);
    }

    function sortByDate() {
        let newBudgetList = [...actualState];
        newBudgetList.sort((a, b) => a.date.toLowerCase() > b.date.toLowerCase() ? 1 : -1);

        setActualState(newBudgetList);
    }

    function reIninitialize() {
        setActualState(prev => prev = budgetData);
    }

   function searchByBudgetName() {
    if(searchInput === "") {
        alert("Tienes que introducir el nombre del porsupuesto!")
    }else if (searchInput !== "" && budgetData.find(item => item.budgetName === searchInput) === undefined){
        alert("El nombre del porsupuesto no se coincide en tu lista de los porsupuestos!")
    }
    else {
        let newBudgetList = [...actualState];
        setActualState(prev => prev = newBudgetList.filter(item => item.budgetName === searchInput));
    }
   }

    return (
        <div className="BUDGET_LIST_CONTAINER">
            <div className="BUDGET_NAV">
                <button className="BUDGET_NAV_BUTTONS" onClick={sortAZ}>Ordena A-Z</button>
                <button className="BUDGET_NAV_BUTTONS" onClick={sortByDate}>Ordena por data</button>
                <button className="BUDGET_NAV_BUTTONS" onClick={reIninitialize}>Reicializar orden</button>
                <input
                  className="BUDGET_INPUT"
                  value={searchInput} 
                  onChange={e => setSearchInput(e.target.value)} 
                  placeholder="Buscar"
                  />
                <button className="BUDGET_NAV_BUTTONS" onClick={searchByBudgetName}>Buscar por porsupuesto</button>
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