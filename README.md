# Carrinho de Produtos

![Texto Alternativo](/image.png)

Este projeto é um carrinho de produtos simples, desenvolvido com **React** e **TypeScript**, utilizando a **Context API** do React para gerenciamento de estado global.

## Tecnologias Utilizadas

- **React**: Biblioteca para construir interfaces de usuário.
- **Vite**: Ferramenta de construção rápida para desenvolvimento com suporte a hot module replacement.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **json-server**: Ferramenta que permite criar uma API RESTful a partir de um arquivo JSON.
- **axios**: Ferramenta para realizar requisições HTTP.
- **Tailwind CSS**: Biblioteca de estilização.

## Funcionalidades

- Adicionar produtos ao carrinho.
- Remover produtos do carrinho.
- Visualizar o total do carrinho.

## Como Instalar e Rodar o Projeto

Para rodar o projeto localmente, siga os passos abaixo:

### 1. Clonar o Repositório

Primeiro, clone o repositório para sua máquina local:

```bash
git clone https://github.com/Rodrigo1163/carrinho_de_produto.git
```
### 2. Instalação das Dependências
```bash
npm install
```
### 3. Iniciar o Servidor JSON
```bash
json-server --watch db.json
```
### 4. Iniciar o Servidor do React
```bash
npm run dev
```