function initializeLoginForm() {
  const loginForm = document.getElementById("loginForm");
  if (!loginForm) return;

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const role = document.getElementById("loginRole").value;

    document.getElementById("loginEmailError").textContent = "";
    document.getElementById("loginPasswordError").textContent = "";

    const registeredUser = getRegisteredUser();

    if (
      !registeredUser ||
      registeredUser.email !== email ||
      registeredUser.role !== role
    ) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Invalid credentials",
      });
      return;
    }

    saveCurrentUser(registeredUser);

    window.location.href = "index.html";
  });
}

function updateNavbarForLoggedInUser() {
  const currentUser = getCurrentUser();
  const loginLink = document.querySelector('a[href="#"]');

  if (currentUser && loginLink) {
    loginLink.textContent = currentUser.name;
    loginLink.addEventListener("click", function (e) {
      e.preventDefault();
      Swal.fire({
        icon: "question",
        title: "Logout",
        text: "Are you sure you want to log out?",
        showCancelButton: true,
        confirmButtonText: "Logout",
      }).then((result) => {
        if (result.isConfirmed) {
          removeCurrentUser();
          window.location.href = "login.html";
        }
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", initializeLoginForm);

if (window.location.pathname.includes("index.html")) {
  document.addEventListener("DOMContentLoaded", updateNavbarForLoggedInUser);
}
