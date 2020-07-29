// темно зеленый #013220 (отлично)
// зеленый #219a5a (хорошо)
// красный #f70000 (плохо)
// охра #e7a239 (удовлетворительно)

window.onload = function () {
	function getRandomInt(min, max) {
 		return Math.floor(Math.random() * (max - min)) + min;
	}
	
	function quiz () {
		let step = 0;
		let score = 0;

		let numQuestion;
		
		let listQuestions;
		let listPictures;
		
		function showQuestions () {
			numQuestion = getRandomInt(0, questions.length);
			let result = "";

			listQuestions = document.querySelector(".main__answer");
			listPictures = document.querySelector(".main__img");
			listPictures.src = `img/${questions[numQuestion]["pic"]}`;



			for (let key in questions[numQuestion]["options"]) {
				
				if (questions[numQuestion]["options"][key] == questions[numQuestion]["options"]["answer"]) {
					result += `<li class="main__item" data-v="right">${questions[numQuestion]["options"][key]}</li>`;
				}
				else {
					result += `<li class="main__item">${questions[numQuestion]["options"][key]}</li>`;
				}
			}

			listQuestions.innerHTML = result;
		}

		function showResult () {

			let resQuiz = document.querySelector(".main__res");
			let smile = document.querySelector(".main__smile");
			let rating = document.querySelector(".main__score");

			let mouthSmile = document.querySelector(".main__mouth");
			let jowlsSmile = document.querySelector(".main__jowls");

			mouthSmile.classList.remove("mouth-angry");
			mouthSmile.classList.remove("mouth-happy");
			mouthSmile.classList.remove("mouth-satisfied");


			if (listQuestions && listPictures) {
				listQuestions.remove();
				listPictures.remove();
			}

			rating.innerHTML = `${score} из 10</br>`;

			if (score <= 3) {
				mouthSmile.classList.add("mouth-angry");

				rating.style.color = "#f70000";
				rating.innerHTML += `(плохо)`;
			}
			if (score > 3 && score <= 6) {
				mouthSmile.classList.add("mouth-satisfied");

				rating.style.color = "#e7a239";
				rating.innerHTML += `(удовлетворительно)`;
			}
			if (score > 6 && score <= 8) {
				mouthSmile.classList.add("mouth-happy");

				rating.style.color = "#219a5a";
				rating.innerHTML += `(хорошо)`;
			}
			if (score > 8) {
				mouthSmile.classList.add("mouth-happy");
				jowlsSmile.style.display = "block";

				rating.style.color = "#013220";
				rating.innerHTML += `(отлично)`;
			}
			resQuiz.style.display = "block";
		}

		document.addEventListener("click", function(event){
			if (event.target.className == "main__item" && step < 10) {
				if (event.target.dataset.v) {
					score++;
				}
				step++;
				console.log(step);
			}
			if (step == 10) {
				showResult();
			}
			questions.splice(numQuestion, 1);
			showQuestions();
		});

		showQuestions();
	}

	quiz();
}

