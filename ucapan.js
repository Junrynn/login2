var day = new Date();
var currentHour = day.getHours();
if (currentHour >= 0 && currentHour < 12) {
	document.write("Selamat Pagi");
} else if (currentHour == 12) {
	document.write("Selamat Siang");
} else if (currentHour >= 12 && currentHour <= 17) {
	document.write("Selamat Sore");
} else {
	document.write("Selamat Malam");
}