const cart = {
  items: [
    {
      productId: 100,
      name: 'Notebook Samsung, Intel® Core™ i7, 16GB, 256GB SSD, Tela de 15”, Style S51 Pro - NP900X5T-XW1BR - SGNP900X5TXW1_PRD',
      altImage: 'Notebook Samsung',
      salesChannel: '1',
      available: true,
      bestPriceFormated: 'R$ 7.158,21',
      bestPrice: 715821,
      quantity: 10,
      image: '"/src/images/note01-samsung-160-160.jpg"',
    },
    {
      productId: 101,
      name: 'Notebook Gamer Acer, Intel Core i7, 16GB, 1TB, Tela de 15.6”, NVIDIA GeForce GTX 1050 Ti - pire Nitro 5 AN515-51-78D6 - 49953_PRD',
      altImage: 'Notebook Gamer',
      salesChannel: '1',
      available: true,
      bestPriceFormated: 'R$ 4.699,00',
      bestPrice: 469900,
      quantity: 1,
      image: '"/src/images/note-gamer-acer-160-160.jpg"',
    },
    {
      productId: 102,
      name: 'Impressora Multifuncional Canon Tanque de Tinta com USB e Wi-Fi - G3111 - N52315C021PTO_PRD',
      altImage: 'Impressora Canon',
      salesChannel: '1',
      available: true,
      bestPriceFormated: 'R$ 725,80',
      bestPrice: 72580,
      quantity: 2,
      image: '"/src/images/impressora-canon-160-160.jpg"',
    },
    {
      productId: 103,
      name: 'Notebook Samsung, Processador Intel® Core™ i7, 8GB, 256GB SSD, Tela de 13,3”, Style S51 Pen - NP930QAA-KW1BR - SGNP930QAAKW1_PRD',
      altImage: 'Notebook Samsung',
      salesChannel: '1',
      available: true,
      bestPriceFormated: 'R$ 7.066,42',
      bestPrice: 706642,
      quantity: 1,
      image: '"/src/images/note02-samsung-160-160.jpg"',
    },
  ],
};

const myFunctions = {
  init: () => {
    //Aqui você vai chamar suas funções que criar, e o exemplo de chamada será myFunctions.exemplo();
    myFunctions.exemplo();
    myFunctions.getItemsMinicart();
    myFunctions.sumTotalsProducts();
  },

  exemplo: () => {
    // alert('Aqui é só um exemplo.');
  },

  getItemsMinicart: () => {
    const $miniCartBody = document.querySelector('.minicart__body');
    const itensCart = cart.items.map(
      ({ name, altImage, image, quantity, bestPriceFormated }) => {
        return `<li class="minicart__product" id="1">
              <div class="minicart__image">
                <img src=${image} alt=${altImage} />
              </div>
              <div class="minicart__productInfos">
                <p class="minicart__productName">${name}</p>
                <div class="minicart__quantity-price">
                  <span class="minicart__quantity">Qtd: <span>${quantity}</span></span>
                  <span class="minicart__price">${bestPriceFormated}</span>
                </div>
              </div>
            </li>`;
      },
    );
    $miniCartBody.innerHTML = itensCart;
  },

  sumTotalsProducts: () => {
    const $totalPrice = document.querySelector('.minicart__totalProducts');
    const totalProducts = cart.items.map(({ bestPrice, quantity }) => {
      return bestPrice * quantity;
    });
    const sum = totalProducts.reduce((sum, totalProducts) => {
      return sum + totalProducts;
    }, 0);
    const total = sum / 100;
    const totalFormated = total.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
    $totalPrice.textContent = totalFormated;
  },
};

myFunctions.init();
