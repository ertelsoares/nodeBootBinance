const axios = require('axios');
const querystring = require('querystring');



async function publicCall(path, data , method = 'GET'){
  try{
    const qs = data ? `?${querystring.stringify(data)}` : '';
    const result = await axios({
      method,
      url: `${process.env.API_URL}${path}${qs}`
    })
    return result.data;
  }catch(err){
    console.log(err);
  }
}


async  function time(){
    return publicCall('/v3/time');
}
//retorna o livro de compra
//limit = 5 ordem pelo período de 3 segundos
async function depth(symbol = 'BTCUSDT' , limit = 5){
    return publicCall('/v3/depth',{symbol, limit});
}

module.exports = { time , depth }