let btn = document.querySelector("#button");
btn.addEventListener('click', (e) => {
    e.preventDefault();
    let userlist = []
    let name = document.querySelector("#name").value.trim();
    let email = document.querySelector("#mail").value.trim();
    let contact = document.querySelector("#number").value.trim()
    let address = document.querySelector("#adrs").value.trim();

    let chr = /^[A-Za-z\s]+$/
    var regx = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(\.[a-z]+)?$/;

    if (name == "") {
        swal("Full Name is required!", "", "warning");
        return false;
    }
    if (!chr.test(name)) {
        swal("Full Name should contain only Letters", "", "warning")
        return false;
    }
    if (name.length < 3) {
        swal("Please Enter Proper Name", "", "warning");
        return false;
    }
    if (email == "") {
        swal("Email is required!", "", "warning")
        return false;
    }
    if (!regx.test(email)) {
        swal("Enter valid Email id", "", "warning")
        return false;
    }
    if (contact == "" || contact.length != 10) {
        swal("Valid Mobile Phone Number is required!", "", "warning");
        return false;
    }
    if (address == "") {
        swal("Address is required!", "", "warning")
        return false;
    }


    //local storage


    userlist.push({
        UserName: name,
        EmailID: email,
        UserNumber: contact,
        UserAddress: address
    });

    localStorage.setItem('Data', JSON.stringify(userlist));

    swal("Form was submitted successfully!", "", "success");

})






