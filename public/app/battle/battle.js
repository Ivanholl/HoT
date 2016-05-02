app.factory('battle', function(Hero, notifier, equipment){
    return {
        battle: function(hero, minion){  //Otherwise it is used once
            var turnCount = 1,
                enemyMove = false,
                winLoseCheck = false;

            function getRandomInt(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }

            function getAttack(attacker) {
                return getRandomInt(attacker.minDm, attacker.maxDm);
            }

            function getDefense(defender) {
                return Math.round(defender.df + (getRandomInt(0, 10) / 100));
            }

            function Atack(attacker, defender) {
                var attackerAtack = getAttack(attacker),
                    defenderDefense = getDefense(defender);

                if (attackerAtack > defenderDefense) {
                    defender.hp -= attackerAtack - defenderDefense;
                    updateLogger(attacker, attackerAtack - defenderDefense, defender);
                    CheckWinLose();
                }
                else if (attackerAtack < defenderDefense) {
                    defender.hp -= defenderDefense - attackerAtack;
                    updateLogger(defender, defenderDefense - attackerAtack, attacker);
                    CheckWinLose();
                }
                else {
                    updateLogger(attacker, 0, defender);
                }
            }

            function Defend(attacker, defender) {
                var attackerAtack = getAttack(attacker),
                    defenderDefense = getDefense(defender);

                if (defenderDefense > attackerAtack) {
                    attacker.hp -= defenderDefense - attackerAtack;
                    updateLogger(defender, defenderDefense - attackerAtack, attacker);
                    CheckWinLose();
                }
                else if (defenderDefense < attackerAtack) {
                    defender.hp -= attackerAtack - defenderDefense;
                    updateLogger(attacker, attackerAtack - defenderDefense, defender);
                    CheckWinLose();
                }
                else {
                    updateLogger(attacker, 0, defender);
                }
            }

            function Escape() {
                var chance = getRandomInt(0, 1);
                if (chance === 0) {
                    notifier.success("ESCAPED");
                    turnCount = 0;
                    window.location.href = '#/map';
                }
                else {
                    notifier.error("You couldn't Escape!");
                }
            }

            function CheckWinLose() {
                if (hero.hp <= 0 && winLoseCheck == false) {
                    winLoseCheck = true;
                    notifier.error('YOU LOST');
                    hero.location = hero.home;
                    Hero.updateHero(hero);
                    window.location.href = '#/town';
                }
                if (minion.hp <= 0 && winLoseCheck == false) {
                    winLoseCheck = true;
                    notifier.success("YOU WIN\n" + "you got " + minion.gold + "gold and " + minion.ss + "soul stones!");
                    hero.gold += minion.gold;
                    hero.ss += minion.ss;
                    window.location.href = '#/map';
                }
                Hero.updateHero(hero)
            }

            function getEnemyMove() {
                var playerAtack = getAttack(hero),
                    playerDefense = getDefense(hero),
                    minionDefense = getDefense(minion),
                    minionAtack = getAttack(minion);

                if (playerDefense < minionAtack) {
                    $('#logger').append('Enemy desided to attack!').append('<br/>');
                    updateScroll();
                    Atack(minion, hero);
                    enemyMove = false;
                }
                else if (playerAtack < minionDefense) {
                    $('#logger').append('Enemy desided to defend!').append('<br/>');
                    updateScroll();
                    Defend(hero, minion);
                    enemyMove = false;
                }
                else {
                    $('#logger').append('Enemy desided to pass!').append('<br/>');
                    updateScroll();
                }
            }

            function updateScroll() {
                $('#battleLog').scrollTop($('#battleLog')[0].scrollHeight);
            }

            function updateLogger(deler, dm, receiver) {
                $('#logger').append('<b>'+deler.name+'</b>' + ' dealt ' + '<b class="logDmg">'+dm+'</b>' + ' damage to ' + receiver.name).append('<br/>');
                updateScroll()
            }


/*ATTACK*/  $('#attack').click(function () {
                $('#logger').append('<b class="turnCount">' + '===TURN ' + turnCount + '===' + '</b>').append('<br/>');
                turnCount++;
                $('#logger').append('You attack!').append('<br/>')
                Atack(hero, minion);
                getEnemyMove();
            });

/*DEFEND*/      $('#defend').click(function(){
                $('#logger').append('<b class="turnCount">'+'===TURN ' + turnCount +'==='+'</b>').append('<br/>');
                turnCount++;
                $('#logger').append('You defend!').append('<br/>')
                Defend(minion, hero);
                getEnemyMove();
            });
/*ITEM*/    $("body").on("click", ".battleItem", function (e){
                e.stopImmediatePropagation();
                var temp = e.target.id;
                var itemNo = temp.charAt(temp.length - 1);
                var item = hero.battleItems[itemNo];
                useBattleItem(item)
            });
            function useBattleItem(item){
                $('#logger').append('<b class="turnCount">' + '===TURN ' + turnCount + '===' + '</b>').append('<br/>');
                turnCount++;
                equipment.useBattleItem(hero, item);
                $('#logger').append('You used ' + '<b>' + item.title + '</b>').append('<br/>')
                getEnemyMove();
            }
/*ESCAPE*/  $('#escape').click(function(){
                $('#logger').append('<b class="turnCount">'+'===TURN ' + turnCount +'==='+'</b>').append('<br/>');
                turnCount++;
                $('#logger').append('You try to escape!').append('<br/>');
                Escape();
                getEnemyMove()
            });
        }
    }
});

