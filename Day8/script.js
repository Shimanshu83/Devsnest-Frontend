var cont = document.getElementsByClassName("box-container");

addDiv =  (count)=>{
  
  for(var i = 1 ; i <= count ; i++)
    {
    let div = document.createElement('div');
    div.id = 'box';
    div.className = 'boxk';
   
    cont[0].appendChild(div);
    }
  
  
} 

addDiv(400) ; 


toggle = () => {
  var boxx = document.getElementsByClassName('boxk');
  console.log(boxx)
  
  boxx.forEach((box)=>{
    
    
    box.addEventListener("click",()=>{ 
      box.classList.toggle('white') ; 
    })
    
  })
    
  
  
}
toggle()