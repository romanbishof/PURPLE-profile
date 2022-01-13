import { Card, DropZone, Layout, Select, TextField } from '@shopify/polaris';
import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setProfile } from '../redux/profileSlice';
import './edit.css'

const Edit = () => {

    const profileData = useSelector(state => state.profile)
    const [selected, setSelected] = useState(profileData.phone.areaCode);
    const [jobTitle, setJobTitle] = useState(profileData.jobTitle)
    const [curentCompany, setCurrentCompany] = useState(profileData.currentCompany)
    const [about, setAbout] = useState(profileData.about)
    const [phone, setPhone] = useState(profileData.phone.number)
    const [img , setImg] = useState('')
    const [files, setFiles] = useState([]);

    const handleDropZoneDrop = (files, _rejectedFiles) => {
        setFiles(files)
        const currentFile = files[0]
        const reader = new FileReader()
        reader.addEventListener("load", () => {
            
            setImg(reader.result)
        } , false )

        reader.readAsDataURL(currentFile)
    }
    const handleSelectChange = useCallback((value) => setSelected(value), []);

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSubmit = (event) => {
        event.preventDefault();
        let profile = {
            avatarImg: img,
            jobTitle: jobTitle,
            currentCompany: curentCompany,
            about: about,
            phone: {
                areaCode: selected,
                number: phone
            }
        }
        dispatch(setProfile(profile))
        navigate('/')
    }
    const options = [
        {label: '', value: 0},
        {label: '+972', value: '+972'},
        {label: '+973', value: '+973'},
        {label: '+974', value: '+974'},
    ];

    const fileUpload = !files.length && <DropZone.FileUpload />;

    return (
        <div className='edit'>
            <img src={files[0]} alt="" />
            <div className="edit__edit">
                <Layout.Section>
                    <Card title="User profile" sectioned>
                        <div className="edit__profile">
                            <form onSubmit={onSubmit}>
                                <div className="dropzone">
                                    <DropZone 
                                        label="Profile picture" 
                                        onDrop={handleDropZoneDrop}
                                        allowMultiple={false}
                                        accept='image/*'
                                        >
                                        {fileUpload}
                                        
                                        <img src={img !== null ? img : ''} alt="" />
                                
                                    </DropZone>
                                </div>
                                <div className="obj">
                                    <TextField
                                        value={jobTitle}
                                        label="Job title"
                                        autoComplete='off'
                                        maxLength={20}
                                        placeholder={profileData.jobTitle}
                                        onChange={(value)=>setJobTitle(value)}
                                        />
                                </div>
                                <div className="obj">
                                    <TextField
                                        value= {curentCompany}
                                        label="Current company"
                                        autoComplete='off'
                                        maxLength={20}
                                        placeholder={profileData.currentCompany}
                                        onChange={(value)=>setCurrentCompany(value)}
                                        />
                                </div>
                                <div className="obj">
                                    <TextField
                                        value={about}
                                        label="About myself"
                                        multiline={7}
                                        autoComplete='off'
                                        helpText
                                        placeholder={profileData.about}
                                        onChange={(value)=>setAbout(value)}
                                        
                                        />
                                </div>
                                <div className="edit__profile-wrapper">
                                    <div className = 'edit__profile-wrapper_state'>
                                        <Select
                                            label="Phone number"
                                            options={options}
                                            placeholder={profileData.phone.areaCode}
                                            onChange={handleSelectChange}
                                            value={selected}
                                        />
                                    </div>
                                    <div className="edit__profile-wrapper_phone">
                                        <TextField
                                            value={phone}
                                            placeholder={profileData.phone.number}
                                            onChange={(value)=> setPhone(value)}
                                            pattern='^[0-9]*$'
                                        />
                                    </div>
                                </div>
                                <div className="button">
                                    <button>Save</button>
                                </div>
                            </form>
                        </div>
                    </Card>
                </Layout.Section>
            </div>
        </div>
    );
};

export default Edit;