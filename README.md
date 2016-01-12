# imstillhere
An idle timer jquery plugin (V 0.0.2)

## Here's an Example Configuration:

**html**

```
<a href="#" class="stillhere">I'm Still Here</a>
```

**Javascript**

```
$(document).ready(function() {
  var imStillHere = $.imStillHere({
    idleTimeLimit: 10,
    redirectTimeLimit: 5,
    debug: true,
    onIdleLimit: function(settings, resetTimer) {
      console.log("idle limit reached");
      $('.stillhere').on('click', function() {
      	console.log("timer reset!");
        resetTimer();
      })
    },
    onRedirectLimit: function(settings) {
        console.log("Redirecting");
    },
  });
});
```

## Variable Settings

**Debug**

This setting is useful for turning on logging. It is set to false by default.

**idleTimeCheck**

The amount of time, in seconds, that the plugin checks to see if the user has
hit or has gone past the idle time limit. One argument is passed into this
callback; settings. This allows you to access the settings for the plugin
from the callback.

**idleTimeLimit**

The amount of time, in seconds, that the user can sit idle
before the onIdleLimit callback method is called. Two arguments are
passed into this callback; settings and resetTimer
(a function used to reset the timer).

**redirectTimeLimit**

This is the grace period, after the idle time limit has been reached, that the
user has before the onRedirectLimit method is called.

## Callback Settings

**onIdleLimit**

This setting stores a callback method that will be fired upon reaching the idle
limit set in settings. This is useful for modal windows, general messages, etc.

**onRedirectLimit**

This setting stores a callback method that will be fired upon reaching the
redirect grace period set by redirectTimeLimit. This is useful for redirecting
users to other pages.
