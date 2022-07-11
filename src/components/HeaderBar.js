import React from 'react'

function HeaderBar() {
    return (
        <header className="header">
            <div className="header-bar">
                {/* Nav Bar */}
                <nav className="navigation-bar">
                    <div className="nav-item">
                        <div className="nav-item__shop">
                            <h3>SHOP</h3>
                        </div>
                    </div>
                    <div className="nav-item">
                        <div className="nav-item__explore">
                            <h3>EXLPORE</h3>
                        </div>
                    </div>
                    <div className="nav-item">
                        <div className="nav-item__hairquiz">
                            <h3>HAIR QUIZ</h3>
                        </div>
                    </div>
                    <div className="nav-item">
                        <div className="nav-item__carryus">
                            <h3>CARRY US</h3>
                        </div>
                    </div>
                </nav>
                {/* Logo */}
                <a href="/" className="logo-link">
                    <img src="//cdn.shopify.com/s/files/1/0576/7888/9155/t/86/assets/logo.svg?v=120203782998942518971654045250" class="header-logo__image" alt="R+Co" />
                </a>
                {/* Icons */}
                <div className="header-icons">
                    <div className="header-icons__search icon">
                        <svg aria-hidden="true" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25px" height="27px" viewBox="0 0 25 27">
                            <g fill="#050709">
                                <path d="M24.632,24.749l-6.266-6.267c1.91-1.909,3.093-4.546,3.093-7.454c0-5.815-4.73-10.545-10.545-10.545c-5.814,0-10.545,4.73-10.545,10.545c0,5.814,4.73,10.545,10.545,10.545c2.002,0,3.869-0.571,5.465-1.543l6.486,6.487L24.632,24.749z M2.868,11.029c0-4.436,3.609-8.045,8.045-8.045s8.045,3.609,8.045,8.045c0,4.436-3.609,8.045-8.045,8.045S2.868,15.464,2.868,11.029z"></path>
                            </g>
                        </svg>
                    </div>
                    <div className="header-icons__account icon">
                        <svg aria-hidden="true" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24px" height="26px" viewBox="0 0 24 26">
                            <g fill="#050709">
                                <path d="M18.197,15.295H5.789c-3.133,0.038-5.62,2.521-5.661,5.672v4.791h2.5v-4.774c0.023-1.767,1.425-3.167,3.176-3.188h12.378c1.766,0.021,3.167,1.422,3.19,3.172v4.791h2.5V20.95C23.831,17.816,21.344,15.333,18.197,15.295z"></path>
                                <path d="M12,13.364c3.618,0,6.562-2.943,6.562-6.561S15.618,0.242,12,0.242c-3.618,0-6.561,2.943-6.561,6.561S8.382,13.364,12,13.364z M12,2.742c2.239,0,4.062,1.822,4.062,4.061c0,2.239-1.822,4.061-4.062,4.061S7.938,9.042,7.938,6.803C7.938,4.564,9.76,2.742,12,2.742z"></path>
                            </g>
                        </svg>
                    </div>
                    <div className="header-icons__bag icon">
                        <svg aria-hidden="true" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28px" height="30px" viewBox="0 0 28 30">
                            <g fill="#050709">
                                <path d="M19.929,5.909c-0.072-3.117-2.619-5.64-5.777-5.562c-3.066,0.046-5.531,2.521-5.602,5.562H0.357v19.84l0.007,0.137c0.22,1.996,1.767,3.542,3.763,3.761l20.497,0.008c1.778,0,3.02-1.606,3.02-3.906V5.909H19.929z M14.189,2.847c1.729-0.056,3.112,1.299,3.224,3.062h-6.355C11.129,4.231,12.49,2.873,14.189,2.847z M25.143,25.748c0,0.779-0.284,1.406-0.52,1.406H4.34c-0.774-0.11-1.373-0.709-1.483-1.482V8.409h22.286V25.748z"></path>
                            </g>
                        </svg>
                        <span id="count">0</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderBar

