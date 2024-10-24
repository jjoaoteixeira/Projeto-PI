document.querySelector(".jsFilter").addEventListener("click", function () {
  document.querySelector(".filter-menu").classList.toggle("active");
});

document.querySelector(".grid").addEventListener("click", function () {
  document.querySelector(".list").classList.remove("active");
  document.querySelector(".grid").classList.add("active");
  document.querySelector(".products-area-wrapper").classList.add("gridView");
  document
    .querySelector(".products-area-wrapper")
    .classList.remove("tableView");
});

document.querySelector(".list").addEventListener("click", function () {
  document.querySelector(".list").classList.add("active");
  document.querySelector(".grid").classList.remove("active");
  document.querySelector(".products-area-wrapper").classList.remove("gridView");
  document.querySelector(".products-area-wrapper").classList.add("tableView");
});

var modeSwitch = document.querySelector('.mode-switch');
modeSwitch.addEventListener('click', function () {                      document.documentElement.classList.toggle('light');
 modeSwitch.classList.toggle('active');
});
document.addEventListener('DOMContentLoaded', function() {
  const filterButton = document.querySelector('.jsFilter');
  const filterMenu = document.querySelector('.filter-menu');
  const resetButton = document.getElementById('reset-button');
  const applyButton = document.getElementById('apply-button');
  
  // Toggle da menu de filtros
  filterButton.addEventListener('click', function() {
      const isVisible = filterMenu.style.display === 'block';
      filterMenu.style.display = isVisible ? 'none' : 'block';
  });

  // Função de reset
  resetButton.addEventListener('click', function() {
      document.getElementById('material-select').selectedIndex = 0;
      document.getElementById('status-select').selectedIndex = 0;
      console.log('Filtros resetados');
  });

  // Função aplicar
  applyButton.addEventListener('click', function() {
      const material = document.getElementById('material-select').value;
      const status = document.getElementById('status-select').value;
      console.log(`Filtros aplicados: Material - ${material}, Status - ${status}`);
      // Aqui você pode adicionar a lógica para aplicar os filtros na sua lista de produtos
  });
});

