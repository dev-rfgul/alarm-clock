const updateTime = () => {
  let d = new Date();

  pakistan.innerHTML = d
    .toLocaleString("en-US", {
      timeZone: "Asia/Karachi",
    })
    .split(", ")[1];


  let alarmHourPak = alarmPak.value.split(":")[0];
  let alarmMinutePak = alarmPak.value.split(":")[1];
  // console.log(d.getMinutes(), alarmMinute);

  if (d.getHours() == alarmHourPak && d.getMinutes() == alarmMinutePak) {
    console.log("alarm is running");

    let audioPath = "alarm.mp3.wav"; // Replace with the correct audio file name and extension
    var audio = new Audio(audioPath);

    audio.addEventListener("canplaythrough", function () {
      audio.play();
    });
  }
};

setInterval(() => {
  date=new Date()
  hourTime  = date.getHours()
  minuteTime= date.getMinutes()
  secondTime= date.getSeconds()
  hourRotation= 30*hourTime + minuteTime/2
  minuteRotation= 6*minuteTime
  secondRotation= 6*secondTime

  hour.style.transform=`rotate(${hourRotation}deg)`
  minute.style.transform=`rotate(${minuteRotation}deg)`
  second.style.transform=`rotate(${secondRotation}deg)`
 
}, 1000);

setInterval(updateTime, 1000);
