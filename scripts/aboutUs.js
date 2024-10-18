const gallery = document.querySelector('#imgSlider');

let hold = false;
let startX;
let scrollLeft;

gallery.addEventListener('mousedown', (e) =>{
    hold = true;
    startX = e.pageX - gallery.offsetLeft;
    scrollLeft = gallery.scrollLeft;
});

gallery.addEventListener('mouseup', () =>{
    hold = false;
})

gallery.addEventListener('mouseleave', () => {
    hold = false;
})

gallery.addEventListener('mousemove', (e) =>{
    if (!hold)
        return;
    e.preventDefault();
    const x = e.pageX - gallery.offsetLeft;
    const move = (x - startX);
    gallery.scrollLeft = scrollLeft - move;
});