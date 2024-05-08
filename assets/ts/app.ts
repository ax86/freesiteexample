// Определение интерфейса для управления элементом страницы
interface PageElementUpdater {
    elementSelector: string;
    newText: string;
    attachEventToElement(buttonSelector: string): void;
}

// Класс для управления текстом элемента
class TextChanger implements PageElementUpdater {
    elementSelector: string;
    newText: string;

    constructor(elementSelector: string, newText: string) {
        this.elementSelector = elementSelector;
        this.newText = newText;
    }

    // Метод для добавления слушателя событий на кнопку
    attachEventToElement(buttonSelector: string): void {
        const button = document.querySelector(buttonSelector);
        const targetElement = document.querySelector(this.elementSelector);

        if (button && targetElement) {
            button.addEventListener('click', () => {
                targetElement.textContent = this.newText;
            });
        }
    }
}

// Создание экземпляра класса и использование его для изменения текста
const changer = new TextChanger("#myElement", "Новый текст после нажатия кнопки");
changer.attachEventToElement("#myButton");
