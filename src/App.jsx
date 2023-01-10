import React, { useState, useEffect } from 'react'
import  { nanoid } from "nanoid"

import MenuPage from './Components/Menu'
import QuizPage from './Components/QuizPage'
import Button from './Components/Buttons'
import Loading from './components/Loading'

import { shuffleAnswers } from './utility'

function App() {
  // ******************** States ******************** 
  const [ startQuiz, setStartQuiz ] = useState( false ) 
  const [ menu, setMenu ] = useState({ // menu formData
    category: '', 
    difficulty: '', 
    type: '',
  })
  
  let url = 'https://www.otriviata.com/api.php?amount=5&encode=none'
  const [ newUrl, setNewUrl ] = useState( () => url || [] ) // API url 
  
  const [ allQuiz, setAllQuiz ] = useState( [] ) // Data from API
  const [ NewQuiz, setNewQuiz ] = useState( false ) // call api in quiz page
  const [ error, setError ] = useState( false )
  const [ isLoading, setIsLoading ] = useState( true ) // loading state

  const [ checkAns, setCheckAns ] = useState( true ) // check Answers State
  const [ userScores, setUserScores ] = useState( {numOfCorrectAns: '', totalNumOfQues: ''} )
  
  //  Menu formData fn 
  function handleOnChange( event ) { 
    const { name, value } = event.target
    setMenu(oldFormData => {
      return {
        ...oldFormData, 
        [name]: value 
      }
    })
  }
  
  // answering questions fn handler
  function handleSelect( id, selectAnswer ) {
    setAllQuiz(prevQuiz => prevQuiz.map( quiz => (
      quiz.id === id ? {...quiz, selected: selectAnswer} 
      : quiz
    )))
  }
  
  // update url fn
  useEffect( () => {
    let param = ''
    for(let key in menu) {
      if(menu[key].length > 0) {
        param += `&${key}=${menu[key]}` 
      } 
    }
    setNewUrl(`${url}${param}`) 
  }, [menu, NewQuiz, startQuiz])

  
    // buttons action fn
    function togglePlay( event ) {
      const { id } = event.target
      if ( id === 'menu' ) {
        setStartQuiz(oldState => !oldState )
        setCheckAns( true )
        setIsLoading(true)
  
      } else if( id === 'check' ) {
        setCheckAns( oldState => !oldState )
        
      } else {
        setIsLoading(true)
        setNewQuiz( oldState => !oldState )
        setCheckAns( oldState => !oldState )   
      }

    }

  // API Call fn
  useEffect( () => {
     async function fetchQuiz() {
        try {
          const response = await fetch(newUrl)
          const data = await response.json()
         
          setAllQuiz( data.results.map(quiz => {
            return {
              id: nanoid(),
              question: quiz.question,
              correctAnswer: quiz.correct_answer,
              selected: '',
              allAnswers: 
              shuffleAnswers( [quiz.correct_answer, ...quiz.incorrect_answers] )
            }
          }))
             
        }
         catch(error) {
          if( error.length ) {
            setError(true)
          }
        }  
    }

    fetchQuiz()
    
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(window.setTimeout) 
    
  }, [startQuiz, NewQuiz] )
  
 

  // questions and answers elements
  const quizElements = allQuiz.map( (quiz, idx) => (
      <QuizPage 
        key={ idx }
        quiz={ quiz }
        handleSelect={ handleSelect }
        id={ quiz.id }
        check={ checkAns }
      />
  )) 
   
  // user's scores checker
  useEffect( () => {
    const correctAnswers = allQuiz.filter( quiz => quiz.correctAnswer === quiz.selected )
    setUserScores( {numOfCorrectAns: correctAnswers.length, totalNumOfQues: allQuiz.length} )
  }, [checkAns] )
 
 return (
    <div  className='main'> 
      {startQuiz ? 
        isLoading ? <Loading /> :
        <>
          {quizElements} 
          <Button 
            checkAns={ checkAns }
            togglePlay={ togglePlay }
            userScores={ userScores }        
          />  
        </>
        : 
        <MenuPage 
          menu={ menu }
          startQuiz={ startQuiz }
          togglePlay={ togglePlay }
          handleOnChange={ handleOnChange }     
        />
      } 
    </div>
 )
}

export default App