/**
 * .dom - A Tiny VDom Template Engine
 *
 * Copyright 2017 Ioannis Charalampidis (wavesoft)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
((global, document, Object, vnodeFlag, globalState, createElement, render, wrapClassProxy) => {

  /**
   * For the NPM export we are going to do some post-processing to the functions
   * so we are exposing the objects to a private scope
   */
  @include('../dotdom.js')

  /**
   * Utility function to recursively flatten nested array structures.
   *
   * @param {Array} ary - The array to flatten
   * @returns {Array} - Returns a flat array
   */
  function flatten(ary) {
    return ary.reduce(
      (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
    );
  }

  /**
   * Bugfix: Babel transformations of
   */
  global.H.apply = createElement.apply;
  global.H.call = createElement.call;


})(module.exports, global.document, Object, Symbol(), {});
