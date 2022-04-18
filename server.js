"use strict"
function MyArray(...args) {
    this.length = 0;
    for (let i = 0; i < args.length; i++) {
        this[this.length] = args[i]
        this.length++
    }
    this.__proto__.myPush = val => {
        this[this.length] = val;
        this.length++;
    };
    this.__proto__.myPop = () => {
        this.length--;
        delete this[this.length];
    };
    this.__proto__.myUnshift = val => {
        for (let i = this.length; 0 < i; i--) {
            this[i] = this[i - 1];
        }
        this.length++;
        this[0] = val;
    };
    this.__proto__.myShift = () => {
        for (let i = 0; i < this.length; i++) {
            this[i] = this[i + 1];
        }
        this.length--;
        delete this[this.length];
    };
    this.__proto__.myForEach = cb => {
        for (let i = 0; i < this.length; i++) {
            cb(this[i], i, this)
        }
    };
    this.__proto__.myMap = cb => {
        let arrObj = {
            length: 0
        }
        for (let i = 0; i < this.length; i++) {
            arrObj[arrObj.length] = cb(this[i], i, this)
            arrObj.length++;
        }
        return arrObj
    }
    this.__proto__.myFilter = cb => {
        let arrObj = {
            length: 0
        };
        for (let i = 0; i < this.length; i++) {
            if (cb(this[i], i, this)) {
                arrObj[arrObj.length] = this[i]
                arrObj.length++
            }
        }
        return arrObj;
    };
    this.__proto__.myFind = cb => {
        for (let i = 0; i < this.length; i++) {
            if (cb(this[i], i, this)) {
                return this[i];
            }
        }
        return undefined;
    };
    this.__proto__.myFindIndex = cb => {
        for (let i = 0; i < this.length; i++) {
            if (cb(this[i], i, this)) {
                return i;
            }
        }
        return -1;
    };
    this.__proto__.mySplice = (index, delVal, addVal) => {
        if (delVal) {
            for (let i = 0; i < delVal; i++) {
                for (let j = index; j < this.length; j++) {
                    this[j] = this[j + 1];
                }
                delete this[this.length - 1]
                this.length--;
            }
        }
        if (addVal) {
            let upper = addVal.length
            for (let i = index; i < this.length; i++) {
                this[i + upper] = this[i];
            }
            let ind = index;
            for (let i = 0; i < addVal.length; i++) {
                this[ind] = addVal[i]
                ind++;
                this.length++;
            }
        }
    };
    this.__proto__.mySlice = (start, end) => {
        let arrObj = {
            length: 0
        };
        let positiveIndex = val => val * -1 - this.length - 1;
        if (start < 0) {
            positiveIndex(start);
        }
        if (end < 0) {
            positiveIndex(end);
        }
        if (!end) {
            end = this.length;
        }
        for (let i = start; i < end; i++) {
            arrObj[arrObj.length] = this[i];
            arrObj.length++;
        }
        return arrObj;
    };
    this.__proto__.myReverse = () => {
        let arrObj = {
            length: [this.length]
        }
        for (let i = 0; i < this.length / 2; i++) {
            let temp = this[i]
            arrObj[i] = this[this.length - 1 - i]
            arrObj[this.length - 1 - i] = temp

        }
        return arrObj;
    };
    this.__proto__.myReduce = (cb, start) => {
        let result = this[0];
        let i = 1;
        if (start) {
            result = start;
            i--;
        }
        while (i < this.length) {
            result = cb(result, this[i])
            i++
        }
        return result;
    };
    this.__proto__.myJoin = symbol => {
        let textNames = "";
        for (let i = 0; i < this.length; i++) {
            textNames = textNames + this[i];
            if (!(i === this.length - 1)) {
                textNames += symbol;
            }
        }
        return textNames;
    };
    this.__proto__.mySplit = (strings, symbol, del) => {
        let arrObj = {
            length: 0
        };
        for (let i = 0; i < strings.length; i++) {
            let name = "";
            while (!(strings[i] === symbol) && i < strings.length) {
                name += strings[i];
                if (symbol === "") {
                    break;
                }
                i++;
            }
            arrObj[arrObj.length] = name;
            arrObj.length++;
        }
        if (del) {
            for (let i = 0; i < del; i++) {
                arrObj.length--;
                delete arrObj[arrObj.length]
            }
        }
        return arrObj;
    };
    this.__proto__.myIndexOf = cb => {
        for (let i = 0; i < this.length; i++) {
            if (cb(this[i], i, this)) {
                return i;
            }
        }
        return -1;
    };
    this.__proto__.myIncludes = (val, start) => {
        for (let i = start; i < this.length; i++) {
            if (this[i] === val) {
                return true;
            }
        }
        return false;
    };
    this.__proto__.myConcat = (...args) => {
        let arrObj = {
            length: 0
        };
        for (let i = 0; i < this.length; i++) {
            arrObj[arrObj.length] = this[i]
            arrObj.length++
        }
        for (let i = 0; i < args[0].length; i++) {
            arrObj[arrObj.length] = args[0][i]
            arrObj.length++
        }
        return arrObj;
    }
}
let arr = new MyArray(1,2,3,4,5)
console.log(arr);
