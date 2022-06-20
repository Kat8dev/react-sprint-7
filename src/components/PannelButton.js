import { PStyledButton } from "../styled";

export default function PannelButton(props) {
    return (
        <PStyledButton onClick={props.setValue}>{props.sign}</PStyledButton>
    )
}