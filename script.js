function updateTime() {
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let am = h >= 12 ? 'PM' : 'AM';

    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');

    // Convert to 12-hour format
    let displayHour = h % 12;
    displayHour = displayHour ? displayHour : 12; // Display "12" instead of "0"

    // Add leading zeros
    let formattedHour = displayHour < 10 ? '0' + displayHour : displayHour;
    let formattedMinute = m < 10 ? '0' + m : m;
    let formattedSecond = s < 10 ? '0' + s : s;

    // Update the HTML
    hours.innerHTML = formattedHour;
    minutes.innerHTML = formattedMinute;
    seconds.innerHTML = formattedSecond;
    ampm.innerHTML = am;

    // Update the stroke dashoffset for each circle
    hh.style.strokeDashoffset = 440 - (440 * displayHour) / 12; // For hours
    mm.style.strokeDashoffset = 440 - (440 * m) / 60; // For minutes
    ss.style.strokeDashoffset = 440 - (440 * s) / 60; // For seconds
}

// Update time every second
setInterval(updateTime, 1000);

// Initial call to display time immediately
updateTime();