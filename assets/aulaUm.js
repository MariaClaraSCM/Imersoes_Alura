function mudar(){
    
}
document.addEventListener('DOMContentLoaded', function() {
    var mudar = document.getElementById('mudar');

    mudar.addEventListener('click', function() {
        // Adicionar ou remover a classe 'dark-mode' no body
        document.body.classList.toggle('dark-mode');
    });
});