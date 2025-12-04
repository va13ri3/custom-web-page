var nameBox = document.getElementById("nameInput");
var ageBox = document.getElementById("ageInput");
var personAlity = document.getElementById("personalityInput");
var genDer = document.getElementById("genderInput");
var weekEnd = document.getElementsByName("ideal");
var checkBoxes = document.querySelectorAll('input[type="checkbox"]');
var butTon = document.getElementById("submitBtn");
var outPut = document.getElementById("output");
console.log(nameBox);
console.log(ageBox);
console.log(personAlity);
console.log(genDer);
console.log(weekEnd);
console.log(checkBoxes);
console.log(butTon);
console.log(outPut);

butTon.addEventListener('click', myFunction);

function myFunction() {
    const nameUser = nameInput.value;
    const ageUser = ageInput.value;
    const selectedValue = [];
    for (let i = 0; i < weekEnd.length; i++) { // for loop -> each radio button(circles) in the collection
            if (weekEnd[i].checked) { //boolean -> true if the radio button is selected
                selectedValue.push(weekEnd[i].value); //value of selected button pushed to output
            }
    const selectedValue = [];
    for (let i = 0; i < weekEnd.length; i++) { // for loop -> each radio button(circles) in the collection
            if (weekEnd[i].checked) { //boolean -> true if the radio button is selected
                selectedValue.push(weekEnd[i].value); //value of selected button pushed to output
            }

    const checkedValues = [];
    checkBoxes.forEach(checkbox => {
        if (checkbox.checked) {
            checkedValues.push(checkbox.value); //each value of checked checkbox pushed to checkedValues array -> output
        }
});
    const genDer = genderInput.options[genderInput.selectedIndex].text;
    const personAlity = personalityInput.options[personalityInput.selectedIndex].text;
    outPut.innerHTML = ('Name:') + (' ') + (nameUser) + ('<br>') + ('Age:') + (' ') + (ageUser) + ('<br>') + ('Gender:') + (' ') + (genDer) + ('<br>') + ('MBTI:') + (' ') + (personAlity) + ('<br>')+ ('Ideal Weekend:') + (' ') + (selectedValue) + ('<br>') + ('Music I Like:') + (' ') + (checkedValues);
}
       
    }
    