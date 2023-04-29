// Add your code here
function submitData(name, email) {

    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    }

    return fetch("http://localhost:3000/users", configurationObject)
        .then(resp => resp.json())
        .then(obj => {
            console.log(obj);
            document.querySelector('body').append(obj.id);
        })
        .catch( err => {
            console.log(err)
            document.querySelector('body').append(err.message)
        })

}

submitData();