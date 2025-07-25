
const asciiRange = [{min : 65, max : 90},{min : 97, max : 122}]
const audioFormats = [
    ".mp3",   // MP3
    ".aac",   // AAC
    ".ogg",   // OGG (Vorbis)
    ".wav",   // WAV
    ".flac",  // FLAC
    ".m4a",   // M4A
    ".wma"    // WMA
  ];
  
  const pictureFormats = [
    ".jpg",   // JPEG
    ".jpeg",  // JPEG
    ".png",   // PNG
    ".gif",   // GIF
    ".bmp",   // BMP
    ".tiff",  // TIFF
    ".svg",   // SVG
    ".webp"   // WebP
  ];
  

/**
 * @author Heaven Williams
 * @param {Number[]} array
 * @returns {Number | null}the sum of all numbers added together in an array
 */
function return_sum(array){
    if(Array.isArray(array)){
        array.reduce((p,v,i,a) => {
        return (typeof v == "number") ? (v + p) : 0
        }, 0)
    }
    return null;
}

/**
 * A function hat generates a random array of numbers, length being the amount of elements in the array, max being the maximum size of the array(inclusive), and inclusive being if 0 should be included or not.
 * @author Heaven Williams
 * @example
 * generateRandomArr(10,10,false);
 * //generates an array with 10 random values ranging from 1 - 10
 * @param {Number} length 
 * @param {Number} max 
 * @param {Boolean} inclusize 
 * @returns {number[]}
 */
function generateRandomArr(length, max, inclusize){
    let arr = []
    for(let i = 0; i < length; i++){
        arr.push((Math.round((Math.random() * (inclusize ? max : (max - 1) )))) + (inclusize ? 0 : 1))
    }
    return arr;
}

/**
 * Generates a psuedo-random string with a fixed length, Utilizes ascii ranges and randomly chooses uppercase and lowercase letters.
 * @author Heaven Williams
 * @param {number} length
 * @returns {string}
 * @example 
 * const secret_key = generateRandomString(10)
 * //generates a 10 letter string
 */
function generateRandomString(length){
    const asciiRange = [{min : 65, max : 90},{min : 97, max : 122}]

    let randomString = "";
    for(let i = 0; i < length; i++){
        let range = asciiRange[Math.random() <= 0.5 ? 0 : 1];

        let charCode = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;

        randomString += (String.fromCharCode(charCode))
    } 
    return randomString;
}

/**
 * @author Heaven Williams
 * @param {any[]} arr 
 * @param {any} val 
 * @returns 
 */
function valueInArray(arr , val){
    if(!Array.isArray(arr)) throw new Error("arr must be an Array.")
    let contains = false
    arr.forEach((v) =>{
        if(val == v) contains = true
        return
    })
    return contains
}


/**
 * Generates a psuedo-random number with a fixed length, each number being 1 - 9
 * @author Heaven Williams
 * @param {number} length
 * @returns {number}
 * @example 
 * const secret_key = generateRandomNumber(10)
 * //generates a random 10 digit number and automatically parses it to an integer.
 */
function generateRandomNumber(length){
    let numberString = "";
    for(let i = 0; i < length; i++){
        let number = ((Math.floor(Math.random() * 10)));
        numberString += (number + ((number <= 0 && i == 0) ? 1 : 0)).toString();
    }
    return parseInt(numberString)
}

/**
 * Generates a psuedo-random string mixed with numbers and letter with a fixed length
 * @author Heaven Williams 
 * 
 * @param {number} length
 * @returns {string}
 * @example 
 * const secret_key = generateRandomMixedString(10)
 * //generates a random 10 character string that can contain a mix of letters and numbers
 */
function generateRandomMixedString(length){
    let mixedString = "";
    for(let i = 0; i < length; i++){
        let random = (Math.random() <= 0.5 ? generateRandomNumber(1) : generateRandomString(1));
        mixedString += random;
    }
    return mixedString;
}

/**
 * @author Heaven Williams
 * @returns {string} Returns the current date in a acceptable string format.
 */
function getDate(){
    let date = new Date()
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
}


function getSupportedAudioFormats(){
    return audioFormats;
}

function getSupportedImageFormats(){
    return pictureFormats;
}


function pathToAabsolutePath(path){
    return new String(path).split("\\")
}

function splitPath(path){
    return (new String(path).includes("\\")) ? split("\\") : null
}

/**
 * Takes ina  tring and converts it into an array, character by character.
 * @author Heaven Williams
 * @param {string} string 
 * @returns {string[]} an array representation fo a string
 * @example 
 * cosnt myName = stringToArray("heaven") 
 * //returns [h,e,a,v,e,n]
 */
function stringToArray(string){
    if(typeof string != "string") throw new Error("string is not a type of string.")
    let arr = []
for(let i = 0; i < string.length; i++){
    arr.push(string.slice(i,i+1))
}

return arr
}

/**
 * Converts every value in an array into a string and returns the ew array
 * @author Heaven Williams
 * @param {any[]} arr 
 * @returns {string[]}
 * @example
 * const arr = ArraytoStringArray([1,2,"hop",3])
 * //returns : ["1", "2", "hop", "3"]
 */
function ArrayToStringArray(arr){
    if(!Array.isArray(arr)) throw new Error("arr is not an array.")
    return arr.map((v) => v.toString())
}


/**
 * Converts a string to a an array then converts each character to their character.
* @author Heaven Williams
 * @param {string} string 
 * @returns {Int8Array}
 * @example
 * c
 */
function stringToByte(string){
    if(typeof(string) != "string") throw new Error("string does not have the type of sting")
    //returns an array of bytes of a string
    return stringToArray(string).filter(v => typeof(v) == "string").map(v => v.charCodeAt(0))
}

/**
 * Converts a JSON object into an array of bytes. No need to stringify.
 * @author Heaven Williams
 * @param {JSON} obj 
 * @returns {Int8Array}
 * @example
 * const obj = JSONToByte({hello : "world"})
 * //returns : [123,  34, 104, 101, 108, 108, 111,  34,  58,  34, 119, 111, 114, 108, 100, 34, 125]
 */
function JSONToByte(obj){
    if(typeof(obj) != "object") throw new Error("obj is not an object.")
    return stringToByte(JSON.stringify(obj))
}

/**
 * Attempts to convert an array into an array of Bytes
 * @author Heaven Williams
 * @param {any[]} arr 
 * @returns {Int8Array | number[]}
 * @example
 * const bytes = arrToBytes([1,2,3]
 * //returns [ 49, 50, 51 ]
 */
function arrToBytes(arr){
    if(!Array.isArray(arr)) throw new Error("arr is not an array")
    return arr.map((v) => stringToByte(v.toString())[0])
}


/**
 * Attempts to convert any value into a byte, it converts it to a string first and then turns it into a byte, different outputs may appear depending on the input
 * @author Heaven Williams
 * @param {any} data 
 * @returns {Int8Array | unknown}
 * @example 
 * const byte = anyToByte(1)
 * //returns [49]
 */
function anyToByte(data){
    return stringToByte(data.toString())
}

/**
 * Converts a single byte to a Character, assuming the inputted number is a byte
 * @author Heaven Williams
 * @param {number} byte 
 * @returns {string}
 * @example
 * const letter = byteArrToChar(49)
 * // returns 1 (the number 1 is number 49 in the ASCII encoding table)
 */
function byteToChar(byte){
    if(!Number.isInteger(byte)) throw new Error("byte is not an integer")
    return String.fromCharCode(byte)
}


/**
 * Converts mutliple bytes back into strings and returns them in an array
 * @author Heaven Williams
 * @param {...number} bytes
 * @returns {string[]}
 * @example
 * const letter = bytesToString(49, 50, 51)
 * // returns [1,2,3]
 */
function bytesToString(...bytes){
    return bytes.filter(byte => Number.isInteger(byte)).map(v => byteToChar(v))
}


/**
 * Converts an array of bytes back into strings and returns them in an array
 * Differs from bytesToString because you can pass n actually array, and not just paramaters to the function.
 * @author Heaven Williams
 * @param {number[]} bytes
 * @returns {string[]}
 * @example
 * const letter = bytesArrToChars([49,50,51])
 * // returns [1,2,3]
 */
function byteArrToChars(arr){
    if(!(Array.isArray(arr))) throw new Error("arr is not an Array")
    return arr.filter(byte => Number.isInteger(byte)).map(v => byteToChar(v))
}

/**
 * takes in an array of character codes and converts them into characters. Includes an optional offset parameter
 * @param {Array} arr 
 * @param {number} offset 
 * @returns {string[]}
 */
function charCodeArrToChar(arr, offset = 0){
    if(!Array.isArray(arr)) throw new Error("Arr is not type of array")
    if(typeof(offset) != "number") throw new Error("Offset is not a number.")
        return arr.map((v) => {
        if(typeof(v) == "number") return String.fromCharCode((offset + v))
    })
}

    
/**
 * Takes in a number of seconds and auto formats a short sentence to the nearest conversion.
 * @param {number} seconds 
 * @returns {string}
 */
function secondsToString(seconds){
    if(typeof(seconds) != "number") throw new Error("Seconds must be a number.")

    return (seconds <= 60) ? `${seconds} seconds`: ((seconds / 60) <= 60) ? `${Math.round(seconds / 60)} minutes and ${seconds % 60} seconds` : `${Math.round((seconds/60) / 60)} hours and ${Math.round((seconds / 60) % 60)} minutes`
}


/**
 * filters through an array of strings and turns the strings into numbers, will filter out aythng that cannot be turned into a number 
 * @param {string[]} arr 
 * @returns {number[] | any[]}
 */
function arrayToNumArray(arr){
    if(!Array.isArray(arr)) throw new Error("arr is not an array")

    return ArrayToStringArray(arr).map((v) => {
            let number = Number.parseInt(v)
            if(!Number.isNaN(number)) return number
    }).filter((v) => typeof(v) == "number")
}

/**
 * Takes in an array of indexes and "indexes" a selected array with the indexes in the index array. returns an array of the values. If a value isnt present at an index it will be undefined in the returned array. the offset value will shift all array indexes by the offset. for example if you wanted to shift the offset down by 1, you would put -1 if you do not want to shift the array you can put 0 or omit the parameter as by default it is 0.
 * @param {number[]} arr_of_indexs 
 * @param {any[]} arr 
 * @param {number} offset 
 * @returns {any[]}
 */
function indexArrN(arr_of_indexs, arr, offset = 0){
    if(!Number.isInteger(offset)) throw new Error("offset must be an integer.")
    if(!Array.isArray(arr)) throw new Error("arr is not an Array.")
    if(!Array.isArray(arr_of_indexs)) throw new Error("arr_of_indexs is not an Array.")
    return arr_of_indexs.filter((v) => (typeof(v) == "number")).map((v) => {return arr[v + offset]})
}

/**
 * 
 * @param  {...any[]} arrs Takes multiple arrays and returns a new array of all combned values of all the entered arrays. if a passed in value is not an array, it will skip over it.
 * @returns any[]
 */
function joinArrs(...arrs){
    //takes a bunch of arrays and combines all the values of them into one array, ignores all values that are not arrays
    const new_array = []

    arrs.filter((v) => Array.isArray(v)).forEach(c => c.forEach((p) => new_array.push(p)))

    return new_array
}

/**
 * Takes in an array full of array and combines all the inner arrays into one.
 * @param {any[]} arr 
 * @returns {any[]}
 */
function joinArrayOfArrays(arr){
    if(!Array.isArray(arr)) throw new Error("arr is not an array")
    const new_arr = []
    arr.filter(v => Array.isArray(v)).forEach(v => v.forEach(p => new_arr.push(p)))
    return new_arr
}

function decimalToBinary(dec){
    if(typeof(dec) != "number") throw new Error("dec must be a typeof number.")

    return (dec >>> 0).toString(2)
}

function decArrToBinArr(arr){
    if(!Array.isArray(arr)) throw new Error("arr in not an array.")
        return arr.map((v) => {
            if(typeof(v) == "number") return decimalToBinary(v)
    })
}
    

/**
 * A function the determine whether 2 arrays contain the same contnet. The sort paramater determines if the array should be presorted to see if they contain the same values, regardless of the order the elements are in. by default, sort is set to true meaning the function will autosort the arrays. if sort is set to false the arrays wont be autosorted and must have the same order to pass.
 * @param {any[]} arr1 
 * @param {any[]} arr2 
 * @param {boolean} in_order 
 * @returns {boolean}
 */
function arraysHaveSameContent(arr1, arr2, sort = true) {
    if(!Array.isArray(arr1)) throw new Error("arr1 is not an array.")
    if(!Array.isArray(arr2)) throw new Error("arr2 is not an array.")
    if(typeof(sort) != "boolean") throw new Error("sort is not a boolean.")

    if (arr1.length !== arr2.length) return false;

    if(sort){
        arr1 = [...arr1].sort();
        arr2 = [...arr2].sort();
    }
    
    return arr1.every((element, index) => element === arr2[index]);
  }

  /**
   * returns whether or not a multiple arrays contian the same content
   * @param {boolean} sort 
   * @param  {...[]} arrs 
   * @returns boolean
   */
  function multipleArraysHaveSameContent(sort = true, ...arrs) {
        if(typeof sort != "boolean") throw new Error("sort must be a boolean")
    // Filter out non-array arguments
    arrs = arrs.filter((v) => Array.isArray(v));
    // If there are fewer than 2 arrays, return true (nothing to compare)
    if (arrs.length < 2) return true;

    // If order doesn't matter, sort all arrays
    if (sort) {
        arrs = arrs.map(arr => [...arr].sort());
    }

    // Compare the first array with all others
    const firstArray = arrs[0];
    return arrs.every(arr => {
        if (arr.length !== firstArray.length) return false; // Length mismatch
        return arr.every((element, index) => element === firstArray[index]); // Element mismatch
    });
}
/**
 * Goes through an array of arrays to see if each array contains the same values
 * @param {any[]} arr 
 * @param {boolean} sort 
 * @returns {boolean}
 */
export function arrayOfMultpleArraysHaveSameContent(arr, sort = true){
    if(!Array.isArray(arr)) throw new Error("arr is not an array")
    if(typeof sort != "boolean") throw new Error("sort must be a boolean")
    // Filter out non-array arguments
    arr = arr.filter((v) => Array.isArray(v));
    // If there are fewer than 2 arrays, return true (nothing to compare)
    if (arr.length < 2) return true;

    // If order doesn't matter, sort all arrays
    if (sort) {
        arr = arr.map(arr => [...arr].sort());
    }

    // Compare the first array with all others
    const firstArray = arr[0];
    return arr.every(arr => {
        if (arr.length !== firstArray.length) return false; // Length mismatch
        return arr.every((element, index) => element === firstArray[index]); // Element mismatch
    });
}

/**
 * Returns the amout of time a value aears in an array.
 * @param {any[]} arr 
 * @param {any} value 
 * @returns {number}
 */
function countOccurences(arr, value){
    if(!Array.isArray(arr)) throw new Error("arr is not an array.")
    
    return arr.filter(v => v === value).length
}

function viewToArr(byteArr){
    if(!ArrayBuffer.isView(byteArr)) throw new Error("byteAr is not a view")

    return (Array.from(byteArr))
}


class InstanceWrapper {
    constructor(originalObject) {
      this.instance = originalObject;
    }
  
    getInstance() {
      return this.instance;
    }
  
    logInstance() {
      console.log("Current Instance:", this.instance);
    }
  
    updateInstance(key, value) {
      if (this.instance.hasOwnProperty(key)) {
        this.instance[key] = value;
      } else {
        console.warn(`Key "${key}" does not exist on the instance.`);
      }
    }
  }
  
/**
 * returns the average of a dataset of number
 * @param {number[]} dataArr 
 * @returns {number}
 */
function getMean(dataArr){
    if (!Array.isArray(dataArr)) throw new Error('data Array is not an array')
    return dataArr.reduce((acc, val) => acc + val, 0) / dataArr.length;
}

/**
 *  variance tells us how spread apart numebrs are from each other, based on the mean/average of a data set like a scatter plot if the points are far from each other and they look random then they have high variance meaning they vary alot, hwoever if we get a kinda straight line they dont vary much and low variance. depending on what your looking for you might want high or low variance. there is no term for high variance i

    variance has a formula, it uses sigma, the sum of all data point, timesa^2  (x - mean)^2/n x being the current data mean being the mean of the data set

    the number you get will give you how far MOST numebrs in the set tend to be fromt he mean. jsut an estimate

    square rooting both sides of the equation gives you the standard deviation which is th evariance but in original units and not squared terms.
 * @param {number[]} dataArr 
 * @returns {number}
 */
function getVariance(dataArr){
    if (!Array.isArray(dataArr)) throw new Error('data Array is not an array')
   
    let mean = getMean(dataArr)

    return (dataArr.reduce((acc, val) => acc +  Math.pow((val - mean), 2), 0) / dataArr.length)

}

/**
 * Returns the standard deviation of a set of number
 * @param {number[]} dataArr 
 * @returns {number}
 */
function getStdDeviationWV(dataArr){
    if (!Array.isArray(dataArr)) throw new Error("Data Array is not an array")
    //automatically applies variance
    return Math.sqrt(getVariance(dataArr))
}

/**
 * returns the smallest integer that can divide another integer evenly that isnt one. a null result means the number is prime
 * @param {number} numb 
 * @returns {number}
 */
function getSmallestDivisor(numb){
    if(!Number.isInteger(numb)) throw new Error("numb is not an integer.")
        for(let i = 2; i < numb; i++){
            if(numb % i == 0) return i
        }
        //null means number is prime
    return null
}

/**
 * returns the greatest integer that can divide another integer evenly that isnt one. a null result means the number is prime
 * @param {number} numb 
 * @returns {number}
 */
function getGreatestDivisor(numb){
    if(!Number.isInteger(numb)) throw new Error("numb is not an integer.")
        for(let i = (numb - 1); i > 2; i--){
            if(numb % i == 0) return i
        }
        //null means number is prime
    return null
}
  
/**
 * Applys the growth formula to a set of parameters 
 * @param {number} initial 
 * @param {number} rate 
 * @param {number} time 
 * @returns {number}
 */
function growthFormula(initial, rate, time){
    if(typeof initial != "number") throw new Error("initial is not an number.")
    if(typeof rate != "number") throw new Error("rate is not an number.")
    if(typeof time != "number") throw new Error("time is not an number.")
    return initial * Math.pow((1 + rate/100), time)
}

/**
 * Applys the decay formula to a set of parameters 
 * @param {number} initial 
 * @param {number} rate 
 * @param {number} time 
 * @returns {number}
 */
function decayFormula(initial, rate, time){
   if(typeof initial != "number") throw new Error("initial is not an number.")
    if(typeof rate != "number") throw new Error("rate is not an number.")
    if(typeof time != "number") throw new Error("time is not an number.")

    return initial * Math.pow((1 - rate/100), time)
}

/**
 * Returns whether or not the subject is a class or not. A property will be temporarily added the the prototype of the subject - if the class has a property or method witht he name of: __$test$_, it iwll b overwritten and set to null
 * @param {any} subject 
 * @returns {boolean}
 */
function isClass(subject){
    try{
    if(!subject.prototype) return false
    if (typeof subject !== "function") return false;
    if (/^class\s/.test(Function.prototype.toString.call(subject))) return true;

    if(["String", "Number", "Boolean", "Object", "Array", "Map", "Set", "Date", "Error"].includes(subject.name)) return true

    return Object.getOwnPropertyNames(subject.prototype).length > 1;
    }catch(e){
        return false
    }
    
}

/**
 * returns true/false based on whether the subject is a primitive value or not.
 * @param {any} subject
 * @returns {boolean}
 */
function isPrimitive(subject){
    return ["undefined","object","boolean","number","bigint","string","symbol","function"].includes(typeof subject)
}
/**
 * A class ued to define an incrementable node, It goes up one by one until it reaches a maximimum value then it will increment another node. Can be useful for mny scenarioes and uses
 * 
 * @author Heaven
 */

class INode{
    constructor(max, zero_indexing = true){
        if(!Number.isInteger(max)) throw new Error("max must be a number")
        if(typeof(zero_indexing) != "boolean") throw new Error("zero_indexing must be a boolean.")
        if(max <= 0) throw new Error("Max must be greater than zero")
            this.#max = max
            this.#next_node = undefined
            this.#previous_node = undefined
            this.#zero_indexng = zero_indexing
            this.#value = (this.#zero_indexng == true)? 0 : 1
    }
    #zero_indexng
    #max
    #value
    #next_node
    #is_single_node = true
    #previous_node
    
    /**
     * Sets the next node ( to the right of the current node)
     * @author Heaven Williams
     * @param {INode} next_node
     * 
     * @example
     * const myNode = new INode(10).setNextNode(new Inode(10))
     */
    setNextNode(next_node){
        if(!(next_node instanceof INode)) throw new Error("Next node must be of type INode.")
        this.#is_single_node = false
        this.#next_node = next_node
    }


    /**
     * Sets the previous node ( to the left of the current node)
     * @author Heaven Williams
     * @param {INode} prev_node
     * 
     * @example
     * const myNode = new INode(10).setPreviousNode(new Inode(10))
     */
    setPreviousNode(prev_node){
        if(!(prev_node instanceof INode)) throw new Error("Previous node must be of type INode.")
        this.#previous_node = prev_node
        this.#is_single_node = false
    }


    /**
     * flags the next node as intentionally empty
     * @author Heaven Williams
     *  
     * @example
     * const myNode = new INode(10)
     * myNode.setNoNextNode()
     * 
     */
    setNoNextNode(){
        this.#next_node = undefined
        this.#is_single_node = (this.getPreviousNode() instanceof INode) ? false  : true
    }

    /**
     * flags the previous node as intentionally empty
     * @author Heaven Williams
     *  
     * @example
     * const myNode = new INode(10)
     * myNode.setNoPreviousNode()
     * 
     */
    setNoPreviousNode(){
        this.#previous_node = undefined
        this.#is_single_node = (this.getNextNode() instanceof INode) ? false  : true
    }
    
    /**
     * Returns true if the selceted node has an next node otherwise it will return false.
     * @author Heaven Williams
     * @returns {boolean}
     * 
     * @example
     * const myNode = new INode(10)
     * myNode.hasNoNextNode()
     * //returns true
     */
    hasNoNextNode(){
        return (this.getNextNode() == undefined)  && (!(this.getNextNode() instanceof INode))
    }

    /**
     * Returns true if the selceted node has an previous node otherwise it will return false.
     * @author Heaven Williams
     * @returns {boolean}
     * 
     * @example
     * const myNode = new INode(10)
     * myNode.hasNoPreviousNode()
     * //returns true
     */
    hasNoPreviousNode(){
        return (this.getPreviousNode() == undefined)  && (!(this.getPreviousNode() instanceof INode))
    }

    /**
     * Returns the maxmum value of the node
     * @author Heaven Williams
     * @returns {number}
     * 
     * @example
     * const myNode = new INode(10)
     * myNode.getMax()
     * //returns 10
     */
    getMax(){
        return this.#max
    }


    /**
     * Returns the previous node of the current node. If a previous node has not been set or the setPreviousNode() was called it will return undefined
     * @author Heaven Williams
     * @returns {INode | undefined}
     * 
     * @example
     * ```js
     * const myNode = new INode(10)
     * myNode.setPreviousNode(new INode(10))
     * myNode.getPreviousNode()
     * //returns Inode{}
     * ```
     */
    getPreviousNode(){
        return (this.#previous_node instanceof INode) ? this.#previous_node : undefined 
    }

    /**
     * Returns the next node of the current node. If a  next node has not been set or the setNoNextNode() was called it will return undefined
     * @author Heaven Williams
     * @returns {INode | undefined}
     * 
     * @example
     * ```js
     * const myNode = new INode(10)
     * myNode.setNextNode(new INode(10))
     * myNode.getNextNode()
     * //returns Inode{}
     * ```
     */
    getNextNode(){
        return (this.#next_node instanceof INode) ? this.#next_node : undefined
    }

    /**
     * returns true if zeroindexing is enabled
     * @returns {boolean}
     */
    zeroIndexingEnabled(){
        return this.#zero_indexng
    }

    /**
     * Performs a series of steps to increment the node
     */
    incrementNode(){
    //ngl i dont remember what half this does...
    if(!(this.getNextNode() instanceof INode) && !(this.hasNoNextNode()) ) throw new Error("Next node must be of type INode.")

    
    //the last element in the array will call increment on itelf and reset the previous nodes value.

    if(this.hasNoNextNode() && !this.hasNoPreviousNode() && !this.isAtMax()){
    //this would be the last node (first in the array)
            this.incrementValue()
            this.getPreviousNode().resetValue()
        return
    }



    if(this.isSingleNode() && !this.isAtMax()){
        //scenario where this is the only node and its not at its max. increment it
        this.incrementValue()
        return
    }

    if(this.hasNoPreviousNode() && !this.isAtMax()){
        //if this is the first node, (last in the array) is not at its max increment it 
        this.incrementValue()
        return
    }else if(this.hasNoPreviousNode() && this.isAtMax()){
        //if this is the first node (last in the array) is at its max and the next node is not at its max increment the next node, the next node will increment itself and it will reset the previous nodes value if needed.
        this.getNextNode().incrementNode()
        return
    }
    
    if(!this.isAtMax() && this.getPreviousNode().isAtMax()){
        //if this is not at max and the previous 
        this.getPreviousNode().resetValue()
        this.incrementValue()
        return
    }else if(this.isAtMax() && this.getPreviousNode().isAtMax() && !this.getNextNode().isAtMax()){
        this.resetValue()
        this.getPreviousNode().resetValue()
        this.getNextNode().incrementValue()
        return
    }else if(this.isAtMax() && this.getPreviousNode().isAtMax() && this.getNextNode().isAtMax()){
        this.getPreviousNode().resetValue()
        this.getNextNode().incrementNode()
        return
    }



    //the first should jsut be steadily incremented
    
        //if the next node is at is max and so are you, run incrementnode on the net node so it can pass on down the line. just to check to make sure everyhing is going right. if nothing happens, you dont have to worry about ti.
        
    }

    /**
     * increments the value of this ndoe
     */
    incrementValue(){
        this.#value++
    }

    /**
     * retunrs the current value of this node
     * @returns {number}
     */
    getValue(){
        return this.#value
    }

    /**
     * returns if the node is at max or not
     * @returns {boolean}
     */
    isAtMax(){
        return (this.#value >= this.#max)
    }

    /**
     * Resets the nodes value, will reset to zero or one based on if zero indexing is enabled
     */
    resetValue(){
        this.#value = (this.#zero_indexng == true)? 0 : 1
    }

    /**
     * Returns the default value of the node, when it is reset.
     * @returns {0 | 1}
     */
    getDefaultValue(){
        return (this.#zero_indexng == true)? 0 : 1
    }  

    /**
     * returns whether the selected node is a boolean or not.
     * @returns {boolean}
     */
    isSingleNode(){
        return this.#is_single_node
    }
}

/**
 * @param {number} max
 * @param {number} node_count
 * @param {boolean} zero_indexing
 * 
 */
class INodeList{
    constructor(max, node_count, zero_indexing = true){
        if(!Number.isInteger(max)) throw new Error("max must be a number")
        if(!Number.isInteger(node_count)) throw new Error("node_count must be a number")

        if(typeof(zero_indexing) != "boolean") throw new Error("zero_indexing must be a boolean.")

        if(max <= 0) throw new Error("Max must be greater than zero")
        if(node_count <= 0) throw new Error("node_count must be greater than zero")

        this.#max = max
        this.#zero_indexing = zero_indexing
    
         for(let i = 0; i < node_count; i++){
                this.getList().push(new INode(this.getMax(), zero_indexing))
            }
    
            this.getList().forEach((v,i,a) => {
                if(!(v instanceof INode)) throw new Error("v is not and instance of INode.")
                    //if i == 0, it is the last element of the network, (first in the array since were going right to left) flag it to have no next node, if the network has more than one element, set its revious node to the next element in the array
                if(i == 0) {
                    v.setNoNextNode()
                    if(a.length > 1) v.setPreviousNode(a[i+1])
                    return
                }
                
                //if i == a.length - 1 it is the first element of the network (last in the array since were going right to left), flag it to have no previous node a.lenght - 2 checks if there is at least 2 elements in the array (total) if there is sets the next node of the first node to the second to last element in the array which would be the second element in the network (Right to left)
                if(i == (a.length - 1)){
                    v.setNoPreviousNode()
                    if((a.length - 2) >= 0) v.setNextNode(a[i-1])
                    return
                }

                v.setNextNode(a[i-1])
                v.setPreviousNode(a[i+1])
            })
    }

    #list = []
    #max
    #zero_indexing

    /**
     * returns whether zero ndexing is enabled
     * @returns {boolean}
     */
    zeroIndexingEnabled(){
        return this.#zero_indexing
    }

    /**
     * returns the array of nodes
     * @returns {Array}
     */
    getList(){
        return this.#list
    }

    /**
     * returns the maximum value of the nodes wthin the Network
     * @returns {number}
     */
    getMax(){
        return this.#max
    }

    /**
     * returns the number of nodes within the network
     * @returns {number}
     */
    getNodeCount(){
        return this.#list.length
    }

    /**
     * 
     * @returns 
     */
    getOutComes(){
        //this only returns the amount of outcoes the user asked for. there will always be more outcomes because of the way we made this, but the user can still specify how far they want to go with the increentN times.
        return Math.pow(this.#max + ((this.#zero_indexing == true)? 1 : 0), this.getNodeCount())
    }



    resetList(){
        this.getList().forEach(v => v.resetValue())
    }

    /**
     * 
     * @param {number} node_id 
     * @returns 
     */
    getNode(node_id){
        if(!Number.isInteger(node_id)) throw new Error("Node ID is not an number")

        if(node_id > (this.getNodeCount() - 1)|| node_id < 0) throw new Error("Invalid node id. It does not exist in the Network.")

        let node = this.#list[(node_id)]
        return ( node instanceof INode) ? node : null
    }

    getNodeValueArr(){
        return this.#list.map((v) => {
            if((v instanceof INode)){
                return v.getValue()
            }
        })
    }

    nodesMaxedOut(){
        return this.#list.every((v) => {
            if((v instanceof INode)) return v.isAtMax()
        })
    }

    incrementList(){
         if(!this.nodesMaxedOut()){
            let last_node = this.getList()[this.getList().length - 1]
            if(!(last_node instanceof INode)) throw new Error("First node is not an instance of INode")
            last_node.incrementNode()
        }
    }

    incrementListN(times){
        if(!(Number.isInteger(times))) throw new Error("Times is not an integer.")
            for(let i = 0; i < times; i++) this.incrementList()
    }
}

/**
 * Follows LIFO, (Last in First Out) The last element to go into the stack will be first to be out. can be used for things like undo operations, purel for example
 */
class HStack{
    /**
     * type and size are optional
     * Type allows you to use a generic to only allow specific objects to be placed in the stack. you must pass in a class
     * @param {Object | undefined} type 
     * @param {number | undefined} size 
     */
    constructor(type,size){
        if(!isClass(type) && type != undefined) throw new Error("type must be an class.")
        if(!Number.isInteger(size) && size != undefined) throw new Error("size must be an number.")

        this.#generic = type
        this.#size = size
    }

    #list = []
    #generic
    #size 

    /**
     * returns a copy of the stack
     * @returns {unknown[]}
     */
    peekList(){
        return Array.from(this.#list)
    }

    /**
     * returns the number of elements on the stack
     * @returns {number}
     */
    getElementCount(){
        return this.#list.length
    }

    /**
     * returns  the next element on the Stack without removing it/ if there is no element returns undefined
     * @returns {unknown | undefined}
     */
    peek(){
        return this.#list[this.getElementCount() - 1]
    }

    /**
     * removes the last element from an array and returns it. If the stack is empty, undefined is returned and the stack is not modified
     * @returns {unknown | undefined}
     */
    pop(){
        return this.#list.pop()
    }

    /**
     * push a new element onto the stack
     * if the element is primitive the stack will autoconvert to the clas accodingly, however there is no support for objects, undefined, null and functions.
     * @param {unkown} element 
     */
    push(element){
        //if a primitive value was pushed into the stack we can assume that the generic is a Primitive wrapper
        try {
            
            if(typeof element == "boolean" && this.#generic == Boolean){ element = new Boolean(element)}
            else if(typeof element == "number" && this.#generic == Number){ element = new Number(element)} else if(typeof element == "string" && this.#generic == String){element = new String(element)} else if (typeof element == "bigint" && this.#generic == BigInt) {element = new BigInt(element)} else if(typeof element == "symbol" && this.#generic == Symbol) {element = new Symbol(element)}

            if(this.#generic != undefined && !(element instanceof this.#generic)) throw new Error()
        
        } catch (error) {

            throw new Error("Element must be instansiated from the class: " + this.#generic + " received ["  + (["boolean","number","bigint","string","symbol"].includes(typeof element) ? typeof element : element) + "].")
        }
        
        if(this.#size != undefined && (this.getElementCount() + 1) > this.#size) throw new Error("element exceeds Stacks Maximum size which is " + this.#size + " elements.")
        this.#list.push(element)
    
    }

    /**
     * 
     * @returns {string} A stringified version of the stacklist, ca be parsed back into an array.
     */
    toString(){
        return JSON.stringify(this.peekList())
    }
}

/**
 * Queue's support the FIFO (First in First Out) the frst items to come into the queue are the first ones to leave
 */
class HQueue{
    /**
     * type and size are optional
     * Type allows you to use a generic to only allow specific objects to be placed in the stack. you must pass in a class
     * @param {Object | undefined} type 
     * @param {number | undefined} size 
     */
    constructor(type,size){
        if(!isClass(type) && type != undefined) throw new Error("type must be an class.")
        if(!Number.isInteger(size) && size != undefined) throw new Error("size must be an number.")

        this.#generic = type
        this.#size = size
    }
    #list = []
    #generic
    #size
    /**
     * returns a copy of the queue
     * @returns {unkown[]}
     */
    peekList(){
        return Array.from(this.#list)
    }

    /**
     * returns the number of elements in the Queue
     * @returns {number}
     */
    getElementCount(){
        return this.#list.length
    }

    /**
     * returns the first element on the Queue without removing it from the Queue
     * @returns {unknown | undefined}
     */
    peek(){
        return this.#list[0]
    }


    /**
     * ushes an element into the Queue
     * @param {unknown} element 
     */
    push(element){
         //if a primitive value was pushed into the stack we can assume that the generic is a Primitive wrapper
        try {
            
            if(typeof element == "boolean" && this.#generic == Boolean){ element = new Boolean(element)}
            else if(typeof element == "number" && this.#generic == Number){ element = new Number(element)} else if(typeof element == "string" && this.#generic == String){element = new String(element)} else if (typeof element == "bigint" && this.#generic == BigInt) {element = new BigInt(element)} else if(typeof element == "symbol" && this.#generic == Symbol) {element = new Symbol(element)}

            if(this.#generic != undefined && !(element instanceof this.#generic)) throw new Error()
        
        } catch (error) {

            throw new Error("Element must be instansiated from the class: " + this.#generic + " received ["  + (["boolean","number","bigint","string","symbol"].includes(typeof element) ? typeof element : element) + "].")
        }
        
        if(this.#size != undefined && (this.getElementCount() + 1) > this.#size) throw new Error("element exceeds Queue's Maximum size which is " + this.#size + " elements.")
        this.#list.push(element)
    }

    /**
     * removes the first element in the Queue and returns it.
     * @returns {unknown | undefined}
     */
    pull(){
        return this.#list.shift()
    }

}

/**
 * An interface for the intenal workings of the HOptonList 
 */
export class HOptionListInterface{
    constructor(){
    }

    #list = []
    /**
     * @heavenly05
     * adds an option to the OptionList, returns true if successful
     * @param {HOption} option 
     * @returns {boolean}
     * @throws {Error}
     */
    addOption(option){
        if(!(option instanceof HOption)) throw new Error("option must be a instance of HOption")
        this.#list.push(option)
        return true
    }


    /**
     * @heavenly05
     * removes an option from the Option list based on the index 
     * @param {number} index 
     */
    removeOption(index){
        if(!(Number.isInteger(index))) throw new Error("index must be a number")
        this.#list[index] = undefined
    }

    /**
     * @heavenly05
     * returns a copy of the list of options.
     * @returns {HOption[]}
     */
    getOptions(){
        return this.#list.filter(v => v != undefined && v instanceof HOption)
    }

    /**
     * @heavenly05
     * returns decorated options in a format like : [n] - option name
     * @returns {HOption[]}
     */
    getDecoratedOptions(){
        return this.getOptions().map((v,i) => {
            return new HOption(`[${i + 1}] - ${v.getName()}`, v.getAction())
        })
    }

    /**
     * returns the length of the option list
     * @returns {number}
     */
    getOptionCount(){
        return this.getOptions().length
    }

    /**
     * @heavenly05
     * returns an option from the option list, return if the option does not exist
     * @param {number} index 
     * @returns {HOption | undefined}
     */
    getOption(index){
        if(!(Number.isInteger(index))) throw new Error("index must be a number")
        
        return this.#list[index]
    }

    /**
     * @heavenly05
     * returns a stringified version of the OptionList
     * @returns {string}
     */
    toString(){
        let string = ""
        this.getDecoratedOptions().forEach(v => string += (v.getName() + "\n"))
        return string
    }
}

/**
 * @heavenly05
 * A class meant to create an Option object to go with an OptionList
 */
export class HOption{
    /**
     * @heavenly05
     * creates a new option, containing a name for the option and an action. when performing an action the name is passed in as a parameter to the action function
     * @param {string} name 
     * @param {(args : any)()} action 
     */
    constructor(name, action){
        if(typeof name != 'string') throw new TypeError("name must be a string")
        if(typeof action != 'function' && action != undefined) throw new TypeError("action must be an function or must be undefined")
        
        this.#name = name
        this.#action = action
    }

    #name
    #action

    /**
     * @heavenly05
     * returns the name of the option
     * @returns {string}
     */
    getName(){
        return this.#name
    }

    /**
     * @heavenly05
     * Runs the specified action for the option, args will be passed into the action, if its not undefined
     * @param {any} args 
     * @returns {unknown}
     */
    performAction(args){
        if(this.#action != undefined) return this.#action(args)
    }

    /**
     * returns an options specified action.if not option is specified wull return undefined
     * @returns {() => unknown| undefined}
     */
    getAction(){
        return this.#action
    }


}

/**
 * An abstract like class, You can directly create an options list from it or you can prebuild a list by creating a class and calling super in the constructor passing in the options as arguments where it will be applied into an internal options interface
 */
export class HOptionList{
    /**
     * Takes in an array of HOptions to pass into the HOptionInterface.
     * @param {HOption[]} options 
     */
    constructor(options){
        if(!Array.isArray(options)) throw new Error("Options must be an array")
        this.#HOptionInterface = new HOptionListInterface()

        options.filter((v) => v instanceof HOption).forEach((v) => this.#HOptionInterface.addOption(v))
    }
    #HOptionInterface
    
    /**
     * returns an arrayof  the options in the list.
     * @returns {HOption[]}
     */
    getOptions(){
        return this.#HOptionInterface.getOptions()
    }

    /**
     * @heavenly05
     * returns decorated options in a format like : [n] - option name
     * @returns {HOption[]}
     */
    getDecoratedOptions(){
        return this.#HOptionInterface.getDecoratedOptions()
    }

    /**
     * returns the number of options within the list.
     * @returns {number}
     */
    getOptionCount(){
        return this.#HOptionInterface.getOptionCount()
    }

    /**
     * @heavenly05
     * returns an option from the option list, return if the option does not exist
     * @param {number} index 
     * @returns {HOption | undefined}
     */
    getOption(index){
        if(!(Number.isInteger(index))) throw new Error("index must be a number")
        return this.#HOptionInterface.getOption(index)
    }

    /**
     * @heavenly05
     * returns a stringified version of the OptionList
     * @returns {string}
     */
    toString(){
        return this.#HOptionInterface.toString()
    }
    
}


export function sayHello(name){
    console.log("hello, " + name + "!")
}


//define your utilities here

/**
 * returns the greatest common factor among an array of numbers.
 * @param {number[]} list1
 * @param {...number} list2 
 * 
 * @returns {number}
 */
export function getGCF(list1 , ...list2){
    if(!Array.isArray(list1)) throw new Error("List must be an array")
    list1 = list1.filter(v => Number.isInteger(v))
    list2 = list2.filter(v => Number.isInteger(v))
    let full_list = joinArrs(list1, list2).sort((a,b) => a - b)

    for(let i = full_list[0]; i > 0; i--){
        if(full_list.every(v => Number.isInteger(v / i))) return i
    }
}

/**
 * Applies the greatest common factor among an array of numbers. divides the numbers by their gcf and returns the array
 * @param {number[]} list1
 * @param {...number} list2 
 * 
 * @returns {number[]}
 */
export function applyGCF(list1 , ...list2){
if(!Array.isArray(list1)) throw new Error("List must be an array")
    list1 = list1.filter(v => Number.isInteger(v))
    list2 = list2.filter(v => Number.isInteger(v))
    return joinArrs(list1, list2).map((v, i, a) => (v / getGCF(a)))
}

/**
 * returns the decimal part of a number
 * @param {number} number
 * @returns {number}
 */
export function getDecimal(number){
    if(typeof number != 'number') throw new Error("number must be a number")

    number = ((Number.isInteger(number)) ? number.toFixed(1) : number).toString()
    return parseInt(number.slice(number.lastIndexOf(".") + 1))

}

/**
 * Converts a value to a NDC (Normal Device Coordinate) baxed on the minimum and max value
 * @param {number} value 
 * @param {number} max 
 * @param {number} min 
 * 
 * @returns {number}
 */
export function valueToNDC(value, max, min){
    if(typeof value != "number") throw new Error("value must be a number")
    if(typeof max != "number") throw new Error("max must be a number")
    if(typeof min != "number") throw new Error("min must be a number")
    return ((value)  / (max - min))
}

/**
 * Converts  a NDC (Normal Device Coordinate) into a normal number based on minimum and max.
 * @param {number} value 
 * @param {number} max 
 * @param {number} min 
 * 
 * @returns {number}
 */
export function NDCToValue(value, max, min){
    if(typeof value != "number") throw new Error("value must be a number")
    if(typeof max != "number") throw new Error("max must be a number")
    if(typeof min != "number") throw new Error("min must be a number")
    
    return (value * (max - min))
}

/**
 * converts a number into a percentage of another number
 * @param {number} value 
 * @param {number} total
 */
export function valueToPercent(value, total){
    if(typeof value != "number") throw new Error("value must be an number.")
    if(typeof total != "number") throw new Error("total must be an number.")

    return (value / total)
}

/**
 * converts a percentage of another number into a value
 * @param {number} percent
 * @param {number} total 
 */
export function percentToValue(percent, total){
    if(typeof value != "number") throw new Error("value must be an number.")
    if(typeof total != "number") throw new Error("total must be an number.")
    
    return (percent * total)
}

// export class Vec

export class Vector2DWrapperClass{
    /**
     * 
     * @param {number} x 
     * @param {number} y 
     */
    constructor(x,y){
        this.#vector_interface = new Vector2DInterface(x,y)
    }

    #vector_interface
    /**
     * 
     * @returns {Vector2DInterface}
     */
    getInterface(){
        return this.#vector_interface
    }

    toString(){
        return this.getInterface().toString()
    }

     /** 
    * @param {Vector2DWrapperClass} vector1
    * @param {Vector2DWrapperClass} vector2
    * 
    * @returns {Vector2DWrapperClass}
    */
    static combineVectors(vector1, vector2){
        if(!(vector1 instanceof Vector2DWrapperClass)) throw new Error("vector1 must be a Vector2DWrapperClass object")

        if(!(vector2 instanceof Vector2DWrapperClass)) throw new Error("vector2 must be a Vector2DWrapperClass object")

        return new Vector2DWrapperClass(vector1.#vector_interface.getX() + vector2.#vector_interface.getX(), vector2.#vector_interface.getY() + vector1.#vector_interface.getY())
    }
}

export class Dimension2D extends Vector2DWrapperClass{

    /**
     * 
     * @param {number} width 
     * @param {number} height 
     */
    constructor(width, height){
        super(width,height)
    }
/**
     * 
     * @returns {number}
     */
    getWidth(){
        return this.getInterface().getX()
    }

    /**
     * 
     * @returns {number}
     */
    getHeight(){
        return this.getInterface().getY()
    }

    /**
     * 
     * @param {number} v 
     */
    setWidth(v){
        this.getInterface().setX(v)
    }
    /**
     * 
     * @param {number} v 
     */
    setHeight(v){
        this.getInterface().setY(v)
    }

    /**
     * 
     * @param {Vector2DWrapperClass} vector_wrapper 
     * @returns { Dimension2D }
     */
    static parseDimension2D(vector_wrapper){
        if(!(vector_wrapper instanceof Vector2DWrapperClass)) throw new Error("vector_wrapper must be an instance of Vector2DWrapperClass")

        return new Dimension2D(vector_wrapper.getInterface().getX(), vector_wrapper.getInterface().getY())
    }

}

export class Vector2D extends Vector2DWrapperClass{

     /**
     * 
     * @param {number} width 
     * @param {number} height 
     */
    constructor(width, height){
        super(width,height)
    }

    /**
     * 
     * @returns {number}
     */
    getX(){
        return this.getInterface().getX()
    }

    /**
     * 
     * @returns {number}
     */
    getY(){
        return this.getInterface().getY()
    }

    /**
     * 
     * @param {number} v 
     */
    setX(v){
        this.getInterface().setX(v)
    }
    /**
     * 
     * @param {number} v 
     */
    setY(v){
        this.getInterface().setY(v)
    }

    /**
     * 
     * @param {Vector2DWrapperClass} vector_wrapper 
     * @returns { Vector2D }
     */
    static parseVector2D(vector_wrapper){
        if(!(vector_wrapper instanceof Vector2DWrapperClass)) throw new Error("vector_wrapper must be an instance of Vector2DWrapperClass")

        return new Vector2D(vector_wrapper.getInterface().getX(), vector_wrapper.getInterface().getY())
    }
}

export class Vector2DInterface{
    /**
     * 
     * @param {number} x 
     * @param {number} y 
     */
    constructor(x ,y){
        if(typeof x != "number" && x != undefined) throw new Error("x must be a number")
        if(typeof y != "number" && y != undefined) throw new Error("y must be a number")

        this.#x_value = (x == undefined) ? 0 : x
        this.#y_value = (y == undefined) ? 0 : y
    }

    #x_value
    #y_value

    /**
     * 
     * @returns {number}
     */
    getX(){
        return this.#x_value
    }
    
    /**
     * retuns the yValue of this vector
     * @returns {number}
     */
    getY(){
        return this.#y_value
    }

    /**
     * 
     * @param {number} x 
     */
    setX(x){
        if(typeof x != "number") throw new Error("x must be a number")
        this.#x_value = x
    }

    /**
     * 
     * @param {number} y 
     */
    setY(y){
        if(typeof y != "number") throw new Error("y must be a number")
        this.#y_value = y
    }

    /**
     * 
     * @returns {[]}
     */
    toArr(){
        return [this.getX(),this.getY()]
    }

    
    /**
     * stringifys the content in [(x) x (y)] format
     * @returns {string}
     */
    toString(){
        return `${this.getX()} x ${this.getY()}`
    }

    
}


export class RGB{
    /**
     * Creates an RGB object to represent the specific color values of pixels on a screen. if a value is less than zero or undefined it will be defaulted to 0. If a value is greater than 255 it will scale back down to 255.
     * @param {number | undefined} red 
     * @param {number | undefined} green 
     * @param {number | undefined} blue 
     */
    constructor(red, green, blue){
        if(typeof red != "number" && red != undefined) throw new Error("Red must be an number!")

        if(typeof green != "number" && green != undefined) throw new Error("Green must be an number!")

        if(typeof blue != "number" && blue != undefined) throw new Error("Blue must be an number!")

        this.#colors = [(red == undefined || red < 0) ? 0 : (red > 255) ? 255 : red ,(green == undefined || green < 0) ? 0 : (green > 255) ? 255 : green , (blue == undefined || blue < 0) ? 0 : (blue > 255) ? 255 : blue]

    }

    #colors = []

    /**
     * returns the rgb value of the red color
     * @returns {number}
     */
    getRed(){
        return this.#colors[0]
    }

     /**
     * returns the rgb value of the green color
     * @returns {number}
     */
    getGreen(){
        return this.#colors[1]
    }

    /**
     * returns the rgb value of the blue color
     * @returns {number}
     */
    getBlue(){
        return this.#colors[2]
    }

    /**
     * sets the rgb value of the red color
     * @param {number} val
     */
    setRed(val){
        this.#colors[0] = ((val == undefined || val < 0) ? 0 : (val > 255) ? 255 : val)
    }

    /**
     * sets the rgb value of the green color
     * @param {number} val
     */
    setGreen(val){
        this.#colors[1] = ((val == undefined || val < 0) ? 0 : (val > 255) ? 255 : val)
    }

    /**
     * sets the rgb value of the blue color
     * @param {number} val
     */
    setBlue(val){
        this.#colors[2] = ((val == undefined || val < 0) ? 0 : (val > 255) ? 255 : val)
    }

    /**
     * returns a representaion of the rgb in object notation
     * @returns {{red : number, green : number, blue : number}}
     */
    getColorOBJ(){
        return {
            red : this.getRed(),
            green : this.getGreen(),
            blue : this.getBlue()
        }
    }

    /**
     * returns an array containing the RGB values
     * @returns {number[3]}
     */
    getColorArr(){
        return this.#colors
    }

    /**
     * formats the rbg into proper notation
     * @returns {string}
     */
    formatToString(){
        return `rgb(${this.getRed()},${this.getGreen()},${this.getBlue()})`
    }

    /**
     * parses an object or array into a RGB instance. does not check for undefined values. if any rgb value is undefined it will default to zero.
     * 
     * @param {number[3] | { red : number, green : number, blue : number}} object 
     * @returns 
     */
   static parseRGB(object){
        if(Array.isArray(object)){
            return new RGB(object[0], object[1], object[2])
        }else if(typeof object == "object"){
            return new RGB(object["red"], object["green"], object["blue"])
        }

        throw new Error("RGB must be an array or object")
        
    }

}



export class Rectangle{
    /**
     * 
     * @param {Vector2D} position 
     * @param {Dimension2D} dimension 
     * @param {RGB} color 
     */
    constructor(position, dimension, color){
        if(!(position instanceof Vector2D)) throw new Error("position must be a Vector2D")

        if(!(dimension instanceof Dimension2D)) throw new Error("dimensionb must be a Dimension2D")
        
        this.#position = position
        this.#dimension = dimension
        this.#color = (color) ? color : new RGB()
    }

    #position
    #dimension
    #color


    /**
     * 
     * @returns {Vector2D}
     */
    getPosition(){
        return this.#position
    }

    /**
     * 
     * @returns {Dimension2D}
     */
    getDimensions(){
        return this.#dimension
    }

    /**
     * 
     * @returns {RGB}
     */
    getRGB(){
        return this.#color
    }

    /**
     * 
     * @returns {number}
     */
    getX(){
        return this.#position.getX()
    }

    /**
     * 
     * @returns {number}
     */
    getY(){
        return this.#position.getY()
    }

    /**
     * 
     * @returns {number}
     */
    getWidth(){
        return this.#dimension.getWidth()
    }

    /**
     * 
     * @returns {number}
     */
    getHeight(){
        return this.#dimension.getHeight()
    }

    /**
     * 
     * @param {Vector2D} position 
     */
    setPosition(position){
        if(!(position instanceof Vector2D)) throw new Error("position must be a Vector2D")

        this.#position = position
    }

    /**
     * sets the x position
     * @param {number} value 
     */
    setX(value){
        this.#position.setX(value)
    }

    /**
     * sets the y position
     * @param {number} value 
     */
    setY(value){
        this.#position.setY(value)
    }

    /**
     * sets the width
     * @param {number} value 
     */
    setWidth(value){
        this.getDimensions().setWidth(value)
    }

    /**
     * sets the height
     * @param {number} value 
     */
    setHeight(value){
        this.getDimensions().setHeight(value)
    }


    /**
     * 
     * @param {Dimension2D} dimension 
     */
    setDimensions(dimension){
        if(!(dimension instanceof Dimension2D)) throw new Error("dimensionb must be a Dimension2D")

        this.#dimension = dimension
    }

    /**
     * 
     * @param {RGB} color 
     */
    setRGB(color){
        this.#color = color
    }

    /**
     * 
     * @param {number} value 
     */
    increaseX(value){
        this.#position.setX(this.#position.getX() + value)
    }

    /**
     * 
     * @param {number} value 
     */
    increaseY(value){
        this.#position.setX(this.#position.getX() + value)
    }

    /**
     * 
     * @param {number} value 
     */
    increaseY(value){
        this.#position.setY(this.#position.getY() + value)
    }

    /**
     * 
     * @param {number} value 
     */
    increaseHeight(value){
        this.#dimension.setHeight(this.#dimension.getHeight() + value)
    }

    /**
     * 
     * @param {number} value 
     */
    increaseWidth(value){
        this.#dimension.setWidth(this.#dimension.getWidth() + value)
    }



    

    /**
     * returns a boolean value based on whether this rectangle is intersecting another rectangle
     * @param {Rectangle} rect
     * @returns { boolean }
     */
    localIntersectsWith(rect){
        return Rectangle.intersectsWith(this, rect)
    }

    /**
     * returns a boolean value based on whether this rectangle is intersecting another rectangle
     * @param {Rectangle} rect1
     * @param {Rectangle} rect2
     * @returns { boolean }
     */
    static intersectsWith(rect1, rect2){
        if(!(rect1 instanceof Rectangle)) throw new Error("Rect1 must be a rectanlge")

        if(!(rect2 instanceof Rectangle)) throw new Error("Rect2 must be a rectanlge")
        
        const right_side_of_rect = (rect2.getX() + rect2.getWidth())

        const bottom_of_rect = (rect2.getY() + rect2.getHeight())
        
        //if either of the sides are within the same x values
       

        if((rect1.getX() <= right_side_of_rect) && (rect1.getX() + rect1.getWidth()) >= rect2.getX()&& (rect1.getY() + rect1.getHeight()) >= rect2.getY() && (rect1.getY()) <= rect2.getY() + rect2.getHeight()){
            return true
        }
        
        return false
    }
}


/**
 * sorts through an array of strings by comparing them one by one againt each other until the array is sorted.
 * @param {string[]} arr 
 * @param {boolean} [ascending=false] 
 */
export function bubble_sort_strings(arr, ascending = false){
    if(!Array.isArray(arr)) throw new Error("arr is not an Array")
    if(typeof ascending != "boolean") throw new Error("ascending must be a boolean")
    let temp = arr.filter(v => typeof v == "string")

    arr = temp.map((v, i) => {

        //first turns every string in the array into a array of string

        //then it goes overy every letter in the array turning it into a a character code

        //ex: heaven - ["h", "e", "a", "v", "e", "n"] -> [1 ,2 ,3 ,3 , 5, 5...]

        //it then multiplies the character code by the index of the letter in the array, if the index is 0 it transforms to 1.

        

        //the character codes are then added together to give you one unique value for the string

        //we then attempt to shrink the numbers by each dividing by the gcf of all the numbers, if there is one, if there isnt the array will not be affected.
        return stringToUniqueNumber(v)
    })
    //we then sort the array with bubble sort and rematch all values based on the character code total. 
    arr = applyGCF(arr)



    arr = bubble_sort_numbers(arr, ascending).map(v => v.toString())

    temp.forEach((v, i) => {
        let id = stringToUniqueNumber(v).toString()
         arr[arr.lastIndexOf(id)] = v
    })

    return arr
    
     


    
}

/**
 * Turns a string into a unique number by converting it into an array, he it converts every letter into its corresponding character code . It then multiplies that character code by its position in the created array. the greatest common factor of the string is found and if there is one then every number will be divided by it to keep the numbers low. Then the rray of characters will eb added up together to return the final value/ 
 * @param {string} subject 
 * @returns {number}
 */
function stringToUniqueNumber(subject){
    if(typeof subject != "string") throw new Error("subject must be a string")
    return applyGCF(stringToArray(subject).map((p, m) => (p.charCodeAt(0) * ((m == 0 ) ? 1 : m )))).reduce((acc,curr) => acc += curr, 0)
}


/**
 * converts a number into a word
 * @author Heaven Williams
 * @param {number | bigint} subject 
 * @returns {string}
 */
export function numberToWord(subject){
    if(typeof subject != "bigint" && typeof subject != "number") throw new Error("number must be a big int or number") 
    if(typeof subject != "bigint") subject = BigInt(subject)
    
    
    const subject_length = subject.toString().length

    const groups = Math.ceil(subject_length / 3)

    let word = "" 

    for(let i = (subject_length); i > 0; i--){
        let numb = ""
    
        //keeps track of which group place this number belongs to, e.g, hundreds, thousands etc
        let group = Math.ceil(i / 3)

        //keeps track which place this number has in its group, e.g, hundreds, tens, ones.
        let place = ((i % 3) == 0) ? 3 : (i % 3)

        //keeps track of which part of number we are on.
        const sample = Number.parseInt((stringToArray(subject.toString()).reverse())[i - 1])
        const next_sample = Number.parseInt((stringToArray(subject.toString()).reverse())[i - 2])
        const last_sample = Number.parseInt((stringToArray(subject.toString()).reverse())[i - 3])

        

        const next_sample_is_zero = (next_sample == 0)
        const last_sample_is_zero = (last_sample == 0)
    
        if(sample != 0){
            if((place == 3)){
                numb += getSpecialOnesCase(sample) + " hundred" + (((last_sample_is_zero && groups > 1) ? " " + getSpecialPlaceCase(group) : ""))
        }else if(place == 2){
            numb += (((sample == 1) && !next_sample_is_zero) ? (getSpecialTeensCase(next_sample)) : (next_sample_is_zero && group > 1) ? (getSpecialTensCase(sample) + ((group > 1) ? " "  + getSpecialPlaceCase(group) : "")): (getSpecialTensCase(sample)))
            if(((sample == 1))) i--;
        }else{
            numb += (getSpecialOnesCase(sample)) + ((group > 1) ? " "  + getSpecialPlaceCase(group) : "")
        }

        }else if(sample == 0 && group == 1 && subject_length == 1){
            numb = "zero"
        }
    
        word += (numb.trim() != "") ? (numb + " ") : ""
    }

    return word
}

export function getSpecialOnesCase(key){
    return ([
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine"
    ])[key - 1]
}

export function getSpecialTeensCase(key){
    return ([
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen"
    ])[key - 1]
}

export function getSpecialTensCase(key){
    return ([
        "ten",
        "twenty",
        "thirty",
        "fourty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety"
    ])[key - 1]
}

export function getSpecialPlaceCase(key){
    return ([
  "hundred",
  "thousand",
  "million",
  "billion",
  "trillion",
  "quadrillion",
  "quintillion",
  "sextillion",
  "septillion",
  "octillion",
  "nonillion",
  "decillion",
  "undecillion",
  "duodecillion",
  "tredecillion",
  "quattuordecillion",
  "quindecillion",
  "sexdecillion",
  "septendecillion",
  "octodecillion",
  "novemdecillion",
  "vigintillion",
  "centillion"
]
)[key - 1]
}










export {asciiRange, generateRandomArr, generateRandomMixedString, generateRandomNumber,generateRandomString,return_sum, getDate, INode, INodeList, charCodeArrToChar, secondsToString,indexArrN, joinArrs,decimalToBinary, decArrToBinArr,arraysHaveSameContent, multipleArraysHaveSameContent,countOccurences, joinArrayOfArrays, InstanceWrapper, stringToArray, stringToByte, JSONToByte, anyToByte, byteToChar,bytesToString,byteArrToChars,  arrToBytes, arrayToNumArray, viewToArr, valueInArray, getMean, getVariance, getStdDeviationWV, getSmallestDivisor, getGreatestDivisor, growthFormula, decayFormula, isClass, HStack, HQueue, isPrimitive}

