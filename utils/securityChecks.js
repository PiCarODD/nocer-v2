module.exports = {
    headerChecks: [
      'Content-Security-Policy',
      'X-Content-Type-Options',
      'X-Frame-Options',
      'Strict-Transport-Security',
      'X-XSS-Protection',
      'Referrer-Policy',
      'Permissions-Policy'
    ],
    sslChecks: [
      'valid_certificate',
      'strong_ciphers',
      'hsts_enabled'
    ],
    serverChecks: [
      'server_header',
      'powered_by_header'
    ],
    vulnerabilityChecks: [
      'xss_protection',
      'clickjacking_protection'
    ]
  };