// Menghitung bangun datar
// Persegi

function hitungPersegi() {
    // Mengambil nilai input
    let sisi = Number(document.getElementById("sisiPersegi").value);
    let kelilingPersegi = document.getElementById("kelilingPersegi");
    let luasPersegi = document.getElementById("luasPersegi");
    
    // Menghitung
    let keliling = 4 * sisi;
    let luas = sisi ** 2;

    // Mengembalikan hasil
    kelilingPersegi.innerHTML = "Keliling persegi adalah " + keliling + "cm";
    luasPersegi.innerHTML = "Luas persegi adalah " + luas + "cm<sup>2</sup>";
    
}

// Persegi Panjang
function hitungPersegiPanjang() {
  // Mengambil nilai input
  let panjang = Number(document.getElementById("panjangPersegiPanjang").value);
  let lebar = Number(document.getElementById("lebarPersegiPanjang").value);
  let kelilingPersegiPanjang = document.getElementById("kelilingPersegiPanjang");
  let luasPersegiPanjang = document.getElementById("luasPersegiPanjang");

  // Menghitung
  let keliling = 2 * ( panjang + lebar);
  let luas = panjang * lebar;

  // Mengembalikan hasil
  kelilingPersegiPanjang.innerHTML = "Keliling persegi panjang adalah " + keliling + "cm";
  luasPersegiPanjang.innerHTML = "Luas persegi panjang adalah " + luas + "cm<sup>2</sup>";
}

// Jajar Genjang
function hitungJajar() {
  // Mengambil nilai input
  let alas = Number(document.getElementById("alasJajar").value);
  let tinggi = Number(document.getElementById("tinggiJajar").value);
  let sisi = Number(document.getElementById("sisiJajar").value);

  let kelilingJajar = document.getElementById("kelilingJajar");
  let luasJajar = document.getElementById("luasJajar");

  // Menghitung
  let keliling = (2 * (sisi) + 2 * (alas));
  let luas = alas * tinggi;

  // Mengembalikan hasil
  kelilingJajar.innerHTML = "Keliling Jajar adalah " + keliling + "cm";
  luasJajar.innerHTML = "Luas Jajar adalah " + luas + "cm<sup>2</sup>";
}

// Segitiga
function hitungSegitiga() {
  // Mengambil nilai input
  let alas = Number(document.getElementById("alasSegitiga").value);
  let tinggi = Number(document.getElementById("tinggiSegitiga").value);
  let sisi = Math.sqrt(((alas/2)**2) + (tinggi**2))
  let kelilingSegitiga = document.getElementById("kelilingSegitiga");
  let luasSegitiga = document.getElementById("luasSegitiga");

  // Menghitung
  let keliling = Math.round(3 * sisi);
  let luas = alas * tinggi * 0.5;

  // Mengembalikan hasil
  kelilingSegitiga.innerHTML = "Keliling Segitiga adalah " + keliling + "cm";
  luasSegitiga.innerHTML = "Luas Segitiga adalah " + luas + "cm<sup>2</sup>";
}

// Belah Ketupat
function hitungKetupat() {
  // Mengambil nilai input
  let miring = Number(document.getElementById("miringKetupat").value);
  let d1 = Number(document.getElementById("d1Ketupat").value);
  let d2 = Number(document.getElementById("d2Ketupat").value);
  let kelilingKetupat = document.getElementById("kelilingKetupat");
  let luasKetupat = document.getElementById("luasKetupat");

  // Menghitung
  let keliling = 4 * miring;
  let luas = d1 * d1 * 0.5;

  // Mengembalikan hasil
  kelilingKetupat.innerHTML = "Keliling Ketupat adalah " + keliling + "cm";
  luasKetupat.innerHTML = "Luas Ketupat adalah " + luas + "cm<sup>2</sup>";
}

// Layang-layang
function hitungLayang() {
  // Mengambil nilai input
  let miringKecil = Number(document.getElementById("miringKecil").value);
  let miringBesar = Number(document.getElementById("miringBesar").value);
  let d1 = Number(document.getElementById("d1Layang").value);
  let d2 = Number(document.getElementById("d2Layang").value);
  let kelilingLayang = document.getElementById("kelilingLayang");
  let luasLayang = document.getElementById("luasLayang");

  // Menghitung
  let keliling = (2 * miringKecil) + (2 * miringBesar);
  let luas = d1 * d2 * 0.5;

  // Mengembalikan hasil
  kelilingLayang.innerHTML = "Keliling Layang adalah " + keliling + "cm";
  luasLayang.innerHTML = "Luas Layang adalah " + luas + "cm<sup>2</sup>";
}

// Trapesium
function hitungTrapesium() {
  // Mengambil nilai input
  let alasBawah = Number(document.getElementById("alasBawah").value);
  let alasAtas = Number(document.getElementById("alasAtas").value);
  let miringTrapesium = Number(document.getElementById("miringTrapesium").value);
  let tinggi = Number(document.getElementById("tinggiTrapesium").value);

  let kelilingTrapesium = document.getElementById("kelilingTrapesium");
  let luasTrapesium = document.getElementById("luasTrapesium");

  // Menghitung
  let keliling = alasBawah + alasAtas + (2*miringTrapesium) ;
  let luas = (alasBawah + alasAtas) * tinggi * 0.5;

  // Mengembalikan hasil
  kelilingTrapesium.innerHTML = "Keliling Trapesium adalah " + keliling + "cm";
  luasTrapesium.innerHTML = "Luas Trapesium adalah " + luas + "cm<sup>2</sup>";
}


// Lingkaran
function hitungLingkaran() {
  // Mengambil nilai input
  let radius = Number(document.getElementById("radius").value);
  let kelilingLingkaran = document.getElementById("kelilingLingkaran");
  let luasLingkaran = document.getElementById("luasLingkaran");
  let pi = ""

  // Menghitung
  if(radius % 7 == 0){
    pi = 22/7;
  } else {
    pi = 3.14;
  };
  console.log(pi);
  let keliling = 2 * pi * radius;
  let luas = pi * radius ** 2;

  // Mengembalikan hasil
  kelilingLingkaran.innerHTML = "Keliling Lingkaran adalah " + keliling + "cm";
  luasLingkaran.innerHTML = "Luas Lingkaran adalah " + luas + "cm<sup>2</sup>";
}
// ==============================================================================================================
// Menghitung bangun ruang
// kubus
function hitungKubus() {
  // Mengambil nilai input
  let rusuk = Number(document.getElementById("rusuk").value);
  let luasPermKubus = document.getElementById("luasPermKubus");
  let volumeKubus = document.getElementById("volumeKubus");

  // Menghitung
  let luasPerm = 6 * rusuk **2;
  let volume = rusuk ** 3;

  // Mengembalikan hasil
  luasPermKubus.innerHTML = "Luas permukaan adalah " + luasPerm + "cm<sup>2</sup>";
  volumeKubus.innerHTML = "Keliling persegi adalah " + volume + "cm<sup>3</sup>";
}

// balok


// limas segiempat


// prisma segitiga


// limas segitiga


// tabung


// kerucut


// bola

