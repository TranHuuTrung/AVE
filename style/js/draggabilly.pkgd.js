var grid = document.querySelector('.grid');

var pckry = new Packery( grid, {
  columnWidth: 80,
  rowHeight: 80
});

// bind draggabilly events to item elements
pckry.items.forEach( function( item ) {
  makeItemDraggable( item.element )
});

function makeItemDraggable( itemElem ) {
  // make element draggable with Draggabilly
  var draggie = new Draggabilly( itemElem );
  // bind Draggabilly events to Packery
  pckry.bindDraggabillyEvents( draggie );
}

var addItemsButton = document.querySelector('#add-items');

addItemsButton.addEventListener( 'click', function() {
  var itemElems = [
    getItemElement('w2 h2'),
    getItemElement('w4 h2'),
    getItemElement('w4 h4'),
    getItemElement('w2 h2'),
    getItemElement('w2 h4'),
    getItemElement('w2 h2'),
  ];
  // append to grid via document fragment
  var fragment = document.createDocumentFragment();
  itemElems.forEach( function( itemElem ) {
    fragment.appendChild( itemElem )
  });
  grid.appendChild( fragment );
  // add to packery & make draggable
  pckry.appended( itemElems );
  itemElems.forEach( makeItemDraggable );
});

// get item element
function getItemElement( className ) {
  var itemElem = document.createElement('div');
  itemElem.className = 'item ' + className;
  return itemElem;
}
