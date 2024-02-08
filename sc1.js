const activePage=window.location.pathname;
const navlinks=document.querySelectorAll('header a').
foreach(link=>{
      if(link.href.includes('${activePage}'))
      {
         link.classList.add('active');
      }
    }
)
