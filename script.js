const createButton = () => {
  const button = document.createElement("button");
  button.id = "getGoat";
  button.innerText = "Wyświetl obraz";
  document.body.appendChild(button);
  return button;
};
const clickedButton = createButton();
clickedButton.addEventListener("click", () => {
  const url = "https://picsum.photos/300/200?random&t=" + new Date().getTime();
  const getImage = document.createElement("img");
  getImage.setAttribute("data-test", "img-goat");
  getImage.src = url;
  getImage.onload = () => {
    document.body.appendChild(getImage);
  };
  getImage.onerror = () => {
    const error = document.createElement("p");
    error.innerText = "Nie można wyświetlić obrazu. Spróbuj ponownie później.";
    document.body.appendChild(error);
  };
});
