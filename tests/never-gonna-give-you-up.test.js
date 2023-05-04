const neverGonnaGiveYouUp =
  require('../functions/never-gonna-give-you-up.protected').handler;
const helpers = require('../../test/test-helper');

describe('', () => {
  beforeAll(() => {
    helpers.setup({});
  });
  afterAll(() => {
    helpers.teardown();
  });

  test('returns the right song', (done) => {
    const callback = (_err, result) => {
      expect(result).toBeInstanceOf(Twilio.twiml.VoiceResponse);
      expect(result.toString()).toMatch(
        '<Response><Play>https://github.com/mon5termatt/matts-twilio-tools/raw/main/river.mp3</Play></Response>'
      );
      done();
    };
    neverGonnaGiveYouUp({}, {}, callback);
  });
});
