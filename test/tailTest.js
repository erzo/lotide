const assert = require('chai').assert;
// const tail = require('../tail');

const _ = require('../index');

describe("#tail", () => {

  it(`returns ["Lighthouse", "Labs"] for ["Lighthouse", "Labs"]`, () => {
    assert.deepEqual(_.tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

});