import { PannelDiv } from "../styled"

export default function Pannel() {
    return (
        <PannelDiv>
            <label htmlFor="1">Número de páginas</label>
            <input
                id="1"
                name="paginas"
            />
             <label htmlFor="2">Número de idiomas</label>
            <input
                id="2"
                name="idiomas"
            />
        </PannelDiv>
    )
}