// TEXT PART

function getText(){

  fetch('text1.txt')
  .then(response=>{
    // console.log(response.text());
    return response.text();
  })
  .then(data=>{
    console.log(data);
  }).catch(error =>{
    console.log(error);
  })
}
// getText();

// JSON PART

function getJson(){
  fetch('products.json')
  .then(response =>{
    return response.json();
  }).then(data=>{
    console.log(data);
  }).catch(error=>{
    console.log(error);
  })
}

// getJson();

// EXTERNAL API
function getExternalApi(){

  fetch('https://www.metaweather.com/api/location/search/?lattlong=36.96,-122.02')
   .then(data => {
       return data.json()
   }).then(users=>{
console.log(users);
       var html="";
       users.forEach(user => {
           html+= `<div>
           <ul class="list-group">
  <li class="list-group-item active">${user.title}</li>
  <li class="list-group-item"> ${user.woeid}</li>
  <li class="list-group-item"> ${user.latt_long}</li>
  <li class="list-group-item"> ${user.distance}</li>
  <li class="list-group-item"> ${user.location_type}</li>
  </ul> 
</div><br><hr><br>
                       
           `;
       });

       document.querySelector('#users').innerHTML = html;
   }).catch(error=>{
       console.log(error);
   })

}

getExternalApi();

  function postExternalApi(){
    const url = "https://jsonplaceholder.typicode.com/posts";

    var data = {
        method : "POST",
        body : JSON.stringify({
            userId : 1,
            title : "sample title",
            body : "sample body"
        }),
        headers : new Headers({
            'content-type':'application/json'
        })
    }
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    // .then(response => response.json())
    // .then(json => console.log(json))
    fetch(url,data)
    .then(res => {
        console.log(res);
    });
}


// postExternalApi();

























