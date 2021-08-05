
import CaruselSlyder from "../slyder"
import "./../style/home.css"
import H1Home from "./h1Home"
import H2Home from "./h2Home"

const Home = () => {
    return (
        <div className="home_saction">
            <CaruselSlyder />
            <H1Home
                text="Välkommen till stadtradet.se"
            />
            <H2Home
                text1="Vi erbjuder dig professionell hemstädning, flyttstäd och trädgård, alltid med samma lokalvårdare och samma kontaktman. "
                text2="Flexibilitet är en viktig och praktisk egenskap som vi har - vi anpassar oss efter era önskemål både om hur, var och när ni vill ha arbetet utfört."
            />


        </div>
    )

};

export default Home;