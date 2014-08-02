#pragma strict

private var platformSpeed: float = 15.0f;
private var checkpointTime: float = 15.0f;
private var checkpointSpeedGain: float = 0.1f;
private var checkpointSpeedGainMinimum: float = 1.0f;

public var platform1: GameObject;
public var platform2: GameObject;
public var platform3: GameObject;
public var platform4: GameObject;
public var platform5: GameObject;
public var platform6: GameObject;

private var platforms: Array;

function Start () {
	
	platforms = [
		platform1,
		platform2,
		platform3,
		platform4,
		platform5,
		platform6
	];
		
}

function Update () {

	for (var obj: GameObject in platforms) {
		var speedBonusTimes: int = (Time.timeSinceLevelLoad + checkpointTime) / checkpointTime;
		var speedBonusMultiplier: float = speedBonusTimes * checkpointSpeedGain;
		speedBonusMultiplier += checkpointSpeedGainMinimum;
		
		var currentPlatformSpeed: float = platformSpeed * speedBonusMultiplier;
		
		obj.transform.position.x += currentPlatformSpeed * Time.deltaTime;
		
		if (obj.transform.position.x >= 50.0f) {
			obj.transform.position.x = -50.0f;
		}
	}

}