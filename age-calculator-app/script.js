let form = document.getElementById("myForm");
function handleForm(event) {
  event.preventDefault();
  let day = event.target.day.value;
  let month = event.target.month.value;
  let year = event.target.year.value;

  const dateString = month + "/" + day + "/" + year;
  console.log(dateString);

  if (formErrorValidation(day, month, year)) {
    if (isDateValid(dateString)) {
      convertdate(dateString);
    } else {
      console.log("No");
    }
  } else {
    return;
  }
}
form.addEventListener("submit", handleForm);

const formErrorValidation = (day, month, year) => {
  if (!day) {
    document.getElementById("day__error").innerText = "This field is required";
    document.getElementById("day__label").classList.add("label-error");
    document.getElementById("day").classList.add("input-error");
  } else {
    document.getElementById("day__label").classList.remove("label-error");
    document.getElementById("day").classList.remove("input-error");
    document.getElementById("day__error").innerText = "";
  }
  if (!month) {
    document.getElementById("month__error").innerText =
      "This field is required";
    document.getElementById("month__label").classList.add("label-error");
    document.getElementById("month").classList.add("input-error");
  } else {
    document.getElementById("month__label").classList.remove("label-error");
    document.getElementById("month").classList.remove("input-error");
    document.getElementById("month__error").innerText = "";
  }
  if (!year) {
    document.getElementById("year__error").innerText = "This field is required";
    document.getElementById("year__label").classList.add("label-error");
    document.getElementById("year").classList.add("input-error");
  } else {
    document.getElementById("year__label").classList.remove("label-error");
    document.getElementById("year").classList.remove("input-error");
    document.getElementById("year__error").innerText = "";
  }
  if (day && month && year) {
    return true;
  } else {
    return false;
  }
};

const isDateValid = (date) => {
  var dateString = date.replace(/\D/g, "");
  // Parse integer values from the date string
  var year = parseInt(dateString.slice(4, 8));
  var month = parseInt(dateString.slice(0, 2));
  var day = parseInt(dateString.slice(2, 4));
  // Define the number of days per month
  var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  // Leap years
  if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
    daysInMonth[1] = 29;
  }

  if (day < 1 || day > daysInMonth[month - 1]) {
    document.getElementById("day__error").innerText = "Must be a valid date";
    document.getElementById("day__label").classList.add("label-error");
    document.getElementById("day").classList.add("input-error");
    return false;
  } else {
    document.getElementById("day__label").classList.remove("label-error");
    document.getElementById("day").classList.remove("input-error");
    document.getElementById("day__error").innerText = "";
  }
  if (month < 1 || month > 12) {
    document.getElementById("month__error").innerText = "Must be a valid month";
    document.getElementById("month__label").classList.add("label-error");
    document.getElementById("month").classList.add("input-error");
    return false;
  } else {
    document.getElementById("month__label").classList.remove("label-error");
    document.getElementById("month").classList.remove("input-error");
    document.getElementById("month__error").innerText = "";
  }
  if (year > new Date().getFullYear()) {
    document.getElementById("year__error").innerText = "Must be in the past";
    document.getElementById("year__label").classList.add("label-error");
    document.getElementById("year").classList.add("input-error");
    return false;
  } else {
    document.getElementById("year__label").classList.remove("label-error");
    document.getElementById("year").classList.remove("input-error");
    document.getElementById("year__error").innerText = "";
  }
  return true;
};

const convertdate = (date) => {
  let currDate = new Date(new Date().toLocaleDateString());
  let dateGiven = new Date(date);
  let numberOfDays = parseInt(
    (currDate - dateGiven) / (1000 * 60 * 60 * 24),
    10
  );
  let years = Math.floor(numberOfDays / 365);
  let months = Math.floor((numberOfDays % 365) / 30);
  let days = Math.floor((numberOfDays % 365) % 30);
  document.querySelector(".year__display-value").innerText = years;
  document.querySelector(".month__display-value").innerText = months;
  document.querySelector(".day__display-value").innerText = days;
};
