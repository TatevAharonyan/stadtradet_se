import Navigations from "../header/navigation";
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

    const stop = e => {
        // e.stopPropagation();
    }

    return (
        <div className="burger_menu " onClick={popupOpen} >
             <Navigations 
                saction={<img
                    src="logo_ico.png"
                    alt="logo"
                    className="logo_burge_menu"
                    onClick = {stop}
                /> }
                href="/"
                keyAt="id0"
                activeClass="nav_a-active"
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
