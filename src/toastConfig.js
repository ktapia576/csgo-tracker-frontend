import { TYPE } from 'vue-toastification'

export default {
    transition: "Vue-Toastification__bounce",
    maxToasts: 5,
    newestOnTop: true,
    toastDefaults: {
        // ToastOptions object for each type of toast 
        [TYPE.ERROR]: {
            position: "top-center",
            timeout: 3048,
            closeOnClick: false,
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            draggable: true,
            draggablePercent: 0.6,
            showCloseButtonOnHover: true,
            hideProgressBar: false,
            closeButton: "button",
            icon: true,
            rtl: false
        },
        [TYPE.SUCCESS]: {
            position: "top-center",
            timeout: 3048,
            closeOnClick: false,
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            draggable: true,
            draggablePercent: 0.6,
            showCloseButtonOnHover: true,
            hideProgressBar: false,
            closeButton: "button",
            icon: true,
            rtl: false
        }   
    }
}