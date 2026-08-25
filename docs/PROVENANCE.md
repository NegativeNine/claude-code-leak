# Provenance requirements

- **Status:** unresolved
- **Owner:** `agent-portfolio`
- **Independent review:** security and legal/repository owner

## Known Git identities

| Artifact | Git identity |
|---|---|
| Repository baseline | `d50b3579a35697ea42f66faa39cf626659e340db` |
| Root README | blob `8da048e8f8cc54b6453c315f7e46a88647613d45` |
| Source map | blob `75e771fc04b253bda8dc1c865d54d76d11d5a4d0` |
| Extraction utility | blob `b5e8df18d692992de0f8104c2f9f7fee82c849d9` |
| Extracted source tree | tree `7640f58ea271eb60952ebdbe0dfa173fc96ebe30` |

These identities establish repository content, not upstream origin or redistribution rights.

## Missing provenance

Before any keep or archive decision represents the content as attributable source, record:

```text
upstream package and publisher
exact package version
package or CDN artifact digest
source-map path and digest
acquisition timestamp and actor
acquisition authorization
original publication status
license and redistribution terms
extraction tool and version
extraction configuration digest
output-tree digest and completeness limits
security/disclosure owner
retention and redaction decision
```

## Fail-closed rule

Unknown provenance is recorded as `UNKNOWN`; it is not filled from the repository name, path names, code comments, model inference, or similarity to public code.

## History treatment

Preserve the pinned Git identity and any later correction receipts. If content must be removed, record exact removed blobs/trees and the human decision without copying the content into the receipt.
