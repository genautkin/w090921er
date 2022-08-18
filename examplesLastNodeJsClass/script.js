function login(){
    const username = document.getElementById('yourUsername').value;
    const password = document.getElementById('yourPassword').value;
    console.log('username: ' + username + ' password: ' + password);
    loginByFetch(username, password).then((token)=>{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
    }).catch((error)=>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
    });
    return;
    loginPromise(username, password).then((token)=>{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
    }).catch((error)=>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
    })
}

function loginPromise(email,password){
    return new Promise((resolve, reject) => {
        let post = JSON.stringify({email:email,
                                    password:password})
 
    const url = "http://localhost:3000/user/auth"
    let xhr = new XMLHttpRequest()
    
    xhr.open('POST', url, true)
    xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
    xhr.send(post);
    
        xhr.onload = function () {
            if(xhr.status === 200) {
                resolve(xhr.response)
            }
            if(xhr.status === 400) {
                reject(xhr.response) 
        
            }
        }
        xhr.onerror = function(){
            reject("Oops! Something went wrong...");
        }
    })
        
}

function loginByFetch(email,password){
 return fetch('http://localhost:3000/user/auth', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({email: email, password: password})
        }).then((response) => response.text())
}