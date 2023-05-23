addEventListener("DOMContentLoaded", () => {
  handleSubmit();
});

function handleSubmit() {
  document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let handle = document.getElementById("handle");

    if (name.value && email.value && handle.value) {
      let background = document.getElementById("wrap");
      background.removeAttribute("id");
      background.setAttribute("id", "invisible");
    }

    name.value = "";
    email.value = "";
    handle.value = "";

    handleAlert();
  });
}

function handleAlert() {
  let div = document.getElementById("invisible-div");
  div.removeAttribute("id");
  div.setAttribute("id", "visible-div");

  let bgd = document.getElementById("invisible-bgd");
  bgd.removeAttribute("id");
  bgd.setAttribute("id", "inactive-bgd");

  document.getElementById("ok-btn").addEventListener("click", () => {
    let visibleDiv = document.getElementById("visible-div");
    visibleDiv.removeAttribute("id");
    visibleDiv.setAttribute("id", "invisible-div");

    let background = document.getElementById("invisible");
    background.removeAttribute("id");
    background.setAttribute("id", "wrap");

    let bgd = document.getElementById("inactive-bgd");
    bgd.removeAttribute("id");
    bgd.setAttribute("id", "invisible-bgd");
  });
}
