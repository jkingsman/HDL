# HDL
Human disruption library -- strobe, mess with, and confuse to your heart's content.

* * *

# Usage

#### HDL.strobe(frequency, color, opacity)

Strobes the screen at a given frequency, color, and opacity




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| frequency | `Number`  | strobe frequency in Hertz | &nbsp; |
| color | `Number`  | CSS-valid color designator | &nbsp; |
| opacity | `Number`  | CSS opacity selector (0-1) | &nbsp; |




##### Returns


- `Number`  the action id of the strobe, used in cancellation



#### HDL.playSound(url, loop)

Plays a sound fetched (GET) from an external URL




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| url | `String`  | URL of the sound file | &nbsp; |
| loop | `Boolean`  | indicate whether the file should be looped or not | &nbsp; |




##### Returns


- `Void`



#### HDL.playTone(frequency)

Plays a sine wave at the given frequency in Hz




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| frequency | `Number`  | desired frequency of sine wave | &nbsp; |




##### Returns


- `Void`



#### HDL.speak(text)

Synthesizes speech using the native library (not supported by all browsers)




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| text | `String`  | text to be spoken | &nbsp; |




##### Returns


- `Void`



#### HDL.randomScroll(pixels, interval)

Scroll the page in a random vertical direction




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| pixels | `Number`  | number of pixels to scroll | &nbsp; |
| interval | `Number`  | time in ms between each jump | &nbsp; |




##### Returns


- `Number`  the action id of the scroller, used in cancellation



#### HDL.cancelAction(actionID)

Cancels an action




##### Parameters

| Name | Type | Description |  |
| ---- | ---- | ----------- | -------- |
| actionID | `Number`  | action ID as returned by the initiator | &nbsp; |




##### Returns


- `Void`
* * *
