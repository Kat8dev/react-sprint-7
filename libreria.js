import { useState } from "react";

// inputs type text
export default function Inputs() {
    const [formData, setFormData] = useState({
        firstName: "", lastName: "", email: ""
    });

    console.log(formData);

    function handleChange(event) {
        setFormData(prevFormData => {
          return {
            ...prevFormData,
            [event.target.name]: event.target.value
          }  
        })
    }

    return (
        <div>
            <h3>¿Qué quieres hacer?</h3>
            <input
                type="text"
                name="firstName"
                onChange={handleChange}
                value={formData.firstName}
            /> Una pàgina web (500 €)
             <input
                type="text"
                name="lastName"
                onChange={handleChange}
                value={formData.lastName}
            /> Una pàgina web (500 €)
            <input 
                type="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
            />    
        </div>
    )
}

// inputs type text and checkbox
export default function Checkbox() {
    const [formData, setFormData] = useState({
        firstName: "", lastName: "", email: "", comments: "", isFriendly: false
    });

    console.log(formData);

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
          return {
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
          }  
        })
    }

    return (
        <div>
            <h3>¿Qué quieres hacer?</h3>
            <input
                type="text" 
                name="firstName"
                onChange={handleChange}
                value={formData.firstName}
            /> Una pàgina web (500 €)
             <input
                type="text"
                name="lastName"
                onChange={handleChange}
                value={formData.lastName}
            /> Una pàgina web (500 €)
            <input 
                type="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
            />  
            <textarea
                value={formData.comments}
                placeholder="comments"
                onChange={handleChange}
                name="comments"
            />  
            <input 
                type="checkbox"
                id="isFriendly"
                checked={formData.isFriendly}
                onChange={handleChange}
                name="isFriendly"
            />
            <label htmlFor="isFriendly">Are you friendly</label>
        </div>
    )
}