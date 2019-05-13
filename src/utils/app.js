class Builder {
  build(text, gaps){
    const words = text.split(" ");
    this.validate(words.length, gaps);
    const indexArray = this.getIndexArray(words.length, gaps);
    return this.processString(indexArray, words);
  }

  validate(textLength, gaps){
    if(gaps > textLength){
      throw new Error();
    }
  }

  processString(indexArray, words){
    return words.map((word, index) => indexArray.includes(index) ? '{gap}' : word);
  }
  
  getIndexArray(textLength, times){
    let array = [];
    let res;
    for (let i = 0; array.length < times; i++){
      res = this.getRandomIndex(textLength);
      if(!array.includes(res)){
        array.push(res) 
      } 
    }
    return array;
  }
  
  getRandomIndex(textLength){
    return Math.floor(Math.random() * textLength)
  }

}

export default new Builder();