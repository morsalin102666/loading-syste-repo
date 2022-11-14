function loadingSpinner() {
    const loading = document.getElementById("main");
    loading.style.display = "block";
    const lDot = document.getElementById("dot");
    if (lDot.innerHTML.length > 4) {
      lDot.innerHTML = "";
    } else {
      lDot.innerHTML += ".";
    }
  }
  window.setInterval(loadingSpinner, 1000);