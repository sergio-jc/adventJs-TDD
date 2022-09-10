function isValid(letter) {
    // ¡No dejes que el Grinch gane!
    if(typeof letter === "undefined") return  "Enter a parameter,please.";
    if(typeof letter !== "string") return "Enter a list of gift";
    if(letter.includes("()")) return false;
    let insideBrackets = letter.match(/[(]\D+[)]/g)
    if (insideBrackets === null)  return false;
    let otherBrackets = insideBrackets[0].match(/[{}[\]]/g) || 0
    if (otherBrackets.length) return false;

    return true
}

module.exports= {
    isValid
}

// /[(]\D+[)]/g
// [(]\s+?[)]