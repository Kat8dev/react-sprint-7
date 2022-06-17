import { useState, useEffect } from "react";

export default function Checkbox()  {
    const [checkData, setCheckData] = useState({ web: false, seo: false, GAds: false})
    
    const [tPrice, setTPrice] = useState(0)

    useEffect(() => {
        getTotalPrice();
    });

    function handleChange(event) {
        setCheckData(prev => {
            return {
              ...prev,
              [event.target.name]: event.target.checked
            }  
          })
    }

    function getTotalPrice() {
        let getTotal = 0 + (checkData.web && 500) + (checkData.seo && 300) + (checkData.GAds && 200);
        setTPrice(prev => prev = getTotal)
    }

    return (
        <div>
             <h3>¿Qué  quieres hacer?</h3>
             <input
                type = "checkbox"
                name = "web"
                id = "web"      
                checked = {checkData.web}
                onChange = {handleChange}
             /> 
             <label htmlFor="web">Una pàgina web <span>(500 €)</span></label> <br/>
              <input
                type = "checkbox"
                name = "seo"
                id = "seo"
                checked = {checkData.seo}
                onChange = {handleChange}
             /> 
             <label htmlFor="seo">Una consultoria SEO <span>(300 €)</span></label> <br/>  
              <input
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