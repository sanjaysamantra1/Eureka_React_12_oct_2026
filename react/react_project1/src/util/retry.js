import client from "./client";

export async function retry(error) {
    const config = error.config;
    config.retryCount = config.retryCount || 0;
    const isServerError = error.response?.status >= 500;
    const isNetworkError = !error.response;
    // if ((isServerError || isNetworkError) && config.retryCount < 2) {
    if (config.retryCount < 2) {
        config.retryCount++;
        // wait 1 sec before trying again
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return client(config)
    }
    return Promise.reject(error);
}

