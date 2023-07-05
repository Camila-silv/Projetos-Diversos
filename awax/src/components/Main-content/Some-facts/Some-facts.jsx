export default function SomeFacts() {
    return (
        <section className="section-some-facts">
            <div className="section-some-facts__container-some-facts container-center">
                <h2 className="container-some-facts__title title-default">SOme facts</h2>

                <span className="container-some-facts__label label-default">About our work</span>

                <ul className="container-some-facts__list-extra-information container-width-default">
                    <li className="list-extra-information__item-extra-information">
                        <span className="item-extra-information__numbers">1000</span>
                        <span className="item-extra-information__label">Design projects released</span>
                        <span className="item-extra-information__parag">Praesent metus urna. feugiat a placerat elementum at leo</span>
                    </li>

                    <li className="list-extra-information__item-extra-information">
                        <span className="item-extra-information__numbers">900</span>
                        <span className="item-extra-information__label">Photos</span>
                        <span className="item-extra-information__parag">Praesent metus urna. feugiat a placerat elementum at leo</span>
                    </li>

                    <li className="list-extra-information__item-extra-information">
                        <span className="item-extra-information__numbers">500</span>
                        <span className="item-extra-information__label">Marketing ideas</span>
                        <span className="item-extra-information__parag">Praesent metus urna. feugiat a placerat elementum at leo</span>
                    </li>
                </ul>
            </div>
        </section>
    )
}