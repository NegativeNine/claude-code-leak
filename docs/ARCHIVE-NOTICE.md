# Archive decision gate

- **State:** not decided
- **Required decision:** repository owner with security/legal review
- **Rollback identity:** `main@d50b3579a35697ea42f66faa39cf626659e340db`

This repository may be retained only as bounded research with an accepted provenance and licensing basis, or archived/redacted/deleted through a reviewed decision. It is not an R7 dependency, product source repository, vendor release, model corpus, or reusable implementation.

## Before retaining or archiving

1. bind exact upstream package, version, source-map artifact, digest, and acquisition evidence;
2. establish authorization, licensing, redistribution, and retention basis;
3. complete a redacted security/privacy scan of Git history and current files;
4. identify forks, releases, caches, and external copies to the extent available;
5. select and record one decision state from `docs/SECURITY.md`;
6. preserve content-addressed provenance and rollback/deletion receipts;
7. confirm that no downstream R7 repository or dataset consumes the extracted source.

## Archive non-claims

Archival does not authenticate the source, grant a license, establish vendor ownership, remove forks or caches, satisfy a disclosure obligation, or authorize reuse.
