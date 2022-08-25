const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');

btnStart.style.backgroundColor = '#198754';
btnStart.style.color = '#fff';
btnStart.style.borderRadius = '15px';
btnStart.style.borderColor = 'green';


btnStop.style.backgroundColor = '#dc3545';
btnStop.style.color = '#fff';
btnStop.style.borderRadius = '15px';
btnStop.style.borderColor = 'red';


const INTERVAL = 1000;
let intervalId = null;

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnStart.addEventListener('click', bgColorChange);

function bgColorChange() {
	btnStart.disabled = true;

	intervalId = setInterval(() => {
		let bgColor = `${getRandomHexColor()}`;
		body.style.backgroundColor = bgColor;
	}, INTERVAL);

	btnStop.addEventListener('click', bgColorStopChange);

	function bgColorStopChange() {
		btnStart.disabled = false;
		clearInterval(intervalId);
	}
}
