function formSubmit() {
    alert("hi");
    const fs = require("fs");
  
    const content = "Some Content !";
  
    fs.writeFile("C:UsersDELLDesktop", content, (err) => {
      if (err) {
        alert(err);
      }
    });
  }