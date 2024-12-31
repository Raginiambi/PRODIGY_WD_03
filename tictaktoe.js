let boxes = document.querySelectorAll("button");
let reset = document.querySelector("#btn");
let p = document.querySelector("#demo");
let turn0 = true;
let winningpattern=[[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
]

boxes.forEach((box) =>
box.addEventListener("click",()=>
{
   if(turn0){
    box.innerText="O";
    box.style.fontSize = "35px";
    turn0 = false;
   }else{
    box.innerText="X"
    box.style.fontSize = "35px";
    turn0 = true;
   }
   box.disabled=true;
      checkwinner();
}
)
)
reset.addEventListener("click",()=>{

    boxes.forEach((box)=>{
        box.innerText = "";
    })
    p.innerText="";
  
    
})
const checkwinner = () => {
    for(let pattern of winningpattern) {
        
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;

        // console.log(pattern[0] , pattern[1] , pattern[2]);
        // console.log( posval1 , posval2 , posval3);
        if( posval1 != "" && posval2 != "" && posval3 != ""){
            if(posval1 === posval2 && posval2 === posval3){
                console.log("winner");
                p.innerText = `${posval1} is winner!` ;
                p.style.fontSize = "30px";
                p.style.color = "black";
                p.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
                p.style.fontWeight = "bold";
                p.style.color = "#E4003A";

            }
        }
      
       
    }
}

