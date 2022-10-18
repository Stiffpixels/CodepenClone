const htmlCode = document.querySelector("#html-code");
htmlCode.style.display= "block";

const TBtns = document.querySelectorAll(".button-design");

const viewBtn = document.querySelector(".edit-name");

const titleIp = document.querySelector("#title-ip");

const textBoxes = document.querySelectorAll("textarea");

TBtns.forEach((btn)=>{
  btn.addEventListener("click", (e)=>{
    TBtns.forEach((bt)=>{
      bt.classList.remove("active");
    });
    
    textBoxes.forEach((tbox)=>{
      tbox.style.display = "none";
    });
    const codeId = e.target.dataset.id;
    const element = document.querySelector(`#${codeId}`);
    
    e.target.classList.add("active");
    element.style.display= "block";
  });
});

viewBtn.addEventListener("click", ()=>{
  titleIp.removeAttribute("disabled");
  titleIp.focus();
});

let count=1;
textBoxes.forEach((textBox)=>{
  textBox.addEventListener("keydown",()=>{
    if(count===1){
      titleIp.setAttribute("disabled","true");
      count++;
    }
  });
});