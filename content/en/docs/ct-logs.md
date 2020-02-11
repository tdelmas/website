---
title: Certificate Transparency (CT) Logs
slug: ct-logs
top_graphic: 4
lastmod: 2020-02-05
aliases:
    - /ct-logs
---

{{< lastmod >}}

[Certificate Transparency (CT)](https://www.certificate-transparency.org/what-is-ct) is a system for logging and monitoring the issuance of TLS certificates. CT greatly enhances everyone's ability to monitor and study certificate issuance, and these capabilities have led to numerous improvements to the CA ecosystem and Web security. As a result, CT is rapidly becoming critical infrastructure.

Let's Encrypt submits all certificates we issue to CT logs. We also operate two annually sharded CT logs named [Oak](https://letsencrypt.org/2019/05/15/introducing-oak-ct-log.html) and Testflume. All publicly trusted certificate authorities are welcome to submit to our logs. {{< link "Contact us via email" "/contact">}} about adding new root certificates to our logs.

Join our [community forum](https://community.letsencrypt.org/c/ct-announcements/) to see major announcements about our CT logs.

## Funding

We'd like to thank the following partners for generously sponsoring the Let's Encrypt CT log. If your organization would like to help us continue this work, please consider {{< link "sponsoring or donating" "/become-a-sponsor">}}.

<p class="text-center"><a href="https://sectigo.com/"><img src="/images/sectigo_logo_color.svg" width="240" alt="Sectigo"></a></p>

## Architecture

Check out our blog to see [How Let's Encrypt Runs CT Logs](https://letsencrypt.org/2019/11/20/how-le-runs-ct-logs.html)!

## Log Monitoring

Let's Encrypt has created an open-source CT log monitoring tool called [CT Woodpecker](https://github.com/letsencrypt/ct-woodpecker). We use this tool to monitor the stability and compliance of our own logs, and we hope others will find it to be useful as well.

## CT Logs

### Production

- Oak is incorporated into the [Apple](https://support.apple.com/en-us/HT209255) and [Google](https://github.com/chromium/ct-policy/blob/master/ct_policy.md) CT programs.
- Our production ACME API environment submits certificates here.
    
{{< ct_logs "production" >}}

### Testing

- SCTs from these logs **SHOULD NOT** be incorporated into publicly trusted certificates.
- The Let's Encrypt production and {{< link "staging" "/docs/staging-environment" >}} ACME API environments both submit certificates to Testflume, but the production environment does not use the resulting SCTs.
- We test new versions of [Trillian](http://github.com/google/trillian) and [certificate-transparency-go](https://github.com/google/certificate-transparency-go) here before deploying them to production.
- Testflume's accepted roots list includes all of the Oak accepted roots, plus additional test roots.
- Testflume can be used by other certificate authorities for testing purposes.
    
{{< ct_logs "testing" >}}
