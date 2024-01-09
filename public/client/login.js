const form = document.querySelector("#loginForm");
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const res = Object.fromEntries(data);
  if (!res.login || !res.password) {
    alert("Введите данные");
  } else {
    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(res),
      });
      const result = await response.json();
      const msg = document.querySelector(".logMsg");
      const hDel = document.querySelector(".hTag");
      console.log(result);
      if (result.msg) {
        msg.innerText = result.msg;
        form.remove();
        hDel.remove();
        const header = document.querySelector(".navbar-nav");
        header.remove();
        const newHead = `
        <ul class="navbar-nav">
            <li class="nav-item">
              <a className="nav-link" href="/lk">Hi, ${res.login}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/logout">
                Logout
              </a>
          </li>
        </ul>
        `;
        const navbar = document.querySelector("#navbarNav");
        console.log("navbar:", navbar);
        navbar.insertAdjacentHTML("beforeend", newHead);
      }
      if (result.err) {
        msg.innerText = result.err;
      }
    } catch (error) {
      console.log("Ошибка регистрации!", error);
      alert("Ошибка региситраци!");
    }
  }
});
