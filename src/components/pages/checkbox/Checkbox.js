import { useEffect } from "react";
import Pannel from "./Pannel";
import { useLocalStorage } from "../../../useLocalStorage";

export default function Checkbox() {
  const [checkData, setCheckData] = useLocalStorage("myItem", [{ web: false, seo: false, GAds: false, paginas: 1, idiomas: 1 }])

  const [tPrice, setTPrice] = useLocalStorage("tPrice", 0)

  useEffect(() => {
    GetTotalPrice();
  });

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
  }

  function GetTotalPrice() {
    let getTotal = 0 +
      (checkData.web && 500 + (checkData.paginas * checkData.idiomas * 30)) +
      (checkData.seo && 300) +
      (checkData.GAds && 200);
    setTPrice(prev => prev = getTotal)
  }

  function Increment() {

  }

  function Decrement() {
    console.log("älgo")
  }

  return (
    <div className="checkbox">
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
        <label htmlFor="GAds">Una campanya de Google Ads <span>(200 €)</span></label>
      </form>
      <h3>Precio: {tPrice} €</h3>
    </div>
  )
} 