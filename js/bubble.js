// Chart docs https://www.chartjs.org/docs/latest/developers/api.html
$.ajaxSetup({ cache: false });  //Do not remove

// Set distances
var MOON = .75
var MARS = 10

// Set radii for objects
var big_r = 45
var sml_r = 15
var rkt_r = 5

// On page load -> chart 1
var ctxBc = document.getElementById('bubbleChart').getContext('2d');
var bubbleChart = new Chart(ctxBc, {
	type: 'bubble',
	data: {
		datasets: [{
			label: 'Earth',
			data: [{
				x: 0,
				y: 0,
				r: big_r
			}],
			backgroundColor: "blue",
			hoverBackgroundColor: "#ff6384",
		}, {
			label: 'Moon',
			data: [{
				x: MOON,
				y: 0,
				r: sml_r
			}],
			backgroundColor: "gray",
			hoverBackgroundColor: "#44e4ee"
		}, {
			label: 'Planet X',
			data: [{
				x: MARS,
				y: 0,
				r: big_r
			}],
			backgroundColor: "purple",
			hoverBackgroundColor: "#62088A"
		},
			{
			label: 'Rocket Distance',
			data: [{
				x: (MOON + MARS)/2,
				y: 0,
				r: 5
			}],
			backgroundColor: "yellow",
			hoverBackgroundColor: "#62088A"
		}]
	},
	options: {
        responsive: true,
        title: {
            display: true,
            text: 'Example Travel Distance'
        },
        scales: {
            xAxes: [{
                display: true,
                label: "Miles"
            }],
            yAxes: [{
                display: false,
			    ticks: {
			        stepSize: 1,
			        min: -1,
			        max: 1}
			            }]
        },
        animation: {
        	duration: 0
    		}
    }
})

// Example button click -> chart 2
$("#example").click(function() {
 var ctxBc = document.getElementById('bubbleChart2').getContext('2d');
 var bubbleChart = new Chart(ctxBc, {
	type: 'bubble',
	data: {
		datasets: [{
			label: 'Earth',
			data: [{
				x: 0,
				y: 0,
				r: big_r
			}],
			backgroundColor: "blue",
			hoverBackgroundColor: "#ff6384",
		}, {
			label: 'Moon',
			data: [{
				x: MOON,
				y: 0,
				r: sml_r
			}],
			backgroundColor: "gray",
			hoverBackgroundColor: "#44e4ee"
		}, {
			label: 'Planet X',
			data: [{
				x: MARS,
				y: 0,
				r: big_r
			}],
			backgroundColor: "purple",
			hoverBackgroundColor: "#62088A"
		},
			{
			label: 'Rocket Distance',
			data: [{
				x: 6		, //TODO - put in my calculated value
				y: 0,
				r: 5
			}],
			backgroundColor: "yellow",
			hoverBackgroundColor: "#62088A"
		}]
	},
	options: {
        responsive: true,
        title: {
            display: true,
            text: 'Example Calculation of Travel Distance'
        },
        scales: {
            xAxes: [{
                display: true
            }],
            yAxes: [{
                display: false
            }]
        },
        animation: {
        	duration: 0
    		}
    }
	});
});

// Calculate button click -> chart 3
$("#inputs").click(function() {
 var fuel_amount = parseInt($('#fuel_amount').val(), 10)
 var fuel_quality = parseInt($('#fuel_quality').val(), 10)
 //the rocket science variables
 var m_2 = 2+(fuel_amount/fuel_quality)
 var _F = m_2*fuel_quality
 var rocket_x = _F + m_2
 var rocket_accel = fuel_amount*fuel_quality
 var ctxBc = document.getElementById('bubbleChart3').getContext('2d');
 var bubbleChart = new Chart(ctxBc, {
	type: 'bubble',
	data: {
		datasets: [{
			label: 'Earth',
			data: [{
				x: 0,
				y: 0,
				r: big_r
			}],
			backgroundColor: "blue",
			hoverBackgroundColor: "#ff6384",
		}, {
			label: 'Moon',
			data: [{
				x: MOON,
				y: 0,
				r: sml_r
			}],
			backgroundColor: "gray",
			hoverBackgroundColor: "#44e4ee"
		}, {
			label: 'Planet X',
			data: [{
				x: MARS,
				y: 0,
				r: big_r
			}],
			backgroundColor: "purple",
			hoverBackgroundColor: "#62088A"
		},
			{
			label: 'Rocket Distance',
			data: [{
				x: 1 + rocket_x,
				y: 0,
				r: 5
			}],
			backgroundColor: "yellow",
			hoverBackgroundColor: "#62088A"
		}]
	},
	options: {
        responsive: true,
        title: {
            display: true,
            text: 'Calculation of Travel Distance With Your Values'
        },
        scales: {
            xAxes: [{
                display: true
            }],
            yAxes: [{
                display: false
            }]
        },
        animation: {
        	duration: 0
    		}
    }
	});
});