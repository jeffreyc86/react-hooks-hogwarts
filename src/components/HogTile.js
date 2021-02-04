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
            <h3>{name}</h3>
            <button onClick={showClick}>{show ? "Hide Hog" : "Show Hog"}</button>
            <div style={ show ? { display:'block'} : {display : 'none'} } >
                <img src={image} alt={name} className="minPigTile maxPigTile" />;
                    {isClicked ? 
                        <HogInfo 
                            specialty={specialty} 
                            weight={weight} 
                            greased={greased}
                            medal={medal}
                        /> : null }
            </div>
        </div>
    )

}

export default HogTile