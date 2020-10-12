const loto = function() {
     
    const create = function() {

    let numbersarr = [];

        let numButton = document.querySelector('.button_num');
            
        numButton.addEventListener("click", function (event) {
            event.preventDefault();
            console.log(event);
            
            for (i = 0;; i++) {
                i = prompt('Vvedite');
                if (i == '') break;
                numbersarr.push(i);
            }
            
            let nums = document.createElement('div');
            nums.classList.add('nums');
            nums.innerHTML = numbersarr;
            const numbersList = document.querySelector('.numbers_list');
            numbersList.appendChild(nums);
            numbersarr = [];
        });


    };

    create();

    const drop = function() {
        let basketDrop = document.querySelector('.numbers_drop')
        console.log(basketDrop);

        function getRandomInt(min, max) {
            let arr = [];

            for (let i = 0; i < 5; i++) {
                min = Math.ceil(min);
                max = Math.floor(max);
                arr[i] = Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается    
            };
            return arr;  
        };

        
        let basketNum = document.querySelector('.numbers_drop'),
            randNum = getRandomInt(1, 11);
        console.log(randNum);
        basketNum.classList.add("remove");
        basketNum.innerHTML = randNum;

        

    };

    let button = document.querySelectorAll('.button_game');

    const gameWin = function(event) {

        let gameBanner = document.querySelector('.game_banner');
        
        if (gameBanner) {
            gameBanner.querySelector('.popup_case').innerHTML = '';

            return gameBanner;
        }

        gameBanner = document.createElement('div');
        console.log(gameBanner);
        
        const popupCase = document.createElement('div');

        gameBanner.classList.add('popup');
        popupCase.classList.add('popup_case');
        gameBanner.appendChild(popupCase);
        


        gameBanner.innerHTML = `
        <div class="game_win_over";">

			<div class="win_text">Поздравляем! Вы выйграли!</div>
			<button class="new_game">Новая игра</button>
		</div>
        `;
        gameBanner.classList.add('active');

        let popupActive = document.querySelector('.popup .active');
        document.body.appendChild(gameBanner);

        //gameBanner.addEventListener('click', remove);
        let newGameButton = document.querySelector('.new_game');
            
        newGameButton.addEventListener("click", function (event) {
            event.preventDefault();
            console.log(event);
            remove();
        });

    };

    const gameOver = function(event) {

        let gameBanner = document.querySelector('.game_banner');
        
        if (gameBanner) {
            gameBanner.querySelector('.popup_case').innerHTML = '';

            return gameBanner;
        }

        gameBanner = document.createElement('div');
        console.log(gameBanner);
        
        const popupCase = document.createElement('div');

        gameBanner.classList.add('popup');
        popupCase.classList.add('popup_case');
        gameBanner.appendChild(popupCase);
        


        gameBanner.innerHTML = `
        <div class="game_win_over";">

			<div class="win_text">Вы проиграли! :(</div>
			<button class="new_game">Новая игра</button>
		</div>
        `;
        gameBanner.classList.add('active');

        let popupActive = document.querySelector('.popup .active');
        document.body.appendChild(gameBanner);

        //gameBanner.addEventListener('click', remove);
        let newGameButton = document.querySelector('.new_game');
            
        newGameButton.addEventListener("click", function (event) {
            event.preventDefault();
            console.log(event);
            remove();
        });

    };

    const comparison = function() {
        let num1 = document.querySelector('.nums').innerHTML,
            num2 = document.querySelector('.numbers_drop').innerHTML;
        
        let numArr1 = num1.split(','),
            numArr2 = num2.split(',');

        console.log(numArr1);
        console.log(numArr2);

        let count = 0;

        numArr1.forEach(function (num) {
            if (numArr2.indexOf(num) != -1) {
                count++;
            }
        });

        if (count > 2) {
            console.log('есть совпадение');
            gameWin();
        } else {
            console.log('совпадений нет');
            gameOver();
        }
         
    };

    const remove = function() {
        
        let newGame = document.querySelector('.popup'),
            newGameButton = document.querySelector('.new_game'),
            numRan = document.querySelector('.remove'),
            numS = document.querySelector('.nums');

        if (!newGameButton && !numRan) return;
        newGame.remove();
        numRan.innerHTML = '';
        numS.innerHTML = '';
        numS.remove();
        
    };

    for (let index = 0; index < button.length; index++) {
        let press_button = button[index];
        console.log(press_button);
        press_button.addEventListener("click", function (event) {
            event.preventDefault();
            console.log(event);
            
            drop(event);
            comparison(event);
        });
    }

};

loto();
