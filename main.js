const form =  document.querySelector("form");
const firstname = document.getElementById("first_name");
const lastname = document.getElementById("last_name");
const tel = document.getElementById("tel");
const submitBtn = document.getElementById("submit-btn");
const resultsList = document.querySelector(".results");

const validate = (evt) => {
  const fName = firstname.value;
  const lName = lastname.value;
  const number = tel.value;

  const fNamePattern = /^[A-Za-zА-Яа-я]+(\s[A-Za-zА-Яа-я]+){0,2}$/;
  const lNamePattern = /^([A-Za-zА-Яа-я])+([\s-]+[A-Za-zА-Яа-я]+){0,2}$/;
  const numberPattern = /^\+[0-9]{12}$/;

  const obj = {};

  obj['first name'] = fNamePattern.test(fName);
  obj['last name'] = lNamePattern.test(lName);
  obj['tel'] = numberPattern.test(number);

  console.log(obj);
  return obj;

}
const showResults = (results) => {
    resultsList.innerHTML = '';

    for (key in results) {
        const result = results[key] === true
            ? `SUCCESS: ${key} passed validation`
            : `ERROR: ${key} failed validation`;

        const newListItem = document.createElement('li');
        newListItem.textContent = result;
        resultsList.append(newListItem);
    }
}

submitBtn.addEventListener("click", (e) => {
    const getResults = validate(e);
    showResults(getResults);
});
