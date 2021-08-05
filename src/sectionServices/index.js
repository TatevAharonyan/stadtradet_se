
import React, { Fragment } from "react";
import H1Home from "../sactionHome/h1Home";
import H2Home from "../sactionHome/h2Home";
import H1Services from "./h1Services";
import { servicesTextArr } from "./../text_constant/constant"
import "./../style/services.css"

const Services = (props) => {

    return (
        <div className="services_saction">
            <H1Home text="TJÄNSTER" id="h1_shadow"/>

            {servicesTextArr.map( value=> {
                return (
                    <Fragment key = {(value.id +3)}>
                        <H1Services
                            text={value.title}
                            keyAt = {(value.id + 2)}
                        />
                        <H2Home
                            text1={value.text1}
                            text2={value.text2}
                            text3={value.text3}
                            keyAt = {(value.id + 1)}
                        />
                        
                    </Fragment>
                )
            }
            )}
        </div>

    )
}

export default Services;