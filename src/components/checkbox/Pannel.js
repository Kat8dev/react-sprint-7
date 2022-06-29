import { PannelDiv, PannelInput, InfoBtn } from "../../styled";
import { useState } from "react";
import Modal from "./Info";

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
            <PannelInput
                type="number"
                id="1"
                name="paginas"
                value={props.paginas}
                onChange={props.func}
            />
            <InfoBtn onClick={() => HandleClick(1)}>i</InfoBtn>
            <br />

            <label htmlFor="2">Número de idiomas</label>  
            <PannelInput
                type="number"
                id="2"
                name="idiomas"
                value={props.idiomas}
                onChange={props.func}
            />
            <InfoBtn onClick={() => HandleClick(2)}>i</InfoBtn>

            <Modal open={isOpen.pags} onClose={() => setIsOpen(false)}>
                Has escogido {props.infoTextPag} paginas
            </Modal>
            <Modal open={isOpen.idims} onClose={() => setIsOpen(false)}>
                has escogido {props.infoTextIdims} idiomas
            </Modal>
        </PannelDiv>
    )
}









