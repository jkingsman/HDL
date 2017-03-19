(function(window) {
    'use strict';

    /**
     * The master HDL object
     * @constructor
     */
    function define_HDL() {
        var HDL = {};

        /**
         * Strobes the screen at a given frequency, color, and opacity
         * @param {Number} frequency strobe frequency in Hertz
         * @param {Number} color CSS-valid color designator
         * @param {Number} opacity CSS opacity selector (0-1)
         * @returns {Number} the action id of the strobe, used in cancellation
         */
        HDL.strobe = function(frequency, color, opacity) {
            var overlay = document.createElement('div');

            // cover the whole page
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.position = 'fixed';
            overlay.style.top = 0;
            overlay.style.left = 0;
            overlay.style.zIndex = 99999;
            overlay.style.background = color;
            overlay.style.opacity = opacity;

            // avoid blocking clicks
            overlay.style.pointerEvents = 'none';
            overlay.id = 'HDLOverlay' + Math.floor(Math.random() * 16777215).toString(16); // nice random ID
            document.body.appendChild(overlay);

            // convert frequency
            var period = 1 / frequency;

            // the period will be the time it takes for an on/off sequence so the color switch will be at twice that speed in ms
            var changeInterval = (period / 2) * 1000;

            // set to check color at that interval
            return setInterval(function(overlayID, opacity) {
                var overlay = document.getElementById(overlayID);

                // toggle the overlay with the corrected opacity
                if (overlay.style.opacity == 0) { // jshint ignore:line
                    overlay.style.opacity = opacity;
                } else {
                    overlay.style.opacity = 0;
                }


            }, changeInterval, overlay.id, opacity) + '-' + overlay.id;
        };

        /**
         * Plays a sound fetched (GET) from an external URL
         * @param {String} url URL of the sound file
         * @param {Boolean} loop indicate whether the file should be looped or not
         */
        HDL.playSound = function(url, loop) {
            var soundRequest = new XMLHttpRequest();
            window.AudioContext = window.AudioContext || window.webkitAudioContext; // shims...
            var context = new AudioContext();

            soundRequest.open('GET', url, true);
            soundRequest.responseType = 'arraybuffer';

            soundRequest.onload = function() {
                context.decodeAudioData(soundRequest.response, function(buffer) {
                    var source = context.createBufferSource();
                    source.buffer = buffer;
                    source.connect(context.destination);
                    source.start(0);
                    source.loop = loop;
                }, function(error) {
                    console.log('Audio error: ' + error);
                });
            };

            soundRequest.send();
        };

        /**
         * Plays a sine wave at the given frequency in Hz
         * @param {Number} frequency desired frequency of sine wave
         */
        HDL.playTone = function(frequency) {
            window.AudioContext = window.AudioContext || window.webkitAudioContext; // shims...
            var context = new AudioContext();

            var oscillator = context.createOscillator();
            oscillator.type = 'sine';
            oscillator.frequency.value = frequency; // value in hertz
            oscillator.connect(context.destination);
            oscillator.start();
        };

        /**
         * Synthesizes speech using the native library (not supported by all browsers)
         * @param {String} text text to be spoken
         */
        HDL.speak = function(text) {
            var speaker = new SpeechSynthesisUtterance();
            speaker.text = text;
            speaker.voice = speechSynthesis.getVoices()[0];
            speaker.volume = 1;
            speaker.rate = 1;
            speaker.pitch = 1;

            window.speechSynthesis.speak(speaker);
        };

        /**
         * Scroll the page in a random vertical direction
         * @param {Number} pixels number of pixels to scroll
         * @param {Number} interval time in ms between each jump
         * @returns {Number} the action id of the scroller, used in cancellation
         */
        HDL.randomScroll = function(pixels, interval) {
            return setInterval(function(pixels) {
                if (Math.random() >= 0.5) {
                    window.scrollBy(0, -1 * pixels);
                } else {
                    window.scrollBy(0, pixels);
                }
            }, interval, pixels);
        };

        /**
         * Cancels an action
         * @param {Number} actionID action ID as returned by the initiator
         */
        HDL.cancelAction = function(actionID) {
            // break the action ID into the ID and DOM object ID if it has it
            var idAndDOMObj = String(actionID).split('-');

            // clear the interval
            clearInterval(idAndDOMObj[0]);

            if (idAndDOMObj.length > 1) {
                // we have a DOM object ID
                document.getElementById(idAndDOMObj[1]).remove();
            }
        };


        return HDL;
    }

    // define globally if it doesn't already exist
    if (typeof(HDL) === 'undefined') {
        window.HDL = define_HDL();
    } else {
        console.log('HDL already instantiated or declared');
    }
})(window);
