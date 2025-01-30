function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Função para verificar a visibilidade e aplicar animação
  function checkVisibility() {
    //section MoveVSL
    const pTitle02 = document.querySelector('#pTitle02');
    if (isInViewport(pTitle02)) {
        pTitle02.style.animation = 'slideIn 0.40s ease-in-out forwards';
    }
    const subTitle02 = document.querySelector('#subTitle02');
    if (isInViewport(subTitle02)) {
        subTitle02.style.animation = 'slideInRight 0.50s ease-in-out forwards';
    }
    //section04:
    const Conteiner01 = document.querySelector('#Conteiner01');
    if (isInViewport(Conteiner01)) {
        Conteiner01.style.animation = 'slideIn 0.50s ease-in-out forwards';
    }
    const Conteiner02 = document.querySelector('#Conteiner02');
    if (isInViewport(Conteiner02)) {
        Conteiner02.style.animation = 'slideInRight 0.50s ease-in-out forwards';
    }
    //section06
    const Depoimentos = document.querySelector('#Depoimentos');
    if (isInViewport(Depoimentos)) {
        Depoimentos.style.animation = 'slideInRight 0.10s ease-in-out forwards';
    }
    //section08 
    const PtitleSection07 = document.querySelector('#PtitleSection07');
    if (isInViewport(PtitleSection07)) {
        PtitleSection07.style.animation = 'slideInRight 0.50s ease-in-out forwards';
    }
    const Shorts = document.querySelector('#Shorts');
    if (isInViewport(Shorts)) {
        Shorts.style.animation = 'slideInRight 0.50s ease-in-out forwards';
    }
    //section 09
    const TitleSection09 = document.querySelector('#TitleSection09');
    if (isInViewport(TitleSection09)) {
        TitleSection09.style.animation = 'slideInRight 1s ease-in-out forwards';
    }
    const SubTitileSection09 = document.querySelector('#SubTitileSection09');
    if (isInViewport(TitleSection09)) {
        SubTitileSection09.style.animation = 'slideInRight 1s ease-in-out forwards';
    }
  }
  // Verifica a visibilidade ao rolar a página
  window.addEventListener('scroll', checkVisibility);
