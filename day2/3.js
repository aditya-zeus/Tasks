const submit = document.getElementById("submit");
const username = document.getElementById("name");
const comment = document.getElementById("comment");
submit.addEventListener("click", (e) => {
    e.preventDefault();
    if(username.value === "") {
        alert("All fields are compulsory! - Name missing")
        username.focus()
        return false;
    }

    if(comment.value === "") {
        alert("All fields are compulsory! - Comments missing")
        comment.focus()
        return false;
    }

    const genderMale = document.getElementById("male");
    const genderFemale = document.getElementById("male");

    if(!genderMale.checked && !genderFemale.checked) {
        alert("All fields are compulsory! - Gender missing")
        genderMale.focus
        return false;
    }
    alert("Submitted Successfully!");
    username.value = "";
    comment.value = "";
    genderMale.checked = false;
    genderFemale.checked = false;
});
