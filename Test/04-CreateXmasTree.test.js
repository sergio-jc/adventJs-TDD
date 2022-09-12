const {createXmasTree} = require("../Exercises/04-CreateXmasTree")

describe("Excercise 3 ; createXmasTree",()=>{
    it("you must enter an argument",()=>{
        expect(createXmasTree()).toBe("Enter a parameter,please.");
    })
    it("the parameter should be a number",()=>{
        expect(createXmasTree("s")).toBe("Enter a valid number")
        expect(createXmasTree([])).toBe("Enter a valid number")
        expect(createXmasTree(null)).toBe("Enter a valid number")
        
    })
    it("should not support a float number",()=>{
        expect(createXmasTree(4.5)).toBe("you can't pass a float number as a parameter")
        expect(createXmasTree(2.5)).toBe("you can't pass a float number as a parameter")
        expect(createXmasTree(5.5)).toBe("you can't pass a float number as a parameter")
    })
    it("should draw a valid tree",()=>{
        expect(createXmasTree(5)).toBe('____*____\n___***___\n__*****__\n_*******_\n*********\n____#____\n____#____');
        expect(createXmasTree(3)).toBe('__*__\n_***_\n*****\n__#__\n__#__');
    })
})