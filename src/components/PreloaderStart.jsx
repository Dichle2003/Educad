function PreloaderStart() {
    return (
        <div id="preloader">
            <div id="ctn-preloader" className="ctn-preloader">
                <div className="icon">
                  <img src="assets/img/logo/loader.png" alt="" className="m-auto d-block" width="60" />
                </div>
                <div className="txt-loading">
                        <span data-text-preloader="E" className="letters-loading">
                            E
                        </span>
                    <span data-text-preloader="d" className="letters-loading">
                            d
                        </span>
                    <span data-text-preloader="u" className="letters-loading">
                            u
                        </span>
                    <span data-text-preloader="c" className="letters-loading">
                            c
                        </span>
                    <span data-text-preloader="a" className="letters-loading">
                            a
                        </span>
                    <span data-text-preloader="d" className="letters-loading">
                            d
                        </span>
                </div>
            </div>
        </div>
    )
}
export default PreloaderStart;