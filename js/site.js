function getValue(){
    alert("Hello Good People!");
}

function getValue2()
{
    let msg = '';

    msg = document.getElementById("message").value;

    Swal.fire(
        {
            backdrop: false, 
            title: 'App name',
            text: msg
        }
    );
}