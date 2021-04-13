const background = document.querySelector("body");

const changeColor  = () => {
    background.classList = `${colorGenerator()}`
    return
} 

const colorGenerator = () => {
    const colorArray = ['Green', 'Red', 'Blue','Yellow'];
    const colorSelector = colorArray[Math.floor(Math.random() * 3)];
    return colorSelector;
}

