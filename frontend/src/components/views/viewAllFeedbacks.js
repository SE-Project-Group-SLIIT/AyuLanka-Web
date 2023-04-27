import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { Modal, ModalHeader } from 'react-bootstrap';
import FeedbackView from './feedbackView';

export default function AllFeedbacks() {
    const [viewFeedback, setViewFeedback] = useState([]);

    const [modalData, setData] = useState([]);
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        console.log("...")

        getFeedback();

    }, []);

    function getFeedback() {
        console.log("getFeedback");
        axios.get(`http://localhost:5000/feedback/getAllFeedbacks`).then((res) => {
            console.log(res.data.data);

            setViewFeedback(res.data.data);
        }).catch((error) => {
            console.log("error", error);
        })
    }

    const openModal = (feedback) => {
        setData(feedback);
        handleViewOnClick();
    };

    const handleViewOnClick = () => {
        setModalShow(true);
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
                <FeedbackView data={modalData} onHide={() => setModalShow(false)} />
            </Modal>
            <div className="table-emp ml-5 mr-5">
                <div className='ml-5 mr-5'>
                    <div class="py-5 text-center">
                        <h2>List of User Feedbacks</h2>
                    </div>
                    <table class="table " id="myTable">
                    <thead className='table-success'>
                            <tr>
                                <th class="text-center">Feeback Type</th>
                                <th class="text-center">Category</th>
                                <th class="text-center">Name</th>
                                <th class="text-center">Mobile No.</th>
                                <th class="text-center">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {viewFeedback.map((feedback)=>{
                                return(
                                    <tr>
                                        <td
                                            class="text-center"
                                            onClick={() => openModal(feedback)}
                                            data-toggle="tooltip"
                                            data-placement="right"
                                            title="Click to view reservation"
                                            className="view-td"
                                        >
                                            {feedback.FeedbackType}
                                        </td>
                                        <td class="text-center">{feedback.Category}</td>
                                        <td class="text-center">{feedback.Name}</td>
                                        <td class="text-center">{feedback.MobileNumber}</td>
                                        <td class="text-center">{feedback.Email}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}