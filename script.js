document.addEventListener('DOMContentLoaded', function() {
  const filterButton = document.querySelector('.jsFilter');
  const filterMenu = document.querySelector('.filter-menu');
  const resetButton = document.getElementById('reset-button');
  const applyButton = document.getElementById('apply-button');

  // Adicionar listeners de eventos apenas se os elementos existirem
  if (filterButton) {
      filterButton.addEventListener('click', function() {
          const isVisible = filterMenu.style.display === 'block';
          filterMenu.style.display = isVisible ? 'none' : 'block';
      });
  }

  if (resetButton) {
      resetButton.addEventListener('click', function() {
          document.getElementById('material-select').selectedIndex = 0;
          document.getElementById('status-select').selectedIndex = 0;
          console.log('Filtros resetados');
      });
  }

  if (applyButton) {
      applyButton.addEventListener('click', function() {
          const material = document.getElementById('material-select').value;
          const status = document.getElementById('status-select').value;
          console.log(`Filtros aplicados: Material - ${material}, Status - ${status}`);
          // Aqui você pode adicionar a lógica para aplicar os filtros na sua lista de produtos
      });
  }
});

function loadPage(page) {
  console.log("Carregando página:", page); // Log para depuração
  fetch(page)
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.text();
  })
  .then(data => {
      document.getElementById('main-content').innerHTML = data;
  })
  .catch(error => console.error('Erro ao carregar a página:', error));
}
