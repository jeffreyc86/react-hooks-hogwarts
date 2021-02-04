function HogFilter({handleClick}) {

   return (
    <div >
        <h5>Greasy filters</h5>
        <button onClick={handleClick}>All</button>
        <button onClick={handleClick}>Greased</button>
        <button onClick={handleClick}>Not Greased</button>
    </div>
   )
}

export default HogFilter