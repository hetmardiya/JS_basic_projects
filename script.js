let no_of_words = document.querySelector("#no_of_words");
let generate_button = document.querySelector("button");
let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let generate_paragraph = (n)=>{
    let text = "";
    for(let i =0 ; i < n ; i++){
        let random = (Math.random() * (letters.length - 1)).toFixed(0);
        text += letters[random]
    }
    return text;
}


let getData = ()=>{
    if(no_of_words.value){
        let container = document.querySelector(".container")
        let p = document.createElement('p');
        p.setAttribute('class', 'myPara');

        let data = "";
        for (let i = 0; i < no_of_words.value; ++i) {
            data += generate_paragraph((Math.random() * (letters.length - 1)).toFixed(0));
            data += "  ";
        }
        p.innerText = data;
        container.append(p);
        no_of_words.value = null;
    }
}
generate_button.addEventListener('click',getData);