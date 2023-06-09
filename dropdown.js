const selectBtn = document.querySelector(".select-btn"),
      items = document.querySelectorAll(".item");

selectBtn.addEventListener("click", () => {
    selectBtn.classList.toggle("open")
});

items.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked")

        let checked = document.querySelectorAll(".checked"),
            btnText = document.querySelector(".btn-text");

            if(checked && checked.length > 0){
                btnText.innerText = `${checked.length} Selcionado`
            }else{
                btnText.innerText = "Selecione uma Agulha"
            }
    });
})