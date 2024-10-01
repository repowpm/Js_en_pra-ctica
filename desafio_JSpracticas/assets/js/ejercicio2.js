document.querySelectorAll("button[id^='btn-']").forEach(button => {
    button.addEventListener("click", function() {
      let color = this.style.backgroundColor;
      document.getElementById("caja").style.backgroundColor = color;
    });
  });