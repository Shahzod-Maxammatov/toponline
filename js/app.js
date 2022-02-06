window.addEventListener('DOMContentLoaded', function() {
  //! Started Katalog (Section) 
  
  //* Selectors
  const katalog = document.querySelector('.katalog');
  const listsKatalog = document.querySelector('.lists-katalog');
  const openBtnKatalog = document.querySelector('.katalog-header');
  const closeBtnKatalog = document.querySelector('.close-btn-katalog');
  const linksKatalog = document.querySelectorAll('.lists-katalog a');

  //* Event Listeners && Functions

  openBtnKatalog.addEventListener('click', function() {
    katalog.classList.add('show');
    listsKatalog.classList.add('show');
  })

  katalog.addEventListener('click', function() {
    this.classList.remove('show');
    listsKatalog.classList.remove('show');
  })

  closeBtnKatalog.addEventListener('click', function() {
    katalog.classList.remove('show');
    listsKatalog.classList.remove('show');
  })

  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') {
      katalog.classList.remove('show');
      listsKatalog.classList.remove('show');
    }
  })
    
  linksKatalog.forEach((link) => {
   link.addEventListener('click', () => {
     for(let removeLink of linksKatalog) removeLink.classList.remove('active');
     link.classList.toggle('active');
     link.classList.remove('hover');
   })
  })


  linksKatalog.forEach((link) => {
   link.addEventListener('mouseover', () => {
     if (!link.classList.contains('active')) link.classList.add('hover');
   })
  })

  linksKatalog.forEach((link) => {
   link.addEventListener('mouseout', () => {
     if (link.classList.contains('hover')) link.classList.remove('hover');
   })
  })
  
  
  //! Ended Katalog (Section) 
})  
