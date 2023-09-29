document.getElementsByTagName("p")[0].style.fontSize = "1vw";

const hoverTooltips = document.querySelectorAll('.hover-tooltip');
const popup = document.getElementById('popup');

hoverTooltips.forEach((tooltip) => {
    tooltip.addEventListener('mouseover', () => {
      timeoutId = setTimeout(() => {
            popup.style.display = 'none';
        }, 200);
        const popupText = tooltip.getAttribute('data-popup-text');
        popup.textContent = popupText;
        popup.style.display = 'block';
    });

    tooltip.addEventListener('mouseout', () => {
        popup.style.display = 'none';
    });
});