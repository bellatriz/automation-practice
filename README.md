# Instalação e Execução

1. Acessar Jenkins
2. Criar um Novo job > Inserir o nome > selecionar Pipeline
3. Na configuração, na aba Pipeline, selecionar em Definition "Pipeline script from SCM"
4. Em SCM selecionar Git
5. Inserir a url 'https://github.com/bellatriz/automation-practice.git' em Repository URL
6. Em Branch Specifier inserir '*/main'
7. Em Script Path deve ser mantido 'Jenkinsfile'
8. Salvar e construir o projeto :)
9. Rodar mais de uma vez para construção do JUnit Graph