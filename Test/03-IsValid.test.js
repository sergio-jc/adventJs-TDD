const {isValid} = require("../Exercises/03-IsValid")

describe("Excercise 3 ; isValid",()=>{
    it("you must enter an argument",()=>{
        expect(isValid()).toBe("Enter a parameter,please.");
    })
    it("should be a gift list",()=>{
        expect(isValid(4)).toBe("Enter a list of gift")
        expect(isValid([])).toBe("Enter a list of gift")
        expect(isValid(null)).toBe("Enter a list of gift")
    })
    it("if parentheses are empty,should return false",()=>{
        expect(isValid("() videogame")).toBeFalsy()
    })
    it("if the parenthesis is wrongly closed it returns false",()=>{
        expect(isValid("peluche (bici [coche bici coche balón")).toBeFalsy()
    })
    it("if it finds '{' ,'}', '[', ']', inside the parentheses,it returns false",()=>{
        expect(isValid("peluche (bici [coche) bici coche balón")).toBeFalsy()
    })
})