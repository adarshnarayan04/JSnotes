const insert=document.querySelector('#insert')

window.addEventListener('keydown',function(e){
  insert.innerHTML=`${e.key}  ${e.keyCode}  ${e.code}`;
})
