import {useState} from "react"
import HomePage from "./HomePage";
import { Question } from "./Question";
import { Result } from "./Result";

import {createContext} from "react"

// useState() --> If we want to store any data --> react module(classes, functions
// , variables)


export const myBasket = createContext();

function App() 
{
    // 2 details, 1 = variableName, 2 = functionName
    const [currentData, setCurrentData] = useState("homepage");
    // currentData = "question"
  return (
   <div>

    <myBasket.Provider  value={  { data : setCurrentData }  }>
          { currentData == "homepage" && <HomePage/> }
    </myBasket.Provider>
     
     { currentData == "question" && <Question/> }
     { currentData == "result" && <Result/> }

   </div>
  );
}

export default App;
