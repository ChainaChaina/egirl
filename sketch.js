let video;

let label = "Aguarde...";

let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/Q8YXh43s/';


function preload() {
    classifier = ml5.imageClassifier(modelURL + 'model.json');
}

function setup() {
    createCanvas(640, 520);

    video = createCapture(VIDEO);
    video.hide();


    classifyVideo();
}


function classifyVideo() {
    classifier.classify(video, gotResults);
}

function draw() {
    background(0);


    image(video, 0, 0);


    textSize(32);
    textAlign(CENTER, CENTER);
    fill(255);
    text(label, width / 2, height - 20);
}


function gotResults(error, results) {

    if (error) {
        console.error(error);
        return;
    }

    label = results[0].label;
    confidence = results[0].confidence;

    classifyVideo();
}