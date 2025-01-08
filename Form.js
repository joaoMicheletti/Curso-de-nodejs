function Register(event) {
    // Previne o envio padrão do formulário
    event.preventDefault();

    // Seleciona o formulário e os campos
    const form = document.getElementById('Form');
    const fields = {
        nome: form.nome.value.trim(),
        email: form.email.value.trim(),
        celular: form.celular.value.trim(),
        regiao: form.regiao.value.trim(),
        mensagem: form.mensaguem.value.trim()
    };

    // Verifica se algum campo está vazio
    for (const [field, value] of Object.entries(fields)) {
        if (value === '') {
            alert('Por favor, preencha todos os campos!');
            return; // Interrompe a execução caso encontre um campo vazio
        }
    }

    // Validação do celular com DDD
    const celularRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
    if (!celularRegex.test(fields.celular)) {
        alert('Por favor, insira um número de celular válido com DDD (ex: (11) 91234-5678).');
        return;
    }

    // Se todos os campos forem válidos, redireciona
    window.location.href = "https://metodologiamentecampea.com.br/tkupage.html";
}
