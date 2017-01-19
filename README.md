# HDL
Human disruption library -- strobe, mess with, and confuse to your heart's content.


* * *

# Usage

### HDL.strobe(frequency, color, opacity)

Strobes the screen at a given frequency, color, and opacity

**Parameters**

**frequency**: `Number`, strobe frequency in Hertz

**color**: `Number`, CSS-valid color designator

**opacity**: `Number`, CSS opacity selector (0-1)

**Returns**: `Number`, the action id of the strobe, used in cancellation

### HDL.playSound(url, loop)

Plays a sound fetched (GET) from an external URL

**Parameters**

**url**: `String`, URL of the sound file

**loop**: `Boolean`, indicate whether the file should be looped or not


### HDL.speak(text)

Synthesizes speech using the native library (not supported by all browsers)

**Parameters**

**text**: `String`, text to be spoken


### HDL.randomScroll(pixels, interval)

Scroll the page in a random vertical direction

**Parameters**

**pixels**: `Number`, number of pixels to scroll

**interval**: `Number`, time in ms between each jump

**Returns**: `Number`, the action id of the scroller, used in cancellation

### HDL.cancelAction(actionID)

Cancels an action

**Parameters**

**actionID**: `Number`, action ID as returned by the initiator




* * *
