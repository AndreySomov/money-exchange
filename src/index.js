module.exports = function makeExchange(currency) {
  const obj = {
  	"H": 0,
  	"Q": 0,
  	"D": 0,
  	"N": 0,
  	"P": 0
  }; 
  if(+currency<=0) return {};
  if(+currency>10000) return {error: 
  	"You are rich, my friend! We don't have so much coins for exchange"
  };
  while(currency>=50){
  	obj.H++;
    currency -= 50;
  };
   while(currency>=25){
  	obj.Q++;
    currency -= 25;
  };
   while(currency>=10){
  	obj.D++;
    currency -= 10;
  };
   while(currency>=5){
  	obj.N++;
    currency -= 5;
  };
   while(currency>=1){
  	obj.P++;
    currency -= 1;
  };

  for(let key in obj){
  	if(obj[key] == 0) delete obj[key]; 
  }

  return obj;
}
