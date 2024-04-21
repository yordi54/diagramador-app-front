import { initHome } from './js/home.js';
import { initContacto } from './js/contacto.js';
import { initError404 } from './js/error403.js';
import { initLogin } from './js/login.js';
export const router = (path) => {
    const app = document.getElementById('app');
    app.innerHTML = '';
    switch (path) {
        case '/':
            initHome(app);
            break;
        case '/login':
            initLogin(app);
            break;
        case '/contacto':
            initContacto(app);
            break;
        default:
            initError404(app);
            break;
    }
        
}