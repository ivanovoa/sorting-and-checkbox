function ProductRow ({product}) {
    const name = product ?
    product.name :
    <span style={{color: 'red'}}>
      {product.name}
    </span>;
    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
}

export default ProductRow