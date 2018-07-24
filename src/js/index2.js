let close = document.getElementById('close');
let postear = document.getElementById('postear');
let post = document.getElementById('post');
let drawPostear = document.getElementById('draw-postear');
close.addEventListener('click', event => { 
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    window.open('../index.html','_self');
  }).catch(function(error) {
    // An error happened.
  });
});

postear.addEventListener('click', event => {
  let getPost = post.value;
  basesData.comment(getPost);
  let drawPost = ` <div >${getPost}</div>`;
  drawPostear.innerHTML += drawPost;
});