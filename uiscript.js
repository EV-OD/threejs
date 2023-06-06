
function handleMenuClicked(elt, name) {
    let targetElt = document.querySelector(`#${name}`)
    if (targetElt) {
        targetElt.scrollIntoView({
            behavior: "smooth"
        })
    }
}
window.onscroll = (e) => {
    const t = document.body.getBoundingClientRect().top;

}