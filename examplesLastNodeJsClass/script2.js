let imagesArray = []
async function getImageUrl(){
    let workToDo = []
    for(var i = 0; i < 100; i++){
        workToDo.push(fetch("https://picsum.photos/400"))
    }
    try {
        imagesArray = await Promise.all(workToDo)
    }catch (err){
        console.log(err)
    }
    let html = ''; 
    imagesArray.forEach((resp)=>{
        html+= ` <div id="content" class="col">
        <div class="card">
            <img src="${resp.url}" class="card-img-top" alt="...">
          </div>
        </div>`})
        document.getElementById("content").innerHTML = html;    
    
}

getImageUrl();
console.log("test");