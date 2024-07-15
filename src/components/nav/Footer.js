import style from './Footer.module.css'
import {FaFacebook,FaInstagram, FaLinkedin} from 'react-icons/fa'

function Footer() {
    const pipe = 
        {
            "data": {
                "cards": {
                    "totalCount": 90,
                    "edges": [
                        {
                            "cursor": "WyIyMDIzLTA4LTE3IDE0OjMwOjUwLjg2NzAwNTAwMCBVVEMiLCI1LjAiLDc3NzIzNDY4Ml0",
                            "node": {
                                "id": "777234682",
                                "title": "Bad Goods",
                                "assignees": [
                                    {
                                        "id": "302603060"
                                    }
                                ],
                                "comments": [],
                                "comments_count": 0,
                                "current_phase": {
                                    "name": "05. Desenvolvimento de Business Case"
                                },
                                "done": false,
                                "due_date": null,
                                "fields": [
                                    {
                                        "name": "Nome do Desafio",
                                        "value": "Bad Goods"
                                    },
                                    {
                                        "name": "Email do Solicitante",
                                        "value": "giovana.cassini@br.nestle.com"
                                    },
                                    {
                                        "name": "Descreva o Desafio",
                                        "value": "Projeto de redução de bad goods (produtos vencidos) por meio da melhora na prevenção, controle e visibilidade do processo de demanda e supply"
                                    },
                                    {
                                        "name": "Área Requisitante",
                                        "value": "Supply Chain"
                                    },
                                    {
                                        "name": "Qual o valor anual previsto desta eficiência?",
                                        "value": "12.000,00"
                                    },
                                    {
                                        "name": "Qual área sponsor designada para desenvolver a solução?",
                                        "value": "Datalab"
                                    },
                                    {
                                        "name": "Qual tipo de Solicitação",
                                        "value": "Novo Business Case"
                                    },
                                    {
                                        "name": "Dono do negócio",
                                        "value": "Luiz Oliveira"
                                    },
                                    {
                                        "name": "Email",
                                        "value": "luiz.oliveira@br.nestle.com"
                                    },
                                    {
                                        "name": "Email do ponto focal do Negócio",
                                        "value": "Luiz.oliveira@br.nestle.com"
                                    },
                                    {
                                        "name": "Subárea",
                                        "value": "DSP"
                                    }
                                ],
                                "labels": [
                                    {
                                        "name": "TI"
                                    }
                                ],
                                "phases_history": [
                                    {
                                        "phase": {
                                            "name": "Start form"
                                        },
                                        "firstTimeIn": "2023-08-17T14:30:50+00:00",
                                        "lastTimeOut": "2023-08-17T14:30:51+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "01. Backlog"
                                        },
                                        "firstTimeIn": "2023-08-17T14:30:51+00:00",
                                        "lastTimeOut": "2023-08-17T14:32:10+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "02. Discovery"
                                        },
                                        "firstTimeIn": "2023-09-12T14:52:49+00:00",
                                        "lastTimeOut": "2023-10-23T18:49:42+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "03. Proposta de Solução e Experimentação"
                                        },
                                        "firstTimeIn": "2023-08-23T17:35:30+00:00",
                                        "lastTimeOut": "2023-08-23T17:35:43+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "04. Implementação"
                                        },
                                        "firstTimeIn": "2024-01-04T18:15:16+00:00",
                                        "lastTimeOut": "2024-01-04T18:38:21+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "05. Desenvolvimento de Business Case"
                                        },
                                        "firstTimeIn": "2023-08-23T17:35:49+00:00",
                                        "lastTimeOut": null
                                    },
                                    {
                                        "phase": {
                                            "name": "06. Incorporado"
                                        },
                                        "firstTimeIn": "2024-01-04T18:10:51+00:00",
                                        "lastTimeOut": "2024-01-04T18:15:16+00:00"
                                    }
                                ],
                                "url": "http://app.pipefy.com/pipes/303523960#cards/777234682"
                            }
                        },
                        {
                            "cursor": "WyIyMDIzLTA4LTE4IDE4OjEzOjMyLjc2NjY3NTAwMCBVVEMiLCIzLjAiLDc3Nzk2Mjk5MV0",
                            "node": {
                                "id": "777962991",
                                "title": "Conversational Commerce - Chat Bot de Vendas NP",
                                "assignees": [
                                    {
                                        "id": "302603063"
                                    }
                                ],
                                "comments": [],
                                "comments_count": 0,
                                "current_phase": {
                                    "name": "03. Proposta de Solução e Experimentação"
                                },
                                "done": false,
                                "due_date": null,
                                "fields": [
                                    {
                                        "name": "Email do Solicitante",
                                        "value": "natalia.alves@br.nestle.com"
                                    },
                                    {
                                        "name": "Responsável",
                                        "value": "[\"Carolina Leite de Moraes\"]"
                                    },
                                    {
                                        "name": "Quem será o responsável em desenvolver a proposta de solução?",
                                        "value": "[\"Carolina Leite de Moraes\"]"
                                    },
                                    {
                                        "name": "Data esperada para implementação da solução",
                                        "value": "01/12/2023"
                                    },
                                    {
                                        "name": "Requisitos de Negócio",
                                        "value": "No arquivo em Anexo"
                                    },
                                    {
                                        "name": "Proposta de Solução Aprovada?",
                                        "value": "Sim"
                                    },
                                    {
                                        "name": "Precisa de Business Case para Escalabilidade? (ver critérios para BC)",
                                        "value": "Sim"
                                    },
                                    {
                                        "name": "Subárea",
                                        "value": "E-Business"
                                    },
                                    {
                                        "name": "Descreva o Desafio",
                                        "value": "Desafio de engajamento mais rápido com clientes de Nestle Professional"
                                    },
                                    {
                                        "name": "Nome do Desafio",
                                        "value": "Conversational Commerce - Chat Bot de Vendas NP"
                                    },
                                    {
                                        "name": "Email do ponto focal do Negócio",
                                        "value": "Juliana.Marchi@br.nestle.com"
                                    },
                                    {
                                        "name": "Área Requisitante",
                                        "value": "Nestlé Professional"
                                    },
                                    {
                                        "name": "Qual a solução ou hipótese de solução proposta?",
                                        "value": "Canal de vendas de Whats App, conectado diretamente aos clientes\nO Canal poderá conter diversas ramificações - vendas, atendimento técnico e prospecção de leads"
                                    }
                                ],
                                "labels": [
                                    {
                                        "name": "Ecossistemas Digitais"
                                    }
                                ],
                                "phases_history": [
                                    {
                                        "phase": {
                                            "name": "Start form"
                                        },
                                        "firstTimeIn": "2023-08-18T18:13:32+00:00",
                                        "lastTimeOut": "2023-08-18T18:13:33+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "01. Backlog"
                                        },
                                        "firstTimeIn": "2023-08-18T18:13:33+00:00",
                                        "lastTimeOut": "2023-08-23T14:51:45+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "02. Discovery"
                                        },
                                        "firstTimeIn": "2023-08-29T21:21:00+00:00",
                                        "lastTimeOut": "2023-10-30T20:53:04+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "03. Proposta de Solução e Experimentação"
                                        },
                                        "firstTimeIn": "2023-10-27T21:59:18+00:00",
                                        "lastTimeOut": null
                                    },
                                    {
                                        "phase": {
                                            "name": "04. Implementação"
                                        },
                                        "firstTimeIn": "2023-11-07T19:30:28+00:00",
                                        "lastTimeOut": "2023-11-07T19:30:49+00:00"
                                    }
                                ],
                                "url": "http://app.pipefy.com/pipes/303523960#cards/777962991"
                            }
                        },
                        {
                            "cursor": "WyIyMDIzLTA4LTE4IDE4OjEzOjMzLjU1MTU3MzAwMCBVVEMiLCI1LjAiLDc3Nzk2MzAwN10",
                            "node": {
                                "id": "777963007",
                                "title": "Cadeia Cafés",
                                "assignees": [],
                                "comments": [],
                                "comments_count": 0,
                                "current_phase": {
                                    "name": "05. Desenvolvimento de Business Case"
                                },
                                "done": false,
                                "due_date": null,
                                "fields": [
                                    {
                                        "name": "Nome do Desafio",
                                        "value": "Cadeia Cafés"
                                    },
                                    {
                                        "name": "Descreva o Desafio",
                                        "value": "tdb"
                                    },
                                    {
                                        "name": "Subárea",
                                        "value": "Compras"
                                    },
                                    {
                                        "name": "Área Requisitante",
                                        "value": "Supply Chain"
                                    },
                                    {
                                        "name": "Qual área sponsor designada para desenvolver a solução?",
                                        "value": "Datalab"
                                    },
                                    {
                                        "name": "Email do Solicitante",
                                        "value": "janaina.melo@br.nestle.com"
                                    }
                                ],
                                "labels": [
                                    {
                                        "name": "Datalab"
                                    }
                                ],
                                "phases_history": [
                                    {
                                        "phase": {
                                            "name": "Start form"
                                        },
                                        "firstTimeIn": "2023-08-18T18:13:33+00:00",
                                        "lastTimeOut": "2023-08-18T18:13:33+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "01. Backlog"
                                        },
                                        "firstTimeIn": "2023-08-18T18:13:33+00:00",
                                        "lastTimeOut": "2023-08-23T14:53:11+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "02. Discovery"
                                        },
                                        "firstTimeIn": "2023-08-29T21:21:01+00:00",
                                        "lastTimeOut": "2023-10-23T18:52:39+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "05. Desenvolvimento de Business Case"
                                        },
                                        "firstTimeIn": "2023-09-18T13:23:55+00:00",
                                        "lastTimeOut": null
                                    }
                                ],
                                "url": "http://app.pipefy.com/pipes/303523960#cards/777963007"
                            }
                        },
                        {
                            "cursor": "WyIyMDIzLTA4LTE4IDE4OjEzOjM0LjA5MTk3MjAwMCBVVEMiLCI1Ljc1Iiw3Nzc5NjMwMTNd",
                            "node": {
                                "id": "777963013",
                                "title": "Market Share (CMI)",
                                "assignees": [],
                                "comments": [],
                                "comments_count": 0,
                                "current_phase": {
                                    "name": "06. Incorporado"
                                },
                                "done": false,
                                "due_date": null,
                                "fields": [
                                    {
                                        "name": "Nome do Desafio",
                                        "value": "Market Share"
                                    },
                                    {
                                        "name": "Email do Solicitante",
                                        "value": "natalia.alves@br.nestle.com"
                                    },
                                    {
                                        "name": "Descreva o Desafio",
                                        "value": "tdb"
                                    },
                                    {
                                        "name": "Subárea",
                                        "value": "Marketing "
                                    },
                                    {
                                        "name": "Área Requisitante",
                                        "value": "Marketing e Comunicação"
                                    },
                                    {
                                        "name": "Mapeamento do Processo ou jornada atual dos usuários a qual este desafio ou problema ataca",
                                        "value": ""
                                    },
                                    {
                                        "name": "Detalhe quem está sendo impactado pelo desafio",
                                        "value": ""
                                    }
                                ],
                                "labels": [
                                    {
                                        "name": "Datalab"
                                    }
                                ],
                                "phases_history": [
                                    {
                                        "phase": {
                                            "name": "Start form"
                                        },
                                        "firstTimeIn": "2023-08-18T18:13:34+00:00",
                                        "lastTimeOut": "2023-08-18T18:13:34+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "01. Backlog"
                                        },
                                        "firstTimeIn": "2023-08-18T18:13:34+00:00",
                                        "lastTimeOut": "2023-08-23T14:54:22+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "02. Discovery"
                                        },
                                        "firstTimeIn": "2023-08-29T21:21:03+00:00",
                                        "lastTimeOut": "2024-01-09T20:11:08+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "06. Incorporado"
                                        },
                                        "firstTimeIn": "2024-01-09T20:11:08+00:00",
                                        "lastTimeOut": null
                                    }
                                ],
                                "url": "http://app.pipefy.com/pipes/303523960#cards/777963013"
                            }
                        },
                        {
                            "cursor": "WyIyMDIzLTA4LTE4IDE4OjEzOjM2LjQyNzQzMDAwMCBVVEMiLCI1Ljc1Iiw3Nzc5NjMwNjld",
                            "node": {
                                "id": "777963069",
                                "title": "Deep Blue",
                                "assignees": [],
                                "comments": [],
                                "comments_count": 0,
                                "current_phase": {
                                    "name": "06. Incorporado"
                                },
                                "done": false,
                                "due_date": null,
                                "fields": [
                                    {
                                        "name": "Nome do Desafio",
                                        "value": "Deep Blue"
                                    },
                                    {
                                        "name": "Email do Solicitante",
                                        "value": "natalia.alves@br.nestle.com"
                                    },
                                    {
                                        "name": "Descreva o Desafio",
                                        "value": "tdb"
                                    },
                                    {
                                        "name": "Subárea",
                                        "value": "Produção"
                                    },
                                    {
                                        "name": "Área Requisitante",
                                        "value": "Técnica e Produção"
                                    }
                                ],
                                "labels": [
                                    {
                                        "name": "Datalab"
                                    }
                                ],
                                "phases_history": [
                                    {
                                        "phase": {
                                            "name": "Start form"
                                        },
                                        "firstTimeIn": "2023-08-18T18:13:36+00:00",
                                        "lastTimeOut": "2023-08-18T18:13:36+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "01. Backlog"
                                        },
                                        "firstTimeIn": "2023-08-18T18:13:36+00:00",
                                        "lastTimeOut": "2023-08-23T15:14:48+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "03. Proposta de Solução e Experimentação"
                                        },
                                        "firstTimeIn": "2023-08-23T15:16:03+00:00",
                                        "lastTimeOut": "2024-01-09T20:14:41+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "06. Incorporado"
                                        },
                                        "firstTimeIn": "2024-01-09T20:14:41+00:00",
                                        "lastTimeOut": null
                                    }
                                ],
                                "url": "http://app.pipefy.com/pipes/303523960#cards/777963069"
                            }
                        },
                        {
                            "cursor": "WyIyMDIzLTA4LTE4IDE4OjEzOjM2LjgwMDgxMjAwMCBVVEMiLCI1LjAiLDc3Nzk2MzA3M10",
                            "node": {
                                "id": "777963073",
                                "title": "Conecta NP",
                                "assignees": [
                                    {
                                        "id": "303200249"
                                    }
                                ],
                                "comments": [],
                                "comments_count": 0,
                                "current_phase": {
                                    "name": "05. Desenvolvimento de Business Case"
                                },
                                "done": false,
                                "due_date": null,
                                "fields": [
                                    {
                                        "name": "Email do Solicitante",
                                        "value": "diego.borburema@br.nestle.com"
                                    },
                                    {
                                        "name": "Nome do Desafio",
                                        "value": "Conecta NP"
                                    },
                                    {
                                        "name": "Subárea",
                                        "value": "Nestlé Professional"
                                    },
                                    {
                                        "name": "Área Requisitante",
                                        "value": "Nestlé Professional"
                                    },
                                    {
                                        "name": "Qual área sponsor designada para desenvolver a solução?",
                                        "value": "Datalab"
                                    },
                                    {
                                        "name": "Email do ponto focal do Negócio",
                                        "value": "adriano.rodrigues1@br.nestle.com"
                                    },
                                    {
                                        "name": "Descreva o Desafio",
                                        "value": "O time de Nestlé Professional precisa se atualizar com ferramentas mais recentes. Enquanto que o time de Origines auxiliou o desenvolvimento de F&B, essa unidade de negócios não conseguiu beber desses desenvolvimentos e continua com práticas dependentes de arquivos manuais e com pouca visibilidade real das operações."
                                    },
                                    {
                                        "name": "Como este desafio está afetando a companhia?",
                                        "value": "A falta de visibilidade dos parâmetros do negócio fazem com que decisões imprecisas sejam tomadas e diversos benefícios de vendas e operação não sejam capturados. As ações poderiam ser mais rápidas e mais efetivas com o uso de tecnologias que não são tão complexas."
                                    },
                                    {
                                        "name": "Qual o principal benefício que uma possível solução a este desafio pode trazer?",
                                        "value": "[\"Compliance/Legal/SHE\", \"Eficiência\", \"Reputação/IQEM\", \"Uplift\"]"
                                    },
                                    {
                                        "name": "Qual o valor anual previsto desta eficiência?",
                                        "value": "5.000.000,00"
                                    },
                                    {
                                        "name": "Qual a receita anual prevista deste incremento?",
                                        "value": "50.000.000,00"
                                    },
                                    {
                                        "name": "Qual o valor anual previsto de risco dessa reputação?",
                                        "value": "10.000.000,00"
                                    },
                                    {
                                        "name": "Como se chegou a este benefício (R$)?",
                                        "value": "Diversas alavancas de atuação foram consideradas:\n- Melhoria das estimativas de produção gerando menores rupturas e salvage\n- Estimativa de demanda no ponto de venda levando a recomendações de pedido aos vendedores evitando ruptura, algoritmo associativo aumentando venda\n- Repriorização dos roteiros de visita dos vendedores trazendo maior eficiência e conversão, gerando maior venda\n- Utilização de processos automatizados reduzindo o tempo levado para realização das mesmas atividades pelos técnicos e vendedores, gerando eficiência operacional\n- Tratamento, Visualização e Utilização correta dos números de telemetria garantindo execuções mais precisas de ações comerciais e técnicas\n- Automatização de processos manuais, garantindo eficiências operacionais\n- Criação de aplicativos para forças de vendas, técnicas e de prospecção para uniformização dos trabalhos, reduzindo a incidência de problemas como churn "
                                    },
                                    {
                                        "name": "Quais objetivos a área pretende alcançar ao resolver o desafio?",
                                        "value": "Não cabem todas as alavancas de KPIs nesse espaço. Permitir escrita livre como na pergunta anterior. Estão presentes no BC"
                                    },
                                    {
                                        "name": "Qual público mais impactado atualmente por este desafio?.",
                                        "value": "[\"Clientes Externos (Ex.: Varejistas)\", \"Áreas Internas\"]"
                                    },
                                    {
                                        "name": "Quantas áreas estão sendo impactadas por este desafio?",
                                        "value": "5 ou mais"
                                    },
                                    {
                                        "name": "Já existe uma solução mapeada? Qual?",
                                        "value": "Diversas alavancas de atuação foram consideradas:\n\nMelhoria das estimativas de produção gerando menores rupturas e salvage\nEstimativa de demanda no ponto de venda levando a recomendações de pedido aos vendedores evitando ruptura, algoritmo associativo aumentando venda\nRepriorização dos roteiros de visita dos vendedores trazendo maior eficiência e conversão, gerando maior venda\nUtilização de processos automatizados reduzindo o tempo levado para realização das mesmas atividades pelos técnicos e vendedores, gerando eficiência operacional\nTratamento, Visualização e Utilização correta dos números de telemetria garantindo execuções mais precisas de ações comerciais e técnicas\nAutomatização de processos manuais, garantindo eficiências operacionais\nCriação de aplicativos para forças de vendas, técnicas e de prospecção para uniformização dos trabalhos, reduzindo a incidência de problemas como churn"
                                    },
                                    {
                                        "name": "Inclua arquivos ou materiais de apoio sobre o de desafio, ou até tentativas de resoluções e projetos passados que tratem do mesmo tema",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/a843750b-328c-47c5-8aff-466a886bd667/ConectaNP-OnePagerVFinal1outof2.pdf?expires_on=1718110439&signature=MrLs1Eza4W2WGaGrLhtOdp8ZA85iMkmzfh7CMOdtQZU%3D\", \"https://app.pipefy.com/storage/v1/signed/uploads/0b8a87b5-839c-4e82-9db2-078d280efeaa/ConectaNP-Presentation-Full.pptx?expires_on=1718110439&signature=Bd91aHhpUpJ%2BOI%2BshAUm%2BzS7cZoVkMZEkdwb%2F162CBo%3D\"]"
                                    },
                                    {
                                        "name": "A quais Objetivos Estratégicos de BT este desafio atende?",
                                        "value": "[\"Construção de Capacidades\", \"Crescimento\", \"Eficiência\"]"
                                    },
                                    {
                                        "name": "Outra área será envolvida no desenvolvimento da solução?",
                                        "value": "SIm"
                                    },
                                    {
                                        "name": "Qual (ais)?",
                                        "value": "[\"IT\"]"
                                    },
                                    {
                                        "name": "Responsável",
                                        "value": "[\"Diego Movio Borburema\"]"
                                    },
                                    {
                                        "name": "Projeto Priorizado?",
                                        "value": "Sim"
                                    },
                                    {
                                        "name": "definição de PM e squad pra discovery",
                                        "value": "Squad 01 PM: João Montanheiro\nSquad 02 PM: Diego Borburema\nSquad 03 PM: Diego Borburema\nUX Discovery: Bruna Alves\nDS Discovery: Renato Gonçalves\nENG Discovery: Gabriel Sakai e Luis Dielle\nNegócio Discovery: Catiane Sampaio\n"
                                    },
                                    {
                                        "name": "Como você descobriu a oportunidade de criar este projeto?",
                                        "value": "Hackaton 2022"
                                    },
                                    {
                                        "name": "Quais os principais indicadores avaliados hoje? Qual meta para atingimento com o projeto?",
                                        "value": ""
                                    },
                                    {
                                        "name": "O que você considera sucesso dentro do seu projeto?",
                                        "value": "atingir o business case desenhado"
                                    },
                                    {
                                        "name": "Quem serão as pessoas facilitadoras do processo?",
                                        "value": "Ponto Focal Geral: Luan Doria\nPonto Focal Workflow: Silvana Souza\nPonto Focal Produtos Digitais: Luan Doria\nPonto Focal Int Comercial: Catiane Sampaio"
                                    },
                                    {
                                        "name": "Quem precisa ser informado?",
                                        "value": "BEO Professional: Rodrigo Maingué"
                                    },
                                    {
                                        "name": "Quais pessoas precisam estar envolvidas?",
                                        "value": "BO Geral projeto: Adriano Rodrigues\nBO Workflow: Daniel Gomes\nBO Inteligência Comercial: Otacílio Henrique\n\nOutros nomes: Carlos Soveral (Comercial)"
                                    },
                                    {
                                        "name": "Detalhe quem está sendo impactado pelo desafio",
                                        "value": "- Clientes que possuem máquinas instaladas de Nescafé;\n- Time de Trade Marketing tomando decisões com base em dados;\n- Time de backoffice com visibilidade da eficiência dos times e maiores ofensores;\n- Time de vendas, técnicos e prospectores com novas rotinas de trabalho e processos governados por automatizações e novos aplicativos"
                                    },
                                    {
                                        "name": "Mapeamento do Processo ou jornada atual dos usuários a qual este desafio ou problema ataca",
                                        "value": ""
                                    },
                                    {
                                        "name": "Quem será o responsável em desenvolver a proposta de solução?",
                                        "value": "[\"Carolina Leite de Moraes\", \"Diego Movio Borburema\"]"
                                    },
                                    {
                                        "name": "Qual time irá desenvolver a experimentação?",
                                        "value": "[\"Diego Movio Borburema\", \"Laila Ellen Francisco Drumond\", \"Gabriel Matsuo Molinari Sakai\", \"Luis Felipe Tominaga Dielle\", \"Renato Masago Goncalves\", \"Bruna Rienzo Alves\"]"
                                    },
                                    {
                                        "name": "Precisa de Business Case para Escalabilidade? (ver critérios para BC)",
                                        "value": "Sim"
                                    },
                                    {
                                        "name": "Proposta de Solução Aprovada?",
                                        "value": "Sim"
                                    },
                                    {
                                        "name": "Qual a solução ou hipótese de solução proposta?",
                                        "value": "Já respondido na etapa anterior"
                                    },
                                    {
                                        "name": "Indicadores de Performance",
                                        "value": "Já respondido na etapa anterior"
                                    },
                                    {
                                        "name": "Dono do negócio",
                                        "value": "Adriano Rodrigues"
                                    },
                                    {
                                        "name": "Qual tipo de Solicitação",
                                        "value": "Novo Business Case"
                                    },
                                    {
                                        "name": "Email",
                                        "value": "adriano.rodrigues1@br.nestle.com"
                                    },
                                    {
                                        "name": "Quem irá implementar a Solução?",
                                        "value": "[\"Fornecedor Parceiro\", \"Time Interno\"]"
                                    },
                                    {
                                        "name": "Nome do Fornecedor",
                                        "value": "CI&T ; Artefact"
                                    },
                                    {
                                        "name": "Time Interno",
                                        "value": "[\"Diego Movio Borburema\", \"Luis Felipe Tominaga Dielle\", \"Alyne Cristina Jorge e Silva\", \"Gustavo Lopes\", \"Renato Masago Goncalves\", \"Catia Larissa Santos Ramos\", \"Mylena Roberta dos Santos\", \"Bruna Rienzo Alves\"]"
                                    }
                                ],
                                "labels": [
                                    {
                                        "name": "Datalab"
                                    }
                                ],
                                "phases_history": [
                                    {
                                        "phase": {
                                            "name": "Start form"
                                        },
                                        "firstTimeIn": "2023-08-18T18:13:36+00:00",
                                        "lastTimeOut": "2023-08-18T18:13:37+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "01. Backlog"
                                        },
                                        "firstTimeIn": "2023-08-18T18:13:37+00:00",
                                        "lastTimeOut": "2023-12-28T12:31:50+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "02. Discovery"
                                        },
                                        "firstTimeIn": "2023-12-28T12:31:50+00:00",
                                        "lastTimeOut": "2023-12-28T12:38:59+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "03. Proposta de Solução e Experimentação"
                                        },
                                        "firstTimeIn": "2023-08-23T17:31:40+00:00",
                                        "lastTimeOut": "2023-12-28T12:41:52+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "04. Implementação"
                                        },
                                        "firstTimeIn": "2023-12-28T12:43:09+00:00",
                                        "lastTimeOut": "2024-01-09T20:15:19+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "05. Desenvolvimento de Business Case"
                                        },
                                        "firstTimeIn": "2023-08-23T17:32:46+00:00",
                                        "lastTimeOut": null
                                    }
                                ],
                                "url": "http://app.pipefy.com/pipes/303523960#cards/777963073"
                            }
                        },
                        {
                            "cursor": "WyIyMDIzLTA4LTE4IDE4OjEzOjQxLjIwMTEyNzAwMCBVVEMiLCIzLjAiLDc3Nzk2MzE0OF0",
                            "node": {
                                "id": "777963148",
                                "title": "Ecossistema Saúde & Bem Estar",
                                "assignees": [
                                    {
                                        "id": "302603063"
                                    }
                                ],
                                "comments": [],
                                "comments_count": 0,
                                "current_phase": {
                                    "name": "03. Proposta de Solução e Experimentação"
                                },
                                "done": false,
                                "due_date": null,
                                "fields": [
                                    {
                                        "name": "Nome do Desafio",
                                        "value": "Ecossistema Saúde & Bem Estar"
                                    },
                                    {
                                        "name": "Email do Solicitante",
                                        "value": "natalia.alves@br.nestle.com"
                                    },
                                    {
                                        "name": "Descreva o Desafio",
                                        "value": "tdb"
                                    },
                                    {
                                        "name": "Subárea",
                                        "value": "NHS"
                                    },
                                    {
                                        "name": "Área Requisitante",
                                        "value": "Nestlé Health Science"
                                    },
                                    {
                                        "name": "Responsável",
                                        "value": "[\"Carolina Leite de Moraes\"]"
                                    }
                                ],
                                "labels": [
                                    {
                                        "name": "Ecossistemas Digitais"
                                    }
                                ],
                                "phases_history": [
                                    {
                                        "phase": {
                                            "name": "Start form"
                                        },
                                        "firstTimeIn": "2023-08-18T18:13:41+00:00",
                                        "lastTimeOut": "2023-08-18T18:13:41+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "01. Backlog"
                                        },
                                        "firstTimeIn": "2023-08-18T18:13:41+00:00",
                                        "lastTimeOut": "2023-08-23T17:42:15+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "03. Proposta de Solução e Experimentação"
                                        },
                                        "firstTimeIn": "2023-09-27T13:33:03+00:00",
                                        "lastTimeOut": null
                                    },
                                    {
                                        "phase": {
                                            "name": "05. Desenvolvimento de Business Case"
                                        },
                                        "firstTimeIn": "2023-09-18T19:11:34+00:00",
                                        "lastTimeOut": "2023-10-31T20:07:03+00:00"
                                    }
                                ],
                                "url": "http://app.pipefy.com/pipes/303523960#cards/777963148"
                            }
                        },
                        {
                            "cursor": "WyIyMDIzLTA4LTE4IDE4OjU3OjM3LjQyMzIwNjAwMCBVVEMiLCI1LjAiLDc3ODAxMzAwOV0",
                            "node": {
                                "id": "778013009",
                                "title": "Cockpit Cafes",
                                "assignees": [],
                                "comments": [],
                                "comments_count": 0,
                                "current_phase": {
                                    "name": "05. Desenvolvimento de Business Case"
                                },
                                "done": false,
                                "due_date": null,
                                "fields": [
                                    {
                                        "name": "Nome do Desafio",
                                        "value": "Cockpit Cafes"
                                    },
                                    {
                                        "name": "Email do Solicitante",
                                        "value": "natalia.alves@br.nestle.com"
                                    },
                                    {
                                        "name": "Descreva o Desafio",
                                        "value": "tdb"
                                    },
                                    {
                                        "name": "Subárea",
                                        "value": "tdb"
                                    },
                                    {
                                        "name": "Área Requisitante",
                                        "value": "TDB"
                                    },
                                    {
                                        "name": "Qual área sponsor designada para desenvolver a solução?",
                                        "value": "Datalab"
                                    }
                                ],
                                "labels": [
                                    {
                                        "name": "Datalab"
                                    }
                                ],
                                "phases_history": [
                                    {
                                        "phase": {
                                            "name": "Start form"
                                        },
                                        "firstTimeIn": "2023-08-18T18:57:37+00:00",
                                        "lastTimeOut": "2023-08-18T18:57:37+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "01. Backlog"
                                        },
                                        "firstTimeIn": "2023-08-18T18:57:37+00:00",
                                        "lastTimeOut": "2023-08-23T17:46:54+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "02. Discovery"
                                        },
                                        "firstTimeIn": "2023-08-29T21:21:06+00:00",
                                        "lastTimeOut": "2023-10-23T18:52:54+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "05. Desenvolvimento de Business Case"
                                        },
                                        "firstTimeIn": "2023-10-23T18:52:54+00:00",
                                        "lastTimeOut": null
                                    }
                                ],
                                "url": "http://app.pipefy.com/pipes/303523960#cards/778013009"
                            }
                        },
                        {
                            "cursor": "WyIyMDIzLTA4LTE4IDE4OjU3OjM3Ljc3MTI0OTAwMCBVVEMiLCI1LjAiLDc3ODAxMzAyMl0",
                            "node": {
                                "id": "778013022",
                                "title": "One Stop Shop (CX)",
                                "assignees": [],
                                "comments": [],
                                "comments_count": 0,
                                "current_phase": {
                                    "name": "05. Desenvolvimento de Business Case"
                                },
                                "done": false,
                                "due_date": null,
                                "fields": [
                                    {
                                        "name": "Nome do Desafio",
                                        "value": "Sniper"
                                    },
                                    {
                                        "name": "Subárea",
                                        "value": "tdb"
                                    },
                                    {
                                        "name": "Descreva o Desafio",
                                        "value": "tdb"
                                    },
                                    {
                                        "name": "Área Requisitante",
                                        "value": "TDB"
                                    },
                                    {
                                        "name": "Qual área sponsor designada para desenvolver a solução?",
                                        "value": "Datalab"
                                    },
                                    {
                                        "name": "Email do Solicitante",
                                        "value": "janaina.melo@br.nestle.com"
                                    }
                                ],
                                "labels": [
                                    {
                                        "name": "Datalab"
                                    }
                                ],
                                "phases_history": [
                                    {
                                        "phase": {
                                            "name": "Start form"
                                        },
                                        "firstTimeIn": "2023-08-18T18:57:37+00:00",
                                        "lastTimeOut": "2023-08-18T18:57:38+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "01. Backlog"
                                        },
                                        "firstTimeIn": "2023-08-18T18:57:38+00:00",
                                        "lastTimeOut": "2023-08-23T17:48:21+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "02. Discovery"
                                        },
                                        "firstTimeIn": "2023-08-29T21:21:07+00:00",
                                        "lastTimeOut": "2023-10-23T19:00:57+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "03. Proposta de Solução e Experimentação"
                                        },
                                        "firstTimeIn": "2023-10-23T19:00:57+00:00",
                                        "lastTimeOut": "2023-10-23T19:02:44+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "05. Desenvolvimento de Business Case"
                                        },
                                        "firstTimeIn": "2023-10-23T19:02:44+00:00",
                                        "lastTimeOut": null
                                    }
                                ],
                                "url": "http://app.pipefy.com/pipes/303523960#cards/778013022"
                            }
                        },
                        {
                            "cursor": "WyIyMDIzLTA4LTE4IDE4OjU3OjM4LjQ4NTM0OTAwMCBVVEMiLCI1LjAiLDc3ODAxMzA0MV0",
                            "node": {
                                "id": "778013041",
                                "title": "Cadeia Leites",
                                "assignees": [],
                                "comments": [],
                                "comments_count": 0,
                                "current_phase": {
                                    "name": "05. Desenvolvimento de Business Case"
                                },
                                "done": false,
                                "due_date": null,
                                "fields": [
                                    {
                                        "name": "Nome do Desafio",
                                        "value": "Cadeia Leites"
                                    },
                                    {
                                        "name": "Subárea",
                                        "value": "Compras"
                                    },
                                    {
                                        "name": "Descreva o Desafio",
                                        "value": "tdb"
                                    },
                                    {
                                        "name": "Área Requisitante",
                                        "value": "Supply Chain"
                                    },
                                    {
                                        "name": "Qual área sponsor designada para desenvolver a solução?",
                                        "value": "Datalab"
                                    },
                                    {
                                        "name": "Email do Solicitante",
                                        "value": "janaina.melo@br.nestle.com"
                                    }
                                ],
                                "labels": [
                                    {
                                        "name": "Datalab"
                                    }
                                ],
                                "phases_history": [
                                    {
                                        "phase": {
                                            "name": "Start form"
                                        },
                                        "firstTimeIn": "2023-08-18T18:57:38+00:00",
                                        "lastTimeOut": "2023-08-18T18:57:38+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "01. Backlog"
                                        },
                                        "firstTimeIn": "2023-08-18T18:57:38+00:00",
                                        "lastTimeOut": "2023-08-23T17:49:16+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "02. Discovery"
                                        },
                                        "firstTimeIn": "2023-08-29T21:21:08+00:00",
                                        "lastTimeOut": "2023-10-23T18:52:25+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "03. Proposta de Solução e Experimentação"
                                        },
                                        "firstTimeIn": "2023-09-27T14:01:13+00:00",
                                        "lastTimeOut": "2023-09-27T14:01:16+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "05. Desenvolvimento de Business Case"
                                        },
                                        "firstTimeIn": "2023-10-23T18:52:25+00:00",
                                        "lastTimeOut": null
                                    }
                                ],
                                "url": "http://app.pipefy.com/pipes/303523960#cards/778013041"
                            }
                        },
                        {
                            "cursor": "WyIyMDIzLTA4LTE4IDE4OjU3OjQxLjM1NjIzNTAwMCBVVEMiLCIzLjAiLDc3ODAxMzEwMl0",
                            "node": {
                                "id": "778013102",
                                "title": "CP2",
                                "assignees": [],
                                "comments": [],
                                "comments_count": 0,
                                "current_phase": {
                                    "name": "03. Proposta de Solução e Experimentação"
                                },
                                "done": false,
                                "due_date": null,
                                "fields": [
                                    {
                                        "name": "Nome do Desafio",
                                        "value": "CP2"
                                    },
                                    {
                                        "name": "Email do Solicitante",
                                        "value": "natalia.alves@br.nestle.com"
                                    },
                                    {
                                        "name": "Subárea",
                                        "value": "tdb"
                                    },
                                    {
                                        "name": "Descreva o Desafio",
                                        "value": "tdb"
                                    },
                                    {
                                        "name": "Área Requisitante",
                                        "value": "TDB"
                                    }
                                ],
                                "labels": [
                                    {
                                        "name": "Datalab"
                                    }
                                ],
                                "phases_history": [
                                    {
                                        "phase": {
                                            "name": "Start form"
                                        },
                                        "firstTimeIn": "2023-08-18T18:57:41+00:00",
                                        "lastTimeOut": "2023-08-18T18:57:41+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "01. Backlog"
                                        },
                                        "firstTimeIn": "2023-08-18T18:57:41+00:00",
                                        "lastTimeOut": "2023-08-23T18:01:25+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "03. Proposta de Solução e Experimentação"
                                        },
                                        "firstTimeIn": "2023-08-23T18:01:45+00:00",
                                        "lastTimeOut": null
                                    }
                                ],
                                "url": "http://app.pipefy.com/pipes/303523960#cards/778013102"
                            }
                        },
                        {
                            "cursor": "WyIyMDIzLTA4LTE4IDE4OjU3OjQzLjIxOTEyMTAwMCBVVEMiLCI1Ljc1Iiw3NzgwMTMxNTBd",
                            "node": {
                                "id": "778013150",
                                "title": "Plataforma JVC 2.0",
                                "assignees": [
                                    {
                                        "id": "303200249"
                                    }
                                ],
                                "comments": [],
                                "comments_count": 0,
                                "current_phase": {
                                    "name": "06. Incorporado"
                                },
                                "done": false,
                                "due_date": null,
                                "fields": [
                                    {
                                        "name": "Proposta de Solução Aprovada?",
                                        "value": "Sim"
                                    },
                                    {
                                        "name": "Email do Solicitante",
                                        "value": "diego.borburema@br.nestle.com"
                                    },
                                    {
                                        "name": "Precisa de Business Case para Escalabilidade? (ver critérios para BC)",
                                        "value": "Sim"
                                    },
                                    {
                                        "name": "Quem irá implementar a Solução?",
                                        "value": "[\"Fornecedor Parceiro\", \"Time Interno\"]"
                                    },
                                    {
                                        "name": "Time Interno",
                                        "value": "[\"Diego Movio Borburema\", \"Renato Masago Goncalves\", \"Alexandre Henrique Vieira Vitolo\", \"Rafael Ribeiro Dourado\", \"Janaina Melo\", \"Gabriel Matsuo Molinari Sakai\"]"
                                    },
                                    {
                                        "name": "Nome do Fornecedor",
                                        "value": "CI&T"
                                    },
                                    {
                                        "name": "Data de Implementação",
                                        "value": "01/11/2023"
                                    },
                                    {
                                        "name": "Qual tipo de Solicitação",
                                        "value": "Novo Business Case"
                                    },
                                    {
                                        "name": "Dono do negócio",
                                        "value": "Felipe Votisch"
                                    },
                                    {
                                        "name": "Email",
                                        "value": "felipe.votisch@br.nestle.com"
                                    },
                                    {
                                        "name": "Área Requisitante",
                                        "value": "Vendas"
                                    },
                                    {
                                        "name": "Qual área sponsor designada para desenvolver a solução?",
                                        "value": "Datalab"
                                    },
                                    {
                                        "name": "Nome do Desafio",
                                        "value": "Plataforma JVC 2.0"
                                    },
                                    {
                                        "name": "Email do ponto focal do Negócio",
                                        "value": "camille.oliveira@br.nestle.com"
                                    },
                                    {
                                        "name": "Subárea",
                                        "value": "Trade Marketing"
                                    },
                                    {
                                        "name": "Descreva o Desafio",
                                        "value": "Atualmente a negociação de números de vendas e investimentos para o ano seguinte acontece em várias frentes:\n- Vendedor negociando com cliente;\n- Time de trade BU alocando investimentos com base em seu portifolio;\n- Time de trade canal alocando investimentos com base na necessidade de seus clientes e feedbacks dos vendedores;\n\nComo são muitas pessoas envolvidas, acaba gerando muitos retrabalhos durante a consolidação dos números e várias chances de mudanças / desatualizações. São mais de 100 planilhas excel envolvidas por processo e várias horas gastas."
                                    },
                                    {
                                        "name": "Como este desafio está afetando a companhia?",
                                        "value": "Times gastanto muito tempo com consolidação de arquivos e manutenção do número mais atualizado muitas vezes sem alinhamentos entre as visões conflitantes das partes, que vão discutir seus números apenas no final, gerando ainda mais retrabalho."
                                    },
                                    {
                                        "name": "Qual o principal benefício que uma possível solução a este desafio pode trazer?",
                                        "value": "[\"Compliance/Legal/SHE\", \"Eficiência\"]"
                                    },
                                    {
                                        "name": "Qual o valor anual previsto desta eficiência?",
                                        "value": "120.000,00"
                                    },
                                    {
                                        "name": "Já existe uma solução mapeada? Qual?",
                                        "value": "Criação de plataforma iterativa que permita a edição dos números de planejamento com base no PCI. Números todos consolidados fornecendo visuais que fomentem discussões entre as partes necessárias ao vivo."
                                    },
                                    {
                                        "name": "Como se chegou a este benefício (R$)?",
                                        "value": "Tempo gasto com consolidação de planilhas e acompanhamento do planejamento * R$/Hora de um coordenador para realizar esse trabalho"
                                    },
                                    {
                                        "name": "Quais objetivos a área pretende alcançar ao resolver o desafio?",
                                        "value": "Reduzir número de horas operacionais gastas com consolidações em 2.000 anuais. Aumentar aderência entre efetivo e planejado através de acompanhamento ativo."
                                    },
                                    {
                                        "name": "Qual público mais impactado atualmente por este desafio?.",
                                        "value": "[\"Clientes Externos (Ex.: Varejistas)\", \"Áreas Internas\"]"
                                    },
                                    {
                                        "name": "Quantas áreas estão sendo impactadas por este desafio?",
                                        "value": "5 ou mais"
                                    },
                                    {
                                        "name": "Quem precisa ser informado?",
                                        "value": "Camille Oliveira\nFelipe Votisch"
                                    },
                                    {
                                        "name": "Inclua arquivos ou materiais de apoio sobre o de desafio, ou até tentativas de resoluções e projetos passados que tratem do mesmo tema",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/2a6e8189-9475-4ba0-be89-7cb81e7cedac/NESTL_KickoffJVCPlataformaDigital.pdf?expires_on=1718110439&signature=uRn3Z%2FJJIxkcHiP%2FjMYixQilug6yiW5UKTWgAJEaXtg%3D\", \"https://app.pipefy.com/storage/v1/signed/uploads/74512356-86be-412e-b63f-388fc087aa79/OnePage_SalesEvolutionOrigenes_V2803_v2.pptx?expires_on=1718110439&signature=eje7YwEMLVMqZAAcOb%2BlMesbtaYkOgx25MbLh9Xg4do%3D\", \"https://app.pipefy.com/storage/v1/signed/uploads/f3576790-25ca-4d4b-bfd0-2e4216354af5/SalesEvolution_BusinessCase_V2803_v2.xlsx?expires_on=1718110439&signature=kX5s18ljFTGUP6kiIEW8j%2FIJFZ0Ikel9%2Ftc6E4GqKbc%3D\", \"https://app.pipefy.com/storage/v1/signed/uploads/35a56bb4-6a81-4ca0-9760-c6c69fb79e36/ApresentaoJVC2023.pptx?expires_on=1718110439&signature=us6SzXuP%2BJKzNnYtPFSRvNJ3ev70rTdx5cHt7wGyomY%3D\"]"
                                    },
                                    {
                                        "name": "A quais Objetivos Estratégicos de BT este desafio atende?",
                                        "value": "[\"Eficiência\"]"
                                    },
                                    {
                                        "name": "Responsável",
                                        "value": "[\"Diego Movio Borburema\"]"
                                    },
                                    {
                                        "name": "Projeto Priorizado?",
                                        "value": "Sim"
                                    },
                                    {
                                        "name": "Quais pessoas precisam estar envolvidas?",
                                        "value": "Carlos Brigel\nCamille Oliveira"
                                    },
                                    {
                                        "name": "definição de PM e squad pra discovery",
                                        "value": "PM: Diego Movio Borburema\nSquad: CI&T + Gabriel Sakai, Matheus Silva, Alexandre Vitolo + Renato Gonçalves"
                                    },
                                    {
                                        "name": "Como você descobriu a oportunidade de criar este projeto?",
                                        "value": "Business Case já pronto"
                                    },
                                    {
                                        "name": "Quais os principais indicadores avaliados hoje? Qual meta para atingimento com o projeto?",
                                        "value": "Eficiência Operacional: 2.000h anuais"
                                    },
                                    {
                                        "name": "O que você considera sucesso dentro do seu projeto?",
                                        "value": "evitar utilização de planilhas paralelas de controle do planejamento"
                                    },
                                    {
                                        "name": "Quem serão as pessoas facilitadoras do processo?",
                                        "value": "Carlos Brigel\nLucas Santos"
                                    },
                                    {
                                        "name": "Detalhe quem está sendo impactado pelo desafio",
                                        "value": "Time de Trade Marketing que tem que consolidar todos os arquivos\nTIme de Vendas que tem que preencher arquivos não uniformizados e no fim provavelmente não serão respeitados pela BU\nBU não tem visibilidade da necessidade / ações dos clientes até o final do processo"
                                    },
                                    {
                                        "name": "Mapeamento do Processo ou jornada atual dos usuários a qual este desafio ou problema ataca",
                                        "value": ""
                                    },
                                    {
                                        "name": "Anexos para mapeamento das jornadas ou dos processos",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/69c6d8bb-1d5a-4380-977d-09c88e3d47f8/NESTL_KickoffJVCPlataformaDigital.pdf?expires_on=1718110439&signature=TfravvFs%2F8g8L%2F25a%2BmIoE9CDOF5lBD%2BcoJ6L0L21do%3D\"]"
                                    },
                                    {
                                        "name": "Quem será o responsável em desenvolver a proposta de solução?",
                                        "value": "[\"Rodrigo José Benedito Gardelim\"]"
                                    },
                                    {
                                        "name": "Qual time irá desenvolver a experimentação?",
                                        "value": "[\"Diego Movio Borburema\", \"Rafael Ribeiro Dourado\", \"Gabriel Matsuo Molinari Sakai\", \"Renato Masago Goncalves\", \"Alexandre Henrique Vieira Vitolo\"]"
                                    },
                                    {
                                        "name": "Qual a solução ou hipótese de solução proposta?",
                                        "value": "Plataforma integrada web"
                                    },
                                    {
                                        "name": "Indicadores de Performance",
                                        "value": "Redução de horas operacionais em 2.000 anuais"
                                    },
                                    {
                                        "name": "Requisitos de Negócio",
                                        "value": "- Necessidade de edição de valores de volume e investimento (considerando macro rúbricas);\n- Necessidade de visualização e edição por cliente (L5) e subcategoria;\n- Necessidade de visualização e edição por mês e anual;\n- Necessidade de comparativos para balizar a edição (histórico e PCI);\n- Necessidade de possibilitar edição simultânea;\n- Necessidade de controle de usuários e seus acessos;\n- Necessidade de importação e exportação em massa via excel"
                                    }
                                ],
                                "labels": [
                                    {
                                        "name": "Datalab"
                                    }
                                ],
                                "phases_history": [
                                    {
                                        "phase": {
                                            "name": "Start form"
                                        },
                                        "firstTimeIn": "2023-08-18T18:57:43+00:00",
                                        "lastTimeOut": "2023-08-18T18:57:43+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "01. Backlog"
                                        },
                                        "firstTimeIn": "2023-08-18T18:57:43+00:00",
                                        "lastTimeOut": "2023-12-21T14:07:32+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "02. Discovery"
                                        },
                                        "firstTimeIn": "2023-12-21T14:07:32+00:00",
                                        "lastTimeOut": "2023-12-21T14:16:21+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "03. Proposta de Solução e Experimentação"
                                        },
                                        "firstTimeIn": "2023-12-21T14:16:21+00:00",
                                        "lastTimeOut": "2023-12-21T14:26:47+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "04. Implementação"
                                        },
                                        "firstTimeIn": "2023-12-21T14:26:56+00:00",
                                        "lastTimeOut": "2023-12-21T14:29:10+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "05. Desenvolvimento de Business Case"
                                        },
                                        "firstTimeIn": "2023-10-31T20:09:51+00:00",
                                        "lastTimeOut": "2023-12-21T14:31:00+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "06. Incorporado"
                                        },
                                        "firstTimeIn": "2023-12-21T14:31:00+00:00",
                                        "lastTimeOut": null
                                    }
                                ],
                                "url": "http://app.pipefy.com/pipes/303523960#cards/778013150"
                            }
                        },
                        {
                            "cursor": "WyIyMDIzLTA4LTE4IDE4OjU3OjQzLjkwOTEwNTAwMCBVVEMiLCI1LjAiLDc3ODAxMzE2NF0",
                            "node": {
                                "id": "778013164",
                                "title": "CX - Process Mining",
                                "assignees": [],
                                "comments": [],
                                "comments_count": 0,
                                "current_phase": {
                                    "name": "05. Desenvolvimento de Business Case"
                                },
                                "done": false,
                                "due_date": null,
                                "fields": [
                                    {
                                        "name": "Email do Solicitante",
                                        "value": "janaina.melo@br.nestle.com"
                                    },
                                    {
                                        "name": "Nome do Desafio",
                                        "value": "CX - Process Mining"
                                    },
                                    {
                                        "name": "Descreva o Desafio",
                                        "value": "tdb"
                                    },
                                    {
                                        "name": "Subárea",
                                        "value": "Supply Chain"
                                    },
                                    {
                                        "name": "Área Requisitante",
                                        "value": "Supply Chain"
                                    },
                                    {
                                        "name": "Qual área sponsor designada para desenvolver a solução?",
                                        "value": "Datalab"
                                    }
                                ],
                                "labels": [
                                    {
                                        "name": "Datalab"
                                    }
                                ],
                                "phases_history": [
                                    {
                                        "phase": {
                                            "name": "Start form"
                                        },
                                        "firstTimeIn": "2023-08-18T18:57:43+00:00",
                                        "lastTimeOut": "2023-08-18T18:57:44+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "01. Backlog"
                                        },
                                        "firstTimeIn": "2023-08-18T18:57:44+00:00",
                                        "lastTimeOut": "2023-08-23T18:06:25+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "05. Desenvolvimento de Business Case"
                                        },
                                        "firstTimeIn": "2023-10-31T19:40:50+00:00",
                                        "lastTimeOut": null
                                    }
                                ],
                                "url": "http://app.pipefy.com/pipes/303523960#cards/778013164"
                            }
                        },
                        {
                            "cursor": "WyIyMDIzLTA4LTE4IDE4OjU3OjQ0LjI1MDY5OTAwMCBVVEMiLCI1LjAiLDc3ODAxMzE3MV0",
                            "node": {
                                "id": "778013171",
                                "title": "Shopper Analytics",
                                "assignees": [],
                                "comments": [],
                                "comments_count": 0,
                                "current_phase": {
                                    "name": "05. Desenvolvimento de Business Case"
                                },
                                "done": false,
                                "due_date": null,
                                "fields": [
                                    {
                                        "name": "Nome do Desafio",
                                        "value": "Shopper Analytics"
                                    },
                                    {
                                        "name": "Email do Solicitante",
                                        "value": "natalia.alves@br.nestle.com"
                                    },
                                    {
                                        "name": "Subárea",
                                        "value": "tdb"
                                    },
                                    {
                                        "name": "Descreva o Desafio",
                                        "value": "tdb"
                                    },
                                    {
                                        "name": "Área Requisitante",
                                        "value": "TDB"
                                    }
                                ],
                                "labels": [
                                    {
                                        "name": "Datalab"
                                    }
                                ],
                                "phases_history": [
                                    {
                                        "phase": {
                                            "name": "Start form"
                                        },
                                        "firstTimeIn": "2023-08-18T18:57:44+00:00",
                                        "lastTimeOut": "2023-08-18T18:57:44+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "01. Backlog"
                                        },
                                        "firstTimeIn": "2023-08-18T18:57:44+00:00",
                                        "lastTimeOut": "2023-08-23T18:07:56+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "04. Implementação"
                                        },
                                        "firstTimeIn": "2023-11-08T21:01:22+00:00",
                                        "lastTimeOut": "2024-01-09T20:15:29+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "05. Desenvolvimento de Business Case"
                                        },
                                        "firstTimeIn": "2023-10-31T20:12:21+00:00",
                                        "lastTimeOut": null
                                    }
                                ],
                                "url": "http://app.pipefy.com/pipes/303523960#cards/778013171"
                            }
                        },
                        {
                            "cursor": "WyIyMDIzLTA4LTE4IDE4OjU3OjUxLjg5MTEwMDAwMCBVVEMiLCIzLjAiLDc3ODAxMzM1M10",
                            "node": {
                                "id": "778013353",
                                "title": "Ecossistema Parentalidade",
                                "assignees": [
                                    {
                                        "id": "302603063"
                                    }
                                ],
                                "comments": [],
                                "comments_count": 0,
                                "current_phase": {
                                    "name": "03. Proposta de Solução e Experimentação"
                                },
                                "done": false,
                                "due_date": null,
                                "fields": [
                                    {
                                        "name": "Nome do Desafio",
                                        "value": "Ecossistema Parentalidade"
                                    },
                                    {
                                        "name": "Email do Solicitante",
                                        "value": "natalia.alves@br.nestle.com"
                                    },
                                    {
                                        "name": "Subárea",
                                        "value": "NI"
                                    },
                                    {
                                        "name": "Descreva o Desafio",
                                        "value": "tdb"
                                    },
                                    {
                                        "name": "Área Requisitante",
                                        "value": "Nutrição"
                                    },
                                    {
                                        "name": "Responsável",
                                        "value": "[\"Carolina Leite de Moraes\"]"
                                    }
                                ],
                                "labels": [
                                    {
                                        "name": "Ecossistemas Digitais"
                                    }
                                ],
                                "phases_history": [
                                    {
                                        "phase": {
                                            "name": "Start form"
                                        },
                                        "firstTimeIn": "2023-08-18T18:57:51+00:00",
                                        "lastTimeOut": "2023-08-18T18:57:52+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "01. Backlog"
                                        },
                                        "firstTimeIn": "2023-08-18T18:57:52+00:00",
                                        "lastTimeOut": "2023-08-23T18:24:00+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "03. Proposta de Solução e Experimentação"
                                        },
                                        "firstTimeIn": "2023-11-09T22:10:05+00:00",
                                        "lastTimeOut": null
                                    },
                                    {
                                        "phase": {
                                            "name": "05. Desenvolvimento de Business Case"
                                        },
                                        "firstTimeIn": "2023-10-31T20:03:44+00:00",
                                        "lastTimeOut": "2023-10-31T20:03:57+00:00"
                                    }
                                ],
                                "url": "http://app.pipefy.com/pipes/303523960#cards/778013353"
                            }
                        },
                        {
                            "cursor": "WyIyMDIzLTA4LTE4IDE4OjU3OjUyLjIyODcxMjAwMCBVVEMiLCI1LjAiLDc3ODAxMzM2MV0",
                            "node": {
                                "id": "778013361",
                                "title": "Ecossistema Benefícios",
                                "assignees": [
                                    {
                                        "id": "302603063"
                                    }
                                ],
                                "comments": [],
                                "comments_count": 0,
                                "current_phase": {
                                    "name": "05. Desenvolvimento de Business Case"
                                },
                                "done": false,
                                "due_date": null,
                                "fields": [
                                    {
                                        "name": "Nome do Desafio",
                                        "value": "Ecossistema Benefícios"
                                    },
                                    {
                                        "name": "Email do Solicitante",
                                        "value": "natalia.alves@br.nestle.com"
                                    },
                                    {
                                        "name": "Subárea",
                                        "value": "Marketing "
                                    },
                                    {
                                        "name": "Descreva o Desafio",
                                        "value": "tdb"
                                    },
                                    {
                                        "name": "Área Requisitante",
                                        "value": "Marketing e Comunicação"
                                    },
                                    {
                                        "name": "Responsável",
                                        "value": "[\"Carolina Leite de Moraes\"]"
                                    },
                                    {
                                        "name": "Qual área sponsor designada para desenvolver a solução?",
                                        "value": "Ecossistemas Digitais"
                                    }
                                ],
                                "labels": [
                                    {
                                        "name": "Ecossistemas Digitais"
                                    }
                                ],
                                "phases_history": [
                                    {
                                        "phase": {
                                            "name": "Start form"
                                        },
                                        "firstTimeIn": "2023-08-18T18:57:52+00:00",
                                        "lastTimeOut": "2023-08-18T18:57:52+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "01. Backlog"
                                        },
                                        "firstTimeIn": "2023-08-18T18:57:52+00:00",
                                        "lastTimeOut": "2023-08-23T18:25:29+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "05. Desenvolvimento de Business Case"
                                        },
                                        "firstTimeIn": "2023-10-31T20:02:23+00:00",
                                        "lastTimeOut": null
                                    },
                                    {
                                        "phase": {
                                            "name": "06. Incorporado"
                                        },
                                        "firstTimeIn": "2023-11-30T18:19:49+00:00",
                                        "lastTimeOut": "2023-11-30T18:20:39+00:00"
                                    }
                                ],
                                "url": "http://app.pipefy.com/pipes/303523960#cards/778013361"
                            }
                        },
                        {
                            "cursor": "WyIyMDIzLTA4LTE4IDE4OjU3OjUyLjkwMDc1MzAwMCBVVEMiLCI0LjAiLDc3ODAxMzM3OV0",
                            "node": {
                                "id": "778013379",
                                "title": "DPS Engajamento",
                                "assignees": [
                                    {
                                        "id": "302603063"
                                    }
                                ],
                                "comments": [],
                                "comments_count": 0,
                                "current_phase": {
                                    "name": "04. Implementação"
                                },
                                "done": false,
                                "due_date": null,
                                "fields": [
                                    {
                                        "name": "Nome do Desafio",
                                        "value": "DPS Engajamento"
                                    },
                                    {
                                        "name": "Email do Solicitante",
                                        "value": "natalia.alves@br.nestle.com"
                                    },
                                    {
                                        "name": "Subárea",
                                        "value": "Marketing "
                                    },
                                    {
                                        "name": "Descreva o Desafio",
                                        "value": "tdb"
                                    },
                                    {
                                        "name": "Área Requisitante",
                                        "value": "Marketing e Comunicação"
                                    },
                                    {
                                        "name": "Responsável",
                                        "value": "[\"Carolina Leite de Moraes\"]"
                                    }
                                ],
                                "labels": [
                                    {
                                        "name": "Ecossistemas Digitais"
                                    }
                                ],
                                "phases_history": [
                                    {
                                        "phase": {
                                            "name": "Start form"
                                        },
                                        "firstTimeIn": "2023-08-18T18:57:52+00:00",
                                        "lastTimeOut": "2023-08-18T18:57:53+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "01. Backlog"
                                        },
                                        "firstTimeIn": "2023-08-18T18:57:53+00:00",
                                        "lastTimeOut": "2023-08-23T18:27:42+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "04. Implementação"
                                        },
                                        "firstTimeIn": "2023-11-09T22:10:34+00:00",
                                        "lastTimeOut": null
                                    },
                                    {
                                        "phase": {
                                            "name": "05. Desenvolvimento de Business Case"
                                        },
                                        "firstTimeIn": "2023-10-31T19:53:31+00:00",
                                        "lastTimeOut": "2023-10-31T19:53:47+00:00"
                                    }
                                ],
                                "url": "http://app.pipefy.com/pipes/303523960#cards/778013379"
                            }
                        },
                        {
                            "cursor": "WyIyMDIzLTA4LTIyIDE4OjA0OjU1Ljg2OTk4ODAwMCBVVEMiLCIzLjAiLDc3OTg5NDEzOF0",
                            "node": {
                                "id": "779894138",
                                "title": "Caixa de bombons personalizada",
                                "assignees": [
                                    {
                                        "id": "302617520"
                                    },
                                    {
                                        "id": "303172994"
                                    }
                                ],
                                "comments": [],
                                "comments_count": 0,
                                "current_phase": {
                                    "name": "03. Proposta de Solução e Experimentação"
                                },
                                "done": false,
                                "due_date": "2024-02-19T00:00:00Z",
                                "fields": [
                                    {
                                        "name": "Nome do Desafio",
                                        "value": "Caixa de bombons personalizada"
                                    },
                                    {
                                        "name": "Área Requisitante",
                                        "value": "Confectionery"
                                    },
                                    {
                                        "name": "Descreva o Desafio",
                                        "value": "Desenvolvimento de um novo modelo para venda de Caixas de bombons personalizadas para Nestlé e Garoto via e-commerce. A ideia é que o consumidor consiga personalizar seu mix preferido através de um site / app. Além de aumentarmos o ticket médio da categoria, recrutar GenZ, utilizaremos os dados para CRM e para entendimento da preferencia de mix/ocasião."
                                    },
                                    {
                                        "name": "Subárea",
                                        "value": "Chocolates"
                                    },
                                    {
                                        "name": "Email do ponto focal do Negócio",
                                        "value": "joao.lemos1@br.nestle.com"
                                    },
                                    {
                                        "name": "Quantas áreas estão sendo impactadas por este desafio?",
                                        "value": "1 a 2"
                                    },
                                    {
                                        "name": "Qual público mais impactado atualmente por este desafio?.",
                                        "value": "[\"Consumidor Final\"]"
                                    },
                                    {
                                        "name": "Como este desafio está afetando a companhia?",
                                        "value": "O aumento de tendências de personalização de produtos cria mercados para caixas de bombons personalizadas. A unidade de negócio entende que há espaço para validação deste modelo de negócio principalmente para buscar atender as necessidades de uma linha de caixas de bombons presenteáveis para a geração Z.\nÉ um espaço de valirozação dos bombons individuais Nestlé e Garoto, e criar uma linha de produtos / serviços de alto valor agregado."
                                    },
                                    {
                                        "name": "Quais objetivos a área pretende alcançar ao resolver o desafio?",
                                        "value": "Validar o modelo de negócio de caixas de bombons personalizadas"
                                    },
                                    {
                                        "name": "Outras informações",
                                        "value": ""
                                    },
                                    {
                                        "name": "Qual a receita anual prevista deste incremento?",
                                        "value": "10.000,00"
                                    },
                                    {
                                        "name": "Data Pitch",
                                        "value": "31/07/2023"
                                    },
                                    {
                                        "name": "Defesa do Desafio",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/79b78741-4e1b-4ac2-a24f-f04980cd328d/Defesadesafio_CAIXADEBOMBONSPERSONALIZADA.pptx?expires_on=1718110439&signature=mM8MSB9vD1ndp%2F8QSyu8AAAHVLF%2BROKKKDvrspy7RMo%3D\"]"
                                    },
                                    {
                                        "name": "Pitch Reverso",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/18b043f9-2de5-43c0-881b-043ec7312cee/Defesadesafio_CAIXADEBOMBONSPERSONALIZADA.pptx?expires_on=1718110439&signature=T58FEoqBvdxSmMRvEPWWnoQKIA117VgI3vvZQ2WmH7A%3D\", \"https://app.pipefy.com/storage/v1/signed/uploads/0bfd04c0-58dc-494e-a709-5af35a478539/PitchReversoCaixadebombonspersonalizadaOnda12023.pptx?expires_on=1718110439&signature=fUmQTJCoOxcUaE4mgmhd2F2xlkS82gqxdLZ58hFPgFY%3D\"]"
                                    },
                                    {
                                        "name": "NDAs",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/032c41a8-bedc-43d9-b640-a84bc73ad6ff/NDA_CAIXADEBOMBONSPERSONALIZADA_SOULOG.pdf?expires_on=1718110439&signature=iEtVfqYgh8L8Zv9%2FJIURp4w4dYTYnwk%2BTp7G%2FAx8dyI%3D\", \"https://app.pipefy.com/storage/v1/signed/uploads/e17f9947-13c9-4947-bea9-7934c3d81fb5/NDA_CAIXADEBOMBONSPERSONALIZADA_GRINSTORE.pdf?expires_on=1718110439&signature=RZkGG5Vy%2Bg%2Bmsbwdj91pKIcawoo1FjNepQUEUw%2FCv0Q%3D\"]"
                                    },
                                    {
                                        "name": "Responsável",
                                        "value": "[\"Carolina Agostinho Falcoski\", \"Karina Gomide\"]"
                                    },
                                    {
                                        "name": "Qual área sponsor designada para desenvolver a solução?",
                                        "value": "Inovação"
                                    },
                                    {
                                        "name": "Avaliação de startups pitch day",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/36ec2b23-fa68-4dc8-9683-fc1a98ac2dc8/Avaliaodasstartups_PERSONALIZAOCAIXADEBOMBOM.xlsx?expires_on=1718110439&signature=1pOlDKMfk22wSgvPHbHd41pS%2BmrHAAXzkoGZ7s8v7d0%3D\"]"
                                    },
                                    {
                                        "name": "Mural de Imersão",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/6bf1b96b-d263-4d79-b82f-9e3250e44c5c/Framework_PERSONALIZAOCAIXADEBOMBOM_GrinStore_v1.pdf?expires_on=1718110439&signature=Jxl3GA6SSqpvtGTINRwnUHeFrAIaH6MMQK0J9ZnpAeA%3D\"]"
                                    },
                                    {
                                        "name": "Outras Observações",
                                        "value": ""
                                    },
                                    {
                                        "name": "Proposta de Piloto Aprovada?",
                                        "value": "Sim"
                                    },
                                    {
                                        "name": "Proposta do Piloto",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/e27980e7-a75c-428b-bdd7-3e522f608633/PropostaPiloto_CAIXADEBOMBONSPERSONALIZADA_GRINSTORE.pptx?expires_on=1718110439&signature=vvgTynlGBrP9%2F30KdP1cP7M9qTq0END4OVIBYoqmPe0%3D\"]"
                                    },
                                    {
                                        "name": "Data de validação do Piloto pelo BEO",
                                        "value": "19/02/2024 00:00"
                                    },
                                    {
                                        "name": "Observações - Imersão",
                                        "value": ""
                                    },
                                    {
                                        "name": "Aprovação do Piloto",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/2f5caeb7-f0f4-4fe3-b2da-50c7b58985e9/AprovaoPiloto_CAIXADEBOMBONSPERSONALIZADA_GRINSTORE.msg?expires_on=1718110439&signature=6AyRArlyhkbOXuxM4XlKnk08YvF4FVFY56um%2B%2Bs%2FDl8%3D\"]"
                                    },
                                    {
                                        "name": "Documentos de Startups",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/2f0edea4-2c5f-480b-9a2a-f5c819157c97/Pitchdeck_PERSONALIZAODECAIXADEBOMBOM_GRINSTORE.pdf?expires_on=1718110439&signature=dIAksPs9DwYZkHuLIgNuKjQvdNBOpFrEZYtkEz5OmlE%3D\"]"
                                    },
                                    {
                                        "name": "PO",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/b37c9187-a661-4c08-a659-8e5db354ff59/P.O4575025023CaixadebombonsGrinsStore.pdf?expires_on=1718110439&signature=71wVZymP67X6BlfHdH7Ln1m0GfAi93Yu0%2FbwW5A5obE%3D\", \"https://app.pipefy.com/storage/v1/signed/uploads/ea2d27e8-6526-49a4-9567-226ca8ebade5/P.O4574622730ProjetoCaixadebombonspersonalizadaMonking.pdf?expires_on=1718110439&signature=h6WSoueLsZFSvlzQu%2BdHViVNNZuouTQLwiEQPpTHpcQ%3D\"]"
                                    },
                                    {
                                        "name": "Concorrência",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/e7b910fd-144f-48cb-ab42-0f2e236b814d/CanvasGrinstore.xlsx?expires_on=1718110439&signature=%2BC5rHBpy4uy7UDy0qB0Xyn37jUDvYbRNCgaKa6%2Bq6%2FQ%3D\"]"
                                    },
                                    {
                                        "name": "NFs",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/6e6859f8-bb61-4b2b-a482-550dc4862fda/NF2166PO4574622730-MonkingprojetopilotoCaixadeBombons.pdf?expires_on=1718110439&signature=fGvrkbnKaN%2BZDm%2BH5enkthchaLhVJlXzY2REMH1OE7w%3D\"]"
                                    },
                                    {
                                        "name": "Email do Solicitante",
                                        "value": "karina.gomide@br.nestle.com"
                                    }
                                ],
                                "labels": [
                                    {
                                        "name": "Inovação"
                                    }
                                ],
                                "phases_history": [
                                    {
                                        "phase": {
                                            "name": "Start form"
                                        },
                                        "firstTimeIn": "2023-08-22T18:04:55+00:00",
                                        "lastTimeOut": "2023-08-22T18:04:56+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "01. Backlog"
                                        },
                                        "firstTimeIn": "2023-08-22T18:04:56+00:00",
                                        "lastTimeOut": "2023-12-01T20:23:12+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "02. Discovery"
                                        },
                                        "firstTimeIn": "2023-08-23T21:19:55+00:00",
                                        "lastTimeOut": "2024-01-24T20:10:24+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "03. Proposta de Solução e Experimentação"
                                        },
                                        "firstTimeIn": "2023-10-31T19:49:03+00:00",
                                        "lastTimeOut": null
                                    }
                                ],
                                "url": "http://app.pipefy.com/pipes/303523960#cards/779894138"
                            }
                        },
                        {
                            "cursor": "WyIyMDIzLTA4LTIyIDE4OjA0OjU2LjM1NjQ1NzAwMCBVVEMiLCIxMS41Iiw3Nzk4OTQxNDVd",
                            "node": {
                                "id": "779894145",
                                "title": "Fidelidade e recorrência de moceiras",
                                "assignees": [
                                    {
                                        "id": "303172994"
                                    }
                                ],
                                "comments": [
                                    {
                                        "text": "Com a mudança de gestão da frente de Moça, os pilares que embasavam o projeto foram questionados e o projeto voltou para uma fase de análise com CMI. Visando trazer uma proposta de projeto mais estruturada a área escolheu cancelar o piloto neste momento e coletar maiores informações."
                                    }
                                ],
                                "comments_count": 1,
                                "current_phase": {
                                    "name": "08. Post-Mortem Piloto"
                                },
                                "done": false,
                                "due_date": null,
                                "fields": [
                                    {
                                        "name": "Nome do Desafio",
                                        "value": "Fidelidade e recorência de moceiras"
                                    },
                                    {
                                        "name": "Subárea",
                                        "value": "Culinários"
                                    },
                                    {
                                        "name": "Descreva o Desafio",
                                        "value": "Encontrar um modelo online de fidelização do público microempreendedor, agregando valor  além do produto e incentivando a compra recorrente de produtos Nestlé."
                                    },
                                    {
                                        "name": "Área Requisitante",
                                        "value": "Culinários"
                                    },
                                    {
                                        "name": "Responsável",
                                        "value": "[\"Marina Duarte Figueiredo\"]"
                                    },
                                    {
                                        "name": "Email do Solicitante",
                                        "value": "karina.gomide@br.nestle.com"
                                    },
                                    {
                                        "name": "Data Pitch",
                                        "value": "24/07/2023"
                                    },
                                    {
                                        "name": "Defesa do Desafio",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/c1d03252-d277-4a6f-9b03-531a8a665bfc/Defesadesafio_FIDELIDADEERECORRENCIADEMOCEIRAS.pptx?expires_on=1718110439&signature=ifbcFITEprt3PNauaDc2ECtrQMidarCy9kLIAUv3B5w%3D\"]"
                                    },
                                    {
                                        "name": "NDAs",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/364d4fe4-22df-471e-bc46-5521b7017082/NDA_FIDELIDADEERECORRENCIADEMOCEIRAS_DONUZ.pdf?expires_on=1718110439&signature=5QvHjr%2Bq9uDCm8gmRq0A8YNTJY%2FhvJ3wblimOEJlCwU%3D\", \"https://app.pipefy.com/storage/v1/signed/uploads/a2667ba6-6938-47c5-8856-d5a066fb5a89/NDA_FIDELIDADEERECORRENCIADEMOCEIRAS_SKILLCORE.pdf?expires_on=1718110439&signature=0wgzEpWuvO72qil%2Fr5NlNY8Kzh2%2BRIgoBB%2BCM0yKz8U%3D\", \"https://app.pipefy.com/storage/v1/signed/uploads/bdaf156b-70ba-4273-b42e-484e4275e597/NDA_FIDELIDADEERECORRENCIADEMOCEIRAS_LIHAIGETMORE.pdf?expires_on=1718110439&signature=hq5BJTxPWU%2BE7wxHbbeUdNA31fj2KrFMxa%2FGUmvJO6k%3D\"]"
                                    },
                                    {
                                        "name": "Documentos de Startups",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/13d3853f-0243-4598-ae04-5e38b9fd0e60/Pitchdeck_FIDELIZAODEMOA_DONUZ.pdf?expires_on=1718110439&signature=pAwRfxLqqs%2BZUARaWpMM2DyEwGBkMpddsvr5qRZmjdk%3D\", \"https://app.pipefy.com/storage/v1/signed/uploads/dd0e4c88-d719-474c-92e3-47b3fac8a870/Pitchdeck_FIDELIZAODEMOA_LIHAI.pdf?expires_on=1718110439&signature=mNgUCRG%2BVWiLg%2Fvl8%2B3oWDF78h9ZPdAhWBkG0Hu3boY%3D\", \"https://app.pipefy.com/storage/v1/signed/uploads/2dfd7fe1-c30e-4082-b9df-d4e1d258cb0a/Pitchdeck_FIDELIZAODEMOA_SKILLCORE.pdf?expires_on=1718110439&signature=gkZnZshjsxJtl6xaGGZWlUlchWBVUsEFQv8fHl15Tys%3D\"]"
                                    },
                                    {
                                        "name": "Avaliação de startups pitch day",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/74366a20-471a-4042-a9bb-52dcd42ccc7f/Avaliaodasstartups_FIDELIZAODEMOA.pdf?expires_on=1718110439&signature=EFhWTQ75IavH4%2FZghl8bYkkZjBjMuQbu1h1w4znyOqI%3D\"]"
                                    },
                                    {
                                        "name": "Mural de Imersão",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/bf70eee0-7e05-48a1-aff7-025874a7401b/Framework_FIDELIZAODEMOA_LIHAI_v1.pdf?expires_on=1718110439&signature=dVkStePf85MCRTQglqv1uXArNpIMmbUdanr3PbutEfs%3D\"]"
                                    }
                                ],
                                "labels": [
                                    {
                                        "name": "Inovação"
                                    }
                                ],
                                "phases_history": [
                                    {
                                        "phase": {
                                            "name": "Start form"
                                        },
                                        "firstTimeIn": "2023-08-22T18:04:56+00:00",
                                        "lastTimeOut": "2023-08-22T18:04:56+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "01. Backlog"
                                        },
                                        "firstTimeIn": "2023-08-22T18:04:56+00:00",
                                        "lastTimeOut": "2023-08-23T19:30:50+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "02. Discovery"
                                        },
                                        "firstTimeIn": "2023-08-23T21:20:01+00:00",
                                        "lastTimeOut": "2023-12-06T16:28:55+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "03. Proposta de Solução e Experimentação"
                                        },
                                        "firstTimeIn": "2023-12-06T16:28:55+00:00",
                                        "lastTimeOut": "2023-12-21T17:30:37+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "07. Não Priorizados"
                                        },
                                        "firstTimeIn": "2023-12-21T17:30:37+00:00",
                                        "lastTimeOut": "2023-12-21T17:36:58+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "08. Post-Mortem Piloto"
                                        },
                                        "firstTimeIn": "2023-12-21T17:36:58+00:00",
                                        "lastTimeOut": null
                                    }
                                ],
                                "url": "http://app.pipefy.com/pipes/303523960#cards/779894145"
                            }
                        },
                        {
                            "cursor": "WyIyMDIzLTA4LTIyIDE4OjA0OjU2LjczNjExMDAwMCBVVEMiLCIzLjAiLDc3OTg5NDE1MV0",
                            "node": {
                                "id": "779894151",
                                "title": "Aluguel de máquinas Neo",
                                "assignees": [
                                    {
                                        "id": "303172994"
                                    }
                                ],
                                "comments": [],
                                "comments_count": 0,
                                "current_phase": {
                                    "name": "03. Proposta de Solução e Experimentação"
                                },
                                "done": false,
                                "due_date": "2023-10-25T14:30:00Z",
                                "fields": [
                                    {
                                        "name": "Nome do Desafio",
                                        "value": "Aluguel de máquinas Neo"
                                    },
                                    {
                                        "name": "Quantas áreas estão sendo impactadas por este desafio?",
                                        "value": "1 a 2"
                                    },
                                    {
                                        "name": "Área Requisitante",
                                        "value": "Cafés"
                                    },
                                    {
                                        "name": "Subárea",
                                        "value": "NDG"
                                    },
                                    {
                                        "name": "Qual a receita anual prevista deste incremento?",
                                        "value": "10.000,00"
                                    },
                                    {
                                        "name": "Proposta do Piloto",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/578f6ae7-8235-4d0e-9e4d-10f4f0319f2d/PropostaPiloto_ALUGUELDEMAQUINASNEO_ALLU.pptx?expires_on=1718110439&signature=VEI4D6QTk4SpkBGaN8xXXmNOLgS9P%2BvU7oVA3qInyS4%3D\"]"
                                    },
                                    {
                                        "name": "NDAs",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/3ad4814e-7fa2-40f7-840f-fd2890e9d1b4/NDA_ALUGUELDEMAQUINASNEO_TUIMBOX.pdf?expires_on=1718110439&signature=QzFQDXJ7Rid1agfI%2Bu%2BZau8i1O7h%2BovTO7nDfbeZMcM%3D\", \"https://app.pipefy.com/storage/v1/signed/uploads/85b8084c-57bb-4c2b-a397-28c0c929596e/NDA_ALUGUELDEMAQUINASNEO_IOUPIE.pdf?expires_on=1718110439&signature=p%2F0e2aMoECSpApInyP57HHO8%2BYTwmMgp0eH9wPrczc4%3D\", \"https://app.pipefy.com/storage/v1/signed/uploads/9d000e8b-5726-4c6f-b898-088b83e4c224/NDA_ALUGUELDEMAQUINASNEO_ALLUGATOR.pdf?expires_on=1718110439&signature=sB4%2FgUGJbuJZsmcee%2FKSwR69D9Bx49LGwmRMlIsWdnQ%3D\"]"
                                    },
                                    {
                                        "name": "Data Pitch",
                                        "value": "25/07/2023"
                                    },
                                    {
                                        "name": "Prazo para Priorização",
                                        "value": "25/10/2023 14:30"
                                    },
                                    {
                                        "name": "Responsável",
                                        "value": "[\"Karina Gomide\"]"
                                    },
                                    {
                                        "name": "Qual área sponsor designada para desenvolver a solução?",
                                        "value": "Inovação"
                                    },
                                    {
                                        "name": "Avaliação de startups pitch day",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/c939c0ec-2b89-4e53-8f4a-7207749b039e/Avaliaodasstartups_ALUGUELDEMQUINANEO.pdf?expires_on=1718110439&signature=LlevIPIJYSpZi8xcRw6h1gikbT9%2FJpnybRc5oFSCG5I%3D\"]"
                                    },
                                    {
                                        "name": "Mural de Imersão",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/a5f50170-6f46-4ba2-a876-1d38e7407241/Framework_ALUGUELMQUINANEO_Allu_v1.pdf?expires_on=1718110439&signature=AhjDd6RloHIaO2syBS8imITIsD%2BqsAd0vLRrcZmGMS0%3D\"]"
                                    },
                                    {
                                        "name": "Proposta de Piloto Aprovada?",
                                        "value": "Sim"
                                    },
                                    {
                                        "name": "Data de Priorização do Desafio pelo BEO",
                                        "value": "25/10/2023 14:30"
                                    },
                                    {
                                        "name": "Data de validação do Piloto pelo BEO",
                                        "value": "25/10/2023 14:30"
                                    },
                                    {
                                        "name": "Descreva o Desafio",
                                        "value": "A aquisição de máquinas de café pode ser uma barreira de entrada para novos consumidores - em especial quando se fala de NDG Neo que tem um desembolso maior. Objetivo do projeto é aumentar a penetração de máquinas e, consequentemente, da venda de cápsulas através de um modelo de negócio de aluguel da máquina."
                                    },
                                    {
                                        "name": "Observações - Piloto",
                                        "value": "> Planner: https://tasks.office.com/innoscience.com.br/Home/PlanViews/hKQAhh9xEUycfMmy9z5btWUAH0O9?Type=PlanLink&Channel=Link&CreatedTime=638404083537050000\n\n> Miro: https://miro.com/app/board/uXjVN9IbUaI=/?userEmail=karina.gomide@br.nestle.com&track=true&utm_source=notification&utm_medium=email&utm_campaign=add-to-team-and-board&utm_content=go-to-board\n\n> Site modelo: https://neo-c477c0.webflow.io/\n\n> Site final: cafe.allugator.com \n\n> Copys: https://docs.google.com/document/d/1qx44g5CtpaSkzCINwRaH31LRot6cqW8SWURWk2cU-EU/edit?usp=sharing\n"
                                    },
                                    {
                                        "name": "Email do ponto focal do Negócio",
                                        "value": "mariana.ortenblad@br.nestle.com"
                                    },
                                    {
                                        "name": "Contrato do Piloto",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/0a79834b-f8ee-4862-b86a-58df94aec59e/ContratoPiloto_ALUGUELNEO_ALLU.pdf?expires_on=1718110439&signature=nfV1cKC%2FlS4xn581tSRhdWBkfiKerm7efeoULWYEanU%3D\"]"
                                    },
                                    {
                                        "name": "Documentos de Startups",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/16561f7a-b20e-42aa-b52c-b3375ef67c2b/Pitchdeck_ALUGUELDEMQUINANEO_ALLU.pdf?expires_on=1718110439&signature=%2BPfJkp0Zyxxav3rd8WTj%2Fh530Be3NLj6Pjx9LTpFGo4%3D\", \"https://app.pipefy.com/storage/v1/signed/uploads/806ad41a-f559-4b97-a41c-9f745c87ae77/Pitchdeck_ALUGUELDEMQUINANEO_TUIM.pdf?expires_on=1718110439&signature=2lg31e2KAZqfkA4ClFkxB6wrzLAcw78BAuugq9Kc%2BKU%3D\", \"https://app.pipefy.com/storage/v1/signed/uploads/c6cbab67-34fd-42c4-900c-3d1728fd6588/Pitchdeck_ALUGUELDEMQUINANEO_IOUPIE.pdf?expires_on=1718110439&signature=Lsru74iJbAfgfphJPStVmi0%2BaBKGD%2BZtMfTM%2F8voJb8%3D\"]"
                                    },
                                    {
                                        "name": "Data do Demoday",
                                        "value": "21/05/2024"
                                    },
                                    {
                                        "name": "Data de Kick Off do Projeto",
                                        "value": "18/12/2023"
                                    },
                                    {
                                        "name": "Apresentação do Demoday",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/0bc40290-92c4-485a-a0b3-6df577514351/Demoday_ALUGUELDEMAQUINASNEO_ALLU.pptx?expires_on=1718110439&signature=om9qmGhcfZ%2FeLBO%2FJrjADjzxxQvY1%2B%2FAPwd4azTD4zg%3D\"]"
                                    },
                                    {
                                        "name": "Observações - Demoday",
                                        "value": "Foram definidas 3 frentes de trabalho:\n1 - Escala do modelo de aluguel em 3 atividades: incluir 3 modelos de máquinas G1, desenhar um modelo de relacionamento com consumidores para apoiar o time Allu no esclarecimento do uso e vantagens das máquinas ofertadas, e desenhar um modelo de integração com os planos de assinatura de cápsulas ofertados no ecommerce\n\n2 - Dar continuidade com a exploração das propostas com players de aluguel de grande porte (Itaú e Porto Seguro) e novas frentes de interesse (Ex: Hotelaria)\n\n3 - Incluir uma demanda de piloto para modelo de aluguel B2B para a captação do Panela Startups 2024"
                                    },
                                    {
                                        "name": "Email do Solicitante",
                                        "value": "karina.gomide@br.nestle.com"
                                    },
                                    {
                                        "name": "Como este desafio está afetando a companhia?",
                                        "value": "A oportunidade apresentada pela área de cafés dá luz a dificuldade de troca do parque de máquinas para consumidores de máquinas de café de pequeno porte. Como há um hábito construído de consumo de café que normalmente vem associado ao conhecimento do uso de uma máquina e um estoque de cápsulas associadas à máquina de café anteriormente adquirida, há barreiras para entrada da nova máquina Dolce Gusto Neo no mercado.\nO foco não é aumentar as vendas de máquinas Neo necessariamente, mas sim garantir o aumento do parque ativo destas e garantir a mudança de hábito para uma proposta de consumo de café que leve em conta os requisitos de sustentabilidade que Neo carrega."
                                    },
                                    {
                                        "name": "Qual público mais impactado atualmente por este desafio?.",
                                        "value": "[\"Consumidor Final\"]"
                                    },
                                    {
                                        "name": "Quais objetivos a área pretende alcançar ao resolver o desafio?",
                                        "value": "Aumento do parque ativo de máquinas Dolce Gusto Neo"
                                    }
                                ],
                                "labels": [
                                    {
                                        "name": "Inovação"
                                    }
                                ],
                                "phases_history": [
                                    {
                                        "phase": {
                                            "name": "Start form"
                                        },
                                        "firstTimeIn": "2023-08-22T18:04:56+00:00",
                                        "lastTimeOut": "2023-08-22T18:04:57+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "01. Backlog"
                                        },
                                        "firstTimeIn": "2023-08-22T18:04:57+00:00",
                                        "lastTimeOut": "2023-12-01T20:17:53+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "02. Discovery"
                                        },
                                        "firstTimeIn": "2023-08-23T21:20:08+00:00",
                                        "lastTimeOut": "2023-12-15T14:20:27+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "03. Proposta de Solução e Experimentação"
                                        },
                                        "firstTimeIn": "2023-10-23T18:48:57+00:00",
                                        "lastTimeOut": null
                                    }
                                ],
                                "url": "http://app.pipefy.com/pipes/303523960#cards/779894151"
                            }
                        },
                        {
                            "cursor": "WyIyMDIzLTA4LTIzIDIwOjI3OjIwLjYzMTUzMTAwMCBVVEMiLCI1Ljc1Iiw3ODA2NDcyNDJd",
                            "node": {
                                "id": "780647242",
                                "title": "INMETRO_Neoway",
                                "assignees": [
                                    {
                                        "id": "303172994"
                                    }
                                ],
                                "comments": [],
                                "comments_count": 0,
                                "current_phase": {
                                    "name": "06. Incorporado"
                                },
                                "done": false,
                                "due_date": "2023-09-30T00:00:00Z",
                                "fields": [
                                    {
                                        "name": "Quantas áreas estão sendo impactadas por este desafio?",
                                        "value": "1 a 2"
                                    },
                                    {
                                        "name": "Área Requisitante",
                                        "value": "Legal and Public Affairs"
                                    },
                                    {
                                        "name": "Email do Solicitante",
                                        "value": "karina.gomide@br.nestle.com"
                                    },
                                    {
                                        "name": "Email do ponto focal do Negócio",
                                        "value": "daniel.morelli@br.nestle.com"
                                    },
                                    {
                                        "name": "Descreva o Desafio",
                                        "value": "Há uma hipótese pelo time jurídico Nestlé de que a avaliação de limites de gramatura de produtos realizada pelas inspeções INMETRO não considera corretamente variações de lotes representativos, ou seja, são coletados itens variados de um mesmo local, mas que, mesmo sendo itens diferentes, foram produzidos de um único lote Nestlé. \nA startup Neoway implementou uma solução de análise dos dados fabris e comparação com os detalhes dos processos judiciais para geração de indicadores internos e fornecimento de informações específicas de cada processo para facilitar contestações de multas pelo time jurídico Nestlé."
                                    },
                                    {
                                        "name": "Qual público mais impactado atualmente por este desafio?.",
                                        "value": "[\"Áreas Internas\"]"
                                    },
                                    {
                                        "name": "Quais objetivos a área pretende alcançar ao resolver o desafio?",
                                        "value": "Redução no custo operacional e final de multas por infrações do INMETRO."
                                    },
                                    {
                                        "name": "Como este desafio está afetando a companhia?",
                                        "value": "Hoje diariamente o time jurídico Nestlé recebe mais de 20 processos por inadequação de gramatura de produtos, além do longo tempo que não pode ser evitado em que realizam a inspeção INMETRO, processamento do caso, emissão da multa pelo INMETRO e contestação do time Nestlé o volume de dados a ser analisado e cruzado para a realização da contestação é significativo. Isso dificulta o processo de contestação de multas pela Nestlé, consumindo recursos, aumentando gastos, e prolongando processos como esses que se acumulam.\nO desafio visa otimizar as etapas de análise e contestação reduzindo recursos humanos de análise e aumentando a precisão e força das devolutivas Nestlé. Acreditamos que essas ações trarão redução do número de multas recebidas (pois a força das contenstações e provaram eficazes na redução de multas emitidas pelo INMETRO) e nas causas ganhas pela Nestlé nesses cenários."
                                    },
                                    {
                                        "name": "Qual a receita anual prevista deste incremento?",
                                        "value": "2.500.000,00"
                                    },
                                    {
                                        "name": "Outras informações",
                                        "value": "Considerando o tempo dos próprios processos jurídicos, mesmo com o projeto sendo iniciado hoje o prazo de início de recebimento do retorno é de pelo menos 3 a 5 anos."
                                    },
                                    {
                                        "name": "Responsável",
                                        "value": "[\"Karina Gomide\"]"
                                    },
                                    {
                                        "name": "NDAs",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/f1701a50-7675-40b2-9d7b-03cc4773871e/NDA_INMETRO_NEOWAY.pdf?expires_on=1718110439&signature=XIz8W52KDtKS3nmFLqm5pbjz4N4cneELcQL246EGV%2FY%3D\"]"
                                    },
                                    {
                                        "name": "Qual o principal benefício que uma possível solução a este desafio pode trazer?",
                                        "value": "[\"Eficiência\"]"
                                    },
                                    {
                                        "name": "Qual o valor anual previsto desta eficiência?",
                                        "value": "2.500.000,00"
                                    },
                                    {
                                        "name": "Como se chegou a este benefício (R$)?",
                                        "value": "Redução de multas pagas."
                                    },
                                    {
                                        "name": "Qual área sponsor designada para desenvolver a solução?",
                                        "value": "Inovação"
                                    },
                                    {
                                        "name": "Avaliação de startups pitch day",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/f588cfa8-d766-4729-b718-2761ae047a40/Avaliaodasstartups_INMETROJURDICO.pdf?expires_on=1718110439&signature=EnVpC078f8AWOOXoFMvuOdtve2FeeqSkogCexh2wPFU%3D\"]"
                                    },
                                    {
                                        "name": "Documentos de Startups",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/f6731e84-cee7-4275-9eab-9eeb0a084167/Pitchdeck_INMETROJURDICO_NEOWAY.pdf?expires_on=1718110439&signature=jhkVLxFoagiRtVm%2BoPiw7eudJTQ8J0wjL6Yb8WqPPC4%3D\"]"
                                    },
                                    {
                                        "name": "PO",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/8ece5b4f-9f13-437f-995e-edcfd5a68da7/4571383496_INMETROJURIDICO_NEOWAY.pdf?expires_on=1718110439&signature=sd9iqeYcBOO4YfY89iMbxLA79JAUNevg9%2BvNauoRqug%3D\"]"
                                    },
                                    {
                                        "name": "Proposta de Piloto Aprovada?",
                                        "value": "Sim"
                                    },
                                    {
                                        "name": "Aprovação do Piloto",
                                        "value": "[]"
                                    },
                                    {
                                        "name": "Link do Mural de Imersão",
                                        "value": "https://app.mural.co/t/innoscience7386/m/innoscience7386/1662657768907/e7a83bd955e635b9eea0b9f8ca6600d2da15441d?sender=u1d14ac12ef5c787815528441"
                                    },
                                    {
                                        "name": "Mural de Imersão",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/255f6b0f-d632-4f7f-ae43-2b7453ba7a2e/MuraldeImerso_INMETRO_NEOWAY.pdf?expires_on=1718110439&signature=rWHNJs4S98VuWhKmmle149Lw5aq53Es%2BUIWQ3I1ymPU%3D\"]"
                                    },
                                    {
                                        "name": "Concorrência",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/6cd98d7c-6fbd-468a-82ed-63967be014fa/ConcorrnciaCanvas_INMETRO_NEOWAY.xlsx?expires_on=1718110439&signature=JK4WWUsyECo7Nn2FdbAf4uyy83d66bDmkp7hlvwHYj4%3D\"]"
                                    },
                                    {
                                        "name": "Apresentação do Demoday",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/4a696fa3-8118-40ff-807a-5755a0f05c54/Demoday_INMETRO_NEOWAY.pptx?expires_on=1718110439&signature=RVpm8AZNqRPx48Cc1pBudyZhTV0ko4cjPz9K2xwOivk%3D\"]"
                                    },
                                    {
                                        "name": "Contrato do Piloto",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/d5563c50-6acd-47e3-b7ec-6d314eb8964b/ContratoPiloto_INMETRO_NEOWAY.pdf?expires_on=1718110439&signature=1m0Euqr5QGAPlQMd7xhefpNuleUtIhEwx0niB5pkpD4%3D\"]"
                                    },
                                    {
                                        "name": "Proposta do Piloto",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/989e5252-4937-4b9c-8e29-30e0a320c5b1/PropostaPiloto_INMETRO_NEOWAY.pptx?expires_on=1718110439&signature=iE6uUTZpdOdw6c8V8sXrW6KEQe%2Bj%2BGv44uHB7YGbVp8%3D\"]"
                                    },
                                    {
                                        "name": "Outros Documentos",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/713d0e78-bed8-4ebe-a9cc-5077bd9aae77/PanelaStartupsResultadoDemodayINMETRO.msg?expires_on=1718110439&signature=Suy8KON1GCH4u0FIxP37RKaoE6ritCY9hRDp3ULADdw%3D\", \"https://app.pipefy.com/storage/v1/signed/uploads/e76771a9-b7e4-496f-83cd-768ffd185a26/AprovaodeoramentoPedroVarelaINMETRO-PANELA.msg?expires_on=1718110439&signature=zQPWeoAbYGcBZwHy3ZUgpN11ruRQOuaNkg2MZ96t8Lo%3D\"]"
                                    },
                                    {
                                        "name": "Nome do Desafio",
                                        "value": "INMETRO_Neoway"
                                    },
                                    {
                                        "name": "Subárea",
                                        "value": "Jurídico"
                                    },
                                    {
                                        "name": "Data de validação do Piloto pelo BEO",
                                        "value": "30/09/2023 00:00"
                                    }
                                ],
                                "labels": [
                                    {
                                        "name": "Inovação"
                                    }
                                ],
                                "phases_history": [
                                    {
                                        "phase": {
                                            "name": "Start form"
                                        },
                                        "firstTimeIn": "2023-08-23T20:27:20+00:00",
                                        "lastTimeOut": "2023-08-23T20:27:20+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "01. Backlog"
                                        },
                                        "firstTimeIn": "2023-08-23T20:27:21+00:00",
                                        "lastTimeOut": "2023-08-23T20:29:00+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "02. Discovery"
                                        },
                                        "firstTimeIn": "2023-09-01T19:10:58+00:00",
                                        "lastTimeOut": "2023-12-11T19:09:10+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "03. Proposta de Solução e Experimentação"
                                        },
                                        "firstTimeIn": "2023-08-23T20:37:25+00:00",
                                        "lastTimeOut": "2024-01-24T18:55:26+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "05. Desenvolvimento de Business Case"
                                        },
                                        "firstTimeIn": "2023-09-13T18:36:35+00:00",
                                        "lastTimeOut": "2023-12-05T19:58:33+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "06. Incorporado"
                                        },
                                        "firstTimeIn": "2024-01-24T18:55:26+00:00",
                                        "lastTimeOut": null
                                    }
                                ],
                                "url": "http://app.pipefy.com/pipes/303523960#cards/780647242"
                            }
                        },
                        {
                            "cursor": "WyIyMDIzLTA4LTIzIDIwOjI3OjIxLjExMTU1NjAwMCBVVEMiLCI1Ljc1Iiw3ODA2NDcyNDld",
                            "node": {
                                "id": "780647249",
                                "title": "Decisões Judiciais_Turivius",
                                "assignees": [
                                    {
                                        "id": "303172994"
                                    }
                                ],
                                "comments": [],
                                "comments_count": 0,
                                "current_phase": {
                                    "name": "06. Incorporado"
                                },
                                "done": false,
                                "due_date": null,
                                "fields": [
                                    {
                                        "name": "Área Requisitante",
                                        "value": "Legal and Public Affairs"
                                    },
                                    {
                                        "name": "Email do ponto focal do Negócio",
                                        "value": "rafael.costa@br.nestle.com"
                                    },
                                    {
                                        "name": "Como este desafio está afetando a companhia?",
                                        "value": "Com o grande volume de funcionários e rotação natural de profissionais, há um volume cosiderável de processos trabalistas que a Nestlé sofre todos os anos.\nAcredita-se que o melhor entendimento de detalhes sobre os processos judiciais permite redução do valor médio de acordos realizado pela empresa (valor médio de cada ação) e também na diferença entre o valor geral requerido e o valor final acordado entre as partes (diff = $ pedido - $ final pago)."
                                    },
                                    {
                                        "name": "Quantas áreas estão sendo impactadas por este desafio?",
                                        "value": "1 a 2"
                                    },
                                    {
                                        "name": "Quais objetivos a área pretende alcançar ao resolver o desafio?",
                                        "value": "Aumentar o valor de cost avoidance em processos trabalhistas."
                                    },
                                    {
                                        "name": "Qual público mais impactado atualmente por este desafio?.",
                                        "value": "[\"Áreas Internas\"]"
                                    },
                                    {
                                        "name": "Responsável",
                                        "value": "[\"Karina Gomide\"]"
                                    },
                                    {
                                        "name": "Qual o valor anual previsto desta eficiência?",
                                        "value": "70.000.000,00"
                                    },
                                    {
                                        "name": "Qual o principal benefício que uma possível solução a este desafio pode trazer?",
                                        "value": "[\"Eficiência\"]"
                                    },
                                    {
                                        "name": "NDAs",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/a73859da-670d-45d6-b18a-42f52f8facc7/NDA_DECISESJUDICIAISTRABALHISTAS_TURIVIUS.pdf?expires_on=1718110439&signature=bGwFQx46Fawkg8AUvEIT6cOw0R6R0Ijk6H%2BfFBHquzo%3D\"]"
                                    },
                                    {
                                        "name": "Avaliação de startups pitch day",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/742ff048-093c-4d29-a56b-e8ffb193d33e/Avaliaodasstartups_DECISESJUDICIAISTRABALHISTAS.pdf?expires_on=1718110439&signature=W6wpjCnvnm6B0ZC8DW04xglVKFaTh%2F1LaJ7dqcrAOfU%3D\"]"
                                    },
                                    {
                                        "name": "Documentos de Startups",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/4cfd4d1b-d9c6-4e7d-87c9-4f520fe1e164/Pitchdeck_DECISESJUDICIAISTRABALHISTAS_TURIVIUS.pdf?expires_on=1718110439&signature=7aq8ZReEVug%2BrTceqIu28pLiNW%2BHd2XQMWnYpwsN0xA%3D\"]"
                                    },
                                    {
                                        "name": "Nome do Desafio",
                                        "value": "Decisões Judiciais_Turivius"
                                    },
                                    {
                                        "name": "Subárea",
                                        "value": "Jurídico"
                                    },
                                    {
                                        "name": "Descreva o Desafio",
                                        "value": "Há um alto volume de processos trabalhistas sofridos pela Nestlé. A Turivius oferece um serviço de leitura de decisões judiciais publicadas abertamente nos sites dos TRTs estaduais e, com uma Inteligência Artificial treinada por essas informações, consegue criar um sistema de apoio ao time jurídico Nestlé para aceleração de tratativas em processos trabalhistas.\nA solução já está em rollout interno após ter sido validada em piloto com 2 TRTs.\nFuturamente há a intenção de que a IA sozinha possa tratar cenários simplificados com apenas a supervisão e auditoria humana, mas sem a necessidade de alocação de um advogado.\nProjeto usualmente levado para apresentação em palestras e pode ser divugado."
                                    },
                                    {
                                        "name": "Email do Solicitante",
                                        "value": "karina.gomide@br.nestle.com"
                                    },
                                    {
                                        "name": "Como se chegou a este benefício (R$)?",
                                        "value": "cost avoidance = diferença entre o $ pedido e o $ final pago\n \nCusto médio = valor médio de quanto custa cada ação trabalhista"
                                    }
                                ],
                                "labels": [
                                    {
                                        "name": "Inovação"
                                    }
                                ],
                                "phases_history": [
                                    {
                                        "phase": {
                                            "name": "Start form"
                                        },
                                        "firstTimeIn": "2023-08-23T20:27:21+00:00",
                                        "lastTimeOut": "2023-08-23T20:27:21+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "01. Backlog"
                                        },
                                        "firstTimeIn": "2023-08-23T20:27:21+00:00",
                                        "lastTimeOut": "2023-08-23T20:29:16+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "02. Discovery"
                                        },
                                        "firstTimeIn": "2023-10-31T03:18:41+00:00",
                                        "lastTimeOut": "2024-02-21T13:05:08+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "03. Proposta de Solução e Experimentação"
                                        },
                                        "firstTimeIn": "2023-08-23T20:38:06+00:00",
                                        "lastTimeOut": "2023-12-05T19:42:05+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "05. Desenvolvimento de Business Case"
                                        },
                                        "firstTimeIn": "2023-11-27T16:30:23+00:00",
                                        "lastTimeOut": "2023-11-27T17:29:58+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "06. Incorporado"
                                        },
                                        "firstTimeIn": "2023-11-27T17:29:58+00:00",
                                        "lastTimeOut": null
                                    }
                                ],
                                "url": "http://app.pipefy.com/pipes/303523960#cards/780647249"
                            }
                        },
                        {
                            "cursor": "WyIyMDIzLTA4LTIzIDIwOjI3OjIxLjUwODQyMTAwMCBVVEMiLCIzLjAiLDc4MDY0NzI1OF0",
                            "node": {
                                "id": "780647258",
                                "title": "Triagem de CVs_Pulsifi",
                                "assignees": [
                                    {
                                        "id": "303172994"
                                    }
                                ],
                                "comments": [],
                                "comments_count": 0,
                                "current_phase": {
                                    "name": "03. Proposta de Solução e Experimentação"
                                },
                                "done": false,
                                "due_date": null,
                                "fields": [
                                    {
                                        "name": "Área Requisitante",
                                        "value": "RH"
                                    },
                                    {
                                        "name": "Email do Solicitante",
                                        "value": "karina.gomide@br.nestle.com"
                                    },
                                    {
                                        "name": "Dono do negócio",
                                        "value": "Isa "
                                    },
                                    {
                                        "name": "Email",
                                        "value": "isabela.souza@br.nestle.com"
                                    },
                                    {
                                        "name": "Email do ponto focal do Negócio",
                                        "value": "leticia.sormani@br.nestle.com"
                                    },
                                    {
                                        "name": "Outras informações",
                                        "value": "Sponsor que iniciou o projeto foi o Thiago Gomes."
                                    },
                                    {
                                        "name": "Qual público mais impactado atualmente por este desafio?.",
                                        "value": "[\"Áreas Internas\"]"
                                    },
                                    {
                                        "name": "Quantas áreas estão sendo impactadas por este desafio?",
                                        "value": "1 a 2"
                                    },
                                    {
                                        "name": "Quais objetivos a área pretende alcançar ao resolver o desafio?",
                                        "value": "Redução"
                                    },
                                    {
                                        "name": "Descreva o Desafio",
                                        "value": "Hoje a análise de CVs tem longos processos de análise manual que dificultam agilidade de processamento e possibilitam disparidades de seleção dos melhores candidatos sem equidade de consideração de genero, etnia, etc.\nBuscando maior so de uma ferramenta se apoio para triagem de CVs, com consequente diminuição de horas alocadas de times de RH Nestlé, e aumento de fit cultural e de diversidade entre vaga-candidato. Solução de IA que faça a triagem parametrizável de currículos reduzindo o funil de seleção."
                                    },
                                    {
                                        "name": "Responsável",
                                        "value": "[\"Karina Gomide\"]"
                                    },
                                    {
                                        "name": "Qual o valor anual previsto desta eficiência?",
                                        "value": "6.000.000,00"
                                    },
                                    {
                                        "name": "Qual o principal benefício que uma possível solução a este desafio pode trazer?",
                                        "value": "[\"Eficiência\"]"
                                    },
                                    {
                                        "name": "Como se chegou a este benefício (R$)?",
                                        "value": "Valore estimados de custo de funcionários alocados às tarefas de revisão de CV que serão economizadas."
                                    },
                                    {
                                        "name": "Qual área sponsor designada para desenvolver a solução?",
                                        "value": "Inovação"
                                    },
                                    {
                                        "name": "NDAs",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/e6882b5b-09c3-4e35-9bba-17f74be95c42/NDA_TRIAGEMDECVS_PULSIFI.pdf?expires_on=1718110439&signature=fn3YXUBkdYD6xej6s%2BGvQGZvF%2BVvB3ADSNERZQRMXH4%3D\"]"
                                    },
                                    {
                                        "name": "Avaliação de startups pitch day",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/74253b7a-438b-4d4f-b2ef-d9c0298fb76e/Avaliaodasstartups_TRIAGEMDECVS.pdf?expires_on=1718110439&signature=aMA9JcsIEw0fEsrrLDrUyacykFSRx%2BlUCiiaiTK04to%3D\"]"
                                    },
                                    {
                                        "name": "Documentos de Startups",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/7791595e-9e7c-49dd-b00e-ef582ef1378b/Pitchdeck_TRIAGEMDECVS_PULSIFI.pdf?expires_on=1718110439&signature=56UI3vifychPs8ZjMU5Kw0cpvNr%2BFvaCMAeat6cQJAY%3D\"]"
                                    },
                                    {
                                        "name": "Proposta de Piloto Aprovada?",
                                        "value": "Sim"
                                    },
                                    {
                                        "name": "Nome do Desafio",
                                        "value": "Triagem de CVs_Pulsifi"
                                    },
                                    {
                                        "name": "Subárea",
                                        "value": "RH"
                                    }
                                ],
                                "labels": [
                                    {
                                        "name": "Inovação"
                                    }
                                ],
                                "phases_history": [
                                    {
                                        "phase": {
                                            "name": "Start form"
                                        },
                                        "firstTimeIn": "2023-08-23T20:27:21+00:00",
                                        "lastTimeOut": "2023-08-23T20:27:21+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "01. Backlog"
                                        },
                                        "firstTimeIn": "2023-08-23T20:27:21+00:00",
                                        "lastTimeOut": "2023-08-23T20:29:28+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "02. Discovery"
                                        },
                                        "firstTimeIn": "2023-10-31T03:18:16+00:00",
                                        "lastTimeOut": "2023-12-11T18:51:29+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "03. Proposta de Solução e Experimentação"
                                        },
                                        "firstTimeIn": "2023-12-11T18:51:29+00:00",
                                        "lastTimeOut": null
                                    },
                                    {
                                        "phase": {
                                            "name": "05. Desenvolvimento de Business Case"
                                        },
                                        "firstTimeIn": "2023-08-23T20:39:14+00:00",
                                        "lastTimeOut": "2023-12-05T19:57:00+00:00"
                                    }
                                ],
                                "url": "http://app.pipefy.com/pipes/303523960#cards/780647258"
                            }
                        },
                        {
                            "cursor": "WyIyMDIzLTA4LTIzIDIwOjI3OjIxLjkwODU4MDAwMCBVVEMiLCI0LjAiLDc4MDY0NzI2NF0",
                            "node": {
                                "id": "780647264",
                                "title": "Cacau_Saneamento básico_Zero Esgoto",
                                "assignees": [
                                    {
                                        "id": "303172994"
                                    }
                                ],
                                "comments": [],
                                "comments_count": 0,
                                "current_phase": {
                                    "name": "04. Implementação"
                                },
                                "done": false,
                                "due_date": null,
                                "fields": [
                                    {
                                        "name": "Subárea",
                                        "value": "Confectionary"
                                    },
                                    {
                                        "name": "Mapeamento do Processo ou jornada atual dos usuários a qual este desafio ou problema ataca",
                                        "value": "acompanhamento pelo time de cacau (Agrícola e ESG). Processo não definido"
                                    },
                                    {
                                        "name": "Detalhe quem está sendo impactado pelo desafio",
                                        "value": "A falta de saneamento básico nas propriedades de cacau traz impactos na qualidade de vida de quem vive e trabalha nas cadeias"
                                    },
                                    {
                                        "name": "Área Requisitante",
                                        "value": "Confectionery"
                                    },
                                    {
                                        "name": "Email do Solicitante",
                                        "value": "karina.gomide@br.nestle.com"
                                    },
                                    {
                                        "name": "Email do ponto focal do Negócio",
                                        "value": "Rafael.Costa@BR.nestle.com"
                                    },
                                    {
                                        "name": "Quais objetivos a área pretende alcançar ao resolver o desafio?",
                                        "value": "Aumentar o volume de propriedades de cacau mais próximas de se certificarem no NCP."
                                    },
                                    {
                                        "name": "Como este desafio está afetando a companhia?",
                                        "value": "A Nestlé através do Nestlé Cocoa Plan fomenta boas práticas agrícolas nos cultivos de cacau, boas condições de vida para todas as pessoas envolvidas na cadeia produtiva e produção de cacau de qualidade. Internamente temos metas de tornar a nossa cadeia de cacau sustentável, aumentar o volume de propriedades dentro do programa NCP e divulgar esse diferencial competitivo pelo frente \"Re\", como já é feito com a linha regular de Kitkat.\nVisando acelerar a capacitação de propriedades dentro dos critérios do NCP, a Nestlé visa investir em soluções de baixo custo para implementação de saneamento básico em fazendas de cacau."
                                    },
                                    {
                                        "name": "Qual público mais impactado atualmente por este desafio?.",
                                        "value": "[\"Fornecedores\"]"
                                    },
                                    {
                                        "name": "Quantas áreas estão sendo impactadas por este desafio?",
                                        "value": "1 a 2"
                                    },
                                    {
                                        "name": "Responsável",
                                        "value": "[\"Karina Gomide\"]"
                                    },
                                    {
                                        "name": "Qual o valor anual previsto de risco dessa reputação?",
                                        "value": "0,00"
                                    },
                                    {
                                        "name": "Qual o principal benefício que uma possível solução a este desafio pode trazer?",
                                        "value": "[\"Compliance/Legal/SHE\", \"Reputação/IQEM\"]"
                                    },
                                    {
                                        "name": "NDAs",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/21aeb7ec-48fc-4d2e-90e0-9346e54ec50f/NDA_SANEAMENTOBSICOCACAU_ZEROESGOTO.pdf?expires_on=1718110439&signature=bVd2Z04q1TaepOtLzgD67aUloPpfZT9WbUKVH8Bicvo%3D\"]"
                                    },
                                    {
                                        "name": "Avaliação de startups pitch day",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/9deb4694-98b7-4b7e-bfc3-4ca774c29536/AvaliaodasStartups_SANEAMENTOBSICO.png?expires_on=1718110439&signature=YqjPL9JLQng%2BMuLH7ZyKF%2B2yK3wj0cqFFYefW8fiCIg%3D\"]"
                                    },
                                    {
                                        "name": "Documentos de Startups",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/2e8a3685-ca06-49f0-9ddf-b9ac43a700e9/Pitchdeck_SANEAMENTOBSICOCACAU_ZEROESGOTO.pdf?expires_on=1718110439&signature=SMCj39Sx%2BitU1RTnH2cfbzVD3a%2F58%2Baa2f%2Fe9C7GhQo%3D\"]"
                                    },
                                    {
                                        "name": "Proposta de Piloto Aprovada?",
                                        "value": "Sim"
                                    },
                                    {
                                        "name": "PO",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/42699f58-32df-40c8-99be-835db8f39b1d/4572721068_SANEAMENTOBSICOCACAU_ZEROESGOTO.pdf?expires_on=1718110439&signature=4D%2FtE7jjMBoalaWa4I7JI0LwMv9mfcZWw%2BMJXtD%2FB5s%3D\"]"
                                    },
                                    {
                                        "name": "NFs",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/c6e695af-142c-45d3-9ab0-340004fc017b/266979_SANEAMENTOBSICOCACAU_ZEROESGOTO.pdf?expires_on=1718110439&signature=RVREEA7eN9WymSFCI0%2FfiyGPGAg85mcJhX9S1C0GuCg%3D\"]"
                                    },
                                    {
                                        "name": "Aprovação do Piloto",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/5ae87052-b937-4715-a6b9-3714b933baf7/AprovaoPiloto_SANEAMENTOCACAU_ZEROESGOTO.msg?expires_on=1718110439&signature=bp0phdtrPtKeVUtnSNSvXBZtD8O6%2FtFxdygFno00nk8%3D\"]"
                                    },
                                    {
                                        "name": "Contrato do Piloto",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/1dbca787-29a5-4618-98df-b532610f10a6/ContratoPiloto_SANEAMENTOBSICO_ZEROESGOTO.pdf?expires_on=1718110439&signature=OwEuvcOsLzvLjMH2vXiAVGeEez8KRKfIoRj5ztHs2c0%3D\"]"
                                    },
                                    {
                                        "name": "Data de validação do Piloto pelo BEO",
                                        "value": "23/08/2023 00:00"
                                    },
                                    {
                                        "name": "Outros Documentos",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/35aaa466-6400-467f-8db5-37fab2fa4d77/4573372017-PagamentodetestesdeguaZeroEsgoto-ZEROESGOTO.pdf?expires_on=1718110439&signature=a6dqjdyd%2FH7LLzkLk1iLYrzL16MsldDsA29UvsHxoZ0%3D\"]"
                                    },
                                    {
                                        "name": "Nome do Desafio",
                                        "value": "Cacau_Saneamento básico_Zero Esgoto"
                                    },
                                    {
                                        "name": "Descreva o Desafio",
                                        "value": "Solução alternativa de saneamento básico a cadeia de cacau. Foram implantadas mini estações de tratamento de esgoto (ETEs) que a partir de uma solução de filtração mecânica e tratamento biológico torna os resíduos de esgoto em água tipo 2 (equivalente à água da chuva) dentro dos padrões do CONAMA."
                                    }
                                ],
                                "labels": [
                                    {
                                        "name": "Inovação"
                                    }
                                ],
                                "phases_history": [
                                    {
                                        "phase": {
                                            "name": "Start form"
                                        },
                                        "firstTimeIn": "2023-08-23T20:27:21+00:00",
                                        "lastTimeOut": "2023-08-23T20:27:22+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "01. Backlog"
                                        },
                                        "firstTimeIn": "2023-08-23T20:27:22+00:00",
                                        "lastTimeOut": "2023-08-23T20:29:57+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "02. Discovery"
                                        },
                                        "firstTimeIn": "2023-09-01T19:12:40+00:00",
                                        "lastTimeOut": "2023-12-06T14:54:06+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "03. Proposta de Solução e Experimentação"
                                        },
                                        "firstTimeIn": "2023-08-23T20:40:00+00:00",
                                        "lastTimeOut": "2024-02-21T13:16:18+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "04. Implementação"
                                        },
                                        "firstTimeIn": "2024-02-21T13:16:18+00:00",
                                        "lastTimeOut": null
                                    },
                                    {
                                        "phase": {
                                            "name": "05. Desenvolvimento de Business Case"
                                        },
                                        "firstTimeIn": "2023-10-05T18:42:45+00:00",
                                        "lastTimeOut": "2023-11-27T17:32:11+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "06. Incorporado"
                                        },
                                        "firstTimeIn": "2023-11-27T17:32:11+00:00",
                                        "lastTimeOut": "2023-12-06T14:52:58+00:00"
                                    }
                                ],
                                "url": "http://app.pipefy.com/pipes/303523960#cards/780647264"
                            }
                        },
                        {
                            "cursor": "WyIyMDIzLTA4LTIzIDIwOjI3OjIyLjQzMDAxMTAwMCBVVEMiLCIxMS41Iiw3ODA2NDcyNzBd",
                            "node": {
                                "id": "780647270",
                                "title": "Água para Todos",
                                "assignees": [
                                    {
                                        "id": "303172994"
                                    }
                                ],
                                "comments": [],
                                "comments_count": 0,
                                "current_phase": {
                                    "name": "08. Post-Mortem Piloto"
                                },
                                "done": false,
                                "due_date": "2022-12-16T15:45:00Z",
                                "fields": [
                                    {
                                        "name": "Área Requisitante",
                                        "value": "Confectionery"
                                    },
                                    {
                                        "name": "Avaliação de startups pitch day",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/ec3ea6b6-49d3-450e-8e09-2bf2d89cf806/Avaliaodasstartups_AGUAPARATODOS.pptx?expires_on=1718110439&signature=3h8Ka%2BwTXKJ8y2r%2Fm3wvJZIXrwJpf7ONa4AkPauKIfw%3D\"]"
                                    },
                                    {
                                        "name": "Responsável",
                                        "value": "[\"Karina Gomide\"]"
                                    },
                                    {
                                        "name": "Link do Mural de Imersão",
                                        "value": "https://app.mural.co/t/innoscience7386/m/innoscience7386/1670099107211/f6d3b51f0801d8ddfa62c10a4cab31994c54e0d6?sender=u1d14ac12ef5c787815528441  "
                                    },
                                    {
                                        "name": "Mural de Imersão",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/bbadc4f4-9b95-4ed1-a52d-a20c40653548/MuraldeImerso_AGUAPARATODOS_AGUACAMELO.pdf?expires_on=1718110439&signature=BQkI5RaO%2FfdaxLIyXwf2Omvb82%2Bdv%2FXtha9PPnQUO0M%3D\"]"
                                    },
                                    {
                                        "name": "Proposta do Piloto",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/c1285b25-cc23-4e4b-aab9-f293b89f9024/PropostaPiloto_AGUAPARATODOS_AGUACAMELO.pptx?expires_on=1718110439&signature=3pG%2FdAUgrB5qNWBAEYkcm%2BxMRSn5YAxyA%2F2qoIvcVe0%3D\"]"
                                    },
                                    {
                                        "name": "Contrato do Piloto",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/6da7d91a-db0f-4ed3-b28f-3208a29b6ff0/ContratoPiloto_AGUAPARATODOS_AGUACAMELO.pdf?expires_on=1718110439&signature=likNXwOU%2BdygKn4vloI5h8FA7IWFdYoKpBat435rLHc%3D\"]"
                                    },
                                    {
                                        "name": "PO",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/f214e660-11e0-4dc4-b4de-f43614ca01fe/4571564771Aguacamelo-Aguaparatodos.pdf?expires_on=1718110439&signature=%2BPH7O%2Bn7XfBvrD3O9mkTFBTaCYsIY4yELCHbo4W6IMw%3D\"]"
                                    },
                                    {
                                        "name": "Quem será o responsável em desenvolver a proposta de solução?",
                                        "value": "[\"Karina Gomide\"]"
                                    },
                                    {
                                        "name": "Apresentação do Demoday",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/951384cb-337d-434c-a3b8-79ac40daca2c/Demoday_AGUAPARATODOS_AGUACAMELO.pptx?expires_on=1718110439&signature=%2F%2Fc1mf59o5AkVHNGhwa0h9U2WZEjgr5iuSshQAUCF9k%3D\"]"
                                    },
                                    {
                                        "name": "Data do Demoday",
                                        "value": "23/08/2023"
                                    },
                                    {
                                        "name": "Concorrência",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/16207b91-13ec-4d9f-91ff-b3324438206d/ConcorrnciaCanvas_GUAPARATODOS_GUACAMELO.xlsx?expires_on=1718110439&signature=JjawzLj9ujhedkbyuwx5jG8kA%2Fu4veQPoiws%2F%2BodaAk%3D\"]"
                                    },
                                    {
                                        "name": "Qual o principal benefício que uma possível solução a este desafio pode trazer?",
                                        "value": "[\"Compliance/Legal/SHE\", \"Reputação/IQEM\"]"
                                    },
                                    {
                                        "name": "Qual o valor anual previsto de risco dessa reputação?",
                                        "value": "0,00"
                                    },
                                    {
                                        "name": "NDAs",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/5b1c1ee8-d910-4fe3-b033-c1d5c6fe69ac/NDA_GUAPARATODOS_GUACAMELO.pdf?expires_on=1718110439&signature=OIrOgVkftgEFeeMlaZmKuxGmGeHSdqWyUF7hTqmessE%3D\"]"
                                    },
                                    {
                                        "name": "Documentos de Startups",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/38ec38a4-e8ac-48b9-a734-13a16efb505a/AtestadodeTitularidade-AguaCamelo.pdf?expires_on=1718110439&signature=tB54d5AYRRjylLoGJ8kroRVUQIjobIPgVxsq74ri82A%3D\", \"https://app.pipefy.com/storage/v1/signed/uploads/36265ee2-590e-47cc-a6a7-6451c7fe0dd6/CNPJ-AguaCamelo.pdf?expires_on=1718110439&signature=jbP0%2F9fbhwlvKd23NformtKqu3S6%2BHMuxuZrqf4n78k%3D\", \"https://app.pipefy.com/storage/v1/signed/uploads/5a27e0f5-5c6b-408b-970c-3afbbd35f4c2/FormsdecadastroAguaCamelo.xml?expires_on=1718110439&signature=wIa%2Ffny2D0aYjeseaAZejrYO0pZlHhdA0aW3eK6XeA4%3D\", \"https://app.pipefy.com/storage/v1/signed/uploads/1619d377-268a-4bba-91b3-bd0efa2bbabf/INSCRIOESTADUAL-guaCamelo.pdf?expires_on=1718110439&signature=758JQ9K8jnD4R6EWRBVGueUX2I49WWntVKyCInap3tg%3D\", \"https://app.pipefy.com/storage/v1/signed/uploads/086ba704-a8bc-44a0-97e0-d12d4f9ea679/Pitchdeck_GUAPARATODOS_GUACAMELO.pdf?expires_on=1718110439&signature=EjUFhssowSqY9Y%2B5Ud60mYEWdew%2B%2FLVm4dJfBuHYOwo%3D\"]"
                                    },
                                    {
                                        "name": "Proposta de Piloto Aprovada?",
                                        "value": "Sim"
                                    },
                                    {
                                        "name": "Data de Priorização do Desafio pelo BEO",
                                        "value": "16/12/2022 15:45"
                                    },
                                    {
                                        "name": "Data de validação do Piloto pelo BEO",
                                        "value": "16/12/2022 15:45"
                                    },
                                    {
                                        "name": "Aprovação do Piloto",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/514fe6d8-2e95-4081-b04c-1ab998cc64dc/AprovaoPiloto_GUAPARATODOS_GUACAMELO.msg?expires_on=1718110439&signature=QPMx5AhA%2FuvMn2SW2M4ydtepPzlrFZyLdq7C4SBl5Rg%3D\"]"
                                    },
                                    {
                                        "name": "NFs",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/3b0d1c53-575c-49bd-8f40-892e037a3034/07_GUAPARATODOS_GUACAMELO.pdf?expires_on=1718110439&signature=eaYs9Lj%2BRKeLd4n2v9DAzzs1qhAfaq1klhkgqryHl3o%3D\"]"
                                    },
                                    {
                                        "name": "Nome do Desafio",
                                        "value": "Cacau_Água_Água Camelo"
                                    },
                                    {
                                        "name": "Subárea",
                                        "value": "Chocolates"
                                    },
                                    {
                                        "name": "Descreva o Desafio",
                                        "value": "Solução alternativa  de transformação de água potável para regiões de difícil acesso"
                                    },
                                    {
                                        "name": "Email do Solicitante",
                                        "value": "karina.gomide@br.nestle.com"
                                    },
                                    {
                                        "name": "Email do ponto focal do Negócio",
                                        "value": "bruna.simone@br.nestle.com"
                                    },
                                    {
                                        "name": "Como este desafio está afetando a companhia?",
                                        "value": "A inexistência de mecânismos de obtenção de água potável em propriedades de cacau dificulta a inclusão dessas propriedades no programa Nestlé Cocoa Plan (NCP) impedindo o atingimento das metas sociais estabelecidas de obtenção de 20mil propriedades de cacau aceitas nos critérios do NCP, conforme meta para 2025 e garantindo uma cadeia de cacau sustentável para a Nestlé na mesma data."
                                    },
                                    {
                                        "name": "Quais objetivos a área pretende alcançar ao resolver o desafio?",
                                        "value": "Testar uma solução existente e/ou adaptada para fácil e rápida implementação de mecânismos de obtenção de água tratada."
                                    },
                                    {
                                        "name": "Qual público mais impactado atualmente por este desafio?.",
                                        "value": "[\"Fornecedores\"]"
                                    },
                                    {
                                        "name": "Quantas áreas estão sendo impactadas por este desafio?",
                                        "value": "3 a 4"
                                    },
                                    {
                                        "name": "Outras informações",
                                        "value": "Este projeto foi criado para a aceleração do programa Nestlé Cocoa Plan (NCP) no Brasil. Desde a sua concepção não é desejado que, na modelagem definida, esta solução será a garantia de atingimento da meta de NCP, não há garantia de que a propriedade estará apta em todos os critérios necessários para ser incluída no NCP, e não é definido que a escala seja um comprometimento da Nestlé (seja corporativamente ou como área de negócio)."
                                    }
                                ],
                                "labels": [
                                    {
                                        "name": "Inovação"
                                    }
                                ],
                                "phases_history": [
                                    {
                                        "phase": {
                                            "name": "Start form"
                                        },
                                        "firstTimeIn": "2023-08-23T20:27:22+00:00",
                                        "lastTimeOut": "2023-08-23T20:27:22+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "01. Backlog"
                                        },
                                        "firstTimeIn": "2023-08-23T20:27:22+00:00",
                                        "lastTimeOut": "2023-08-23T20:30:40+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "02. Discovery"
                                        },
                                        "firstTimeIn": "2023-09-01T19:15:26+00:00",
                                        "lastTimeOut": "2023-12-15T13:27:17+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "03. Proposta de Solução e Experimentação"
                                        },
                                        "firstTimeIn": "2023-08-23T20:42:12+00:00",
                                        "lastTimeOut": "2024-02-21T13:03:33+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "07. Não Priorizados"
                                        },
                                        "firstTimeIn": "2023-11-27T16:23:40+00:00",
                                        "lastTimeOut": "2023-12-06T14:50:45+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "08. Post-Mortem Piloto"
                                        },
                                        "firstTimeIn": "2024-02-21T13:03:33+00:00",
                                        "lastTimeOut": null
                                    }
                                ],
                                "url": "http://app.pipefy.com/pipes/303523960#cards/780647270"
                            }
                        },
                        {
                            "cursor": "WyIyMDIzLTA4LTIzIDIwOjI3OjIzLjA0NDg3NTAwMCBVVEMiLCIzLjAiLDc4MDY0NzI3OF0",
                            "node": {
                                "id": "780647278",
                                "title": "Cacau_Produtividade_Labor Rural",
                                "assignees": [
                                    {
                                        "id": "303172994"
                                    }
                                ],
                                "comments": [],
                                "comments_count": 0,
                                "current_phase": {
                                    "name": "03. Proposta de Solução e Experimentação"
                                },
                                "done": false,
                                "due_date": null,
                                "fields": [
                                    {
                                        "name": "Área Requisitante",
                                        "value": "Confectionery"
                                    },
                                    {
                                        "name": "Email do ponto focal do Negócio",
                                        "value": "eric.costa@br.nestle.com"
                                    },
                                    {
                                        "name": "Como este desafio está afetando a companhia?",
                                        "value": "A Nestlé através do Nestlé Cocoa Plan fomenta boas práticas agrícolas nos cultivos de cacau, boas condições de vida para todas as pessoas envolvidas na cadeia produtiva e produção de cacau de qualidade. Internamente temos metas de tornar a nossa cadeia de cacau sustentável e divulgar esse diferencial competitivo pelo frente \"Re\", como já é feito com a linha regular de Kitkat.\nVisando aumentar o volume de cacau sustentável disponibilizado pelas fazendas parceiras Nestlé ou que já façam parte do programa NCP, precisamos de uma solução de suporte às propriedades de cacau que vise aumentar a produtividade destas."
                                    },
                                    {
                                        "name": "Qual público mais impactado atualmente por este desafio?.",
                                        "value": "[\"Fornecedores\"]"
                                    },
                                    {
                                        "name": "Quantas áreas estão sendo impactadas por este desafio?",
                                        "value": "1 a 2"
                                    },
                                    {
                                        "name": "Quais objetivos a área pretende alcançar ao resolver o desafio?",
                                        "value": "Aumentar o volume de cacau sustentável nas propriedades parceiras Nestlé."
                                    },
                                    {
                                        "name": "Outras informações",
                                        "value": "O projeto em questão é chamado internamente de \"Mais inteligência, mais cacau\".\nÉ um projeto com valores de investimento e tempo de execução muito mais elevados do que o modelo de pilotos que o Panela visa apoiar. Ele foi absorvido a critério de excessão pela relevância da problemática para a área de negócios."
                                    },
                                    {
                                        "name": "Qual o valor anual previsto de risco dessa reputação?",
                                        "value": "5.000,00"
                                    },
                                    {
                                        "name": "Responsável",
                                        "value": "[\"Karina Gomide\"]"
                                    },
                                    {
                                        "name": "Documentos de Startups",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/2d014817-1bd1-443b-8a78-9e2dcd4556b3/Pitchdeck_MAISPRODUTIVIDADEMAISCACAU_LABORRURAL.pdf?expires_on=1718110439&signature=wArOQT87XYH2ACjR%2BWEWtniZgUtPB8RLHM9USQQZDmw%3D\"]"
                                    },
                                    {
                                        "name": "NDAs",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/9e70d3c4-8fdf-487d-907c-39b4e90644f8/NDA_MAISPRODUTIVIDADEMAISCACAU_LABORRURAL.pdf?expires_on=1718110439&signature=95sQZO5ky5AGkfLcNKc97DZp4x26UE8r2hXX31HDtlQ%3D\"]"
                                    },
                                    {
                                        "name": "Avaliação de startups pitch day",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/fe0947a1-79c2-4644-927a-6fe3a720a43e/Avaliaodasstartups_MAISPRODUTIVIDADEMAISCACAU.pdf?expires_on=1718110439&signature=Q5ifyWjHsY1eICnA3Ve4H4f9Lrr5%2FHJrFPduONlOFJY%3D\"]"
                                    },
                                    {
                                        "name": "PO",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/d0f2bc43-79bb-4764-8895-6e3a44892e67/4573045020_MAISINTELIGNCIAMAISCACAU_LABORRURAL.pdf?expires_on=1718110439&signature=U1B4PuzyW3iPVrfxNray1gTOp5QwQuYDjBVXh713nvo%3D\"]"
                                    },
                                    {
                                        "name": "Proposta de Piloto Aprovada?",
                                        "value": "Sim"
                                    },
                                    {
                                        "name": "Aprovação do Piloto",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/4d18bcdd-3baa-4b95-822f-a75693d1916a/AprovaoPiloto_GESTAOCACAU_LABORRURAL.msg?expires_on=1718110439&signature=uIfxoDm%2FRFAQjd7VYzh7Q3ABWX5bNsrrM1RW83oeNFY%3D\"]"
                                    },
                                    {
                                        "name": "Observações - Demoday",
                                        "value": ""
                                    },
                                    {
                                        "name": "Nome do Desafio",
                                        "value": "Cacau_Produtividade_Labor Rural"
                                    },
                                    {
                                        "name": "Subárea",
                                        "value": "Chocolates"
                                    },
                                    {
                                        "name": "Descreva o Desafio",
                                        "value": "Seguindo os princípios do NCP e apoio à evolução de uma das principais cadeias produtoras Nestlé, o projeto visa apoiar fazendas de cacau já inseridas no NCP quanto à gerenciamento das lavouras durante um piloto de 18 meses. A Labor Rural é especialista em gestão de lavouras e oferecerá um programa único focado acompanhamento do plantio de cacau. A Nestlé entende que esse apoio tornará as lavouras de cacau mais rentáveis e eficientes, capacitando o pequeno produtor a melhorar a sua qualidade de vida e se manter na produção de cacau. \nDentro desta visão de programa, acreditamos que a maior inteligência no campo permitirá o fortalecimento das cadeias de cacau no país e enriquecimento da base desta cadeia."
                                    },
                                    {
                                        "name": "Email do Solicitante",
                                        "value": "karina.gomide@br.nestle.com"
                                    }
                                ],
                                "labels": [
                                    {
                                        "name": "Inovação"
                                    }
                                ],
                                "phases_history": [
                                    {
                                        "phase": {
                                            "name": "Start form"
                                        },
                                        "firstTimeIn": "2023-08-23T20:27:23+00:00",
                                        "lastTimeOut": "2023-08-23T20:27:23+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "01. Backlog"
                                        },
                                        "firstTimeIn": "2023-08-23T20:27:23+00:00",
                                        "lastTimeOut": "2023-09-01T19:18:05+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "02. Discovery"
                                        },
                                        "firstTimeIn": "2023-09-01T19:16:35+00:00",
                                        "lastTimeOut": "2023-12-11T18:53:59+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "03. Proposta de Solução e Experimentação"
                                        },
                                        "firstTimeIn": "2023-08-23T20:42:51+00:00",
                                        "lastTimeOut": null
                                    }
                                ],
                                "url": "http://app.pipefy.com/pipes/303523960#cards/780647278"
                            }
                        },
                        {
                            "cursor": "WyIyMDIzLTA4LTIzIDIwOjI3OjIzLjYxODcyMTAwMCBVVEMiLCI0LjAiLDc4MDY0NzI4NF0",
                            "node": {
                                "id": "780647284",
                                "title": "Ferramenta de Saúde Infantil_PickCells",
                                "assignees": [
                                    {
                                        "id": "303172994"
                                    }
                                ],
                                "comments": [],
                                "comments_count": 0,
                                "current_phase": {
                                    "name": "04. Implementação"
                                },
                                "done": false,
                                "due_date": null,
                                "fields": [
                                    {
                                        "name": "Área Requisitante",
                                        "value": "Nutrição"
                                    },
                                    {
                                        "name": "Email do Solicitante",
                                        "value": "karina.gomide@br.nestle.com"
                                    },
                                    {
                                        "name": "Outras informações",
                                        "value": "O projeto foi iniciado pela Tatiana Janovits."
                                    },
                                    {
                                        "name": "Email do ponto focal do Negócio",
                                        "value": "thais.tome@br.nestle.com"
                                    },
                                    {
                                        "name": "Descreva o Desafio",
                                        "value": "A partir da identificação da dor de mães e pais em dúvidas quanto a saúde dos bebês nos primeiros estágios de vida, um motivo que gera essas dúvidas e incentiva o contato direto com o pediatra é o estado do cocô dos bebês.\nA área de Nutrição Infantil identificou esse canal de comunicação já existente que pode ocorrer com longos períodos entre perguntas e respostas, troca de fotos, e alarmes falsos em sua maioria. Foi levantada então a hipóetese de que esse canal, que muitas vezes é o próprio whatsapp, pudesse ser automatizado e otimizado por uso de IA em uma ferramenta de análise automática das fezes do bebê, oferecendo um apoio a triagem/ pré-diagnóstico básica."
                                    },
                                    {
                                        "name": "Como este desafio está afetando a companhia?",
                                        "value": "Esse desafio é uma oportunidade identificada pelo time de Nutrição infantil sob uma realidade que já ocorre: pais e mães se comunicam continuamente com pediatras para avaliar saúde de seus bebês enviando fotos de cocô. Esse canal pode ser tornar um canal Nestlé oficial e otimizado para um serviço em um território em faça sentido com o foco da linha de produtos da BU - um lugar que a BU quer ocupar."
                                    },
                                    {
                                        "name": "Quais objetivos a área pretende alcançar ao resolver o desafio?",
                                        "value": "Criação de um serviço de apoio aos pais, mães e pediatras baseado em análises automáticas de imagens de cocôs de bebês."
                                    },
                                    {
                                        "name": "Quantas áreas estão sendo impactadas por este desafio?",
                                        "value": "1 a 2"
                                    },
                                    {
                                        "name": "Qual público mais impactado atualmente por este desafio?.",
                                        "value": "[\"Consumidor Final\"]"
                                    },
                                    {
                                        "name": "Responsável",
                                        "value": "[\"Karina Gomide\"]"
                                    },
                                    {
                                        "name": "Qual a receita anual prevista deste incremento?",
                                        "value": "0,00"
                                    },
                                    {
                                        "name": "Qual o principal benefício que uma possível solução a este desafio pode trazer?",
                                        "value": "[\"Uplift\"]"
                                    },
                                    {
                                        "name": "Como se chegou a este benefício (R$)?",
                                        "value": "Temos uplift de marca, mas ainda não temos receita de produto digital."
                                    },
                                    {
                                        "name": "PO",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/2f6f4e36-d938-4864-a0c2-13cc555c34ea/4571162578_FERRAMENTADESAUDEINFANTIL_PICKCELLS.pdf?expires_on=1718110439&signature=iwXkCdKqsFmxhlJUiXuXCOqilSMcOt9gkaoNocIkGI0%3D\"]"
                                    },
                                    {
                                        "name": "Proposta de Piloto Aprovada?",
                                        "value": "Sim"
                                    },
                                    {
                                        "name": "Outros Documentos",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/f814e5f7-1f8f-4d63-95e1-6b2753d6fde9/2023.07.07_SlidesPR.pptx?expires_on=1718110439&signature=C5trGTGjVRA%2BO%2F6V9V%2FLvUoaYda9Uz3lnmlCWunfPx8%3D\"]"
                                    },
                                    {
                                        "name": "Nome do Desafio",
                                        "value": "Ferramenta de Saúde Infantil_PickCells"
                                    },
                                    {
                                        "name": "Subárea",
                                        "value": "NI"
                                    }
                                ],
                                "labels": [
                                    {
                                        "name": "Inovação"
                                    }
                                ],
                                "phases_history": [
                                    {
                                        "phase": {
                                            "name": "Start form"
                                        },
                                        "firstTimeIn": "2023-08-23T20:27:23+00:00",
                                        "lastTimeOut": "2023-08-23T20:27:23+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "01. Backlog"
                                        },
                                        "firstTimeIn": "2023-08-23T20:27:24+00:00",
                                        "lastTimeOut": "2023-08-23T20:33:10+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "02. Discovery"
                                        },
                                        "firstTimeIn": "2023-10-31T03:18:46+00:00",
                                        "lastTimeOut": "2023-11-27T16:31:28+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "03. Proposta de Solução e Experimentação"
                                        },
                                        "firstTimeIn": "2023-12-11T19:01:03+00:00",
                                        "lastTimeOut": "2024-01-24T18:56:36+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "04. Implementação"
                                        },
                                        "firstTimeIn": "2024-02-21T13:18:29+00:00",
                                        "lastTimeOut": null
                                    },
                                    {
                                        "phase": {
                                            "name": "05. Desenvolvimento de Business Case"
                                        },
                                        "firstTimeIn": "2023-11-27T16:31:28+00:00",
                                        "lastTimeOut": "2024-02-21T13:18:29+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "06. Incorporado"
                                        },
                                        "firstTimeIn": "2023-11-27T17:32:51+00:00",
                                        "lastTimeOut": "2023-12-11T19:01:03+00:00"
                                    }
                                ],
                                "url": "http://app.pipefy.com/pipes/303523960#cards/780647284"
                            }
                        },
                        {
                            "cursor": "WyIyMDIzLTA4LTIzIDIwOjI3OjI0LjE2NTUwMzAwMCBVVEMiLCI1Ljc1Iiw3ODA2NDcyOTBd",
                            "node": {
                                "id": "780647290",
                                "title": "Máquina de Café Professional Braille_Luxxor",
                                "assignees": [
                                    {
                                        "id": "303172994"
                                    }
                                ],
                                "comments": [],
                                "comments_count": 0,
                                "current_phase": {
                                    "name": "06. Incorporado"
                                },
                                "done": false,
                                "due_date": null,
                                "fields": [
                                    {
                                        "name": "Área Requisitante",
                                        "value": "Nestlé Professional"
                                    },
                                    {
                                        "name": "Subárea",
                                        "value": "Nestlé Professional"
                                    },
                                    {
                                        "name": "Email do Solicitante",
                                        "value": "karina.gomide@br.nestle.com"
                                    },
                                    {
                                        "name": "Quantas áreas estão sendo impactadas por este desafio?",
                                        "value": "1 a 2"
                                    },
                                    {
                                        "name": "Qual público mais impactado atualmente por este desafio?.",
                                        "value": "[\"Clientes Externos (Ex.: Varejistas)\", \"Consumidor Final\"]"
                                    },
                                    {
                                        "name": "Quais objetivos a área pretende alcançar ao resolver o desafio?",
                                        "value": "Expandir vendas de máquinas de café Nestlé Professional B2B."
                                    },
                                    {
                                        "name": "Outras informações",
                                        "value": "Projeto iniciado pelo Daniel Gomes como sponsor, passou por Renato Silva, Rodrigo Candido e Felipe Cafalchio\n\"Desenvolvemos junto ao time da panela a placa, a princípio para um cliente específico que tinha em seu quadro de funcionários colaboradores com essa necessidade. Após uma matéria que foi divulgada, outros clientes informaram ter a mesma necessidade e solicitaram a placa. A princípio tinhamos apenas a Accenture, hoje já temos a Comgás também.\" - informação Felipe Cafalchio."
                                    },
                                    {
                                        "name": "Email do ponto focal do Negócio",
                                        "value": "rafael.locatelli@br.nestle.com"
                                    },
                                    {
                                        "name": "Descreva o Desafio",
                                        "value": "As máquinas atuais de café B2B Nestlé Professional não são hoje acessíveis para consumidores com restrições visuais físicas, isso limita o potencial de venda dessas máquinas. Com adaptações de informações em braille e guias para coleta do café (evitando que o consumidor coloque a mão em um local que possa se queimar), as máquinas de café B2B Nestlé Professional podem expandir vendas e entrar em um mercado de nicho com valor agregado."
                                    },
                                    {
                                        "name": "Como este desafio está afetando a companhia?",
                                        "value": "Hoje as máquinhas B2B Nestlé Professional não estão adaptadas para pessoas com limitações físicas visuais, o que limita a oportunidade de venda/consignação. Com essas adaptações conseguirmos expandir nossa cobertura para novos clientes e ocupar um nicho de mercado."
                                    },
                                    {
                                        "name": "Responsável",
                                        "value": "[\"Karina Gomide\"]"
                                    },
                                    {
                                        "name": "Qual a receita anual prevista deste incremento?",
                                        "value": "0,00"
                                    },
                                    {
                                        "name": "Qual o principal benefício que uma possível solução a este desafio pode trazer?",
                                        "value": "[\"Uplift\"]"
                                    },
                                    {
                                        "name": "Como se chegou a este benefício (R$)?",
                                        "value": "Informação ainda não identificada com time de vendas."
                                    },
                                    {
                                        "name": "Apresentação do Demoday",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/d13fb103-839e-45e8-82ea-ae8296aa934a/TABrailleProject_Panela_meetingde24abr2023.pptx?expires_on=1718110439&signature=cVC7t%2FDtFH3wW%2BGLLcStfMFGosu9Eu8oLjx2qFFw6GE%3D\"]"
                                    },
                                    {
                                        "name": "Nome do Desafio",
                                        "value": "Máquina de Café Professional Braille_Luxxor"
                                    }
                                ],
                                "labels": [
                                    {
                                        "name": "Inovação"
                                    }
                                ],
                                "phases_history": [
                                    {
                                        "phase": {
                                            "name": "Start form"
                                        },
                                        "firstTimeIn": "2023-08-23T20:27:24+00:00",
                                        "lastTimeOut": "2023-08-23T20:27:24+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "01. Backlog"
                                        },
                                        "firstTimeIn": "2023-08-23T20:27:24+00:00",
                                        "lastTimeOut": "2023-08-23T20:33:31+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "02. Discovery"
                                        },
                                        "firstTimeIn": "2023-10-31T03:18:51+00:00",
                                        "lastTimeOut": "2023-11-27T16:32:05+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "03. Proposta de Solução e Experimentação"
                                        },
                                        "firstTimeIn": "2024-01-16T18:50:20+00:00",
                                        "lastTimeOut": "2024-01-24T18:56:25+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "05. Desenvolvimento de Business Case"
                                        },
                                        "firstTimeIn": "2023-11-27T16:32:05+00:00",
                                        "lastTimeOut": "2023-11-27T17:32:56+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "06. Incorporado"
                                        },
                                        "firstTimeIn": "2023-11-27T17:32:56+00:00",
                                        "lastTimeOut": null
                                    }
                                ],
                                "url": "http://app.pipefy.com/pipes/303523960#cards/780647290"
                            }
                        },
                        {
                            "cursor": "WyIyMDIzLTA4LTIzIDIwOjI3OjI0LjgxMzAwNTAwMCBVVEMiLCIzLjAiLDc4MDY0NzI5OV0",
                            "node": {
                                "id": "780647299",
                                "title": "Liga Conecta_Umais",
                                "assignees": [
                                    {
                                        "id": "302617520"
                                    },
                                    {
                                        "id": "303172994"
                                    }
                                ],
                                "comments": [],
                                "comments_count": 0,
                                "current_phase": {
                                    "name": "03. Proposta de Solução e Experimentação"
                                },
                                "done": false,
                                "due_date": "2023-05-02T15:30:00Z",
                                "fields": [
                                    {
                                        "name": "Área Requisitante",
                                        "value": "Bebidas e Cereais Família"
                                    },
                                    {
                                        "name": "Email do ponto focal do Negócio",
                                        "value": "Luana.Carvalho@br.nestle.com"
                                    },
                                    {
                                        "name": "Qual o valor anual previsto de risco dessa reputação?",
                                        "value": "5.000,00"
                                    },
                                    {
                                        "name": "Qual público mais impactado atualmente por este desafio?.",
                                        "value": "[\"Clientes Externos (Ex.: Varejistas)\", \"Fornecedores\"]"
                                    },
                                    {
                                        "name": "Quantas áreas estão sendo impactadas por este desafio?",
                                        "value": "1 a 2"
                                    },
                                    {
                                        "name": "Descreva o Desafio",
                                        "value": "Como potencializar  o poder da marca expandindo o impacto da Liga Esportiva NESCAU® via um novo modelo de parcerias? Como migrar de um modelo próprio para apoiar novas parcerias e potencializar a marca NESCAU®?\nO projeto Liga Conecta, vem para complementar o trabalho realizado por Nescau na iniciativa Liga Nescau que já realiza eventos esportivos e infantojuvenis. \nEntendemos que a capacidade do time de Liga Nescau é limitada em pessoas e em budget, e, por isso, desejamos estender ações dessa frente com a contratação de uma empresa que intermedie atividades de pequena ação, visando a conexão entre um patrocinador e uma pequena iniciativa. A Umais já tem experiência em founding de atividades esportivas, e está se propondo a apoiar a Nestlé nesta frente de desenvolvimento de negócio."
                                    },
                                    {
                                        "name": "Como este desafio está afetando a companhia?",
                                        "value": "Com o crescimento de visibilidade que Liga Nescau trouxe para a marca Nescau temos um volume crescente de empresas querendo apoiar as iniciativas e uma série de iniciativas que querem se ligar à Liga. O potencial de valor de marca que ações como essas podem trazer é uma oportunidade de negócio que o time Nescau visa.\nSendo assim, queremos extender a capacidade de ação da Liga, valorando a marca Nescau e fortalecendo o posicionamento da mesma no território de esporte infantojuvenil inclusivo."
                                    },
                                    {
                                        "name": "Quais objetivos a área pretende alcançar ao resolver o desafio?",
                                        "value": "Construir uma rede de iniciativas e patrocinadores de qualidade e se posicionar como centralização de esporte infantojuvenil inclusivo"
                                    },
                                    {
                                        "name": "Data Pitch",
                                        "value": "26/07/2023"
                                    },
                                    {
                                        "name": "Pitch Reverso",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/5c83a72d-fd0f-4683-9a4d-7157ff0191da/Defesadesafio_LIGACONECTA.pptx?expires_on=1718110439&signature=JzI2z5xAcvFHVvEXHBBU8059T0eXr7OQ1NlUfoMpmEA%3D\"]"
                                    },
                                    {
                                        "name": "Defesa do Desafio",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/500edc26-4142-4af7-92be-7bd90b82b8a0/Defesadesafio_LIGACONECTA.pptx?expires_on=1718110439&signature=i4qlg0avFiQQFqdBBBP9FapUqnpDM6wL%2Bvxuwe8Jhsk%3D\"]"
                                    },
                                    {
                                        "name": "Proposta do Piloto",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/d9f9b5bf-0458-453f-9837-534868200518/PropostaPiloto_LIGACONECTA_UMAIS.pdf?expires_on=1718110439&signature=59O8Dxz0jGKcXO6FpF8grxWp2QeDrG3d9nhkvEsQLBY%3D\"]"
                                    },
                                    {
                                        "name": "PO",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/4a2b522f-4f5b-421f-91c2-ca68bdafcbe0/4574113318_LIGACONECTA_UMAIS.pdf?expires_on=1718110439&signature=bGNTrw3kXdBaWxTRByTlqAYS5bxZt%2BdSyvCwUvtDMUA%3D\"]"
                                    },
                                    {
                                        "name": "Qual área sponsor designada para desenvolver a solução?",
                                        "value": "Inovação"
                                    },
                                    {
                                        "name": "Projeto Priorizado?",
                                        "value": "Sim"
                                    },
                                    {
                                        "name": "Proposta de Piloto Aprovada?",
                                        "value": "Sim"
                                    },
                                    {
                                        "name": "NFs",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/b2d654c6-1f79-49e4-a9e4-0ffb98b401aa/3655_LIGACONECTA_UMAIS.pdf?expires_on=1718110439&signature=7yzxQ3K0aiiNjA%2FU5IpHPQmTxfbrJcoHH1g%2Bhst9rcU%3D\"]"
                                    },
                                    {
                                        "name": "Prazo para Priorização",
                                        "value": "02/05/2023 15:30"
                                    },
                                    {
                                        "name": "Responsável",
                                        "value": "[\"Carolina Agostinho Falcoski\", \"Karina Gomide\"]"
                                    },
                                    {
                                        "name": "Avaliação de startups pitch day",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/4e1f4acf-65b7-42b8-a551-94e91d7fa003/Avaliaodasstartups_LIGACONECTANESCAU.pdf?expires_on=1718110439&signature=RvDlN8%2ByzTHDMwEW7U%2FrWOwDw5HUxhONS9%2FCURfBDjA%3D\"]"
                                    },
                                    {
                                        "name": "Documentos de Startups",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/049fe727-2a5a-4eca-9959-cd9190517162/Pitchdeck_LIGACONECTANESCAU_TRACKMOB.pdf?expires_on=1718110439&signature=YH4mLLyIT%2F3sclEIgHxNwh9%2BkHlKxc1M0aTThl833vw%3D\", \"https://app.pipefy.com/storage/v1/signed/uploads/afa73a29-712e-4db6-82d8-e2453c4ffe4a/Pitchdeck_LIGACONECTANESCAU_UMAIS.pdf?expires_on=1718110439&signature=5mu2p0HufUvm8fnDyZG23nC8WwgqCqIxsrgrbSQCSgc%3D\", \"https://app.pipefy.com/storage/v1/signed/uploads/df46f034-71b8-4eec-81eb-9f2a60db4c1a/Pitchdeck_LIGACONECTANESCAU_SPORTI.pdf?expires_on=1718110439&signature=EOLfmaUbchfG6b2JomI4aIB%2FwFCT6TYSmmhqMwzQGqE%3D\"]"
                                    },
                                    {
                                        "name": "Mural de Imersão",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/dc58f047-ea12-41e7-a07c-e4611cc925a2/Framework_LIGACONECTANESCAU_UMAIS_v1.pdf?expires_on=1718110439&signature=gd3cOK9CVspAZ9hyurrHKhX1zvEMXxor0cWLfabmPhA%3D\"]"
                                    },
                                    {
                                        "name": "Concorrência",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/542b0c49-3d5b-46fd-b4bf-b8c78fbdd488/ConcorrnciaCanvas_LIGACONECTA_UMAIS.xlsx?expires_on=1718110439&signature=3pw8c2ylfp1UPO5U38r%2FAIKOsae9CrrqIzFQSilSI84%3D\"]"
                                    },
                                    {
                                        "name": "Observações - Piloto",
                                        "value": "> Planner: https://tasks.office.com/innoscience.com.br/pt-BR/Home/Planner/#/plantaskboard?groupId=cc42a4ec-2d81-466d-86aa-a224f305a813&planId=HO2A0ogFakO-BAEE-sXE_GUABsu6\n\n> Site modelo: https://rafaelandrade.dev/liganescau/"
                                    },
                                    {
                                        "name": "Contrato do Piloto",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/4e790e87-dc80-483e-9437-b4ceaea0796a/ContratoPiloto_LIGACONECTA_UMAIS.pdf?expires_on=1718110439&signature=3qzLErTyJyRmdhCny%2FhSrF%2Fkui2oVaRrv%2BfeKdkZ9QE%3D\"]"
                                    },
                                    {
                                        "name": "NDAs",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/e1a16d79-d40e-4b34-947d-a6366b89a171/NDA_LIGACONECTA_SPORTI.pdf?expires_on=1718110439&signature=sIvag6Ggz5uZrCj8QZLyNH0w%2F0tzX%2FWudFUcMlh1Nhs%3D\", \"https://app.pipefy.com/storage/v1/signed/uploads/197042ab-79e9-4eaf-9284-535f30ee77eb/NDA_LIGACONECTA_UMAIS.pdf?expires_on=1718110439&signature=FOwpVzBoF%2FqiChu8D7JNTip7sCmLzY02W84IoQjE%2BAA%3D\", \"https://app.pipefy.com/storage/v1/signed/uploads/7975fdda-83a9-44bd-aaea-3b9a37daed35/NDA_LIGACONECTA_MEUESPORTE-TRACKMOB.pdf?expires_on=1718110439&signature=oHv9v58aqIfwKgqYGtZ5pkiLepRIbLGfOpLRU9OARJQ%3D\"]"
                                    },
                                    {
                                        "name": "Aprovação do Piloto",
                                        "value": "[]"
                                    },
                                    {
                                        "name": "Data de Priorização do Desafio pelo BEO",
                                        "value": "02/05/2023 15:30"
                                    },
                                    {
                                        "name": "Data de validação do Piloto pelo BEO",
                                        "value": "02/05/2023 15:30"
                                    },
                                    {
                                        "name": "Outros Documentos",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/71bedf4d-aa1f-4e35-bd17-1d570f9b5cb3/PanelaStartups_LigaConectaNESCAU_PitchdeMeiodePiloto.pptx?expires_on=1718110439&signature=RrFf6dOVMk7%2FGO7McCiC2rp37UUpwgyKmOR%2B4CTGQwA%3D\"]"
                                    },
                                    {
                                        "name": "Email do Solicitante",
                                        "value": "karina.gomide@br.nestle.com"
                                    },
                                    {
                                        "name": "Nome do Desafio",
                                        "value": "Liga Conecta_Umais"
                                    },
                                    {
                                        "name": "Subárea",
                                        "value": "Bebidas"
                                    }
                                ],
                                "labels": [
                                    {
                                        "name": "Inovação"
                                    }
                                ],
                                "phases_history": [
                                    {
                                        "phase": {
                                            "name": "Start form"
                                        },
                                        "firstTimeIn": "2023-08-23T20:27:24+00:00",
                                        "lastTimeOut": "2023-08-23T20:27:25+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "01. Backlog"
                                        },
                                        "firstTimeIn": "2023-08-23T20:27:25+00:00",
                                        "lastTimeOut": "2023-12-01T20:03:30+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "02. Discovery"
                                        },
                                        "firstTimeIn": "2023-08-23T21:20:16+00:00",
                                        "lastTimeOut": "2023-12-06T16:21:20+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "03. Proposta de Solução e Experimentação"
                                        },
                                        "firstTimeIn": "2023-10-31T22:44:34+00:00",
                                        "lastTimeOut": null
                                    }
                                ],
                                "url": "http://app.pipefy.com/pipes/303523960#cards/780647299"
                            }
                        },
                        {
                            "cursor": "WyIyMDIzLTA4LTIzIDIwOjI3OjI1LjIxNzI2MDAwMCBVVEMiLCIxLjAiLDc4MDY0NzMwM10",
                            "node": {
                                "id": "780647303",
                                "title": "Pra Valer_SuperOpa",
                                "assignees": [
                                    {
                                        "id": "303172994"
                                    }
                                ],
                                "comments": [
                                    {
                                        "text": "Atividades realizadas pelo time do projeto após reunião dia 07/03: \n\n1.\tREDESENHO DO MODELO D2C: Definir se há um modelo de negócio sustentável financeiramente que se encaixe nos 4 pilares do modelo Pra Valer\nEntendemos que o modelo Pra Valer se define em 4 frentes:\nI.\tExclusividade de salvage / pré salvage\nII.\tModelo itinerante\nIII.\tSer social\nIV.\t(a ser validado) flexibilidade de portifólio – vender tudo que tem incluso produtos de empresas parceiras\n\nCaminhos de ação/definição:\n1.1.\tHá um P&L sustentável financeiramente para o negócio\nBuscar soluções de modais menores para avaliação de custos - time Panela esta falando com Grillo e Cicloway para levantamento de valores alto nível e time Nestlé Stores aplicará esses valores no modelo de P&L para validação.\nCaso o modelo com modal de menor porte seja viável financeiramente, iniciaremos exploração de conexão com outras companhias para inclusão de outros produtos no portfólio Pra Valer.\n\n1.2.\tNão há um P&L sustentável financeiramente para o negócio\nSe o projeto não for sustentável financeiramente o projeto deverá ser encerrado. Essa conclusão foi obtida pela análise individual de cada pilar definidor do modelo Pra Valer:\n\tSe não for um projeto exclusivo de salvage / pré salvage não endereçará a dor inicial de redução de escoamento e redução de salvage e pré salvage\n\tSe alterar o cenário itinerante, necessariamente se tornará um novo canal de vendas e não um canal D2C. Assim, o projeto deveria ser direcionado para outra área dentro de Nestlé focada em canais de vendas\n\tSe não tiver foco social, se tornará um varejo convencional e se iguala a uma área de outlet já existente em Nestlé Stores – estrutura de outlet testada em lojas físicas\n\tPilar de inclusão de outros produtos já não era fundamental na própria etapa de piloto\n\n2.\tESTUDO DE NOVAS PLATAFORMAS DE REDUÇÃO DE WASTE: \nÉ entendido que por definição essas outras frentes endereçariam modelos de negócios B2B ou B2B2C. Assim, a frente de D2C não seria mais a área líder da proposta e uma nova área Nestle deveria ser procurada. Para endereçamento de outros modelos, entendemos que o time D2C já está desenvolvendo em estruturas de lojas físicas.\nNeste cenário também não temos endereçamento de próximas atividades de projeto entre Panela Nestlé e Nestlé Stores.\n\n\nComo resultado das interações entre Panela Nestlé e Grillo foi obtido que o time Grillo tem interesse em um possível relacionamento oferecendo as seguintes condições:\n\tCusto aproximado de R$ 11.000/ mês por Tuktuk elétrico com autonomia de + ou – 50km e não refrigerado – valores negociáveis em escala\n\tO valor descrito acima já incluiria um funcionário que faria as vendas\n\tVolume de espaço por Tuktuk de 100 litros\n\tEstacionamento da própria empresa Grillo a ser utilizado\n\tEstoque precisaria ser coletado na Sede Nestlé para maior eficiência \n\tValores de personalização de marca ou veículos não inclusos\n\nTime Nestlé Stores: incluir essas informações no modelo de P&L para avaliação.\n\nÚltimo tópico que foi tratado internamente entre Panela e Nestlé Stores foi o potencial de aprendizados na frente de atendimento e vendas para periferias. Ficou claro a todos, que essa é uma frente a ser explorada separadamente inicialmente como uma pesquisa de tendências (time do Panela Studio seguirá no avanço dessa frente já com CMI), e depois modulará proposta de negócios que podem ou não acarretar em cenários D2C.\nQuanto ao envolvimento do time Nestlé Stores, é primeiro necessário um alinhamento entre os Heads para priorização ou não deste tema frente o time Stores.\n"
                                    }
                                ],
                                "comments_count": 1,
                                "current_phase": {
                                    "name": "01. Backlog"
                                },
                                "done": false,
                                "due_date": null,
                                "fields": [
                                    {
                                        "name": "Área Requisitante",
                                        "value": "Business Transformation"
                                    },
                                    {
                                        "name": "Email do ponto focal do Negócio",
                                        "value": "fabiane.santos@br.nestle.com"
                                    },
                                    {
                                        "name": "Descreva o Desafio",
                                        "value": "O desafio de redução de desperdício deve ser endereçado por toda a companhia. Assim, visando escoamento de produtos salvage e pré salvage, o time de Nestlé Stores identificou a possibilidade da validação do modelo de negócios de loja itinerante com foco em redução desses itens.\nAlém da condição de trabalho com produtos próximos ao vencimento, buscamos um modal visualmente atrativo (um caminhão-loja personalizado), sustentável (100% elétrico), e que permita atendimento a comunidades mais necessitadas por ser um modelo de venda com desconto mais agressivo (lucro final para stores será zero, e com isso visamos atender favelas com público de renda média mais baixa)."
                                    },
                                    {
                                        "name": "Qual público mais impactado atualmente por este desafio?.",
                                        "value": "[\"Clientes Externos (Ex.: Varejistas)\", \"Consumidor Final\", \"Áreas Internas\"]"
                                    },
                                    {
                                        "name": "Como este desafio está afetando a companhia?",
                                        "value": "O piloto em questão está endereçando múltiplos desafios que veem afetando a companhia de diversas formas:\n- Desperdicio de alimentos que não são vendidos a tempo e precisam ser destruídos\n- Novas formas de chegar produtos Nestlé ao consumidor (novos modelos de varejo e acesso à novos consumidores)\n- Novas modalidades de loja storescom emissões reduzidas"
                                    },
                                    {
                                        "name": "Quais objetivos a área pretende alcançar ao resolver o desafio?",
                                        "value": "Entender a validade do modelo de negócios itinerante e pontual para redução de desperdícios e vendas pontuais"
                                    },
                                    {
                                        "name": "Quantas áreas estão sendo impactadas por este desafio?",
                                        "value": "5 ou mais"
                                    },
                                    {
                                        "name": "Outras informações",
                                        "value": "Neste projeto temos também a participação de outras empresas com funções específicas:\n- TBGreen aluguel e personalização de caminhão em caminhão-loja (personalização realizada pela empresa Next)\n- EDP com fornecimento de energia para carregamento de caminhão e vaga de estacionamento e pernoites\n- Digital Favela para construção de um plano de marketing especializado para o público da favela"
                                    },
                                    {
                                        "name": "NDAs",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/dd472756-8d32-46ef-bcec-49488048367b/NDA_PRAVALER_SUPEROPA.pdf?expires_on=1718110439&signature=ErxiE%2F8DTtwXlWyvM0ZBx5xcwN1z7PGMwjRgWO%2FBYOQ%3D\", \"https://app.pipefy.com/storage/v1/signed/uploads/f5b74f06-5a87-4528-9cda-cfa2fb055249/NDA_PRAVALER_NAPORTA.pdf?expires_on=1718110439&signature=Dxo1V1VixN1ViYmuJ2hr8g4WsWmUZ5OIRZ1Y4p0XYEM%3D\", \"https://app.pipefy.com/storage/v1/signed/uploads/59bc45c1-1157-4cf2-82e2-b82fc4d70719/NDA_PRAVALER_FAVELABRASILXPRESS.pdf?expires_on=1718110439&signature=h4FNVHdNSGX6xcs6MezvlCly10iQeHmm2Kw9aR%2B9Myw%3D\", \"https://app.pipefy.com/storage/v1/signed/uploads/0e5d38f4-24c1-42bb-a19a-9795e686976a/NDA_PRAVALER_TRUCKVAN.pdf?expires_on=1718110439&signature=mRVTwmToHoH18co0utiYbDcuJFvVI1rNkV589FB5zY4%3D\"]"
                                    },
                                    {
                                        "name": "Link do Mural de Imersão",
                                        "value": "https://app.mural.co/t/innoscience7386/m/innoscience7386/1687546332395/397d40df54bac23458dd415a968349dfb19e1bfd?sender=ud35dd05fe6e298413cb01044"
                                    },
                                    {
                                        "name": "Data Pitch",
                                        "value": "15/06/2023"
                                    },
                                    {
                                        "name": "Proposta de Piloto Aprovada?",
                                        "value": "Sim"
                                    },
                                    {
                                        "name": "Defesa do Desafio",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/5b3aa777-95a0-447f-a804-f74928d432a1/Defesadesafio_PRAVALER.pptx?expires_on=1718110439&signature=51mK061yLQz6E2ddy%2BfVlQ%2BgPn9dwDj%2FrGQFBR6t9OY%3D\"]"
                                    },
                                    {
                                        "name": "Data de Priorização do Desafio pelo BEO",
                                        "value": ""
                                    },
                                    {
                                        "name": "Qual área sponsor designada para desenvolver a solução?",
                                        "value": "Inovação"
                                    },
                                    {
                                        "name": "Contrato do Piloto",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/40b17a43-34fe-419e-8307-64c93a0fa34b/ContratoPiloto_PRAVALER_EDP.pdf?expires_on=1718110439&signature=02Z0g7NsmZyh%2FnTley0BPEM%2FgVEoW2L3m4GJTVSvyQY%3D\", \"https://app.pipefy.com/storage/v1/signed/uploads/8d798a1d-2121-49de-8a84-9e50b6483351/ContratoPiloto_PRAVALER_SUPEROPA.pdf?expires_on=1718110439&signature=R%2BwLUXsN2ighepiMiwEVJf5uWoiVNewy%2BjljmPxQz3Y%3D\", \"https://app.pipefy.com/storage/v1/signed/uploads/42c7f8ce-9e59-47b2-ba3f-af985a912584/ContratoPiloto_PRAVALER_TBGREEN.pdf?expires_on=1718110439&signature=Ivh46Q%2BZ89EMCQ4szISvUdLHwRzCAPE6mEDoH8imtDs%3D\"]"
                                    },
                                    {
                                        "name": "PO",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/7c4769f1-9c9c-42af-9abb-4718005efba0/4573337485_PRAVALER_TBGREEN.pdf?expires_on=1718110439&signature=spC7IS%2BBNZU4lfrLNZVk6xed7ez9js1hNI%2FaAN%2BsEbM%3D\"]"
                                    },
                                    {
                                        "name": "NFs",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/eef7c83a-6f7f-43a5-8f95-06e0c1722734/FAT13731_PRAVALER_TBGREEN.pdf?expires_on=1718110439&signature=BHmMxENPzRz5DXPR4pSSZxQQITp1%2FT2sXOEpKEQxfsE%3D\"]"
                                    },
                                    {
                                        "name": "Observações - Piloto",
                                        "value": "As POs referentes aos pagamentos da Super Opa foram emitidos diretamente pelo time de Nestlé Stores\n\n> Power BI: https://lookerstudio.google.com/u/0/reporting/1f5e2a02-e5fb-4e32-930a-06d113d31ae1/page/p_u8brsvlncd\n\n>Trello de gestão: https://trello.com/b/op01Q9te/gest%C3%A3o-pra-valer\n\n> Apresentação geral: https://nestle.sharepoint.com/:p:/t/NestleStores/EZ_mqaRszGJDo6dHvE9jAqQBMTn_xqmlScjrx_RJg_sH9Q?email=Karina.Gomide%40br.nestle.com&e=FjTNfq"
                                    },
                                    {
                                        "name": "Data do Demoday",
                                        "value": "15/02/2024"
                                    },
                                    {
                                        "name": "Apresentação do Demoday",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/7a126f01-ac93-4f49-8d78-8c285b204e4a/Demoday_PRAVALER_SUPEROPA.pptx?expires_on=1718110439&signature=UTHcqNyUTYHhypMSgG6jEuac%2B9oMUkzRm8Ifg%2B65T3Y%3D\"]"
                                    },
                                    {
                                        "name": "Observações - Demoday",
                                        "value": "As propostas apresentadas para seguimento pós piloto foram questionadas.\nApresentou-se a quebra de modelos itinerantes como Pra Valer e Empório Sob Rodas. \n\nPara cada modelo ficaram definidas as seguintes propostas: \nPra Valer procuraremos alternativas de modelo itinerante com custo reduzido, visando foco no problema mais do que na solução de veículo itinerante, e vamos preparar uma proposta para viabilização do melhor modelo de Pra Valer (combate ao desperdício de alimentos e levando produtos Nestlé com descontos agressivos para consumidores que necessitam).\n\nEmpório Sob Rodas será revisado quanto à sua proposta de valor. Foi apontado que frentes D2C não visam ampliar o mkt share Nestlé, mas sim trazer informações sobre consumo e o consumidor em si para a empresa."
                                    },
                                    {
                                        "name": "Proposta do Piloto",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/537fb243-0f0b-4ac4-b359-af98dbbbca28/PropostaPiloto_PRAVALER_SUPEROPA.pptx?expires_on=1718110439&signature=8GjnuLAk7AWzGMvFKqtrZc9LoZ0AdC5zwaYuU0hN4HY%3D\"]"
                                    },
                                    {
                                        "name": "Observações - Imersão",
                                        "value": ""
                                    },
                                    {
                                        "name": "Documentos de Startups",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/cac78fc5-2cc5-4d40-90a2-3f16545c1455/Pitchdeck_PRAVALER_SUPEROPA.pdf?expires_on=1718110439&signature=Ng40cBw9rAJE11Hbe5HtdLcF1LkQ7IczlGgOyx%2BG0IA%3D\"]"
                                    },
                                    {
                                        "name": "Avaliação de startups pitch day",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/18f20b42-b8ac-4736-b8be-3e1d4ca3ea44/Avaliaodasstartups_PRAVALER.pdf?expires_on=1718110439&signature=Bp24G0Z3wF1pVUFiSinR9g63w7F6qzkoNeZEDl6kIFk%3D\"]"
                                    },
                                    {
                                        "name": "Responsável",
                                        "value": "[\"Karina Gomide\"]"
                                    },
                                    {
                                        "name": "Nome do Desafio",
                                        "value": "Pra Valer_SuperOpa"
                                    },
                                    {
                                        "name": "Subárea",
                                        "value": "Stores"
                                    },
                                    {
                                        "name": "Email do Solicitante",
                                        "value": "karina.gomide@br.nestle.com"
                                    }
                                ],
                                "labels": [
                                    {
                                        "name": "Inovação"
                                    }
                                ],
                                "phases_history": [
                                    {
                                        "phase": {
                                            "name": "Start form"
                                        },
                                        "firstTimeIn": "2023-08-23T20:27:25+00:00",
                                        "lastTimeOut": "2023-08-23T20:27:25+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "01. Backlog"
                                        },
                                        "firstTimeIn": "2023-08-23T20:27:25+00:00",
                                        "lastTimeOut": null
                                    },
                                    {
                                        "phase": {
                                            "name": "02. Discovery"
                                        },
                                        "firstTimeIn": "2023-09-01T19:20:51+00:00",
                                        "lastTimeOut": "2024-01-08T13:24:30+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "03. Proposta de Solução e Experimentação"
                                        },
                                        "firstTimeIn": "2023-08-23T20:47:30+00:00",
                                        "lastTimeOut": "2024-04-22T18:36:45+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "08. Post-Mortem Piloto"
                                        },
                                        "firstTimeIn": "2024-04-22T18:36:45+00:00",
                                        "lastTimeOut": "2024-06-07T13:53:17+00:00"
                                    }
                                ],
                                "url": "http://app.pipefy.com/pipes/303523960#cards/780647303"
                            }
                        },
                        {
                            "cursor": "WyIyMDIzLTA4LTIzIDIwOjI3OjI1LjYxNjMzOTAwMCBVVEMiLCI1Ljc1Iiw3ODA2NDczMDdd",
                            "node": {
                                "id": "780647307",
                                "title": "Desperdício_Food to Save",
                                "assignees": [],
                                "comments": [],
                                "comments_count": 0,
                                "current_phase": {
                                    "name": "06. Incorporado"
                                },
                                "done": false,
                                "due_date": null,
                                "fields": [
                                    {
                                        "name": "Subárea",
                                        "value": "Supply Chain"
                                    },
                                    {
                                        "name": "Área Requisitante",
                                        "value": "Supply Chain"
                                    },
                                    {
                                        "name": "Email do Solicitante",
                                        "value": "karina.gomide@br.nestle.com"
                                    },
                                    {
                                        "name": "Quais objetivos a área pretende alcançar ao resolver o desafio?",
                                        "value": "Testar uma frente de escoamento de produtos Salvage e Pré Salvage a partir do centro de distribuição (CD) com foco B2C."
                                    },
                                    {
                                        "name": "Como este desafio está afetando a companhia?",
                                        "value": "O time de DSP já testa modelos de escoamento de produtos próximos ao vencimento (Salvage e Pré Salvage) com vendas diretas a clientes que independente da Nestlé realizam a venda desses produtos sem suporte da Nestlé.\nDesejamos agora testar um modelo de venda desse tipo de produtos para um cliente que trabalhará com o consumidor final no modelo de sacola supresa, e entender a recepção do consumidor na oferta de mixes desconhecidos com a seleção Nestlé."
                                    },
                                    {
                                        "name": "Email do ponto focal do Negócio",
                                        "value": "ana.melo@br.nestle.com"
                                    },
                                    {
                                        "name": "Descreva o Desafio",
                                        "value": "Escoar produtos pré salvage e salvage para consumidor final B2C no modelo Sacola Surpresa de produtos exclusivamente Nestlé.\nO projeto visa vender diretamente os produtos para a startups Food to Save como um cliente Nestlé e acompanhar as vendas e montagem das sacolas, permitindo entender a recepção dos consumidores e o melhor cenário de mixes."
                                    },
                                    {
                                        "name": "Outras informações",
                                        "value": "O contrato estabelecido inclui a possibilidade da Nestlé apoiar com incentivos de mídia para alavancar o modelo de sacola surpresa Nestlé e aumentar as compras da Food to Save."
                                    },
                                    {
                                        "name": "Qual público mais impactado atualmente por este desafio?.",
                                        "value": "[\"Consumidor Final\", \"Áreas Internas\"]"
                                    },
                                    {
                                        "name": "Qual o valor anual previsto desta eficiência?",
                                        "value": "5.000,00"
                                    },
                                    {
                                        "name": "Qual o principal benefício que uma possível solução a este desafio pode trazer?",
                                        "value": "[\"Uplift\"]"
                                    },
                                    {
                                        "name": "Como se chegou a este benefício (R$)?",
                                        "value": "Considerado os valores de vendas realizadas ao logo do piloto"
                                    },
                                    {
                                        "name": "Qual a receita anual prevista deste incremento?",
                                        "value": "650.000,00"
                                    },
                                    {
                                        "name": "Outros Documentos",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/efb2d482-5b09-46e3-b746-99d54bacfc0b/PDCANESTL_FOODTOSAVE.pptx?expires_on=1718110439&signature=2GFYBKlrHA%2F7WxCNDx7we0tURkE3ppdBl0CA0SC8zYk%3D\"]"
                                    },
                                    {
                                        "name": "Apresentação do Demoday",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/09a148c3-5681-4590-9982-26a20985050e/Demoday_COMBATEAODESPERDCIO_FOODTOSAVE.pptx?expires_on=1718110439&signature=SCN1pq5q9G2bAF0wROTswpaD4I%2FKGDbaHDk33YFddbU%3D\"]"
                                    },
                                    {
                                        "name": "Quantas áreas estão sendo impactadas por este desafio?",
                                        "value": "5 ou mais"
                                    },
                                    {
                                        "name": "Nome do Desafio",
                                        "value": "Desperdício_Food to Save"
                                    },
                                    {
                                        "name": "Qual área sponsor designada para desenvolver a solução?",
                                        "value": "Inovação"
                                    },
                                    {
                                        "name": "Outra área será envolvida no desenvolvimento da solução?",
                                        "value": "Não"
                                    },
                                    {
                                        "name": "Projeto Priorizado?",
                                        "value": "Sim"
                                    },
                                    {
                                        "name": "NDAs",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/10adc9ae-b4a4-4f88-8ddb-bf1855c70f71/NDA_COMBATEAODESPERDCIO_FOODTOSAVE.pdf?expires_on=1718110439&signature=ywbl52nwhJSskZRyVN41SyGoseIgPQBSSiMMr1KVC4I%3D\"]"
                                    },
                                    {
                                        "name": "Contrato do Piloto",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/5f8738fb-5711-46d7-a672-c8958c7fe4e6/ContratoPiloto_COMBATEAODESPERDICIO_FOODTOSAVE.pdf?expires_on=1718110439&signature=M6q%2BJbavSc8L8WZYQcI%2FWYyvj8fCmWKa95XN9rAPnLU%3D\"]"
                                    }
                                ],
                                "labels": [
                                    {
                                        "name": "Inovação"
                                    }
                                ],
                                "phases_history": [
                                    {
                                        "phase": {
                                            "name": "Start form"
                                        },
                                        "firstTimeIn": "2023-08-23T20:27:25+00:00",
                                        "lastTimeOut": "2023-08-23T20:27:25+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "01. Backlog"
                                        },
                                        "firstTimeIn": "2023-08-23T20:27:25+00:00",
                                        "lastTimeOut": "2024-01-10T21:37:26+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "02. Discovery"
                                        },
                                        "firstTimeIn": "2024-01-10T21:37:27+00:00",
                                        "lastTimeOut": "2024-01-10T21:43:19+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "03. Proposta de Solução e Experimentação"
                                        },
                                        "firstTimeIn": "2024-01-05T17:41:15+00:00",
                                        "lastTimeOut": "2024-01-10T21:48:14+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "06. Incorporado"
                                        },
                                        "firstTimeIn": "2023-11-08T17:37:25+00:00",
                                        "lastTimeOut": null
                                    }
                                ],
                                "url": "http://app.pipefy.com/pipes/303523960#cards/780647307"
                            }
                        },
                        {
                            "cursor": "WyIyMDIzLTA4LTIzIDIwOjI3OjI2LjAxNDY2NjAwMCBVVEMiLCIzLjAiLDc4MDY0NzMxM10",
                            "node": {
                                "id": "780647313",
                                "title": "Kits Porcionados_Kuke",
                                "assignees": [
                                    {
                                        "id": "303172995"
                                    }
                                ],
                                "comments": [],
                                "comments_count": 0,
                                "current_phase": {
                                    "name": "03. Proposta de Solução e Experimentação"
                                },
                                "done": false,
                                "due_date": null,
                                "fields": [
                                    {
                                        "name": "Área Requisitante",
                                        "value": "Marketing e Comunicação"
                                    },
                                    {
                                        "name": "Qual a receita anual prevista deste incremento?",
                                        "value": "10.000,00"
                                    },
                                    {
                                        "name": "Email do Solicitante",
                                        "value": "karina.gomide@br.nestle.com"
                                    },
                                    {
                                        "name": "Proposta do Piloto",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/60d75a44-c34c-4072-a98f-56a1eca94d50/Proposta-KukeNestleMaio2023.pdf?expires_on=1718110439&signature=LtvS0Dd7OMEVT738DrjKWqkjpBhOTS973abwmk2Al%2F0%3D\"]"
                                    },
                                    {
                                        "name": "Proposta de Piloto Aprovada?",
                                        "value": "Sim"
                                    },
                                    {
                                        "name": "PO",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/5a6183a2-4fdc-4ec0-aef4-342f10298572/POCorrigida.pdf?expires_on=1718110439&signature=Z7ab%2B67XJ8uKCEvI%2FDzkzvkTGiJCj%2FiABFBzx7vdu1k%3D\"]"
                                    },
                                    {
                                        "name": "NFs",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/20b02b08-3f97-435a-a58a-67b588271ea3/NF_1245869_1.pdf?expires_on=1718110439&signature=Mexn1T0jl%2BSgzfPQHEAbBcksD1pg4ynsZ%2Bv0i8MBsI8%3D\"]"
                                    },
                                    {
                                        "name": "Data de Kick Off do Projeto",
                                        "value": "01/09/2023"
                                    },
                                    {
                                        "name": "Qual área sponsor designada para desenvolver a solução?",
                                        "value": "Inovação"
                                    },
                                    {
                                        "name": "Responsável",
                                        "value": "[\"Karina Gomide\"]"
                                    },
                                    {
                                        "name": "Projeto Priorizado?",
                                        "value": "Sim"
                                    },
                                    {
                                        "name": "Aprovação do Piloto",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/c252d410-0526-4e62-9716-84244370f159/AprovaoPiloto_KITSRECEITASNESTLE_KUKE.msg?expires_on=1718110439&signature=8zHbv9ui22LM0X2Dn%2Btp0NRjGh5tzCynwiEZi5XN8pM%3D\"]"
                                    },
                                    {
                                        "name": "NDAs",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/9380676c-d8df-4bc5-89c8-8aee6f563cb1/NDA_KITRECEITAS_KUKE.pdf?expires_on=1718110439&signature=TA%2B0U%2FwBQhVe7jV%2BB0grZ3lkJwIjQFEPtQDxhVfNfNA%3D\"]"
                                    },
                                    {
                                        "name": "Documentos de Startups",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/370d8f80-c944-40b6-9a8b-46c7914ec34d/Pitchdeck_KITRECEITAS_KUKE.pdf?expires_on=1718110439&signature=e3hxf6g5vDO%2Bi8rcVbEpbx3%2BjxdSBJ0sDn%2Bq5mFJEIA%3D\"]"
                                    },
                                    {
                                        "name": "Avaliação de startups pitch day",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/9b1c86d3-e9cd-4711-8e2b-fa85bf131888/Avaliaodasstartups_KITRECEITAS.pdf?expires_on=1718110439&signature=lxwVPu647Svzt2Bno8wmwL68f4DwufqWUP6XdolDLGY%3D\"]"
                                    },
                                    {
                                        "name": "Nome do Desafio",
                                        "value": "Kits Porcionados_Kuke"
                                    },
                                    {
                                        "name": "Subárea",
                                        "value": "Receitas"
                                    },
                                    {
                                        "name": "Email do ponto focal do Negócio",
                                        "value": "luiza.bovino@br.nestle.com"
                                    },
                                    {
                                        "name": "Descreva o Desafio",
                                        "value": "A área de Receitas Nestlé, apesar de ter um site com alto tráfego, não gera receita para a companhia, portanto é importante explorar formas de passarmos a ter essa geração. Neste projeto, isso é feito através da venda de kits com ingredientes porcionados, produtos Nestlé, utensílios e instruções para que consumidores preparem as receitas em suas casas."
                                    },
                                    {
                                        "name": "Como este desafio está afetando a companhia?",
                                        "value": "Hoje estamos perdendo a oportunidade de explorar todo o potencial de Receitas Nestlé."
                                    },
                                    {
                                        "name": "Quais objetivos a área pretende alcançar ao resolver o desafio?",
                                        "value": "Gerar uma nova receita para a Nestlé."
                                    },
                                    {
                                        "name": "Qual público mais impactado atualmente por este desafio?.",
                                        "value": "[\"Consumidor Final\", \"Áreas Internas\"]"
                                    },
                                    {
                                        "name": "Quantas áreas estão sendo impactadas por este desafio?",
                                        "value": "1 a 2"
                                    },
                                    {
                                        "name": "Outras informações",
                                        "value": "Ainda não há previsão do valor da nova receita anual. A partir do piloto, teremos uma ideia de volumes e preços para fazer essa estimativa. No piloto em si, não esperamos receita relevante, pois as quantidades serão pequenas e haverá um desconto do valor devido às transações com a startup."
                                    }
                                ],
                                "labels": [
                                    {
                                        "name": "Inovação"
                                    }
                                ],
                                "phases_history": [
                                    {
                                        "phase": {
                                            "name": "Start form"
                                        },
                                        "firstTimeIn": "2023-08-23T20:27:26+00:00",
                                        "lastTimeOut": "2023-08-23T20:27:26+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "01. Backlog"
                                        },
                                        "firstTimeIn": "2023-08-23T20:27:26+00:00",
                                        "lastTimeOut": "2023-12-01T20:28:54+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "02. Discovery"
                                        },
                                        "firstTimeIn": "2023-08-23T21:20:22+00:00",
                                        "lastTimeOut": "2023-12-06T16:37:58+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "03. Proposta de Solução e Experimentação"
                                        },
                                        "firstTimeIn": "2023-09-14T13:30:38+00:00",
                                        "lastTimeOut": null
                                    }
                                ],
                                "url": "http://app.pipefy.com/pipes/303523960#cards/780647313"
                            }
                        },
                        {
                            "cursor": "WyIyMDIzLTA4LTIzIDIwOjI3OjI2LjQxNDE1MjAwMCBVVEMiLCI1Ljc1Iiw3ODA2NDczMTZd",
                            "node": {
                                "id": "780647316",
                                "title": "Embalagens Flexíveis_Yattó",
                                "assignees": [],
                                "comments": [],
                                "comments_count": 0,
                                "current_phase": {
                                    "name": "06. Incorporado"
                                },
                                "done": false,
                                "due_date": null,
                                "fields": [
                                    {
                                        "name": "Área Requisitante",
                                        "value": "Técnica e Produção"
                                    },
                                    {
                                        "name": "Email do Solicitante",
                                        "value": "carolina.falcoski@br.nestle.com"
                                    },
                                    {
                                        "name": "Nome do Desafio",
                                        "value": "Embalagens Flexíveis_Yattó"
                                    },
                                    {
                                        "name": "Subárea",
                                        "value": "Técnica"
                                    },
                                    {
                                        "name": "Descreva o Desafio",
                                        "value": "TDB"
                                    }
                                ],
                                "labels": [
                                    {
                                        "name": "Inovação"
                                    }
                                ],
                                "phases_history": [
                                    {
                                        "phase": {
                                            "name": "Start form"
                                        },
                                        "firstTimeIn": "2023-08-23T20:27:26+00:00",
                                        "lastTimeOut": "2023-08-23T20:27:26+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "01. Backlog"
                                        },
                                        "firstTimeIn": "2023-08-23T20:27:26+00:00",
                                        "lastTimeOut": "2023-08-23T20:35:13+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "06. Incorporado"
                                        },
                                        "firstTimeIn": "2023-11-08T17:39:47+00:00",
                                        "lastTimeOut": null
                                    }
                                ],
                                "url": "http://app.pipefy.com/pipes/303523960#cards/780647316"
                            }
                        },
                        {
                            "cursor": "WyIyMDIzLTA4LTIzIDIwOjI3OjI2LjgxNDE1NzAwMCBVVEMiLCIxLjc1Iiw3ODA2NDczMTld",
                            "node": {
                                "id": "780647319",
                                "title": "PEV_Coletando Soluções",
                                "assignees": [
                                    {
                                        "id": "303172995"
                                    }
                                ],
                                "comments": [],
                                "comments_count": 0,
                                "current_phase": {
                                    "name": "02. Discovery"
                                },
                                "done": false,
                                "due_date": "2023-10-25T00:00:00Z",
                                "fields": [
                                    {
                                        "name": "Área Requisitante",
                                        "value": "Business Transformation"
                                    },
                                    {
                                        "name": "Email do Solicitante",
                                        "value": "marina.figueiredo@br.nestle.com"
                                    },
                                    {
                                        "name": "Email do ponto focal do Negócio",
                                        "value": "Renata.Vieira@br.nestle.com"
                                    },
                                    {
                                        "name": "Qual o valor anual previsto de risco dessa reputação?",
                                        "value": "5.000,00"
                                    },
                                    {
                                        "name": "Responsável",
                                        "value": "[\"Marina Duarte Figueiredo\"]"
                                    },
                                    {
                                        "name": "Mural de Imersão",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/62e4e434-047d-4d57-a411-d45a44d98053/IC23DesafioPEVdeReciclveis-Coletando_2023-10-05_14-21-24.pdf?expires_on=1718110439&signature=CgGio72xW%2FDisn6ILoGYpvx%2BNgaC6M3HfQC96QJnrGQ%3D\"]"
                                    },
                                    {
                                        "name": "Proposta do Piloto",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/4d384a87-c029-4b74-ba62-f60402fbf970/PEV_ApresentaoBanca.pptx?expires_on=1718110439&signature=DuovnftQcj2Ng1B%2BsCpzxKe4dYSyriMIOEfpxhV7924%3D\"]"
                                    },
                                    {
                                        "name": "Aprovação do Piloto",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/5bc78b2f-0d0c-41d3-bbaa-b1ecfe7fb56d/IC23-FormulriodeAprovaodePiloto.pdf?expires_on=1718110439&signature=wp1jId5%2BjrMSOebxxNU%2BKlGw2ypSvGTDcpFbmufHFVo%3D\"]"
                                    },
                                    {
                                        "name": "Concorrência",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/3a6e30e8-cd7f-43f5-90ca-eda1f014186f/RelatrioAvaliodasStartups-PitchDay.pdf?expires_on=1718110439&signature=SFknL4Uyvt8rYGDlwxAoldki56TzUelwixXN4rLZtxs%3D\"]"
                                    },
                                    {
                                        "name": "Proposta de Piloto Aprovada?",
                                        "value": "Sim"
                                    },
                                    {
                                        "name": "NDAs",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/a49a0a50-285c-4b6d-a01e-628cab278d4f/Termo_de_Confidencia-ColetandoSolues.pdf?expires_on=1718110439&signature=BnZt2apCg4TEwUahLSSTsLlOIHtZg4bXMLBF9575fLw%3D\"]"
                                    },
                                    {
                                        "name": "Projeto Priorizado?",
                                        "value": "Sim"
                                    },
                                    {
                                        "name": "Qual área sponsor designada para desenvolver a solução?",
                                        "value": "Inovação"
                                    },
                                    {
                                        "name": "Documentos de Startups",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/1ea8fa79-8bba-4b9b-bac6-725fbe4d1ddf/ColetandoSolues.pdf?expires_on=1718110439&signature=yiOhdX9OGtrCI3ZFZmV9ctqfMw9GOAOmWphecdLjS5c%3D\"]"
                                    },
                                    {
                                        "name": "Avaliação de startups pitch day",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/7e0ae260-c369-4e4e-b268-15fbd94f7e8d/RelatrioAvaliodasStartups-PitchDay.pdf?expires_on=1718110439&signature=Pm6LkH14BuvbdCMwDQr%2FxymSUFeJw0KaLCo6PF%2BM6n0%3D\"]"
                                    },
                                    {
                                        "name": "Data de validação do Piloto pelo BEO",
                                        "value": "25/10/2023 00:00"
                                    },
                                    {
                                        "name": "PO",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/bf876786-61de-4c9e-9cc6-d0abf4690357/POColetando.pdf?expires_on=1718110439&signature=HQRQSS6hGpFGEz1qnE6rzgDNka5sBtr5GHH%2BTSk1W4o%3D\"]"
                                    },
                                    {
                                        "name": "NFs",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/327e12fa-5d2f-46ac-9bc3-cd94c22b9834/NFColetando.pdf?expires_on=1718110439&signature=k7EiqvWtI9R2bRC0oOVFj%2Fa8Bj5HumN1lbO%2BWTvKqVk%3D\"]"
                                    },
                                    {
                                        "name": "Data de Kick Off do Projeto",
                                        "value": "21/12/2023"
                                    },
                                    {
                                        "name": "Participantes do Kick Off",
                                        "value": "[\"Renata Vieira\", \"Marina Duarte Figueiredo\", \"Patricia Macedo\", \"Saulo Ricci\", \"Caio Kague\"]"
                                    },
                                    {
                                        "name": "Nome do Desafio",
                                        "value": "PEV_Coletando Soluções"
                                    },
                                    {
                                        "name": "Subárea",
                                        "value": "ESG"
                                    },
                                    {
                                        "name": "Pitch Reverso",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/ad16c6c9-377f-4ec5-a6ec-9de9354ded4a/ApresentaodoProjeto_PEVdeReciclados-PITCHREVERSO.pptx?expires_on=1718110439&signature=p7QOF1tnvdyVEzozo7NiKNtV5O1l0sCWDS6LpKIjZMc%3D\"]"
                                    },
                                    {
                                        "name": "Descreva o Desafio",
                                        "value": "Pontos de Entrega Gratificada (PEGs) colocados em comunidades (e um ponto em varejista) para educar o shopper de classes C e D quanto à reciclagem e atuar em logística reversa. O shopper terá um cartão e receberá descontos em produtos Nestlé ao entregar resíduos."
                                    },
                                    {
                                        "name": "Como este desafio está afetando a companhia?",
                                        "value": "O projeto visa garantir ESG como diferencial competitivo para a companhia, considerando:\n- Atendimento à Lei 12.305/10 Política Nacional de Resíduos Sólidos  - Acordo Setorial de Embalagens de 2015 - 30% ate 2025 por Lei\n- A Nestlé tem como compromisso reciclar 100% das embalagens plásticas até 2025, sendo que maior parte das embalagens são compostas por flexíveis e cápsulas\n- Geração de IQEM positivo\n- Reputação positiva para a Nestlé\n- Modelo de Negocio auto sustentável com impacto social"
                                    },
                                    {
                                        "name": "Qual público mais impactado atualmente por este desafio?.",
                                        "value": "[\"Clientes Externos (Ex.: Varejistas)\", \"Consumidor Final\", \"Fornecedores\", \"Áreas Internas\"]"
                                    },
                                    {
                                        "name": "Quantas áreas estão sendo impactadas por este desafio?",
                                        "value": "1 a 2"
                                    },
                                    {
                                        "name": "Quais objetivos a área pretende alcançar ao resolver o desafio?",
                                        "value": "Educar o shopper quanto à reciclagem e atuar na logística reversa"
                                    },
                                    {
                                        "name": "Data de Priorização do Desafio pelo BEO",
                                        "value": "25/10/2023 00:00"
                                    }
                                ],
                                "labels": [
                                    {
                                        "name": "Inovação"
                                    }
                                ],
                                "phases_history": [
                                    {
                                        "phase": {
                                            "name": "Start form"
                                        },
                                        "firstTimeIn": "2023-08-23T20:27:26+00:00",
                                        "lastTimeOut": "2023-08-23T20:27:27+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "01. Backlog"
                                        },
                                        "firstTimeIn": "2023-08-23T20:27:27+00:00",
                                        "lastTimeOut": "2023-08-23T20:35:41+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "02. Discovery"
                                        },
                                        "firstTimeIn": "2023-08-23T21:20:27+00:00",
                                        "lastTimeOut": null
                                    },
                                    {
                                        "phase": {
                                            "name": "03. Proposta de Solução e Experimentação"
                                        },
                                        "firstTimeIn": "2023-09-18T13:41:04+00:00",
                                        "lastTimeOut": "2024-04-02T11:14:56+00:00"
                                    }
                                ],
                                "url": "http://app.pipefy.com/pipes/303523960#cards/780647319"
                            }
                        },
                        {
                            "cursor": "WyIyMDIzLTA4LTIzIDIwOjI3OjI3LjIyMTU3MDAwMCBVVEMiLCIzLjAiLDc4MDY0NzMyNV0",
                            "node": {
                                "id": "780647325",
                                "title": "PEV_Trashin",
                                "assignees": [
                                    {
                                        "id": "303172995"
                                    }
                                ],
                                "comments": [],
                                "comments_count": 0,
                                "current_phase": {
                                    "name": "03. Proposta de Solução e Experimentação"
                                },
                                "done": false,
                                "due_date": "2023-10-25T00:00:00Z",
                                "fields": [
                                    {
                                        "name": "Qual o principal benefício que uma possível solução a este desafio pode trazer?",
                                        "value": "[\"Reputação/IQEM\"]"
                                    },
                                    {
                                        "name": "Qual o valor anual previsto de risco dessa reputação?",
                                        "value": "0,00"
                                    },
                                    {
                                        "name": "Contrato do Piloto",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/520aa5f4-4c4d-43c2-8a9f-2f354fc4d01c/Contrato_Piloto_-_Panela_-_Trashin_Final.pdf?expires_on=1718110439&signature=xrxwKJmxnkoT6IMZwIhUSRS8CuOoPz8GlQ0nAdkP5po%3D\"]"
                                    },
                                    {
                                        "name": "PO",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/7a6f4026-ed4e-4553-876c-c4c70849e8ad/POTrashin.pdf?expires_on=1718110439&signature=ymwnO8mvUiG5s9indkT6RV6gHULJ4uRNVMAufynZcZE%3D\"]"
                                    },
                                    {
                                        "name": "Data de Kick Off do Projeto",
                                        "value": "20/12/2023"
                                    },
                                    {
                                        "name": "NFs",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/e80da0db-a1e8-41b8-95bb-f5bdc977cbad/NFTrashin.pdf?expires_on=1718110439&signature=sfPUqFKkjXvg5WYeVGmV24vZaA1j%2Flqg4NrYSjtTBIo%3D\"]"
                                    },
                                    {
                                        "name": "Participantes do Kick Off",
                                        "value": "[\"Marina Duarte Figueiredo\", \"Renata Vieira\", \"Patricia Macedo\", \"Rafael Dutra\", \"Marcos Hirasawa\", \"Caio Kague\", \"Gustavo Finger\", \"Marina Tsoukarakis\"]"
                                    },
                                    {
                                        "name": "Área Requisitante",
                                        "value": "Business Transformation"
                                    },
                                    {
                                        "name": "Email do Solicitante",
                                        "value": "marina.figueiredo@br.nestle.com"
                                    },
                                    {
                                        "name": "Responsável",
                                        "value": "[\"Marina Duarte Figueiredo\"]"
                                    },
                                    {
                                        "name": "Mural de Imersão",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/2707fc18-286c-4fa9-87de-4cb2777624c4/IC23DesafioPEVdeReciclveis-Trashin_2023-10-05_14-23-23.pdf?expires_on=1718110439&signature=eFGffGgzIRG2OwV17BqgPHtKl4v60OkjSsIKb%2FpVmZ8%3D\"]"
                                    },
                                    {
                                        "name": "Aprovação do Piloto",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/dc365ad7-0288-47c6-a53e-66709e4f63ad/IC23-FormulriodeAprovaodePiloto.pdf?expires_on=1718110439&signature=C1YlV%2FPBFZyMjh4EjW1YprgcHw%2BqJiRj7nNUBty%2FfPY%3D\"]"
                                    },
                                    {
                                        "name": "Concorrência",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/15362fe0-a1d9-4a87-ad2f-2539f87c4e4c/RelatrioAvaliodasStartups-PitchDay.pdf?expires_on=1718110439&signature=vx%2B9ilxcI1VCx6NfZMGylm6xBbn2K7TgjvQoxut4LOA%3D\"]"
                                    },
                                    {
                                        "name": "Proposta do Piloto",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/33adf8ce-8799-4e39-bf3a-26506a776731/PEV_ApresentaoBanca.pptx?expires_on=1718110439&signature=%2BzX9iuhFYHzm2R8anBiFnX%2Fyk7hw49P5ZQEfsRecIeU%3D\", \"https://app.pipefy.com/storage/v1/signed/uploads/24fd0882-5a7d-4ccb-abbb-0575ee130984/PEV_ApresentaoBanca.pptx?expires_on=1718110439&signature=sqP6dgeelkdgPojSSDlp79h%2Fb%2FmeUW3CRzXIpWa39SY%3D\"]"
                                    },
                                    {
                                        "name": "Proposta de Piloto Aprovada?",
                                        "value": "Sim"
                                    },
                                    {
                                        "name": "Avaliação de startups pitch day",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/f2a1ddbe-102c-4102-9748-4789fcb30466/RelatrioAvaliodasStartups-PitchDay.pdf?expires_on=1718110439&signature=ifBVtDL5qgTuVtA9%2FNA5NYHMaIJ8%2FPSA%2FUYsA0ZpHlU%3D\"]"
                                    },
                                    {
                                        "name": "Documentos de Startups",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/944023f1-cc4a-419f-9230-f8aa786cb8c2/TRASHIN.pdf?expires_on=1718110439&signature=v6E%2BjL%2BjvQcdtJL4oqV9GyjIuYs7wZFMXI%2FyBz8qJVk%3D\"]"
                                    },
                                    {
                                        "name": "Pitch Reverso",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/66f4dc12-6c24-4056-bfee-b292ff550021/ApresentaodoProjeto_PEVdeReciclados-PITCHREVERSO.pptx?expires_on=1718110439&signature=A5CqdAKr2zr4oSP3JjVpQs88iJ9oxxu3qiY22FsaPzc%3D\"]"
                                    },
                                    {
                                        "name": "Data de validação do Piloto pelo BEO",
                                        "value": "25/10/2023 00:00"
                                    },
                                    {
                                        "name": "Nome do Desafio",
                                        "value": "PEV_Trashin"
                                    },
                                    {
                                        "name": "Subárea",
                                        "value": "ESG"
                                    },
                                    {
                                        "name": "Data de Priorização do Desafio pelo BEO",
                                        "value": "25/10/2023 00:00"
                                    },
                                    {
                                        "name": "Descreva o Desafio",
                                        "value": "Pontos de Entrega Voluntária (PEVs) colocados em varejistas para educar o shopper quanto à reciclagem e atuar em logística reversa. A operação permitirá avaliar resultados em varejistas e entender a diferença entre pontos com e sem bonificação para o shopper."
                                    },
                                    {
                                        "name": "Como este desafio está afetando a companhia?",
                                        "value": "O projeto visa garantir ESG como diferencial competitivo para a companhia, considerando:\n- Atendimento à Lei 12.305/10 Política Nacional de Resíduos Sólidos  - Acordo Setorial de Embalagens de 2015 - 30% ate 2025 por Lei\n- A Nestlé tem como compromisso reciclar 100% das embalagens plásticas até 2025, sendo que maior parte das embalagens são compostas por flexíveis e cápsulas\n- Geração de IQEM positivo\n- Reputação positiva para a Nestlé"
                                    },
                                    {
                                        "name": "Quais objetivos a área pretende alcançar ao resolver o desafio?",
                                        "value": "Educar o shopper quanto à reciclagem e atuar em logística reversa"
                                    },
                                    {
                                        "name": "Quantas áreas estão sendo impactadas por este desafio?",
                                        "value": "1 a 2"
                                    },
                                    {
                                        "name": "Qual público mais impactado atualmente por este desafio?.",
                                        "value": "[\"Clientes Externos (Ex.: Varejistas)\", \"Consumidor Final\", \"Fornecedores\", \"Áreas Internas\"]"
                                    },
                                    {
                                        "name": "Email do ponto focal do Negócio",
                                        "value": "Renata.Vieira@br.nestle.com"
                                    }
                                ],
                                "labels": [
                                    {
                                        "name": "Inovação"
                                    }
                                ],
                                "phases_history": [
                                    {
                                        "phase": {
                                            "name": "Start form"
                                        },
                                        "firstTimeIn": "2023-08-23T20:27:27+00:00",
                                        "lastTimeOut": "2023-08-23T20:27:27+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "01. Backlog"
                                        },
                                        "firstTimeIn": "2023-08-23T20:27:27+00:00",
                                        "lastTimeOut": "2023-08-23T20:35:59+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "02. Discovery"
                                        },
                                        "firstTimeIn": "2023-08-23T21:18:35+00:00",
                                        "lastTimeOut": "2024-01-09T13:18:55+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "03. Proposta de Solução e Experimentação"
                                        },
                                        "firstTimeIn": "2023-10-23T18:49:06+00:00",
                                        "lastTimeOut": null
                                    },
                                    {
                                        "phase": {
                                            "name": "04. Implementação"
                                        },
                                        "firstTimeIn": "2024-01-08T18:06:37+00:00",
                                        "lastTimeOut": "2024-01-08T18:07:19+00:00"
                                    }
                                ],
                                "url": "http://app.pipefy.com/pipes/303523960#cards/780647325"
                            }
                        },
                        {
                            "cursor": "WyIyMDIzLTA5LTEzIDIxOjUyOjU1LjMyMjAwMTAwMCBVVEMiLCIzLjAiLDc5MjUzNzIzMl0",
                            "node": {
                                "id": "792537232",
                                "title": "Impressora Kitkat_Noviga & PH Printers",
                                "assignees": [
                                    {
                                        "id": "303172994"
                                    }
                                ],
                                "comments": [],
                                "comments_count": 0,
                                "current_phase": {
                                    "name": "03. Proposta de Solução e Experimentação"
                                },
                                "done": false,
                                "due_date": null,
                                "fields": [
                                    {
                                        "name": "Nome do Desafio",
                                        "value": "Impressora 3D KK_Noviga & PH Printers"
                                    },
                                    {
                                        "name": "Subárea",
                                        "value": "Chocolates"
                                    },
                                    {
                                        "name": "Área Requisitante",
                                        "value": "Confectionery"
                                    },
                                    {
                                        "name": "Email do Solicitante",
                                        "value": "karina.gomide@br.nestle.com"
                                    },
                                    {
                                        "name": "Descreva o Desafio",
                                        "value": "Atualmente em KK Chocolatory temos um serviço de personalização de KK4F a partir da impressão no Kitkat branco de imagens escolhidas pelo consumidor. No entanto, a solução atual é italiana e apresenta algumas problemáticas na operação (tempo de importação, prazo de validade, assistência técnica distante). Projeto busca desenvolver uma solução local com uma tinta orgânica e comestível com uma startup especialista em formulação de ingredientes, uma empresa especialista em impressoras convencionais e o time de inovação de produtos em Confectionary."
                                    },
                                    {
                                        "name": "Quais objetivos a área pretende alcançar ao resolver o desafio?",
                                        "value": "Desenvolver uma forma mais barata e prática de fornecer o serviço de Kitkats personalizados ao consumidor."
                                    },
                                    {
                                        "name": "Quantas áreas estão sendo impactadas por este desafio?",
                                        "value": "3 a 4"
                                    },
                                    {
                                        "name": "Como este desafio está afetando a companhia?",
                                        "value": "Hoje o modelo de Kitkat Chocolatory vem explorando opções de oferecimento de serviços de personalização, entre eles, há um maquinário para impressão de uma imagem selecionada no Kitkat 4 Fingers (KK4F). Esse maquinário é uma solução de máquina e tintas patentiadas por um fornecedor italiano que, além de seu alto custo de implementação e manutenção, fornece tintas com pouco tempo de validade em relação ao tempo de uso requisitado pelas lojas Kitkat Chocolatory.\nCom o intuito de baixar o custo e flexibilizar as possibilidades de serviços com Kitkats personalizados, o time de Confectionary busca uma solução de tintas que seja nacional, orgânica, comestível e escalável. Acreditamos que a combinação de uma fórmula específica e uma impressora convencional adaptada permitirão a expansão dos modelos de serviços de impressão de Kitkat - lojas, quioques, personalização em massa para festas, estandes em eventos etc. Minimamente manter o serviço de kitkats personalizado na loja física já é um ganho relevante."
                                    },
                                    {
                                        "name": "Outras informações",
                                        "value": "Ficou entendido na etapa de imersão de que este piloto endereça apenas a questão técnica do tema, ou seja, como os serviços serão oferecidos para o consumidor final ou até mesmo como esse processo será viabilizado em escala industrial não estão no escopo deste piloto."
                                    },
                                    {
                                        "name": "Qual público mais impactado atualmente por este desafio?.",
                                        "value": "[\"Consumidor Final\", \"Fornecedores\"]"
                                    },
                                    {
                                        "name": "Responsável",
                                        "value": "[\"Karina Gomide\"]"
                                    },
                                    {
                                        "name": "Qual área sponsor designada para desenvolver a solução?",
                                        "value": "Inovação"
                                    },
                                    {
                                        "name": "PO",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/426361d3-71e1-4f97-9200-9fe1212af564/4572670493_IMPRESSORAKITKAT_NOVIGA.pdf?expires_on=1718110439&signature=eNrKTXHULbpXXLWb1nbvLTUgzy%2FuqvE1jwtlfyd4pKs%3D\", \"https://app.pipefy.com/storage/v1/signed/uploads/4d49f3a9-b58b-453f-9985-9323947ab642/4572773562_IMPRESSORAKITKAT_PHPRINTERS.pdf?expires_on=1718110439&signature=1I3onBwp9%2F9tsjdxjg1dErfGp3nKAmW4tKxybdDUp40%3D\"]"
                                    },
                                    {
                                        "name": "NDAs",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/9512cfd0-3afd-4aeb-ac49-4b194607c919/NDA_IMPRESSORAKITKAT_NOVIGA.pdf?expires_on=1718110439&signature=wGoEKXjkTis845i90OFBWQHSL7yTe292%2B4DfyRwy508%3D\", \"https://app.pipefy.com/storage/v1/signed/uploads/67e20192-10f8-4c0d-986a-64fcc7b6b084/NDA_IMPRESSORAKITKAT_PHPRINTERS.pdf?expires_on=1718110439&signature=4duoVIwA292K6R1pGkSWsVcw0Z2sZghToFIaqH1JPJ0%3D\"]"
                                    },
                                    {
                                        "name": "Avaliação de startups pitch day",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/5a6b114c-7e92-42e9-a38b-a7fb239852f6/Avaliaodasstartups_IMPRESSORAKITKAT.pdf?expires_on=1718110439&signature=nR7sOOKkVFTaepsa8UCWpGLE9Ex9IkY%2FWW4tZDcqOXM%3D\"]"
                                    },
                                    {
                                        "name": "Documentos de Startups",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/fa102155-33cd-4e32-b044-ed64da8781be/Pitchdeck_IMPRESSORAKITKAT_NOVIGA.pdf?expires_on=1718110439&signature=hmXOCBelAhzIXF%2FUBNXpcgS08aFvEbx4xJIqcyu3dQE%3D\"]"
                                    },
                                    {
                                        "name": "Aprovação do Piloto",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/2c8a5979-4829-49cd-a339-ba6e270efb85/AprovaoPiloto_IMPRESSORAKITKAT_NOVIGA.msg?expires_on=1718110439&signature=85DqF8qJ1F%2F%2BTBzVB%2BOOPVmRGtbcd9Fhd6fyCGw15KU%3D\"]"
                                    },
                                    {
                                        "name": "NFs",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/98620e13-e3b8-46ec-923d-7b04fce1e0d7/123_IMPRESSORAKITKAT_NOVIGANF2.pdf?expires_on=1718110439&signature=yQIvGGO3AoAIgtzDNMffU3rPVawWQ5XWNFnOwoEYitw%3D\", \"https://app.pipefy.com/storage/v1/signed/uploads/8565ebc1-0efc-4f0c-a4f3-894e9ddddcf9/119_IMPRESSORAKITKAT_NOVIGANF1.pdf?expires_on=1718110439&signature=0P3PElcABSkj3pDbd4E8JZbv1ujuWBU9HXckca4l4kc%3D\", \"https://app.pipefy.com/storage/v1/signed/uploads/3d5d1b53-2ee7-4b9c-9fe7-947f39352177/20231_DIGITALPRINTKK_PHPRINTERS.PDF?expires_on=1718110439&signature=w8QSUsPrO6RbcYrdDNrvXxeYXkFqSkNeDgipYCFZd%2Fc%3D\"]"
                                    },
                                    {
                                        "name": "Link do Mural de Imersão",
                                        "value": "https://app.mural.co/t/innoscience7386/m/innoscience7386/1670099542601/f289380327167bc3004a9459fd16fd39f99f75cf?sender=u1d14ac12ef5c787815528441"
                                    },
                                    {
                                        "name": "Mural de Imersão",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/add6bdf1-35c4-4e4a-9f5d-e565de02cf5b/KitkatImerso_2023-07-24_18-53-10.pdf?expires_on=1718110439&signature=ACtATRqQj8WCbgsszQDCUGUX%2FxmKK9MH75H2%2B1M00mw%3D\"]"
                                    },
                                    {
                                        "name": "Contrato do Piloto",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/1004407b-445a-4281-8b99-61c0ecf2e284/ContratoPiloto_IMPRESSORAKITKAT_PHPRINTERS.pdf?expires_on=1718110439&signature=P50lH7aSrKrHBZAiPqw%2BWMgWJqIdn8iAvNpFUfL78xY%3D\", \"https://app.pipefy.com/storage/v1/signed/uploads/7013ae24-a99b-4029-8cb7-6456f96fb19f/ContratoPiloto_IMPRESSORAKITKAT_NOVIGA.pdf?expires_on=1718110439&signature=8HdOIQHXYNzg217b9kk5bk65jkuhbl5zhCWL5BlOWdg%3D\"]"
                                    },
                                    {
                                        "name": "Concorrência",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/dbbf5116-fc18-4ae7-9824-15cad7fefab8/ConcorrnciaCanvas_IMPRESSORAKITKAT_PHPRINTERS.xlsx?expires_on=1718110439&signature=xUngPS3VGcym5rxXZAabBh%2FYhpc%2FSB8Aqtqd5nkNUF4%3D\", \"https://app.pipefy.com/storage/v1/signed/uploads/19c77b60-68c9-4b72-a1a8-0cb48a073537/ConcorrnciaCanvas_IMPRESSORAKITKAT_NOVIGA.xlsx?expires_on=1718110439&signature=FUNERB%2F1I%2BuSmz8DOQDREQSpFQ2SwxcuX3dIDsN82Bo%3D\"]"
                                    },
                                    {
                                        "name": "Proposta do Piloto",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/61c09174-366e-4f5c-b466-9b9575144236/PropostaPiloto_IMPRESSORAKITKAT_NOVIGAPHPRINTERS.pptx?expires_on=1718110439&signature=E9aLRtdoSH5ySpu4kQ%2FW1DHhvuQ%2FSUdhtePqfRGqIcQ%3D\"]"
                                    },
                                    {
                                        "name": "Proposta de Piloto Aprovada?",
                                        "value": "Sim"
                                    },
                                    {
                                        "name": "Email do ponto focal do Negócio",
                                        "value": "marco.vicente1@br.nestle.com"
                                    }
                                ],
                                "labels": [
                                    {
                                        "name": "Inovação"
                                    }
                                ],
                                "phases_history": [
                                    {
                                        "phase": {
                                            "name": "Start form"
                                        },
                                        "firstTimeIn": "2023-09-13T21:52:55+00:00",
                                        "lastTimeOut": "2023-09-13T21:52:55+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "01. Backlog"
                                        },
                                        "firstTimeIn": "2023-09-13T21:52:55+00:00",
                                        "lastTimeOut": "2023-12-01T20:34:00+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "02. Discovery"
                                        },
                                        "firstTimeIn": "2023-10-31T03:18:02+00:00",
                                        "lastTimeOut": "2023-12-05T19:56:12+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "03. Proposta de Solução e Experimentação"
                                        },
                                        "firstTimeIn": "2023-09-14T13:31:28+00:00",
                                        "lastTimeOut": null
                                    }
                                ],
                                "url": "http://app.pipefy.com/pipes/303523960#cards/792537232"
                            }
                        },
                        {
                            "cursor": "WyIyMDIzLTA5LTEzIDIxOjUyOjU1LjgwMDQ1OTAwMCBVVEMiLCIzLjAiLDc5MjUzNzIzN10",
                            "node": {
                                "id": "792537237",
                                "title": "Projeto Nostalgia Roblox",
                                "assignees": [
                                    {
                                        "id": "302617520"
                                    },
                                    {
                                        "id": "303172996"
                                    }
                                ],
                                "comments": [],
                                "comments_count": 0,
                                "current_phase": {
                                    "name": "03. Proposta de Solução e Experimentação"
                                },
                                "done": false,
                                "due_date": null,
                                "fields": [
                                    {
                                        "name": "Nome do Desafio",
                                        "value": "Projeto Nostalgia Roblox"
                                    },
                                    {
                                        "name": "Subárea",
                                        "value": "Chocolates"
                                    },
                                    {
                                        "name": "Área Requisitante",
                                        "value": "Confectionery"
                                    },
                                    {
                                        "name": "Responsável",
                                        "value": "[\"Larissa Nascimento\"]"
                                    },
                                    {
                                        "name": "Inclua arquivos ou materiais de apoio sobre o de desafio, ou até tentativas de resoluções e projetos passados que tratem do mesmo tema",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/646d528e-ae9c-4469-bc7d-2e875ef27956/PresentationProjetoNostalgia.pptx?expires_on=1718110439&signature=V9kmNvPkW0XyrkLycJPhixJHWU3Cg73z6AuJpcMfsR8%3D\", \"https://app.pipefy.com/storage/v1/signed/uploads/f00e2741-2fa0-45b2-9390-70a56faa38d2/scorecard_robloxsurpresa1.xlsx?expires_on=1718110439&signature=QDf2AMVUTlFJeYN22pslDOBLv%2BcJm9MY4xExC05fjTE%3D\"]"
                                    },
                                    {
                                        "name": "NDAs",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/b5ff22d3-a762-41b1-ae9c-1cb287e127ef/Druid-NDA-NestleAgo_2022-Assinado.pdf?expires_on=1718110439&signature=eqTlujr6j5%2FNGcaef9M9ztFRvQKSgCgKex3GO9LIpsA%3D\"]"
                                    },
                                    {
                                        "name": "Pitch Reverso",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/08854de0-0f02-4fdb-b071-83a82b5befce/PresentationProjetoNostalgia.pptx?expires_on=1718110439&signature=budSzY7SSb9rmEvsOUhkXd0J2sxvhFdCWodMH6l8Lag%3D\"]"
                                    },
                                    {
                                        "name": "Qual a receita anual prevista deste incremento?",
                                        "value": "0,00"
                                    },
                                    {
                                        "name": "Qual o valor anual previsto de risco dessa reputação?",
                                        "value": "0,00"
                                    },
                                    {
                                        "name": "Como se chegou a este benefício (R$)?",
                                        "value": ""
                                    },
                                    {
                                        "name": "Defesa do Desafio",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/90d608ee-e5b7-4b64-8180-208630ccc2c5/BriefingProjetoNostalgia.pptx?expires_on=1718110439&signature=rDfdfsFjiyn8Ug0i51CIVwsmLsh51HY5O45zpzJGswI%3D\", \"https://app.pipefy.com/storage/v1/signed/uploads/cb87ca86-191d-43d4-9b85-e5a50b24caff/Confectionary_Roblox.pptx?expires_on=1718110439&signature=iDY3cuaR2trmVc%2BZqVGKd1ovTer3dUm4k6WK804iGo8%3D\"]"
                                    },
                                    {
                                        "name": "Proposta de Piloto Aprovada?",
                                        "value": "Sim"
                                    },
                                    {
                                        "name": "Aprovação do Piloto",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/74ed0fa2-276f-4821-82db-1f15d160fadb/Aprovaodoprojetoeoramento.msg?expires_on=1718110439&signature=l9%2Fq9qoRg2MZ0PJHHDq5TmXxX0idYk4RU3RdmnG7BT0%3D\"]"
                                    },
                                    {
                                        "name": "Documentos de Startups",
                                        "value": "[]"
                                    },
                                    {
                                        "name": "Data de Kick Off do Projeto",
                                        "value": "04/12/2023"
                                    },
                                    {
                                        "name": "NFs",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/afbf4002-d321-4768-9b31-97a5f8c89f06/NF1-PO4574127858Roblox.pdf?expires_on=1718110439&signature=gzyT5zTZYDQ%2B4qKxq75iFnc7NUpZlMSrVkalpI2xHAM%3D\"]"
                                    },
                                    {
                                        "name": "PO",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/9f11d504-dfdb-40d8-bb4d-80772019ffc3/PO4574127858-DespesasProjetoNostalgia2023.pdf?expires_on=1718110439&signature=fk4tzAlTvf60kuilu3Xx1Hgci4K53tBtbnwjVDiGyNQ%3D\"]"
                                    },
                                    {
                                        "name": "Concorrência",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/fc43cfc3-c6c4-467a-8c08-a69cd0de9924/RFQ5439-VendorTracker-ROBLOXDEV-ChocolatSurpresa2024.xlsx?expires_on=1718110439&signature=WLFgbl%2F6wTa84UwznzCzLwrOwEfpTo%2B%2BZouQUOjkpP0%3D\", \"https://app.pipefy.com/storage/v1/signed/uploads/6076ff96-9f33-4c7e-983b-84407959b540/scorecard_robloxsurpresa.xlsx?expires_on=1718110439&signature=hsRLiW3wR4jJhcyGd6FX0Prb3VZ5CSXtycyJwZ0yVBM%3D\"]"
                                    },
                                    {
                                        "name": "Data de Priorização do Desafio pelo BEO",
                                        "value": "01/11/2023 00:00"
                                    },
                                    {
                                        "name": "Avaliação de startups pitch day",
                                        "value": "[]"
                                    },
                                    {
                                        "name": "Observações - Imersão",
                                        "value": ""
                                    },
                                    {
                                        "name": "Como este desafio está afetando a companhia?",
                                        "value": "O chocolate Surpresa será relançado no mercado no final de Q1’24 sem o card icônico dos anos 90. Temos a missão de reviver a experiência do colecionável para um formato que converse com a geração Z e que seja acessível. Com esse contexto, entendemos que o território de games, especificamente a plataforma Roblox, é o ideal para entrada pensando nos números expressivos de usuários da plataforma de 66 milhões de usuários ativos com o Brasil sendo o 2º maior em engajamento. Além de trazer a experiência do colecionável, precisamos incluir o viés de sensibilização para preservação do meio ambiente com missões internas de preservação."
                                    },
                                    {
                                        "name": "Outras informações",
                                        "value": "IMPORTANTE: Esse projeto não faz parte da metodologia do Panela Startups conhecidos como Batchs ou Ondas, portanto não teremos Imersão, Demoday nos formatos tradicionais de outros projetos. Com isso, os materiais que explicam o projeto estarão nos anexos com as nomenclaturas indicativas ex: proposta comercial do fornecedor, scorecard/concorrência, aprovação pela BU para início, etc. "
                                    },
                                    {
                                        "name": "Descreva o Desafio",
                                        "value": "Desenvolvimento de um jogo dentro da plataforma Roblox para (re)lançamento do Chocolate Surpresa e aproximação com a geração Z."
                                    },
                                    {
                                        "name": "Observações - Piloto",
                                        "value": "Número do fornecedor: 0101344854\n"
                                    },
                                    {
                                        "name": "Proposta do Piloto",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/ba936453-8404-42c3-9c7e-33f1562ace07/Druid_Rogue_Nestle_Roblox_Proposta.pdf?expires_on=1718110439&signature=8gb8jSaHgR4JbHzQN3P8bs55oc5DE8Oi7kmi8ZN56rE%3D\", \"https://app.pipefy.com/storage/v1/signed/uploads/3f800b6a-bc51-4bfe-8510-835276d12482/RFP-RFQ5439-ROBLOX-DEV_Mundo_Surpresa_Rogue_02.11.23..pdf?expires_on=1718110439&signature=9cOMYMHWMWCLesoJieqs9yzZ85pG7pt2JvNKu%2BQBoYc%3D\", \"https://app.pipefy.com/storage/v1/signed/uploads/a56da43f-faef-47fa-aa2c-81e6823263ea/MundoSurpresa-GDDV1.3.pdf?expires_on=1718110439&signature=pOXEYPuPiXrDsZImQOuQ0%2Bj%2BBifAJmktjEtVo%2F%2BUxJA%3D\"]"
                                    },
                                    {
                                        "name": "Data de validação do Piloto pelo BEO",
                                        "value": ""
                                    },
                                    {
                                        "name": "Email do Solicitante",
                                        "value": "nathaly.glashan@br.nestle.com"
                                    },
                                    {
                                        "name": "Email do ponto focal do Negócio",
                                        "value": "isabella.joaquim@br.nestle.com"
                                    },
                                    {
                                        "name": "Qual o principal benefício que uma possível solução a este desafio pode trazer?",
                                        "value": "[\"Reputação/IQEM\", \"Uplift\"]"
                                    },
                                    {
                                        "name": "Quais objetivos a área pretende alcançar ao resolver o desafio?",
                                        "value": "Relançamento de uma marca icônica associado a uma plataforma de games; aumentar o awareness da marca e experimentar um novo território que pode ser uma plataforma perene para marcas Nestlé."
                                    },
                                    {
                                        "name": "Já existe uma solução mapeada? Qual?",
                                        "value": "Usaremos a plataforma de games Roblox para desenvolvimento do \"Mundo Surpresa\" um jogo tipo farming onde o jogador terá sua propria plantação de cacau assim como outros assets de fazenda (galinhas e vacas). As mecânicas de cultivo e cuidado serão as boas práticas de agricultura regenerativa, teremos os animais do chocolate surpresa apoiando nas missões ambientais entre outras mecânicas de gameplay."
                                    },
                                    {
                                        "name": "Qual público mais impactado atualmente por este desafio?.",
                                        "value": "[\"Consumidor Final\", \"Áreas Internas\"]"
                                    },
                                    {
                                        "name": "Quantas áreas estão sendo impactadas por este desafio?",
                                        "value": "5 ou mais"
                                    }
                                ],
                                "labels": [
                                    {
                                        "name": "Inovação"
                                    }
                                ],
                                "phases_history": [
                                    {
                                        "phase": {
                                            "name": "Start form"
                                        },
                                        "firstTimeIn": "2023-09-13T21:52:55+00:00",
                                        "lastTimeOut": "2023-09-13T21:52:56+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "01. Backlog"
                                        },
                                        "firstTimeIn": "2023-09-13T21:52:56+00:00",
                                        "lastTimeOut": "2023-11-01T20:53:10+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "02. Discovery"
                                        },
                                        "firstTimeIn": "2023-10-26T20:05:45+00:00",
                                        "lastTimeOut": "2024-01-11T20:17:58+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "03. Proposta de Solução e Experimentação"
                                        },
                                        "firstTimeIn": "2023-10-26T20:07:19+00:00",
                                        "lastTimeOut": null
                                    }
                                ],
                                "url": "http://app.pipefy.com/pipes/303523960#cards/792537237"
                            }
                        },
                        {
                            "cursor": "WyIyMDIzLTA5LTE0IDE4OjI2OjA2Ljk1OTE5MDAwMCBVVEMiLCIxMS41Iiw3OTI5ODMzMTBd",
                            "node": {
                                "id": "792983310",
                                "title": "Plataforma Oncologia_Redfox",
                                "assignees": [],
                                "comments": [],
                                "comments_count": 0,
                                "current_phase": {
                                    "name": "08. Post-Mortem Piloto"
                                },
                                "done": false,
                                "due_date": null,
                                "fields": [
                                    {
                                        "name": "Nome do Desafio",
                                        "value": "Plataforma Oncologia_Redfox"
                                    },
                                    {
                                        "name": "Área Requisitante",
                                        "value": "Nestlé Health Science"
                                    },
                                    {
                                        "name": "Descreva o Desafio",
                                        "value": "Plataforma digital (web) de Indicadores de Terapia Nutricional para pacientes oncológicos"
                                    },
                                    {
                                        "name": "Email do Solicitante",
                                        "value": "karina.gomide@br.nestle.com"
                                    },
                                    {
                                        "name": "Email do ponto focal do Negócio",
                                        "value": "Patricia.Ferreira@br.nestle.com"
                                    },
                                    {
                                        "name": "Como este desafio está afetando a companhia?",
                                        "value": "A área de negócios de Nestlé Health Science identificou um gap no suporte nutricional a pacientes oncológicos, com isso buscamos a montagem de uma plataforma de gestão dessas atividades para os nutricionistas. Acreditamos que essa solução tem um potencial de apoiar e trazer fidelidade para nutricionistas desse setor."
                                    },
                                    {
                                        "name": "Quais objetivos a área pretende alcançar ao resolver o desafio?",
                                        "value": "Criação de um novo serviço que atenda à necessidade de apoio nutricional de pacientes oncológicos."
                                    },
                                    {
                                        "name": "Quantas áreas estão sendo impactadas por este desafio?",
                                        "value": "1 a 2"
                                    },
                                    {
                                        "name": "Qual público mais impactado atualmente por este desafio?.",
                                        "value": "[\"Consumidor Final\"]"
                                    },
                                    {
                                        "name": "Outras informações",
                                        "value": "O projeto não mostrou-se relevante para os nutricionistas foco, a plataforma é funcional, mas entendemos que no momento de uso não endereçou uma dor foco do público em questão."
                                    },
                                    {
                                        "name": "Qual o principal benefício que uma possível solução a este desafio pode trazer?",
                                        "value": "[\"Uplift\"]"
                                    },
                                    {
                                        "name": "Qual a receita anual prevista deste incremento?",
                                        "value": "0,00"
                                    },
                                    {
                                        "name": "PO",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/5bcc0a3d-2331-47c9-84ed-6d55d998f008/4571105934_PLATAFORMANUTRICIONALONCOLOGIA_REDFOX.pdf?expires_on=1718110439&signature=ZPe4mZ3Oi2vfUra6OH7E57IajY%2BpsIhFJiLCtbMxs1w%3D\"]"
                                    },
                                    {
                                        "name": "Proposta de Piloto Aprovada?",
                                        "value": "Sim"
                                    }
                                ],
                                "labels": [
                                    {
                                        "name": "Inovação"
                                    }
                                ],
                                "phases_history": [
                                    {
                                        "phase": {
                                            "name": "Start form"
                                        },
                                        "firstTimeIn": "2023-09-14T18:26:07+00:00",
                                        "lastTimeOut": "2023-09-14T18:26:07+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "01. Backlog"
                                        },
                                        "firstTimeIn": "2023-09-14T18:26:07+00:00",
                                        "lastTimeOut": "2023-09-14T18:28:36+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "03. Proposta de Solução e Experimentação"
                                        },
                                        "firstTimeIn": "2023-12-11T18:58:21+00:00",
                                        "lastTimeOut": "2024-02-21T13:17:32+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "08. Post-Mortem Piloto"
                                        },
                                        "firstTimeIn": "2023-09-14T18:32:27+00:00",
                                        "lastTimeOut": null
                                    }
                                ],
                                "url": "http://app.pipefy.com/pipes/303523960#cards/792983310"
                            }
                        },
                        {
                            "cursor": "WyIyMDIzLTA5LTE0IDE4OjI2OjA3LjMyNDIzMTAwMCBVVEMiLCI1Ljc1Iiw3OTI5ODMzMTRd",
                            "node": {
                                "id": "792983314",
                                "title": "Biousina: Bioenergia Araras_Luming",
                                "assignees": [
                                    {
                                        "id": "303172994"
                                    }
                                ],
                                "comments": [],
                                "comments_count": 0,
                                "current_phase": {
                                    "name": "06. Incorporado"
                                },
                                "done": false,
                                "due_date": null,
                                "fields": [
                                    {
                                        "name": "Nome do Desafio",
                                        "value": "Biousina: Bioenergia Araras_Luming"
                                    },
                                    {
                                        "name": "Área Requisitante",
                                        "value": "Técnica e Produção"
                                    },
                                    {
                                        "name": "Descreva o Desafio",
                                        "value": "Implementação de biousinas para transformação energética de resíduos industriais da fábrica de Araras (Nestlé)."
                                    },
                                    {
                                        "name": "Email do Solicitante",
                                        "value": "karina.gomide@br.nestle.com"
                                    },
                                    {
                                        "name": "Email do ponto focal do Negócio",
                                        "value": "edson.vicente@br.nestle.com"
                                    },
                                    {
                                        "name": "Como este desafio está afetando a companhia?",
                                        "value": "Há hoje um alto custo de tratamento de resíduos diversos das fábricas Nestlé, que geram custos para realização de tratamento apropriado mas que se baseiam em soluções técnicas de despejo pouco sustentáveis. Visamos baratear o processo de eliminação de resíduos fabris com soluções mais sustentáveis."
                                    },
                                    {
                                        "name": "Quais objetivos a área pretende alcançar ao resolver o desafio?",
                                        "value": "Realizar o tratamento de resíduos industriais com despesa reduzida e implementação de processos mais sustentáveis para o meio ambiente."
                                    },
                                    {
                                        "name": "Quantas áreas estão sendo impactadas por este desafio?",
                                        "value": "1 a 2"
                                    },
                                    {
                                        "name": "Qual público mais impactado atualmente por este desafio?.",
                                        "value": "[\"Áreas Internas\"]"
                                    },
                                    {
                                        "name": "Outras informações",
                                        "value": ""
                                    },
                                    {
                                        "name": "Qual o valor anual previsto desta eficiência?",
                                        "value": "15.000,00"
                                    },
                                    {
                                        "name": "Responsável",
                                        "value": "[\"Karina Gomide\"]"
                                    },
                                    {
                                        "name": "NDAs",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/2c5b78f4-3117-47e4-a71f-10239f678437/NDA_BIOENERGIAARARAS_LUMING.pdf?expires_on=1718110439&signature=RKkkD%2FAKRd8cWOVCz4VGVR7dmrONoVwcKCYzLsHdaHQ%3D\"]"
                                    },
                                    {
                                        "name": "Avaliação de startups pitch day",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/1699b8da-6fa8-4ef0-ab70-519fc12bee68/Avaliaodasstartups_BIOENERGIAARARAS.pdf?expires_on=1718110439&signature=7LSknsYn8VbH2ZL2%2FYFKQ3%2BscosrWaDLVXD2yrdDS%2BU%3D\"]"
                                    },
                                    {
                                        "name": "Documentos de Startups",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/da6669f5-6efd-47cf-98b1-d2e241d60a84/Pitchdeck_BIOENERGIAARARAS_LUMING.pdf?expires_on=1718110439&signature=guvCDbSVxplGZzN0IomRS2tDqIc4xT5vCpb%2F7CUIpq0%3D\"]"
                                    },
                                    {
                                        "name": "Mural de Imersão",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/c82737cd-6987-415f-bee3-2153da15debd/MuraldeImerso_BIOENERGIAARARAS_LUMING.pptx?expires_on=1718110439&signature=RTs%2BMdBsx2e5HHNdt0Urr%2Favegu1uzoKM%2BNWy2cEk7s%3D\"]"
                                    },
                                    {
                                        "name": "Proposta de Piloto Aprovada?",
                                        "value": "Sim"
                                    },
                                    {
                                        "name": "PO",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/8e004027-50c3-4cf6-b596-68c597e2bc69/4570945310_BIOUSINAARARAS_LUMING.pdf?expires_on=1718110439&signature=r8iOnzJBXtBGOqxaMUEU5UAjKDiOsXIkAiYjsUP0DP8%3D\"]"
                                    }
                                ],
                                "labels": [
                                    {
                                        "name": "Inovação"
                                    }
                                ],
                                "phases_history": [
                                    {
                                        "phase": {
                                            "name": "Start form"
                                        },
                                        "firstTimeIn": "2023-09-14T18:26:07+00:00",
                                        "lastTimeOut": "2023-09-14T18:26:07+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "01. Backlog"
                                        },
                                        "firstTimeIn": "2023-09-14T18:26:07+00:00",
                                        "lastTimeOut": "2023-09-14T18:29:04+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "02. Discovery"
                                        },
                                        "firstTimeIn": "2023-10-31T03:18:36+00:00",
                                        "lastTimeOut": "2023-12-05T19:39:47+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "03. Proposta de Solução e Experimentação"
                                        },
                                        "firstTimeIn": "2023-12-05T19:30:09+00:00",
                                        "lastTimeOut": "2024-02-21T13:17:44+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "04. Implementação"
                                        },
                                        "firstTimeIn": "2023-12-05T19:41:31+00:00",
                                        "lastTimeOut": "2024-02-21T13:20:07+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "05. Desenvolvimento de Business Case"
                                        },
                                        "firstTimeIn": "2023-11-27T16:30:05+00:00",
                                        "lastTimeOut": "2023-11-27T17:32:36+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "06. Incorporado"
                                        },
                                        "firstTimeIn": "2023-11-27T17:32:36+00:00",
                                        "lastTimeOut": null
                                    }
                                ],
                                "url": "http://app.pipefy.com/pipes/303523960#cards/792983314"
                            }
                        },
                        {
                            "cursor": "WyIyMDIzLTA5LTE0IDE4OjI2OjA3LjYwNjk0NjAwMCBVVEMiLCI1Ljc1Iiw3OTI5ODMzMThd",
                            "node": {
                                "id": "792983318",
                                "title": "Biofertilizante Araçatuba_Luming",
                                "assignees": [
                                    {
                                        "id": "303172994"
                                    }
                                ],
                                "comments": [],
                                "comments_count": 0,
                                "current_phase": {
                                    "name": "06. Incorporado"
                                },
                                "done": false,
                                "due_date": null,
                                "fields": [
                                    {
                                        "name": "Nome do Desafio",
                                        "value": "Biofertilizante Araçatuba_Luming"
                                    },
                                    {
                                        "name": "Área Requisitante",
                                        "value": "Técnica e Produção"
                                    },
                                    {
                                        "name": "Email do Solicitante",
                                        "value": "karina.gomide@br.nestle.com"
                                    },
                                    {
                                        "name": "Email do ponto focal do Negócio",
                                        "value": "marina.pereira@br.nestle.com"
                                    },
                                    {
                                        "name": "Descreva o Desafio",
                                        "value": "Estação de tratamento de resíduos industriais de Araçatuba para conversão de água evaporada + bioproduto."
                                    },
                                    {
                                        "name": "Como este desafio está afetando a companhia?",
                                        "value": "Há hoje um alto custo de tratamento de resíduos diversos das fábricas Nestlé, que geram custos para realização de tratamento apropriado mas que se baseiam em soluções técnicas de despejo pouco sustentáveis. Visamos baratear o processo de eliminação de resíduos fabris com soluções mais sustentáveis."
                                    },
                                    {
                                        "name": "Quais objetivos a área pretende alcançar ao resolver o desafio?",
                                        "value": "Realizar o tratamento de resíduos industriais com despesa reduzida e implementação de processos mais sustentáveis para o meio ambiente."
                                    },
                                    {
                                        "name": "Qual público mais impactado atualmente por este desafio?.",
                                        "value": "[\"Clientes Externos (Ex.: Varejistas)\", \"Áreas Internas\"]"
                                    },
                                    {
                                        "name": "Quantas áreas estão sendo impactadas por este desafio?",
                                        "value": "1 a 2"
                                    },
                                    {
                                        "name": "Outras informações",
                                        "value": "O projeto de Araçatuba é um desdobramento do piloto iniciado em Araras. Além das vantagens em redução de valores de despesas de tratamento de resíduos e implementação de metodologia mais sustentável para o meio ambiente, a startup conseguiu identificar a possibilidade de produção de biofertilizante que poderia ser comerciado com empresas / produtores da região de Araçatuba criando um cenário de fonte de renda para a startup a partir da venda desse biofertilizando que permitiria uma negociação especial de preços com a Nestlé - modelo em avaliação.\nA diferenciação das fábricas em si gera diferentes resíduos, por isso é importante a avaliação particular de cada conjunto de resíduos."
                                    },
                                    {
                                        "name": "Qual o valor anual previsto desta eficiência?",
                                        "value": "15.000,00"
                                    },
                                    {
                                        "name": "Responsável",
                                        "value": "[\"Karina Gomide\"]"
                                    },
                                    {
                                        "name": "Qual o principal benefício que uma possível solução a este desafio pode trazer?",
                                        "value": "[\"Compliance/Legal/SHE\"]"
                                    }
                                ],
                                "labels": [
                                    {
                                        "name": "Inovação"
                                    }
                                ],
                                "phases_history": [
                                    {
                                        "phase": {
                                            "name": "Start form"
                                        },
                                        "firstTimeIn": "2023-09-14T18:26:07+00:00",
                                        "lastTimeOut": "2023-09-14T18:26:07+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "01. Backlog"
                                        },
                                        "firstTimeIn": "2023-09-14T18:26:07+00:00",
                                        "lastTimeOut": "2023-09-14T18:29:15+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "02. Discovery"
                                        },
                                        "firstTimeIn": "2023-10-31T03:18:31+00:00",
                                        "lastTimeOut": "2023-11-27T16:29:56+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "04. Implementação"
                                        },
                                        "firstTimeIn": "2024-02-21T13:19:08+00:00",
                                        "lastTimeOut": "2024-02-21T13:21:12+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "05. Desenvolvimento de Business Case"
                                        },
                                        "firstTimeIn": "2023-11-27T16:29:56+00:00",
                                        "lastTimeOut": "2023-11-27T17:32:30+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "06. Incorporado"
                                        },
                                        "firstTimeIn": "2023-11-27T17:32:30+00:00",
                                        "lastTimeOut": null
                                    }
                                ],
                                "url": "http://app.pipefy.com/pipes/303523960#cards/792983318"
                            }
                        },
                        {
                            "cursor": "WyIyMDIzLTA5LTE0IDE4OjI2OjA3LjkzMjM2OTAwMCBVVEMiLCIxLjc1Iiw3OTI5ODMzMjNd",
                            "node": {
                                "id": "792983323",
                                "title": "Plástico reciclado em KK",
                                "assignees": [
                                    {
                                        "id": "303172994"
                                    }
                                ],
                                "comments": [],
                                "comments_count": 0,
                                "current_phase": {
                                    "name": "02. Discovery"
                                },
                                "done": false,
                                "due_date": null,
                                "fields": [
                                    {
                                        "name": "Nome do Desafio",
                                        "value": "Plástico reciclado em KK"
                                    },
                                    {
                                        "name": "Email do Solicitante",
                                        "value": "carolina.falcoski@br.nestle.com"
                                    },
                                    {
                                        "name": "Área Requisitante",
                                        "value": "TDB"
                                    },
                                    {
                                        "name": "Descreva o Desafio",
                                        "value": "Substitução de 1/3 das embalagens plásticas de Kitkat para plástico reciclável."
                                    },
                                    {
                                        "name": "Responsável",
                                        "value": "[\"Karina Gomide\"]"
                                    }
                                ],
                                "labels": [
                                    {
                                        "name": "Inovação"
                                    }
                                ],
                                "phases_history": [
                                    {
                                        "phase": {
                                            "name": "Start form"
                                        },
                                        "firstTimeIn": "2023-09-14T18:26:07+00:00",
                                        "lastTimeOut": "2023-09-14T18:26:08+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "01. Backlog"
                                        },
                                        "firstTimeIn": "2023-09-14T18:26:08+00:00",
                                        "lastTimeOut": "2023-11-09T20:44:49+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "02. Discovery"
                                        },
                                        "firstTimeIn": "2023-11-09T20:44:49+00:00",
                                        "lastTimeOut": null
                                    }
                                ],
                                "url": "http://app.pipefy.com/pipes/303523960#cards/792983323"
                            }
                        },
                        {
                            "cursor": "WyIyMDIzLTA5LTE0IDE4OjI2OjA4LjIyNzA4MTAwMCBVVEMiLCIxLjc1Iiw3OTI5ODMzMjZd",
                            "node": {
                                "id": "792983326",
                                "title": "Proteína de feijão",
                                "assignees": [
                                    {
                                        "id": "303172994"
                                    }
                                ],
                                "comments": [],
                                "comments_count": 0,
                                "current_phase": {
                                    "name": "02. Discovery"
                                },
                                "done": false,
                                "due_date": null,
                                "fields": [
                                    {
                                        "name": "Nome do Desafio",
                                        "value": "Proteína de feijão"
                                    },
                                    {
                                        "name": "Email do Solicitante",
                                        "value": "carolina.falcoski@br.nestle.com"
                                    },
                                    {
                                        "name": "Área Requisitante",
                                        "value": "TDB"
                                    },
                                    {
                                        "name": "Descreva o Desafio",
                                        "value": "Desenvolvimento de uma proteína de feijão - fonte proteica vegetal local - há uma dependencia hoje de importação deste tipo de proteína"
                                    },
                                    {
                                        "name": "Responsável",
                                        "value": "[\"Karina Gomide\"]"
                                    }
                                ],
                                "labels": [
                                    {
                                        "name": "Inovação"
                                    }
                                ],
                                "phases_history": [
                                    {
                                        "phase": {
                                            "name": "Start form"
                                        },
                                        "firstTimeIn": "2023-09-14T18:26:08+00:00",
                                        "lastTimeOut": "2023-09-14T18:26:08+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "01. Backlog"
                                        },
                                        "firstTimeIn": "2023-09-14T18:26:08+00:00",
                                        "lastTimeOut": "2023-11-09T20:44:51+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "02. Discovery"
                                        },
                                        "firstTimeIn": "2023-11-09T20:44:51+00:00",
                                        "lastTimeOut": null
                                    }
                                ],
                                "url": "http://app.pipefy.com/pipes/303523960#cards/792983326"
                            }
                        },
                        {
                            "cursor": "WyIyMDIzLTA5LTE0IDE4OjI2OjA4LjUyNzM3MTAwMCBVVEMiLCIxMS41Iiw3OTI5ODMzMzBd",
                            "node": {
                                "id": "792983330",
                                "title": "Atualização de dados pessoais_Hypeone",
                                "assignees": [
                                    {
                                        "id": "303172994"
                                    }
                                ],
                                "comments": [],
                                "comments_count": 0,
                                "current_phase": {
                                    "name": "08. Post-Mortem Piloto"
                                },
                                "done": false,
                                "due_date": null,
                                "fields": [
                                    {
                                        "name": "Nome do Desafio",
                                        "value": "Atualização de dados pessoais_Hypeone"
                                    },
                                    {
                                        "name": "Área Requisitante",
                                        "value": "RH"
                                    },
                                    {
                                        "name": "Descreva o Desafio",
                                        "value": "Para assegurar processos de contratação de terceiros de empresas mais sólidas e preparadas para atendimento Nestlé, o time de RH iniciou um processo de validação de documentação de empresas. Este processo envolve a análise manual de 8 documentos diferentes e atualização dos dados pessoais dos funcionários que estão sendo tercerizados. O piloto sendo conduzido com a Hypeone introduz a tecnologia de IA para análise semi automatizada da maior parte dos documentos - solução mobile de OCR/reconhecimento de texto em imagens para captura e validação de dados."
                                    },
                                    {
                                        "name": "Email do Solicitante",
                                        "value": "karina.gomide@br.nestle.com"
                                    },
                                    {
                                        "name": "Responsável",
                                        "value": "[\"Karina Gomide\"]"
                                    },
                                    {
                                        "name": "Proposta do Piloto",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/8ef5b195-5735-4903-b5a9-8af844316b4e/PropostaPiloto_ATUALIZAODEDADOSPESSOAIS_HYPEONE.pptx?expires_on=1718110439&signature=UrtuqJezP5cbIUOHVSoegljrJj56IekHPrDScxOQwkc%3D\"]"
                                    },
                                    {
                                        "name": "Apresentação do Demoday",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/586fe031-3df9-440e-8896-11d9e7186632/Demoday_ATUALIZAODEDADOSPESSOAIS_HYPEONE.pptx?expires_on=1718110439&signature=04ocof4FOy6pTBugWod7HCncDAyGyIrjy78wMQZjs60%3D\"]"
                                    },
                                    {
                                        "name": "Quem será o responsável em desenvolver a proposta de solução?",
                                        "value": "[\"Karina Gomide\"]"
                                    },
                                    {
                                        "name": "Data do Demoday",
                                        "value": "05/04/2023"
                                    },
                                    {
                                        "name": "PO",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/26d748f5-f402-408f-a7d0-a373bb2c9252/4571520539_ATUALIZAODEDADOS_HYPEONE.pdf?expires_on=1718110439&signature=xpzOS9Wu5yn9ud7cc2TARzHTu%2Fcik%2FkYgwkCoWOmfaU%3D\"]"
                                    },
                                    {
                                        "name": "Concorrência",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/74f280ec-e9b4-4215-8937-72100987af07/ConcorrnciaCanvas_ATUALIZAODEDADOSPESSOAIS_HYPEONE.xlsx?expires_on=1718110439&signature=4HADfZ%2FA77pasJAKbBO1T05r0UnNL4dQQtFnitWL4q8%3D\"]"
                                    },
                                    {
                                        "name": "NFs",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/0780b3c1-101d-4c98-9f62-74fcfc4deeea/2694_ATUALIZAODEDADOS_HYPEONE.pdf?expires_on=1718110439&signature=Ak08Miyj43OoG4xFyaQoIjnV5%2FIe1ZJWLE%2BDF0YeW%2FU%3D\"]"
                                    },
                                    {
                                        "name": "Qual o principal benefício que uma possível solução a este desafio pode trazer?",
                                        "value": "[\"Eficiência\"]"
                                    },
                                    {
                                        "name": "Qual o valor anual previsto desta eficiência?",
                                        "value": "400.000,00"
                                    },
                                    {
                                        "name": "Como se chegou a este benefício (R$)?",
                                        "value": "Valor considerado para a diferença entre escopo atual com NBS e implementação de sistemas com automação."
                                    },
                                    {
                                        "name": "Avaliação de startups pitch day",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/60afb3df-8a0f-4ab8-b35a-c048e7eaa069/Avaliaodasstartups_ATUALIZAODEDADOSPESSOAIS.pdf?expires_on=1718110439&signature=PEc9rZOisyBezp%2B2B49jKYr59eRWLBWj8LReKgT%2B%2Bio%3D\"]"
                                    },
                                    {
                                        "name": "NDAs",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/73b4a29d-6694-47c5-a106-b23f07e3f28e/NDA_ATUALIZAODEDADOSPESSOAIS_HYPERONE.pdf?expires_on=1718110439&signature=Q0JDb7Z%2FruSgBVWo3h2%2Bd6gKTBt5pvxV3EXRywMZwjY%3D\"]"
                                    },
                                    {
                                        "name": "Documentos de Startups",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/e21acfe3-6663-4a39-af12-527afed0de1c/Pitchdeck_ATUALIZAODEDADOSPESSOAIS_HYPEONE.pdf?expires_on=1718110439&signature=3Twmr4c6ddR3nDQ7AObyXeJH2JH6b1dtVnQevGPHF%2FU%3D\"]"
                                    },
                                    {
                                        "name": "Mural de Imersão",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/45e1c5d9-7add-456e-969c-65754ebbc9e0/MuraldeImerso_ATUALIZAODEDADOSPESSOAIS_HYPEONE.pdf?expires_on=1718110439&signature=ZaMT%2FlH%2F5jH4zTJdsYCjM1jo787YW6XpL08bbA6tHY4%3D\"]"
                                    },
                                    {
                                        "name": "Proposta de Piloto Aprovada?",
                                        "value": "Sim"
                                    },
                                    {
                                        "name": "Email do ponto focal do Negócio",
                                        "value": "sydney.ambrosio1@br.nestle.com"
                                    },
                                    {
                                        "name": "Como este desafio está afetando a companhia?",
                                        "value": "Após o time de rh responsáveis por terceiros implementar uma verificação de documentações de terceiros contratados e empresas terceiras contratadas, a dedicação de horas do time de NPS aumentou. O projeto visa automatizar total ou parcialmente o processo de validação de documentos de terceiros e empresas tercerizadas diminuindo horas alocadas do time de NPS e mantendo a garantia de contratações de baixo risco para a Nestlé."
                                    },
                                    {
                                        "name": "Quantas áreas estão sendo impactadas por este desafio?",
                                        "value": "1 a 2"
                                    },
                                    {
                                        "name": "Quais objetivos a área pretende alcançar ao resolver o desafio?",
                                        "value": "Diminuir o esforço e custo de validação de documentações de contratações terceiras"
                                    },
                                    {
                                        "name": "Qual público mais impactado atualmente por este desafio?.",
                                        "value": "[\"Áreas Internas\"]"
                                    },
                                    {
                                        "name": "Outras informações",
                                        "value": "Após apresentação no Demoday, o projeto mudou de sponsor (Isis Rebolças passou o projeto para o Sydney Ambrosio) e sempre houve um questionamento de se soluções de OCR não seriam a melhor solução para endereçar a problemática. Entendeu-se ao longo do piloto que alguns documentos não precisariam ser enviados por estarem associados ao CPF e CNPJ e poderiam ser validados por consultas em bases públicas com acesso pago (Serpro), mas que outros documentos são emitidos em modelos muito diferentes (certificados de especializações específicas, tal como operador de empilhadeira) e, por isso, devem ter seus modelos configurados para leitura de OCR - possivelmente modelos diferentes de documentos, precisarão de configurações diferentes para OCR."
                                    }
                                ],
                                "labels": [
                                    {
                                        "name": "Inovação"
                                    }
                                ],
                                "phases_history": [
                                    {
                                        "phase": {
                                            "name": "Start form"
                                        },
                                        "firstTimeIn": "2023-09-14T18:26:08+00:00",
                                        "lastTimeOut": "2023-09-14T18:26:08+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "01. Backlog"
                                        },
                                        "firstTimeIn": "2023-09-14T18:26:08+00:00",
                                        "lastTimeOut": "2023-09-14T19:26:59+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "02. Discovery"
                                        },
                                        "firstTimeIn": "2023-10-31T03:18:23+00:00",
                                        "lastTimeOut": "2023-12-18T18:14:13+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "03. Proposta de Solução e Experimentação"
                                        },
                                        "firstTimeIn": "2023-11-01T03:58:57+00:00",
                                        "lastTimeOut": "2024-02-21T13:17:55+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "06. Incorporado"
                                        },
                                        "firstTimeIn": "2023-11-27T16:27:51+00:00",
                                        "lastTimeOut": "2023-12-05T19:52:24+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "08. Post-Mortem Piloto"
                                        },
                                        "firstTimeIn": "2024-02-21T13:17:55+00:00",
                                        "lastTimeOut": null
                                    }
                                ],
                                "url": "http://app.pipefy.com/pipes/303523960#cards/792983330"
                            }
                        },
                        {
                            "cursor": "WyIyMDIzLTA5LTE0IDE4OjI2OjA4LjgzNTIyNjAwMCBVVEMiLCI1Ljc1Iiw3OTI5ODMzMzZd",
                            "node": {
                                "id": "792983336",
                                "title": "Desperdício - Professional B2B_Restin",
                                "assignees": [],
                                "comments": [],
                                "comments_count": 0,
                                "current_phase": {
                                    "name": "06. Incorporado"
                                },
                                "done": false,
                                "due_date": null,
                                "fields": [
                                    {
                                        "name": "Nome do Desafio",
                                        "value": "Desperdício - Professional B2B_Restin"
                                    },
                                    {
                                        "name": "Área Requisitante",
                                        "value": "Nestlé Professional"
                                    },
                                    {
                                        "name": "Email do Solicitante",
                                        "value": "karina.gomide@br.nestle.com"
                                    },
                                    {
                                        "name": "Email do ponto focal do Negócio",
                                        "value": "fernanda.silva@br.nestle.com"
                                    },
                                    {
                                        "name": "Como este desafio está afetando a companhia?",
                                        "value": "O time de DSP já testa modelos de escoamento de produtos próximos ao vencimento (Salvage e Pré Salvage) com vendas diretas a clientes que independente da Nestlé realizam a venda desses produtos sem suporte da Nestlé.\nDesejamos agora, com o time de Nestlé Professional testar um modelo de venda desse tipo de produtos (linha de doces) para um cliente que trabalhará com o clientes transformadores de vários ramos (modelo de venda B2B) e entender a recepção do consumidor na oferta de produtos por oportunidade."
                                    },
                                    {
                                        "name": "Descreva o Desafio",
                                        "value": "Entender formas de venda especializada de produtos de linha professional para empresas de pequeno porte de perfil variado, visando escoar produtos pré salvage e salvage para foodservices (Linha Professional). \nA startup parceira Restin já é especializada neste tipo de venda para produtos de linha salgada e explorará comerciantes com o perfil de linha doce."
                                    },
                                    {
                                        "name": "Quais objetivos a área pretende alcançar ao resolver o desafio?",
                                        "value": "Testar uma frente de escoamento de produtos Salvage e Pré Salvage a partir do centro de distribuição (CD) com foco B2B."
                                    },
                                    {
                                        "name": "Qual público mais impactado atualmente por este desafio?.",
                                        "value": "[\"Consumidor Final\", \"Áreas Internas\"]"
                                    },
                                    {
                                        "name": "Quantas áreas estão sendo impactadas por este desafio?",
                                        "value": "1 a 2"
                                    },
                                    {
                                        "name": "Qual o valor anual previsto desta eficiência?",
                                        "value": "2.000,00"
                                    },
                                    {
                                        "name": "Como se chegou a este benefício (R$)?",
                                        "value": "Vendas médias durante o piloto de 10 a 15mil ao ano"
                                    },
                                    {
                                        "name": "Qual o principal benefício que uma possível solução a este desafio pode trazer?",
                                        "value": "[\"Uplift\"]"
                                    },
                                    {
                                        "name": "Qual a receita anual prevista deste incremento?",
                                        "value": "180.000,00"
                                    },
                                    {
                                        "name": "Apresentação do Demoday",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/b7a95910-2916-4fce-8de1-00a7b1927d74/Demoday_COMBATEAODESPERDICIOB2B_RESTIN.pptx?expires_on=1718110439&signature=bVIeSElDERngfNjvodhZhDL43h1QfijXSg%2Futn4FeP8%3D\"]"
                                    },
                                    {
                                        "name": "Contrato do Piloto",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/92bd79a8-32fb-4f37-abfb-21a24b066313/ContratoPiloto_COMBATEAODESPERDICIO_RESTIN.pdf?expires_on=1718110439&signature=e08PisVqtpVM%2Fu0lMud5p3YqnDuBYmghHC0gYdGJhss%3D\"]"
                                    }
                                ],
                                "labels": [
                                    {
                                        "name": "Inovação"
                                    }
                                ],
                                "phases_history": [
                                    {
                                        "phase": {
                                            "name": "Start form"
                                        },
                                        "firstTimeIn": "2023-09-14T18:26:08+00:00",
                                        "lastTimeOut": "2023-09-14T18:26:09+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "01. Backlog"
                                        },
                                        "firstTimeIn": "2023-09-14T18:26:09+00:00",
                                        "lastTimeOut": "2023-09-14T18:29:54+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "03. Proposta de Solução e Experimentação"
                                        },
                                        "firstTimeIn": "2024-01-10T21:47:30+00:00",
                                        "lastTimeOut": "2024-01-10T21:48:04+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "06. Incorporado"
                                        },
                                        "firstTimeIn": "2023-11-08T17:37:33+00:00",
                                        "lastTimeOut": null
                                    }
                                ],
                                "url": "http://app.pipefy.com/pipes/303523960#cards/792983336"
                            }
                        },
                        {
                            "cursor": "WyIyMDIzLTA5LTIyIDExOjM2OjA3Ljg2MTM4NTAwMCBVVEMiLCIxMS4yNSIsNzk2MTI5OTU5XQ",
                            "node": {
                                "id": "796129959",
                                "title": "IoT para os dispensadores de bebidas quentes e frias de Nestlé Professional",
                                "assignees": [
                                    {
                                        "id": "302617520"
                                    }
                                ],
                                "comments": [],
                                "comments_count": 0,
                                "current_phase": {
                                    "name": "07. Não Priorizados"
                                },
                                "done": false,
                                "due_date": null,
                                "fields": [
                                    {
                                        "name": "Responsável",
                                        "value": "[\"Carolina Agostinho Falcoski\"]"
                                    },
                                    {
                                        "name": "Projeto Priorizado?",
                                        "value": "Não"
                                    },
                                    {
                                        "name": "Informe o motivo da não priorização",
                                        "value": "projeto está sendo tratado com o CIT"
                                    },
                                    {
                                        "name": "Nome do Desafio",
                                        "value": "IoT para os dispensadores de bebidas quentes e frias de Nestlé Professional"
                                    },
                                    {
                                        "name": "Email do Solicitante",
                                        "value": "laura.aviles@br.nestle.com"
                                    },
                                    {
                                        "name": "Email do ponto focal do Negócio",
                                        "value": "laura.aviles@br.nestle.com"
                                    },
                                    {
                                        "name": "Área Requisitante",
                                        "value": "Nestlé Professional"
                                    },
                                    {
                                        "name": "Subárea",
                                        "value": "Trade Assets"
                                    },
                                    {
                                        "name": "Descreva o Desafio",
                                        "value": "O principal desafio é encontrar mais fornecedores no mercado que se adequem ao parque de máquinas de café de Nestlé professional, visto que hoje estamos com disponibilidade apenas de um único fornecedor local. O principal objetivo é melhorar a qualidade do serviço e tecnologia, buscando aliar uma manutenção dos custos projetados atualmente ou até mesmo conseguir uma redução. \nO parque de máquinas elegível a instalação de telemetria YE 2023 é de 21.526 equipamentos, com crescimento estimado de 10% em 2024 e 2025, distribuído em todo território nacional.\n\nOs fornecedores devem obrigatóriamente atender ao seguintes requisitos:\n\t- Instalação de dispositivos de Telemetria em máquinas de café de Nestlé Professional em busca de obter dados técnicos e de venda remotamente. \n\t- As máquinas de café devem estar conectadas obrigatoriamente através de tecnologia de rede móvel multioperadora (5G/4G/3G) e rede sem fio (Wi-Fi). Um must seria ter dentro do IoT a mesma configuração de um celular, ou seja, conexão múltipla - ex.: está conectado no WiFi, se cai esta conexão entra no 5G/4G/3G automaticamente.\n\n\t- Como opção de disponibilização de dados devemos ter os seguintes cenários disponíveis - a ser validado pela unidade no ato da contratação de serviços:\n\tA) os dados coletados devem ser armazenados em uma plataforma Cloud, e disponível ao negócio em tempo real. Hoje utilizamos uma plataforma mobile integrada á nuvem para atividades in loco, e os dados são disponibilizados em um site e através de APIs.\n\tB) dados são transferidos diretamente do modem / máquina para plataforma Cloud indicada pela Nestlé, sem qualquer intervenção no trafego / tratamento dos dados\n\t\n\t- O dispositivo deve ser compatível com máquinas de café dos principais fornecedores do negócio (Rheavendors, Intretech, Fracino, Franke e Aquagel Refrigeracao Limitada) e operar conforme o protocolo de comunicação dos equipamentos em 4 diferentes modelos de máquina.\n\tDemais informações técnicas serão disponibilizadas pelo ponto focal da iniciativa.\n\t\n\t- A telemetria deve oferecer dados detalhados por:\n\t\t○ Equipamento (máquina)\n\t\t○ Por bebida (botão da máquina/seletor)\n\t\t○ Período de venda (data/hora)\n\t\t○ Período da máquina sem venda \n\t\t○ Erro apresentado no equipamento\n\t\t○ Eventos técnicos (equipamento desligado, offline, fora de serviço)\n\t\t○ Localização do equipamento\n\t\t○ Histórico para comparação (diária/semanal/mensal)\n\n\t- Os modems de telemetria, junto com cabos e periféricos (antenas) devem ser disponibilizados á Nestlé através de um modelo Comodato/Locação afim de flexibilizar a substituição de equipamentos diante da evolução da tecnologia envolvida. \n\t- O fluxo de entrega é mensal, em períodos / quantidades a serem negociadas entre Nestlé e o provedor\n\t- Uma reserva técnica é fundamental para a manutenção das entregas dos objetivos mensais\n\t\n\t- O fornecedor deve ter capacidade de disponibilizar suporte técnico ao time da Nestlé através de:\n\t\t○  Atendimentos  ao time técnico em campo (segunda a sexta-feira das 08h as 18h | sábado das 08h as 13h)\n\t\t○  Materiais e treinamento da aplicação\n\t\t○  Manutenção e melhorias da solução\n\t\t\n\t- O fornecedor deve possuir um BCP (Business Contingency Plan) desenhado para aplicação em casos de perda total de informações. Além de um DRP em caso de qualquer situação de perda permanente das estruturas oferecidas.\n\n\t- Além do modem físico alguns serviços adicionais, através de plataforma HTLM, são requeridos:\n\t\t○ Controle virtual de estoque de modem em filiais, técnicos e em manutenção por parte do provedor\n\t\t○ Interface mobile para consulta de quantidade de modems ativos, principais kpis e etc\n\t\t○ Plataforma digital com os principais dados de vendas e outras infos requeridas acima (para o cenário A, onde o consumo dos dados está dentro do fornecedor)\n\t\t○ Aplicativo mobile para os técnicos utilizarem no ato da instalação de Telemetria\n\t\t○ Possibilidade de atuação remota junto ao dispositivo, através de solicitações de vendas, correções de erros relacionados a conectividade, entre outros.\n\t\t\n\t- Desejável que o modem tenha uma bateria própria que permita o mesmo se manter ativo, mesmo com inatividade (energia) do equipamento. Ressalto que na atuação operação o modem está conectado na fonte de energia da máquina, ou seja, se há algum problema com a máquina, consequentemente perdemos o rastreio do modem"
                                    },
                                    {
                                        "name": "Como este desafio está afetando a companhia?",
                                        "value": "Os principais desafios encontrados com o fornecedor estabelecido hoje na operação onera o time técnico em campo, com complexidade na atividade, problemas de qualidade no hardware, a conectividade dos dispositivos usados hoje não é garantida e mesmo após o custo de aquisição, distribuição e instalação do modem, temos dificuldade de garantir a transmissão da Telemetria."
                                    },
                                    {
                                        "name": "Quais objetivos a área pretende alcançar ao resolver o desafio?",
                                        "value": "O benefício da telemetria alavancam os principais pilares:   \t- Venda: Alavancar e mesurar o sell-out através do fornecimento de dados analíticos detalhados que permitem a avaliação do consumo de clientes de forma segmentada (máquina, clientes, canal de v"
                                    },
                                    {
                                        "name": "Qual público mais impactado atualmente por este desafio?.",
                                        "value": "[\"Áreas Internas\"]"
                                    },
                                    {
                                        "name": "Quantas áreas estão sendo impactadas por este desafio?",
                                        "value": "5 ou mais"
                                    },
                                    {
                                        "name": "Outras informações",
                                        "value": "Este é um projeto pioneiro na Nestlé Professional, fora do único fornecedor global (Vendon) utilizado em outros mercados. O planejamento do parque de máquinas com telemetria em 2023 já ultrapassa qualquer outro mercado. \nOs diversos benefícios da telemetria aumentam o impacto desse projeto para o negócio, que busca diversificar o portfólio de fornecedores e soluções consumidas pela Nestlé, frente a diversos desafios enfrentados com o fornecedor utilizado hoje, como disponibilidade de modems, conectividade e manipulação de dados.\n\nObservação relacionada a questão dos principais beneficios que a solução pode trazer na próxima questão: \n*\t• Receita Incremental\n\tAtravés dos Discovery que teremos com a Telemetria, podemos acelerar vendas através de pontos já mencionados nos objetivos acima.\n\t• Saving/Cost avoidance\n\t\tNão temos o montante previsto, se vê necessária uma maior exploração do tema. \n\t\tConsiderando a solução atual pagamos a mensalidade de R$ 25,28/mês por modem instalado (ou a partir de 150 dias após a entrega do fornecedor), que gera uma despesa de R$ 2.435.714,00 em 2023, R$ 4.656.643,00 no FY 2024 e R$ 6.064.532,00 em 2025."
                                    }
                                ],
                                "labels": [
                                    {
                                        "name": "Inovação"
                                    }
                                ],
                                "phases_history": [
                                    {
                                        "phase": {
                                            "name": "Start form"
                                        },
                                        "firstTimeIn": "2023-09-22T11:36:07+00:00",
                                        "lastTimeOut": "2023-09-22T11:36:08+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "01. Backlog"
                                        },
                                        "firstTimeIn": "2023-09-22T11:36:08+00:00",
                                        "lastTimeOut": "2023-11-09T20:17:47+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "07. Não Priorizados"
                                        },
                                        "firstTimeIn": "2023-11-09T20:17:47+00:00",
                                        "lastTimeOut": null
                                    }
                                ],
                                "url": "http://app.pipefy.com/pipes/303523960#cards/796129959"
                            }
                        },
                        {
                            "cursor": "WyIyMDIzLTA5LTI3IDE0OjI1OjE0LjE5NDI3NTAwMCBVVEMiLCI1LjAiLDc5ODMzNzkyNF0",
                            "node": {
                                "id": "798337924",
                                "title": "RF3 Analytics",
                                "assignees": [],
                                "comments": [],
                                "comments_count": 0,
                                "current_phase": {
                                    "name": "05. Desenvolvimento de Business Case"
                                },
                                "done": false,
                                "due_date": null,
                                "fields": [
                                    {
                                        "name": "Email do Solicitante",
                                        "value": "natalia.alves@br.nestle.com"
                                    },
                                    {
                                        "name": "Área Requisitante",
                                        "value": "Finanças e Controle"
                                    },
                                    {
                                        "name": "Nome do Desafio",
                                        "value": "RF3 Analytics"
                                    },
                                    {
                                        "name": "Indicadores de Performance",
                                        "value": ""
                                    },
                                    {
                                        "name": "Requisitos de Negócio",
                                        "value": ""
                                    },
                                    {
                                        "name": "Email do ponto focal do Negócio",
                                        "value": "samuel.nakama@br.nestle.com"
                                    },
                                    {
                                        "name": "Quem será o responsável em desenvolver a proposta de solução?",
                                        "value": "[\"Matheus Tocchini\"]"
                                    },
                                    {
                                        "name": "Qual time irá desenvolver a experimentação?",
                                        "value": "[\"Natalia Bogaz Trivelato Alvarenga\"]"
                                    },
                                    {
                                        "name": "Qual a solução ou hipótese de solução proposta?",
                                        "value": "Trazer benefícios financeiros para a cia, por meio de ciência de dados, em finanças. \n1 - Limite de crédito\n2 - Devedores duvidosos\n3 - "
                                    },
                                    {
                                        "name": "Proposta de Solução Aprovada?",
                                        "value": "Sim"
                                    },
                                    {
                                        "name": "Precisa de Business Case para Escalabilidade? (ver critérios para BC)",
                                        "value": "Sim"
                                    },
                                    {
                                        "name": "Dono do negócio",
                                        "value": "Samuel Nakama"
                                    },
                                    {
                                        "name": "Qual tipo de Solicitação",
                                        "value": "Novo Business Case"
                                    },
                                    {
                                        "name": "Email",
                                        "value": "samuel.nakama@br.nestle.com"
                                    },
                                    {
                                        "name": "Qual a receita anual prevista deste incremento?",
                                        "value": "3.000.000,00"
                                    },
                                    {
                                        "name": "Qual o principal benefício que uma possível solução a este desafio pode trazer?",
                                        "value": "[\"Eficiência\"]"
                                    },
                                    {
                                        "name": "Qual o valor anual previsto desta eficiência?",
                                        "value": "3.000.000,00"
                                    },
                                    {
                                        "name": "Como se chegou a este benefício (R$)?",
                                        "value": "Estimativa estatística do modelo de produção de limite de crédito."
                                    },
                                    {
                                        "name": "Quais objetivos a área pretende alcançar ao resolver o desafio?",
                                        "value": "Reduzir a exposição de crédito de risco em R$ 3MM."
                                    },
                                    {
                                        "name": "Qual público mais impactado atualmente por este desafio?.",
                                        "value": "[\"Clientes Externos (Ex.: Varejistas)\"]"
                                    },
                                    {
                                        "name": "Subárea",
                                        "value": "Crédito e Cobrança, Tesouraria"
                                    },
                                    {
                                        "name": "Descreva o Desafio",
                                        "value": "Trata-se de uma iniciativa do projeto RF3, cujo objetivo é a introdução de inteligência artificial utilizando algoritmos e análises preditivas para avaliar de maneira precisa e dinâmica processos e cenários da área, trazendo eficiência e auxiliando a tomada de decisão, do time de Finanças e Controle."
                                    },
                                    {
                                        "name": "Como este desafio está afetando a companhia?",
                                        "value": "Desenvolvimento de modelo de IA para decisões mais assertivas, além de retorno financeiro para CIA."
                                    }
                                ],
                                "labels": [
                                    {
                                        "name": "Datalab"
                                    }
                                ],
                                "phases_history": [
                                    {
                                        "phase": {
                                            "name": "Start form"
                                        },
                                        "firstTimeIn": "2023-09-27T14:25:14+00:00",
                                        "lastTimeOut": "2023-09-27T14:25:14+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "01. Backlog"
                                        },
                                        "firstTimeIn": "2023-09-27T14:25:14+00:00",
                                        "lastTimeOut": "2023-09-27T14:25:31+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "02. Discovery"
                                        },
                                        "firstTimeIn": "2023-11-27T23:20:10+00:00",
                                        "lastTimeOut": "2024-01-04T17:41:09+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "03. Proposta de Solução e Experimentação"
                                        },
                                        "firstTimeIn": "2023-09-27T14:25:31+00:00",
                                        "lastTimeOut": "2024-01-05T17:27:54+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "04. Implementação"
                                        },
                                        "firstTimeIn": "2023-11-27T23:12:32+00:00",
                                        "lastTimeOut": "2024-01-09T13:11:49+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "05. Desenvolvimento de Business Case"
                                        },
                                        "firstTimeIn": "2024-01-05T17:27:54+00:00",
                                        "lastTimeOut": null
                                    }
                                ],
                                "url": "http://app.pipefy.com/pipes/303523960#cards/798337924"
                            }
                        },
                        {
                            "cursor": "WyIyMDIzLTEwLTIzIDE0OjQzOjE0LjY1MjEyNDAwMCBVVEMiLCIxLjAiLDgxMTM5OTUwNF0",
                            "node": {
                                "id": "811399504",
                                "title": "Automatização Gestão de Treinamentos",
                                "assignees": [],
                                "comments": [],
                                "comments_count": 0,
                                "current_phase": {
                                    "name": "01. Backlog"
                                },
                                "done": false,
                                "due_date": null,
                                "fields": [
                                    {
                                        "name": "Nome do Desafio",
                                        "value": "Automatização Gestão de Treinamentos"
                                    },
                                    {
                                        "name": "Email do Solicitante",
                                        "value": "daniela.matsumoto@br.nestle.com"
                                    },
                                    {
                                        "name": "Email do ponto focal do Negócio",
                                        "value": "enrico.pereira@br.nestle.com"
                                    },
                                    {
                                        "name": "Área Requisitante",
                                        "value": "RH"
                                    },
                                    {
                                        "name": "Subárea",
                                        "value": "Talento e Cultura"
                                    },
                                    {
                                        "name": "Descreva o Desafio",
                                        "value": "Atualmente, toda a gestão administrativa dos treinamentos (registro das sessões, lista de presença, conclusão das sessões e alterações) é realizada por meio do NBS Lviv. Para cada etapa, temos a necessidade de abrir um ticket, o processo é realizado no NBS e, caso não haja nenhum erro, é concluído. Quando há alguma discrepância nas informações enviadas, o ticket é parqueado e o solicitando precisa retrabalhar as informações e enviar o ticket novamente. Além disso, principalmente nas unidades, a lista de presença e capturada manualmente e, para abertura do ticket de registro de presença, é necessário que um colaborador de RH transcreva as informações (SAP e nome) uma a uma para uma planilha de excel para, então, submeter o ticket."
                                    },
                                    {
                                        "name": "Como este desafio está afetando a companhia?",
                                        "value": "Por todo o processo manual de lançamento de lista de presença, cada unidade acaba dedicando uma pessoa para realizar esse trabalho, o que demanda bastante tempo e recurso. Além disso, como temos um volume alto de solicitações por mês (em torno de 1k a 2k), temos um custo alto com os serviços do NBS."
                                    },
                                    {
                                        "name": "Quais objetivos a área pretende alcançar ao resolver o desafio?",
                                        "value": "Eficiência de tempo e de custo."
                                    },
                                    {
                                        "name": "Qual público mais impactado atualmente por este desafio?.",
                                        "value": "[\"Áreas Internas\"]"
                                    },
                                    {
                                        "name": "Quantas áreas estão sendo impactadas por este desafio?",
                                        "value": "5 ou mais"
                                    },
                                    {
                                        "name": "Outras informações",
                                        "value": "Nas áreas impactadas, estou considerando que o impacto será em todas as unidades operacionais, além do time corporativo, ou seja, mais de 15 unidades serão impactadas.\nO saving/cost avoidance dependerá da solução apresentada."
                                    },
                                    {
                                        "name": "Prazo para Priorização",
                                        "value": ""
                                    }
                                ],
                                "labels": [
                                    {
                                        "name": "Inovação"
                                    }
                                ],
                                "phases_history": [
                                    {
                                        "phase": {
                                            "name": "Start form"
                                        },
                                        "firstTimeIn": "2023-10-23T14:43:14+00:00",
                                        "lastTimeOut": "2023-10-23T14:43:15+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "01. Backlog"
                                        },
                                        "firstTimeIn": "2023-10-23T14:43:15+00:00",
                                        "lastTimeOut": null
                                    }
                                ],
                                "url": "http://app.pipefy.com/pipes/303523960#cards/811399504"
                            }
                        },
                        {
                            "cursor": "WyIyMDIzLTExLTAxIDIwOjQyOjU4LjU4ODY2MDAwMCBVVEMiLCIxLjc1Iiw4MTcxNjgzNzJd",
                            "node": {
                                "id": "817168372",
                                "title": "Redução do uso de plástico em embalagens",
                                "assignees": [
                                    {
                                        "id": "303172995"
                                    }
                                ],
                                "comments": [],
                                "comments_count": 0,
                                "current_phase": {
                                    "name": "02. Discovery"
                                },
                                "done": false,
                                "due_date": null,
                                "fields": [
                                    {
                                        "name": "Prazo para Priorização",
                                        "value": "10/11/2023 20:43"
                                    },
                                    {
                                        "name": "Nome do Desafio",
                                        "value": "Redução do uso de plástico em embalagens"
                                    },
                                    {
                                        "name": "Email do ponto focal do Negócio",
                                        "value": "sophia.brandao@br.nestle.com"
                                    },
                                    {
                                        "name": "Área Requisitante",
                                        "value": "Técnica e Produção"
                                    },
                                    {
                                        "name": "Subárea",
                                        "value": "Embalagens Latam"
                                    },
                                    {
                                        "name": "Descreva o Desafio",
                                        "value": "A área de R&D Packaging, de acordo com as metas de redução de plástico da Nestlé (circularidade), está estudando potenciais soluções que podem nos auxiliar na Zona Latam."
                                    },
                                    {
                                        "name": "Como este desafio está afetando a companhia?",
                                        "value": "Atualmente a Nestlé tem o compromisso de redução do uso de plástico e do impacto de suas embalagens até 2030."
                                    },
                                    {
                                        "name": "Qual o principal benefício que uma possível solução a este desafio pode trazer?",
                                        "value": "[\"Eficiência Operacional\", \"Reputação\"]"
                                    },
                                    {
                                        "name": "Qual a receita anual prevista deste incremento?",
                                        "value": "0,00"
                                    },
                                    {
                                        "name": "Qual o valor anual previsto desta eficiência?",
                                        "value": "0,00"
                                    },
                                    {
                                        "name": "Qual o valor anual previsto de risco dessa reputação?",
                                        "value": "0,00"
                                    },
                                    {
                                        "name": "Quais objetivos a área pretende alcançar ao resolver o desafio?",
                                        "value": "Reduzir o consumo de plástico e impacto das embalagens no meio-ambiente"
                                    },
                                    {
                                        "name": "Qual público mais impactado atualmente por este desafio?.",
                                        "value": "[\"Consumidor Final\", \"Fornecedores\", \"Áreas Internas\"]"
                                    },
                                    {
                                        "name": "Quantas áreas estão sendo impactadas por este desafio?",
                                        "value": "1 a 2"
                                    },
                                    {
                                        "name": "Já existe uma solução mapeada? Qual?",
                                        "value": "Não"
                                    },
                                    {
                                        "name": "Responsável",
                                        "value": "[\"Larissa Nascimento\"]"
                                    },
                                    {
                                        "name": "Data de Priorização do Desafio pelo BEO",
                                        "value": ""
                                    },
                                    {
                                        "name": "Outras informações",
                                        "value": "Esse projeto é um scouting técnico e vai até a fase de Pitch Day."
                                    },
                                    {
                                        "name": "Inclua arquivos ou materiais de apoio sobre o de desafio, ou até tentativas de resoluções e projetos passados que tratem do mesmo tema",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/169532ed-2beb-4444-8e5a-846c87820c08/NestlTechnicalScouting-Kick-off191023.pdf?expires_on=1718110439&signature=cdkUvvIzGfBKOimpwsLnq6teLM%2Btn865%2B%2FKkvNyUEIM%3D\", \"https://app.pipefy.com/storage/v1/signed/uploads/de1e7565-30f9-4b54-b4de-5aa88144a6bc/PO4573524457ScoutingEmbalagens.pdf?expires_on=1718110439&signature=ge2HUxBmxGFnPv7JovlDOxdOv6RoeMy8RmhkcnVsWRo%3D\", \"https://app.pipefy.com/storage/v1/signed/uploads/8db9c8b7-5e03-4b73-ae9c-09e8a830eb72/NF2023233-PO4573524457ScoutingEmbalagens.pdf?expires_on=1718110439&signature=HcegJGggRFvJ6Fw64114KN8IdkysfIl1XeFPGzYlvrw%3D\", \"https://app.pipefy.com/storage/v1/signed/uploads/9a3aeeb1-d621-4e20-a83e-3b742891f5cc/NestltechnicalScouting-Roteirodeentrevistas.docx?expires_on=1718110439&signature=%2BuVyfvFN%2FHhmZKBAf66TfQ9VxRwmb%2BCBfoQFygAts8I%3D\", \"https://app.pipefy.com/storage/v1/signed/uploads/f6b58858-895a-4ed3-9abb-2701efacc3eb/NestlPackagingScoutingInnoscience-Semana123.xlsx?expires_on=1718110439&signature=Ci%2FJCKBEyW1mqXNcLEq8drsyfB9tMCho%2BdLnyOUovkM%3D\", \"https://app.pipefy.com/storage/v1/signed/uploads/168d1178-e5b3-44f7-9d9c-ff711526c97f/Reportsemanaldescouting-2023-12-08.pptx?expires_on=1718110439&signature=4E0edCN2LmqpDNJS%2FzkIwbMM1qe5fOy%2BE3KUcvpwAA4%3D\"]"
                                    },
                                    {
                                        "name": "Email do Solicitante",
                                        "value": "sophia.brandao@br.nestle.com"
                                    },
                                    {
                                        "name": "NDAs",
                                        "value": "[\"https://app.pipefy.com/storage/v1/signed/uploads/214ac0df-04e6-49db-8b23-1de255fca03a/NDAAvoidNestlAssinadoMar23.pdf?expires_on=1718110439&signature=a6KM2dQBQ%2B3KJZSp97ayYFum6Cls0ul%2BLpDYC%2BrcCG8%3D\"]"
                                    },
                                    {
                                        "name": "Outras Observações",
                                        "value": "- Pitch Day será realizado em 1 dia (pré agendado para o dia 24/04)\n- Teremos no máximo 15 minutos por startup, entre pitch e questionamentos\n- Realizaremos uma reunião prévia com as startups para passar um briefing para o dia do evento, onde explicaremos a dinâmica, o que devem incluir no pitch, boas práticas, entre outros pontos\n- Iremos gravar a reunião para compartilhar com stakeholders Nestlé que não conseguirem participar no dia do evento\n- Avoid: Avaliar se devemos incluir no Pitch Day, dado que sabemos que queremos avançar nas conversas com eles (seria o output do pitch day)"
                                    }
                                ],
                                "labels": [
                                    {
                                        "name": "Inovação"
                                    }
                                ],
                                "phases_history": [
                                    {
                                        "phase": {
                                            "name": "Start form"
                                        },
                                        "firstTimeIn": "2023-11-01T20:42:58+00:00",
                                        "lastTimeOut": "2023-11-01T20:42:59+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "01. Backlog"
                                        },
                                        "firstTimeIn": "2023-11-01T20:42:59+00:00",
                                        "lastTimeOut": "2023-11-01T20:43:17+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "02. Discovery"
                                        },
                                        "firstTimeIn": "2023-11-01T20:43:17+00:00",
                                        "lastTimeOut": null
                                    }
                                ],
                                "url": "http://app.pipefy.com/pipes/303523960#cards/817168372"
                            }
                        },
                        {
                            "cursor": "WyIyMDIzLTExLTA4IDIwOjQ3OjMzLjIxODg3MzAwMCBVVEMiLCI1Ljc1Iiw4MjA3NjQ1OTRd",
                            "node": {
                                "id": "820764594",
                                "title": "Otimização Funil NDG",
                                "assignees": [],
                                "comments": [],
                                "comments_count": 0,
                                "current_phase": {
                                    "name": "06. Incorporado"
                                },
                                "done": false,
                                "due_date": "2023-11-17T20:47:33Z",
                                "fields": [
                                    {
                                        "name": "Prazo para Priorização",
                                        "value": "17/11/2023 20:47"
                                    },
                                    {
                                        "name": "Nome do Desafio",
                                        "value": "Otimização Funil NDG"
                                    },
                                    {
                                        "name": "Email do Solicitante",
                                        "value": "carolina.moraes@br.nestle.com"
                                    },
                                    {
                                        "name": "Área Requisitante",
                                        "value": "Cafés"
                                    },
                                    {
                                        "name": "Descreva o Desafio",
                                        "value": "tbd"
                                    }
                                ],
                                "labels": [
                                    {
                                        "name": "Ecossistemas Digitais"
                                    }
                                ],
                                "phases_history": [
                                    {
                                        "phase": {
                                            "name": "Start form"
                                        },
                                        "firstTimeIn": "2023-11-08T20:47:33+00:00",
                                        "lastTimeOut": "2023-11-08T20:47:33+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "01. Backlog"
                                        },
                                        "firstTimeIn": "2023-11-08T20:47:33+00:00",
                                        "lastTimeOut": "2023-11-08T20:47:46+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "06. Incorporado"
                                        },
                                        "firstTimeIn": "2023-11-08T20:50:01+00:00",
                                        "lastTimeOut": null
                                    }
                                ],
                                "url": "http://app.pipefy.com/pipes/303523960#cards/820764594"
                            }
                        },
                        {
                            "cursor": "WyIyMDIzLTExLTA4IDIwOjU1OjU2LjgzNjIwMzAwMCBVVEMiLCI1Ljc1Iiw4MjA3Njg0MzZd",
                            "node": {
                                "id": "820768436",
                                "title": "CDA",
                                "assignees": [],
                                "comments": [],
                                "comments_count": 0,
                                "current_phase": {
                                    "name": "06. Incorporado"
                                },
                                "done": false,
                                "due_date": "2023-11-17T20:55:57Z",
                                "fields": [
                                    {
                                        "name": "Prazo para Priorização",
                                        "value": "17/11/2023 20:55"
                                    },
                                    {
                                        "name": "Nome do Desafio",
                                        "value": "CDA"
                                    },
                                    {
                                        "name": "Email do Solicitante",
                                        "value": "paulo.miranda@br.nestle.com"
                                    },
                                    {
                                        "name": "Área Requisitante",
                                        "value": "TDB"
                                    },
                                    {
                                        "name": "Descreva o Desafio",
                                        "value": "tbd"
                                    }
                                ],
                                "labels": [
                                    {
                                        "name": "Datalab"
                                    }
                                ],
                                "phases_history": [
                                    {
                                        "phase": {
                                            "name": "Start form"
                                        },
                                        "firstTimeIn": "2023-11-08T20:55:56+00:00",
                                        "lastTimeOut": "2023-11-08T20:55:57+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "01. Backlog"
                                        },
                                        "firstTimeIn": "2023-11-08T20:55:57+00:00",
                                        "lastTimeOut": "2023-11-08T20:56:26+00:00"
                                    },
                                    {
                                        "phase": {
                                            "name": "06. Incorporado"
                                        },
                                        "firstTimeIn": "2023-11-08T20:56:26+00:00",
                                        "lastTimeOut": null
                                    }
                                ],
                                "url": "http://app.pipefy.com/pipes/303523960#cards/820768436"
                            }
                        }
                    ],
                    "pageInfo": {
                        "hasNextPage": true
                    }
                }
            }
        }
    
    return(
        <footer>
                
           <p><span>Games </span> &copy; 2024</p>       
        </footer>
    )
}

export default Footer