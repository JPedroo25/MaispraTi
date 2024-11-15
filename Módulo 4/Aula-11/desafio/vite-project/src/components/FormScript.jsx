function FormScript(){

document.getElementById('contact-form').addEventListener('submit', function (e){
    e.preventDefault();

    const name = document.getElementById('name').querySelector('input').value;

    const mensagem = document.getElementById('mensagem').querySelector('input').value;

    const phoneNumber = '5551992626012';

    const text = `Nome: ${name}%0AMensagem: ${mensagem}`;


    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;


    window.open(whatsappUrl, '_blank');
})}

export default FormScript