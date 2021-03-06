class Builder {
  constructor(){
    this.easy = 0.2
    this.intermediate = 0.4
    this.hard = 0.6
    this.minimumWords = 2
  }

  build(text, level){
    const words = this.prepare(text);
    const gaps = this.calculateGaps(words.length, level);
    const indexArray = this.indexArray(words, gaps);
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
        if(userAnswers[index] === '')
          corrections.push('[not answered]');
        else if(userAnswers[index].toLowerCase() === word.toLowerCase())
          corrections.push('#' + word);
        else
          corrections.push('!' + word)
      else
        corrections.push(word);
    });
    return corrections;
  }

  indexArray(words, gaps){
    let array = [];
    let res;
    for (let i = 0; array.length < gaps; i++){
      res = this.randomIndex(words.length);
      if(!array.includes(res) && words[res] !== '{p}'){
        array.push(res) 
      } 
    }
    return array;
  }

  markParagraphs(text){
    const p = new RegExp(/\n/g);
    return text.replace(p, ' {p} ');
  }

  prepare(text){
    const textMarkedForParagraphs = this.markParagraphs(text);
    const hasSpaces = new RegExp(/\s+/);
    return textMarkedForParagraphs.split(hasSpaces);
  }

  process(indexArray, words){
    return words.map((word, index) => indexArray.includes(index) ? '{gap}' : word);
  }
  
  randomIndex(textLength){
    return Math.floor(Math.random() * textLength)
  }

  score(corrections){
    let score = {
      correct: 0,
      total: 0
    }
    corrections.forEach(word => {
      if(word[0] === '#'){
        score.correct ++;
        score.total ++;
      }
      else if(word[0] === '!' || word[0] === '[')
        score.total ++;
    })
    return score;
  }

}
export default new Builder();
