const storyParagraph = document.getElementById('paragraph');
const nextButton = document.getElementById('nextButton');

// Array de parágrafos do romance
const paragraphs = [
    "Era uma vez, em uma terra distante, um amor impossível entre um príncipe e uma camponesa...",
    "O príncipe, destinado a se casar com uma princesa de outro reino por razões políticas, se viu apaixonado pela camponesa desde o primeiro momento em que a viu.",
    "A camponesa, por sua vez, estava ciente das barreiras sociais que os separavam, mas seu coração não podia ignorar o amor que sentia pelo príncipe.",
    "Juntos, enfrentaram desafios, superaram obstáculos e provaram que o amor verdadeiro é capaz de vencer qualquer adversidade.",
    "E assim, contra todas as probabilidades, o príncipe e a camponesa viveram felizes para sempre."
];

let currentParagraphIndex = 0;

// Função para exibir o próximo parágrafo
function nextParagraph() {
    if (currentParagraphIndex < paragraphs.length - 1) {
        currentParagraphIndex++;
        storyParagraph.textContent = paragraphs[currentParagraphIndex];
    } else {
        alert("Fim da história.");
    }
}

// Adiciona um listener para o botão de próximo parágrafo
nextButton.addEventListener('click', nextParagraph);