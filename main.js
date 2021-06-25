function preload(){

}

function setup(){
    canvas = createCanvas(400,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/BEEEBZDFc/model.json", modelLoaded);
}

function modelLoaded(){
    console.log("Model is Ready");
}

function draw(){
    image(video,0,0,400,300);
    classifier.classify(video, gotResults);
}

function gotResults(error, results){
    if(error){
    console.error(error);
    }
    else {
    console.log(results);
    document.getElementById("objectPResults").innerHTML = results[0].label;
    document.getElementById("accPResults").innerHTML = results[0].confidence.toFixed(3);
    }
}