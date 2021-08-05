
const H2Home = ({ text1, text2, text3, keyAt}) => {
    return (
       <h2 className = "saction_home_h2"  key = {keyAt}> {text1} <br/> {text2} <br/> {text3} </h2>
    )
}

export default H2Home;