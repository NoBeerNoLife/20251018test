document.addEventListener('DOMContentLoaded', ()=>{
  const menuBtn = document.getElementById('menuBtn');
  const siteNav = document.getElementById('siteNav');
  if(menuBtn){
    menuBtn.addEventListener('click', ()=>{
      siteNav.classList.toggle('open');
      if(siteNav.classList.contains('open')){
        siteNav.style.display = 'flex';
      } else {
        siteNav.style.display = '';
      }
    });
  }
});
