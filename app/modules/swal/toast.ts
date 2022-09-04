import Swal from 'sweetalert2'

type icon =  'warning' | 'error' | 'success' | 'info' |'question'


const MyToast = (icon : icon, title : string, width ?: string) => {
    const Toast = Swal.mixin({
        width: width ?? "",
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    
    Toast.fire({
        icon: icon,
        title: title
    })
} 

export default MyToast;