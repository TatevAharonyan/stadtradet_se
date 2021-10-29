
import Navigations from "./navigation";


const LogoHeader = () => {
    return (
        <div id="logo">
            <Navigations 
                saction={ <div className="logoPic"></div> }
                href="/"
                keyAt="id0"
                activeClass="nav_a-active"
            />
        </div>
    )
}

export default LogoHeader;