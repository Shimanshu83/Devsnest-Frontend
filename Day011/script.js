let question = document.querySelectorAll('.question') ; 


question.forEach(  (elem)=>{
    elem.addEventListener('click' , () =>{
        if(elem.textContent == "Modi Ji"){
            elem.classList.add('correct');
        }
        else {
        
        elem.classList.add('wrong') ; 
        }
    })
}  )