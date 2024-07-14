let box = document.querySelectorAll(".box");
let body = document.querySelector("body");

box.forEach((boxes)=>{
    boxes.addEventListener('click',(e)=>{
        switch (e.target.id) {
            case "gray":
                body.style.backgroundColor = e.target.id;
                break;
            case "white":
                body.style.backgroundColor = e.target.id;
                break;
            case "green":
                body.style.backgroundColor = e.target.id;
                break;
            case "yellow":
                body.style.backgroundColor = e.target.id;
                break;    
            default:
                break;
        }
    })
})