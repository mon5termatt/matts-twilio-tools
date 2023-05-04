exports.handler = function (context, event, callback) {
  const twiml = new Twilio.twiml.VoiceResponse();
  twiml.play('https://github.com/mon5termatt/matts-twilio-tools/raw/main/river.mp3');

  callback(null, twiml);
};
