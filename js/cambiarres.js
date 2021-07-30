if (document.body.clientWidth < 1400 && document.body.clientWidth > 1150 ) {
    viewport = document.querySelector("meta[name=viewport]");
    viewport.setAttribute('content', 'width=device-width, initial-scale=0.67, user-scalable=0');
  }