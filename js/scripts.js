window.onload = () => {
    let menuIcon = document.querySelector('.menu-icon'),
        dismissIcon = document.querySelector('.dismiss-icon'),
        navItems = document.querySelector('.nav--items');

    menuIcon.addEventListener('click', () => {
        navItems.classList.toggle('active');
        dismissIcon.classList.toggle('active');
    });

    dismissIcon.addEventListener('click', () => {
        navItems.classList.toggle('active');
        dismissIcon.classList.toggle('active');
    });

let splitSection = document.querySelector('.split-section');
if (splitSection) {
    splitSection.addEventListener('click', () => {
     window.location.href = "featured.html";
    }
    );
}

document.querySelector('.name-card').addEventListener('click', () => {
     window.location.href = "index.html";
});

function smoothScroll(elm) {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: elm.offsetTop
  });
}

let smoothScrollList = document.querySelectorAll('li[data-smooth-scroll-id]');
smoothScrollList.forEach((item) => {
  item.addEventListener('click', () => {
    smoothScroll(document.querySelector(`.project-card[data-smooth-scroll-id="${item.dataset.smoothScrollId}"]`));
  });
});
  
};