class Builder {
  build(text, gaps){
    const words = text.split(" ");
    this.validate(words.length, gaps);
    const indexArray = this.indexArray(words.length, gaps);
    return this.process(indexArray, words);
  }

  validate(textLength, gaps){
    if(gaps > textLength){
      throw new Error();
    }
  }

  process(indexArray, words){
    return words.map((word, index) => indexArray.includes(index) ? '{gap}' : word);
  }
  
  indexArray(textLength, times){
    let array = [];
    let res;
    for (let i = 0; array.length < times; i++){
      res = this.randomIndex(textLength);
      if(!array.includes(res)){
        array.push(res) 
      } 
    }
    return array;
  }
  
  randomIndex(textLength){
    return Math.floor(Math.random() * textLength)
  }

}

export default new Builder();