import axios from 'axios';

function get(url, params, callback) {
    axios.get(url, {
        params: {
            ...params,
            key: Math.random(),
        }
    }).then(function (response) {
        const resData = response.data || {};
        callback(1, resData);
    }).catch(function () {
        callback(0, { msg: '错误' });
    });
}

export default {
    get,
}