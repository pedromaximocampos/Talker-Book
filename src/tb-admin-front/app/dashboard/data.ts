export const mockData = {
    CadastroLivros: {
      labels: ['Sucesso na Validação', 'Tempo Médio de Correção', 'Percentual de Rejeições'],
      datasets: [
        {
          label: 'Cadastro de Livros',
          data: [75, 120, 15], // Dados mock
          backgroundColor: ['#ff6347', '#32cd32', '#ffa500'],
          hoverBackgroundColor: ['#ff4500', '#228b22', '#ff8c00'],
        },
      ],
    },
    DownloadLivros: {
      labels: ['Sucesso na Verificação', 'Tempo Médio de Download', 'Percentual de Falhas'],
      datasets: [
        {
          label: 'Download de Livros',
          data: [85, 95, 10], // Dados mock
          backgroundColor: ['#1e90ff', '#ff1493', '#ffff00'],
          hoverBackgroundColor: ['#1c86ee', '#ff69b4', '#ffff33'],
        },
      ],
    },
    AvaliacaoComentarios: {
      labels: ['Conclusão de Avaliação', 'Tempo de Preenchimento', 'Avaliações Incompletas'],
      datasets: [
        {
          label: 'Avaliação e Comentários',
          data: [90, 80, 5], // Dados mock
          backgroundColor: ['#ff4500', '#20b2aa', '#ffd700'],
          hoverBackgroundColor: ['#ff6347', '#40e0d0', '#ffec8b'],
        },
      ],
    },
    AtualizacaoInformacoes: {
      labels: ['Aprovação de Atualizações', 'Tempo de Atualização', 'Atualizações Rejeitadas'],
      datasets: [
        {
          label: 'Atualização de Informações',
          data: [70, 110, 20], // Dados mock
          backgroundColor: ['#7b68ee', '#ff6347', '#32cd32'],
          hoverBackgroundColor: ['#836fff', '#ff4500', '#228b22'],
        },
      ],
    },
    Denuncia: {
      labels: ['Conclusão de Denúncias', 'Tempo para Resolução', 'Denúncias Validadas'],
      datasets: [
        {
          label: 'Denúncia',
          data: [60, 130, 30], // Dados mock
          backgroundColor: ['#20b2aa', '#ff4500', '#ffd700'],
          hoverBackgroundColor: ['#40e0d0', '#ff6347', '#ffec8b'],
        },
      ],
    },
    Autenticacao: {
      labels: ['Conclusão de Cadastro', 'Tempo de Cadastro', 'Sucesso no Login'],
      datasets: [
        {
          label: 'Autenticação',
          data: [80, 100, 90], // Dados mock
          backgroundColor: ['#1e90ff', '#ff1493', '#ffa500'],
          hoverBackgroundColor: ['#1c86ee', '#ff69b4', '#ff8c00'],
        },
      ],
    },
  };
  