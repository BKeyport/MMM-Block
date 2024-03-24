/* Magic Mirror Module: MMM-Block
 * v1.1 - Jan 2021
 * By Brendan Keyport <brendan.keyport@gmail.com>
 *
 */

Module.register("MMM-Block", {
// Module config defaults.
  defaults: {
	  height: 600,
  },
  // Override dom generator.
  getDom: function() {
	var wrapper = document.createElement("div");
    //wrapper.innerHTML = "<table border=0 style='table-layout:fixed width=301px'><tr style='height:" + this.config.height + "px'><td style='text-align:center'>&nbsp;</td></tr></table>";
    wrapper.innerHTML = "<div style='height:" + this.config.height + "px; padding: 0'></div>";
    return wrapper;
  }
}
);
