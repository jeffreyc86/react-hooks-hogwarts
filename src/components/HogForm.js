import React, {useState} from "react";

function HogForm( { addNewPig }) {
   const [name, setName] = useState("")
   const [specialty, setSpecialty] = useState("")
   const [weight, setWeight] = useState("")
   const [image, setImage] = useState("")
   const [greased, setGreased] = useState(false)
   const [medal, setMedal] = useState("")


   function handleSubmit (e) {
       const newPig = ({name, specialty, weight, image, greased, medal})
       e.preventDefault()

       addNewPig(newPig)

       setName("")
       setWeight("")
       setSpecialty("")
       setImage("")
       setGreased(false)
       setMedal("")
   }

    return (
        <div>
            <h5>New Pig Form</h5>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  value={name} 
                  name="name" 
                  onChange={(e) => setName(e.target.value)} 
                  placeholder="Enter Name"
                />
                <label htmlFor="specialty">Specialty</label>
                <input 
                  type="text" 
                  value={specialty} 
                  name="specialty" 
                  onChange={(e) => setSpecialty(e.target.value)} 
                  placeholder="Enter Specialty"
                />
                <label htmlFor="greased">Greased</label>
                <input 
                  type="checkbox" 
                  checked={greased} 
                  name="greased" 
                  onChange={(e) => setGreased(e.target.checked)}
                />
                <label htmlFor="weight">Weight</label>
                <input 
                  type="text" 
                  value={weight} 
                  name="weight" 
                  onChange={(e) => setWeight(e.target.value)} 
                  placeholder="Enter Weight"
                />
                <label htmlFor="image">Image</label>
                <input 
                  type="text" 
                  value={image} 
                  name="image" 
                  onChange={(e) => setImage(e.target.value)} 
                  placeholder="Enter Image"
                />
                <label htmlFor="medal">Highest Medal Achieved</label>
                <input 
                  type="text" 
                  value={medal} 
                  name="medal" 
                  onChange={(e) => setMedal(e.target.value)} 
                  placeholder="Enter Highest Medal Achieved"
                />
                <button type="submit">Add Hog</button>

            </form>
        </div>
    )

}

export default HogForm