# Security and legal review gate

- **Status:** open
- **Owner:** `agent-portfolio`
- **Required reviewers:** security reviewer and repository/legal owner

## Required review

- scan repository history for credentials, personal data, private endpoints, signing material, and confidential metadata without publishing matched values;
- identify the exact upstream artifact and whether it was intentionally public;
- determine license, copyright, trade-secret, contract, disclosure, and retention obligations;
- decide whether the repository remains private, is redacted, is archived, or is deleted;
- determine whether forks, releases, caches, Actions artifacts, or external copies require follow-up;
- document incident or disclosure coordination without asserting acceptance by a third party.

## Decision states

- `KEEP_BOUNDED_PRIVATE_RESEARCH`
- `REDACT_AND_ARCHIVE`
- `ARCHIVE_AS_IS_WITH_ACCEPTED_BASIS`
- `DELETE_WITH_PROVENANCE_RECEIPT`
- `DEFER_PENDING_OWNER`

No state is selected by this documentation branch.

## Non-claims

The absence of a repository license does not prove infringement, permission, or public-domain status. A repository archive does not grant redistribution rights or remove external copies. A source similarity assessment does not establish provenance.
