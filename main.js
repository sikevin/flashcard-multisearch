document.getElementById("boxu").onkeydown = function(e) {searchy(e)};
function searchy(e)
{
    if (e.which == 13)
    {
        var lang = document.getElementById("lang").value;
        var q = document.getElementById("boxu").value;
        switch (lang) {
            case "en":
                window.open("https://translate.google.com/?source=gtx&sl=en&tl=fr&text=" + q + "&op=translate");
                window.open("https://www.google.com/search?hl=EN&tbm=isch&q=" + q);
                window.open("http://www.forvo.com/word/" + q + "/#en");
                window.open("https://dictionary.cambridge.org/fr/dictionnaire/anglais/" + q);
                break;
            case "fr":
                window.open("https://translate.google.com/?source=gtx&sl=en&tl=fr&text=" + q + "&op=translate");
                window.open("https://www.google.com/search?hl=FR&tbm=isch&q=" + q);
                window.open("http://www.forvo.com/word/" + q + "/#fr");
                break;
            case "de":
                window.open("http://translate.google.com/translate?hl=en&sl=de&tl=en&u=http%3A%2F%2Fwww.google.de%2Fsearch%3Fq%3D" + q + "%26num%3D10%26hl%3Dde%26tbo%3Dd%26site%3Dimghp%26tbm%3Disch%26sout%3D1%26biw%3D1075%26bih%3D696");
                window.open("http://www.forvo.com/word/" + q + "/#de");
                window.open("http://www.dict.cc/?s=" + q);
                window.open("http://translate.google.com/translate?sl=de&tl=en&u=http%3A%2F%2Fde.thefreedictionary.com%2F" + q);
                break;
        }
        
        document.getElementById("boxu").value = "";
    }
}