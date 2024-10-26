document.addEventListener('DOMContentLoaded', function() {
    let offers = document.querySelector('.offersFooter');
    let offersSec = document.querySelector('#offers');
    let message = document.querySelector('.messageFooter');
    let messageSec = document.querySelector('#founderMsg')
    let cant = document.querySelector('.cfFooter');
    let cantSec = document.querySelector('#cantFindSection');

    offers.addEventListener('click', function(e){
        e.preventDefault();
        offersSec.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    });

    message.addEventListener('click', function(e){
        e.preventDefault();
        messageSec.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    });

    cant.addEventListener('click', function(e){
        e.preventDefault();
        cantSec.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    });
});