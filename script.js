let deathTimestamp;

function predictDeath() {
    let dob = document.getElementById("dob").value;
    let drugEffect = parseInt(document.getElementById("drug").value);
    let smokeEffect = parseInt(document.getElementById("smoke").value);
    let bmiEffect = parseInt(document.getElementById("bmi").value);
    let exerciseEffect = parseInt(document.getElementById("exercise").value);
    
    let resultDiv = document.getElementById("result");
    let deathDateDisplay = document.getElementById("deathDate");

    if (!dob) {
        alert("Please enter your date of birth.");
        return;
    }

    let birthYear = new Date(dob).getFullYear();
    let lifeExpectancy = 80;

    lifeExpectancy -= (drugEffect + smokeEffect + bmiEffect);
    lifeExpectancy += exerciseEffect;

    let deathYear = birthYear + lifeExpectancy;
    let deathMonth = Math.floor(Math.random() * 12);
    let deathDay = Math.floor(Math.random() * 28);
    let deathHour = Math.floor(Math.random() * 24);
    let deathMinute = Math.floor(Math.random() * 60);
    let deathSecond = Math.floor(Math.random() * 60);

    deathTimestamp = new Date(deathYear, deathMonth, deathDay, deathHour, deathMinute, deathSecond).getTime();

    resultDiv.style.display = "block";

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    let now = new Date().getTime();
    let timeLeft = deathTimestamp - now;

    if (timeLeft <= 0) {
        document.getElementById("deathDate").innerHTML = "<b>Oops! You have reached your predicted time!</b>";
        return;
    }

    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("deathDate").innerHTML = 
        `<b>${days} days ${hours} hours ${minutes} minutes ${seconds} seconds left</b>`;
}
