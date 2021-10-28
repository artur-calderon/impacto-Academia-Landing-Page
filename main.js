
document.querySelectorAll('.btn').forEach(item =>{
    item.addEventListener('click',(e)=>{
     const modal = document.querySelector('.modali')
     const home = document.querySelector('.home')
     const chegar = document.querySelector('.chegar')
     const about = document.querySelector('.about')

     if(e.target.innerHTML === 'Sobre nós'){
        home.classList.remove('active')
        modal.classList.remove('active')
        chegar.classList.remove('active')
        about.classList.add('active') 
     }else if(e.target.innerHTML === 'Home'){
      home.classList.add('active')
      modal.classList.remove('active')
      chegar.classList.remove('active')
      about.classList.remove('active') 
     }else if(e.target.innerHTML === 'Modalidades'){
      home.classList.remove('active')
      modal.classList.add('active')
      chegar.classList.remove('active')
      about.classList.remove('active') 
     }else if(e.target.innerHTML === 'Como chegar?'){
       home.classList.remove('active')
        modal.classList.remove('active')
        chegar.classList.add('active')
        about.classList.remove('active') 
     }
    })
})