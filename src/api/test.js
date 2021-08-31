import request from './request'

export default {
    // test
    query: (data) => request.get('/query', data)
}