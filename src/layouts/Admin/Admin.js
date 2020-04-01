import React from 'react';
import './Admin.scss';
import Upload from '../../components/Upload/Upload';
import axios from 'axios';
import Loader from '../../components/Loader/Loader';
import {displayNotification} from '../../components/Notifications/Notifications'

class Admin extends React.Component {

    state = {
        bannerImage: null,
        choices: [],
        error: '',
        loading: false,
        surveyTitle: '',

        // Single choice
        image: null,
        title: '',
        tempUrl: ''
    }

    // Get banner image
    setFile = (name, file) => {
        this.setState({
            [name]: file,
            error: '',
        });
    }

    // Get title field values
    handleInputChange = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }

    // Pick single for choice
    handleFileChange = (e) => {
        e.preventDefault();
        this.setState({tempUrl: URL.createObjectURL(e.target.files[0]), image: e.target.files[0]});
    }

    addSingleChoice = e => {
        e.preventDefault();
        if(this.state.image && this.state.title.trim() !== '') {
            const choice = {
                title: this.state.title,
                image: this.state.image,
                tempUrl: this.state.tempUrl
            }
            this.setState({
                choices: [...this.state.choices, choice],
                title: '',
                image: null,
                tempUrl: ''
            })
        } else {
            displayNotification('warning', 'Hi!' ,'Pick an image and enter title.')
        }
    }

    onSubmit = e => { 
        e.preventDefault();
        if(this.state.bannerImage && this.state.choices.length && this.state.surveyTitle.trim().length) {
            this.setState({loading: true});
            // Make the survery
            const formData = new FormData();
            formData.append('bannerImage', this.state.bannerImage);
            formData.append('surveyTitle', this.state.surveyTitle);
            this.state.choices.forEach(choice => {
                formData.append('image', choice.image);
            });
            formData.append('choices', JSON.stringify(this.state.choices));
            const config = { headers: { 'content-type': 'multipart/form-data'}};
            // Submit survey : api call
            axios.post('/api/survey/new', formData, config)
            .then(response => {
                this.setState({
                    loading: false, 
                    bannerImage: null,
                    choices: [],
                    error: '',
                    surveyTitle: ''
                }, () => displayNotification('success', 'Congrats!' ,'Sondage ajouté avec succès!'));
            })
            .catch(err => {
                console.log({err})
                this.setState({
                    loading: false,
                    error: 'Une érreur s\'est produite, reéssayer'
                });
                displayNotification('danger', 'Hi!' ,'Une érreur s\'est produite, reéssayer')
            })
        } else {
            displayNotification('warning', 'Hi!' ,'Enter survey title, Pick Banner image and make choices')
        }
    }

    render() {
        const {choices, title, loading, surveyTitle} = this.state;

        return (
            <div className="container admin">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="box">
                            <label htmlFor="surveyTitle">Entrez la question du sondage</label>
                            <input onChange={this.handleInputChange} type="text" value={surveyTitle} className="form-control" name="surveyTitle" placeholder="Entrez la question du sondage" />
                            <h4 className="mt-5">Choisir l'image de banière du sondage</h4>
                            <div className="banner-image-picker py-4">
                                <Upload disabled={loading} type="image" oldUrl={""} setFile={(name, file) => this.setFile(name, file)} name="bannerImage" label={"Importer une image"} />
                            </div>
                            <hr/>
                            <h4 className="mt-5">Entrez les différents choix</h4>
                            <div className="d-flex justify-content-between mt-5">
                                <input
                                    type="file"
                                    accept="image/*"
                                    capture="camera"
                                    ref={input => this.inputElement = input}
                                    onChange={(event) => this.handleFileChange(event)}
                                    name="image"
                                />
                                <input onChange={this.handleInputChange} type="text" value={title} className="form-control" name="title" placeholder="Entrez un choix" />
                                <button disabled={loading} onClick={(e) => this.addSingleChoice(e)} className="button">Ajouter</button>
                            </div>

                            <div className="items mt-5">
                                {
                                    choices.map((choice, i) => (
                                        <Item key={i} id={i} title={choice.title} image={choice.tempUrl} />
                                    ))
                                }
                            </div>
                            <div className="d-flex justify-content-end mt-4">
                                <button disabled={loading} onClick={(e) => this.onSubmit(e)} className="button">{loading ? <Loader color="white" />: "PULIER LE SONDAGE"}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Admin;


class Item extends React.Component {

    state = {
        image: null
    }

    render() {
        return (
            <div className="item" id={this.props.id}>
                <img src={this.props.image} alt="" />
                <h5>{this.props.title}</h5>
            </div>
        )
    }
}
