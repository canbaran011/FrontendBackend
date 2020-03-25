

document.querySelector('#getOne').addEventListener('click', getOne);

document.querySelector('#getAll').addEventListener('click', getAll);

function getOne() {
    var id = document.querySelector('#postid').value;
    var url = "https://jsonplaceholder.typicode.com/posts/" + id;
    var xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.onload = function () {

        if (this.status == 200) {
            // console.log(this.responseText);
            var post = JSON.parse(this.responseText);
            var html = "";

            html += `
                    
                <div class="card m-4 result" style="width: 20rem;">
                <div class="card-header">
                 ${post.id}-${post.title}
                </div>
                <div class="card-body">
                <p class="card-text">
                ${post.body}
                </p>
                </div>
                </div>
                    `;


            document.querySelector('#results').innerHTML = html;
        }


    }

    xhr.send();


}


function getAll() {
    var url = "https://jsonplaceholder.typicode.com/posts";
    var xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.onload = function () {

        if (this.status == 200) {

            console.log(this.responseText);
            
            var posts = JSON.parse(this.responseText);
            var html = "";

            posts.forEach(post => {
                html += `
                    
                <div class="card m-4 result" style="width: 20rem;">
                <div class="card-header">
                            ${post.title}
                </div>
                <div class="card-body">
                <p class="card-text">
                ${post.body}
                </p>
                </div>
                </div>
                    `;
            });

            document.querySelector('#results').innerHTML = html;
        }
    }

    xhr.send();

}







