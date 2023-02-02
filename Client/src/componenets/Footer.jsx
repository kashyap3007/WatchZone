import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <footer className="text-center text-lg-start bg-dark text-muted text-light">
                <section className="d-flex justify-content-center justify-content-lg-between p-3 border-bottom">
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div>
                        <Link to="" className="me-4 text-reset">
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link to="" className="me-4 text-reset">
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link to="" className="me-4 text-reset">
                            <i className="fab fa-google"></i>
                        </Link>
                        <Link to="" className="me-4 text-reset">
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link to="" className="me-4 text-reset">
                            <i className="fab fa-linkedin"></i>
                        </Link>
                        <Link to="" className="me-4 text-reset">
                            <i className="fab fa-github"></i>
                        </Link>
                    </div>
                </section>

                <section className="">
                    <div className="container text-center text-md-start mt-2">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-3">
                                <h6 className="text-uppercase fw-bold mb-3">
                                    <i className="fas fa-gem me-3"></i>Planet Cast
                                </h6>
                                <p>
                                Planetcast unfolds a new paradigm in OTT services. The content delivery business has been completely transformed with this latest metamorphosis in the entertainment industry.  We at Planetcast understand this shift and offer state of the art OTT Cloud-Based Solutions.
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-3">
                                <h6 className="text-uppercase fw-bold mb-3">
                                    Genre
                                </h6>
                                <p>
                                    <Link to="#!" className="text-reset">Action</Link>
                                </p>
                                <p>
                                    <Link to="#!" className="text-reset">Sports</Link>
                                </p>
                                <p>
                                    <Link to="#!" className="text-reset">Romance</Link>
                                </p>
                                <p>
                                    <Link to="#!" className="text-reset">Thriller</Link>
                                </p>
                            </div>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-3">
                                <h6 className="text-uppercase fw-bold mb-3">
                                    Get connect
                                </h6>
                                <p>
                                    <Link to="#!" className="text-reset">Facebook</Link>
                                </p>
                                <p>
                                    <Link to="#!" className="text-reset">Instagram</Link>
                                </p>
                                <p>
                                    <Link to="#!" className="text-reset">Twitter</Link>
                                </p>
                                <p>
                                    <Link to="#!" className="text-reset">Snapchat</Link>
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-3">
                                <h6 className="text-uppercase fw-bold mb-3">Contact</h6>
                                <p><i className="fas fa-home me-3"></i> Gaya Bihar</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    info@example.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> + 91 3123123123</p>
                                <p><i className="fas fa-print me-3"></i> + 91 234 567 89</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="text-center p-2" style={{backgroundColor: "ba(0, 0, 0, 0.05)"}}>
                    © 2021 Copyright:
                    <Link className="text-reset fw-bold" to="https://mdbootstrap.com/">My Project</Link>
                </div>
            </footer>
        </>
    )
}

export default Footer;