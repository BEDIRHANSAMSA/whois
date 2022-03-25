declare module '@bedirhansamsa/whois' {
  /**
   * Get whois information for a domain
   * @param {string} domain - Domain name to query
   * @returns {Promise<string>} Returns the whois data
   * @throws {Error} if domain is invalid
   */
  export function whois(domain: string): Promise<WhoisResult>;

  export type WhoisResult = {
    available: boolean;
    data: string;
  };
}
