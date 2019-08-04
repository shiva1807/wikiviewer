let input;   
let arrayOfHeadings=[]
let arrayofInfo=[]
let arrayOfLinks=[]
document.querySelector("body > form > button").addEventListener("click",function(event){
  document.querySelector("body > .wikiresults").innerHTML="";
  input = document.querySelector("body > form > input").value
  
  wikiFunction(input);
});

document.querySelector("body > form").addEventListener("submit",function(event){
  event.preventDefault();
  document.querySelector("body > .wikiresults").innerHTML="";
  input = document.querySelector("body > form > input").value
  
  wikiFunction(input);
});

wikiFunction =(searchInput)=>{
  $.ajax({
    method: "GET",
    url: "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchInput
  })
    .done(function( received ) {
      arrayOfLinks=received[3]
      arrayofInfo=received[2]
      arrayOfHeadings=received[1]
    }).then(()=>{
      console.log(arrayofInfo,arrayOfLinks,arrayOfHeadings)
      arrayofInfo.forEach((ele,index)=>{
        document.querySelector(".wikiresults").innerHTML+=`<div class="search-results"><p><h3>`+arrayOfHeadings[index]+"</h3><h5>"+ele+"</h5><h6>"+`<a href="arrayOfLinks[index]">`+'Click to read more'+`</a>`+"</h6></p></div>";
        document.querySelectorAll(".search-results")[index].style.border="1px solid #407088";
    })     
    });
}