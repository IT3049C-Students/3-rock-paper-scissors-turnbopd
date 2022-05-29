class RockPaperScissors {
  constructor(username) {
    this.username = username;
    this.score = {
      user: 0,
      cpu:0 
    },
    this.gameHistoryLog = [];
  }

  /**
   * RETURN: one of the following values (`rock`, `paper`, `scissors`)
   * using Math.random() method, you should be able to get one of the following values
   */
  generateCPUResponse(){
    const acceptedValues = [ `rock`, `paper`, `scissors` ];

     let random = acceptedValues[Math.floor(Math.random() * acceptedValues.length)];

    return random ;
  }
  /**
   * returns one of the following values: `win`, `lose`, `tie`
   * tie:
   *     the user selection the same as the CPU
   * win: 
   *    (user is `rock` and cpu is `scissors
   *     OR
   *    (user is `paper` and cpu is `rock`) 
   *     OR 
   *    (user is `scissors` and cpu is `paper`)
   * `lose`:
   *    the opposite case :)
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   * @param {string} cpuSelection computer selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  determineWinner(userSelection, cpuSelection){
    let results;

    if(userSelection == cpuSelection){
      return results ='tie';
    }else if (userSelection == 'rock' && cpuSelection == 'scissors' || 
              userSelection == 'paper' && cpuSelection == 'rock' ||
              userSelection == 'scissors' && cpuSelection == 'paper'){
                
                this.score.user +=1;
                return results = 'win'
              }else{
                this.score.cpu +=1;
                return results = 'lose'
              }
  }

  /**
   * 
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  play(userSelection){
    let cpuSelection = this.generateCPUResponse();
    var final = this.determineWinner(userSelection,cpuSelection);
     if(final == 'win'){
       results = this.username + "wins";
       this.score.user++;
     }else if (final == 'lose'){
       results ="CPU Wins"
       this.score.cpu++
     }
    this.gameHistoryLog.push(`${this.username} selected ${userSelection}, CPU selected ${cpuSelection}: ${results}`);
  }

}