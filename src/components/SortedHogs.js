function SortedHogs({handleClick}) {


   return (
      <div>
         <button value="Name" onClick={handleClick}>Sort by Name</button>
         <button value="Weight" onClick={handleClick}>Sort by Weight</button>
      </div>
   )
}

export default SortedHogs