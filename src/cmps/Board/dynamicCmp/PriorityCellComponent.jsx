import { useState } from "react"
import { LabelPicker } from "../reusableCmps/LabelPicker"

export function PriorityCellComponent({ clmType, cell, onChange, onClickLabel }) {
    const [isOpen, setIsOpen] = useState(false)
    // console.log(clmType, cell);
    const { data } = clmType

    

    function getCellTxt() {
        const item = data.find(item => item.id === cell.dataId)
        if (!item) return 'puki wrongico'
        const title = item.title || 'puki wrongico'
        return title
    }

    function getCellColor() {
        const item = data.find(item => item.id === cell.dataId)
        if (!item) return 'red'
        const color = item.color
        return color
    }

    function toggleLabelPicker() {
        setIsOpen(!isOpen)
        console.log("isOpen", isOpen);
    }

    return (
        <>
            <div style={{ backgroundColor: getCellColor(), height: '2.25em', width: '100%', cursor: 'pointer' }} className="dyn-cell priority"
             onClick={(ev) => onClickLabel(ev.target,clmType,cell)}
            >
                <span className="priority-txt"
                   
                >{getCellTxt()}</span>
            </div>
        </>
    )
}