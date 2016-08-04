import getV1 from './V1Server';

export default oid => {
    const v1 = getV1();
    return v1.query({
        from: 'PrimaryWorkitem',
        select: ['Name', 'Number', 'Children'],
        page: {
            start: 0,
            size: 50
        }
    })
}