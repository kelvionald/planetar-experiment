function vector(x,y){
	this.x=x;
	this.y=y;
	this.sum = function(v){
		return new vector(this.x+v.x,this.y+v.y);
	}
	this.len = function(v){
		return Math.sqrt((this.x-v.x)*(this.x-v.x)+(this.y-v.y)*(this.y-v.y));
	}
	this.set = function(v){
		this.x=v.x;
		this.y=v.y;
	}
}