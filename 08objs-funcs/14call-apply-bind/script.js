// CALL APPLY BIND

var welcome = function(a,b){
  console.log('welcome '+ this.name + ' are you interested in '+a+' and '+b);
}


var can = { name: 'canbaran'};
var ada = { name: 'adaProVs'};


//parametre almıyorsa apply ve call kullanımı aynıdır.
welcome.call(can,'asp.net','js');
welcome.call(ada,'mvccore','js');

welcome.apply(can,['vueJS','Angular']);
welcome.apply(ada,['React','Jest']);


WelcomeCan = welcome.bind(can); 
WelcomeCan('java','python');

WelcomeAda = welcome.bind(ada);
WelcomeAda('ruby','mongodb');












































