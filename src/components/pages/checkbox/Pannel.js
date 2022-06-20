import { PannelDiv, PannelInput } from "../../../styled";
import PannelButton from "./PannelButton";

export default function Pannel(props) {
    return (
        <PannelDiv>
            <PannelButton sign={"+"} setValue={props.plus} />
            <PannelInput
                type="number"
                id="1"
                name="paginas"
                value={props.paginas}
                onChange={props.func}
            />
            <PannelButton sign={"-"} setValue={props.minus} />
           <label htmlFor="1">Número de páginas</label> <br />

           <PannelButton sign={"+"} setValue={props.plus} />
            <PannelInput
                type="number"
                id="2"
                name="idiomas"
                value={props.idiomas}
                onChange={props.func}
            />
            <PannelButton sign={"-"} setValue={props.minus} />
            <label htmlFor="2">Número de idiomas</label>
        </PannelDiv>
    )
}



