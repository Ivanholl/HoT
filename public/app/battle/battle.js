app.factory('battle', function(updateHero, identity){

        return {
            battle: function(hero, minion){  //Otherwise it is used once
                var ///hero = identity.currentUser.heroList[0],

                    turnCount = 1,
                    ///minion =  MinionResource.getMinionsByZone(hero.location, true),
                    enemyMove = false,
                    winLoseCheck = false;

                function getRandomInt(min, max) {
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                }

                function getAttack(attacker) {
                    return getRandomInt(attacker.dm[0], attacker.dm[1]);
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
                        alert("ESCAPED");
                        window.location.href = '#/map';
                    }
                    else {
                        alert("You couldn't Escape!");
                    }
                }

                function CheckWinLose() {
                    if (hero.hp <= 0 && winLoseCheck == false) {
                        winLoseCheck = true;
                        alert("YOU LOST");
                        updateHero.update(hero, identity.currentUser)
                        window.location.href = '#/town';
                    }
                    if (minion[0].hp <= 0 && winLoseCheck == false) {
                        winLoseCheck = true;
                        alert("YOU WIN\n" + "you got " + minion[0].gold + "gold and " + minion[0].ss + "soul stones!");
                        hero.gold += minion[0].gold;
                        hero.ss += minion[0].ss;
                        window.location.href = '#/map';
                    }
                    updateHero.update(hero, identity.currentUser)
                }

                function getEnemyMove() {
                    var playerAtack = getAttack(hero),
                        playerDefense = getDefense(hero),
                        minionDefense = getDefense(minion[0]),
                        minionAtack = getAttack(minion[0]);

                    if (playerDefense < minionAtack) {
                        $('#logger').append('Enemy desided to attack!').append('<br/>')
                        updateScroll()
                        Atack(minion[0], hero);
                        enemyMove = false;
                    }
                    else if (playerAtack < minionDefense) {
                        $('#logger').append('Enemy desided to defend!').append('<br/>')
                        updateScroll()
                        Defend(hero, minion[0]);
                        enemyMove = false;
                    }
                    else {
                        $('#logger').append('Enemy desided to pass!').append('<br/>')
                        updateScroll()
                        //PASS
                    }
                }

                function updateScroll() {
                    $('#battleLog').scrollTop($('#battleLog')[0].scrollHeight);
                }

                function updateLogger(deler, dm, receiver) {
                    $('#logger').append(deler.name + ' dealt ' + dm + ' damage to ' + receiver.name).append('<br/>')
                    updateScroll()
                }

 /*ATTACK*/     $('#attack').click(function () {
                    $('#logger').append('===TURN ' + turnCount + '===').append('<br/>')
                    turnCount++;
                    $('#logger').append('You attack!').append('<br/>')
                    Atack(hero, minion);
                    getEnemyMove();
                });

/*DEFEND*/      $('#defend').click(function(){
                    $('#logger').append('===TURN ' + turnCount +'===').append('<br/>')
                    turnCount++;
                    $('#logger').append('You defend!').append('<br/>')
                    Defend(minion, hero);
                    getEnemyMove();
                });
/*ESCAPE*/      $('#escape').click(function(){
                    $('#logger').append('===TURN ' + turnCount +'===').append('<br/>')
                    turnCount++;
                    $('#logger').append('You try to escape!').append('<br/>')
                    Escape();
                    getEnemyMove()
                });
            }
        }
});
