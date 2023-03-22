// document.getElementById("count-el").innerText=1000
// funcr

let countEl= document.getElementById('count-el')
let saveEl = document.getElementById("save-el")



let count=0

function increment() {
    count += 1
	let ab=5
	
    countEl.textContent = count
	console.log(ab)
}


console.log(ab)
// function increment(){
	// countt.innerText=count
	// console.log(countt)
	// count=count+1
	
	
// }

// let rs=0
	// function reeset(){
	// countt.innerText=rs
	// console.log(countt)
	// }

  function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

  