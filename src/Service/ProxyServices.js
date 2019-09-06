import axios from 'axios'
import {Redirect} from "react-router-dom";
import React from "react";

const API_URL = 'http://localhost:8090'
const API_URL2 = 'http://localhost:8081'

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
export const PASSWORD_SESSION_ATTRIBUTE_NAME = 'password'
export const TOKEN = ''

class ProxyServices {

    executeBasicAuthenticationService(username, password) {

        let payload = {
            username: username,
            password: password
        };

        console.log("Payload:", payload);

        let basicAuth = btoa(username + ':' + password);
        axios.defaults.headers.common = {'Authorization': `Basic ${basicAuth}`};

        return axios.post(`${API_URL}/api/authentication`, payload)
    }

    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password)
    }

    registerSuccessfulLogin(username, password, token) {
        localStorage.setItem(TOKEN, token)
        localStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
        localStorage.setItem(PASSWORD_SESSION_ATTRIBUTE_NAME, password)
    }


    logout() {
        localStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        localStorage.removeItem(TOKEN);
        /*return <Redirect to="/login" />*/
    }

    isUserLoggedIn() {
        let user = localStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        //let password = localStorage.getItem(PASSWORD_SESSION_ATTRIBUTE_NAME)
        if (user === null) return false
        return true
    }

    getToken(){
        return localStorage.getItem(TOKEN)
    }

    getUserList(){
        /*let basicAuth = btoa(localStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME) + ':' + localStorage.getItem(PASSWORD_SESSION_ATTRIBUTE_NAME));
        axios.defaults.headers.common = {'Authorization': `Basic ${basicAuth}`};*/
        let token = this.getToken();
        console.log("TOKEN SERVICE:", token);
        axios.defaults.headers.common = {'Authorization': `Bearer ${this.getToken()}`};
        console.log("Header:", axios.defaults.headers.common);

        return axios.get(`${API_URL}/api/all-users`);

    }

    resetPasswordRequest(email){
        let payload = {
            email: email
        }
        return axios.post(`${API_URL}/api/resetpassword`, payload);
    }

    getBlogList(category){

        let token = this.getToken();
        console.log("TOKEN SERVICE:", token);
        //axios.defaults.headers.common = {'Authorization': `Bearer ${this.getToken()}`};
        console.log("Header:", axios.defaults.headers.common);

        if(category == '' || category == null){
           /* return axios.get(`${API_URL}/services/blog/api/posts`);*/
            return axios.get(`${API_URL2}/api/posts`);
        }else{
            return axios.get(`${API_URL2}/api/posts/category?category=`+ category);
        }
    }

    getCategoryList(){
        let token = this.getToken();
        console.log("TOKEN SERVICE:", token);
        axios.defaults.headers.common = {'Authorization': `Bearer ${this.getToken()}`};
        console.log("Header:", axios.defaults.headers.common);

        return axios.get(`${API_URL2}/api/categories`);
    }

    submitBlog(payload){
        console.log("Payload:"+JSON.stringify( payload ));
        let token = this.getToken();
        console.log("TOKEN SERVICE:", token);
        axios.defaults.headers.common = {'Authorization': `Bearer ${this.getToken()}`};
        console.log("Header:", axios.defaults.headers.common);

        return axios.post(`${API_URL2}/api/posts`, payload);
    }

    createCategory(payload){
        console.log("Payload:"+JSON.stringify( payload ));
        let token = this.getToken();
        console.log("TOKEN SERVICE:", token);
        axios.defaults.headers.common = {'Authorization': `Bearer ${this.getToken()}`};
        console.log("Header:", axios.defaults.headers.common);

        return axios.post(`${API_URL2}/api/categories`, payload);
    }

    getBlogByTitle(title){

        let token = this.getToken();
        console.log("TOKEN SERVICE:", token);
        axios.defaults.headers.common = {'Authorization': `Bearer ${this.getToken()}`};
        console.log("Header:", axios.defaults.headers.common);

        if(title){
            /* return axios.get(`${API_URL}/services/blog/api/posts`);*/
            return axios.get(`${API_URL2}/api/post?title=${title}` );
        }
    }

    submitComment(payload){
        console.log("Payload:"+JSON.stringify( payload ));
        let token = this.getToken();
        console.log("TOKEN SERVICE:", token);
        axios.defaults.headers.common = {'Authorization': `Bearer ${this.getToken()}`};
        console.log("Header:", axios.defaults.headers.common);

        return axios.post(`${API_URL2}/api/comments`, payload);
    }

    getCommentByTitle(title){

        let token = this.getToken();
        console.log("TOKEN SERVICE:", token);
        axios.defaults.headers.common = {'Authorization': `Bearer ${this.getToken()}`};
        console.log("Header:", axios.defaults.headers.common);

        if(title){
            /* return axios.get(`${API_URL}/services/blog/api/posts`);*/
            return axios.get(`${API_URL2}/api/comments-by-title?title=${title}` );
        }
    }

}

export default new ProxyServices()
