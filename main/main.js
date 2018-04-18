// Write your cade below:
function main(guessNumber) {
    let randomNumbers = number();
    let backups = backup(randomNumbers);
    let getNumbers = getNumber(guessNumber);
    let countA_B = AB(randomNumbers, getNumbers);
    let result = results(countA_B[0], countA_B[1], backups);
    return result;
};
// var guessNumber = 0134;
// console.log(main())

//输出四个数字
function number() {
    var arr_number = new Array()
    function getRandom(min, max)                                                 //开始取数
    {
        var random = Math.random() * (max - min) + min;                               //向下取整
        random = Math.floor(random);
        if (arr_number.length < 4) {
            for (i = 0; i <= arr_number.length; i++) {
                if (random == arr_number[i]) {
                    break;
                }
                else {
                    if (i == arr_number.length) { arr_number.push(random); break; }
                }
            };
            getRandom(0, 10);
        }
    }
    getRandom(0, 10);
    return arr_number;
}

//分解数字所给四位数字
function getNumber(x) {
    let a = (x - x % 1000) / 1000;
    if(a===0){
        let y = x.toString(8);
        let x1 = parseInt(y, 10);
        let b = (x1-x1%100)/100,
        d = x1%10,
        c = (x1-d-b*100)/10
        return [0,b,c,d];
    }else{
        let b = (x - x % 100) / 100 - a * 10,
        c = (x - x % 10) / 10 - a * 100 - b * 10,
        d = x % 10;
        return [a,b,c,d]
    }
};

//获取A、B个数
function AB(collection_a, collection_b) {
    let countA = 0;
    let countB = 0;
    let resultArr = [];
    for (let i = 0; i < 4; i++) {
        if (collection_a[i] === collection_b[i]) {
            countA++;
            resultArr.push(i);
        }
    }

    resultArr.sort((a, b) => b - a);
    for (let i of resultArr) {
        collection_a.splice(i, 1);
        collection_b.splice(i, 1);
    }

    for (let i of collection_a) {
        for (let j of collection_b) {
            if (i === j) {
                countB++;
            }
        }
    }
    return [countA, countB]
}

//备份随机数组
function backup(collection) {
    let beiFen = [];
    for (let i of collection) {
        beiFen.push(i);
    }
    return beiFen;
}

//输出结果
function results(A, B, numbers) {
    let result = '';
    result += A + 'A' + B + 'B';
    let randomNumber = '';
    for (let i of numbers) {
        randomNumber += i;
    }
    let rs = `随机数字：${randomNumber}，游戏结果：${result}。`
    return rs;
}

module.exports = {
    main
}