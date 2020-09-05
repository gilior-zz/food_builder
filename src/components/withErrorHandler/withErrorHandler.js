import React, { useEffect, useState } from "react";
import Modal from "../UI/Modal/Modal";
const withErrorHandler = (Wrapped_comp, axios) => {
    return (props) => {
        const [err, update_err] = useState(null)

        useEffect(() => {
           let reqIn axios.interceptors.request.use((request) => {
                update_err(null);
                return request;
            })
            axios.interceptors.response.use(
                response => response,
                error => {
                    update_err(err);
                    return Promise.reject(err);
                })
            return () => {

            }

        })


        const on_err_modal_close = () => {
            update_err(null);
        }
        return (
            <>
                <Modal on_modal_close={on_err_modal_close} show={err}>
                    <div>
                        {err && err.message}
                    </div>
                </Modal>
                <Wrapped_comp {...props}></Wrapped_comp>
            </>
        )
    }
}

export default withErrorHandler