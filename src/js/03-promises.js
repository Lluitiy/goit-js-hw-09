import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
	btnSubmit: document.querySelector('button'),
	form: document.querySelector('.form'),
	formDelay: document.querySelector('input[name="delay"]'),
	formStep: document.querySelector('input[name="step"]'),
	formAmount: document.querySelector('input[name="amount"]'),
};

refs.btnSubmit.addEventListener('click', onClick);

function onClick(e) {
	e.preventDefault();

	const firstDelay = Number(refs.formDelay.value);
	const delayStep = Number(refs.formStep.value);
	const amount = Number(refs.formAmount.value);

	let msCounter = firstDelay;
	let promiseCounter = 1;

	setTimeout(() => {
		setInterval(() => {
			if (promiseCounter === amount + 1) {
				return;
			}
			createPromise(promiseCounter, msCounter)
				.then(({ position, delay }) => {
					Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
				})
				.catch(({ position, delay }) => {
					Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
				});;
			msCounter += delayStep;
			promiseCounter += 1;
		}, delayStep);
	}, firstDelay);
}

function createPromise(position, delay) {
	const shouldResolve = Math.random() > 0.3;

	const promise = new Promise((resolve, reject)=>{
		if (shouldResolve) {
			resolve({ position, delay });
		} else {
			reject({ position, delay });
		}
	})
	return promise 
};

