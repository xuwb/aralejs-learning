// root@ubuntu:/var/www/yeomanProj# vi isInteger.js 

/**
 * isInteger
 * @param {Number}
 * @return {Boolean}
 */

function isInteger(num) {
    if(typeof num !=="number") return false;
    var pattern = /^[1-9]\d*$/g;
    return pattern.test(num);
}

describe("This is a integer test!", function(){
    it("Is integer", function() {
        expect(true).toEqual(isInteger(20));
        expect(false).toEqual(isInteger("20"));
        expect(false).toEqual(isInteger(0));
    })
});