document.getElementById('submit').addEventListener('click', function (e) {
  e.preventDefault()
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
    window.location.assign('ules.html')
  }).catch(function (error) {
    // Handle Errors here.

    var errorCode = error.code;
    var errorMessage = error.message;
    document.getElementById('err').innerHTML = ""
    document.getElementById('err').innerHTML = errorMessage
    // ...
  });
})