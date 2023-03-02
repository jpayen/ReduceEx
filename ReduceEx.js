const arr3 = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]


function extractValue(arr3, name) {
    return arr3.reduce(function(accumulator, next) {
        accumulator.push(next[name]);
        return accumulator + nextName;
    }, []);

}

function vowelCount(str) {
    const vowels = "aeiou";
    return str.split('').reduce(function(accumulator, next) {
        const newStr = str.tolowerCase();
        if (vowels.indexOf(newStr) !== -1) {
            if (accumulator[newStr]) {
                accumulator[newStr]++;
            }
            else {
                accumulator[newStr] = 1;
            }
        }
        return accumulator
    }, {});
}

function addKeyAndValue(arr3, key, value) {
    return arr3.reduce(function(accumulator, next, i) {
        accumulator[i][key] = value;
        return accumulator;
    }, arr3);
}


function isEven(val){
    return val % 2 === 0;
}
  
const arr5 = [1,2,3,4,5,6,7,8];
  
  
function isLongerThanThreeCharacters(val){
    return val.length > 3;
}
  
const names = ['Elie', 'Colt', 'Tim', 'Matt'];

function partition(array, callback) {
    return array.reduce(function(accumulator, next) {
        if (callback(next)) {
            accumulator[0].push(next);
        }
        else {
            accumulator[1].push(next);
        }
        return accumulator;
    }, [[],[]]);
    
}