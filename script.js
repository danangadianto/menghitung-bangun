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
  let rusuk = Number(document.getElementById("rusukKubus").value);
  let luasPermKubus = document.getElementById("luasPermKubus");
  let volumeKubus = document.getElementById("volumeKubus");

  // Menghitung
  let luasPerm = 6 * rusuk **2;
  let volume = rusuk ** 3;

  // Mengembalikan hasil
  luasPermKubus.innerHTML = "Luas permukaan kubus adalah " + luasPerm + "cm<sup>2</sup>";
  volumeKubus.innerHTML = "Volume kubus adalah " + volume + "cm<sup>3</sup>";
}

// balok
function hitungBalok() {
  // Mengambil nilai input
  let p = Number(document.getElementById("panjangBalok").value);
  let l = Number(document.getElementById("lebarBalok").value);
  let t = Number(document.getElementById("tinggiBalok").value);
  let luasPermBalok = document.getElementById("luasPermBalok");
  let volumeBalok = document.getElementById("volumeBalok");

  // Menghitung
  let luasPerm = ((2 * p * l) + (2 * p * t) + (2 * l * t));
  let volume = p * l * t;

  // Mengembalikan hasil
  luasPermBalok.innerHTML =
    "Luas permukaan balok adalah " + luasPerm + "cm<sup>2</sup>";
  volumeBalok.innerHTML =
    "Volume balok adalah " + volume + "cm<sup>3</sup>";
}

// limas segiempat
function hitungLimas4() {
  // Mengambil nilai input
  let p = Number(document.getElementById("panjangLimas4").value);
  let t = Number(document.getElementById("tinggiLimas4").value);
  let luasPermLimas4 = document.getElementById("luasPermLimas4");
  let volumeLimas4 = document.getElementById("volumeLimas4");

  // Menghitung
  let luasAlas = p ** 2;
  let pitagoras = Math.sqrt(((p / 2) ** 2) + (t ** 2));
  let luasSegitiga = p * pitagoras * 0.5;
  let luasPerm = luasAlas + (4 * luasSegitiga);
  let volume = (luasAlas * t)/3;

  // Mengembalikan hasil
  luasPermLimas4.innerHTML =
    "Luas permukaan Limas4 adalah " + luasPerm + "cm<sup>2</sup>";
  volumeLimas4.innerHTML = "Volume Limas4 adalah " + volume + "cm<sup>3</sup>";
}

// prisma segitiga


// limas segitiga


// tabung


// kerucut


// bola
function hitungBola() {
  // Mengambil nilai input
  let radius = Number(document.getElementById("radiusBola").value);
  let lpBola = document.getElementById("LPBola");
  let volBola = document.getElementById("volBola");
  let pi = "";

  // Menghitung
  if (radius % 7 == 0) {
    pi = 22 / 7;
  } else {
    pi = 3.14;
  }
  
  let luasPermBola = Math.round(4 * pi * radius ** 2);
  let volume = Math.round((4 * pi * radius ** 3) / 3);

  // Mengembalikan hasil
  lpBola.innerHTML = "Keliling Lingkaran adalah " + luasPermBola + "cm";
  volBola.innerHTML = "Luas Lingkaran adalah " + volume + "cm<sup>2</sup>";
}
