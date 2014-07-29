#pragma strict

var restarted = 0;
final var minY = -8.0;
final var maxY = 5.0;
public var speed = 10.0;
public var maxSpeed = 30.0;
public var acceleration = 0.01;
final var limitX = 45.0;

public var minOffsetY = 1.0;
public var maxOffsetYDiff = 2.0;

var direction = 1.0;

// The last collision flags returned from controller.Move
private var collisionFlags : CollisionFlags; 

function Start () {

	Random.seed = Time.fixedTime;
			
}

function Update () {

	if (restarted == 1) {
		restarted = 0;
		
		var currentY:float = this.transform.position.y;
		
		var randomOffsetY:float = Random.RandomRange(minOffsetY, minOffsetY + maxOffsetYDiff);
		
		var possible = 0;
		if ( currentY + randomOffsetY < maxY ) {
			possible += 1;
		}
		if ( currentY - randomOffsetY > minY ) {
			possible += 2;
		}

		if ( possible > 2 ) {
			var flip: int = Random.RandomRange(0, 1);
			if (flip == 1) {
				currentY += -1 * randomOffsetY;
			} else {
				currentY += randomOffsetY;
			}
		} else if (possible == 1) {
			currentY += randomOffsetY;
		} else if (possible == 2) {
			currentY += -1 * randomOffsetY;
		}
		
		
		//var direction = Random.RandomRange(0, 1);
		
//		if (direction > 0) {
//			randomOffsetY *= -1;
//		}

//		currentY = Mathf.Clamp(currentY, minY, maxY);
		this.transform.position.y = currentY;
		
		this.transform.position.x = -limitX;
	}
	
	var targetAcceleration = acceleration;
	if (speed < maxSpeed / 2) {
		targetAcceleration /= 10;
	}
	
	speed = (1.0 + (targetAcceleration / 100)) * speed;
	if (speed > maxSpeed) {
		speed = maxSpeed;
	}
	
	if (speed > maxSpeed / 3) {
		// shrink platform for easier access
		this.transform.localScale.x = 8;
	}
	
	this.transform.position.x += Time.deltaTime * speed;
	
	if (this.transform.position.x > limitX) {
		restarted = 1;
	} 
	
}