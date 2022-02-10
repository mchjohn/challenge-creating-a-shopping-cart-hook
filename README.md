## Preview

<img src="https://github.com/mchjohn/challenge-creating-a-shopping-cart-hook/blob/master/imgs/rocketshoes.png" data-canonical-src="https://github.com/mchjohn/challenge-creating-a-shopping-cart-hook/blob/master/imgs/rocketshoes.png" width="968" height="520" />

## Sobre esse projeto

Este é o segundo desafio da trilha de reactjs proposto pela RocketSeat

***Ele é obrigatório aos alunos que estão participando do bootcamp Ignite***

## Qual é o objetivo

A partir de uma template, completar a criação de uma aplicação ***RocketShoes***, respeitando todos os testes que serão executados via jest.

Os testes são: 

- **should be able to render the amount of products added to cart**

Para que esse teste passe você deve renderizar o valor correto da quantidade de tipos de produtos .

- **should be able to render each product quantity added to cart**

Para que esse teste passe você deve renderizar corretamente a quantidade adicionada de cada produto adicionado ao carrinho.

- **should be able to add a product to cart**

Para que esse teste passe você deve clicar no botão ADICIONAR AO CARRINHO e o produto escolhido ser adicionado com sucesso ao carrinho. Além disso, a quantidade do produto no carrinho mostrada no botão deve representar o novo valor (incrementado de 1 unidade)..

- **should be able to increase/decrease a product amount**

Para que esse teste passe você deve renderizar corretamente o valor da quantidade de cada produto adicionado ao carrinho e ser capaz de incrementar e decrementar os valores ao clicar no botão.

- **should not be able to decrease a product amount when value is 1**

Para que esse teste passe você deve desabilitar o botão "decrement-product" quando a quantidade do produto for igual a 1.

- **shoud be able to remove a product**

Para que esse teste passe você deve ser capaz de remover o produto do carrinho ao clicar no botão "remove-product">.

- **should be able to initialize cart with localStorage value**

Para que esse teste passe você deve inicializar o estado cart com o valor da key @RocketShoes:cart do localStorage caso ele exista.

- **should be able to add a new product**

Para que esse teste passe você deve utilizar a função addProduct para adicionar um novo produto ao carrinho e preservar o valor atualizado do carrinho no localStorage utilizando o setItem.

- **should not be able add a product that does not exist**

PPara que esse teste passe você deve utilizar a função addProduct para verificar que o produto não existe, mostrar um toast.error com a mensagem Erro na adição do produto e sair da função sem alterar o cart e o valor no localStorage.

- **should be able to increase a product amount when adding a product that already exists on cart**

Para que esse teste passe você deve utilizar a função addProduct para incrementar em 1 unidade a quantidade de um produto no carrinho em vez de adicionar um novo produto. Deve também preservar o valor atualizado do carrinho no localStorage utilizando o setItem.

- **should not be able to increase a product amount when running out of stock**

Para que esse teste passe você deve utilizar a função addProduct para verificar que a quantidade desejada do produto não possui em estoque (rota stock/id da Fake API). Deve também mostrar um toast.error com a mensagem Quantidade solicitada fora de estoque e sair da função sem alterar o cart e o valor no localStorage.

- **should be able to remove a product**

Para que esse teste passe você deve utilizar a função removeProduct para remover um produto do carrinho. Deve também preservar o valor atualizado do carrinho no localStorage utilizando o setItem.

- **should be able to update a product amount**

Para que esse teste passe você deve utilizar a função updateProductAmount para incrementar e decrementar o valor de um produto no carrinho. Deve também preservar o valor atualizado do carrinho no localStorage utilizando o setItem.

- **should not be able to remove a product that does not exist**

Para que esse teste passe você deve utilizar a função removeProduct para verificar que o produto não existe no carrinho e mostrar um toast.error com a mensagem Erro na remoção do produto. Deve também sair da função sem alterar o cart e o valor no localStorage.

- **should not be able to update a product amount when running out of stock**

Para que esse teste passe você deve utilizar a função updateProductAmount para verificar que a quantidade desejada do produto não possui em estoque (rota stock/id da Fake API). Deve também mostrar um toast.error com a mensagem Quantidade solicitada fora de estoque e sair da função sem alterar o cart e o valor no localStorage.

- **should not be able to update a product amount to a value smaller than 1**

Para que esse teste passe você deve utilizar a função updateProductAmount para verificar que a quantidade desejada do produto é menor que 1 e sair imediatamente da função sem alterar o cart e o valor no localStorage.

## Instalação

```
$ git clone git@github.com:mchjohn/challenge-creating-a-shopping-cart-hook.git

$ cd challenge-creating-a-shopping-cart-hook 
```

**Instale as dependências**

```
$ yarn
```

**Rodando a aplicação**

```
$ yarn start

$ yarn server
```

**Rodando os testes**

```
$ yarn test
```

<br>
<br>

<a href = "mailto:michel.john@hotmail.com"><img src="https://img.shields.io/badge/-OutLook-%230077B5?style=for-the-badge&logo=Microsoft Outlook&logoColor=white" target="_blank"></a>
<a href="https://www.linkedin.com/in/micheljohn/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
<a href="https://mchjohn.github.io/mchljohn/" target="_blank"><img src="https://img.shields.io/badge/-Portfólio-%231E1E26?style=for-the-badge&logo=dev.to&logoColor=white" target="_blank"></a>
<a href="https://passport.rocketseat.com.br/react-native/michel-john-1578542942" target="_blank"><img src="https://img.shields.io/badge/-Rocketseat-%2367159C?style=for-the-badge&logo=Apache RocketMQ&logoColor=white" target="_blank"></a>
