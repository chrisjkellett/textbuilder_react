class Validate {
  hasNoSpaces(str){
    const space = new RegExp(/\s/);
    return !space.test(str);
  }
}

export default new Validate();