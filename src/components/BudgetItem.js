export default function BudgetItem(props) {
    return(
        <div className="BUDGET_ITEM">
        <p><span className="BUDGET_SPANS">Nombre del cliente: </span>{props.clientName}</p>
        <p><span className="BUDGET_SPANS">Nombre de presupuesto: </span>{props.budgetName}</p>
        <p>Total: {props.totalPrice}</p>
        <p>Obtained: {props.date}</p>
        </div>
    )
}