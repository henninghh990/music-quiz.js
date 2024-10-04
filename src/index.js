import React from 'react';
import ReactDOM from 'react-dom/client';
import Quiz from './Quiz';  // Din Quiz-komponent

class MusicQuiz {
    constructor(el, options) {
        // Initialiserer opsjoner og element
        this.el = el;
        this.options = options;
        this.renderQuiz();  // Renderer React-komponenten
    }

    renderQuiz() {
        if (this.el) {
            const root = ReactDOM.createRoot(this.el);
            root.render(<Quiz options={this.options} />);
        } else {
            console.error("Element for rendering the quiz not found.");
        }
    }
}

// Eksporterer MusicQuiz til globalt scope (window)
window.MusicQuiz = MusicQuiz;
