
const texts = [
"We don't just transport patients <br> We Transport Peace Of Mind",

"Keep Your Health Healthy <br> Take The Best Quality Ambulance Service"
];

let index = 0;

setInterval(() => {

    index = (index + 1) % texts.length;

    document.getElementById("changing-text").innerHTML = texts[index];

},4000);
const slogans = [

`We don't just transport patients
<span>We Transport Peace Of Mind</span>`,

`Keep Your Health Healthy
<span>Take The Best Quality Ambulance Service</span>`

];

let current = 0;

const text = document.getElementById("changing-text");

if(text){

    setInterval(() => {

        current = (current + 1) % slogans.length;

        text.style.opacity = "0";

        setTimeout(() => {

            text.innerHTML = slogans[current];

            text.style.animation = "none";
            text.offsetHeight;
            text.style.animation = "fadeText 1s ease";

            text.style.opacity = "1";

        },300);

    },5000);

}
const popup = document.getElementById("popup");
const openPopup = document.getElementById("openPopup");
const closePopup = document.getElementById("closePopup");

if(openPopup && popup){

    openPopup.onclick = function(){
        popup.style.display = "flex";
    };

}

if(closePopup && popup){

    closePopup.onclick = function(){
        popup.style.display = "none";
    };

}
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}

let bookings = [];

const bookingForm = document.getElementById("bookingForm");

if(bookingForm){

bookingForm.addEventListener("submit", function(e){

    e.preventDefault();

    let service = document.getElementById("service").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;

    let slot = service + date + time;

    if(bookings.includes(slot))
    {
        document.getElementById("message").innerHTML =
        "Sorry! This service is already booked for that time.";

        document.getElementById("message").style.color = "red";
    }
    else
    {
        bookings.push(slot);

        document.getElementById("message").innerHTML =
        "Booking successful. Our team will contact you shortly.";

        document.getElementById("message").style.color = "green";

        bookingForm.reset();
    }

});

}
const vision = document.querySelector(".vision-section");

window.addEventListener("scroll", function () {

    const vision = document.querySelector(".vision-section");

    if (vision) {

        let position = vision.getBoundingClientRect().top;

        let screenPosition = window.innerHeight - 100;

        if (position < screenPosition) {
            vision.classList.add("show");
        }
    }

});
const missionSection = document.querySelector(".mission-section");
const cards = document.querySelectorAll(".mission-card");

if(missionSection){

    const observer = new IntersectionObserver((entries) => {

        if(entries[0].isIntersecting){

            cards.forEach((card, index) => {

                setTimeout(() => {
                    card.classList.add("show");
                }, index * 300);

            });

        } else {

            cards.forEach(card => {
                card.classList.remove("show");
            });

        }

    }, {
        threshold: 0.3
    });

    observer.observe(missionSection);
}

