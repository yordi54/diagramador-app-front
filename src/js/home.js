export const initHome =  (app) => {
    const div = document.createElement('div');
    div.innerHTML = '';
    fetch('src/views/home.html')
        .then(response => response.text())
        .then(html => {
            div.innerHTML = html;
            app.appendChild(div);
        })
        .catch(error => {
            console.error('Error loading HTML file:', error);
            app.innerHTML = '<p>Error loading content.</p>';
    });

    
};