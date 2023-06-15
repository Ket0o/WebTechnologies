function inf()
{
    var errors = ""
    var reg1 = /[A-Za-zА-Яа-яЁё]/;
    var reg2 = /[0-9]{6}/;
    var reg3 = /\d/g;
    var reg4 = /^\w+@[a-zA-Z]+?\.[a-zA-Z]{2,3}$/
    var reg5 = /^[ 0-9]+$/
    var lastnameBool = reg1.test(document.regForm.lastname.value);
    var firstnameBool = reg1.test(document.regForm.firstname.value);
    var fathersnameBool = reg1.test(document.regForm.fathersname.value)
    var addressBool = reg1.test(document.regForm.Address.value);
    var countryBool = reg1.test(document.regForm.country.value);
    var cityBool = reg1.test(document.regForm.city.value)
    var sportBool = reg1.test(document.regForm.favorite_sport.value)
    var postalCode = reg2.test(document.regForm.postal_code.value);
    var phonenumberBool = document.regForm.phonenumber.value.match(reg3)
    var emailBool = reg4.test(document.regForm.email.value);
    var ageBool = reg5.test(document.regForm.Age.value);
    var heightBool = reg5.test(document.regForm.height.value);
    var foot_sizetBool = reg5.test(document.regForm.foot_size.value);
    var weightBool = reg5.test(document.regForm.weight.value);
    if (phonenumberBool == null)
    {
        phonenumberBool = false;
    }
    else if (phonenumberBool.length == 11)
    {
        phonenumberBool = true;
    }
    else
    {
        phonenumberBool = false;
    }
    
    if (!lastnameBool) errors+= "\nФамилия должна состоять из букв.";
    if (!firstnameBool) errors+= "\nИмя должно состоять из букв.";
    if (!fathersnameBool) errors+= "\nОтчество должно состоять из букв.";
    if (!addressBool) errors+= "\nАдрес должен состоять из букв.";
    if (!countryBool) errors+= "\nСтрана должна состоять из букв.";
    if (!cityBool) errors+= "\nГород должен состоять из букв.";
    if (!sportBool) errors+= "\nСпорт должен состоять из букв.";
    if (!postalCode) errors+= "\nПочтовый индекс должен состоять из 6 цифр.";
    if (!phonenumberBool) errors+= "\nНомер телефона должен состоять из 11 цифр.";
    if (!emailBool) errors+= "\nНеверный формат электронного адреса.";
    if (!ageBool) errors+= "\nВозраст - число";
    if (!heightBool) errors+= "\nРост - число";
    if (!foot_sizetBool) errors+= "\nРазмер ноги - число";
    if (!weightBool) errors+= "\nВес - число";

    if (errors == "") errors = "Успешно";
    alert(errors);
}