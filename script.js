const heading = document.querySelector('.main-menu');
const dropDown = document.querySelector('.drop-down');
const arrowRotate = document.querySelector('.rot');
const mainHeading = document.querySelector('.text');
const items = [
  { button: '.first', text: 'Option 1', check: '.check' },
  { button: '.first1', text: 'Option 2', check: '.check1' },
  { button: '.first2', text: 'Option 3', check: '.check2' },
  { button: '.first3', text: 'Option 4', check: '.check3' },
  { button: '.first4', text: 'Option 5', check: '.check4' },
];

const clearChecks = () => {
  items.forEach((item) => {
    const checkElement = document.querySelector(item.check);
    checkElement.classList.remove('open');
  });
};

items.forEach((item) => {
  const button = document.querySelector(item.button);
  const checkElement = document.querySelector(item.check);

  button.addEventListener('click', () => {
    mainHeading.innerText = item.text;
    clearChecks();
    checkElement.classList.add('open');
    dropDown.classList.toggle('active');
    arrowRotate.classList.toggle('rotate');
  });
});

heading.addEventListener('click', () => {
  dropDown.classList.toggle('active');
  arrowRotate.classList.toggle('rotate');
});
