const counter = document.querySelector('#notifications--counter');
const marker = document.querySelector('#mark-all-read');
const notifications = document.querySelectorAll('.prof-alert');
const alert = document.querySelectorAll('.alert');


let count = 3;

function allNotificationsRead (){
  count = 0;
  counter.innerHTML = `${count}`;

  for(let i = 0; i < notifications.length; i++){
    notifications[i].style.background = 'white';
    
    alert[i].classList.remove('alert');
  }

};

marker.addEventListener('click', allNotificationsRead);




const changeBackGroundAndDiv = () => {
  
  counter.innerHTML = `${count}`;
  
  for(let i = 0; i < notifications.length; i++){
  
    
    notifications[i].addEventListener('click', (e) => {
      
      notifications[i].style.background = 'white';
      
      alert[i].setAttribute('class', '.hidden-div');
      
      if(e.type === 'click'){
        // Esto lo que hace es comprobar que count nunca sea menor de 0
        if(count > 0){
          
          count--;
        };     
        
      };
      
      counter.innerHTML = `${count}`;
      
    });
    
  };
}

changeBackGroundAndDiv();


