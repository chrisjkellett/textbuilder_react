class Builder {
  constructor(){
    this.easy = 0.2
    this.intermediate = 0.4
    this.hard = 0.6
    this.minimumWords = 5
  }

  build(text, level){
    const words = text.split(" ");
    const gaps = this.calculateGaps(words.length, level);
    const indexArray = this.indexArray(words.length, gaps);
    return this.process(indexArray, words);
  }

  calculateGaps(textLength, level = 'easy'){
    return Math.ceil(textLength * this[level]);
  }

  check(userAnswers, text){
    const keys = Object.keys(userAnswers);
    let corrections = [];
    text.forEach((word, index) => {
      if(keys.includes(index.toString()))
        if(userAnswers[index] === word)
          corrections.push('#' + word);
        else
          corrections.push('!' + word)
      else
        corrections.push(word);
    });
    return corrections;
  }

  indexArray(textLength, gaps){
    let array = [];
    let res;
    for (let i = 0; array.length < gaps; i++){
      res = this.randomIndex(textLength);
      if(!array.includes(res)){
        array.push(res) 
      } 
    }
    return array;
  }

  process(indexArray, words){
    return words.map((word, index) => indexArray.includes(index) ? '{gap}' : word);
  }
  
  randomIndex(textLength){
    return Math.floor(Math.random() * textLength)
  }

}

export default new Builder();