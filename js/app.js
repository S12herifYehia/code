var codes=document.getElementById('codes');
var remove=document.getElementById('remove');
var play=document.getElementById('play');
var result=document.getElementById('result');
var col=document.getElementById('col')


play.onclick=()=>{
    result.innerHTML = codes.value;
    localStorage.setItem('res', codes.value)
}

remove.onclick =()=>{
    result.innerHTML="";
    codes.value='';
    
}

onload=()=>{
   codes.value = localStorage.getItem('res');


}

col.onchange=()=>{
    localStorage.setItem('color',col.value);
   result.style.background = localStorage.getItem('color')
}

if(localStorage.getItem !=null){
    result.style.background=localStorage.getItem('color')
    col.value=localStorage.getItem('color')
}