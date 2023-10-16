const film = document.getElementsByClassName('film');
 
for (let i = 0; i < film.length; i++) {
    film[i].addEventListener('click', function() {
        const sinopsis = film[i].querySelector('.sinopsis');
        if (sinopsis.style.display == 'none') {
            sinopsis.style.display = 'block';
        } else {
            sinopsis.style.display = 'none';
        }
    });
    
}