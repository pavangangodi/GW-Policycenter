# PolicyCenter Workbench

A self-contained training web application inspired by the PolicyCenter workflows in the provided documentation.

## What is included

- Login with demo roles
- Desktop queues for activities, submissions, renewals, and underwriting referrals
- Account search, account creation, account file summary, contacts, locations, transactions, submissions, documents, notes, billing, and history
- Policy search and policy file tools for summary, policy info, coverages, billing, contacts, participants, notes, documents, transactions, risk analysis, and forms
- Submission wizard covering product selection, pre-qualification, policy info, line details, risk analysis, quote generation, quote versions, bind, issue, decline, withdraw, and not taken
- QuickJump-style navigation for `Account A-10091`, `Policy BOP-458901`, `Desktop`, `Search`, `Team`, and `Admin`
- Local demo persistence using browser local storage

## Run

Open `index.html` in a browser, or run a local server from this folder:

```powershell
python -m http.server 4173
```

Then open:

```text
http://localhost:4173
```

For quick UI review without the login step:

```text
http://localhost:4173/?demo=1
```

This is a training/demo app only and is not an official Guidewire product.
