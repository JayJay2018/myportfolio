function ShowFloraAvatar () {
  const floraAvatar = document.getElementById("flora");
  const button = document.querySelector(".btn_yellow");
  button.addEventListener("click", (event) => {
      floraAvatar.classList.toggle("hidden");
  });
};

export { ShowFloraAvatar };
