# MagicMirror² Module to vertically move modules on screen to account for external windows.

The only valid copy of this module is on https://github.com/BKeyport/MMM-Block - any others are not valid. 

If you fork and change any code, please let me know, if it's useful for the general public, I'd love to add it!

If you find this module useful, and would like to contribute to the project, I appreciate the thought. Instead of giving to me, please donate to a disability rights organization of your choice. 
THANK YOU for your consideration.

Before use of this magic mirror module, please read the license section below. 

This is a module for the [MagicMirror²](https://github.com/MagicMirrorOrg/MagicMirror) project. 

It's purpose is to move modules to not be hidden behind external modules. An example of use would be to move a module down to allow OMXPLayer to run on top of the MagicMirror² Screen. 

## Installation

Clone this repository in your ~/MagicMirror/modules/ folder ( $ cd ~/MagicMirror/modules/ ):

```bash
cd ~/MagicMirror/modules
git clone https://github.com/BKeyport/MMM-Block.git
```
## Update

Go to the module's folder inside MagicMirror² modules folder and pull the latest version from GitHub:

``` bash
cd ~/MagicMirror/modules/MMM-Block
git pull
```

## Using the module

To use this module, add it to the modules array in the config/config.js file next to the module you'd like to move 
(Above the module if you want to move a module DOWN, below the module if you wanna move the module UP)

``` js
{ 
	module: 'MMM-Block',
	position: "top_right",
	config: {
		height: 600,
	}
},
```

The only config option is "height" - as seen above. Set it to the pixels (px) you'd like to move an item. 

## License
This project is licensed under the MIT License - see the LICENSE file for details. However, the following text is added:

Due to regulations being out of control, this software, as well as the entire MagicMirror project, may be illegal to use in any location with age verification laws. This software will cannot and will not provide any age verification. It is your responsibility to verify with your local government legality of software. The authors of this software and modules used both up and downstream from this product, cannot be held liable for use in a situation where age verification is required. This is your only notification.
