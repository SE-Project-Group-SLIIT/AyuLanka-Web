import axios from 'axios';
const BASE_URL = `http://localhost:5000/product`

// export const createOrder = async (paymentPayload) => {

//     try {
//         const response = await axios.post(BASE_URL, paymentPayload, {
//             headers: {
//                 'Access-Control-Allow-Origin': "*",
//                 'Access-Control-Allow-Headers': "Content-Type",
//                 'Authorization': 'Bearer ' + getToken()
//             }
//         });
//         return {
//             ok: true,
//             data: response.data
//         }
//     } catch (error) {
//         return {
//             ok: false,
//             error: error
//         }
//     }

// }

export const getAllProductService = async () => {

    try {
        let response = await axios.get(BASE_URL + '/view');

        return {
            ok: true,
            data: response.data
        }
    } catch (error) {
        return {
            ok: false,
            error: error
        }
    }

}