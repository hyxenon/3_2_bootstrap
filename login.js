const register = () => {
    const txtModalEmail = document.querySelector('#txtModalEmail')
    const txtModalPassword = document.querySelector('#txtModalPassword')
    const txtModalConfirmPassword = document.querySelector('#txtModalConfirmPassword')
    const txtModalName = document.querySelector('#txtModalName')
    const genderRadios = document.getElementsByName('radioGender');
    const modalAddress = document.querySelector('#modalAddress')
    const modalBirthdate = document.querySelector('#modalBirthdate')
    
    let selectedGender;
    for (const radio of genderRadios) {
      if (radio.checked) {
        selectedGender = radio.value;
        break;
      }
    }

    let user = {
        email: txtModalEmail.value,
        name: txtModalName.value,
        password: txtModalPassword.value,
        confirmPassword: txtModalConfirmPassword.value,
        gender: selectedGender,
        address: modalAddress.value,
        birthdate: modalBirthdate.value
       
    }
    

    if(!user.email){
        return alert('Email address is required.')
    } else if (!user.name){
        return alert('Name is required!')
    } else if (!user.password || !user.confirmPassword){
        return alert("Password is required.")
    } else if (user.password != user.confirmPassword){
        return alert('Password does not match.')
    } else if (!user.address){
        return alert('Address is required!')
    } else if (!user.birthdate){
        return alert('Birthdate is required!')
    }

    
  alert(`Welcome ${user.name}. You have been successfully registered.`)
  localStorage.setItem('user', JSON.stringify(user))
}


let btnModalRegister = document.querySelector('#btnModalRegister')
btnModalRegister.addEventListener('click', () => {
    register()
})

let user = JSON.parse(localStorage.getItem('user'))
console.log(`My name is ${user.name} and my email is ${user.email}`);
console.log('User details: ', user);