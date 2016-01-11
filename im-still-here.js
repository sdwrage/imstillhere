(function($) {
	// Default Settings
  var defaults = {
     idleTimeLimit: 7200,
     redirectTimeLimit: 10,
     idleTimeCheck: 5,
     debug: false,
     onIdleLimit: function() {},
     onRedirectLimit: function() {window.location.href = "http://www.github.com/sdwrage/imstillhere"}
  };

  $.extend({
    imStillHere: function(options) {
    	// Merging of custom settings
    	var settings = $.extend({}, defaults, options);

      // Setup
      var lastActiveTime = Date.now();
      var idleTime = Date.now();
      if (settings.debug) {
      	console.log('I am initializing idle timer now!');
      }

      $(document).on('click mousemove keypress', function() {
      	lastActiveTime = Date.now();
        if (settings.debug) {
        	console.log("movement!");
        }
      });

      setInterval(function() {
      	console.log(lastActiveTime);
        idleTime = Date.now() - lastActiveTime;
      	if (idleTime > settings.idleTimeLimit * 1000) {
        	settings.onIdleLimit(settings);
          if (idleTime >= settings.idleTimeLimit * 1000 + settings.redirectTimeLimit * 1000) {
          	settings.onRedirectLimit(settings);
          }
        }
      }, settings.idleTimeCheck * 1000);
    }
  });
}(jQuery));

$(document).ready(function() {
	var imStillHere = $.imStillHere({
    idleTimeLimit: 10,
    redirectTimeLimit: 6,
    debug: true,
    onIdleLimit: function() {
      console.log("idle limit reached");
    },

    onRedirectLimit: function() {
    	console.log("Redirecting");
    },
  });
});
