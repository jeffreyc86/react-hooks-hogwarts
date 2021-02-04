import React, {useState} from "react";

function HogInfo ({specialty, greased, weight, medal}) {

    console.log({specialty, greased, weight, medal})
    return (
        <div>
           <p>Specialty: {specialty}</p>
           <p>{greased ? "Greased" : "Not Greased"}</p>
           <p>Weight: {weight}</p>
           <p>High Medal Achieved: {medal}</p>
        </div>
    )
}

export default HogInfo