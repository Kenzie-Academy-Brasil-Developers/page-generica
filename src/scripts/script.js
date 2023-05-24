/* ------------------------------- Coloque sua lógica aqui ------------------------------- */

function openModal(){
  const openModalBtn = document.querySelector("#openModal")
  const myModal = document.querySelector("#myModal")
  const emailInput = document.querySelector(".inputText");
  
  
  openModalBtn.addEventListener("click",function(){
    myModal.showModal()
    emailInput.value = "";
  })
}

function closeModal(){
  const closeModalBtn = document.querySelector("#closeModal")
  const sendEmailBtn = document.querySelector("#listNextClass")
  const myModal = document.querySelector("#myModal")  
  
  
  closeModalBtn.addEventListener('click',function(){
    myModal.close();   
  });

  sendEmailBtn.addEventListener('click', function(){
    myModal.close();  
  });

}
openModal()
closeModal()


