function FormContainer() {
    return (
        <>
        <div class="form-container">

        <div class="form-bg">
        
            <p>Para dúvidas ou contato, encaminhe sua mensagem</p>
   
            <form id="contact-form">

                <div class="form-group">

                    <div id="name">

                        <label for="name">Nome</label>

                        <input type="text" name="name" id="name" />

                    </div>
                    <div id="mensagem">

                        <label for="mensagem">Mensagem</label>

                        <input type="text" name="mensagem" id="mensagem" maxlength="300" />

                    </div>

                    <button type="submit" class="button-form">Enviar</button>

                </div>
            </form>
        </div>
    </div>
        </>
    )
}

export default FormContainer