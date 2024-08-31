//see stackbiltz website for more info
const randomColor=function(){
    const hex='0123456789ABCDEF';
    let color='#';
    for(let i=0;i<6;i++)
    {
      color+=hex[Math.floor(Math.random()*16)];
    }
    
    return color;
  };
  let intervalId;
  const startChangingColor=function(){
  
    if(!intervalId)// so that multiple intervalId are not created at single time
    intervalId=setInterval(changeBgColor,1000);
  
    function changeBgColor(){
      
      document.body.style.backgroundColor=randomColor();
  
    }
    
  }
  const stopChangingColor =function(){
    clearInterval(intervalId);
    //problem will be mulitple intervalId will be created and we know the intervalId of the last one created so we can only stop last one
    //so added condn of null here and checking intervalId is null or not before creating new
    intervalId=null;//so that we can create new intervalId as it will work when intervalId is null
  }
  document.querySelector('#start').addEventListener('click',startChangingColor);
  
  document.querySelector('#stop').addEventListener('click',stopChangingColor);
  