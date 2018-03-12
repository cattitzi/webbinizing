function renderMovie(data){
document.querySelector(".text h1").textContent = data.title;
document.querySelector(".text p").textContent = data.info;
document.querySelector(".image").setAttribute("src", data.imgUrl);

let list ="";
for(let i=0; i<data.actors.legnth; i++){
    list += "<li>" + data.actors[i] + "<li>";
}
document.querySelector(".text ul").innerHTML = list;

renderMovie(movieData);
}