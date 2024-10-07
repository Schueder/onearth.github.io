// Funktion zum Öffnen des Popups
function openPopup() {
    document.getElementById('popup').classList.add('active');
    document.getElementById('popup-overlay').classList.add('active');
}

// Popup beim Laden der Seite öffnen
window.onload = openPopup;

// Formular-Submit-Event
document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var mailtoLink = 'info@one-earth.online?subject=Newsletter Anmeldung&body=E-Mail: ' + email;
    window.location.href = mailtoLink;
});
