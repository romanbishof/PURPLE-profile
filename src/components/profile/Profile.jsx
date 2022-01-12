import { Avatar, Card, Layout, TextField } from '@shopify/polaris';
import React from 'react';
import './profile.css'
import profileLarge from '../../assets/profileLarge.png'

const Profile = () => {
    return (
        <div className="profile">

            <div className="profile__sectionA">
            <Layout.Section>
                <Card sectioned>
                    <Avatar customer size='large' source={profileLarge}/>
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
                        value='Developer'
                        label="Job title"
                        autoComplete='off'/>

                        <TextField
                        value='PURPLE'
                        label="Current company"
                        autoComplete='off'/>
                        
                        <TextField
                        value="lorem"
                        label="About myself"
                        multiline={7}
                        autoComplete='off'
                        helpText
                        />
                        <div className="profile__sectionB-wrapper">
                            <div className = 'profile__sectionB-wrapper_state'>
                                <TextField
                                value='+972'/>
                            </div>
                            <div className="profile__sectionB-wrapper_phone">
                                <TextField
                                value='526152322'
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