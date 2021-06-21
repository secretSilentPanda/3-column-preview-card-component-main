const headingAll = document.querySelectorAll(".card .card__heading");
headingAll.forEach((heading) => {
  const textSplit = heading.textContent.split("");
  heading.innerHTML = "";

  textSplit.forEach((char) => {
    heading.innerHTML += "<span>" + char + "</span>";
  });

  let animate = setInterval(onTick, 50);

  const spanList = heading.querySelectorAll("span");
  let i = 0;
  function onTick() {
    spanList[i++].classList.add("animate");
    if (i == spanList.length) {
      complete();
      return;
    }
  }

  function complete() {
    clearInterval(animate);
    animate = null;
  }
});
