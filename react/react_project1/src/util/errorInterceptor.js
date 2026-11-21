export function errorHandler(error) {
    console.log('Error Interceptor called...')
    const status = error.response?.status;
    if (status === 401) {
        window.location.assign('/login');
    }
    if (status === 403) {
        alert('You do not have Permission for this action')
    } else if (status >= 500) {
        alert('Server Error, Please try again later.')
    } else if (!error.response) {
        alert('Network Error or Request timed out')
    }
    return Promise.reject(error);
}