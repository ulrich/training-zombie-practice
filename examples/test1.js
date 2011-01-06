var zombie = require("zombie");
var assert = require("assert");

function evaluate() {
	// load the page from localhost
	zombie.visit("http://127.0.0.1:8080/", function (err, browser) {
	  // fill email, password and submit form
	  browser.clickLink("Request Rewrite Servlet", function(err, browser) {
	      if (null != err) {
		     console.log(err);
	      }
	
		  try {
	         assert.equal(browser.location.href, "http://127.0.0.1:8080/rewrites/");
		  } catch(err) {
			console.log(err);
		  }
	    })
	});
}
