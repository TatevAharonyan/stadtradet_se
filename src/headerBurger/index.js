import Popup from "../popup";
import "./../style/header.css";

const HeaderBurger = () => {
    

    const popupOpen = () => {
        const burgerMenu = document.querySelector(".popupWrap");
        if (burgerMenu) {
            burgerMenu.classList.toggle("_active");
            document.querySelector("body").classList.toggle("_lock");
        }
    }

    const popupClose = e => {
        e.stopPropagation();
        const burgerMenu = document.querySelector(".popupWrap")
        if (burgerMenu) {
            burgerMenu.classList.toggle("_active");
            document.querySelector("body").classList.toggle("_lock");
        }
    }

    return (
        <div className="burger_menu " onClick={popupOpen} >
            <img
                src="logo_ico.png"
                alt="logo"
                className="logo_burge_menu"
            />
            <div className="burger" >
                <span></span>
                <span></span>
                <span></span>
            </div>
            {/* Menu burger */}
            <Popup onClose={popupClose} />
        </div>
    )

}

export default HeaderBurger;
