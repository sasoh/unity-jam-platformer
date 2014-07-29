#pragma strict

var rotationTarget: float = 180.0;
public var rotationStep: float = 4.0;

private var totalRotation: float = -90.0;
private var startRotation: float = -90.0;
private var complete: boolean = false;
private var slowerAngle: float = 60.0;

function Start () {

	Screen.showCursor = false;
	transform.rotation = Quaternion.Euler(startRotation, 0, 0);

}

function Update () {

	if (complete == false) {
		if (totalRotation < rotationTarget) {
			var amountToRotate = rotationStep * Time.deltaTime;
			if (totalRotation > (startRotation + slowerAngle) && totalRotation < (rotationTarget - slowerAngle)) {
				amountToRotate = 0.5 * amountToRotate;
			}
			
			totalRotation += amountToRotate;

			var rotation = Quaternion.Euler(totalRotation, 0, 0);
			transform.rotation = rotation;
		} else {
			// animation finished, proceed to game
			complete = true;
			//print("Load next level");
			Application.LoadLevel("Game");
		}
	}
	
}