  // document.addEventListener('DOMContentLoaded', function() {
  //   var productId = {{ product.id }};
  //   var productHandle = '{{ product.handle }}';

  //   // Gọi API để tăng lượt xem
  //   fetch(`/products/${productHandle}/view`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       product_id: productId
  //     })
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log('Số lượt xem sản phẩm đã được cập nhật.');
  //   })
  //   .catch((error) => {
  //     console.error('Lỗi khi cập nhật số lượt xem:', error);
  //   });
  // });


 document.addEventListener('DOMContentLoaded', function() {
    var productId = {{ product.id }};
    var productHandle = '{{ product.handle }}';

    // Gọi API để tăng số lượt xem
    fetch('https://your-server.com/products/' + productHandle + '/view', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        product_id: productId
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Số lượt xem sản phẩm đã được cập nhật:', data.views);
    })
    .catch((error) => {
      console.error('Lỗi khi cập nhật số lượt xem:', error);
    });
  });