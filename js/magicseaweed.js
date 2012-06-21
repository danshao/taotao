// swell : http://chart-a.metcentral.com/wave/750/61-1339761600-HnowGW.png
// period : http://chart-a.metcentral.com/wave/750/61-1339718400-PERPW.png
// wind : http://chart-a.metcentral.com/gfs/750/61-1339794000-WMAG.png


// http://magicseaweed.com/China-MSW-Surf-Charnow/78/?imageScale=wind&size=750&chartType=WMAG&zeroHourTimestamp=1339632000&endTimestamp=1340236800&gc=off&gcSpot=&gcWave=1&gcPeriod=9

function getTT() {
	var now = new Date();
	var offset = now.getTimezoneOffset();
	var imgArray = new Array();
	offset = offset / 60;
	now.setHours(-offset);
	now.setMinutes(0);
	now.setSeconds(0);
	now = Math.floor(now.getTime() / 1000);
	var bg = "url(http://chart-a.metcentral.com/wave/750/61-" + now + "-HTSGW.png)";
	for(var x = 0; x < 9; x++) {
		temp = now + x*3600*3;
		imgArray.push("http://chart-a.metcentral.com/wave/750/61-" + temp + "-HTSGW.png")
		//temp = new Date(temp*1000);
		//temp.setHours(offset);
	}
	return imgArray;
}