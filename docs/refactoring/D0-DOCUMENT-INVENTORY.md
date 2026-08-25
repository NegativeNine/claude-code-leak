# D0 documentation inventory — claude-code-leak

- **Status:** complete for the pinned `main` documentation baseline
- **Owner:** `agent-portfolio`
- **Documentation profile:** `SECURITY_RESEARCH`
- **Work-order disposition:** `KEEP_AS_BOUNDED_RESEARCH_OR_ARCHIVE`
- **Baseline:** `d50b3579a35697ea42f66faa39cf626659e340db`
- **Plan archive SHA-256:** `c6ea88a5a4dd53f997ec9425299cab8c70a0347fffb402ba98bfad9ed0612cb5`
- **Last validated:** 2026-08-25 UTC

> This inventory does not authenticate the source, grant a redistribution license, authorize extraction or publication, qualify code, approve product use, or move `CurrentAuthority`.

## Exact document inventory

Repository-scoped searches for Markdown, RST, AsciiDoc, and a license document found one prose document:

| Path | Git blob | Bytes | Provisional class | Current role |
|---|---|---:|---|---|
| `README.md` | `8da048e8f8cc54b6453c315f7e46a88647613d45` | 1,386 | `OPERATIONAL` | Generic source-map extraction procedure |

No RST, AsciiDoc, or repository license document was found.

## Safety-relevant repository artifacts

- `cli.js.map` — blob `75e771fc04b253bda8dc1c865d54d76d11d5a4d0`, 59,766,257 bytes;
- `extract.js` — blob `b5e8df18d692992de0f8104c2f9f7fee82c849d9`, 703 bytes;
- `src/` — tree `7640f58ea271eb60952ebdbe0dfa173fc96ebe30`.

Their upstream package, version, acquisition time, authorization, completeness, license, redistribution basis, and retention decision are not established by the README.

## Conflict and source-of-truth separation

The repository name implies a specific source origin, while the only document describes a generic extraction method and does not bind an upstream artifact. No vendor provenance claim is accepted.

There is no canonical research scope, provenance record, license record, handling policy, status, or archive decision. The existing README is retained as historical/operational research input rather than elevated to an authenticated source manifest.

## Stage decision

D1 may add bounded research, provenance, handling, security, status, and archive-decision documentation without reproducing extracted source. D2 remains blocked on exact upstream provenance, authorization, licensing, redistribution, retention, redaction, publication, and security/legal review.

## Rollback

Close or revert the documentation branch. Do not copy extracted source into evidence, comments, or downstream repositories. The exact rollback identity is `main@d50b3579a35697ea42f66faa39cf626659e340db`.
