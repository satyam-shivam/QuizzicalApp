function shuffleAnswers(array) {
    for (let i = 0; i < array.length; i++) {
      let randomIndex = Math.floor(Math.random() * (i + 1))
      let temp = array[i]
      array[i] = array[randomIndex]
      array[randomIndex] = temp
    }
      return array
  }

  export { shuffleAnswers }