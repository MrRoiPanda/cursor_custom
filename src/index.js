import "./styles.scss";

const cursor = document.getElementsByClassName("cursor")[0];

document.onmousemove = (ev) => {
  cursor.style.top = ev.clientY;
  cursor.style.left = ev.clientX;
};

const title = document.getElementsByTagName("h1")[0];

title.onmouseover = (ev) => {
  console.log("Tes sur moi");
  cursor.classList.add("cursor--big");
};

title.onmouseleave = (ev) => {
  console.log("Tes plus sur moi");
  cursor.classList.remove("cursor--big");
};
