import React from "react";
import eye from "../../Images/eye.png";
import "./available.css";

function Available(props) {
  const allContent = props.dynamicContent;
  const showLinkedin = allContent.linkeninURL ? true : false;
  const showContact = allContent.contactEmail ? true : false;
  const showHey = allContent.title == "KARA" ? true : false;
  return (
    <div className="available_container" id="connect">
      <h1 className="available_heading">I’m available for</h1>

      {/* <div className="avl_banner"> */}
      <div className="marquee">
        <div className="avl_banner">
          <div className="content">
            <img src={eye} alt="" />
            <h1>speaking</h1>
            <img src={eye} alt="" />
            <h1>Advising</h1>
            <img src={eye} alt="" />
            <h1>Collabs</h1>
          

            <img src={eye} alt="" />
            <h1>speaking</h1>
            <img src={eye} alt="" />
            <h1>Advising</h1>
            <img src={eye} alt="" />
            <h1>Collabs</h1>
            

            <img src={eye} alt="" />
            <h1>speaking</h1>
            <img src={eye} alt="" />
            <h1>Advising</h1>
            <img src={eye} alt="" />
            <h1>Collabs</h1>
           
          </div>

          {/* </div> */}
        </div>
      </div>

    


      <div className="avl_desc">
        <p>
          {" "}
          You are viewing an ENS domain, which is a distributed and open naming
          system based on the Ethereum blockchain. This website is hosted with
          Pinata on the IPFS, or InterPlanetary File System, which is a
          peer-to-peer file sharing network. The limo domain extension is a
          privacy-preserving ENS gateway for resolving/accessing ENS
          records/domains & IPFS/internet 3.0 content. For a complete web3
          experience, we recommend viewing this site with a Metamask extension
          or Brave browser.{" "}
        </p>
      </div>

      <div className="aval_btn">
        <a href="https://www.si3.space/">
          <p>
            This site has been built by <a href="">Si3</a> in support of the decentralized and
            democratized web.
          </p>
        </a>
      </div>

      <div className="footer">
        {showLinkedin ? (
          <div className="footer_menu linken">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M15.7897 9.05273C17.1297 9.05273 18.4149 9.58507 19.3625 10.5326C20.31 11.4802 20.8424 12.7654 20.8424 14.1054V20.0003H17.4739V14.1054C17.4739 13.6588 17.2964 13.2304 16.9806 12.9145C16.6647 12.5987 16.2363 12.4212 15.7897 12.4212C15.343 12.4212 14.9146 12.5987 14.5987 12.9145C14.2829 13.2304 14.1054 13.6588 14.1054 14.1054V20.0003H10.7369V14.1054C10.7369 12.7654 11.2693 11.4802 12.2168 10.5326C13.1644 9.58507 14.4496 9.05273 15.7897 9.05273ZM4 9.89485H7.36847V20.0003H4V9.89485Z"
                stroke="#1C1B22"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.68424 7.36847C6.61441 7.36847 7.36847 6.61441 7.36847 5.68424C7.36847 4.75406 6.61441 4 5.68424 4C4.75406 4 4 4.75406 4 5.68424C4 6.61441 4.75406 7.36847 5.68424 7.36847Z"
                stroke="#1C1B22"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>{" "}
            <a href={allContent.linkeninURL}>linkedin</a>
          </div>
        ) : (
          ""
        )}
        {showHey ? (
          <div className="footer_menu hey">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M19.0102 7.58182C18.17 7.80927 17.4081 8.26229 16.8069 8.89181C16.1069 6.43184 14.5986 2.70854 13.1278 2.10022C12.9724 2.02775 12.8019 1.99371 12.6306 2.00096C12.4593 2.00821 12.2923 2.05654 12.1436 2.14188C11.2236 2.67771 10.6245 4.39936 11.1486 7.66182C9.12699 3.96103 8.42117 3.96686 8.09534 3.96103C7.93858 3.96317 7.78594 4.01152 7.65653 4.10001C7.52712 4.18851 7.4267 4.31322 7.36784 4.45852C7.14868 4.94518 6.70952 6.4635 7.77951 9.73097C6.49119 7.96682 6.09536 7.74182 5.64036 7.76432C5.49508 7.77286 5.35481 7.8205 5.23437 7.9022C5.11394 7.98391 5.01783 8.09664 4.9562 8.22848C4.57037 8.95597 4.61454 10.7851 5.81203 13.5118C5.40115 13.1499 4.88109 12.9358 4.33454 12.9034C4.18766 12.9138 4.0457 12.9606 3.92156 13.0398C3.79741 13.119 3.69503 13.2279 3.62372 13.3568C3.13706 14.2509 4.15871 16.7592 5.4212 18.46C6.44369 19.8559 8.49117 22 11.4645 22C11.8808 21.9994 12.2962 21.9601 12.7053 21.8825C12.8472 21.8549 12.9723 21.772 13.0531 21.6521C13.1339 21.5323 13.1637 21.3852 13.1361 21.2433C13.1085 21.1015 13.0256 20.9763 12.9058 20.8956C12.7859 20.8148 12.6388 20.7849 12.497 20.8125C10.0261 21.2942 8.16367 19.9359 7.03618 18.7167C5.35203 16.8917 4.61287 14.7001 4.57037 14.0318C4.9237 14.1759 5.94036 14.7751 7.91867 17.3101C8.00232 17.4271 8.12904 17.5061 8.27094 17.5297C8.41284 17.5533 8.5583 17.5195 8.67533 17.4359C8.79236 17.3522 8.87136 17.2255 8.89495 17.0836C8.91855 16.9417 8.88481 16.7962 8.80116 16.6792C6.02036 12.4576 5.74786 9.90263 5.83869 9.04097C6.65702 9.8743 8.6995 12.9334 10.2386 15.2451C10.3145 15.3636 10.434 15.4475 10.5713 15.4785C10.7085 15.5096 10.8525 15.4853 10.972 15.4109C11.0944 15.3404 11.1839 15.2243 11.2211 15.088C11.2582 14.9517 11.24 14.8063 11.1703 14.6834C7.962 8.80014 8.07367 6.12684 8.26033 5.22851C8.74116 5.71518 10.0186 7.41016 12.7103 13.2501C12.7678 13.3784 12.8734 13.4789 13.0044 13.5299C13.1354 13.5808 13.2812 13.5782 13.4103 13.5226C13.5418 13.4712 13.6476 13.3699 13.7047 13.2408C13.7618 13.1117 13.7656 12.9653 13.7153 12.8334C11.1053 5.74684 12.2386 3.34604 12.672 3.07354C13.2336 3.07354 14.8111 5.77934 15.7953 9.32514C15.8536 9.5443 15.9128 9.75847 15.9661 9.9668C15.828 10.2094 15.7203 10.468 15.6453 10.7368C15.1119 12.6993 14.5761 17.1534 15.6078 18.3784C15.7104 18.5069 15.8433 18.6079 15.9945 18.6725C16.1457 18.737 16.3106 18.7631 16.4744 18.7484C16.6816 18.7258 16.8812 18.6575 17.0587 18.5485C17.2363 18.4394 17.3874 18.2922 17.5011 18.1175C18.4594 16.7217 17.8969 13.2184 17.1319 10.1535C17.6531 9.41717 18.4064 8.87721 19.271 8.62014C19.4558 8.56182 19.653 8.55481 19.8415 8.59988C20.0299 8.64494 20.2026 8.74037 20.341 8.87598C20.7794 9.36764 21.5452 11.2076 19.2244 17.695C19.1853 17.8287 19.1989 17.9722 19.2624 18.0962C19.3258 18.2201 19.4343 18.3151 19.5656 18.3616C19.6968 18.408 19.8409 18.4025 19.9682 18.3462C20.0955 18.2898 20.1964 18.1868 20.2502 18.0584C22.1002 12.8868 22.3902 9.55513 21.1535 8.15348C20.8846 7.86857 20.5416 7.6643 20.163 7.56361C19.7843 7.46292 19.3851 7.4698 19.0102 7.58349V7.58182ZM16.6036 17.5134C16.5636 17.5852 16.4991 17.6402 16.4219 17.6684C16.0219 17.1926 16.0219 14.3742 16.4594 12.0626C17.2886 16.0584 16.8069 17.2301 16.6036 17.5134Z"
                fill="#1C1B22"
              />
            </svg>
            <a href="https://www.linkedin.com/in/decentralizing/">hey</a>
          </div>
        ) : (
          ""
        )}
        {showContact ? (
          <div className="footer_menu live">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M3 6.6001L9.2217 10.1254C11.5154 11.425 12.4845 11.425 14.7783 10.1254L21 6.6001"
                stroke="#1C1B22"
                stroke-width="1.35"
                stroke-linejoin="round"
              />
              <path
                d="M3.01419 13.3281C3.07303 16.0871 3.10245 17.4666 4.12046 18.4885C5.13847 19.5104 6.55529 19.5459 9.38893 19.6171C11.1353 19.661 12.8646 19.661 14.611 19.6171C17.4447 19.5459 18.8615 19.5104 19.8795 18.4885C20.8975 17.4666 20.927 16.0871 20.9857 13.3281C21.0047 12.441 21.0047 11.5592 20.9857 10.672C20.927 7.91306 20.8975 6.53357 19.8795 5.51169C18.8615 4.48981 17.4447 4.45421 14.611 4.38301C12.8646 4.33913 11.1353 4.33913 9.38892 4.383C6.55529 4.45419 5.13847 4.48979 4.12045 5.51168C3.10244 6.53356 3.07303 7.91305 3.01418 10.672C2.99527 11.5592 2.99528 12.441 3.01419 13.3281Z"
                stroke="#1C1B22"
                stroke-width="1.35"
                stroke-linejoin="round"
              />
            </svg>{" "}
            {/* <a href="https://www.linkedin.com/in/decentralizing/">
              kara@si-her.live
            </a> */}
            <a href={"mailto:" + allContent.contactEmail}>
              {allContent.contactEmail}
            </a>

          </div>
        ) : (
          ""
        )}

        <div className="newsletter">
          <h1>Subscribe to Newsletter</h1>
          <div className="email_box">
            <input type="text" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Available;
