import { useState } from "react";

function TextLess({ text, max = 191 }) {
    const [showLess, setShowLess] = useState(true);

    if (text.length <= max) {
        return (
            <span>
                {text}
            </span>
        )
    }

    return (
        <p className="p">
            {showLess ? `${text.substring(0, max)} ...` : text}
            <button onClick={(e) => {
                e.preventDefault();
                setShowLess(!showLess);
            }} >{showLess ? " more" : " less"} </button>
        </p>

    )
}

export default TextLess;