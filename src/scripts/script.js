/* ------------------------------- Coloque sua lógica aqui ------------------------------- */

function classKenzie(){
  const openModalBtn = document.querySelector("#openModal")
  const closeModalBtn = document.querySelector("#closeModal")
  const sendEmailBtn = document.querySelector("#listNextClass")
  const myModal = document.querySelector("#myModal")

  openModalBtn.addEventListener("click",function(){
    myModal.showModal()
  })

  closeModalBtn.addEventListener('click', () => {
    myModal.close();
  });

  sendEmailBtn.addEventListener('click', () => {
    myModal.close();
  });

}
classKenzie()