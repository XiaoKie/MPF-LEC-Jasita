let errorMessage = document.getElementById("error-message");
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate() {
  let tanggalSesi = document.getElementById("tanggal-sesi").value;
  let jamSesi = document.getElementById("jam-sesi").value;
  let jumlahSesi = document.getElementById("pelanggan-jumlah-sesi").value;
  let nama = document.getElementById("pelanggan-nama").value;
  let alamat = document.getElementById("pelanggan-alamat").value;
  let nomorWa = document.getElementById("pelanggan-nomorWa").value;
  let email = document.getElementById("pelanggan-email").value;

  if (!validateTanggalPesan(tanggalSesi)) {
    return;
  } else if (!validateJamPesan(jamSesi)) {
    return;
  } else if (!validateJumlahSesi(jumlahSesi)) {
    return;
  } else if (!validateNama(nama)) {
    return;
  } else if (!validateAlamat(alamat)) {
    return;
  } else if (!validateNomorWA(nomorWa)) {
    return;
  } else if (!validateEmail(email)) {
    return;
  } else {

  }
}
function validateTanggalPesan(tanggalSesi) {
  let today = new Date();
  let selectedDate = new Date(tanggalSesi);
  today.setHours(0, 0, 0, 0);
  if (!tanggalSesi) {
    errorMessage.innerHTML = "Isi tanggal!";
    return false;
  } else if (selectedDate <= today) {
    errorMessage.innerHTML = "Tanggal yang dipilih harus lebih dari hari ini!";
    return false;
  }
  return true;
}
function validateJamPesan(jamSesi) {
  if (!jamSesi) {
    errorMessage.innerHTML = "Isi jam!";
    return false;
  }
  return true;
}
function validateJumlahSesi(jumlahSesi) {
  if (jumlahSesi < 1) {
    errorMessage.innerHTML = "Minimum 1 sesi dipesan!";
    return false;
  }
  return true;
}
function validateNama(nama) {
  if (nama.length < 4) {
    errorMessage.innerHTML = "Nama lengkap minimal 4 karakter!";
    return false;
  }
  return true;
}
function validateAlamat(alamat) {
  if (alamat.length < 20) {
    errorMessage.innerHTML =
      "Masukan alamat dengan lengkap, minimal 20 karakter!";
    return false;
  }
  return true;
}
function validateNomorWA(nomorWa) {
  if (isNaN(nomorWa) || nomorWa.length < 8) {
    errorMessage.innerHTML =
      "Masukan nomor WhatsApp yang valid! Minimal 8 angka";
    return false;
  }
  return true;
}
function validateEmail(email) {
  if (!emailRegex.test(email)) {
    errorMessage.textContent = "Masukan Email yang valid!";
    return false;
  }
  return true;
}
