//*https://teachablemachine.withgoogle.com/models/oVJ6c605r/*//

function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/oVJ6c605r/model.json", hackReady());
    
}

function hackReady() {
    console.log("Hack has been deployed")
}