const htmlCode = document.querySelector("#html-code");
htmlCode.style.display= "block";

const TBtns = document.querySelectorAll(".button-design");

const viewBtn = document.querySelector(".edit-name");

const titleIp = document.querySelector("#title-ip");

const textBoxes = document.querySelectorAll("textarea");

const documentHeight= ()=>{
  const doc = document.documentElement;
  doc.style.setProperty("--doc-h", `${window.innerHeight}px`);
  
};
window.addEventListener("resize",documentHeight);
documentHeight();

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

textBoxes.forEach((textBox)=>{
  textBox.addEventListener("keydown",()=>{
    titleIp.setAttribute("disabled","true");
  });
});