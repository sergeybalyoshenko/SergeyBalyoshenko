var userName = prompt('Enter your user name', '');

if (userName == 'admin') {

    var pass = prompt('Enter password', '');

    if (pass == 'passw0rd') {
    alert('Welcome home!');
    } else if (pass == null) {
        alert('Canceled');
    } else {
        alert('Wrong password');
    }

} else if (userName == null) {
    alert('Canceled');
} else {
    alert('Access denied');
}