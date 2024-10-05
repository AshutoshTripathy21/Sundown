// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

var elemC = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")
//console.log("#fixed-image")
elemC.addEventListener("mouseenter",function(){
    fixed.style.display = "block"
})
elemC.addEventListener("mouseleave",function(){
    fixed.style.display = "none"
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})



document.getElementById("design").addEventListener("click", function() {
    updateContent("https://images.unsplash.com/photo-1726148153468-0a2da6b480ce?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8", "The design phase focuses on creating visually appealing, user-centric layouts and concepts that effectively communicate ideas, ensuring the project’s aesthetic and functional goals are met.");
});

document.getElementById("project").addEventListener("click", function() {
    updateContent("https://images.unsplash.com/photo-1727388396137-f76921c53059?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D", "The project phase involves planning, organizing, and managing resources to achieve the project's objectives, ensuring timely execution while meeting quality standards and stakeholder expectations.");
});

document.getElementById("execution").addEventListener("click", function() {
    updateContent("https://images.unsplash.com/photo-1727762599399-687374f367c2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D", "Execution is where ideas come to life, transforming plans into reality by implementing the designed processes, managing teams, and delivering results in line with project specifications.");
});

function updateContent(imageSrc, description) {
    document.getElementById("imageDisplay").src = imageSrc;
    document.getElementById("description").innerText = description;
}

var loader = document.querySelector("#loader")
setTimeout(function(){
    loader.style.top = "-100%"
}, 4000)