const axios = require("axios").default;

/**
 * Requests endpoints according to endpointConfig.
 * Cancels request after timeout for socket timeouts or pending requests.
 * (Does not catch errors but returns them to be handled by the caller)
 * @param {Object} endpointConfig - endpointConfiguration which is expected by Axios
 * @param {number} timeout - timeout in ms
 * @returns {Object} - responseBody || error
 */
const requestWithTimeout = async (endpointConfig, timeout = 800) => {
  const CancelToken = axios.CancelToken;

  return axios({
    ...endpointConfig,
    // cancel request after timeout
    cancelToken: new CancelToken(function executor(cancel) {
      setTimeout(cancel, timeout);
    }),
    // socket timeout
    timeout,
  }).then((response) => response.data);
};

module.exports = requestWithTimeout;
