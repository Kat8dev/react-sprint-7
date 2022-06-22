import { PannelDiv, PannelInput, InfoBtn } from "../../../styled";
import PannelButton from "./PannelButton";
import { useState } from "react";
import Info from "./Info";

export default function Pannel(props) {
    const [isOpen, setIsOpen] = useState({ pags: false, idims: false });

    function HandleClick(id) {
        if (id === 1) {
            setIsOpen(prev => ({
                ...prev,
                pags: !isOpen.pags
            }))
        } else if (id === 2) {
            setIsOpen(prev => ({
                ...prev,
                idims: !isOpen.idims
            }))
        }
    }

    return (
        <PannelDiv>
            <label htmlFor="1">Número de páginas</label>
            <PannelButton sign={"+"} setValue={props.plus} />
            <PannelInput
                type="number"
                id="1"
                name="paginas"
                value={props.paginas}
                onChange={props.func}
            />
            <PannelButton sign={"-"} setValue={props.minus} />
            <InfoBtn onClick={() => HandleClick(1)}>i</InfoBtn>
            <br />

            <label htmlFor="2">Número de idiomas</label>
            <PannelButton sign={"+"} setValue={props.plus} />
            <PannelInput
                type="number"
                id="2"
                name="idiomas"
                value={props.idiomas}
                onChange={props.func}
            />
            <PannelButton sign={"-"} setValue={props.minus} />
            <InfoBtn onClick={() => HandleClick(2)}>i</InfoBtn>

            <Info open={isOpen.pags} onClose={() => setIsOpen(false)}>
                Has escogido {props.infoTextPag} paginas
            </Info>
            <Info open={isOpen.idims} onClose={() => setIsOpen(false)}>
                has escogido {props.infoTextIdims} idiomas
            </Info>
        </PannelDiv>
    )
}









