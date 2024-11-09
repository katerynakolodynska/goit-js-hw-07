function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.querySelector('button.change-color').addEventListener("click", function (){
  const newColor = getRandomHexColor();
  document.body.style.background = newColor;
  document.querySelector("span.color").textContent = newColor;
});
const widget = document.querySelector("div.widget");
widget.style.display = "flex";
widget.style.alignItems = "center";
widget.style.justifyContent = "space-evenly";
widget.style.alignItems = "center";
widget.style.flexDirection = "column";
const changeColor = document.querySelector("button.change-color");
changeColor.style.borderRadius = "8px";
changeColor.style.padding = "8px, 16px";
changeColor.style.width = "148px";
changeColor.style.height = "40px";
changeColor.style.background = "#4e75ff";