// Elements
const questionItem = document.querySelectorAll("li");

// Accordion
questionItem.forEach((item) => {
  item.addEventListener("click", () => {
    const answer = item.querySelector(".answer-item");
    const button = item.querySelector(".close-btn");

    // Save current state
    const wasOpen = answer.classList.contains("active");

    // Close all open answers
    document.querySelectorAll(".answer-item.active").forEach((openAnswer) => {
      openAnswer.style.height = "0px";
      openAnswer.classList.remove("active");

      const openButton = openAnswer.closest("li").querySelector(".close-btn");

      openButton.classList.remove("rotate-90");
    });

    // Open current answer if it was closed
    if (!wasOpen) {
      answer.style.height = `${answer.scrollHeight}px`;
      answer.classList.add("active");
      button.classList.add("rotate-90");
    }
  });
});
