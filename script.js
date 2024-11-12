function showForm() {
  document.getElementById("editForm").style.display = "block";
  loadProfile();
}

// Function untuk memuat data profil yang disimpan dari Penyimpanan lokal
function loadProfile() {
  document.getElementById("name").value = localStorage.getItem("name") || "";
  document.getElementById("role").value = localStorage.getItem("role") || "";
  document.getElementById("availability").value = localStorage.getItem("availability") || "Full Time";
  document.getElementById("age").value = localStorage.getItem("age") || "";
  document.getElementById("location").value = localStorage.getItem("location") || "";
  document.getElementById("yoe").value = localStorage.getItem("yoe") || "";
  document.getElementById("email").value = localStorage.getItem("email") || "";
}

// Functionuntuk menyimpan data profil ke localStorage dan memperbarui tampilan
function saveProfile() {
  localStorage.setItem("name", document.getElementById("name").value);
  localStorage.setItem("role", document.getElementById("role").value);
  localStorage.setItem("availability", document.getElementById("availability").value);
  localStorage.setItem("age", document.getElementById("age").value);
  localStorage.setItem("location", document.getElementById("location").value);
  localStorage.setItem("yoe", document.getElementById("yoe").value);
  localStorage.setItem("email", document.getElementById("email").value);

  // Perbarui bagian profil
  document.getElementById("profileName").innerText = localStorage.getItem("name");
  document.getElementById("profileRole").innerText = localStorage.getItem("role");
  document.getElementById("profileAvailability").innerText = localStorage.getItem("availability");
  document.getElementById("profileAge").innerText = localStorage.getItem("age");
  document.getElementById("profileLocation").innerText = localStorage.getItem("location");
  document.getElementById("profileYoe").innerText = localStorage.getItem("yoe");
  document.getElementById("profileEmail").innerText = localStorage.getItem("email");

  // Menyembunyikan form
  document.getElementById("editForm").style.display = "none";
}

// Saat memuat halaman, tampilkan data profil yang disimpan
window.onload = function () {
  document.getElementById("profileName").innerText = localStorage.getItem("name") || "Nama Anda";
  document.getElementById("profileRole").innerText = localStorage.getItem("role") || "Front End Designer";
  document.getElementById("profileAvailability").innerText = localStorage.getItem("availability") || "Full Time";
  document.getElementById("profileAge").innerText = localStorage.getItem("age") || "19";
  document.getElementById("profileLocation").innerText = localStorage.getItem("location") || "Jakarta";
  document.getElementById("profileYoe").innerText = localStorage.getItem("yoe") || "2";
  document.getElementById("profileEmail").innerText = localStorage.getItem("email") || "email@gmail.com";
};
