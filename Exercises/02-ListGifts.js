 function listGifts(letter) {
    // ¡Tú puedes!
    if(typeof letter === "undefined") return  "Enter a parameter,please.";
    if(typeof letter !== "string") return "Enter a list of gift";

    let giftArray = letter.split(" ")
    let giftObjt = {}

    giftArray.forEach((gift)=>{
        if(gift[0]=== "_" || !gift.length) {
            return ;
        }else if(giftObjt[gift]){
            giftObjt[gift]++
        }else {
            giftObjt[gift] = 1
        }
    })

    return giftObjt
}

   
module.exports = {
    listGifts
}