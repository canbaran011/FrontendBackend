
// this keyword


//ES5
// let list = {
//   category : 'phone',
//   names : ['Iphone8','Samsung s8', 'Iphone 7'],
//   call : function(){
// var self =this;
//     this.names.map(function(name){
//       console.log(`${self.category} ${name}`);
//     })
//   }
// }

// let list = {
//   category : 'phone',
//   names : ['Iphone8','Samsung s8', 'Iphone 7'],
//   call : function(){

// this.names.map((name)=>{
//   console.log(`${this.category} ${name}`);
// })
  
//     }
//   }

// list.call();


//ES 5
// function Game(){
//   this.live = 0;
//   this.addLive = function(){
//     var self = this;
//     this.OneUp = setInterval(function(){
//       console.log(++self.live);
//     },1000)
//   }
// }

// let player = new Game();
// player.addLive();


// ES 6

function Game(){
  this.live = 0;
  this.addLive = function(){
    var self = this;
    this.OneUp = setInterval(()=>{
      console.log(++self.live);
    },1000)
  }
}

let player = new Game();
player.addLive();




































