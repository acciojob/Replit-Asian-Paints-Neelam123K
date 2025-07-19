//your JS code here. If required.
const changeButton = document.getElementById("change_button");
    const resetButton = document.getElementById("reset_button");
 
    function resetGridColors() {
      for (let i = 1; i <= 9; i++) {
        document.getElementById(i.toString()).style.backgroundColor = "transparent";
      }
    }
 
    changeButton.addEventListener("click", () => {
      const blockId = document.getElementById("block_id").value;
      const color = document.getElementById("colour_id").value;
 
      if (blockId < 1 || blockId > 9) {
        alert("Please enter a valid Block ID between 1 and 9.");
        return;
      }
 
      resetGridColors();
      document.getElementById(blockId).style.backgroundColor = color;
    });
 
    resetButton.addEventListener("click", resetGridColors);
