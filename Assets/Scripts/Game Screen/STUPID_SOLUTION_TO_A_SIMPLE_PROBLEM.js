#pragma strict

var originalPosition;
var originalRotation;

function Awake () {
	
	originalPosition = this.transform.position;
	originalRotation = this.transform.rotation;
}

function Start () {

}

function Update () {

}

function LateUpdate () {
	
	this.transform.position = originalPosition;
	this.transform.rotation = originalRotation;
}