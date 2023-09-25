document.addEventListener('keyup', (e) => {
    if(e.key == "Escape")
    console.log("back");
    history.back();
  }) 