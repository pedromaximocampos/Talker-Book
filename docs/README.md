# TalkerBook


**Otavio Salomao Ferreira, otavio.ferreira.mds@gmail.com**

**Lara Andrade Carvalho, laraandrade312@gmail.com**

**Pedro Máximo Campos do Carmo, pedromaximocc@gmail.com**

**Arthur Henrique Porto Silva, ahpsilva@sga.pucminas.br**

**Allan Matheus, allanmateusk@gmail.com**

---

Professores:

**Cristiano de Macêdo Neto**

**Danilo Boechat Seufitelli**

---

_Curso de Engenharia de Software

_Instituto de Informática e Ciências Exatas – Pontifícia Universidade Católica de Minas Gerais (PUC MINAS), Belo Horizonte – MG – Brasil_

---

_**Resumo**. O projeto TalkerBook surge como uma solução para a democratização do acesso à literatura. Propomos o desenvolvimento de uma plataforma que permite aos usuários compartilharem avaliações e acessarem livros no formato PDF gratuitamente. O objetivo é automatizar o processo de compartilhamento, proporcionando uma experiência eficiente e inclusiva. A plataforma também visa criar uma comunidade ativa de leitores, fomentando a interação e a troca de conhecimento. Este projeto alinha-se aos avanços tecnológicos e à necessidade crescente de alternativas para a promoção da leitura, contribuindo positivamente para a disseminação cultural.

---


## 1. Introdução

A democratização do acesso à literatura é um desafio contemporâneo exacerbado pelas transformações digitais. Este projeto surge como uma resposta inovadora, propondo o desenvolvimento de uma plataforma que permite aos usuários compartilharem avaliações e acessarem livros no formato PDF de maneira gratuita. A seguir, apresentaremos os elementos essenciais para compreender e desenvolver esse sistema.

# Contextualização

Na era da revolução digital, a disseminação do conhecimento por meios eletrônicos tornou-se fundamental. Este projeto está inserido nesse panorama, buscando uma solução para facilitar o acesso à leitura. Estudos recentes destacam a crescente demanda por plataformas digitais de compartilhamento de livros [Agência Brasil, 2023]. Essa tendência ascendente não apenas reflete a evolução dos hábitos de leitura, mas também revela uma oportunidade significativa para contribuir positivamente nesse cenário em constante transformação.

Ao considerar a relevância desses dados, torna-se evidente que a criação de uma plataforma para compartilhamento de livros em PDF não apenas atende a uma demanda existente, mas também se alinha aos avanços tecnológicos que moldam a maneira como consumimos informação e cultura. Este projeto, portanto, não apenas busca facilitar o acesso à leitura, mas também está sintonizado com a dinâmica contemporânea de compartilhamento de conhecimento.

## Problema

O acesso restrito à literatura é um desafio significativo enfrentado por muitas pessoas, especialmente em regiões com limitado acesso a bibliotecas e livrarias. O cenário é agravado pelo fato alarmante de que, nos últimos cinco anos, o Brasil perdeu quase 800 bibliotecas públicas [G1, 2022]. Esta redução drástica de espaços tradicionais de acesso à literatura intensifica a carência de alternativas eficazes para a promoção da leitura. Estudos também comprovam que o hábito de ler traz benefícios ao cérebro [Ministério da Educação (MEC)]. Diante disso, torna-se evidente que a falta de leitura pode acarretar consequências alarmantes, não apenas pela limitação no acesso à informação e ao conhecimento, mas também pelos impactos negativos na saúde cerebral e cognitiva.

## Objetivo geral

O propósito central deste projeto é criar um sistema que automatize o processo de compartilhamento de livros no formato PDF, visando facilitar o acesso generalizado à leitura e promover a democratização do conhecimento literário.

### Objetivos específicos

- **Upload e Download de Livros:** Desenvolver uma plataforma que permita o fácil compartilhamento e download de livros em PDF.
- **Comunidade Ativa de Leitores:** Fomentar a interação entre os usuários, incentivando avaliações, recomendações e discussões sobre os livros.
- **Diversificação do Conteúdo:** Ampliar a variedade de recursos disponíveis na plataforma, incluindo não apenas livros, mas também artigos científicos.

## Justificativas

A criação dessa plataforma atende a uma demanda crescente por acesso à literatura de maneira inclusiva, promovendo a leitura e a troca de conhecimento. Contribui para a formação de uma comunidade engajada na disseminação cultural.



### 1.4 Justificativas

A criação dessa plataforma atende a uma demanda crescente por acesso à literatura de maneira inclusiva. Além disso, contribui para a promoção da leitura e troca de conhecimento, estimulando a formação de uma comunidade engajada na disseminação cultural.

## 2. Participantes do processo

1. Leitores:
   - Leitores entusiastas com diversas preferências literárias que exploram uma variedade de títulos em PDF.
   
2. Avaliadores Ativos:
   - Membros que baixam livros, avaliam e interagem na comunidade, contribuindo para a qualidade e relevância do conteúdo disponível.
     
3. Contribuidores (Uploaders):
   - Usuários responsáveis por compartilhar livros na plataforma, ampliando a diversidade e acessibilidade do acervo.

## 3. Modelagem do processo de negócio

### **3.1. Análise da situação atual**

No cenário atual, o acesso à literatura digital é frequentemente restrito por diversos obstáculos, como restrições financeiras que representam uma barreira significativa para muitos interessados em adquirir livros. Além disso, a falta de acesso a bibliotecas físicas, devido à localização geográfica ou à redução desses espaços, contribui para a limitação no acesso à leitura. A carência de plataformas eficientes de compartilhamento de livros em PDF também impacta negativamente a disponibilidade desses recursos.

### **3.2. Descrição geral da proposta**

O TalkerBook propõe uma abordagem inovadora ao automatizar o processo de compartilhamento de livros em PDF, com um foco central na facilidade de uso. A plataforma será projetada para permitir que os usuários realizem uploads de livros e realizem downloads de maneira intuitiva. 

Um elemento-chave da proposta é a criação de uma comunidade ativa de leitores. Isso será facilitado pela implementação de recursos que incentivam a interação entre os usuários. Além de simplesmente compartilhar livros, a plataforma busca fomentar a troca de avaliações, recomendações e experiências de leitura. Essa interatividade não apenas enriquece a comunidade, mas também contribui para a qualidade e relevância do conteúdo disponível.

O projeto reconhece a importância da expansão contínua do acervo e da promoção de interações significativas entre os usuários como oportunidades-chave de melhoria. Essas iniciativas visam garantir que o TalkerBook evolua em sintonia com as necessidades dinâmicas dos leitores e continue a ser uma plataforma valiosa para a promoção da leitura e da disseminação cultural. 

### 3.3. Modelagem dos processos

[PROCESSO 1 - Cadastro de livros](processo-1-Cadastro-de-livros.md "Permitir que os contribuidores (uploaders) cadastrem novos livros na plataforma.")

[PROCESSO 2 - Download de livros](processo-2-Download-e-livros.md "Permitir que os leitores baixem livros da plataforma de maneira eficiente.")

[PROCESSO 3 - Avaliação e comentarios](processo-3-Avaliação-e-comentarios.md "Estimular a interação entre os leitores e criar uma comunidade ativa de avaliações.")

[PROCESSO 4 - Atualizaçao de informações](processo-4-Atualizaçao-de-informações.md "Manter o catálogo atualizado com informações precisas e relevantes.")

[PROCESSO 5 - Denuncia](processo-5-Denuncia.md "Oferecer uma opção para denuncia caso o livro seja ofensivo ou nao publico")


[PROCESSO 6 - Autenticação](processo-6-Autenticaçao.md "Autenticar o usuario para acessar todas as funcionalidades da plataforma")

## 4. Projeto da solução

O documento a seguir apresenta o detalhamento do projeto da solução. São apresentadas duas seções que descrevem, respectivamente: modelo relacional e tecnologias.

[Projeto da solução](solution-design.md "Detalhamento do projeto da solução: modelo relacional e tecnologias.")


## 5. Indicadores de desempenho

O documento a seguir apresenta os indicadores de desempenho dos processos.

[Indicadores de desempenho dos processos](performance-indicators.md)


## 6. Interface do sistema

A sessão a seguir apresenta a descrição do produto de software desenvolvido. 

[Documentação da interface do sistema](interface.md)

## 7. Conclusão

O desenvolvimento do projeto com Next.js, React e TypeScript foi uma experiência enriquecedora para o grupo. A aplicação dessas tecnologias resultou em uma plataforma web robusta e eficiente, com melhorias significativas em desempenho e experiência do usuário. A tipagem estática com TypeScript ajudou a prevenir erros e facilitou a manutenção do código.

### Observações do Grupo:
-Aprimoramento Técnico : Aprendemos sobre tipagem estática e os benefícios de SSR e SSG.<br>
-Colaboração Eficaz: As tecnologias facilitaram a comunicação e o desenvolvimento ágil.<br>

### Sugestões Futuras:
-Integração com API GraphQL.<br>
-Otimização de Desempenho Avançada.<br>
-Automatização de Testes com Jest.<br>
-Acessibilidade e SEO Avançados.<br>
-Desenvolvimento Mobile com React Native.<br>

### Considerações Finais:

O projeto atingiu seus objetivos e abriu novas possibilidades de estudo, promovendo um crescimento técnico e colaborativo para todo o grupo.



# Referências

**[1]** - AGÊNCIA BRASIL. Brasil tem 25 milhões de compradores de livros. 2023. Disponível em: <https://agenciabrasil.ebc.com.br/educacao/noticia/2023-12/brasil-tem-25-milhoes-de-compradores-de-livros>. Acesso em: 19 mar. 2024.

**[2]** - G1. Brasil perdeu quase 800 bibliotecas públicas em 5 anos. 2022. Disponível em: <https://g1.globo.com/educacao/noticia/2022/07/16/brasil-perdeu-quase-800-bibliotecas-publicas-em-5-anos.ghtml>. Acesso em: 19 mar. 2024.

**[3]** - MINISTÉRIO DA EDUCAÇÃO (MEC). Estudos comprovam que o hábito de ler traz benefícios ao cérebro. Disponível em: <http://portal.mec.gov.br/ultimas-noticias/211-218175739/40291-estudos-comprovam-que-o-habito-de-ler-traz-beneficios-ao-cerebro>. Acesso em: 19 mar. 2024.




# APÊNDICES


_Atualizar os links e adicionar novos links para que a estrutura do código esteja corretamente documentada._


## Apêndice A - Código fonte

[Código do front-end](../src/front) -- repositório do código do front-end

[Código do back-end](../src/back)  -- repositório do código do back-end


## Apêndice B - Apresentação final


[Slides da apresentação final](presentations/TalkerBookApresentaçãoFinal.pptx)


[Vídeo da apresentação final](video/)






