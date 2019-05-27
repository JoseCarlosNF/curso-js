# Como iniciar um projeto com node

1. Declaração dos pacotes utilizados

- Para isso utiliza-se do comando:

		npm init
- E um *Wizard* é iniciado. Ou pode-se inicializar tudo como *default*:

		npm init -y

2. Além disso, pode-se também adicionar uma área para salvar as dependências do projeto.

        npm i --save <nome_dependencia>

3. Ou mesmo apenas as dependências que são necessárias apenas durante o período de desenvolvimento.

        npm i --save-dev axios@0.18.0 -E

- *axios*: Nome do pacote
- *@0.18.0*: Versão
- *-E*: Exatamente essa versão

4. **packge-lock.json** deve ir para o repositório. Para evitar que outros desenvolvedores baixem versões diversas e define exatamente o mesmo pacote da instalação inicial.