class Stone{
	constructor(x,y)
	{
	// assign options to the stone
	var options={
		'restitution':0.8,
		'friction':0.9,
		'density':12
	}

	    this.width = 120;
        this.height = 70;
		

		this.body=Bodies.rectangle(x,y,120,70,options)
		
		World.add(world, this.body);
		

	}
	display()
	{
			var stonepos=this.body.position;
            var angle = this.body.angle;

			push()
			translate(stonepos.x, stonepos.y);
            rotate(angle);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			rect(0,0,this.width,this.height)

			pop()
	}

}