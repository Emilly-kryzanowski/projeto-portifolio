document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.section__card-button');
    const image = document.getElementById('presentation_image');
    const html = document.querySelector('html');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const contexto = button.getAttribute('data-contexto');
            image.src = `./imagens/${contexto}.jpg`;

            switch (contexto) {
                case 'IMG-20240206-WA0049':
                case 'IMG-20240206-WA0043':
                case 'IMG-20240206-WA0052':
                case 'IMG-20240206-WA0051':
                case 'IMG-20240206-WA0053':
                case 'IMG-20240206-WA0054':
                    html.style.setProperty('--main-bg-color', 'linear-gradient(180deg, #1c63e7 0%, #041832 48.44%, #01080E 100%)');
                    break;

                case 'IMG-20240206-WA0055':
                case 'IMG-20240206-WA0041':
                case 'IMG-20240206-WA0045':
                case 'IMG-20240206-WA0042':
                case 'IMG-20240206-WA0044':
                case 'IMG-20240206-WA0056':
                    html.style.setProperty('--main-bg-color', 'linear-gradient(180deg, #095522 0%, #041832 48.44%, #01080E 100%)');
                    break;

                case 'IMG-20240206-WA0048':
                case 'IMG-20240206-WA0046':
                case 'IMG-20240206-WA0050':
                case 'dev':
                case 'front-end':
                    html.style.setProperty('--main-bg-color', 'linear-gradient(180deg, #4b0977 0%, #041832 48.44%, #01080E 100%)');
                    break;

                default:

                    break;
            }
        });
    });
});
