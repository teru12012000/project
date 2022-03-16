const $doc=document;
Window.onload = function() {
  let $el = $doc.getElementById("Sounds");
  $el.play();
  };
  const audioPlay=()=> {
    let $el1 = $doc.getElementById("sound1");
    $el1.play();
  };

  const popupImage=()=>{
    var $popup = $doc.getElementById('js-popup');
    if(!$popup) return;

    var $blackBg = $doc.getElementById('js-black-bg');
    var $closeBtn = $doc.getElementById('js-close-btn');
    var $showBtn = $doc.getElementById('js-show-popup');

    closePopUp($blackBg);
    closePopUp($closeBtn);
    closePopUp($showBtn);
    function closePopUp(elem) {
      if(!elem) return;
        elem.addEventListener('click', function() {
          $popup.classList.toggle('is-show');
        });
      }
  }
  $a_tag=$doc.getElementsByTagName('a');
  $a_tag[0].addEventListener('click',(e)=>clickHandler(e));

  const clickHandler=(e)=>{
    e.preventDefault();
  }
  popupImage();