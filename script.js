document.getElementById('overall-info-id').innerHTML = `<div class="info-card-light facebook change">
<div class="upper">
  <p class="user-info"><img src="images/icon-facebook.svg"> @nathanf</p>
</div>
<div class="middle">
  <p class="number number-light">1987</p>
  <p class="about">Followers</p>
</div>
<div class="lower">
  <p class="overall-increase green"><img src="images/icon-up.svg">12 Today</p>
</div>
</div>
<div class="info-card-light twitter change">
<div class="upper">
  <p class="user-info"><img src="images/icon-twitter.svg"> @nathanf</p>
</div>
<div class="middle">
  <p class="number">1044</p>
  <p class="about">Followers</p>
</div>
<div class="lower">
  <p class="overall-increase green"><img src="images/icon-up.svg">99 Today</p>
</div>
</div>
<div class="info-card-light instagram change">
<div class="upper">
  <p class="user-info"><img src="images/icon-instagram.svg"> @nathanf</p>
</div>
<div class="middle">
  <p class="number">11k</p>
  <p class="about">Followers</p>
</div>
<div class="lower">
  <p class="overall-increase green"><img src="images/icon-up.svg">1099 Today</p>
</div>
</div>
<div class="info-card-light youtube change">
<div class="upper">
  <p class="user-info"><img src="images/icon-youtube.svg"> @nathanf</p>
</div>
<div class="middle">
  <p class="number">8239</p>
  <p class="about">Followers</p>
</div>
<div class="lower">
  <p class="overall-increase red"><img src="images/icon-down.svg">144 Today</p>
</div>
</div>`;

document.getElementById('overview-container-id').innerHTML = `<div class="individual-overview info-card-light change">
<div class="page-views">
  <p class="today-overview-about">Page Views</p>
  <img src="images/icon-facebook.svg" class="logo">
</div>
<div class="overview-info">
  <p class="today-number number-light">87</p>
  <p class="today-change green"><img src="images/icon-up.svg"> 3%</p>
</div>
</div>

<div class="individual-overview info-card-light change">
<div class="page-views">
  <p class="today-overview-about">Page Views</p>
  <img src="images/icon-facebook.svg" class="logo">
</div>
<div class="overview-info">
  <p class="today-number number-light">87</p>
  <p class="today-change red"><img src="images/icon-down.svg"> 2%</p>
</div>
</div>

<div class="individual-overview info-card-light change">
<div class="page-views">
  <p class="today-overview-about">Likes</p>
  <img src="images/icon-instagram.svg" class="logo">
</div>
<div class="overview-info">
  <p class="today-number number-light">5462</p>
  <p class="today-change green"><img src="images/icon-up.svg"> 2257%</p>
</div>
</div>

<div class="individual-overview info-card-light change">
<div class="page-views">
  <p class="today-overview-about">Profile Views</p>
  <img src="images/icon-instagram.svg" class="logo">
</div>
<div class="overview-info">
  <p class="today-number number-light">52k</p>
  <p class="today-change green"><img src="images/icon-up.svg"> 1375%</p>
</div>
</div>

<div class="individual-overview info-card-light change">
<div class="page-views">
  <p class="today-overview-about">Retweets</p>
  <img src="images/icon-twitter.svg" class="logo">
</div>
<div class="overview-info">
  <p class="today-number number-light">117</p>
  <p class="today-change green"><img src="images/icon-up.svg"> 303%</p>
</div>
</div>

<div class="individual-overview info-card-light change">
<div class="page-views">
  <p class="today-overview-about">Likes</p>
  <img src="images/icon-twitter.svg" class="logo">
</div>
<div class="overview-info">
  <p class="today-number number-light">507</p>
  <p class="today-change green"><img src="images/icon-up.svg"> 553%</p>
</div>
</div>

<div class="individual-overview info-card-light change">
<div class="page-views">
  <p class="today-overview-about">Likes</p>
  <img src="images/icon-youtube.svg" class="logo">
</div>
<div class="overview-info">
  <p class="today-number number-light">107</p>
  <p class="today-change red"><img src="images/icon-down.svg"> 19%</p>
</div>
</div>

<div class="individual-overview info-card-light change">
<div class="page-views">
  <p class="today-overview-about">Total Views</p>
  <img src="images/icon-youtube.svg" class="logo">
</div>
<div class="overview-info">
  <p class="today-number number-light">1407</p>
  <p class="today-change red"><img src="images/icon-down.svg"> 12%</p>
</div>
</div>`;




const dark_mode = document.getElementById('dark-mode-id');

dark_mode.addEventListener('click',()=>{
  if (dark_mode.checked) {
    toogle_theme(); 
  }else{
    toogle_theme();
  }
})



function toogle_theme (){
  document.body.classList.toggle('body-dark');
  document.getElementById('background-id').classList.toggle('background-dark');
  document.getElementById('main-heading').classList.toggle('heading-dark');
  document.getElementById('overview-heading').classList.remove('overview-heading-light');
  document.getElementById('overview-heading').classList.toggle('heading-dark');

  let change = document.getElementsByClassName('change');
  for (let index = 0; index < change.length; index++) {
    change[index].classList.toggle('info-card-light');
    change[index].classList.toggle('info-card-dark');
  }

  let number = document.getElementsByClassName('number');
  for (let index = 0; index < number.length; index++) {
    number[index].classList.toggle('number-light');
    number[index].classList.toggle('number-dark');
  }

  let today_number = document.getElementsByClassName('today-number');
  for (let index = 0; index < today_number.length; index++) {
    today_number[index].classList.toggle('number-light');
    today_number[index].classList.toggle('number-dark');
  }
}
