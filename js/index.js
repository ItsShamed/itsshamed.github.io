let placeholder = document.getElementById("tooltip-placeholder");

document.getElementById("github").addEventListener("mouseover",  ev => {
    placeholder.textContent = "GitHub (ItsShamed)";
})

document.getElementById("yt").addEventListener("mouseover", ev => {
    placeholder.textContent = "YouTube (Ruki)";
})

document.getElementById("twitch").addEventListener("mouseover",  ev => {
    placeholder.textContent = "Twitch (Tsu_Ruki)";
})

document.getElementById("twitter").addEventListener("mouseover", ev => {
    placeholder.textContent = "Twitter (@ItsShamed)";
})

document.getElementById("discord").addEventListener("mouseover", ev => {
    placeholder.textContent = "Discord (Ruki#8873)";
})

document.getElementById("soundcloud").addEventListener("mouseover", ev => {
    placeholder.textContent = "SoundCloud (Ruki / itsshamed)";
}) 