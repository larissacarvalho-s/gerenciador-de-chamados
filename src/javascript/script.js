let chamados =
    JSON.parse(
        localStorage.getItem('chamados')
    ) || [];

const modal =
    document.getElementById('modal');

document.getElementById(
    'novoChamado'
).onclick = () =>
    modal.style.display = 'block';

document.getElementById(
    'salvar'
).onclick = () => {

    const chamado = {

        id:
            Date.now(),

        protocolo:
            `HD-${Date.now()}`,

        usuario:
            document.getElementById(
                'usuario'
            ).value,

        problema:
            document.getElementById(
                'problema'
            ).value,

        categoria:
            document.getElementById(
                'categoria'
            ).value,

        tecnico:
            document.getElementById(
                'tecnico'
            ).value,

        prioridade:
            document.getElementById(
                'prioridade'
            ).value,

        dataAbertura:
            new Date()
            .toLocaleString(),

        status:
            'Aberto'
    };

    chamados.push(chamado);

    salvar();

    renderizar();

    modal.style.display =
        'none';

    document
        .querySelectorAll(
            '.modal-content input'
        )
        .forEach(
            i => i.value = ''
        );
};

function salvar() {
    localStorage.setItem(
        'chamados',
        JSON.stringify(chamados)
    );
}

function renderizar(
    lista = chamados
) {

    document
        .querySelectorAll(
            '.kanban-cards'
        )
        .forEach(
            c => c.innerHTML = ''
        );

    lista.forEach(chamado => {

        const card =
            document.createElement(
                'div'
            );

        card.className =
            'kanban-card';

        card.draggable = true;

        card.dataset.id =
            chamado.id;

        const classe =

            chamado.prioridade ===
            'Alta'

                ? 'high'

                : chamado.prioridade ===
                  'Média'

                ? 'medium'

                : 'low';

        card.innerHTML = `

        <div class="badge ${classe}">
            ${chamado.prioridade}
        </div>

        <h3>
            ${chamado.protocolo}
        </h3>

        <p>
        <strong>Usuário:</strong>
        ${chamado.usuario}
        </p>

        <p>
        <strong>Problema:</strong>
        ${chamado.problema}
        </p>

        <p>
        <strong>Categoria:</strong>
        ${chamado.categoria}
        </p>

        <p>
        <strong>Técnico:</strong>
        ${chamado.tecnico}
        </p>

        <p>
        <strong>Abertura:</strong>
        ${chamado.dataAbertura}
        </p>

        <button class="btn-excluir" data-id="${chamado.id}">
            Excluir
        </button>

        `;

        adicionarEventosDrag(
            card
        );

        document
            .querySelector(
                `[data-status="${chamado.status}"]`
            )
            .appendChild(card);

        const btnExcluir =
    card.querySelector('.btn-excluir');

btnExcluir.addEventListener(
    'click',
    (e) => {

        e.stopPropagation();

        const confirmar = confirm(
            `Deseja excluir o chamado ${chamado.protocolo}?`
        );

        if (confirmar) {

            chamados = chamados.filter(
                c => c.id !== chamado.id
            );

            salvar();
            renderizar();
        }
    }
);

    });

    atualizarContadores();
}

function atualizarContadores() {

    document.getElementById(
        'count-aberto'
    ).textContent =

        chamados.filter(
            c =>
            c.status ===
            'Aberto'
        ).length;

    document.getElementById(
        'count-atendimento'
    ).textContent =

        chamados.filter(
            c =>
            c.status ===
            'Em Atendimento'
        ).length;

    document.getElementById(
        'count-finalizado'
    ).textContent =

        chamados.filter(
            c =>
            c.status ===
            'Finalizado'
        ).length;
}

function adicionarEventosDrag(
    card
) {

    card.addEventListener(
        'dragstart',
        () => {
            card.classList.add(
                'dragging'
            );
        }
    );

    card.addEventListener(
        'dragend',
        () => {
            card.classList.remove(
                'dragging'
            );
        }
    );
}

document
.querySelectorAll(
    '.kanban-cards'
)
.forEach(coluna => {

    coluna.addEventListener(
        'dragover',
        e => {
            e.preventDefault();
            coluna.classList.add(
                'cards-hover'
            );
        }
    );

    coluna.addEventListener(
        'dragleave',
        () => {
            coluna.classList.remove(
                'cards-hover'
            );
        }
    );

    coluna.addEventListener(
        'drop',
        () => {

            coluna.classList.remove(
                'cards-hover'
            );

            const card =
                document.querySelector(
                    '.dragging'
                );

            const id =
                Number(
                    card.dataset.id
                );

            const chamado =
                chamados.find(
                    c =>
                    c.id === id
                );

            chamado.status =
                coluna.dataset.status;

            salvar();

            renderizar();

        }
    );
});

document
.getElementById(
    'pesquisa'
)
.addEventListener(
    'input',
    e => {

        const texto =
            e.target.value
            .toLowerCase();

        const filtrados =
            chamados.filter(
                c =>

                    c.usuario
                    .toLowerCase()
                    .includes(texto)

                    ||

                    c.problema
                    .toLowerCase()
                    .includes(texto)

                    ||

                    c.protocolo
                    .toLowerCase()
                    .includes(texto)
            );

        renderizar(
            filtrados
        );
    }
);

renderizar();
