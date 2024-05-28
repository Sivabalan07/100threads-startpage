import React from 'react';
import HeadNavbar from "../Header.Component";
import './home.component.css';
import { products } from "../../Function/Productdata";

//#region variable
const productList = products()
//#endregion
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
                    <div className="col-lg-6 col-md-6 col-sm-6 mb-4">
                        <div className='card fade-in-left' data-wow-duration=".5s" data-wow-delay=".5s" style={{ visibility: "visible", animationDuration: ".5s", animationDelay: "0.2s", animationName: "fadeInLeft", backgroundColor: 'transparent', border: 0 }}>
                            <img src="https://lh3.googleusercontent.com/fife/AGXqzDn77sE725PaCEttLzvdPzbyto4Sq6CCkK8wJrhbd2iCnpcjKH4o1JUPQJKTSw1p46RSjQnnaH15DOF4Ytzgbxapz07dhNGyv6NHO4z5UNZPn0Wnmkf2IwHdNk-3W9AN8byeOB153sFY3zcI0H4LvLrhFKjVGT77seRXFfWsrK2SJrPyXQEox7TLrw-F7upb9xys83yJVYmqr4ILA0VYizwUdVYvYRVJwyaNqWELqUALFkvwfV1SVsV2Qj5cHCsDFVOuOjxshYTXg2JndfC6E53z4Npw2eR839VsgNewzbtgsCO9UFLGnA-hXtrItepMM6q9Q-8tOXfmLE-GCOiMpmaqLm-IZAKn7kRPNpiUt84S5YWgoIU7kBr4rgpZ1DqTy8Eich0IPGIKwI_sGUlfvqp4gR24YqSMZsnh70j3u8xcZDwCzQKnJ95-xEdfGoXdHhYR7q17W6muD8Ue6X8TDxFcJUC85VSlAup4-Yq0NOY73Ju3kN4rU8Gvw3O1QdhhLSYun3F4oV5a50Xn25X9k6I7Pr0-UtE1yyjq4C2wvNfmzMT3K4XZ_SXmWSTFQM5-uMtxLeI02Om3Lp8vqGqWhA6RLrs298rMugMzoMSG5KkM-p8sOxIlGer_SJDHpJWexIUzionbaw_HGSJIifFkQFI2Nv0LNsupYehE2xce21OmjcyvFFyFV7H_QUBE1S4D4Uk1bF6iTqfbe-Qj87II3lNf3yKAbnIkc6pkvXTRhcoGW8PAoR2Nyx8dTMB4kjokXWX5ztCSca7cyQ50f9Kgq8t_yqcPuiaFYEQpmwHPYi1n3wyyNP8d5Ew5496G0uOqqlbN2lGqx-aS_yCUTR08u3Cb-Mngq-7nWlETZYUNBX2ESaJ7N9VA4hbDuv2lkGo2u7-NA1hfxpVF5cQb_zQHrY4GPLm9rYhow_ktv2IZk6iPamrz86T_3t8mDMdKeOPc-xib1_pbgNpEopzcA-3lUdmV-fkG-IhESW9azi96b-kK9G1gCDzm3grZWCOBEgzszZil15UWNQuKbqoiL6cF5pGo91cx0bDEIMrE0pRD7xYPQD9fZWk3UmnBxdbWpxIhI-hxTOxdzpIm1a14CBWLTR4Py14TbcpS7_M3R2g11QpeKy4-0FBZnJfh6sWXmSer9_CyMz7qzaH1RX68DYX-8OPvCmHcMkfxviX9iFs6uPKeqTykIqVL1q70AoPZDGjbwU4OH2s9f2c-BWsazHlVQc0GkMUHGpYmDhXGgbXp4-PakvlTrQbbCxERYzJc4bpeNdD8neWXZlKxDXuFY1swheeukFG28nU8awpIm66RfuRkBR3F2_4J3Of6oJCmHILW2EBc99PXa0RWQZVkhPGIHOlGUNH8-hthY1CQq6LtFDr-VGjqcVjOupoEupvpVtU0IQzwPrAQ8CPW_OXdnDGz6keG0fsplV_jLwG1KrzY8ubixOMermweDsf6kKNs_58u_p9R4jI0HKFIX_H46LcH1hUWdSO1LRra23Z-Etd-CWthybW0fpk7wtu0v3eS5qHVWOMUrOHSCgUsW0b_UB0Qka_f11ZE=w1366-h633" height={288} width={384} /></div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 justify-content-center">
                        <div className="justify-content-center align-item-center margi" data-wow-duration=".5s" data-wow-delay=".5s" style={{ visibility: "visible", animationDuration: ".5s", animationDelay: "0.2s", animationName: "fadeInRight" }}>
                            <div className="text-center announce"><p>Check out the newly launched collection<br /><br /></p></div>
                            <a href="/Product/100T0002"><button className='shopnowbutton'>Shop Now</button></a>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    );
}

const SliceCard=()=>{
    return(
        <ul style={{overflowX:'hidden',display:'flex'}}>
                    {productList?.map(product => {
                        return (
                            <li style={{listStyle:'none', display:'inline-block',float:'left'}}>
                                <div className="card" >
                                    <img className="card-img-top" src={product.frontImage} alt="Card image"/>
                                        <div className="card-body">
                                            <h4 className="card-title">{product.title}</h4>
                                            <p className="card-text">{product.id}</p>
                                            <a href={`/product/${product.id}`} className="btn btn-primary">See Profile</a>
                                        </div>
                                </div>

                            </li>
                        )
                    })}
                </ul>
    )
}

const Home = () => {
    return (
        <>
            <HeadNavbar Setactbar='0' />
            <div style={{ margin: "20px 0px", padding: 5, backgroundColor: 'black', color: 'white', justifyContent: 'center', width: '100%' }}>
                <marquee ><p style={{ justifyContent: 'inherit', marginBottom: 0, marginTop: 15 }}>New Sales arrived with five T-shirt @&#8377;999 !!, Grab it now.</p></marquee>
            </div>
            <Centerpot />
            <SliceCard/>
            <Serviceshort />
        </>
    );
}

export default Home;