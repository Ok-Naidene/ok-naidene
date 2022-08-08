function TextToSpeech()
{
    //create object of the JS browser Speech API 
    const speech = new SpeechSynthesisUtterance();
    //load a list of computer voices 
    let voices = speechSynthesis.getVoices();

    //get text from the input field 
    let convert = document.getElementById("text").value;

    speech.text = convert;
    
    //need these 3 values for text to speech to work 
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    // assign voice to speak

    speech.voice = voices[1];
    window.speechSynthesis.speak(speech);

}
function Clear()
{
    document.getElementById("text").value = "";
}