const {contarOvejas} = require("../Exercises/01-ContarOvejas.js")

describe("Excercise 1 ; Contar ovejas",()=>{
    it("should be a list of sheeps",()=>{
        expect(contarOvejas("hola")).toBe("This is not a list of sheeps")
    })
})

// gente se pueden registrar con su cuenta educativa y tienen github copilot gratis