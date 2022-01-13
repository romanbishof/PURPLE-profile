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
                            autoComplete='off'
                            placeholder='Web developer'/>

                        <TextField
                            value={profileData.currentCompany}
                            label="Current company"
                            autoComplete='off'
                            placeholder='Purple software playground'/>
                        
                        <TextField
                            value={profileData.about}
                            label="About myself"
                            multiline={7}
                            autoComplete='off'
                            helpText
                            placeholder='somthing somthing a lot of somthing'
                        />
                        <div className="profile__sectionB-wrapper">
                            <div className = 'profile__sectionB-wrapper_state'>
                                <TextField
                                placeholder='+972'
                                    value={profileData.phone.areaCode}/>
                            </div>
                            <div className="profile__sectionB-wrapper_phone">
                                <TextField
                                    placeholder='0525267022'
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