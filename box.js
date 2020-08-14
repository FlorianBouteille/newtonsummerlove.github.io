function makeBox(x, y, w, h, friction, restitution)
{
    let options = {
                    friction : this.friction,
                    restitution: this.restitution
                };
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(myWorld, this.body);

    this.show = function()
    {
        let pos = this.body.position;
        let angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        rotate(angle);
        rect(0, 0, this.w, this.h);
        pop();
    }
}

function makeBubble(x, y, r, friction, restitution)
{
    this.friction = friction;
    this.restitution = restitution;
    let options = {
        friction : friction,
        restitution: restitution
    };
    this.body = Bodies.circle(x, y, r, options);
    this.r = r;
    World.add(myWorld, this.body);

    this.show = function()
    {
        let pos = this.body.position;
        let angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        rotate(angle);
        circle(0, 0, 2*r);
        pop();
    }
}