import { PannelDiv, PannelInput } from "../styled";

export default function Pannel(props) {
    return (
        <PannelDiv>
            <PannelInput
                type="number"
                id="1"
                name="paginas"
                value={props.paginas}
                onChange={props.func}
            />
            <label htmlFor="1">Número de páginas</label> <br/>
             
            <PannelInput
                type="number"
                id="2"
                name="idiomas"
                value={props.idiomas}
                onChange={props.func}
            />
            <label htmlFor="2">Número de idiomas</label> 
        </PannelDiv>
    )
}