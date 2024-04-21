export const initContacto = async  (app) => {
    try{
        const response = await fetch('src/views/contacto.html');
        const html = await response.text();
        app.innerHTML = html;
    }catch(error){
        console.error('Error loading HTML file:', error);
        app.innerHTML = '<p>Error loading content.</p>';
    }
    //LOGICA DE LA VISTA
    const backBtn = document.getElementById('backBtn');
    console.log(backBtn);
    if (backBtn) {
        backBtn.addEventListener('click', () => {
        event.preventDefault();
        window.location.hash = '#/';
        });
    } else {
        app.innerHTML = '<p>Error loading content.</p>';
        console.error('Element with ID "backBtn" not found.');
    }
};


