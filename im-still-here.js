(function($) {
	// Default Settings
  var defaults = {
     idleTimeLimit: 7200,
     redirectTimeLimit: 10,
     idleTimeCheck: 5,
     debug: false,
     onIdleLimit: function() {},
     onRedirectLimit: function() {}
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

      var checkMovement = function() {
      	lastActiveTime = Date.now();
        if (settings.debug) {
        	console.log("movement!");
        }
      }

      var resetTimer = function() {
      	lastActiveTime = Date.now();
        $(document).on('click mousemove keypress', checkMovement);
      }

      $(document).on('click mousemove keypress', checkMovement);

      setInterval(function() {
        idleTime = Date.now() - lastActiveTime;
      	if (idleTime > settings.idleTimeLimit * 1000) {

          $(document).off('click mousemove keypress', checkMovement);
        	settings.onIdleLimit(settings, resetTimer);

          if (idleTime >= settings.idleTimeLimit * 1000 + settings.redirectTimeLimit * 1000) {
          	settings.onRedirectLimit(settings);
          }
        }
      }, settings.idleTimeCheck * 1000);
    }
  });
}(jQuery));
