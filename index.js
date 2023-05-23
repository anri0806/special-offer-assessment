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
}

// after submit, add id to make div visible
// <=remove this div after 10 sec
