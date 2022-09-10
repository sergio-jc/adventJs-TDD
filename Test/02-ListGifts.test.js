const {listGifts} = require("../Exercises/02-ListGifts")
describe("Excercise 2 ; List Gifts",()=>{
    it("you must enter an argument",()=>{
        expect(listGifts()).toBe("Enter a parameter,please.");
    })
    it("should be a gift list",()=>{
        expect(listGifts(4)).toBe("Enter a list of gift")
        expect(listGifts([])).toBe("Enter a list of gift")
        expect(listGifts(null)).toBe("Enter a list of gift")
    })
    it("if all the gifts are invalid, should return an empty object",()=>{
        const carta = '_bici   _coche _playstation'
        expect(listGifts(carta)).toEqual({});
    })
    it("if there are no gifts in the letter, you should return an empty item",()=>{
        expect(listGifts("")).toEqual({});
    })
    it("should return an object with the valid gifts and their amounts",()=>{
        const carta = 'bici coche  balón _playstation bici coche peluche'
        const result = {
            bici: 2,
            coche: 2,
            balón: 1,
            peluche: 1
        }
        expect(listGifts(carta)).toEqual(result)
    })
})