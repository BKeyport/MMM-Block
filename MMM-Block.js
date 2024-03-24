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
// Add CSS.
	getStyles: function() {
		return ["MMM-Block.css"];
	},
// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = "<div style='height:" + this.config.height + "px; padding: 0'></div>";
		return wrapper;
	}
}
);
