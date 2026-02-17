# 💱 Currency Converter | Conversor de Moedas

Aplicação web responsiva para conversão de moedas em tempo real utilizando API pública de câmbio.

> Projeto desenvolvido com foco em prática de JavaScript assíncrono, consumo de API e manipulação dinâmica do DOM.

---

## 🚀 Preview do Projeto

Conversão instantânea entre múltiplas moedas com interface simples, intuitiva e adaptável para mobile.

---

## 🧠 Sobre o Projeto

Este projeto foi desenvolvido para praticar:

* Consumo de API com `fetch`
* Manipulação do DOM
* Programação assíncrona (`async/await`)
* Formatação internacional de moedas (`Intl.NumberFormat`)
* Responsividade com CSS
* Atualização dinâmica de elementos visuais

A aplicação realiza requisições em tempo real para obter a taxa de câmbio atual e calcula automaticamente o valor convertido.

---

## 🛠️ Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript (ES6+)
* Fetch API
* Intl.NumberFormat
* API pública de câmbio:

```
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/
```

---

## 🌍 Moedas Disponíveis

* BRL — Real Brasileiro
* USD — Dólar Americano
* EUR — Euro
* GBP — Libra Esterlina
* CHF — Franco Suíço
* JPY — Iene Japonês
* CNY — Yuan Chinês
* CAD — Dólar Canadense
* AUD — Dólar Australiano

---

## 📂 Estrutura do Projeto

```
📁 img/
 ├── brl.jpg
 ├── usd.jpg
 ├── eur.jpg
 └── ...

📄 index.html
📄 style.css
📄 script.js
📄 README.md
```

---

## ⚙️ Como Funciona

1. O usuário seleciona a moeda de origem.
2. Seleciona a moeda de destino.
3. Insere o valor.
4. Ao clicar em **Converter**:

   * É feita uma requisição para a API.
   * A taxa de conversão é obtida.
   * O valor convertido é calculado.
   * Os resultados são formatados corretamente e exibidos na tela.

---

## 📱 Responsividade

O layout é totalmente adaptado para dispositivos móveis, incluindo:

* Ajuste automático de largura
* Remoção de elementos visuais secundários
* Centralização vertical do conteúdo

---

## 💡 Aprendizados Técnicos

✔ Uso de `async/await`
✔ Manipulação dinâmica de imagens
✔ Atualização de interface baseada em estado
✔ Tratamento de valores numéricos
✔ Uso de APIs públicas

---

## ▶️ Como Executar

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

Abra o arquivo:

```
index.html
```

Nenhuma instalação adicional é necessária.
