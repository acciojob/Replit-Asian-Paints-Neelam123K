//your JS code here. If required.
const chandeBtn = document.getElementById("change_button");
const  resetBtn = document.getElementById("Reset");

changeBtn.addEventListener("click", ()=>{
	const blockId = document.getElementById(block_id).value;
	const color = document.getElementById("colour_id").value;

	for (let i = 1; i <= 9; i++) {
		document.getElementById(i.toString()).style.backgroundColor = "transparent";
	}
	const selectedBlock = document.getElementById(blockId);
	if(selectedBlock){
		selectedBlock.style.background = color;
	}else{
		alert("Invalid id")
	}
})
resetBtn.addEventListener("click", () => {
      // Reset all grid items to transparent
      for (let i = 1; i <= 9; i++) {
        document.getElementById(i.toString()).style.backgroundColor = "transparent";
      }

      // Clear inputs
      document.getElementById("block_id").value = "";
      document.getElementById("colour_id").value = "";
    });