export const contas =  [
    {
      "id": 1,
      "codigo": "1",
      "nome": "Ativos",
      "categoria": "S",
      "subcontas": [
        {
          "id": 2,
          "codigo": "1.1",
          "nome": "Ativo Circulante",
          "categoria": "S",
          "subcontas": [
            {
              "id": 3,
              "codigo": "1.1.1",
              "nome": "Disponibilidades",
              "categoria": "S",
              "subcontas": [
                {
                  "id": 4,
                  "codigo": "1.1.1.01",
                  "nome": "Caixa",
                  "categoria": "A",
                  "valor": 50000
                },
                {
                  "id": 5,
                  "codigo": "1.1.1.2",
                  "nome": "Aplicações Financeiras",
                  "categoria": "S",
                  "subcontas": [
                    {
                      "id": 6,
                      "codigo": "1.1.1.2.01",
                      "nome": "Curto Prazo",
                      "categoria": "A",
                      "valor": 245000
                    }
                  ]
                }
              ]
            },
            {
              "id": 7,
              "codigo": "1.1.2",
              "nome": "Valores a Receber",
              "categoria": "S",
              "subcontas": [
                {
                  "id": 8,
                  "codigo": "1.1.2.1",
                  "nome": "Clientes Nacionais",
                  "categoria": "S",
                  "subcontas": [
                    {
                      "id": 9,
                      "codigo": "1.1.2.1.1",
                      "nome": "Clientes de São Paulo",
                      "categoria": "S",
                      "subcontas": [
                        {
                          "id": 10,
                          "codigo": "1.1.2.1.1.01",
                          "nome": "Empresa Alpha",
                          "categoria": "A",
                          "valor": 40000
                        },
                        {
                          "id": 11,
                          "codigo": "1.1.2.1.1.2",
                          "nome": "Tech Solutions",
                          "categoria": "A",
                          "valor": 60000
                        }
                      ]
                    },
                    {
                      "id": 12,
                      "codigo": "1.1.2.1.2",
                      "nome": "Clientes do Rio de Janeiro",
                      "categoria": "S",
                      "subcontas": [
                        {
                          "id": 13,
                          "codigo": "1.1.2.1.2.01",
                          "nome": "Innovatech",
                          "categoria": "A",
                          "valor": 50000
                        }
                      ]
                    }
                  ]
                },
                {
                  "id": 14,
                  "codigo": "1.1.2.2",
                  "nome": "Clientes Internacionais",
                  "categoria": "S",
                  "subcontas": [
                    {
                      "id": 15,
                      "codigo": "1.1.2.2.1",
                      "nome": "Clientes dos EUA",
                      "categoria": "S",
                      "subcontas": [
                        {
                          "id": 16,
                          "codigo": "1.1.2.2.1.01",
                          "nome": "Global Tech Inc.",
                          "categoria": "A",
                          "valor": 30000
                        },
                        {
                          "id": 17,
                          "codigo": "1.1.2.2.1.02",
                          "nome": "Silicon Valley Solutions",
                          "categoria": "A",
                          "valor": 20000
                        }
                      ]
                    },
                    {
                      "id": 18,
                      "codigo": "1.1.2.2.2",
                      "nome": "Clientes da Europa",
                      "categoria": "S",
                      "subcontas": [
                        {
                          "id": 19,
                          "codigo": "1.1.2.2.2.01",
                          "nome": "EuroTech",
                          "categoria": "A",
                          "valor": 50000
                        },
                        {
                          "id": 20,
                          "codigo": "1.1.2.2.2.02",
                          "nome": "Innovative Solutions GmbH",
                          "categoria": "A",
                          "valor": 30000
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "id": 21,
              "codigo": "1.1.3",
              "nome": "Outros Ativos Circulantes",
              "categoria": "S",
              "subcontas": [
                {
                  "id": 22,
                  "codigo": "1.1.3.01",
                  "nome": "Adiantamentos",
                  "categoria": "A",
                  "valor": 10000
                }
              ]
            }
          ]
        },
        {
          "id": 23,
          "codigo": "1.2",
          "nome": "Ativo Não Circulante",
          "categoria": "S",
          "subcontas": [
            {
              "id": 24,
              "codigo": "1.2.1",
              "nome": "Ativo Realizável a Longo Prazo",
              "categoria": "S",
              "subcontas": [
                {
                  "id": 25,
                  "codigo": "1.2.1.01",
                  "nome": "Créditos a Longo Prazo",
                  "categoria": "A",
                  "valor": 1000
                }
              ]
            },
            {
              "id": 26,
              "codigo": "1.2.2",
              "nome": "Ativo Permanente",
              "categoria": "S",
              "subcontas": [
                {
                  "id": 27,
                  "codigo": "1.2.2.1",
                  "nome": "Imobilizado",
                  "categoria": "S",
                  "subcontas": [
                    {
                      "id": 28,
                      "codigo": "1.2.2.1.1",
                      "nome": "Equipamentos de TI",
                      "categoria": "S",
                      "subcontas": [
                        {
                          "id": 29,
                          "codigo": "1.2.2.1.1.01",
                          "nome": "Servidores",
                          "categoria": "A",
                          "valor": 500000
                        },
                        {
                          "id": 30,
                          "codigo": "1.2.2.1.1.02",
                          "nome": "Computadores",
                          "categoria": "A",
                          "valor": 200000
                        }
                      ]
                    },
                    {
                      "id": 31,
                      "codigo": "1.2.2.1.02",
                      "nome": "Móveis e Utensílios",
                      "categoria": "S",
                      "subcontas": [
                        {
                          "id": 32,
                          "codigo": "1.2.2.1.2.01",
                          "nome": "Mesas",
                          "categoria": "A",
                          "valor": 10000
                        },
                        {
                          "id": 33,
                          "codigo": "1.2.2.1.2.02",
                          "nome": "Cadeiras",
                          "categoria": "A",
                          "valor": 10000
                        }
                      ]
                    }
                  ]
                },
                {
                  "id": 34,
                  "codigo": "1.2.2.2",
                  "nome": "Intangível",
                  "categoria": "S",
                  "subcontas": [
                    {
                      "id": 35,
                      "codigo": "1.2.2.2.1",
                      "nome": "Patentes e Marcas",
                      "categoria": "S",
                      "subcontas": [
                        {
                          "id": 36,
                          "codigo": "1.2.2.2.1.01",
                          "nome": "Desenolvimento agil com chatbot",
                          "categoria": "A",
                          "valor": 50000
                        },
                        {
                          "id": 37,
                          "codigo": "1.2.2.2.1.02",
                          "nome": "IT innovation",
                          "categoria": "A",
                          "valor": 50000
                        }
                      ]
                    },
                    {
                      "id": 38,
                      "codigo": "1.2.2.2.2",
                      "nome": "Softwares",
                      "categoria": "S",
                      "subcontas": [
                        {
                          "id": 39,
                          "codigo": "1.2.2.2.2.1",
                          "nome": "Licenças de Software",
                          "categoria": "S",
                          "subcontas": [
                            {
                              "id": 105,
                              "codigo": "1.2.2.2.2.1.01",
                              "nome": "Licenças Windows",
                              "categoria": "A",
                              "valor": 89000
                            }
                        
                          ]
                        },
                        {
                          "id": 40,
                          "codigo": "1.2.2.2.2.2",
                          "nome": "Desenvolvimento Interno",
                          "categoria": "S",
                          "subcontas": [
                            {
                              "id": 41,
                              "codigo": "1.2.2.2.2.2.01",
                              "nome": "Plataforma Nexus",
                              "categoria": "A",
                              "valor": 60000
                            },
                            {
                              "id": 42,
                              "codigo": "1.2.2.2.2.2.02",
                              "nome": "Aplicativo Orion",
                              "categoria": "A",
                              "valor": 30000
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": 43,
      "codigo": "2",
      "nome": "Passivos",
      "categoria": "S",
      "subcontas": [
        {
          "id": 44,
          "codigo": "2.1",
          "nome": "Passivo Circulante",
          "categoria": "S",
          "subcontas": [
            {
              "id": 45,
              "codigo": "2.1.1",
              "nome": "Obrigações Sociais e Trabalhistas",
              "categoria": "S",
              "subcontas": [
                {
                  "id": 101,
                  "codigo": "2.1.1.01",
                  "nome": "Salários a Pagar",
                  "categoria": "A",
                  "valor": 100000
                },
                {
                  "id": 102,
                  "codigo": "2.1.1.02",
                  "nome": "Encargos Sociais a Pagar",
                  "categoria": "A",
                  "valor": 50000
                },
                {
                  "id": 103,
                  "codigo": "2.1.1.03",
                  "nome": "Férias e 13º Salário",
                  "categoria": "A",
                  "valor": 50000
                }
              ]
            },
            {
              "id": 46,
              "codigo": "2.1.2",
              "nome": "Fornecedores",
              "categoria": "S",
              "subcontas": [
                {
                  "id": 47,
                  "codigo": "2.1.2.1",
                  "nome": "Fornecedores Nacionais",
                  "categoria": "S",
                  "subcontas": [
                    {
                      "id": 48,
                      "codigo": "2.1.2.1.01",
                      "nome": "Supplies Corp",
                      "categoria": "A",
                      "valor": 30000
                    },
                    {
                      "id": 49,
                      "codigo": "2.1.2.1.02",
                      "nome": "Tech Hardware Ltda",
                      "categoria": "A",
                      "valor": 40000
                    }
                  ]
                },
                {
                  "id": 50,
                  "codigo": "2.1.2.2",
                  "nome": "Fornecedores Internacionais",
                  "categoria": "S",
                  "subcontas": [
                    {
                      "id": 51,
                      "codigo": "2.1.2.2.01",
                      "nome": "Global Supplies",
                      "categoria": "A",
                      "valor": 60000
                    },
                    {
                      "id": 52,
                      "codigo": "2.1.2.2.2",
                      "nome": "International Tech",
                      "categoria": "A",
                      "valor": 20000
                    }
                  ]
                }
              ]
            },
            {
              "id": 53,
              "codigo": "2.1.3",
              "nome": "Obrigações Fiscais",
              "categoria": "S",
              "subcontas": [
                {
                  "id": 104,
                  "codigo": "2.1.3.01",
                  "nome": "Impostos a Recolher",
                  "categoria": "A",
                  "valor": 50000
                },
                {
                  "id": 105,
                  "codigo": "2.1.3.02",
                  "nome": "Contribuições a Recolher",
                  "categoria": "A",
                  "valor": 30000
                },
                {
                  "id": 106,
                  "codigo": "2.1.3.03",
                  "nome": "Taxas e Licenças",
                  "categoria": "A",
                  "valor": 15000
                }
              ]
            },
            {
              "id": 54,
              "codigo": "2.1.4",
              "nome": "Empréstimos e Financiamentos",
              "categoria": "S",
              "subcontas": [
                {
                  "id": 107,
                  "codigo": "2.1.4.01",
                  "nome": "Empréstimos Bancários de Curto Prazo",
                  "categoria": "A",
                  "valor": 50000
                },
                {
                  "id": 108,
                  "codigo": "2.1.4.02",
                  "nome": "Financiamentos de Veículos de Curto Prazo",
                  "categoria": "A",
                  "valor": 58000
                }
              ]
            },
            {
              "id": 55,
              "codigo": "2.1.-5",
              "nome": "Outros Passivos de Curto Prazo",
              "categoria": "A",
              "valor": 10000
            }
          ]
        },
        {
          "id": 56,
          "codigo": "2.2",
          "nome": "Passivo Não Circulante",
          "categoria": "S",
          "subcontas": [
            {
              "id": 57,
              "codigo": "2.2.1",
              "nome": "Empréstimos de Longo Prazo",
              "categoria": "S",
              "subcontas": [
                {
                  "id": 109,
                  "codigo": "2.2.1.01",
                  "nome": "Empréstimos Bancários de Longo Prazo",
                  "categoria": "A",
                  "valor": 300000
                },
                {
                  "id": 110,
                  "codigo": "2.2.1.02",
                  "nome": "Financiamentos de Veículos de Longo Prazo",
                  "categoria": "A",
                  "valor": 185000
                }
              ]
            },
            {
              "id": 58,
              "codigo": "2.2.2",
              "nome": "Provisões para Contingências",
              "categoria": "S",
              "subcontas": [
                {
                  "id": 59,
                  "codigo": "2.2.2.01",
                  "nome": "Processos Judiciais",
                  "categoria": "A",
                  "valor": 50000
                }
              ]
            }
          ]
        },
        {
          "id": 60,
          "codigo": "2.3",
          "nome": "Patrimônio Líquido",
          "categoria": "S",
          "subcontas": [
            {
              "id": 61,
              "codigo": "2.3.01",
              "nome": "Capital Social",
              "categoria": "A",
              "valor": 437000
            },
            {
              "id": 62,
              "codigo": "2.3.02",
              "nome": "Reservas de Lucros",
              "categoria": "A",
              "valor": 50000
            }
          ]
        }
      ]
    }
  ]