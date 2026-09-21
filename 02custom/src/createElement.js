// createElement.js --> creates an element and returns it

/**
 * 
 * @param {keyof HTMLElementTagNameMap} tagName 
 * @param {Record<any, any>} attrs 
 * @param  {...(Node | string | Node[])} children 
 * @returns {HTMLElement}
 */
const createElement = (tagName, attrs = {}, ...children) => {
    const created = document.createElement(tagName);

    for (const [key, value] of Object.entries(attrs)) {
        created.setAttribute(key, value);
    }

    for (const child of children) {
        if (Array.isArray(child)) {
            created.append(...child);
        } else {
            created.append(child);
        }
    }

    return created;
}

export { createElement };