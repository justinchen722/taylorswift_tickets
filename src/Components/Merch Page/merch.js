import "./merch.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

/*Merch Page */
function Merch() {
    const socialstyle = {
        display: "absolute",
        color: "black",
        fontSize: "4vw",
        marginLeft: "4vw"
      };

  return (
    <section className="body">
      <section className="wrapper">
        <h1 className="titlem">Merch</h1>
        <FaFacebook style={socialstyle}></FaFacebook>
        <FaInstagram style={socialstyle}></FaInstagram>
        <FaTwitter style={socialstyle}></FaTwitter>
        <img className='cat' src="/icegif-80.gif"></img>
        <div className="all-items">
            <div className="item">
                <img src="/tshirt1.webp" alt="T-Shirt 1"/>
                <div className="hidden">
                    <p>Available in: S, M, L, XL</p>
                    <b>$400 USD</b><br />
                    <button className="buy-button">Buy Now</button>
                </div>
            </div>
            <div className="item">
                <img src="/tshirt2.webp" alt="T-Shirt 2"/>
                <div className="hidden">
                    <p>Available in: S, M, L, XL</p>
                    <b>$400 USD</b><br />
                    <button className="buy-button">Buy Now</button>
                </div>
            </div>
            <div className="item">
                <img src="/tshirt3.jpeg" alt="T-Shirt 3"/>
                <div className="hidden">
                    <p>Available in: S, M, L, XL</p>
                    <b>$400 USD</b><br />
                    <button className="buy-button">Buy Now</button>
                </div>
            </div>
            <div className="item">
                <img src="/tshirt4.jpeg" alt="T-Shirt 4"/>
                <div className="hidden">
                    <p>Available in: S, M, L, XL</p>
                    <b>$400 USD</b><br />
                    <button className="buy-button">Buy Now</button>
                </div>
            </div>
            <div className="item">
                <img src="/tshirt5.jpeg" alt="T-Shirt 5"/>
                <div className="hidden">
                    <p>Available in: S, M, L, XL</p>
                    <b>$400 USD</b><br />
                    <button className="buy-button">Buy Now</button>
                </div>
            </div>
            <div className="item">
                <img src="/tshirt6.jpeg" alt="T-Shirt 6"/>
                <div className="hidden">
                    <p>Available in: S, M, L, XL</p>
                    <b>$400 USD</b><br />
                    <button className="buy-button">Buy Now</button>
                </div>
            </div>
            <div className="item">
                <img src="/tshirt7.jpeg" alt="T-Shirt 7"/>
                <div className="hidden">
                    <p>Available in: S, M, L, XL</p>
                    <b>$400 USD</b><br />
                    <button className="buy-button">Buy Now</button>
                </div>
            </div>
            <div className="item">
                <img src="/tshirt8.jpeg" alt="T-Shirt 8"/>
                <div className="hidden">
                    <p>Available in: S, M, L, XL</p>
                    <b>$400 USD</b><br />
                    <button className="buy-button">Buy Now</button>
                </div>
            </div>
            <div className="item">
                <img src="/tshirt8.jpeg" alt="T-Shirt 9"/>
                <div className="hidden">
                    <p>Available in: S, M, L, XL</p>
                    <b>$400 USD</b><br />
                    <button className="buy-button">Buy Now</button>
                </div>
            </div>
            <div className="item">
                <img src="/tshirt8.jpeg" alt="T-Shirt 10"/>
                <div className="hidden">
                    <p>Available in: S, M, L, XL</p>
                    <b>$400 USD</b><br />
                    <button className="buy-button">Buy Now</button>
                </div>
            </div>
        </div>
      </section>
    </section>
  );
}

export default Merch;
