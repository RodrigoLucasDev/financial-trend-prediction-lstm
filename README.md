# Financial Trend Prediction with LSTM

Projeto desenvolvido como Trabalho de Conclusão de Curso (TCC) do curso de Sistemas de Informação da Pontifícia Universidade Católica de Minas Gerais (PUC Minas).

## Descrição

Este projeto tem como objetivo realizar a previsão de tendências no mercado financeiro utilizando Redes Neurais Recorrentes do tipo Long Short-Term Memory (LSTM) aplicadas a séries temporais.

A solução utiliza dados históricos do mercado financeiro para treinar um modelo preditivo capaz de identificar tendências de alta, baixa ou continuidade, além de disponibilizar uma interface para visualização dos resultados gerados.

## Objetivos

- Coletar dados históricos do mercado financeiro.
- Realizar o pré-processamento das séries temporais.
- Treinar uma Rede Neural LSTM para previsão de tendências.
- Avaliar o desempenho do modelo utilizando métricas estatísticas.
- Disponibilizar uma interface para visualização das previsões.

## Tecnologias Utilizadas

### Inteligência Artificial
- Python
- TensorFlow
- Keras
- NumPy
- Pandas

### Backend
- Node.js
- Express

### Frontend
- React
- JavaScript
- HTML
- CSS

> As tecnologias poderão ser ajustadas durante o desenvolvimento do projeto.

## Estrutura do Projeto

```text
financial-trend-prediction-lstm/
│
├── ai/
│   ├── train_model.py
│   ├── lstm_api.py
│   └── models/
│
├── backend/
│   ├── src/
│   ├── routes/
│   ├── controllers/
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
```

## Metodologia

O projeto utiliza uma abordagem baseada em séries temporais financeiras obtidas por meio da plataforma Yahoo Finance.

O fluxo de processamento é composto pelas seguintes etapas:

1. Coleta dos dados históricos.
2. Pré-processamento dos dados.
3. Treinamento da rede neural LSTM.
4. Geração das previsões.
5. Exibição dos resultados na interface.
6. Avaliação do desempenho do modelo.

## Resultados Esperados

Espera-se que o modelo seja capaz de identificar padrões temporais presentes nos dados históricos e fornecer previsões que auxiliem na análise de tendências do mercado financeiro.

## Referências

- HOCHREITER, S.; SCHMIDHUBER, J. Long Short-Term Memory. Neural Computation, 1997.
- GOODFELLOW, I.; BENGIO, Y.; COURVILLE, A. Deep Learning. MIT Press, 2016.
- Artigos científicos utilizados na fundamentação teórica e trabalhos relacionados do TCC.

## Autores

- Rodrigo Teixeira Lucas
- Ygor Meirelles Marques Barbosa

## Orientadora

- Profa. Cleia Marcia Gomes Amaral

## Instituição

Pontifícia Universidade Católica de Minas Gerais (PUC Minas)  
Instituto de Ciências Exatas e Informática (ICEI)

---

Projeto desenvolvido para fins acadêmicos como Trabalho de Conclusão de Curso (TCC).
