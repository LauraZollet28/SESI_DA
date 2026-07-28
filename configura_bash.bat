@echo off
echo Configurando Git...

REM Define diretamente o nome de usuário e e-mail
set username=SEU_NOME
set useremail=SEU_EEMAIL

REM Configurações globais do Git
git config --global user.name "%Laura%"
git config --global user.email "%zolletsilvestrol@gmail.com%"

echo.
echo Configurações aplicadas com sucesso:
git config --global user.name
git config --global user.email

exit