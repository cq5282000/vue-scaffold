export default (timeout) => {
    return Promise((resolve) => {
        setTimeout(resolve, timeout);
    });
}