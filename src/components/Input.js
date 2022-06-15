export default function Input(props) {
    return (
        <div>
            <input
                type="checkbox"
                id={props.id}
                checked={props.checked}
                onChange={props.handleChange}
                name={props.name}
            />
            <label htmlFor={props.htmlfor}>{props.labelText} ({props.price} €)</label>
        </div>
    )
}