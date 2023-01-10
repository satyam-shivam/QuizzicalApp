import React from "react"

export default function btn(props) {
  
    return (
          <>
            { !props.checkAns && 
              <p className='scores-display'>
                You scored { props.userScores.numOfCorrectAns }/
                { props.userScores.totalNumOfQues } correct answers
              </p> 
            }

            <div className="btn-wrapper">
             <button 
                  className='menu-btn'
                  id='menu'
                  onClick={ (event) => props.togglePlay(event) } 
              >
                  Menu
              </button>

              { props.checkAns ? 
                <button 
                  className='check-btn'
                  id='check'
                  onClick={ (event) => props.togglePlay(event) }
                >
                  Check answers
                </button> 
                :
                <button
                    id='reset'
                    className='play-btn'
                    onClick={ (event) => props.togglePlay(event) }
                >
                    Play again
                </button>
              }
            </div>
          </>
    )
    
}