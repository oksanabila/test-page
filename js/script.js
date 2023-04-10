let cardText = document.querySelectorAll('.card-text');
let showMoreButtons = document.querySelectorAll('.showMore');


[...showMoreButtons].forEach(showMoreButton =>
    showMoreButton.addEventListener('click', function() {
        let text = showMoreButton.previousElementSibling;
        showMoreButton.classList.toggle('d-none');
        text.classList.toggle('more');
    }));


const isTruncated = (e) => {
    return (e.offsetHeight < e.scrollHeight);
}


cardText.forEach((element) => {
    let button = element.nextElementSibling;
    if (isTruncated(element)) {
        button.classList.remove('d-none');
    } else {
        button.classList.add('d-none');
    }
});


let body = document.body;

function setTheme(themeName) {
    body.setAttribute('data-bs-theme', themeName);
}

function toggleTheme() {
    if (body.getAttribute('data-bs-theme') === 'dark' ){
        setTheme('light');
    } else {
        setTheme('dark');
    }
}
