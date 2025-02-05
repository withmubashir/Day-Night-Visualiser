function updateVisualiser() {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const body = document.body;
    const icon = document.getElementById('icon');
    const timeDisplay = document.getElementById('current-time');


    const formattedTime = `${String(hour).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    timeDisplay.textContent = formattedTime;


    if (hour >= 6 && hour < 18) {

        body.style.background = 'linear-gradient(135deg, #87CEEB, #FFD700)';
        icon.innerHTML = '<i class="fas fa-sun"></i>';
        icon.classList.remove('moon');
    } else {

        body.style.background = 'linear-gradient(135deg, #0B3D91, #1C1C1C)';
        icon.innerHTML = '<i class="fas fa-moon"></i>';
        icon.classList.add('moon');
    }


    icon.style.transform = `rotate(${seconds * 6}deg)`;
}


setInterval(updateVisualiser, 1000);


updateVisualiser();