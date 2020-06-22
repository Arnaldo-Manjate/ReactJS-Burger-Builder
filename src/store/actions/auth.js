import * as actionTypes from '../actions/actionTypes'
import axois from 'axios'

export const Authenticate = ( email , password , isSignUp ) => {
    return dispatch => {
        dispatch( AuthStart() )
        const authData = {
            email,
            password,
            returnSecureToken : true
        }
        // conditional URL 
        let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAvvRz3czE_pcBGVwjFeN8q3CoRVii4SYY"
        if( !isSignUp ) url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAvvRz3czE_pcBGVwjFeN8q3CoRVii4SYY"
        // authenticate
        axois.post( url , authData )
        .then( response => {
            const experationDate = new Date( new Date().getTime() + response.data.expiresIn * 1000)
            localStorage.setItem('experationDate', experationDate)
            localStorage.setItem('token', response.data.idToken)
            localStorage.setItem('userId', response.data.localId)

            console.log("Response from Authenticating :" ,response)
            dispatch( CheckAuthTimeout( response.data.expiresIn ) )
            dispatch( AuthSuccess(response.data.idToken , response.data.localId) )
        } )
        .catch( error => {
            console.log("Athentication Error :" ,error)
            dispatch( AuthFail(error) )
        })
    }
}

export const authSetRedirectPath = ( path ) => {
    return {
        type : actionTypes.AUTH_SET_REDIRECT_PATH,
        redirectPath : path
    }
}

export const Logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('experationDate')
    localStorage.removeItem('userId')

    return {
        type : actionTypes.AUTH_LOGOUT,
    }
}

export const CheckAuthTimeout = ( timePeriod ) => {
    return dispatch => {
            setTimeout(  
                () => dispatch( Logout() ) 
                , timePeriod * 1000)
        } 
}

const AuthStart = () => { 
    return {
        type : actionTypes.AUTH_START
    }
}

const AuthSuccess = ( idToken , userId ) => { 
    return {
        type : actionTypes.AUTH_SUCCESS,
        userId : userId,
        idToken : idToken
    }
}

const AuthFail = ( error ) => { 
    return {
        type : actionTypes.AUTH_FAIL,
        error : error
    }
}

export const AuthCheckState = ( ) => {
    return dispatch => {
        const token = localStorage.getItem('token')
        if( !token ){
            dispatch( Logout() )
        }else{
            const userId = localStorage.getItem('userId')
            const experationDate = new Date(localStorage.getItem('experationDate'))
            if( experationDate <= new Date() ){
                dispatch( Logout() )
            }else{
                dispatch( AuthSuccess( token, userId ) )
                // the difference will be the expiry Date
                dispatch( CheckAuthTimeout(experationDate.getTime() - new Date().getTime() / 1000 ) )
            }
    
        }
    }
}