let submitBtn = document.getElementsByClassName("btn")[0]
let inputData = document.getElementsByName("input")

function submitName(){
    submitBtn.innerText = "Submitted"
    submitBtn.style.backgroundColor = "rgb(17, 220, 21)"
    setTimeout(resetAfterSubmission,1500)
}

function resetAfterSubmission(){
        for (let i=0; i< inputData.length; i++){
            inputData[i].value = ""
        }
        submitBtn.innerText = "Submit"
    submitBtn.style.backgroundColor = "black"
}

function checkEmail(email){
    let verifier1Index = null;  
    let verifier2Index = null;
    for(let i=0; i<email.length; i++){
        if (email[i] === "@"){
            verifier1Index = i;
        }
        else if(email[i] === "."){
            verifier2Index = i;
        }
    }
    if (verifier1Index != null && verifier2Index != null){
        if(verifier2Index - verifier1Index === 2 && verifier2Index !== email.length-1){
            return true
        }
        else{
            return false
        }
    }

}

function warning(){
    document.getElementById("h1").innerText = "Fill your details";
    document.getElementById("h1").style.color = "black";
}

function wrongEmailClassRemover(){
    document.getElementById("email").classList.remove("wrong-details")
}

function wrongDetailsClassRemover(){
    for(let i=0; i<unfilledDataIndex.length; i++){
        let n = unfilledDataIndex[i]
        inputData[n].classList.remove("wrong-details")
    }
    document.getElementById("h1").innerText = "Fill your details"
    document.getElementById("h1").style.color = "black"

}

let unfilledDataIndex = []
function checkInfo(){
    unfilledDataIndex = []
    for(let i= 0; i<inputData.length; i++){
        if (inputData[i].value == ""){
            unfilledDataIndex.push(i)
        }
    }
    if (unfilledDataIndex.length != 0){
        for(let i=0; i<unfilledDataIndex.length; i++){
            let n = unfilledDataIndex[i]
            inputData[n].classList.add("wrong-details")
            document.getElementById("h1").innerText = "Kindly fill all details!"
            document.getElementById("h1").style.color = "rgb(255, 64, 64)"
        }
        setTimeout(wrongDetailsClassRemover,1000)
    }
    else{
        if(checkEmail(document.getElementById("email").value)){
            submitName()
        }
        else{
            document.getElementById("email").classList.add("wrong-details")
            document.getElementById("h1").innerText = "Please enter a valid email!"
            document.getElementById("h1").style.color = "rgb(255, 64, 64)"
            setTimeout(wrongEmailClassRemover,1000)
            setTimeout(warning,1500)
        }
    }
}
