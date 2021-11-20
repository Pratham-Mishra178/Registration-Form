function submitions_validation()
{
var uid = document.submition.userid;
var phone = document.submition.phone;
var regno = document.submition.regno;
var dob = document.submition.dob;
var email = document.submition.email;
var bnc = document.submition.bnc;

if(name_validation(uid))
{
if(phone_validation(phone,10))
{
if(regno_validation(regno))
{
if(dob_validation(dob))
{
if(email_validation(email))
{
if(bnc_validation(bnc))
{
}
} 
}
}
}
}
return false;
}







function name_validation(uid)
{
var uid_len = uid.value.length;
if (uid_len == 0)
{
alert("Name should not be empty");
uid.focus();
return false;
}
return true;
}







function phone_validation(phone,ln)
{
var phone_len = phone.value.length;
if (phone_len == 0 ||phone_len != ln)
{
alert("Phone Number should not be empty / length must = 10");
phone.focus();
return false;
}
return true;
}








function regno_validation(regno)
{ 
var regno_len = regno.value.length;
if (regno_len == 0 )
{
alert('Registration Number should not be empty');
regno.focus();
return false;
}
return true;
}



function dob_validation(dob)
{ 
var dob_len = dob.value.length;
if (dob_len == 0 )
{
alert('DOB should not be empty');
dob.focus();
return false;
}
return true;
}





function email_validation(email)
{
var mailsubmitionat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email.value.match(mailsubmitionat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
email.focus();
return false;
}
}




function bnc_validation(bnc)
{ 
var bnc_len = bnc.value.length;
if (bnc_len == 0 )
{
alert('Branch should not be empty');
bnc.focus();
return false;
}



else
{
alert('Form Succesfully Submitted');
window.location.reload()
return true;
}
}

