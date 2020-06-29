alert("loading calculator");
window.onload = function(){
    let screen = document.getElementById("answer");
    for (let i = 0; i< this.document.querySelectorAll("td").length; i++){
        document.querySelectorAll("td")[i].addEventListener("click",function(){
            let which = this.innerText;
            if(which == "CE"){
                screen.innerText ="";
            }
            else if(which == "="){
                let equation = screen.innerText;
                try{
                    screen.innerText = eval(equation);
                }
                catch(e){
                    screen.innerText = "Error"
                }
            }
            else{
                screen.innerText += which;
            }

        },false);
    }
}