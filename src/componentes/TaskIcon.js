import { ReactComponent as CheckSVG } from "../Icons/Check.svg"
import { ReactComponent as DeleteSVG } from "../Icons/Delete.svg"
import '../Styles/TaskIcon.css'

const iconTypes = {
    'check':(color) => <CheckSVG className="Icon-svg" fill={color}/>,
    'delete':(color) => <DeleteSVG className="Icon-svg" fill={color}/>,
}

function TaskIcon ({type, color, onClick} ) {
    return(
        <span 
            className={`Icon-container Icon-container-${type}`}
            onClick={onClick}
        >
            {/*se envia color como una funion */}
            {iconTypes[type] (color)}
        </span>
    )
}

export {TaskIcon}