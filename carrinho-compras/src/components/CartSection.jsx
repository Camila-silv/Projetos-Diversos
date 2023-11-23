import PropTypes from "prop-types";

export default function CartSection({
  shoppingList,
  increase,
  totalAmountPayable,
}) {
  return (
    <section className="container-main-content__cart-section">
      <img
        src="public/carrinho-cinza.svg"
        alt="icone do carrinho de compras"
        className="cart-section__cart-section-icon"
      />
      <div className="cart-section__container-cart">
        <div className="container-cart__shopping-cart-title-container">
          <img
            src="public/icone-carrinho.svg"
            alt="icone de carrinho"
            className="shopping-cart-title-container__icon"
          />
          <h2 className="shopping-cart-title-container__title">
            Produtos no carrinho
          </h2>
        </div>
        <ul className="container-cart__shopping-list" data-shopping-list>
          {shoppingList.map((item) => {
            return (
              <li
                className="shopping-list__shopping-list-item"
                key={increase()}
              >
                <span className="shopping-list-item--color">
                  {" "}
                  {item.volume}x{" "}
                </span>{" "}
                {item.name}
                <span className="shopping-list-item--color"> {item.value}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="cart-section__final-payment-amount-container">
        <span className="final-payment-amount-container__final-payment-amount-label">
          Total:
          <span className="final-payment-amount-label--color">
            <span className="final-payment-amount-label__amount">
              {totalAmountPayable === "--,--" ? "R$ --,--" : totalAmountPayable}
            </span>
          </span>
        </span>
      </div>
    </section>
  );
}

CartSection.propTypes = {
  shoppingList: PropTypes.array,
  increase: PropTypes.func,
  totalAmountPayable: PropTypes.string,
}
