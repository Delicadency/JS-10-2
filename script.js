/* Przygotuj ponownie przycisk z atrybutem id=”getGoat”. Spraw aby po kliknięciu w niego dodany został dynamicznie element <img> o src podanym niżej:
https://picsum.photos/

Nie wystarczy jednak sam adres powyżej - musisz jeszcze dodać do ścieżki informacje o rozmiarze w następującym formacie: https://picsum.photos/szerokosc/wysokosc gdzie szerokość powinna być równa 300px, a wysokość 200px. 

Dodaj do elementu <img> atrybut data-test=”img-goat”.

Chociaż nie musisz wykorzystywać do tego własnoręcznie napisanego requestu, to czy wiesz, że “pod maską” stworzony tag wykonuje zapytanie GET? */

const createButton = () => {
  const button = document.createElement("button");
  button.id = "getGoat";
  button.innerText = "Wyświetl obraz";
  document.body.appendChild(button);
  return button;
};
const clickedButton = createButton();
clickedButton.addEventListener("click", () => {
  const url =
    "https://picsum.photos/300/200?random&t=" + new Date().getTime();
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
