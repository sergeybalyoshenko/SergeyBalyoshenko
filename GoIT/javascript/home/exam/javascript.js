    var game = document.querySelector('.game');
    var start = document.querySelector('.start');
    var startButton = document.querySelector('.start_killing');
    var roundButton = document.querySelector('.next_round');
    var infoYou = document.querySelector('.info_you');
    var infoZombie = document.querySelector('.info_zombie');
    var rewardValue = document.querySelector('.reward_money_value');
    var zombie = document.querySelector('.zombie');
    var roundValue = document.querySelector('.round');
    var note = document.querySelector('.note');
    var noteText = document.querySelector('.note_text');
    var message = document.querySelector('.message');
    var messageText = document.querySelector('.message_text');
    var shot, failure, round, range, reward, shotTime;

    var music = document.getElementById('music');
    var audioWalk = new Audio('audio/walk.mp3');
    var audioWait = new Audio('audio/wait.mp3');
    var audioFire = new Audio('audio/fire.mp3');
    var audioShot = new Audio('audio/shot.mp3');
    var audioShotFall = new Audio('audio/shot-fall.mp3');
    var audioFailure = new Audio('audio/failure.mp3');
    var audioWin = new Audio('audio/win.mp3');
    var audioDeath = new Audio('audio/death.mp3');

    startButton.addEventListener('click', startGame);
    startButton.addEventListener('click', stopMusic);

    function stopMusic(){
        music.pause();
        music.currentTime = 0;
    }

    function showInfo() {
        roundValue.textContent = 'Round ' + round;
        rewardValue.textContent = '' + reward;
        infoZombie.textContent = 'Zombie ' + (range/1000).toFixed(2);
        infoYou.textContent = 'You : 0.00';
    }

    function startGame() {
        roundButton.classList.remove('next_round_on');
        roundButton.classList.remove('next_round_off');
        game.classList.remove('game_blood');
        note.classList.remove('note_on');
        message.classList.remove('message_on');
        zombie.classList.remove('zombie-' + round);
        round = 1;
        range = 1300;
        reward = 0;
        start.classList.add('start_off');
        zombie.addEventListener('click', shootYou);
        zombie.classList.add('zombie');
        showInfo();
        goZombie();
        removeAction();
    }

    function nextRound() {
        if(round <= 4) {
            removeAction();
            noteText.textContent = '';
            note.classList.remove('note_on');
            messageText.textContent = '';
            message.classList.remove('message_on');
            zombie.classList.remove('zombie-' + round);
            roundButton.removeEventListener('click', nextRound);
            roundButton.classList.remove('next_round_on');
            round++;
            range -= 170;
            zombie.classList.add('zombie-' + round);
            showInfo();
            goZombie();
        } else {
            gameOver();
        }
    }

    function goZombie() {
        zombie.style.left = '';
        if (zombie.classList.contains('zombie_go')) {
            zombie.classList.remove('zombie_go');
        }
        setTimeout(function() {
            zombie.classList.add('zombie_go');
            zombie.classList.add('zombie-' + round + '_foot');
            audioWalk.play();
        }, 100);
        zombie.addEventListener('transitionend', startBattle);
        zombie.addEventListener('click', shootYou);
    }

    function timeCounter(now) {
        function shootTime() {
            var time = Date.now();
            if(shot) {
                shotTime = ((time - now)/1000).toFixed(2);
                infoYou.textContent = 'You : ' + shotTime;
                setTimeout(shootTime, 0);
            }
        }
        shootTime();
    }

    function startBattle() {
        removeAction();
        zombie.removeEventListener('transitionend', startBattle);
        audioWalk.pause();
        audioWalk.currentTime = 0;
        zombie.classList.add('zombie-' + round + '_stand');
        audioWait.play();
        setTimeout(function() {
            if(!failure) {
                noteText.textContent = 'Kill Him';
                note.classList.add('note_on');
                shot = true;
                zombie.classList.add('zombie-' + round + '_wait');
                audioWait.pause();
                audioFire.play();
                timeCounter(Date.now());
                setTimeout(shootFoe, range);
            }
        }, 1500);
    }

    function shootYou() {
        if(shot) {
            zombie.removeEventListener('click', shootYou);
            shot = false;
            reward = reward + 1000 * shotTime * round;
            audioShot.play();
            zombie.classList.add('zombie-' + round + '_down');
            setTimeout(function() {
                zombie.classList.add('zombie-' + round + '_death');
            }, 1500);
            noteText.textContent = 'Head Shot';
            rewardValue.textContent = '' + reward;
            setTimeout(function() {
                audioWin.play();
            }, 1000);
            setTimeout(function() {
                roundButton.addEventListener('click', nextRound);
                roundButton.classList.add('next_round_on');
            }, 2000);
            if (round === 5) {
                roundButton.classList.add('next_round_off');
                setTimeout(function() {
                    gameOver();
                }, 3000);
            }
        } else {
            zombie.removeEventListener('click', shootYou);
            failure = true;
            audioWalk.pause();
            audioWalk.currentTime = 0;
            audioShotFall.play();
            var stopZombie = zombie.offsetLeft;
            zombie.classList.remove('zombie_go');
            zombie.style.left = stopZombie + 'px';
            message.classList.add('message_on');
            messageText.textContent = 'Fresh Meat';
            reward = reward - 700;
            removeAction();
            if(reward < 0) {
                reward = 0;
            }
            setTimeout(function() {
                audioFailure.play();
            }, 1000);
            setTimeout(function() {
                failure = false;
                message.classList.remove('message_on');
                audioWait.pause();
                audioWait.currentTime = 0;
                showInfo();
                goZombie();
            }, 3500);
        }
    }

    function shootFoe() {
        if(shot) {
            zombie.removeEventListener('click', shootFoe);
            zombie.removeEventListener('click', shootYou);
            shot = false;
            audioShot.play();
            zombie.classList.add('zombie-' + round + '_shot');
            noteText.textContent = 'You Died';
            game.classList.add('game_blood');
            setTimeout(function() {
                audioDeath.play();
            }, 500);
            setTimeout(gameOver, 5800);
        }
    }

    function gameOver() {
        zombie.removeEventListener('click', shootFoe);
        zombie.removeEventListener('click', shootYou);
        start.classList.remove('start_off');
        removeAction();
        music.play();
    }

    function removeAction() {
        for(var i = 0; i < 6; i++) {
            zombie.classList.remove('zombie-' + i + '_foot');
            zombie.classList.remove('zombie-' + i + '_stand');
            zombie.classList.remove('zombie-' + i + '_wait');
            zombie.classList.remove('zombie-' + i + '_shot');
            zombie.classList.remove('zombie-' + i + '_down');
            zombie.classList.remove('zombie-' + i + '_death');
        }
    }