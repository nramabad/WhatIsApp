export const authFetch = (url, options) => (
    fetch(url, mergeAuthHeaders(options)).then(
        response => {
            // Sign out if we receive a 401!
            if (response.status === 401) {
                store.dispatch(signOut());
                throw new Error("Unauthorized");
            }
            return response;
        },
        error => error
    )
);
export const mergeAuthHeaders = (baseOptions) => {
    const options = _.isUndefined(baseOptions) ? {} : baseOptions;
    if (!_.has(options, 'headers')) {
        options.headers = {};
    }
    options.headers = {
        ...options.headers,
        'Authorization': `Bearer ${getAuthToken()}`,
    };
    return options;
}