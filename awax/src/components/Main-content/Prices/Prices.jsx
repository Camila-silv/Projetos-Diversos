export default function Prices() {
    return (
        <section className="section-prices">
            <div className="section-prices__container-prices container-center">
                <h2 className="container-prices__title title-default">Price</h2>

                <span className="container-prices__label label-default">Pricing table</span>

                <div className="container-prices__container-pricing-plans container-width-default">
                    <div className="container-pricing-plans__plans">
                        <h3 className="plans__title">Express</h3>

                        <span className="plans__price">$ 9.99</span>
                        <span className="plans__month">/ month</span>

                        <ul className="plans__benefits">
                            <li className="plans__benefits__items">Tracking issues<br/></li>
                            <li className="plans__benefits__items">Add bugs through e-mail<br/></li>
                            <li className="plans__benefits__items">Notifications<br/></li>
                            <li className="plans__benefits__items">Time tracking<br/></li>
                            <li className="plans__benefits__items">Custom views<br/></li>
                        </ul>

                        <button className="plans__button button">Choose</button>
                    </div>

                    <div className="container-pricing-plans__plans">
                        <h3 className="plans__title">Standart</h3>

                        <span className="plans__price">$ 14.99</span>
                        <span className="plans__month">/ month</span>

                        <ul className="plans__benefits">
                            <li className="plans__benefits__items">Tracking issues<br/></li>
                            <li className="plans__benefits__items">Add bugs through e-mail<br/></li>
                            <li className="plans__benefits__items">Notifications<br/></li>
                            <li className="plans__benefits__items">Time tracking<br/></li>
                            <li className="plans__benefits__items">Custom views<br/></li>
                        </ul>

                        <button className="plans__button button">Choose</button>
                    </div>

                    <div className="container-pricing-plans__plans">
                        <h3 className="plans__title">Luxe</h3>

                        <span className="plans__price">$ 19.99</span>
                        <span className="plans__month">/ month</span>

                        <ul className="plans__benefits">
                            <li className="plans__benefits__items">Tracking issues<br/></li>
                            <li className="plans__benefits__items">Add bugs through e-mail<br/></li>
                            <li className="plans__benefits__items">Notifications<br/></li>
                            <li className="plans__benefits__items">Time tracking<br/></li>
                            <li className="plans__benefits__items">Custom views<br/></li>
                        </ul>

                        <button className="plans__button button">Choose</button>
                    </div>


                    <div className="container-pricing-plans__plans">
                        <h3 className="plans__title">Premium</h3>

                        <span className="plans__price">$ 24.99</span>
                        <span className="plans__month">/ month</span>

                        <ul className="plans__benefits">
                            <li className="plans__benefits__items">Tracking issues<br/></li>
                            <li className="plans__benefits__items">Add bugs through e-mail<br/></li>
                            <li className="plans__benefits__items">Notifications<br/></li>
                            <li className="plans__benefits__items">Time tracking<br/></li>
                            <li className="plans__benefits__items">Custom views<br/></li>
                        </ul>

                        <button className="plans__button button">Choose</button>
                    </div>
                </div>
            </div>
        </section>
    )
}