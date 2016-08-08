import v1 from './../../shared/lib/V1Server';

export default oid => {
    return v1
        .getActivityStream(oid)
        .then(response => {
            return response.data;
        });
}