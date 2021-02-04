import React, {useState} from "react";
import Nav from "./Nav";
import HogList from "./HogList"
import HogFilter from "./HogFilter"
import SortedHogs from "./SortedHogs"
import HogForm from "./HogForm"

import hogs from "../porkers_data";

function App() {
  const [greased, setGreased] = useState("All")
  const [sort, setSort] = useState("")
  const [allHogs, setAllHogs] = useState(hogs)

  function clickedFilter(e){
    setGreased(e.target.innerText)
  }

  let newHogsArray = [...allHogs]
      if (greased === "All") {
        newHogsArray = allHogs
      } else if (greased === "Greased"){
        newHogsArray = allHogs.filter(hog => hog.greased === true)
      } else {
        newHogsArray = allHogs.filter(hog => hog.greased === false)
      } 
      
      if (sort === "Name") {
        newHogsArray.sort(function(a, b) {
          let nameA = a.name.toUpperCase(); // ignore upper and lowercase
          let nameB = b.name.toUpperCase(); // ignore upper and lowercase
              if (nameA < nameB) {
                return -1;
              }
              if (nameA > nameB) {
                return 1;
              }
              // names must be equal
              return 0;
      }) } else if (sort === "Weight") {
      newHogsArray.sort(function(a, b) {
        let weightA = a.weight
        let weightB = b.weight
            if (weightA < weightB) {
              return -1;
            }
            if (weightA > weightB) {
              return 1;
            }
            // names must be equal
            return 0;
    }) }


  function sortHogs(e) {
    setSort(e.target.value)
  }
  
  function addNewPig(newPig) { 
    const updatedHogsArray = [...hogs, newPig]
    setAllHogs(updatedHogsArray)
  }

  return (
    <div className="App">
      <Nav />
      <HogForm addNewPig={addNewPig} />
      <HogFilter handleClick={clickedFilter}/>
      <br></br>
      <SortedHogs handleClick={sortHogs}/>
      <br></br>
      <br></br>
      <br></br>
      <HogList hogs={newHogsArray} />
    </div>
  );
}

export default App;
