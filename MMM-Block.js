/* Magic Mirror Module: MMM-Block
 * v0.1 - Apr 2020
 * By Brendan Keyport <brendan.keyport@gmail.com>
 *
 */

Module.register("MMM-Block", {

  // Override dom generator.
  getDom: function() {
	var wrapper = document.createElement("div");
    wrapper.innerHTML = "<table border=1 style='table-layout:fixed width=301px'><tr style='height:320px'><td style='text-align:center'>Reserved for Camera</td></tr></table>";
    return wrapper;
  }
});
