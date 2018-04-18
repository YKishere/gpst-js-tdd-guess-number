const main = require('../main/main');

describe('main()', () => {

  it('系统给出"1234"，用户输入"1234"', function () {
    for (var i = 0; i < 10000; i++) {
      let result = main.main(1234);
      let patt = /1234/g;
      if (patt.test(result)) {
        let rs = '随机数字：1234，游戏结果：4A0B。';
        expect(result).toEqual(rs);
        break;
      } else {
        continue;
      }
    };

    // it('系统给出"1234"，用户输入"4321"', function () {
    //   for (var i = 0; i < 10000; i++) {
    //     let result = main.main(4321);
    //     let patt = /1234/g;
    //     if (patt.test(result)) {
    //       let rs = '随机数字：1234，游戏结果：0A4B。';
    //       expect(result).toEqual(rs);
    //       break;
    //     } else {
    //       continue;
    //     }
    //   }

  });

  // it('系统给出"1234"，用户输入"4321"', function() {
  //   var result = sum;
  //   expect(result).toEqual("0A4B");
  // });
});