import React from 'react';

const index = () => {
    const profileData = [
        {
            id: 'star-lord',
            image: "../image/starlord.png"
        },
        {
            id: 'shin',
            image: "../image/shin.png"
        },
        {
            id: 'potter',
            image: "../image/harrypotter.png"
        }

    ]
    return (
        <div className="gate_wrapper">
            <p>넷플릭스를 시청할 프로필을 선택해주세요.</p>
            <div className='profile_wrapper'>
                {profileData.map((v, i) =>
                    <div className="profile_box">
                        <div className="image_container">
                            <img src={v.image} />
                        </div>
                        <p className="ps1_5">{v.id}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default index;