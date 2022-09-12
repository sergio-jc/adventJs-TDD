function createXmasTree(height) {
    // ¡Y no olvides también poner los turrones
    if(typeof height === "undefined") return  "Enter a parameter,please.";
    if(typeof height !== "number") return "Enter a valid number";
    if(height % 1 !== 0) return "you can't pass a float number as a parameter"
    let tree = [];
    let space = 0
    while(height>=1){
      let hola ="_".repeat(space)+ "*".repeat(height*2-1) + "_".repeat(space)
      tree.unshift(hola)
      height--
      space++
    }
    let trunk = "_".repeat(space-1) +"#"+"_".repeat(space-1)
    tree.push(trunk)
    tree.push(trunk)
    return tree.join("\n")
  }

module.exports={
    createXmasTree
}