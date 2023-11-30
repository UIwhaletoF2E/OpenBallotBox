$(function() {
	
	$(".comma").each(function () {
		var originalNum = $(this).data('vote');
		var CommaNum = parseInt(originalNum);
	    $(this).prop('Counter',0).delay(880).animate({
	        Counter: CommaNum
	    }, {
	        duration: 1800,
	        easing: 'swing',
	        step: function (now) {
	            $(this).text(Math.ceil(now).toLocaleString('en'));
	        }
	    });
	});
	$(".number-vote").each(function () {
		var voteNum = $(this).text();
		var CommaVote = parseInt(voteNum);
	    $(this).prop('Counter',0).animate({
	        Counter: CommaVote
	    }, {
	        duration: 900,
	        easing: 'swing',
	        step: function (now) {
	            $(this).text(Math.ceil(now).toLocaleString('en'));
	        }
	    });
	});
	
	var animateBar =  $(".vote-bar");
	var animatedSpan = $(".vote-bar span");
	var targetHeight = $(".vote-bar").data('percentage');
	var aniPercent = targetHeight *0.5;
	animateBar.delay(1200).animate({
	  height: aniPercent + "px"
	}, {
	  		duration: 1400,
  			step: function (now, fx) {
				// 同時更新數字
				animatedSpan.text((now *2).toFixed(2) + '%');
			}
	});
	$( ".vote-count-switch div" ).on( "click", function() {
		showData('percent');

  		// on click and switch data-type
  		$('.vote-count-switch div').on('click', function () {
  		  var targetClass = $(this).hasClass('switch-percent') ? 'percent' : 'counts';
  		  showData(targetClass);
  		});
		function showData(targetClass) {
			$('.city-vote-showas').each(function () {
			  var dataValue = $(this).data(targetClass);
			  $(this).text(dataValue);
			  $(this).removeClass('percent counts').addClass(targetClass);
			});
	  
			// switch vote info switch-btn active class
			$('.vote-count-switch div').removeClass('active');
			$(`.switch-${targetClass}`).addClass('active');
			//add a comma for counts
			if ($(".city-vote-showas.counts").length) {
				$(".city-vote-showas.counts").each(function () {
					var addComma = $(this).text();
					// console.log(addComma);
					var addCommaNum = parseInt(addComma);
					addCommaNum = addCommaNum.toLocaleString("en-US");
					$(this).text(addCommaNum);
				});
			}
		}		
	});
	  
	
	//add custom attribute by identify city id
	$(".region-list .city").each(function () {
		var cityColor = $(this).data('party'),
			cityName = $(this).find('.city-name').text(),
			cityCode = $(this).data('city'),
			svgCity = $('#' + cityCode);
		//svgset theme color
		svgCity.addClass(cityColor);
		//svg set city name
		//svgCity.attr("data-cityname",cityName);
	});
	
	// $(".map svg path").each(function () {
	// 	let citySVG = $(this);
	// 	let nameText = $(this).data("cityname");
	// 	addLabelText(citySVG , nameText);

	// function addLabelText(bgPath, labelText){
	// 	let bbox = bgPath[0].getBBox();
	//    let x = bbox.x + bbox.width / 2;
	//    let y = bbox.y + bbox.height / 2;
	//     // Relative position adjustments
       
	
	//    // Create a <text> element
	//    let textElem = document.createElementNS(bgPath.namespaceURI, "text");
	//    textElem.setAttribute("x", x);
	//    textElem.setAttribute("y", y);
	//    textElem.setAttribute("fill","black");
	//    textElem.setAttribute("stroke","#fff");
	//    // Centre text horizontally at x,y
	//    textElem.setAttribute("text-anchor", "middle");
	//    // Give it a class that will determine the text size, colour, etc
	//    textElem.classList.add("label-text");
	//    // Set the text
	//    textElem.textContent = labelText;
	//    // Add this text element directly after the label background path
	//    bgPath.after(textElem);
	// }
	//});
	
	
	
});