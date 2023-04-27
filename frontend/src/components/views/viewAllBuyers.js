import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, ModalHeader } from 'react-bootstrap';
import ProfileView from './profileView';



export default function AllBuyers() {
    const [viewProfile, setViewProfile] = useState([]);

    const [modalData, setData] = useState([]);
    const [modalShow, setModalShow] = useState(false);

    const [modalDataDelete, setModalDataDelete] = useState([]);
    const [modalDeleteConfirm, setModalDeleteConfirm] = useState(false);


    useEffect(() => {
        console.log("...")
        
        getProfile();
        
    }, []);
    
    // useEffect(() => {
        
    //     // getProfile();
    //     // let cdc = [];
    //     // cdc.push(viewProfile)
    //     console.log(viewProfile)
    // }, [viewProfile]);


    
    function getProfile() {
        console.log("getProfile...")
        axios.get(`http://localhost:5000/buyer/getAllBuyers`).then((res) => {
            console.log(res.data.data);
            // setViewProfile((prev)=>[...prev,res.data.data]);
            setViewProfile(res.data.data)
            // console.log(viewProfile)
        }).catch((error) => {
            // alert(error.message);
            console.log("error", error);
        });
    }

    useEffect(() => {

    }, [modalDataDelete]);

    const openModal = (profile) => {
        setData(profile);
        handleViewOnClick();
    };

    const handleViewOnClick = () => {
        setModalShow(true);
    }

    // set delete modal
    const openModalDelete = (data) => {
        setModalDataDelete(data);
        setModalDeleteConfirm(true);
    };


    function deleteProfile(data) {
        axios.delete(`http://localhost:5000/buyer/deleteBuyer`, { data, }).then(() => {
            alert("profile deleted");
            window.location.reload();
        }).catch((err) => {
            alert("error", err);
        })
    }

    // refresh page
    function refreshPage() {
        window.location.reload();
    }

    return (
        <div className="page-component-body">
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size='lg'
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <ProfileView data={modalData} onHide={() => setModalShow(false)} />
            </Modal>
            <div className="table-emp ml-5 mr-5">
                <div className='ml-5 mr-5'>
                    <div class="py-5 text-center">
                        <h2>List of Buyers</h2>
                    </div>
                    <table class="table" id="myTable" >
                        <thead>
                            <tr>
                                <th class="text">Buyer</th>
                                <th class="text">Email</th>
                                <th class="text">Mobile No.</th>
                                <th class="text">Province</th>
                                <th class="text">City</th>
                                <th class="text">Area</th>
                                <th class="text-center">PostalCode</th>
                            </tr>
                        </thead>
                        <tbody>
                            {viewProfile.map((profile,index) => {
                                return (
                                    <tr>
                                        <td
                                            class="text"
                                            onClick={() => openModal(profile)}
                                            data-toggle="tooltip"
                                            data-placement="right"
                                            title="Click to view reservation"
                                            className="view-td"
                                        >
                                            {profile.BuyerName}
                                        </td>
                                        <td class="text">{profile.Email}</td>
                                        <td class="text">{profile.MobileNumber}</td>
                                        <td class="text">{profile.Province}</td>
                                        <td class="text-right">{profile.City}</td>
                                        <td class="text-right">{profile.Area}</td>
                                        <td class="text-right">{profile.PostalCode}</td>
                                        <td class="text">
                                            <div
                                                class="btn-group"
                                                role="group"
                                                aria-label="Basic example"
                                            >
                                                {/* <button
                                                    class="btn btn-light btn-sm"
                                                    onClick={() => openModalUpdate(profile)}
                                                >
                                                    update
                                                </button> */}

                                                <button
                                                    class="btn btn-danger btn-sm"
                                                    onClick={() => {
                                                        openModalDelete(profile);
                                                    }}
                                                    role="button"
                                                >
                                                    remove
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal
                show={modalDeleteConfirm}
                size='md'
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you want to delete this buyer ?</p>
                </Modal.Body>
                <Modal.Footer>
                    <div className='row'>
                        <div className='col-6 mt-1'>
                            <button
                                type='submit'
                                className='btn btn-danger'
                                onClick={()=>{
                                    deleteProfile(modalDataDelete);
                                }}
                            >
                                Confirm
                            </button>
                        </div>
                        <div
                            className='col-6 text-right mt-1'
                            onClick={()=>setModalDeleteConfirm(false)}
                        >
                            <button type='reset' className='btn btn-warning'>
                                Cancel
                            </button>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    )
}