/* ------------------------------- Coloque sua lógica aqui ------------------------------- */

function classKenzie(){
  const openModalBtn = document.querySelector("#openModal")
  const closeModalBtn = document.querySelector("#closeModal")
  const sendEmailBtn = document.querySelector("#listNextClass")
  const myModal = document.querySelector("#myModal")
  const emailInput = document.querySelector(".inputText");
  const bodyBlur = document.querySelector(".body-blur");


  openModalBtn.addEventListener("click",function(){
    myModal.showModal()
    emailInput.value = "";
    bodyBlur.classList.add("modal-open");

  })

  closeModalBtn.addEventListener('click', () => {
    myModal.close();
    bodyBlur.classList.remove("modal-open");
  });

  sendEmailBtn.addEventListener('click', () => {
    myModal.close();
    bodyBlur.classList.remove("modal-open");
  });

}
classKenzie()


