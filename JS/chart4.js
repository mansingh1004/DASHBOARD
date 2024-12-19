const ctx4 = document.getElementById('radar');

  const radar= new Chart(ctx4, {
  type: 'radar',
  data: {
    labels: ['C', 'C++', 'JAVA', 'PYTHON', 'C#', 'FULL STACK'],
    datasets: [{
      label: 'Knowledge of Emplooye',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});