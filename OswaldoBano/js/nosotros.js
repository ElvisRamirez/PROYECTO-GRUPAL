class NosotrosSection extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const template = document.getElementById('nosotros-template').content.cloneNode(true);
        const imgSrc = this.getAttribute('data-img') || 'img/nosotros.png';
        const specialText = this.getAttribute('data-special-text') || '';
        const normalText = this.getAttribute('data-normal-text') || '';
        
        const numText = this.getAttribute('data-num-text') || '01';
        const experienceText = this.getAttribute('data-experience-text') || '';
        const titleText = this.getAttribute('data-title-text') || 'NOSOTROS';
        const trainDifferentText = this.getAttribute('data-train-different-text') || '';
        const trainFreeText = this.getAttribute('data-train-free-text') || '';

        template.querySelector('img').src = imgSrc;
        template.querySelector('.numero').innerText = numText;
        template.querySelector('.frase').innerText = experienceText;
        template.querySelector('.info h2').innerText = titleText;
        template.querySelector('.p-especial').innerText = specialText;
        template.querySelectorAll('p')[1].innerText = normalText;
        template.querySelector('.col1 .frase').innerHTML = trainDifferentText.split(' ').map((word, index) => index === 1 ? `<span class="txtRojo">${word}</span>` : word).join(' ');
        template.querySelector('.col1 h2').innerHTML = trainFreeText.split(' ').map((word, index) => index === 1 ? `<span class="txtRojo">${word}</span>` : word).join(' ');

        this.shadowDOM.appendChild(template);

        const style = document.createElement('style');
        style.textContent = `
            @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css');
            @import url('estilo.css');
        `;
        this.shadowDOM.appendChild(style);
    }
}



class PaseLibreButton extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const buttonText = this.getAttribute('data-text') || 'PASE LIBRE';
        const button = document.createElement('button');
        button.innerText = buttonText;
        this.shadowDOM.appendChild(button);

        const style = document.createElement('style');
        style.textContent = `
            @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css');
            @import url('estilo.css');
        `;
        this.shadowDOM.appendChild(style);
    }
}

window.customElements.define('pase-libre-button', PaseLibreButton);

window.customElements.define('nosotros-section', NosotrosSection);
