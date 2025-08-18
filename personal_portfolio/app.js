// Hide the cross icon by default
document.querySelector(".cross").style.display = "none";

// Toggle sidebar and icons on hamburger click
document.querySelector(".hamBurger").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("sidebarGo");
  if (document.querySelector(".sidebar").classList.contains("sidebarGo")) {
    document.querySelector(".ham").style.display = "inline";
    document.querySelector(".cross").style.display = "none";
  } else {
    document.querySelector(".ham").style.display = "none";
    setTimeout(() => {
      document.querySelector(".cross").style.display = "inline";
    }, 300);
  }
});

// Contact form validation (used in contact.html)
function contactform() {
  let name = document.getElementById("name").value;
  let inquiryEmail = document.getElementById("inquiryEmail").value;
  let inquryPhone = document.getElementById("inquryPhone").value;
  let inquiryMessage = document.getElementById("inquiryMessage").value;

  // Validate all fields
  if (
    name == "" ||
    inquiryEmail == "" ||
    inquryPhone == "" ||
    isInquery == true ||
    inquiryMessage == ""
  ) {
    alert("All fields are mendatory");
    return false;
  } else if (inquryPhone.length < 10 || inquryPhone.length > 10) {
    alert("Number should be of 10 digits ! Please enter valid number");
    return false;
  } else if (isNaN(inquryPhone)) {
    alert("Only numbers are allowed ! Please enter valid number");
    return false;
  } else {
    true;
  }
}
