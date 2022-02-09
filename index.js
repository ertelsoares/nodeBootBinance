const api = require('./api');

//media de preço 5 ordens no periodo de 3 segundos
setInterval(async ()=>{
    let ordem = await api.depth();
    let soma = (parseFloat(ordem.bids[0][1]) + parseFloat(ordem.bids[1][1]) + 
    parseFloat(ordem.bids[2][1]) + parseFloat(ordem.bids[3][1]) + parseFloat(ordem.bids[4][1]));
    let mediaprecoperiodo = soma/5;
    console.log("Maior preço: " + ordem.bids[0][0] + "\n" +
    "Menor preço: " + ordem.bids[4][0] + "\n" +
    "Media do volume movimentado: " + mediaprecoperiodo);
},process.env.CRAWLER_INTERVAL) 
