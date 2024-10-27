import "../app.css"


export function Messages({ msg }) {
    const arrayMessages = [
        "A vida trará coisas boas se tiver paciência.",
        "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de você.",
        "Não compense na ira o que lhe falta na razão.",
        "Defeitos e virtudes são apenas dois lados da mesma moeda.",
        "A maior de todas as torres começa no solo.",
        "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
        "O amor está mais próximo do que você imagina.",
        "A vontade das pessoas é a melhor das leis.",
        "Espere pelo mais sábio dos conselhos: o tempo.",
        "Todas as coisas são difíceis antes de se tornarem fáceis.",
        "Acredite em milagres, mas não dependa deles.",
        "A juventude não é uma época da vida, é um estado de espírito.",
        "Palavras são apenas bolhas vazias se não forem acompanhadas de ações.",
        "Não há que ser forte. Há que ser flexível.",
        "Siga os bons e aprenda com eles.",
        "A sorte favorece a mente bem preparada.",
        "O bom-senso vai mais longe que muito conhecimento.",
        "Quem quer colher rosas deve suportar os espinhos.",
        "É mais fácil conseguir o perdão do que a permissão.",
        "A maior barreira para o sucesso é o medo do fracasso."
    ]
    let index = Math.floor(Math.random() * arrayMessages.length) // Gerar um index aleatorio

    if (!msg) return // Condição para parar o codigo e não mostrar a mensagem

    return (
        <div id="messageContainer">
            <p id='msgText'>
                {`" ${arrayMessages[index]} "`}
            </p>
        </div>
    )
}