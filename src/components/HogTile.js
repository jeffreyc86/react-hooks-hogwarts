import React, {useState} from "react";
import HogInfo from "./HogInfo"

function HogTile({name, image, specialty, weight, medal, greased}) {
    const [isClicked, setIsClicked] = useState(false)
    const [show, setShow] = useState(true)

    function handleClick() {
        setIsClicked(isClicked => !isClicked)
    }

    function showClick () {
        setShow(show => !show)

    }

    return (
        <div onClick={handleClick} className="ui eight wide column">
            <div className="ui card">
                <button onClick={showClick}>{show ? "Hide Hog" : "Show Hog"}</button>
                <h3 className="header">{name}</h3>
                <div style={ show ? { display:'block'} : {display : 'none'} } >
                     <div class="image">
                        <img src={image} alt={name} className="minPigTile" />;
                    </div>
                        {isClicked ? 
                            <HogInfo 
                                specialty={specialty} 
                                weight={weight} 
                                greased={greased}
                                medal={medal}
                            /> : null }
                </div>
            </div>
        </div>
    )

}

export default HogTile