const content = document.getElementById('content')

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    console.log(user)
    document.getElementById('pmail').innerHTML = user.email

    db.collection(`ules`).doc(user.uid).get().then(function (querySnapshot) {
      content.innerHTML = ""
      loadData(querySnapshot.data())
      if (querySnapshot.data().ment2Name != '') {
        loadData2(querySnapshot.data())
      }

    }).then()
      .catch((err) => { console.log(err) })
  } else {
    // No user is signed in.
    window.location.assign('login.html')

  }
});






function loadData(data) {
  const html = `
               <div class="card-header" style="margin-top: 2rem;">
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Name <span style="margin-left: 20%">${data.mentName}</span></li>
      <li class="list-group-item">Email <span style="margin-left: 20%">${data.mentMail}</span></li>
      <li class="list-group-item">Whatsapp <span style="margin-left: 20%"> <a href= 'http://wa.me/234${data.mentNum}' >Link</a> </span></li>
    </ul >
    `;
  content.innerHTML += html


}

function loadData2(data) {

  const html = `
               <div class="card-header" style="margin-top: 2rem;">
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Name <span style="margin-left: 20%">${data.ment2Name}</span></li>
      <li class="list-group-item">Email <span style="margin-left: 20%">${data.ment2Mail}</span></li>
      <li class="list-group-item">Whatsapp <span style="margin-left: 20%"> <a href= 'http://wa.me/234${data.mentNum2}' >Link</a> </span></li>
    </ul >
    `;
  content.innerHTML += html


}
