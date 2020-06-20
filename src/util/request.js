import axios from 'axios';

const server = 'https://writetf.com/api/v1';

export const api = {
    postForget: '/forget',
};

export function asyncTryCatchReq(reqParams) {
    return axios({
        ...reqParams,
        baseURL: server,
    }).then(rs => {
        return [null, rs.data];
    }).catch(err => {
        return [err];
    });
}
