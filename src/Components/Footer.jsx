import React from 'react'

const Footer = (props) => {
  return (
    <>
        <footer>
            <div className="footer">
                {/* Internal pages section */}
                <section className="internal-pages">
                    <h3>Internal pages 1</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </section>

                {/* More internal pages section */}
                <section className="internal-pages">
                    <h3>Internal pages 2</h3>
                    <ul>
                        <li><a href="#">Service 1</a></li>
                        <li><a href="#">Service 2</a></li>
                        <li><a href="#">Service 3</a></li>
                        <li><a href="#">Service 4</a></li>
                    </ul>
                </section>

                {/* About Us section */}
                <section className="about-us-footer">
                    <p>{props.info}</p>
                </section>
            </div>
        </footer>
    </>
  )
}

export default Footer;