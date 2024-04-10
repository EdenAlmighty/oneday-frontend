import { useSelector } from 'react-redux'
import { DateCellComponent } from './dynamicCmp/DateCellComponent'
import { StatusCellComponent } from './dynamicCmp/StatusCellComponent'
import { PriorityCellComponent } from './dynamicCmp/PriorityCellComponent';
import { MembersCellComponent } from './dynamicCmp/MembersCellComponent';
import { TextCellComponent } from './dynamicCmp/TextCellComponent';
import { LastUpdatedComponent } from './dynamicCmp/LastUpdatedComponent'
import { FilesComponent } from './dynamicCmp/FilesComponent';
import { TimelinesComponent } from './dynamicCmp/TimelinesComponent';
import { Button, Checkbox, Menu, MenuButton, MenuItem } from 'monday-ui-react-core';
import { AddSmall, AddUpdate, Delete, Update } from 'monday-ui-react-core/icons';
import { InputCell } from './reusableCmps/InputCell';
import { LabelPicker } from './reusableCmps/LabelPicker';
import { useState } from 'react';
import { onOpenModalLabel } from '../../store/actions/board.actions';
import { Link } from 'react-router-dom';
import { EditableCellTitle } from './reusableCmps/EditableCellTitle';





export function TaskPreview({ groupId, task, onUpdateCell, onUpdateTask, onRemoveTask, groupColor, isLast }) {
    // console.log('this is task for reall', task)

    const clmTypes = useSelector(storeState => storeState.boardModule.board.clmTypes)
    const modalProps = useSelector(storeState => storeState.boardModule.modalProps)
    const [isLabelOpen, setIsLabelOpen] = useState(false)

    async function onChange(cell) {
        try {
            const labelsList = currClmType.data
        }
        catch (err) {
            console.log(err);
        }

    }

    function openDynModal(clmType) {
        console.log("almost");
    }

    const { cells } = task
    function getClmType(cellId) {
        const clmToReturn = clmTypes.find(clmTypeToReturn => (clmTypeToReturn._id === cellId))
        return clmToReturn
    }

    function onUpdateTitle(newTxt) {
        const taskToUpdate = task
        task.title = newTxt
        onUpdateTask(taskToUpdate)
    }

    function onClickLabel(ev, clmType, cell) {
        try {
            onOpenModalLabel(ev, clmType, cell, task, onUpdateCell)
        } catch (err) {
            console.log('cannot change label', err);
        }
    }

    // const taskTitleCellStyle = isLast ? { } : {};

    return (
        // <section className="task-preview">
        <>
            <section style={{}} className="task-actions">
                <MenuButton size='XS' >
                    <Menu id={`menu-${task._id}`} size={Menu.sizes.LARGE}>
                        {/* <MenuItem icon={AddSmall} title="Add group"/> */}
                        <MenuItem icon={Delete} title="Delete" onClick={() => onRemoveTask(task._id)} />
                    </Menu>
                </MenuButton>
            </section>
            <div className="task-preview-title-container" style={{
                borderLeft: `0.4em solid ${groupColor}`
            }}>

                <div className='dyn-cell checkbox-container'>
                    <Checkbox />
                </div>
                <div className='task-title-cell'>
                    <span style={{}} className='dyn-cell title'>
                        <EditableCellTitle txt={task.title} onUpdateInput={onUpdateTitle}/>
                    </span>
                    <div className="btn-message-container">
                        <Link to={`/`}>
                            <AddUpdate />
                        </Link>
                    </div>
                </div>
            </div>


            {
                cells.map((cell, idx) => (

                    <DynamicCmp key={idx}
                        groupId={groupId}
                        groupColor={groupColor}
                        cmpType={cell.type}
                        onChange={onChange}
                        clmType={getClmType(cell._id)}
                        cell={cell}
                        onUpdateCell={onUpdateCell}
                        taskId={task._id}
                        onClick={openDynModal}
                        onClickLabel={onClickLabel}
                    />
                ))
            }
        </>
    )
}


function DynamicCmp(props) {
    switch (props.cmpType) {
        case 'status':
            return <StatusCellComponent {...props} />
        case 'priority':
            return <PriorityCellComponent {...props} />
        case 'members':
            return <MembersCellComponent {...props} />
        case 'txt':
            return <TextCellComponent {...props} />
        case 'date':
            return <DateCellComponent {...props} />
        case 'timelines':
            return <TimelinesComponent {...props} />
        case 'files':
            return <FilesComponent {...props} />
        case 'updates':
            return <LastUpdatedComponent {...props} />

        default: <span>NoNo</span>

    }
}




