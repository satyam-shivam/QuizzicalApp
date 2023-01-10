import React from "react";
import { styles } from "../Data";

export default function Quiz(props) {
   
   const listAnswer = ( answer, styles ) => {
        return (
                <li
                    className="answer"
                    style={ styles }
                    key={ answer }
                    onClick={
                        () => props.handleSelect( props.quiz.id, answer )
                    }
                >
                    {answer}
                </li>
        )
   }
  
   function setStyle(answer) {
    const { selected, correctAnswer } = props.quiz 

    if( !props.check ) {
        return ( 
            answer === correctAnswer ?
            styles.correctAnsColor :
            answer == selected && answer != correctAnswer ? 
            styles.wrongAnsColor : [] 
        )
      }

      else {
        return answer == selected ? styles.selectColor : []
      }

   } 

    return (
        <div className="quiz-wrapper">
            <strong className="question">{ props.quiz.question }</strong>
            <ol className="answers--wrapper" type="A">
                {
                    props.quiz.allAnswers.map(answer => {
                        return listAnswer( answer, setStyle(answer) )
                    })
                } 
            </ol>
        </div>
        
    )
}