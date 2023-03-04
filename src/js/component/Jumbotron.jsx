import React from "react";

const Jumbotron = () => {
    return (
        <>
        <div className="container">
            <div className="container-fluid bg-light px-0">
            <div className="container mx-auto">
            <div className="jumbotron">
                <h1>Welcome to my world</h1>
                <p>If you are not willing to risk the usual, you will have to settle for the ordinary </p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </div>

            <div className="row my-4">
            <div className="col-md-3">
                <div className="card">
                <img src="https://media.timeout.com/images/104096802/750/562/image.jpg" className="card-img-top" alt="Madrid skyline"/>
                    <div className="card-body">
                    <h5 className="card-title">Madrid</h5>
                    <p className="card-text">De Madrid al cielo</p>
                    <a href="#" className="btn btn-primary">Visit Madrid</a>
                    </div>
                </div>
            </div>

            <div className="col-md-3">
                <div className="card">
                <img src="https://media.timeout.com/images/105444797/750/562/image.jpg" className="card-img-top" alt="Louvre Museum"/>
                    <div className="card-body">
                    <h5 className="card-title">Paris</h5>
                    <p className="card-text">We willl always have Paris</p>
                    <a href="#" className="btn btn-primary">Visit Paris</a>
                    </div>
                </div>
            </div>

            <div className="col-md-3">
                <div className="card">
                <img src="https://media.timeout.com/images/105457205/750/562/image.jpg" className="card-img-top" alt="London"/>
                    <div className="card-body">
                    <h5 className="card-title">London</h5>
                    <p className="card-text">A day in London</p>
                    <a href="#" className="btn btn-primary">Visit London</a>
                    </div>
                </div>
            </div>
        
            <div className="col-md-3">
                <div className="card">
                <img src="https://www.cunard.com/content/dam/cunard/inventory-assets/itineraries/V330/V330/V330_Amsterdam.jpg.image.750.562.low.jpg" className="card-img-top" alt="Canal in Amsterdam"/>
                    <div className="card-body">
                    <h5 className="card-title">Amsterdam</h5>
                    <p className="card-text">Take a walk on the wildside</p>
                    <a href="#" className="btn btn-primary">Visit Amsterdam</a>
                    </div>
                </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default Jumbotron; 