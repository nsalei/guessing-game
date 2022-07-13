class GuessingGame {
    constructor() {
        this.number;
        this.arrayOfNum = [];
        this.middleNum;
    }

    setRange(min, max) {
        for (var i = min; i <= max; i++) {
            this.arrayOfNum.push(i);
        }
    }

    guess() {
        this.middleNum = Math.round((this.arrayOfNum.length - 1) / 2);
        return this.arrayOfNum[this.middleNum];
    }

    lower() {
    
        this.arrayOfNum.splice(this.middleNum + 1, ((this.arrayOfNum.length) - this.middleNum));
    }

    greater() {
        this.arrayOfNum.splice(0, this.middleNum);
    }
}

module.exports = GuessingGame;
