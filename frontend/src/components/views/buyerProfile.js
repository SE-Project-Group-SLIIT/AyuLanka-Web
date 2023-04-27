import React, { useEffect, useState } from "react";
import { Row, Col, Card, Form, Button, Modal } from 'react-bootstrap';
import axios from "axios";
import UpdateProfile from "./updateProfile";
import { useHistory } from "react-router-dom";

export default function BuyerProfile() {


    const [buyer, setBuyer] = useState([]);
    const [id, setId] = useState("")

    const [BuyerName, setName] = useState("");
    const [DOB, setDOB] = useState("");
    const [Gender, setGender] = useState("");
    const [Email, setEmail] = useState("");
    const [MobileNumber, setMobile] = useState("");
    // const [Password, setPassword] = useState("");
    const [Province, setProvince] = useState("");
    const [City, setCity] = useState("");
    const [Area, setArea] = useState("");
    const [Address, setAddress] = useState("");
    const [PostalCode, setPostalCode] = useState("");

    const DefaultAddress = [];
    DefaultAddress.push(Province);
    DefaultAddress.push(City);
    DefaultAddress.push(Area);
    DefaultAddress.push(Address);


    const [ModalProfileUpdate, setModalProfileUpdate] = useState([]);
    const [ModalUpdateConfirm, setModalUpdateConfirm] = useState(false);

    const [ModalProfileDelete, setModalProfileDelete] = useState([]);
    const [ModalDeleteConfirm, setModalDeleteConfirm] = useState(false);

    let history = useHistory();
    const win = window.sessionStorage;

    const loadData = () => {
        // fetch buyer data
        axios.get(`http://localhost:5000/buyer/getBuyer/${Email}`).then((response) => {



            console.log(response.data);
            console.log(response.data.data[0])
            let data = {
                Name :response.data.data[0].BuyerName
            }

            setBuyer(response.data.data[0]);

            setName(response.data.data[0].BuyerName);
            setDOB(response.data.data[0].DOB);
            setGender(response.data.data[0].Gender);
            setMobile(response.data.data[0].MobileNumber);
            setProvince(response.data.data[0].Province);
            setCity(response.data.data[0].City);
            setArea(response.data.data[0].Area);
            setAddress(response.data.data[0].Address);
            setPostalCode(response.data.data[0].PostalCode);

            
            console.log(buyer);
        })
    }

    useEffect(() => {
        if (win.getItem("Email")) {
            setEmail(win.getItem("Email"));
            win.getItem("_id");
        } if (Email) {
            loadData();
            console.log(Email);
        }

    }, [Email])


    const deleteProfile = async (data) => {
        console.log("dalateProfile>>>", data);
        await axios.delete(`http://localhost:5000/buyer/deleteBuyer`,{data}).then((response) => {
            alert("Buyer deleted");
            console.log("profileDeleted>>>", id);

            history.push("/viewAllB");
            window.location.reload();
        }).catch((err) => {
            alert(err.response.data.errorCode);
            // window.location.reload();
        })
    }


    const openmodalUpdate = (data) => {
        console.log("openModalUpdate", data);
        setModalProfileUpdate(data);
        setModalUpdateConfirm(true);
    }

    const openModalDelete = (data) => {
        console.log("profile delete modal", data);
        setModalProfileDelete(data);
        setModalDeleteConfirm(true);
    }

    return (
        <div>
            <div className="container" style={{ textAlign: 'start' }}>
                <div className="col-lg-10 col-xl-7 flex-row mx-auto px-0">
                    <div class="py-4 text-center">
                        <h2>My Profile</h2>
                    </div>

                    <Card style={{ padding: '6px' }} >
                        <Card.Body className="px-4">
                            {/* <Card.Title>My Profile</Card.Title> */}
                            <Card.Text>
                                <Form className="form-reg">

                                    <Form.Group >
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Buyer Name"
                                            disabled
                                            value={BuyerName}
                                        ></Form.Control>
                                    </Form.Group>

                                    <Form.Group >
                                        <Form.Label>DOB</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="DOB"
                                            disabled
                                            value={DOB}
                                        ></Form.Control>
                                    </Form.Group>

                                    <Form.Group >
                                        <Form.Label>Gender</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Gender"
                                            disabled
                                            value={Gender}
                                        ></Form.Control>
                                    </Form.Group>

                                    <Form.Group >
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Email"
                                            disabled
                                            value={Email}
                                        ></Form.Control>
                                    </Form.Group>

                                    <Form.Group >
                                        <Form.Label>Mobile No.</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Mobile"
                                            disabled
                                            value={MobileNumber}
                                        ></Form.Control>
                                    </Form.Group>

                                    <Form.Group >
                                        <Form.Label>Default Address</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Address"
                                            disabled
                                            value={DefaultAddress}
                                        ></Form.Control>
                                    </Form.Group>

                                    <Form.Group >
                                        <Form.Label>PostalCode</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Postal Code"
                                            disabled
                                            value={PostalCode}
                                        ></Form.Control>
                                    </Form.Group>

                                    <Row>
                                        <div className="row">
                                            <div className="mt-5 col-6">
                                                <button
                                                    className="btn btn-outline-success"
                                                    type="button"
                                                    onClick={() => openmodalUpdate(buyer)}
                                                >
                                                    Update
                                                </button>
                                            </div>

                                            <div className="text-right col-6 mt-5">
                                                <button
                                                    className="btn btn-outline-danger"
                                                    type="button"
                                                    onClick={() => openModalDelete(buyer)}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </Row>
                                </Form>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Modal
                        show={ModalUpdateConfirm}
                        onHide={() => setModalUpdateConfirm(false)}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                        <UpdateProfile
                            data={ModalProfileUpdate}
                            onHide={() => setModalProfileUpdate(false)}
                        />
                    </Modal>

                    <Modal
                        show={ModalDeleteConfirm}
                        onHide={() => setModalDeleteConfirm(false)}
                        size="md"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Confirm Deletion</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Would you like to remove your profile ?</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Row>
                            <div className="row">
                                <div className="col-6 mt-1">
                                    <button
                                        type="submit"
                                        className="btn btn-danger"
                                        onClick={() => { deleteProfile(ModalProfileDelete); }}>
                                        Confirm
                                    </button>
                                </div>

                                <div className="col-6 text-right mt-1" onClick={() => setModalDeleteConfirm(false)}>
                                    <button type="reset" className="btn btn-warning">
                                        cancel
                                    </button>
                                </div>
                            </div>
                            </Row>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    )

}