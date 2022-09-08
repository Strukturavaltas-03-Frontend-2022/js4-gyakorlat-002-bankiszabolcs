import ajaxRequest from './ajaxRequest.js';
import { actions } from './store/users.js';

const urls = ['./json1/users1.json', './json/users2.json', './json/users3.json'];

function successCallback(responseText) {
  actions.setUsers(responseText);
  actions.logUsers();
}

urls.forEach((url) => ajaxRequest({
  url,
  successCallback,
})());




/**
 * Represents a request factory
 * @param {Object}                    - request properties object
 * @param {string} url                - the request url
 * @param {function} successCallback  - run, when request status is  200 and state is 4
 * @param {string} [method=GET]       - the request method
 * @param {number} [maxRetry=2]       - how many times to retry send the request
 * @param {number} [delay=5000]       - the delay in milisec beetween two retry
 * @returns {function}                - the reqeust function, witch send the request
 */

