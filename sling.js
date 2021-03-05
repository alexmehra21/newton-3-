class Sling{
    constructor(bodyA, pointB , color){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            angularStiffness: 1,
            length: 220
        };
        this.color = color;
        this.pointB = pointB;
        this.pointX = bodyA.x;
        this.pointY = bodyA.y - 250;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    display(){
        if(this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(5.5);
            stroke("#fff");
            line(pointB.x, pointB.y, pointA.x, pointA.y);
            pop();
        }
    }
}