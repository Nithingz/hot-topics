

const btns = document.querySelectorAll('.controls button'); // event target object

const newContent = document.querySelector('.new-content');

// event handler

function addContent(ev){
    
    let clickedButton = ev.target;
    
    for(let btn of btns){
        if(btn.hasAttribute('id')){
            
            btn.removeAttribute('id');
        }
    }
   
    clickedButton.id='active';
    
    if(clickedButton.value === 'c1'){
       
        newContent.innerHTML=`<figure class="newContent">
                                <img src="img/money.jpg" alt="Money"/>
                             </figure>
                             <p>Money is any item or verifiable record that is generally accepted as payment for goods and services and repayment of debts, such as taxes, in a particular country or socio-economic context.</p>`;   
                         
        
       
    } else if(clickedButton.value === 'c2'){
        
        newContent.innerHTML=`<figure class="newContent">
                                <img src="img/food.jpg" alt="Food"/> 
                             </figure>
                             <p>BGenetically modified organisms (GMOs) are living organisms whose genetic material has been artificially manipulated in a laboratory through genetic engineering. This creates combinations of plant, animal, bacteria, and virus genes that do not occur in nature or through traditional crossbreeding methods.</p>`;
    } else {
        
         newContent.innerHTML=`<figure class="newContent">
                                <img src="img/future.jpg" alt="Future Cities"/>  
                             </figure>
                             <p>Future Cities aims to bring these latest results to the places where they are needed most. The only way to better understand the city is by going beyond the physical appearance and by focusing on different representations, properties and impact factors of the urban system. </p>`; 
                             
    }
    
    
}


for(let btn of btns){
  btn.addEventListener('click', addContent);
}
