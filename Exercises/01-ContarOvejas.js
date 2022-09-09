
function contarOvejas (ovejas) {
    // aquí tu magia
    if(typeof ovejas === "undefined") return "Enter a parameter,please.";
    if( ovejas === null || 1) return "This is not a list of sheeps";
    
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