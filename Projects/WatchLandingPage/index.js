
const url = ["url('./Resource/Images/rolex-gfdc144a71_1920.jpg')", "url(./Resource/Images/isolated-gc7e478a33_1920.jpg)", "url(./Resource/Images/rolex-g65d9bdf38_1920.jpg)", "url(./Resource/Images/rolex-gca74191ea_1920.jpg)", "url('./Resource/Images/watches-gb254dc458_1920.jpg')"]

let i = 0;

const changeBackground = () => {
    i = (i + 1) % url.length;
    document.body.style.backgroundImage = url[i];
}

setInterval (changeBackground, 2000) ;