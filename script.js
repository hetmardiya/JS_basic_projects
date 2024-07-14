let form = document.querySelector("form")

document.addEventListener("submit",(e)=>{
    e.preventDefault();

    let height = document.querySelector("#height").value;
    let weight = document.querySelector("#weight").value;
    let result = document.querySelector(".result");

    if(height == '' || height < 0 || isNaN(height)){
        result.innerHTML = "Enter a valid Height..."
    }else if(weight == '' || weight < 0 || isNaN(weight)){
        result.innerHTML = "Enter a valid Weight..."
    }else{
        let bmi_result = (weight / ((height*height)/10000)).toFixed(2);
        result.innerHTML = `Your BMI is ${bmi_result}`;
    }
})