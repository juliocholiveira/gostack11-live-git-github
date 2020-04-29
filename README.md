# Git & Github

Este artigo mostrará o passo a passo para instalar e configurar o git em um projeto e realizar a integração com o Github.

### Instalando o git

- No MacOS já vem instalado por padrão. 
- No Windows baixar e instalar no site do [Git](https://git-scm.com/).

```shell
# Ver se o git já está instalado
git --version
```

### Comandos Git
```shell
# ==============> Iniciar um projeto git no seu projeto
git init

# Criar arquivo .gitignore para definir quais arquivos e pastas serão ignorados
# pelo git
touch .gitignore

# Abrir arquivo e colocar a pasta node_modules para ser ignorada

# Adicionar os arquivos novos/alterados ao repositório
git add .

# Realizar o commit das alterações
git commit -m "Commit inicial"

# ==============> Integrar com o Github

# Criar um repositório no Github e copiar a url do repositório
# Vincular o repositório local a um repositório remoto
git remote add origin "URL DO REPOSITORIO"

# Submeter o projeto para o repositório remoto (no Github)
git push -u origin master

# ==============> Clonar um repositório remoto para local
git clone "URL DO REPOSITORIO"

# ==============> Submeter alterações feitas no repositório

# Adicionar os arquivos novos/alterados ao repositório
git add .

# Realizar o commit das alterações
git commit -m "Alterações realizadas na página inicial"

# ==============> Gerenciando Branchs

# Criar nova branch
git checkout -b feature/courses-page

# Alterar de branch
git checkout master

# Adicionar os arquivos novos/alterados ao repositório
git add .

# Realizar o commit das alterações (feature, fix, )
git commit -m "Alterações realizadas na página inicial"

# Submeter a branch 
git push origin feature/courses-page

# Atualizar branch com as novas atualizações da branch master
git merge master

# Abrir o github e criar uma nova pull request e definir quem será o reviwer
# Quando for dado o merge para o master pode deletar a branch

# ==============> Outros comandos importantes

# Baixar as novas atualizações do repositório remoto para o repositório local
git pull

# Ver o status dos arquivos do projeto
git status

# Ver o log de commits do repositório
git log

# Ver os repositórios remotos vinculados ao repositório local
git remote -v
```
