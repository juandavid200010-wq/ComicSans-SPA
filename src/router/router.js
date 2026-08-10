import { renderHome } from "../views/home.js";
import { renderAbout } from "../views/about.js";
import { renderChat } from "../views/chat.js";
import { renderNotFound } from "../views/notFound.js";

const routes = {
    '/': renderHome,
    '/index.html': renderHome,
    '/index.html': renderHome,
    '/about': renderAbout,
};

export function router() {
    const path = window.location.pathname;

    // Ruta dinámica: /chat/:character
    if (path.startsWith('/chat/')) {
        const character = path.split('/chat/')[1];
        renderChat(character);
        return;
    }

    const renderView = routes[path];
    if (renderView) {
        renderView();
    } else {
        renderNotFound();
    }
}

export function navigateTo(path) {
  history.pushState({}, '', path);
  router();
}
