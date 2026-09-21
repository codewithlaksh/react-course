// render.js --> render the element in root

/**
 * 
 * @param {HTMLElement} root 
 * @param {HTMLElement} element 
 * @returns {void} // use void instead of never (fixed after video)
 */
const render = (root, element) => {
    root.append(element);
}

export { render };