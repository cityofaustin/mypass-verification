import { Resolver } from "did-resolver";
import { getResolver } from "ethr-did-resolver";

class DidResolverUtil {
  static async getInfoByDocumentDid(did) {
    const awsResponse = await fetch(
      `https://cors-elsewhere.herokuapp.com/https://mypass-notarized-vpjwt.s3.us-east-2.amazonaws.com/did%3Aethr%3A${
        did.split(":")[2]
      }.json`
    );

    if (awsResponse.status !== 403) {
      return this.getInfoFromAws(did, awsResponse);
    }

    const UNIRESOLVER_API =
      "https://cors-elsewhere.herokuapp.com/https://uniresolver.io/1.0/identifiers/";
    const universalResolverResponse = await fetch(UNIRESOLVER_API + did);

    if (universalResolverResponse) {
      return this.getInfoFromUniresolver(did, universalResolverResponse);
    }
  }

  static async getInfoFromUniresolver(did, response) {
    const jsonResponse = await response.json();
    const { didDocument } = { ...jsonResponse };

    const vpJwt =
      didDocument.service &&
      didDocument.service.length > 0 &&
      didDocument.service[0].serviceEndpoint
        ? didDocument.service[0].serviceEndpoint
        : "";
    const ownerPublicKey =
      didDocument.publicKey &&
      didDocument.publicKey.length > 0 &&
      didDocument.publicKey[0].id
        ? didDocument.publicKey[0].id
        : "";

    const timestamp = -1;
    return { vpJwt, ownerPublicKey, timestamp };
  }

  static async getInfoFromAws(did, response) {
    const jsonResponse = await response.json();

    const vpJwt = jsonResponse.vpJwt;
    const timestamp = jsonResponse.timestamp;
    const ownerPublicKey = did;
    return { vpJwt, ownerPublicKey, timestamp };
  }

  static getResolver() {
    const providerConfig = {
      name: "mainnet",
      registry: "0xdca7ef03e98e0dc2b855be647c39abe984fcf21b",
      rpcUrl: "https://mainnet.infura.io/v3/f89f8f95ce6c4199849037177b155d08",
    };

    return new Resolver(getResolver(providerConfig));
  }
}

export default DidResolverUtil;
