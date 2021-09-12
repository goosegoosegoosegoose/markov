/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.chains = this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

   makeChains() {
    let chains = {};
    for (let i = 0; i < this.words.length; i++){
      if (!chains[this.words[i]]){
        chains[this.words[i]] = []
      };
      if (!this.words[i + 1]) {
        chains[this.words[i]].push(null);
        break;
      } 
      chains[this.words[i]].push(this.words[i+1]);
    }
    return chains;
  }
  // this took me 5 hours

  /** return random text from chains */

  makeText(numWords = 100) {
    const words = Object.keys(this.chains);
    let word = words[Math.floor(Math.random() * words.length)];
    let sentence = '';

    for (let i = 0; i < numWords; i++){
      sentence += word + ' ';
      let nextWord =  this.chains[word][Math.floor(Math.random() * this.chains[word].length)];
      word = nextWord;
      if (word == null){
        break;
      }
    }
    console.log(sentence);
    return sentence;
  }
}

let mm = new MarkovMachine("the cat in the hat is in the hat");

mm.makeText();
mm.makeText(numWords = 50);

module.exports = { MarkovMachine }