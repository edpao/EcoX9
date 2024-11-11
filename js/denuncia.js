const openButtons = document.querySelectorAll(".open-modal");

openButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modalId = button.getAttribute("data-modal");
    const modal = document.getElementById(modalId);

    if (modal) {
      modal.showModal(); 
      modal.classList.add('open'); 
    }
  });
});

const closeButton = document.getElementById("close-modal");
if (closeButton) {
  closeButton.addEventListener("click", () => {
    const modal = document.getElementById("modal");
    if (modal) {
      
      modal.classList.remove('open');

      setTimeout(() => {
        modal.close(); 
      }, 500); 
    }
  });
};
