var btn= document.querySelector('#btn');

btn.addEventListener("click", myMove);



function myMove() {
    var word = document.querySelector('#word');
    
    var input=document.querySelector('#written');



    var words=['xylophone', 'cat', 'bat', 'chollima'];
    var i=0;
    word.innerHTML=words[0];

    
    var id = setInterval(frame, 5000);
    function frame() {
        
        //word.innerHTML=words[i];
        i = (i < 3) ?( i+1) : 0;
        console.log(input.value); 
        console.log(word.innerHTML);
      if (input.value== word.innerHTML) {
        
        input.value='';
        
        word.innerHTML=words[i];
        
      } else {
        word.innerHTML='GAME OVER';
        input.value='';
        clearInterval(id);
      }
    }
  }
  
