import React from 'react';
import HeadNavbar from "../Header.Component";

const Serviceshort = () => {
    return (
        <>
            <div className="categories-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="single-cat mb-50 wow fadeInUp text-center" data-wow-duration="1s" data-wow-delay=".2s" style={{ visibility: "visible", animationDuration: "1s", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                                <div className="cat-icon">
                                    <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/icon/services1.svg" alt="" />
                                </div>
                                <div className="cat-cap">
                                    <h5>Fast &amp; Free Delivery</h5>
                                    <p>Free delivery on all orders</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="single-cat mb-50 wow fadeInUp text-center" data-wow-duration="1s" data-wow-delay=".2s" style={{ visibility: "visible", animationDuration: "1s", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                                <div className="cat-icon">
                                    <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/icon/services2.svg" alt="" />
                                </div>
                                <div className="cat-cap">
                                    <h5>Secure Payment</h5>
                                    <p>Secure cashless payment on orders</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="single-cat mb-50 wow fadeInUp text-center" data-wow-duration="1s" data-wow-delay=".5s" style={{ visibility: "visible", animationDuration: "1s", animationDelay: "0.2s", animationName: "fadeInUp" }}>
                                <div className="cat-icon">
                                    <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/icon/services4.svg" alt="" />
                                </div>
                                <div className="cat-cap">
                                    <h5>Online Support</h5>
                                    <p>deliver a quick support</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

const Centerpot = () => {
    return (
        <>
            <div className="container">
                <div className='row'>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className='card' style={{ backgroundColor: 'transparent', border: 0 }}><img src="https://lh3.googleusercontent.com/u/1/drive-viewer/AEYmBYQ1HwJkrg6udT7O5bWm7oq9YXdqnZstWBKVacZNR41BO56WHw039lzQX_g5TPLPQhOshFd7Potqx3N3eVlo4BYWj5QwuQ=w1366-h633" /></div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="container container-table">
                            <div className="row horizontal-center-row">
                                <div className="text-center col-md-4 col-md-offset-4">TEXT</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

const Home = () => {
    return (
        <>
            <HeadNavbar Setactbar='0' />
            <div style={{ margin: "20px 0px", padding: 5, backgroundColor: 'black', color: 'white', justifyContent: 'center', width: '100%' }}>
                <marquee ><p style={{ justifyContent: 'inherit', marginBottom: 0, marginTop: 15 }}>Sales on live with 70% off on the first product!! grap it now.</p></marquee>
            </div>
            <Centerpot />
            <Serviceshort />
        </>
    );
}

export default Home;