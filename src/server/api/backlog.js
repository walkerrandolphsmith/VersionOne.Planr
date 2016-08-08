import v1 from './../../shared/lib/V1Server';

export default oid => {
    return v1.query({
        from: 'PrimaryWorkitem',
        select: ['Name', 'Number', 'Children'],
        page: {
            start: 0,
            size: 50
        }
    })
}