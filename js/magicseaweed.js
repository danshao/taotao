// swell : http://chart-a.metcentral.com/wave/750/61-1339761600-HnowGW.png
// period : http://chart-a.metcentral.com/wave/750/61-1339718400-PERPW.png
// wind : http://chart-a.metcentral.com/gfs/750/61-1339794000-WMAG.png


// http://magicseaweed.com/China-MSW-Surf-Charnow/78/?imageScale=wind&size=750&chartType=WMAG&zeroHourTimestamp=1339632000&endTimestamp=1340236800&gc=off&gcSpot=&gcWave=1&gcPeriod=9

function getTT() {
	var now = new Date();
	var offset = now.getTimezoneOffset();
	var wavemap = [];
	offset = offset / 60;
	now.setHours(-offset);
	now.setMinutes(0);
	now.setSeconds(0);
	now = Math.floor(now.getTime() / 1000);
	// console.log(now);
	for(var x = 0; x < 41; x++) {
		image = now + x*3600*3;
		// Convert unix timestamp back into readable date
		date = new Date(image * 1000);
		date = date.toGMTString();
		wavemap.push({date: x*3 + "hr " + date, 
			swellImage: "http://chart-a.metcentral.com/wave/750/61-" + image + "-HTSGW.png",
			periodImage: "http://chart-a.metcentral.com/wave/750/61-" + image + "-PERPW.png",
			windImage: "http://chart-a.metcentral.com/gfs/750/61-" + image + "-WMAG.png"
			});
	}
	console.log(wavemap);
	return wavemap;
}