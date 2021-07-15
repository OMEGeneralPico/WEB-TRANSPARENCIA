(function($) {

    $(document).ready(function() {
      
      var elementTop, elementBottom, viewportTop, viewportBottom;
  
      function isScrolledIntoView(elem) {
        elementTop = $(elem).offset().top;
        elementBottom = elementTop + $(elem).outerHeight();
        viewportTop = $(window).scrollTop();
        viewportBottom = viewportTop + $(window).height();
        return (elementBottom > viewportTop && elementTop < viewportBottom);
      }
      
        if($('img[src$="webp"]').length){
  
        var gifSrc, srcGif;
  
        $('img[src$="webp"]').each(function(){
          gifSrc = $(this).attr('src');
          $(this).attr('data-gif', gifSrc);
        });
  
        $(window).on('scroll.gifrun', function() {
  
          $('img[src$="webp"]').each(function(){
  
            srcGif = $(this).attr('data-gif'); 
  
            if (!(isScrolledIntoView(this) === true)) {
              $(this).attr('src', srcGif);
            } else {
              if($(this).attr('src') == srcGif){
                // do nothing
              } else {
                $(this).attr('src', srcGif);
              }
            }
          });
        
        });	 /* end $(window).on('scroll.gifrun') */
  
      } /* end img[src$="gif"] */
      
    
    });
    
  })(jQuery);