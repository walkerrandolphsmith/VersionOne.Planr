import getV1 from './V1Server';

export default oid => {
    const v1 = getV1();
    return new Promise((resolve, reject) => {
        resolve({
            data: {

            }
        })
    });
    /*
    Waiting on the V1SDK to update and support activity stream.
    v1
        .getActivityStream(oid)
        .then(response => {
            return response.data;
        });
    */
}