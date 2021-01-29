# MagicMirror Module to vertically move modules on screen to account for external windows (OMXPlayer, for instance) 

This is a module for the [MagicMirror](https://github.com/MichMich/MagicMirror) project. 

It's purpose is to move modules to not be hidden behind external modules. An example of use would be to move a module down to allow OMXPLayer to run on top of the MagicMirror Screen. 

## Installation

Clone this repository in your ~/MagicMirror/modules/ folder ( $ cd ~MagicMirror/modules/ ):

```
git clone https://github.com/BKeyport/MMM-Block.git
```

## Using the module

To use this module, add it to the modules array in the config/config.js file next to the module you'd like to move 
(Above the module if you want to move a module DOWN, below the module if you wanna move the module UP)

```
{ 
	module: 'MMM-Block',
	position: "top_right",
	config: {
		height: 600,
	}
},
```

The only config option is "height" - as seen above. Set it to the pixels (px) you'd like to move an item. 


