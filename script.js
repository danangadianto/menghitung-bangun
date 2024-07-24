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
  let pi = 0;

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
function hitungLimas3() {
  // Mengambil nilai input
  let a = Number(document.getElementById("aLimas3").value);
  let t = Number(document.getElementById("tLimas3").value);
  let T = Number(document.getElementById("TLimas3").value);
  let luasPermLimas3 = document.getElementById("LPLimas3");
  let volumeLimas3 = document.getElementById("volLimas3");

  // Menghitung
  let T1 = Math.sqrt((T ** 2) - ((a/2) ** 2));
  let a2 = Math.sqrt((a/2) ** 2) + (t ** 2);
  console.log(a2);
  let T2 = Math.sqrt((T ** 2) - ((a2/2) ** 2));
  console.log(T2);
  let luasAlas = (a * t) / 2;
  let luasSisi1 = (a * T1) / 2;
  let luasSisi2 = (a2 * T2) / 2;

  console.log(luasAlas);
  console.log(typeof luasAlas);
  
  console.log(luasSisi1);
  console.log(typeof luasSisi1);
  
  console.log(luasSisi2);
  console.log(typeof luasSisi2);
  

  let luasPerm = luasAlas + luasSisi1 + (2 * luasSisi2);
  let volume = (a * t * T) / 6;

  // Mengembalikan hasil
  luasPermLimas3.innerHTML =
    "Luas permukaan limas segitiga adalah " + luasPerm + "cm<sup>2</sup>";
  volumeLimas3.innerHTML = "Volume limas segitiga adalah " + volume + "cm<sup>3</sup>";
}

// tabung
function hitungTabung() {
  // Mengambil nilai input
  let radius = Number(document.getElementById("radiusTabung").value);
  let tinggi = Number(document.getElementById("tinggiTabung").value);
  let lpTabung = document.getElementById("LPTabung");
  let volTabung = document.getElementById("volTabung");
  let pi = 0;

  // Menghitung
  if (radius % 7 == 0) {
    pi = 22 / 7;
  } else {
    pi = 3.14;
  }

  let luasPermTabung = Math.round((2 * pi * radius * tinggi) + (2 * pi * radius ** 2));
  let volume = Math.round(pi * (radius ** 2) * tinggi);

  // Mengembalikan hasil
  lpTabung.innerHTML =
    "Luas permukaan Tabung adalah " + luasPermTabung + "cm<sup>2</sup>";
  volTabung.innerHTML = "Volume Tabung adalah " + volume + "cm<sup>3</sup>";
}

// kerucut
function hitungKerucut() {
  // Mengambil nilai input
  let radius = Number(document.getElementById("radiusKerucut").value);
  let tinggi = Number(document.getElementById("tinggiKerucut").value);
  let miring = Number(document.getElementById("miringKerucut").value);
  let lpKerucut = document.getElementById("LPKerucut");
  let volKerucut = document.getElementById("volKerucut");
  let pi = 0;

  // Menghitung
  if (radius % 7 == 0) {
    pi = 22 / 7;
  } else {
    pi = 3.14;
  }

  if (miring === 0){
    miring = Math.sqrt((radius ** 2) + (tinggi ** 2));
  }

  if (tinggi === 0) {
    tinggi = Math.sqrt((miring ** 2) - (radius ** 2));
  }

  let lpkerucut = Math.round((pi * radius * miring) + (pi * radius ** 2));
  let volkerucut = Math.round((pi * (radius ** 2) * tinggi) / 3 );

  // Mengembalikan hasil
  lpKerucut.innerHTML =
    "Luas permukaan kerucut adalah " + lpkerucut + "cm<sup>2</sup>";
  volKerucut.innerHTML = "Volume kerucut adalah " + volkerucut + "cm<sup>3</sup>";
}

// bola
function hitungBola() {
  // Mengambil nilai input
  let radius = Number(document.getElementById("radiusBola").value);
  let lpBola = document.getElementById("LPBola");
  let volBola = document.getElementById("volBola");
  let pi = 0;

  // Menghitung
  if (radius % 7 == 0) {
    pi = 22 / 7;
  } else {
    pi = 3.14;
  }
  
  let luasPermBola = Math.round(4 * pi * radius ** 2);
  let volume = Math.round((4 * pi * radius ** 3) / 3);

  // Mengembalikan hasil
  lpBola.innerHTML =
    "Luas permukaan bola adalah " + luasPermBola + "cm<sup>2</sup>";
  volBola.innerHTML = "Volume bola adalah " + volume + "cm<sup>3</sup>";
}
