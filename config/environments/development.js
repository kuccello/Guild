/*
 * Geddy JavaScript Web development framework
 * Copyright 2112 Matthew Eernisse (mde@fleegix.org)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
*/

//var config = new function () {
//  this.detailedErrors = true;
//  this.hostname = null;
//  this.port = 4000;
//  this.sessions = {
//    store: 'memory'
//    , key: 'sid'
//    , expiry: 14 * 24 * 60 * 60
//  };
//  /*
//  this.database = {
//    adapter: 'sqlite'
//    , dbName: 'geddy_db'
//  };
//  */
//}();
//
//module.exports = config;

var config = new function () {
  this.detailedErrors = true;
  this.database = {
    adapter: 'couchdb'
    , hostname: 'localhost'
    , dbName: 'guild_db'
    , port: 5984
  };

}();

module.exports = config;