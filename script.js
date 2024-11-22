const blueBtn = document.getElementById('blueBtn');
const pinkBtn = document.getElementById('pinkBtn');
const brownBtn = document.getElementById('brownBtn');
const body = document.body;

const blueImage = document.getElementById('blueImage');
const pinkImage = document.getElementById('pinkImage');
const brownImage = document.getElementById('brownImage');

blueBtn.addEventListener('click', () => {
    
    body.className = 'Boys';
    
    blueImage.style.display = 'block';
    pinkImage.style.display = 'none';
    brownImage.style.display = 'none';
});

pinkBtn.addEventListener('click', () => {
   
    body.className = 'Girls';
    
    pinkImage.style.display = 'block';
    blueImage.style.display = 'none';
    brownImage.style.display = 'none';
});

brownBtn.addEventListener('click', () => {
    
    body.className = 'old';
    
    brownImage.style.display = 'block';
    blueImage.style.display = 'none';
    pinkImage.style.display = 'none';
});