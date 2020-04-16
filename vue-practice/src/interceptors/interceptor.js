import axios from 'axios';

export default function setup() {
    axios.interceptors.request.use(function(config) {
        console.log('interceptors');
        return config;
    }, function(err) {
        return Promise.reject(err);
    });
}