const button = document.getElementById("button-1");
const input = document.getElementById("text_area");
input.addEventListener("keypress",function(event){
  if (event.key === "Enter"){
    event.preventDefault();
    document.getElementById("button-1").click();
  }
})
      button.addEventListener("click", () => {
        const text = document.getElementById("text_area").value;
        length1 = text.length;

        if (length1 === 7) {
          const ml = document.getElementById("ml");
          ml.style.display = "none";
          const moye = document.getElementById("moye");
          moye.style.display = "none";
          el.style.display = "block";
          myimg.style.display = "block";
        } else {
          const myimg = document.getElementById("myimg");
          myimg.style.display = "none";
          const el = document.getElementById("el");
          el.style.display = "none";
          ml.style.display = "block";
          moye.style.display = "block";
        }
      });