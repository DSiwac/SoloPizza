console.log("подключились");
const form = document.querySelector(".ppp");

form.addEventListener("click", async (event) => {
  console.log("!!!");

  const pizzaID  = event.target.id;
  console.log(event.target);
  console.log(pizzaID);
  try {
    const response = await fetch(`/basket/${pizzaID}`, {
      method: "DELETE",
     
    });
    const result = await response.json();
    if (result.msg) {
      window.location.reload();
    }
  } catch (error) {}
});
