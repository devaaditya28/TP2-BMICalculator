const btn = document.getElementById("calculate");

btn.addEventListener("click", function () {
  let height = document.querySelector("#height").value;
  let weight = document.querySelector("#weight").value;

  if (height == "" || weight == "") {
    alert("Isi Berat dan Tinggi Badan!!!");
    return;
  }

  // Rumus BMI untuk satuan KG dan CM adalah Berat Badan/(Tinggi Badan/100)^2

  height = height / 100;

  let BMI = weight / (height * height);

  BMI = BMI.toFixed(2);

  document.querySelector("#result").innerHTML = BMI;

  let status = "";

  if (BMI < 18.5) {
    status = "Underweight (Berat Badan Kurang)";
  }
  if (BMI >= 18.5 && BMI < 24.9) {
    status = "Normal Weight (Berat Badan Normal)";
  }
  if (BMI >= 25 && BMI < 29.9) {
    status = "Overweight (Berat Badan Berlebih)";
  }
  if (BMI >= 30) {
    status = "Obesity (Obesitas)";
  }
  document.querySelector(
    ".comment"
  ).innerHTML = `Keterangan: <span id="comment">${status}</span>`;
});