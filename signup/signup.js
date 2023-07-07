async function signup(e){
    try{
        e.preventDefault();
        let signupDetails={
            name:e.target.name.value,
            email:e.target.emailid.value,
            phonenumber:e.target.phno.value,
            password:e.target.password.value
        }
        console.log(signupDetails)
        const response = await axios.post("http://localhost:3000/user/signup",signupDetails)
            if(response.status === 201){
                alert(response.data.message);
                window.location.href="../login/login.html"
            } 
    } catch(err){
        alert(err.data.message);
        document.body.innerHTML+= `<div style="color:red;">${err.data.message}</div>`;
    }
}