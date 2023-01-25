var telInput = $("#phone"),
errorMsg = $("#error-msg"),
validMsg = $("#valid-msg");

// initialise plugin
telInput.intlTelInput({

allowExtensions: true,
formatOnDisplay: true,
autoFormat: true,
autoHideDialCode: true,
autoPlaceholder: true,
defaultCountry: "IN",
ipinfoToken: "yolo",

nationalMode: false,
numberType: "MOBILE",
//onlyCountries: ['IN','us', 'gb', 'ch', 'ca', 'do'],
preferredCountries: ['IN', 'us', 'gb','ch','ca','do','ma'],
preventInvalidNumbers: true,
separateDialCode: true,
initialCountry: "auto",
geoIpLookup: function(callback) {
$.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
  var countryCode = (resp && resp.country) ? resp.country : "";
  callback(countryCode);
});
},
 utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.9/js/utils.js"
});

var reset = function() {
telInput.removeClass("error");
errorMsg.addClass("hide");
validMsg.addClass("hide");
};

// on blur: validate
telInput.blur(function() {
reset();
if ($.trim(telInput.val())) {
  if (telInput.intlTelInput("isValidNumber")) {
    validMsg.removeClass("hide");
  } else {
    telInput.addClass("error");
    errorMsg.removeClass("hide");
  }
}
});

// on keyup / change flag: reset
telInput.on("keyup change", reset);












const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const paginationBtns = document.querySelectorAll(".pagination-btn");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

let currentSlide = 0;

// Initialize the slider
updateSlider();
// Add event listener to the pagination buttons
paginationBtns.forEach((button, index) => {
	button.addEventListener("click", () => {
		currentSlide = index;

		updateSlider();
	});
});

// Add event listener to the control buttons

prevBtn.addEventListener("click", () => {
	currentSlide--;
	updateSlider();
});
nextBtn.addEventListener("click", () => {
	currentSlide++;
	updateSlider();
});

function updateSlider() {
	// update slides

	slides.forEach((slide, index) => {
		slide.classList.remove("active");

		if (index === currentSlide) {
			slide.classList.add("active");
		}
	});
	// Update pagination buttons

	paginationBtns.forEach((button, index) => {
		button.classList.remove("active");

		if (index === currentSlide) {
			button.classList.add("active");
		}
	});
	// Update control buttons

	if (currentSlide === 0) {
		prevBtn.disabled = true;
	} else {
		prevBtn.disabled = false;
	}
	if (currentSlide === slides.length - 1) {
		nextBtn.disabled = true;
	} else {
		nextBtn.disabled = false;
	}
}


$('.carousel').carousel({
  interval: 0.2
})



//..................
function increment() {
  	const cnt = document.getElementById('demoInput');
	cnt.stepUp(1);
  	const people = cnt.value;
	const price = getElementById('amount').value;
    document.getElementById('totalPrice').value = Number(price)*Number(people);
}
function decrement() {
	const cnt = document.getElementById('demoInput');
	cnt.stepDown(1);
  	const people = cnt.value;
	const price = getElementById('amount').value;
    document.getElementById('totalPrice').value = Number(price)*Number(people);
}

// function myFunction() {
// 	var checkBox = document.getElementById("inlineCheckbox1");
// 	var text = document.getElementById("By_state");
// 	if (checkBox.checked == true){
// 	  text.style.display = "block";
	  
// 	} else {
// 	   text.style.display = "none";
// 	}
//   }

var totalPrice=document.getElementById('totalPrice');
var num=12;
totalPrice.value=num;

