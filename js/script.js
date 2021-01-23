let i = 0;
let txt = `A software engineer based in Ibadan, Oyo state, Nigeria. I specialize in building exceptional, high-quality websites and applications.` /* The text */
let speed = 80; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("p-text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = typeWriter();