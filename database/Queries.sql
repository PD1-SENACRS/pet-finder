--- Queries Usuários

--- listar todos usuários
select * from usuario;

--- listar usuário por id
select * from usuario
order by id_usuario

--------------------------------------------------
--- Queries Casos

--- listar todos os casos
select * from caso

--- listar casos por id
select * from caso
order by id_caso

--------------------------------------------------
--- Queries Raças/Animais

-- listar todas as raças
select * from "Raca"

-- listar todos os animais
select * from "Animal"

-- listar raças ordenando por id
select * from "Raca"
order by id_raca

-- listar animais ordenando por id
select * from "Animal"
order by id_animal

-- listar raças ordenando por raça
select * from "Raca"
order by raca

-- listar animais ordenando por animal
select * from "Animal"
order by animal

-- listar SOMENTE as raças
select * from "Raca"
order by raca

-- listar SOMENTE os animais
select animal from "Animal"
order by animal

-- listar SOMENTE as raças e imagens
select raca, imagem from "Raca"
order by raca

-- listar SOMENTE os animais e imagens
select animal, imagem from "Animal"
order by animal