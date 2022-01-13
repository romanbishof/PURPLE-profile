import { Avatar, Card, Layout, TextField } from '@shopify/polaris';
import React from 'react';
import './profile.css'
import { useSelector } from 'react-redux';

const Profile = () => {

    const profileData = useSelector(state => state.profile)
    
    return (
        <div className="profile">
            <div className="profile__sectionA">
            <Layout.Section>
                <Card sectioned>
                    <Avatar customer size='large' source={profileData.avatarImg} /* source={profileData.avatarImg[0].name} *//>
                    <h3>Tal Shefer</h3>
                    <p>tal.s@prpl.io</p>
                </Card>
            </Layout.Section>
            </div>
            <div className="profile__sectionB">
            <Layout.Section>
                <Card title="User Profile" sectioned>
                    <div className="profile__sectionB-desc">
                        <TextField
                            value={profileData.jobTitle}
                            label="Job title"
                            autoComplete='off'/>

                        <TextField
                            value={profileData.currentCompany}
                            label="Current company"
                            autoComplete='off'/>
                        
                        <TextField
                            value={profileData.about}
                            label="About myself"
                            multiline={7}
                            autoComplete='off'
                            helpText
                        />
                        <div className="profile__sectionB-wrapper">
                            <div className = 'profile__sectionB-wrapper_state'>
                                <TextField
                                    value={profileData.phone.areaCode}/>
                            </div>
                            <div className="profile__sectionB-wrapper_phone">
                                <TextField
                                    value={profileData.phone.number}
                                />
                            </div>
                        </div>
                    </div>
                </Card>
            </Layout.Section>
            </div>
        </div>
        
    );
};

export default Profile;