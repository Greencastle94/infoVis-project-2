$(function(){
	// Load data on start
	var data_url = "data/WVSdata - Wave 6.csv";
	loadData(data_url);

	// Instantiate a slider
	var slider = $("input.slider");

	// For non-getter methods, you can chain together commands
	slider.slider({
		ticks: [3, 4, 5, 6],
		ticks_labels: ["1995-1998", "1999-2004", "2005-2009", "2010-2014"],
		min: 3,
		max: 6,
		step: 1,
		value: 6,
		tooltip: 'hide'
	})

	// Call a method on the slider
	var value = slider.slider('getValue');

	slider.on("slideStop", function(sliderEvent) {
		$("svg g").children().remove();

		switch(sliderEvent.value) {
    case 3:
        data_url = "data/WVSdata - Wave 3.csv"
				break;
    case 4:
				data_url = "data/WVSdata - Wave 4.csv"
				break;
		case 5:
        data_url = "data/WVSdata - Wave 5.csv"
				break;
		case 6:
        data_url = "data/WVSdata - Wave 6.csv"
				break;
    default:
				console.log("This shouldn't happen.");
		    break;
		}

		loadData(data_url);
	});
});
