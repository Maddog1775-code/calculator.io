function calculate() {
  const employees = Number(document.getElementById("employees").value);
  const tools = Number(document.getElementById("tools").value);
  const cost = Number(document.getElementById("cost").value);
  const unusedPercent = Number(document.getElementById("unused").value);

  if (!employees || !tools || !cost || !unusedPercent) {
    document.getElementById("result").innerText =
      "Please fill in all fields to calculate.";
    return;
  }

  const unusedRatio = unusedPercent / 100;
  const monthlyWaste = employees * tools * cost * unusedRatio;
  const yearlyWaste = monthlyWaste * 12;

  document.getElementById("result").innerText =
    `Estimated waste: $${monthlyWaste.toFixed(0)} per month ($${yearlyWaste.toFixed(0)} per year).`;
}
