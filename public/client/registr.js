const form = document.querySelector("#regForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const res = Object.fromEntries(data);
  if (
    !res.fullName ||
    !res.mail ||
    !res.phone ||
    !res.password ||
    !res.discount ||
    !res.age
  ) {
    alert("Введите данные");
  } else {
    try {
      const response = await fetch("/registr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(res),
      });
      const result = await response.json();
      if (result.msg) {
        window.location.href = "/";
      }
      if (result.err) {
        const answer = document.querySelector(".regMsg");
        answer.innerText = result.err;
      }
    } catch (error) {
      console.log("Чудовищная ошибка!", error);
      alert("Чудовищная ошибка!");
    }
  }
});
