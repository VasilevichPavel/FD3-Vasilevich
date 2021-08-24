var ProductsBlock = React.createClass({

    displayName: 'ProductsBlock',
  
    propTypes: {
      shopName: React.PropTypes.string.isRequired,
      products: React.PropTypes.array.isRequired,
    },
  
    render: function() {
  
      var productCode=this.props.products.map( v =>
          React.DOM.div({key:v.code,className:'Product'},
            React.DOM.span({className:'ProductName'}, v.productName),
            React.DOM.span({className:'Cost'}, v.cost),
            React.DOM.span({className:'PhotoUrl'}, v.photoUrl),
            React.DOM.span({className:'InStock'}, v.inStock),
          )
        );
      return React.DOM.div({className:'ProductsBlock'}, 
        React.DOM.div({className:'ShopName'}, this.props.shopName),
        React.DOM.div({className:'Products'}, productCode),
      );
    },
  
  });