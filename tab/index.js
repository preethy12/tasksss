const tabHeader = document.querySelector('.tab-header');
const tabHeaderElements = document.querySelectorAll('.tab-header > div');
const tabBody = document.querySelector('.tab-body');
const tabBodyElements = document.querySelectorAll('.tab-content');

tabHeaderElements.forEach((tabElement, index) => {
    tabElement.addEventListener('click', () => {
        tabHeader.querySelector('.active').classList.remove('active');
        tabElement.classList.add('active');
        tabBody.querySelector('.active').classList.remove('active');
        tabBodyElements[index].classList.add('active');
    });
 });

//verticle tab example:

const allIndicator = document.querySelectorAll('.indicator li');
const allContent = document.querySelectorAll('.content li');

allIndicator.forEach(item=> {
  item.addEventListener('click', function () {
    const content = document.querySelector(this.dataset.target);

    allIndicator.forEach(i=> {
      i.classList.remove('active');
    })

    allContent.forEach(i=> {
      i.classList.remove('active');
    })

    content.classList.add('active');
    this.classList.add('active');
  })
})