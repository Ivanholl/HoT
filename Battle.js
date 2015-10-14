function Battle(ZoneNumber){

var Player = JSON.parse(localStorage.getItem('Player')),
  	Minion = Object.create(getEnemy()),
  	enemyMove = false;
  	battleLog = $("#battleLog"),
  	PlayerInfoWindow = $("#PlayerInfo"),
  	MinionInfoWindow = $("#MinionInfo");

    RenderHandlebars(routingTemplates.PlayerHTML, Player, PlayerInfoWindow);
    RenderHandlebars(routingTemplates.MinionHTML, Minion, MinionInfoWindow); 

function Atack(attacker, defender){
	var attackerAtack = getAttack(attacker),
		defenderDefense = getDefense(defender)
		massage = "";

	if(attackerAtack > defenderDefense){
		defender.hp -= attackerAtack - defenderDefense;
		//massage += defender.name + " took " + (attackerAtack - defenderDefense) +" dmg" 
		//battleLog.html(massage)
		CheckWinLose()
	}
	else if(attackerAtack < defenderDefense){
		defender.hp -= defenderDefense - attackerAtack;
		CheckWinLose()
	}

	RenderHandlebars(routingTemplates.PlayerHTML, Player, PlayerInfoWindow);
	RenderHandlebars(routingTemplates.MinionHTML, Minion, MinionInfoWindow);
}

function Defend(attacker, defender){
	var attackerAtack = getAttack(attacker),
		defenderDefense = getDefense(defender);

	if(defenderDefense > attackerAtack){
		attacker.hp -= defenderDefense - attackerAtack;
		CheckWinLose()
	}
	else if(defenderDefense < attackerAtack){
		defender.hp -= attackerAtack - defenderDefense;
		CheckWinLose()
	}
	getEnemyMove()	
	RenderHandlebars(routingTemplates.PlayerHTML, Player, PlayerInfoWindow);
	RenderHandlebars(routingTemplates.MinionHTML, Minion, MinionInfoWindow);
}

function Escape(){
	var chance = getRandomInt(0,1);
	if (chance === 0) {
		alert("ESCAPED");		
		sammyApp.trigger('back-to-map')		
	}
	else{
		alert("You couldn't Escape!");
		getEnemyMove()
	}
}

function CheckWinLose(){
	if(Player.hp <= 0){
		alert("YOU LOST");
		sammyApp.trigger('town-healer')
		Minion = Object.create(getEnemy());

	}
	else if(Minion.hp <= 0){
		alert("YOU WIN\n"+"you got"+Minion.gold+"gold and"+Minion.ss+"soul stones");
		Player.gold += Minion.gold;
		Player.ss += Minion.ss;
		sammyApp.trigger('back-to-map')
	Minion = Object.create(getEnemy());

				
	}
	localStorage.setItem('Player', JSON.stringify(Player));
}

function getEnemyMove(){
	var playerAtack = getAttack(Player),
		playerDefense = getDefense(Player),
		minionDefense = getDefense(Minion),
		minionAtack = getAttack(Minion);
		console.log('enemyMove')

		if(playerDefense < minionAtack){
			Atack(Minion, Player);
			enemyMove = false;		}
		else if(playerAtack < minionDefense){
			Defend(Player, Minion);
			enemyMove = false;
		}
		else{

		}
}

function getAttack(attacker){
	return getRandomInt(attacker.dm[0],attacker.dm[1])
}

function getDefense(defender){
	return Math.round(defender.df + (getRandomInt(0,10)/100));
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getEnemy(){	 
	 return EnemyList[ZoneNumber][getRandomInt(0, 4)]
}


$("body").on("click", "#att", function(){
	Atack(Player, Minion);
	console.log("our turn")
		getEnemyMove()
	
});
$('body').on("click", "#def", function(){
	Defend(Minion, Player);
		getEnemyMove()
	
});
$("body").on("click", "#esc", Escape);
	
}

function RenderHandlebars(html, templateForCompiling, target){
  template = Handlebars.compile(html),    
    result = template(templateForCompiling);
    target.html(result);
}

function Healer(){
	var healthForHeal = $("#goldForGiving").val(),
    Player = JSON.parse(localStorage.getItem('Player')),
	massage = healthForHeal * 4;

	$('fullHealthCost').val(massage)

	if(Player.hp <= 0){
		console.log("asd")
		Player.ss -= Math.round(20/100);
		Player.hp = Player.maxHp;
		localStorage.setItem('Player', JSON.stringify(Player));
		console.log(localStorage.Player)
		Player = JSON.parse(localStorage.getItem('Player'))
	}

	$('body').on("click", '#heal', function(){
		console.log("healed" + healthForHeal);

	});

	localStorage.setItem('Player', JSON.stringify(Player));
}