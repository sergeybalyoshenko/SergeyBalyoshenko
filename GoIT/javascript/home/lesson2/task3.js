var userLogin = prompt('Enter your login', '');

if (userLogin == 'admin') {

    var userPassword = prompt('Enter your password', '');

    if (userPassword == 'passw0rd') {
    alert('Welcome home!');
    } else if (userPassword == null) {
        alert('Canceled');
    } else {
        alert('Wrong password');
    }

} else if (userLogin == null) {
    alert('Canceled');
} else {
    alert('Access denied');
}