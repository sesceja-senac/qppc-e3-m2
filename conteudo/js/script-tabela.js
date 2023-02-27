$(function () {
    // inicia a variavel da linha referente ao botão "selecionar atividade"
    var resp_slot = null;
    // Variavel que ficará sendo iterada até chegar a 13 quando irá liberar a div que está oculta com o conteúdo
    var fim_de_jogo = 0;

    // Botão "selecionar atividade para cada uma das 13 linhas"
    $("[data-bs-target='#staticBackdrop']").click(function () {
        resp_slot = $(this).attr("data-resp");
        var indice_horario = Number(resp_slot) - 1;
        $("#tabela_titulo_horario").text(horarios[indice_horario])
    });

    // ao clicar em cada um dos itens irá executar essa chamada de evento
    $(".item").click(function () {
        // captura o data-resp do botão que foi clicado
        var bto_clicado_resp = $(this).attr("data-resp");

        // testa se o data-resp do botão clicado dentro da modal bate com o data-resp do botão "selecionar atividade"
        if (bto_clicado_resp == resp_slot) {
            // se sim, ele troca o botão selecionar atividade pelo texto do botão da atividade.
            $("[data-bs-target='#staticBackdrop'][data-resp='" + resp_slot + "']").parents(".td-cronograma-cultural").text($(this).text())
            // coloca o texto positivo da array/objeto feedbacks no body da modal feedback positivo
            $("#tabela_texto_acertou").text(feedback(bto_clicado_resp, "positivo"))
            // faz fechar automaticamente a modal das atividades antes de exibir a modal de feedback
            $("#staticBackdrop").modal("hide")
            // exibe a modal de feedback positivo
            $("#associar_colulas_acertou").modal("show")
            // adiciona +1 na variavel de fim de jogo
            fim_de_jogo += 1;
            // executa a função de fim de jogo. Caso seja 13 o valor da variavel fim_de_jogo, exibe a div final
            fimdejogo();
            // remove o botão clicado da modal
            $(this).remove()
        } else {
            // caso o jogador erre, 
            // coloca o texto dentro da body da modal de feedback negativo
            $("#tabela_texto_errou").text(feedback(bto_clicado_resp, "negativo"))
            // exibe a modal mantendo a modal de atividade aberta.
            $("#associar_colulas_errou").modal("show")
        }


    });

    // Horarios
    //
    var horarios = ["8h", "8h30", "Das 9h às 16h", "Das 9h às 16h", "Das 9h às 16h", "Das 14h às 15h", "15h30min", "Das 17h às 19h", "19h","19h30min", "Das 20h às 21h30", "22h", "23h30"]
    // array com os feedbacks. Pode quebrar linhas usando <br><br> ou só um <br> entre as linhas de feedback caso sejam mais que uma. 
    // Mas não pode usar enter aqui. Todo o feedback precisa ficar em uma linha apenas se não da erro no JS
    var feedbacks = [{},
        {
            positivo: "Muito bem! Receber o cenário no teatro, no início do trabalho, adianta toda a produção do dia.",
            negativo: "Atenção! Esta atividade deve ser uma das primeiras a ser realizada, pois, caso contrário, pode haver atrasos em todas as demais tarefas do dia."
        },
        {
            positivo: "Muito bem! Receber a equipe e os equipamentos no início do trabalho adianta todas as tarefas do dia.",
            negativo: "Atenção! Esta atividade deve ser uma das primeiras a ser realizada, pois, caso contrário, pode haver atrasos em todas as demais tarefas do dia. "
        },
        {
            positivo: "Muito bem! Esta atividade demora um bom tempo, portanto é importante começar cedo para não comprometer a diária de trabalho.",
            negativo: "Atenção! Esta atividade demora de 5 a 6 horas, devendo começar cedo para não comprometer a diária de trabalho no teatro."
        },
        {
            positivo: "Muito bem! Esta atividade demora um bom tempo, portanto é importante começar cedo para não comprometer a diária de trabalho. ",
            negativo: "Atenção! Esta atividade demora de 5 a 6 horas, devendo começar cedo para não comprometer a diária de trabalho no teatro. "
        },
        {
            positivo: "Muito bem! Esta atividade demora um bom tempo, portanto é importante começar cedo para não comprometer a diária de trabalho. ",
            negativo: "Atenção! Esta atividade demora de 5 a 6 horas, devendo começar cedo para não comprometer a diária de trabalho no teatro. "
        },
        {
            positivo: "Muito bem! Esta atividade é de recepção dos artistas, devendo ser realizada perto de sua chegada. ",
            negativo: "Atenção! Esta atividade é de recepção dos artistas, devendo ser realizada perto de sua chegada. "
        },
        {
            positivo: "Muito bem! Normalmente quem se apresenta chega de 2 a 5 horas antes da apresentação, para passagem de palco e para se arrumar. ",
            negativo: "Atenção! Normalmente quem se apresenta chega de 2 a 5 horas antes da apresentação."
        },
        {
            positivo: "Muito bem! A passagem de palco é o momento do ensaio geral que antecede a abertura do teatro.",
            negativo: "Atenção! A passagem de palco  acontece de 1 a 2 horas antes da apresentação."
        },
        {
            positivo: "Muito bem! A bilheteria normalmente abre 1 hora antes da apresentação do espetáculo ao público. ",
            negativo: "Atenção! A bilheteria normalmente abre 1 hora antes da apresentação do espetáculo ao público. "
        },
        {
            positivo: "Muito bem! A abertura do espaço onde será a apresentação para o público varia de 2 horas a 30 minutos antes do começo das apresentações. ",
            negativo: "Atenção! A abertura do espaço onde será a apresentação para o público varia de 2 horas a 30 minutos antes do começo das apresentações. "
        },
        {
            positivo: "Muito bem! A apresentação do espetáculo ao público é o motivo de toda a organização anterior e depende de uma série de tarefas.",
            negativo: "Atenção! A apresentação do espetáculo ao público depende de uma série de tarefas."
        },
        {
            positivo: "Muito bem! A desmontagem deve ser prevista no fim do dia.",
            negativo: "Atenção! A desmontagem precisa ser prevista como uma das últimas atividades do dia."
        },
        {
            positivo: "Muito bem! O carregamento de cenário e de equipamentos é a última atividade a ser realizada no dia de produção.",
            negativo: "Atenção! O carregamento de cenário e de equipamentos deve ser a última atividade do dia, pois depende da desmontagem e da liberação dos equipamentos."
        }
    ]

    // aqui pra facilitar a chamada da array ali em cima.
    function feedback(i, tipo) {
        if (feedbacks[i][tipo] == undefined) {
            return "Não existe este feedback"
        } else {
            return feedbacks[i][tipo];
        }

    }

    // Aqui a função de fim de jogo 
    function fimdejogo() {
        if (fim_de_jogo >= 13) {
            $("#fim_de_jogo").removeClass("d-none")
            $('#fechar-bt').click(function(){
                window.setTimeout(function(){
                    $('#feedback_final').modal("show")
                }, 1000)
            })
            
        }
    }


    // Mantem todas as opções aleatórias para cada F5
    randomizeResp(50);
})

function randomizeResp(total) {

    let resp = Array.from(document.querySelectorAll('.opcao-crograma'))

    for (let i = 0; i < total; i++) {
        $(resp).each(
            function () {
                $(this).insertBefore($(resp[Math.floor(Math.random() * resp.length - 1)]))
            }
        )
    }
}