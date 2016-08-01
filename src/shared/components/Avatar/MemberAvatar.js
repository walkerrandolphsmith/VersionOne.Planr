import React from 'react';

export default class MemberAvatar extends React.Component {
    render() {
        const url = 'https://s3.amazonaws.com/profile_photos/148319366504441.szl3SIDn6ge2VHyh1Mlb_21x21.png';
        const styles = {
            width: '32px',
            height: '32px',
            backgroundSize: 'contain',
            backgroundImage: `url(${url})`,
            borderRadius: '50%'
        };
        return (
            <div style={styles}></div>
        )
    }
}