function viewAllData() {
    let table = document.querySelector(".data_table");
    var object = localStorage.getItem("object");
    var objectdata = JSON.parse(object);
    var elements = "";
    objectdata.map(record => {
        elements += `<tr>  
        <td>${record.Name}</td>
           <td>${record.Email}</td>
           <td>${record.Contact}</td>
            <td>${record.Address}</td>
        
          <td>
           <button class="edit"onclick={editData(${record.id})} >Update</button>
            <button class="delete"onclick={deleteData(${record.id})}>Delete</butteon>
        </td>
        </tr>`
    })

    table.innerHTML = elements;
    document.querySelector("form").reset();  
}


function submitForm() {
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
        id: 1,
        Name: name,
        Email: email,
        Contact: contact,
        Address: address
    }]



    localStorage.setItem("object", JSON.stringify(record))
    document.querySelector(".add").classList.remove("hide");
    document.querySelector(".container").classList.add("hide")
    document.querySelector(".table").classList.remove("hide");

    viewAllData();
    
}


function showForm() {
    document.querySelector(".table").classList.add("hide");
    document.querySelector(".container").classList.remove("hide")
    document.querySelector(".add").classList.add("hide")

    
}


function editData(id) {
    document.querySelector('.container').classList.remove("hide")
    document.querySelector('.table').classList.add("hide")
    document.querySelector('.add').classList.add("hide")

    let object = localStorage.getItem("object");
    let objectdata = JSON.parse(object);
    let record = objectdata.find(rec => rec.id == id)

    document.querySelector('#name').value = record.Name;
    document.querySelector('#mail').value = record.Email;
    document.querySelector('#number').value = record.Contact;
    document.querySelector('#adrs').value = record.Address;

}



function deleteData(id) {
    let object = localStorage.getItem("object");
    let objectdata = JSON.parse(object);
    objectdata = objectdata.filter(record => record.id !== id);
    localStorage.setItem("object", JSON.stringify(objectdata));
    viewAllData()
}







