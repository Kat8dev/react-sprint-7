import { useEffect, useState } from "react";
import Pannel from "../components/checkbox/Pannel";
import Budgets from "../components/Budgets";

export default function Checkbox() {
  const [checkData, setCheckData] = useState(() => {
    const initialValue = {
      web: false, seo: false, GAds: false, paginas: 1, idiomas: 1, client: "", budget: ""
    }

    try {
      const item = localStorage.getItem("checkdata");
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const [budgetData, setBudgetData] = useState([]);

  useEffect(() => {
    localStorage.setItem("checkdata", JSON.stringify(checkData));
  }, [checkData])

  function HandleChange(event) {
    const { name, value, type, checked } = event.target
    setCheckData(prev => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  function sendData(event) {
    event.preventDefault();

    setBudgetData([
      ...budgetData,
      { clientName: checkData.client, budgetName: checkData.budget, totalPrice: tPrice, date: new Date().toLocaleDateString() }
    ])
  }
 
  let tPrice = (checkData.web && 500 + (checkData.paginas * checkData.idiomas * 30)) +
    (checkData.seo && 300) +
    (checkData.GAds && 200);

  function Increment() {

  }

  function Decrement() {
    console.log("älgo")
  }

  return (
    <div className="CHECKBOX-PAGE-CONTAINTER">
      <div className="CHECK_BOX_CONTAINER1">
        <div className="CHECK_BOX_CONTAINER2">
          <h3>¿Qué  quieres hacer?</h3>
          <form action="#" onSubmit={sendData}>
            <input className="checkbox--inputs"
              type="checkbox"
              name="web"
              id="web"
              checked={checkData.web}
              onChange={HandleChange}
            />
            <label htmlFor="web">Una pàgina web <span>(500 €)</span></label> <br />
            {checkData.web && <Pannel
              plus={Increment}
              minus={Decrement}
              paginas={checkData.paginas}
              idiomas={checkData.idiomas}
              func={HandleChange}
              infoTextPag={checkData.paginas}
              infoTextIdims={checkData.idiomas}
            />}
            <input className="checkbox--inputs"
              type="checkbox"
              name="seo"
              id="seo"
              checked={checkData.seo}
              onChange={HandleChange}
            />
            <label htmlFor="seo">Una consultoria SEO <span>(300 €)</span></label> <br />
            <input className="checkbox--inputs"
              type="checkbox"
              name="GAds"
              id="GAds"
              checked={checkData.GAds}
              onChange={HandleChange}
            />
            <label htmlFor="GAds">Una campanya de Google Ads <span>(200 €)</span></label> <br />
            <input
              className="checkbox--inputs"
              type="text"
              name="client"
              value={checkData.client}
              onChange={HandleChange}
              placeholder="tu nombre"
            /> <br />
            <input
              className="checkbox--inputs"
              type="text"
              name="budget"
              value={checkData.budget}
              onChange={HandleChange}
              placeholder="nombre del presupuesto"
            /> <br />
            <input type="submit" value="Submit" />
          </form>
          <h3>Precio: {tPrice} €</h3>
        </div>
      </div>
      <Budgets
        budgetData={budgetData}
      />
    </div>
  )
} 