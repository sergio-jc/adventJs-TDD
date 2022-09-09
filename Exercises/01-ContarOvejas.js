
function contarOvejas (ovejas) {
    // aquí tu magia
    if(typeof ovejas === "undefined") return  "Enter a parameter,please.";
    if( typeof ovejas !== "object" ) return "This is not a list of sheeps";
    if (ovejas === null ) return "null is being received as a parameter" ;
    if (!ovejas[0]) return "There are no sheep in this list" ;

    let redSheepAm = ovejas.filter(sheeps => {
      return (
      sheeps.name.toUpperCase().includes("A") &&
      sheeps.name.toUpperCase().includes("N") &&
      sheeps.color === "rojo" 
      )
    });
      
    return redSheepAm
  }

module.exports = {
    contarOvejas
}