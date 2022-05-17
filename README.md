# Requisições da API

## Usuario

### GET

- **/api/usuarios/** - Lista todos Usuarios cadastrados
- **/api/usuarios/{ID}** - Lista um Usuario baseado no ID informado na URL

### POST

- **/api/usuarios/** - Cria um Usuario

### PUT

- **/api/usuarios/{ID}** - Atualiza um Usuario baseado no ID informado na URL

### DELETE

- **/api/usuarios/{ID}** - Deleta um Usuario baseado no ID informado na URL 

## Caso

### GET

- **/api/casos/** - Lista todos Casos cadastrados
- **/api/caso/{ID}** - Lista um Caso baseado no ID informado na URL
- **/api/caso/usuario/{ID}** - Lista todos os Casos atrelados ao ID de um Usuario cadastrado

### POST

- **/api/casos/** - Cria um Caso

### PUT

- **/api/casos/{ID}** - Atualiza um Caso baseado no ID informado na URL

### DELETE

- **/api/casos/{ID}** - Deleta um Caso baseado no ID informado na URL 
