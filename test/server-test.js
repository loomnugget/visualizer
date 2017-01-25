'use strict';

const request = require('superagent');
const expect = require('chai').expect;
const url = 'http://localhost:3000';

require('../server.js');

const testMusic = {id: 'lullabies'};

describe('testing music routes', function() ({
  describe('testing GET /music'), function() {
    it('should return a music file') {
      request.get( `${url}/api/music/${this.testMusic.id}`){

      }
    }
  }
});
