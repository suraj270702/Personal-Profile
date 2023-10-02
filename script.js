console.log("hello")
document.addEventListener("DOMContentLoaded", function() {
    const span = document.querySelector(".animated-text");
    const texts = ["Developer", "Coder"];
    let index = 0;

    function changeText() {
      span.innerHTML = texts[index];
      index = (index + 1) % texts.length;
    }

    setInterval(changeText, 3000); // Change text every 2 seconds (2000 milliseconds)
  });