//your JS code here. If required.
const output = document.getElementById("output");
function printHello(){
	return new Promise((res,rej)=>{

		setTimeout(()=>{

			res("Hello, world!")
		},1000)
	})
}

printHello.then((res)=> {output.textContent = res})
	.catch((err)=> console.log(err))