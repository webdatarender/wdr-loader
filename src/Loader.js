'use strict';

function loader(render) {
    document.addEventListener('DOMContentLoaded', () => {
        const data = JSON.parse(document.body.innerText.replace(/<script.*<\/script>/gi, ''));
        document.body.innerText = "";
        document.documentElement.removeAttribute('hidden');
        if (render && typeof render == 'function') {
            render(data);
        }
    });
}

module.exports = loader;