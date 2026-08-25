# Safe handling

- **Status:** mandatory controls
- **Owner:** `agent-portfolio`

1. Do not copy extracted source into issues, pull-request bodies, model prompts, datasets, downstream repositories, or public documentation.
2. Do not execute extracted code with credentials, network access, customer data, writable production resources, or privileged local files.
3. Treat the source map and extracted tree as potentially proprietary and untrusted until provenance, licensing, and security review are complete.
4. Use content hashes and paths in evidence instead of reproducing source text.
5. Keep security and legal review records separate from the source artifacts; decision receipts must not embed the underlying code.
6. If a secret, personal data, signing material, private endpoint, or access token is discovered, stop processing that artifact, restrict access, notify the responsible owner, and record only a redacted finding and exact blob identity.
7. Do not use the artifacts to train or evaluate a model without a separately approved data-governance and licensing decision.
8. Preserve rollback and deletion identities before any redaction or history-rewrite decision.

Static hashing, path inventory, and metadata inspection are permitted. Reproduction of source content is not required for documentation validation.
