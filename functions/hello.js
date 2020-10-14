exports.handler = async function(event, context) {
    const httpMethod = event.httpMethod;
    const path = event.path;
    return {
        statusCode: 200,
        body: JSON.stringify({message: 'recieve request', httpMethod, path})
    };
}