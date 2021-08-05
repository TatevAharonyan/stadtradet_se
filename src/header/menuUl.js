
import Navigations from "./navigation";

const MenuUl = () => {
    return (
        <ul >
            <Navigations saction="HEM" href="/"  keyAt = "id0" activeClass = "nav_a-active" />
            <Navigations saction="TJÄNSTER" href="/services" keyAt = "id1" activeClass = "nav_a-active" />
            <Navigations saction="VÅRA GÄRNINGAR" href="/ourdeeds" keyAt = "id3" activeClass = "nav_a-active" />
            <Navigations saction="KONTAKT" href="/kontakt" keyAt = "id2" activeClass = "nav_a-active" />
        </ul>
    )

}

export default MenuUl;