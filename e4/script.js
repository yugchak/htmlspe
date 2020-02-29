let degree = 0;
setInterval(() => {
  document.querySelector(".windspinner").style.transform = `rotate(${degree++}deg)`;
}, 8);