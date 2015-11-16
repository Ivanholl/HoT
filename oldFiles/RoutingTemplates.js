var routingTemplates = {
	battle:"<div id='infoWindow' style='border: 1px solid black'>"+
				"<div id='MinionInfo' style='float: right'></div>"+				
				"<div id='PlayerInfo'></div>"+	
			"</div>"+			
			//'<div class="btn-group btn-group-justified">'+
					'<a id="att" class="btn btn-danger">Atack</a>'+
					'<a id="def" class="btn btn-success">Defend</a>'+
					'<a id="def" class="btn btn-info">Magic</a>'+
					'<a id="def" class="btn btn-warning">Item</a>'+
					'<a id="esc" class="btn btn-default">Escape</a>'+
			//'</div>'+		
			'<div>'+
				'<p id="battleLog"></p>'+
			'</div>',

	home:"<div>"+
			'<a href="#/CreateNewHero" class="btn btn-warning">Create New Hero</a>'+
			'<a href="#/map" class="btn btn-warning">Log In</a>'+
		"</div>",

	map:'<div id="map">'+	
				'<img src="data/map.jpg" style="visibility: hidden">'+
				'<a id="zone1" href="#/battle" class="round-button"></a>'+
				'<a id="zone2" href="#/battle" class="round-button"></a>'+
				'<a id="town" href="#/town" class="round-button">T</a>'+
			'<div>',

	town:'<div>'+
			'<ul>'+
				'<li ><a class="btn btn-warning">mage</a></li>'+
				'<li ><a class="btn btn-warning">library</a></li>'+
				'<li ><a class="btn btn-warning">bank</a></li>'+
				'<li ><a class="btn btn-warning">armory</a></li>'+
				'<li ><a class="btn btn-warning">market place</a></li>'+
				'<li ><a href="#/town/healer" class="btn btn-warning">healer</a></li>'+
				'<li ><a class="btn btn-warning">merchant</a></li>'+
				'<li ><a class="btn btn-warning">tailory</a></li>'+
				'<li ><a class="btn btn-warning">bar</a></li>'+
				'<li ><a class="btn btn-warning">jewery</a></li>'+
			'</ul>'+
			'<a href="#/map" class="btn btn-danger">Back to map</a>'+

		 "<div>",

	healer:'<div>'+
				'<h3>Healing costs 4gold per Herlth Point</h3>'+
				'<input id="goldForGiving">'+
				'<button id="heal" type="submit" class="btn btn-success">Heal</button>'+
				'<span id="fullHealthCost">Full Health will cost:</span>'+
				'<a id="town" href="#/town"  class="btn btn-danger"">back to Town</a>'+
	       '</div>',
	
	zone:'<div>'+
			"<ul>"+
				"<li>{{}}</li>"+
				"<li>Kymerian Tiger</li>"+
				"<li>Common Thief</li>"+
				"<li>Naga Scout</li>"+
				"<li>Orange Kymerian Tiger</li>"+
				"<li>Zone Special: Chapel</li>"+
			"<ul>"+					
		"</div>",

	CreateHero: '<div class="form-horizontal">'+
    					'<legend>Create new Hero</legend>'+
    						'<div class="form-group">'+
      							'<label for="inputName" class="col-lg-2 control-label">Name</label>'+
      							'<div class="col-lg-10">'+
        							'<input class="form-control" id="inputName" placeholder="Name" type="Name">'+      
      							'</div>'+
    						'</div>'+
    						'<div class="form-group">'+
      							'<label for="select" class="col-lg-2 control-label">Race</label>'+
      							'<div class="col-lg-10">'+
        							'<select class="form-control" id="select">'+
          								'<option>Human</option>'+          								
        							'</select>'+
        						'</div>'+
        					'</div>'+
    						'<div class="form-group">'+
      							'<div class="col-lg-10 col-lg-offset-2">'+
        							'<button type="reset" class="btn btn-default">Cancel</button>'+
        							'<button id="submit" class="btn btn-primary">Create</button>'+
        							'<a href="#/map" class="btn btn-warning">Log In</a>'+
      							'</div>'+
    						'</div>'+
  					'</div>',

	PlayerHTML: '<div><img src="data/character icon.png"><span>{{name}}</span></div>'+
				'<div><img src="data/Hp2.png"><span>{{hp}}/{{maxHp}}</span></div>'+
				'<div><img src="data/Mana.png"><span>{{mp}}/{{maxMp}}</span></div>'+
				'<div><img src="data/sword.png"><span>{{dm}}</span><img src="data/deffence.png"><span>{{df}}</span></div>'+
				'<div><img src="data/gold.png"><span>{{gold}}</span><img src="data/soul stone2.png"><span>{{ss}}</span></div>',

	MinionHTML: '<div><span>{{name}}</span><img src="data/character icon.png"></div>'+
				'<div><span>{{hp}}/{{maxHp}}</span><img src="data/Hp2.png"></div>'+
				'<div><span>{{mp}}/{{maxMp}}</span><img src="data/Mana.png"></div>'+
				'<div><span>{{dm}}</span><img src="data/sword.png"><span>{{df}}</span><img src="data/deffence.png"></div>'+
				'<div><span>{{gold}}</span><img src="data/gold.png"><span>{{ss}}</span><img src="data/soul stone2.png"></div>'

}

