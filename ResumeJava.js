document.addEventListener('DOMContentLoaded', function () {

    function validateForm(event) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name === '' || email === '' || message === '') {
            alert('Please fill in your contact!');
            event.preventDefault(); 
        } else {
            alert('Contact and message submitted!');
            document.getElementById('contactForm').reset();
        }
    }

    const inputFields = document.querySelectorAll('.input-group input, .input-group textarea');

    inputFields.forEach(input => {
        input.addEventListener('focus', function () {
            const label = this.parentElement.querySelector('label');
            if (label) {
                label.style.display = 'none';
            }
        });

        input.addEventListener('blur', function () {
            const label = this.parentElement.querySelector('label');
            if (!this.value && label) {
                label.style.display = 'block';
            }
        });
    });

    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', validateForm);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    function addZoomEffect(event) {
        const clickedImage = event.target;
        const zoomedImages = document.querySelectorAll('.portfolio_images img.zoomed');

        const isZoomed = clickedImage.classList.contains('zoomed');

        zoomedImages.forEach(image => {
            if (image !== clickedImage) {
                image.classList.remove('zoomed');
            }
        });

        clickedImage.classList.toggle('zoomed', !isZoomed);

        if (!isZoomed) {
            const imageRect = clickedImage.getBoundingClientRect();
            const scrollY = window.scrollY || window.pageYOffset;
            const targetY = imageRect.top + scrollY - (window.innerHeight - imageRect.height) / 2;

            window.scrollTo({
                top: targetY,
                behavior: 'smooth'
            });
        }
    }

    const portfolioImages = document.querySelectorAll('.portfolio_images img');

    portfolioImages.forEach(image => {
        image.addEventListener('click', addZoomEffect);
    });

    document.addEventListener('click', function (event) {
        if (!event.target.closest('.zoomed')) {
            const zoomedImages = document.querySelectorAll('.portfolio_images img.zoomed');
            zoomedImages.forEach(image => {
                image.classList.remove('zoomed');
            });
        }
    });

    window.addEventListener('scroll', function () {
        const zoomedImages = document.querySelectorAll('.portfolio_images img.zoomed');
        zoomedImages.forEach(image => {
            image.classList.remove('zoomed');
        });
    });
});