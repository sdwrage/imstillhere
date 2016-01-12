# imstillhere
An idle timer jquery plugin (V 0.0.1)

## Here's an Example Configuration:

```
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
```

## Variable Settings

**Debug**

This setting is useful for turning on logging. It is set to false by default.

**idleTimeCheck**

The amount of time, in seconds, that the plugin checks to see if the user has
hit or has gone past the idle time limit.

**idleTimeLimit**

The amount of time, in seconds, that the user can sit idle
before the onIdleLimit callback method is called.

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
