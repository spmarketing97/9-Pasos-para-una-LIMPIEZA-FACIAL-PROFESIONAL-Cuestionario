/**
 * Gestión de consentimiento de cookies para "9 Pasos para una Limpieza Facial Profesional"
 */
document.addEventListener('DOMContentLoaded', function() {
    // Referencias a elementos del DOM
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptButton = document.getElementById('cookie-accept');
    const rejectButton = document.getElementById('cookie-reject');
    
    // Nombre de las cookies
    const COOKIE_CONSENT = 'limpieza_facial_cookie_consent';
    const COOKIE_REJECTED = 'limpieza_facial_cookie_rejected';
    
    // Duración de las cookies (1 año en este caso)
    const COOKIE_DURATION = 365;
    
    // Comprobar si ya se ha dado consentimiento
    function checkCookieConsent() {
        if (getCookie(COOKIE_CONSENT) === 'true') {
            // Si el usuario ha aceptado las cookies, no mostrar el banner
            return true;
        } else if (getCookie(COOKIE_REJECTED) === 'true') {
            // Si el usuario ha rechazado las cookies, no mostrar el banner
            return true;
        }
        return false;
    }
    
    // Función para obtener el valor de una cookie
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    }
    
    // Función para establecer una cookie
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = `expires=${date.toUTCString()}`;
        document.cookie = `${name}=${value}; ${expires}; path=/; SameSite=Lax`;
    }
    
    // Aceptar cookies
    function acceptCookies() {
        setCookie(COOKIE_CONSENT, 'true', COOKIE_DURATION);
        hideBanner();
        enableAnalytics();
    }
    
    // Rechazar cookies
    function rejectCookies() {
        setCookie(COOKIE_REJECTED, 'true', COOKIE_DURATION);
        hideBanner();
        disableAnalytics();
    }
    
    // Habilitar analytics
    function enableAnalytics() {
        // Aquí puedes añadir código para habilitar servicios de analytics
        window.analyticsEnabled = true;
        
        // Si existe la función de analytics, registrar evento de aceptación
        if (typeof window.logAnalytics === 'function') {
            window.logAnalytics('cookie_consent_accepted', {
                timestamp: new Date().toISOString()
            });
        } else {
            // Si logAnalytics no está disponible aún, esperar a que se cargue
            window.addEventListener('load', function() {
                if (typeof window.logAnalytics === 'function') {
                    window.logAnalytics('cookie_consent_accepted', {
                        timestamp: new Date().toISOString()
                    });
                }
            });
        }
    }
    
    // Deshabilitar analytics
    function disableAnalytics() {
        // Aquí puedes añadir código para deshabilitar servicios de analytics
        window.analyticsEnabled = false;
    }
    
    // Ocultar el banner
    function hideBanner() {
        cookieBanner.classList.remove('show');
    }
    
    // Mostrar el banner
    function showBanner() {
        cookieBanner.classList.add('show');
    }
    
    // Event listeners
    if (acceptButton) {
        acceptButton.addEventListener('click', acceptCookies);
    }
    
    if (rejectButton) {
        rejectButton.addEventListener('click', rejectCookies);
    }
    
    // Inicialización
    if (!checkCookieConsent()) {
        // Mostrar el banner con un pequeño retraso para que aparezca después de cargar la página
        setTimeout(showBanner, 1000);
    } else if (getCookie(COOKIE_CONSENT) === 'true') {
        // Si el usuario ya ha aceptado las cookies, habilitar analytics
        enableAnalytics();
    }
}); 