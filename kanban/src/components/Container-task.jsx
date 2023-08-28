import { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";

export default function ContainerTask() {
    const [display, setDisplay] = useState(false)

    const displayInput = () => {
        setDisplay(true);
    }

    const onKeyPress = (event) => {        
        const keyPress = event.key;

        if(keyPress === "Enter") {
            setDisplay(false);
        }
    }

  return (
    <div className="task-section__container-task">
      <h2 className="container-task__title">Pendente</h2>

      <div className="container-task__container-tasks">
        <div className="container-tasks__task">
          <span className="task__label" onClick={displayInput}>{display === false ? "Nova tarefa" : <input type="text" value={"Nova Tarefa"} onKeyDown={(event) => onKeyPress(event)}/>}</span>
        </div>        
      </div>

      <button className="container-task__button-task">
        <BsPlusCircle className="button-task__icon" /> Nova tarefa
      </button>
    </div>
  );
}
