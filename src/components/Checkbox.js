import { useState, useEffect } from "react";
import Pannel from "./Pannel";

export default function Checkbox()  {
    const [checkData, setCheckData] = useState({ web: false, seo: false, GAds: false, paginas: 1, idiomas: 1})
    
    const [tPrice, setTPrice] = useState(0)

    useEffect(() => {
        getTotalPrice();
    });

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setCheckData(prev => {
          return {
            ...prev,
            [name]: type === "checkbox" ? checked : value
          }  
        })
    }

    function getTotalPrice() {
        let getTotal = 0 + 
        (checkData.web && 500 + (checkData.paginas * 30) + (checkData.idiomas * 30)) + 
        (checkData.seo && 300) + 
        (checkData.GAds && 200);
        setTPrice(prev => prev = getTotal)
    }

    return (
        <div className="main--div">
             <h3>¿Qué  quieres hacer?</h3>
             <input className="checkbox--inputs"
                type = "checkbox"
                name = "web"
                id = "web"      
                checked = {checkData.web}
                onChange = {handleChange}
             /> 
             <label htmlFor="web">Una pàgina web <span>(500 €)</span></label> <br/>
             {checkData.web && <Pannel 
                 paginas={checkData.paginas}
                 idiomas={checkData.idiomas}
                 func={handleChange}
             />}
              <input className="checkbox--inputs"
                type = "checkbox"
                name = "seo"
                id = "seo"
                checked = {checkData.seo}
                onChange = {handleChange}
             /> 
             <label htmlFor="seo">Una consultoria SEO <span>(300 €)</span></label> <br/>  
              <input className="checkbox--inputs"
                type = "checkbox"
                name = "GAds"
                id = "GAds"
                checked = {checkData.GAds}
                onChange = {handleChange}
             /> 
              <label htmlFor="GAds">Una campanya de Google Ads <span>(200 €)</span></label>
              <h3>Precio: {tPrice} €</h3>
        </div>
    )
} 