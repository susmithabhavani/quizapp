import {useState} from "react"

const myQuestions = 
[
    {
        "title": "What is the use of useState()?",
        "A": "To Store the data temporarly",
        "B": "To store the data permanenetly",
        "C": "To connect with database",
        "D": "None of the Above",
        "Answer": "A"
    },
    {
        "title": "What is 10 + 50?",
        "A": 10,
        "B": -40,
        "C": 50,
        "D": 60,
        "Answer": "D"
    },
    {
        "title": "What is 4 * 2?",
        "A": 100,
        "B": 34,
        "C": 12,
        "D": 8,
        "Answer": "D"
    }
]

export function Question() 
{
    const [currentQuestion, setCurrentQuestion] = useState(0);
    // currentQuestion = 2

    function clickIt()
    {
        //Logic to display next question one by one
        setCurrentQuestion(currentQuestion + 1)

    }
    // currentQuestion = 1 --> 2nd question
    // currentQuestion = 2 --> 3rd question

  return (
    <div>
        <h3>Here are the questions that has to be answered:</h3>

        <h2>Q:{myQuestions[currentQuestion].title}</h2>

        A.<button>{myQuestions[currentQuestion].A}</button><br/><br/>
        B.<button>{myQuestions[currentQuestion].B}</button><br/><br/>
        C.<button>{myQuestions[currentQuestion].C}</button><br/><br/>
        D.<button>{myQuestions[currentQuestion].D}</button><br/><br/>

        <button onClick={clickIt}>Next</button>

      

    </div>
  )
}

