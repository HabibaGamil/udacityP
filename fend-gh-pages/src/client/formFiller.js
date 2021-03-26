

const nlpAnalysis = async (event)=>{
    event.preventDefault()
    let  url = 'http://localhost:3000/getAnalysis'
    let input= document.getElementById("url").value


   if (Client.urlValidator(input)==true){
   

   await fetch(url, {

    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    body:JSON.stringify({url: document.getElementById("url").value})


    }).then(response => response.json())

    .then(function callBack (response){
       
        console.log("I was here!")
        Client.showAnalysis(response)
    })
  } 

  
   else{
    Client.invalidURL()
  }
}

function invalidURL(){

    document.getElementById("model").innerHTML="Invalid URL";
    document.getElementById("confidence").innerHTML="";
    document.getElementById("agreement").innerHTML="";
    document.getElementById("subjectivity").innerHTML="";
    document.getElementById("irony").innerHTML="";

}


function showAnalysis(response){
    if(response.model==undefined){
    document.getElementById("model").innerHTML="Can't fetch data for this URL";
    document.getElementById("confidence").innerHTML="";
    document.getElementById("agreement").innerHTML="";
    document.getElementById("subjectivity").innerHTML="";
    document.getElementById("irony").innerHTML="";
    }

    else{
    document.getElementById("model").innerHTML= "Model: "+response.model;
    document.getElementById("confidence").innerHTML="Confidence: " +response.confidence;
    document.getElementById("agreement").innerHTML="Agreement: "+response.agreement;
    document.getElementById("subjectivity").innerHTML="Subjectivity: "+response.subjectivity;
    document.getElementById("irony").innerHTML="Irony: "+response.irony;   
    } 

}
export {showAnalysis}
export {nlpAnalysis}
export {invalidURL}




