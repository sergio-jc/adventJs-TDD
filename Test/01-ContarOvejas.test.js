const {contarOvejas} = require("../Exercises/01-ContarOvejas.js")

describe("Excercise 1 ; Contar ovejas",()=>{
    it("you must enter an argument",()=>{
        expect(contarOvejas()).toBe("Enter a parameter,please.");
    })
    it("should be a list of sheeps",()=>{
        expect(contarOvejas("hola")).toBe("This is not a list of sheeps")
        expect(contarOvejas(5)).toBe("This is not a list of sheeps")
        expect(contarOvejas(null)).toBe("null is being received as a parameter")
    })
    it("should return a list of sheep that are red and have A or N in their names.",()=>{
        const ovejas = [
            { name: 'Noa', color: 'azul' },
            { name: 'Euge', color: 'rojo' },
            { name: 'Navidad', color: 'rojo' },
            { name: 'Ki Na Ma', color: 'rojo'},
            { name: 'AAAAAaaaaa', color: 'rojo' },
            { name: 'Nnnnnnnn', color: 'rojo'}
          ]
        const result = [
            { name: 'Navidad', color: 'rojo' },
            { name: 'Ki Na Ma', color: 'rojo' }
          ]
        expect(contarOvejas(ovejas)).toEqual(result)
    })
})

// gente se pueden registrar con su cuenta educativa y tienen github copilot gratis