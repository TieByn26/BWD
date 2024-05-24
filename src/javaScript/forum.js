let forum_content = document.getElementById('forum-container');
window.addEventListener('scroll', ()=>{
    let value = window.scrollY;

    forum_content.style.paddingTop = value * 2.5 + 'px';
});