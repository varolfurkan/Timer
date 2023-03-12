// Kullanıcıdan adını alın
let name = prompt("Lütfen adınızı giriniz..")
// myName ID'sine sahip öğeyi seçin ve içeriğini değiştirin
document.querySelector("#myName").innerHTML = name



// showTime fonksiyonunu oluşturun
function showTime() {
    // myClock ID'sine sahip öğeyi seçin
    let myClock = document.getElementById("myClock");
    // Şuanki zamanı alın
    let now = new Date();

    // Saat, dakika ve saniyeyi alın
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Günü alın
    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let day = days[now.getDay()];

    // Saati biçimlendirin
    if (hours < 10) {
        hours = "0" + hours;
    }

    // Dakikayı biçimlendirin
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    // Saniyeyi biçimlendirin
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // Şuanki zamanı ekrana yazdırın
    myClock.innerHTML = hours + ":" + minutes + ":" + seconds + " " + day;
}

// showTime fonksiyonunu her saniye çağırın
setInterval(showTime, 1000);


