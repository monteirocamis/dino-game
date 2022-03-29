const dino = document.querySelector('.dino'); // pega elementos no html : classe
const background = document.querySelector('.background');




// -------- dino logic -------- //
let isJumping = false;
let position = 0;


function handleKeyUp(event) {
    if (event.keyCode === 32) { //32 = tecla espaço (keycode.info)
        console.log("pressionou espaço")
         if (!isJumping) {  //evitar bug de pulos seguidos no ar
             jump();
          }
        }
    }
    
    
    const jump = () =>{
        isJumping = 0;

        let upInterval = setInterval(() => {
            if(position>= 150){
             clearInterval(upInterval)

                //descer
                let downInterval = setInterval(()=>{
                    if(position <= 0){
                        clearInterval(downInterval);
                        isJumping = false;
                    } else{
                        position -= 20
                        dino.style.bottom = position + 'px' ; // adiciona position bottom mais 20 ++
                    }
                } , 20);
            }
            else{
                //subir
                position += 20 ;  //a cada 20 add + 20
                dino.style.bottom = position + 'px' ; // adiciona position bottom mais 20 ++
            }
        } , 20);
    }
    
    
    
    
    
    
    
    
    
    
    // -------- cactus logic -------- //  
    
    
    
    function createCactus() {
        const cactus = document.createElement('div'); //cria elementos novos no html
        let cactusPosition = 1000;
        let randomTime = Math.random() * 6000;
        


        cactus.classList.add('cactus');  //cria classe
        cactus.style.left = cactusPosition + 'px';
        background.appendChild(cactus);
        


        //-------- cactus walking -------- //  
    
        let leftInterval = setInterval(()=>{
           if (cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus); // ao cactus sair da tela ele some , evita ele ir eternamente pra esquerda
             }
            else if(cactusPosition > 0 && cactusPosition < 60 && position < 60 ){ //nao saiu da   tela e ainda dentro do espaço do dino e pulo menor que 60
                clearInterval(leftInterval);
                document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';  // limpa tela e cria um h1 no html

            }
            else{ 
                cactusPosition -= 10; //movimentar a esquerda
                cactus.style.left = cactusPosition + 'px';
             }
            
        }, 20)

           setTimeout(createCactus, randomTime); //executa funcao dps de x tmp - em recursividade, funcao chamando ela msm eternamente
    }
        
       createCactus();
        document.addEventListener('keyup', handleKeyUp);
        
   
   //   if (isGameOver) return;
   
                // cactusPosition -= 10; //movimentar a esquerda
                // cactus.style.left = cactusPosition + 'px';
                 // clearInterval(leftTimer);
   
  
    // -------- Game over -------- //  

   //       isGameOver = true;
   //     } else {
   //       cactusPosition -= 10;
   //       cactus.style.left = cactusPosition + 'px';
   //     }
   //   }, 20);
   




// let isGameOver = false;




