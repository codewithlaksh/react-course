/**
 * @typedef {React.ComponentPropsWithRef<"button"> & {
 * show: boolean
 * }} ButtonProps
 */

/**
 * 
 * @param {ButtonProps} props
 */
function Button({ show = false, children, ...props }) {
    return (
        <>
            {show && <button {...props}>
                {children}
            </button>}
        </>
    )
}

export default Button