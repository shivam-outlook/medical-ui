import swal from 'sweetalert';

class MyAlert {
    static alert({ icon, title, description }) {
        return swal({
            icon,
            text: description,
            title,
            buttons: {
                cancel: false,
                confirm: {
                    value: true,
                    className: 'btn-success'
                }
            }
        });
    }

    static confirm({ icon, title, description }) {
        return swal({
            icon,
            text: description,
            title,
            buttons: {
                cancel: true,
                confirm: {
                    value: true,
                    className: 'btn-success'
                }
            }
        });
    }
}

export default MyAlert;