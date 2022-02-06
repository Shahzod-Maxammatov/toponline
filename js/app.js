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
  
  
  //! Started sign up and sign in (Section)  
  
  //* Selectors
  
  const openSignIn = document.querySelector('.sign-in-link');
  const signWrapper = document.querySelector('.sign-wrapper');
  const signInbox = document.querySelector('.sign-in');
  const signUpbox = document.querySelector('.sign-up');
  const closeSignWrapper = document.querySelectorAll('.close-sign-wrapper');
  const btnOpenSignUp = document.querySelector('.btn-open-sign-up');
  const phoneNumber = document.querySelectorAll('.phone-number');
  const infoPhoneNumber = document.querySelectorAll('.info-phone-number');
  
  //* Event Listeners && Functions
  
  openSignIn.addEventListener('click', () => {
    signWrapper.classList.add('show');
    signInbox.classList.add('show');
    signUpbox.classList.remove('show');
  })
  

  closeSignWrapper.forEach((btn) => {
    btn.addEventListener('click', () => signWrapper.classList.remove('show'));
  })
  
  signWrapper.addEventListener('click',() => {
    signWrapper.classList.remove('show');
  })
  
  signInbox.addEventListener('click', (e) => {
    e.stopPropagation();
  })

  signUpbox.addEventListener('click', (e) => {
    e.stopPropagation();
  })
  
  document.addEventListener('keydown', function(e) {
    if(e.key === "Escape") signWrapper.classList.remove('show');
  })

  btnOpenSignUp.addEventListener('click', () => {
    signInbox.classList.remove('show');
    signUpbox.classList.add('show');
  })


  
  //! Ended sign up and sign in (Section) 
  
  
})  
