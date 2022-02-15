export default function pokemon(data) {
  const liEl = document.createElement("li");
  const imgEl = document.createElement("img");
  const h2El = document.createElement("h2");

  liEl.classList.add("pokemon");
  imgEl.src = data.image;
  h2El.innerText = data.name;
  liEl.append(imgEl, h2El);

  return liEl
}
