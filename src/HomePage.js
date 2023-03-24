import {useContext} from "react"
import { myBasket } from "./App"

function HomePage() {

    const { data } = useContext(myBasket)

    // data = setCurrentData
  
    function clickIt()
    {
     //logic to call Question Component
     data("question")
    }

  return (
   <div>
        <button onClick={clickIt}>Start Quiz</button>
   </div>
  )
}

export default HomePage