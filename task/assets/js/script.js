function fields(){
    let that = event.target;
    let parent = that.parentElement; // label
    let content = parent.nextElementSibling; // textarea / input fields
    document.querySelectorAll('.hidden').forEach(hid => hid.classList.add('hidden'));
    content.classList.remove('hidden');

}


function chbx(){
    let that = event.target;
    if(that.checked == true){
        document.querySelectorAll('.chbk').forEach(box => box.checked = false);
        that.checked = true;
    }
}   






