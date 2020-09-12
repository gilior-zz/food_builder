import React, { useEffect, useState } from "react";
import Modal from "../UI/Modal/Modal";
const withErrorHandler = (Wrapped_comp, axios) => {
    return (props) => {
        const [err, update_err] = useState(null)
      let  reqInterceptor=null;
      let  resInterceptor=null;
        useEffect(() => {
            reqInterceptor = axios.interceptors.request.use((request) => {
                update_err(null);
                return request;
            })
            resInterceptor = axios.interceptors.response.use(
                response => response,
                error => {
                    update_err(err);
                    return Promise.reject(err);
                })
            return () => {
                console.log('will unmount');
                axios.interceptors.request.eject(reqInterceptor);
                axios.interceptors.response.eject(resInterceptor);
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