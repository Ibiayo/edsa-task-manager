import React, {useState} from 'react';
import EditTask from '../modals/EditTask';
import { Tooltip } from 'react-tooltip'


const Card = ({taskObj, index, deleteTask, updateListArray}) => {
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }

    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    return (
        <div className="card-wrapper mr-5">
            <div class = "card-top" style={{"background-color": colors[index%5].primaryColor}}></div>
           <div className="task-holder">
                <span class = "card-header" style={{"background-color": colors[index%5].secondaryColor}}>{taskObj.Name}</span>
                <p className = "mt-3">{taskObj.Description}</p>

                
                <div style={{ "position": "absolute", "right": "20px", "bottom": "20px" }}>
                <Tooltip id="my-tooltip" />
                    <i class="far fa-edit mr-3" style={{ "color": colors[index % 5].primaryColor, "cursor": "pointer", paddingRight: "5px" }} data-tooltip-id="my-tooltip" data-tooltip-content="Edit task" data-tooltip-place="top" onClick={() => setModal(true)}></i>
                    
                    <i class="fas fa-trash-alt" tooltip="delete task" style = {{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} data-tooltip-id="my-tooltip" data-tooltip-content="Remove task" data-tooltip-place="top" onClick = {handleDelete}></i>
                </div>
           </div>
           <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
        </div>
    );
};

export default Card;
