let color_Function = function(){
    let hex = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0;i < 6;i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
};
let gi;
let change_Color = function(){
    if(!gi){
        gi = setInterval(() => {
            document.body.style.backgroundColor = color_Function();
        }, 1000);
    }
}
let stop_Color = function(){
    clearInterval(gi)
    gi = null;
}
document.querySelector("#start").addEventListener("click",change_Color);
document.querySelector("#stop").addEventListener("click",stop_Color);