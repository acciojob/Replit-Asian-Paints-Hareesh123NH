//your JS code here. If required.
const change_btn=document.getElementById("change_button");
const reset_btn=document.getElementById("Reset");

change_btn.addEventListener("click",changeColor);
reset_btn.addEventListener("click",reset);

function changeColor() {
	
	const blockId=document.getElementById("block_id").value;
	const color=document.getElementById("colour_id").value;
	reset();
	console.log(blockId);
	const grid=document.getElementById(blockId);
	if(grid){
		grid.style.backgroundColor=color;
	}
	else{
		alert("Please enter vaild block_id!");
	}
}
function reset() {
	const grids=document.querySelectorAll(".grid-item");
	grids.forEach((grid)=>{
		grid.style.backgroundColor="transparent";
	});
}

const container=document.getElementById("grid-container");
const block=document.getElementById("block_id");
container.addEventListener("click",(e)=>{
	block.value=e.target.id;
})
