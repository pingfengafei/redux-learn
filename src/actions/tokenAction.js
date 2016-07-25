export const GET_TOKEN_PENDDING = 'GET_TOKEN_PENDDING';
export const GET_TOKEN_SUCESS = 'GET_TOKEN_SUCESS';
export const GET_TOKEN_FAILED = 'GET_TOKEN_FAILED';

//这种写法好奇怪
import  'whatwg-fetch';

let tokenAction = {
    checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response
        } else {
            var error = new Error(response.statusText);
            error.response = response;
            //throw后直接到catch
            throw error
        }
    },

    parseJSON(response) {
        return response.json()
    },
    getToken(username, password) {
        let fetchConfig = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        };
        return ((dispatch) => {
            dispatch({
                type: GET_TOKEN_PENDDING,
                data: {
                    username,
                    password
                }
            });
            //this.checkStatus和parseJSON都是回调函数
            fetch('http://maxcd01-dev06.chinacloudapp.cn:8888/usercenter/authorize', fetchConfig).then(this.checkStatus)
                .then(this.parseJSON)
                .then(function (data) {
                    dispatch({
                        type : GET_TOKEN_SUCESS,
                        data : data
                    });
                }).catch(function (error) {
                dispatch({
                   type: GET_TOKEN_FAILED,
                   data: error
                });
            });
        });
    }
};


export default  tokenAction;

