function submitform() {
    event.preventDefault();
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
    let record = [{
        Name: name,
        Email: email,
        Contact: contact,
        Address: address
    }]


    localStorage.setItem("object", JSON.stringify(record))
    let table = document.querySelector(".data_table");
    var object = localStorage.getItem("object");
    var objectdata = JSON.parse(object);
    var elements = "";
    objectdata.map(record => {
        elements +=`<tr>  
        <td>${record.Name}</td>
           <td>${record.Email}</td>
                <td>${record.Contact}</td>
                     <td>${record.Address}</td>
          <td>
           <button class="edit" >Edit</button>
            <button class="delete"}>Delete</butteon>
        </td>
        </tr>`
    })

    table.innerHTML = elements;
}

function create() {
    document.querySelector(".table").style.display = "none"
    document.querySelector(".container").style.display = "block"
    document.querySelector(".add").style.display = "none"
}





