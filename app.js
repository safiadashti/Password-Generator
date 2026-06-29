function generate(){
let passlength = document.getElementById('length').value ||15;
let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
let password = "";

for(let i = 0; i<passlength; i++){
  password += chars.charAt(Math.floor(Math.random()* chars.length))
}
document.getElementById('password').value = password;
}

function copyPassword(){
   let password = document.getElementById('password');
  if (pass.value === "") {
        pass.classList.add("apply-shake");
        
        swal({
            title: "Empty",
            text:"Nothing to copy!",
            icon: "error",
            dangerMode: true,
        });

        setTimeout(() => {
            pass.classList.remove("apply-shake");
        }, 400);
        return;
   password.select();
   document.execCommand('copy');
   alert("Copied:" + password.value);
}
  pass.select();
    navigator.clipboard.writeText(pass.value);
    
    swal({
        title: "Password Copied",
        text: "Copied to the clipboard",
        icon: "success"
    });
function getRandomColor(){
    let letters ='0123456789ABCDEF';
    let colors = '#';
    for(let i=0; i<6; i++){
        colors +=letters[Math.floor(Math.random() * letters.length)];
    }
    return colors;
}
document.getElementById("colorChanger").addEventListener('click',()=>{
    let colorChanger = getRandomColor();
    document.body.style.backgroundColor = colorChanger;
})
