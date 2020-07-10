import React, { Fragment, Component } from "react";
import { ReactComponent as InputSvg } from "../../img/input.svg";
import { ReactComponent as OutputSvg } from "../../img/output.svg";
import { ReactComponent as Output2Svg } from "../../img/output2.svg";
import { ReactComponent as LinkSvg } from "../../img/link.svg";
import { ReactComponent as CompareSvg } from "../../img/compare.svg";
import { ReactComponent as CapitolSvg } from "../../img/capitol.svg";
import { ReactComponent as DocCheckSvg } from "../../img/doc-check.svg";

class VerifyNotaryTechnical extends Component {
  render() {
    return (
      <div className="tab--content">
        <div className="tech-step">
          <div className="step-num">6</div>
          <div className="step-desc">
            An ENS lookup is performed with the Notary's DID and the ENS domain
            to obtain the name of the Notary signer.
          </div>
        </div>
        <div className="step-section">
          <div className="section-icon">
            <InputSvg />
          </div>
          <div className="section-container">
            <div className="section-title">input</div>
            <div className="section-desc">
              Notary's DID Address:
              <br />
              <a href="https://etherscan.io/address/0x2a6F1D5083fb19b9f2C653B598abCb5705eD0439">
                0x2a6F1D5083fb19b9f2C653B598abCb5705eD0439
              </a>
            </div>
          </div>
        </div>
        <div className="step-section">
          <div className="section-icon">
            <OutputSvg />
          </div>
          <div className="section-container">
            <div className="section-title">output</div>
            <div className="section-desc">Notary Name: Billy Case Worker</div>
          </div>
        </div>
        <div className="step-section">
          <div className="section-icon">
            <LinkSvg />
          </div>
          <div className="section-container">
            <div className="section-desc">
              Try it yourself:{" "}
              <a href="https://etherscan.io/enslookup">
                https://etherscan.io/enslookup
              </a>
            </div>
          </div>
        </div>
        <div className="tech-step">
          <div className="step-num">7</div>
          <div className="step-desc">
            The Notary's ID listed on the VC is entered on the Texas Social
            Security State page to obtain their PEM public key.
          </div>
        </div>
        <div className="step-section">
          <div className="section-icon">
            <InputSvg />
          </div>
          <div className="section-container">
            <div className="section-title">input</div>
            <div className="section-desc">Notary ID: 347892</div>
          </div>
        </div>
        <div className="step-section">
          <div className="section-icon">
            <OutputSvg />
          </div>
          <div className="section-container">
            <div className="section-title">output</div>
            <div className="section-desc">
              Notary's PEM Public Key:
              <br />
              did:ethr:0x2a6F1D5083fb19b9f2C653B598abCb5705eD0439
            </div>
          </div>
        </div>
        <div className="step-section">
          <div className="section-icon">
            <LinkSvg />
          </div>
          <div className="section-container">
            <div className="section-desc">
              Try it yourself:{" "}
              <a
                href="https://direct.sos.state.tx.us/notaries/notarysearch.asp"
                target="_blank"
              >
                https://direct.sos.state.tx.us/notaries/notarysearch.asp
              </a>
            </div>
          </div>
        </div>
        <div className="tech-step">
          <div className="step-num">8</div>
          <div className="step-desc">
            The Notary's ID listed on the VC is entered on the Texas Social
            Security State page to obtain their PEM public key.
          </div>
        </div>
        <div className="step-section">
          <div className="section-icon">
            <CapitolSvg />
          </div>
          <div className="section-container">
            <div className="section-title">original</div>
            <div className="section-desc">
              Name: Billy Case Worker
              <br />
              PEM Public Key listed on State of Texas:
              <br />
              <span style={{ color: "rgb(83, 170, 86)" }}>
                0x2a6F1D5083fb19b9f2C653B598abCb5705eD0439
              </span>
            </div>
          </div>
        </div>
        <div className="diagram-section-3" style={{ padding: "20px 0" }}>
          <CompareSvg />
        </div>
        <div className="step-section">
          <div className="section-icon">
            <DocCheckSvg />
          </div>
          <div className="section-container">
            <div className="section-title">verifiable image</div>
            <div className="section-desc">
            Name: Billy Case Worker
              <br />
              PEM Public key listed on the VC:
              <br />
              <span style={{ color: "rgb(83, 170, 86)" }}>
                0x2a6F1D5083fb19b9f2C653B598abCb5705eD0439
              </span>
            </div>
          </div>
        </div>
        <div
          className="last-step"
          style={{
            flexDirection: "column",
            paddingTop: "20px",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontWeight: 600,
              fontSize: "20px",
              textAlign: "center",
              paddingBottom: "20px",
            }}
          >
            Is this an officially licensed and registered notary in the state of
            Texas and do the names and public keys match?
          </div>
          <div
            style={{
              color: "#53aa56",
              fontWeight: 600,
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            Yes, we have a match!
          </div>
        </div>
      </div>
    );
  }
}

export default VerifyNotaryTechnical;