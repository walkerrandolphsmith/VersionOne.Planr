import getV1 from './V1Server';

export default oid => {
    const v1 = getV1();
    return new Promise();
    /*return v1
        .getActivityStream(oid)
        .then(response => {
            return response.data;
        });*/
}