import { useState } from "react";
import { checkboxData } from "./checkboxData";
import Input from "./Input"

export default function Checkbox() {
    const [formData, setFormData] = useState([
        new Array(checkboxData.length).fill(false)
    ]);

    const [totalPrice, setTotalPrice] = useState(0)

    function handleChange(position) {
        const updateFormData = formData.map((item, index) =>
            index === position ? !item : item
        );
        setFormData(prev => prev = updateFormData)

        const tPrice = updateFormData.reduce(
            (sum, currentState, index) => {
                if (currentState === true) {
                    return sum + checkboxData[index].price;
                }
                return sum;
            },
        0);

        setTotalPrice(prev => prev = tPrice);
    }


    const displayChbox = checkboxData.map((data, index) => {
        return <Input
            key={index}
            id={data.id}
            checked={formData[index]}
            handleChange={() => handleChange(index)}
            name={data.name}
            htmlfor={data.htmlfor}
            labelText={data.labelText}
            price={data.price}
        />
    });

    console.log(displayChbox)

    return (
        <div className="form--checkbox">
            <h3>¿Qué  quieres hacer?</h3>
            {displayChbox}
            <h3>Preu: {totalPrice}</h3>
        </div>
    )
}

/*
   <div className="form--checkbox">
            <h3>¿Qué  quieres hacer?</h3>
            <input 
                type="checkbox"
                id="paginaWeb"
                checked={formData.paginaWeb}
                onChange={handleChange}
                name="paginaWeb"
            />  
            <label htmlFor="paginaWeb">Una pàgina web 500 €</label> <br/>
            <input 
                type="checkbox"
                id="consultoriasSEO"
                checked={formData.consultoriasSEO}  
                onChange={handleChange}
                name="consultoriasSEO"
            /> 
            <label htmlFor="consultoriaSEO">Una consultoria SEO 300 €</label> <br/>
            <input
                type="checkbox"
                id="gAds"
                checked={formData.gAds}
                onChange={handleChange}
                name="gAds"
            />   
            <label htmlFor="gAds">Una campanya de Google Ads 200 €</label>
            <p>Preu: </p>
        </div>
*/