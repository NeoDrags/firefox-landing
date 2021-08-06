$(document).ready(function(){
    $("#image-file").on('change',function(){
        const btn = document.querySelector('input[type=file]');
        const file = btn.files[0];
        localStorage.clear();
        const reader = new FileReader();
        reader.addEventListener("load", function () {
            try{
                localStorage.setItem('file', reader.result);
                document.body.style.backgroundImage = "url(\'" + localStorage.getItem("file") + "\')"
            }
            catch(e){
                alert("File Size is too Big!")
            }
            
        }, false);
        if(file){
            reader.readAsDataURL(file);
        }
    });
});