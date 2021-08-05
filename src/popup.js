
import "./style/popup.css";
import MenuUl from "./header/menuUl";


const Popup = ({ onClose }) => {



    return (
        <div className="popupWrap">
            <div className="popup" >
                <span onClick={onClose}>x</span>
                <nav>
                    <MenuUl />
                </nav>

            </div>
        </div>
    )
}

export default Popup;