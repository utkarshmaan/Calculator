let res=" ";
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            res=eval(res);
            document.querySelector('input').value=res;
        }else if(e.target.innerHTML=='C'){
            res="";
            document.querySelector('input').value=res;
        }else if(e.target.innerHTML=='DE'){
            res=res.toString().slice(0,-1);
            document.querySelector('input').value=res;
        }
        else{
            console.log(e.target);
            res=res+e.target.innerHTML;
            document.querySelector('input').value=res;
        }
    })
})