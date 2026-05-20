const buttons = document.querySelectorAll('a[href="#"]');

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    button.animate(
      [
        { transform: "translateY(0)" },
        { transform: "translateY(-2px)" },
        { transform: "translateY(0)" },
      ],
      { duration: 240, easing: "ease-out" },
    );
  });
});
