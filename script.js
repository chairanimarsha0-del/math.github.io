document.getElementById("contactForm")
.addEventListener("submit", function(event){

  event.preventDefault();

  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;

  localStorage.setItem("nama", nama);
  localStorage.setItem("email", email);

  window.location.href = "hasil.html";
});
