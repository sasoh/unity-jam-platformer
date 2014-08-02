#pragma strict

var dead: int = 0;
var showGameOver = 0;
	
final var gameOverW = 100;
final var gameOverH = 50;

var deathSound: AudioSource;

var playAudio = 0;

var lastSurvived: float = 0.0;

function OnGUI() {

	if (dead == 0) {
		lastSurvived = Time.timeSinceLevelLoad;
	}
	
	var shiftSign = 0.0;
	
	if (showGameOver == 1) {
		shiftSign = Screen.width / 2 - gameOverH;
		if (GUI.Button(Rect((Screen.width - gameOverW) / 2, (Screen.height - gameOverH / 2) / 2, gameOverW, gameOverH), "You died\nRestart Level")) {
      		Application.LoadLevel (Application.loadedLevelName);
   		}
	}
	
	GUI.Box(Rect(Screen.width / 2 - gameOverW, gameOverH + shiftSign, 2 * gameOverW, gameOverH / 2), "Survived for " + lastSurvived.ToString("f2") + " seconds");
}	

function Start () {

	Screen.showCursor = false;
		
}

function Update () {

	if (Input.GetKey ("escape")) {
		Application.Quit();
	}

	if (this.transform.position.y <= -10.0) {
		dead = 1;
	}
	
	if (dead == 1) {
		//this.gameObject.SetActive(false);
		showGameOver = 1;
		
		if (playAudio == 0) {
			playAudio = 1;
			deathSound.Play();
					
			Screen.showCursor = true;
		}
	}
	
}