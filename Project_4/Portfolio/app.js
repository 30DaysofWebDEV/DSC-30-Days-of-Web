const text = document.querySelector('.intro');
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

for(let i=0; i < splitText.length; i++) {
	text.innerHTML += "<span>"+ splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
	const span =  text.querySelectorAll('span')[char];
	span.classList.add('fade');
	char++;
	if(char === splitText.length) {
		complete();
		return;
	}
}

function complete() {
	clearInterval(timer);
	timer = null;
}

const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
	let messages = []
	if (firstName.value === '' || firstName.value == null) {
		messages.push('First Name is required')
	}

	if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
	}
})