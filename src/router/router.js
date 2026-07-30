import { renderHome } from "../views/home.js";
import { renderAbout } from "../views/about.js";
import { renderChat } from "../views/chat.js";
import { renderNotFound } from "../views/notFound.js";

const routes = {
    '/': renderHome,
    '/index.html': renderHome,
    '/about': renderAbout,
    '/chat': renderChat,
};

export function router() {
    const path = window.location.pathname;
    const renderView = routes[path];
    if (renderView) {
    renderView();
    } else {
    renderNotFound();
}
}

   //* Refactoring
  // const renderView = routes[path] || renderNotFound;
  // renderView();

export function navigateTo(path) {
  history.pushState({}, '', path);
  router(); 
}