const axios = require("axios").default;

/**
 * Requests endpoints according to endpointConfig.
 * "Cancels request" after timeout for socket timeouts or pending requests.
 * @param {Object} endpointConfig - endpointConfiguration which is expected by Axios
 * @param {number} [timeout=800] timeout - timeout in ms
 * @returns {Promise<Object>} - response data || error
 */
const requestWithTimeout = async (endpointConfig, timeout = 800) => {
  const CancelToken = axios.CancelToken;

  return axios({
    ...endpointConfig,
    // abort promise after timeout
    cancelToken: new CancelToken(function executor(cancel) {
      setTimeout(cancel, timeout);
    }),
    // socket timeout configuration
    timeout,
  }).then((response) => response.data);
};

module.exports = requestWithTimeout;
