export default function Carousel() {
    return <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1792741821206_indianoceanbengaluruweb.jpeg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
                <img src="https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1792502096801_u1tourposterweb.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
                <img src="https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1792995087364_thosewhoknowtheyknowbengaluru.jpeg" className="d-block w-100" alt="..." />
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
}