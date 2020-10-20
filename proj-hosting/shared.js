//  Pop -up stuff
var backdrop          = document.querySelector('.backdrop');
var modal             = document.querySelector('.modal');
var modalNoButton     = document.querySelector('.modal__action--negative');
var selectPlanButtons = document.querySelectorAll('.plan button');

// Side menu
var toggleButton = document.querySelector('.toggle-button');
var mobileNav    = document.querySelector('.mobile-nav');


//console.dir(backdrop);
//backdrop.style.display = 'block';

console.dir(selectPlanButtons);

// Add event listener to each plan button 
// When button is clicked, show pop-up and backdrop (dimming the background)

for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        // modal.style.display    = 'block';
        // backdrop.style.display = 'block';
        modal.classList.add('open');
        backdrop.classList.add('open');
    });
}

// When side menu button clicked - display menu close pop-up
backdrop.addEventListener("click", function() {
    //mobileNav.style.display = 'none';
    mobileNav.classList.remove('open');
    closeModal();
});

// If "No" is clicked in dialogue - just close pop-up
if (modalNoButton) {
    modalNoButton.addEventListener("click", closeModal);
}


// When closing pop-up also make backdrop disappear
function closeModal() {
    if (modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
}


// Add event listener to side menu button
// When button is clicked, show side menu

toggleButton.addEventListener('click', function() {
    //mobileNav.style.display = 'block';
    //backdrop.style.display  = 'block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});

