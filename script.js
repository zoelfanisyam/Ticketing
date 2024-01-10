function setHargaTiket() {
  const tujuan = document.getElementById("tujuan").value;
  let harga;

  switch (tujuan) {
    case "Jakarta":
      harga = 500000;
      break;
    case "Surabaya":
      harga = 1000000;
      break;
    case "Yogyakarta":
      harga = 1500000;
      break;
    case "Bali":
      harga = 2500000;
      break;
    default:
      harga = 0;
      break;
  }

  document.getElementById("harga").value = harga;
}

function hitungTotal() {
  const harga = parseFloat(document.getElementById("harga").value);
  const jumlahTiket = parseInt(document.getElementById("jumlahTiket").value);
  const member = document.getElementById("member").checked;
  const diskon = parseFloat(document.getElementById("diskon").value);

  let total = harga * jumlahTiket;

  if (member) {
    total *= 0.9; // Member diskon 10%
  }

  if (!isNaN(diskon)) {
    total -= total * (diskon / 100); // Diskon tambahan
  }

  document.getElementById("totalBayar").textContent = total;
}
