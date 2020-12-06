const googleTTS = require('../dist/index');

const url = googleTTS.getAudioUrl('Hello World', { lang: 'en-GB' });
console.log(url); // https://translate.google.com/translate_tts?...
