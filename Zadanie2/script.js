const lights = document.querySelectorAll('.traffic-light');

lights.forEach(light => {
  light.addEventListener('click', () => {
    lights.forEach(otherLight => {
      otherLight.classList.remove('red', 'yellow', 'green');
    });

    light.classList.add(getColorClass(light.id));
  });
});

function getColorClass(lightId) {
  switch (lightId) {
    case 'red-light':
      return 'red';
    case 'yellow-light':
      return 'yellow';
    case 'green-light':
      return 'green';
    default:
      return '';
  }
}