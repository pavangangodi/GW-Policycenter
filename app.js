const STORE_KEY = "policycenter-workbench-v1";

const products = [
  { lob: "Personal Auto", base: 1180, type: "Personal", detail: "Drivers, vehicles, garage location, coverages" },
  { lob: "Businessowners", base: 6400, type: "Commercial", detail: "Business profile, premises, liability, property" },
  { lob: "Commercial Property", base: 9800, type: "Commercial", detail: "Buildings, locations, deductibles, limits" },
  { lob: "Workers Compensation", base: 7200, type: "Commercial", detail: "Class codes, payroll, locations, audit plan" },
  { lob: "General Liability", base: 5200, type: "Commercial", detail: "Operations, exposure, limits, endorsements" },
  { lob: "Commercial Auto", base: 7600, type: "Commercial", detail: "Fleet, drivers, filings, vehicle schedules" }
];

const wizardSteps = [
  ["product", "Product", "Producer, product, quote type"],
  ["qualification", "Qualification", "Pre-qualification questions"],
  ["policy", "Policy Info", "Named insured and term"],
  ["details", "Line Details", "Exposure and coverage data"],
  ["risk", "Risk Analysis", "UW issues and referrals"],
  ["quote", "Quote", "Premium versions"],
  ["bind", "Bind / Issue", "Finalize transaction"]
];

const defaultState = {
  user: null,
  activeTab: "desktop",
  selectedAccountId: "A-10091",
  selectedPolicyId: "BOP-458901",
  selectedSubmissionId: "S-88201",
  selectedDriverId: "D-2201",
  accountSection: "summary",
  policySection: "summary",
  wizardStep: "product",
  searchText: "",
  newAccountOpen: false,
  documentScope: "account",
  sidebarCollapsed: false,
  activeModal: null,
  sortScope: "",
  sortKey: "",
  sortDir: "asc",
  tablePages: {},
  accounts: [
    {
      id: "A-10091",
      name: "Metro Builders LLC",
      type: "Company",
      status: "Active",
      tier: "Gold",
      address: "240 Market Street, San Jose, CA 95113",
      email: "risk@metrobuilders.example",
      phone: "(408) 555-0184",
      officialId: "FEIN 94-3012488",
      producer: "Keystone Agency",
      producerCode: "KST-1048",
      primaryContact: "Ava Shah",
      created: "2025-11-14",
      settlementCurrency: "USD",
      coverageCurrency: "USD"
    },
    {
      id: "A-10132",
      name: "Evelyn Carter",
      type: "Person",
      status: "Pending",
      tier: "Silver",
      address: "18 North Lake Road, Madison, WI 53703",
      email: "evelyn.carter@example.com",
      phone: "(608) 555-0141",
      officialId: "DL WI-C548129",
      producer: "Northstar Producers",
      producerCode: "NSP-2201",
      primaryContact: "Evelyn Carter",
      created: "2026-04-22",
      settlementCurrency: "USD",
      coverageCurrency: "USD"
    },
    {
      id: "A-10044",
      name: "Harbor Coffee Roasters",
      type: "Company",
      status: "Active",
      tier: "Platinum",
      address: "920 Harbor Ave, Seattle, WA 98109",
      email: "insurance@harborcoffee.example",
      phone: "(206) 555-0119",
      officialId: "FEIN 91-4410028",
      producer: "Summit Retail Insurance",
      producerCode: "SRI-5530",
      primaryContact: "Noah Kim",
      created: "2024-08-01",
      settlementCurrency: "USD",
      coverageCurrency: "USD"
    }
  ],
  contacts: [
    { id: "C-9001", accountId: "A-10091", name: "Ava Shah", role: "Primary Named Insured", phone: "(408) 555-0184", email: "ava.shah@metrobuilders.example" },
    { id: "C-9002", accountId: "A-10091", name: "Liam Ortiz", role: "Billing Contact", phone: "(408) 555-0138", email: "liam.ortiz@metrobuilders.example" },
    { id: "C-9003", accountId: "A-10132", name: "Evelyn Carter", role: "Primary Named Insured", phone: "(608) 555-0141", email: "evelyn.carter@example.com" },
    { id: "C-9004", accountId: "A-10044", name: "Noah Kim", role: "Account Contact", phone: "(206) 555-0119", email: "noah.kim@harborcoffee.example" }
  ],
  locations: [
    { id: "L-7001", accountId: "A-10091", type: "Primary", address: "240 Market Street, San Jose, CA 95113", use: "Office and storage" },
    { id: "L-7002", accountId: "A-10091", type: "Job Site", address: "880 Mission Road, Fremont, CA 94539", use: "Construction site" },
    { id: "L-7003", accountId: "A-10044", type: "Retail", address: "920 Harbor Ave, Seattle, WA 98109", use: "Roastery and cafe" }
  ],
  drivers: [
    {
      id: "D-2201",
      accountId: "A-10132",
      policyNumber: "PA-778204",
      name: "Evelyn Carter",
      dob: "1988-03-12",
      gender: "Female",
      maritalStatus: "Single",
      phone: "(608) 555-0141",
      email: "evelyn.carter@example.com",
      address: "18 North Lake Road, Madison, WI 53703",
      licenseNumber: "WI-C548129",
      licenseState: "WI",
      licenseStatus: "Valid",
      licensedDate: "2006-06-04",
      expirationDate: "2029-03-12",
      relationship: "Named Insured",
      assignment: "2019 Subaru Outback",
      riskScore: 18,
      verification: "Pending MVR",
      underwritingStatus: "Referral"
    },
    {
      id: "D-2202",
      accountId: "A-10091",
      policyNumber: "S-88201",
      name: "Liam Ortiz",
      dob: "1979-10-02",
      gender: "Male",
      maritalStatus: "Married",
      phone: "(408) 555-0138",
      email: "liam.ortiz@metrobuilders.example",
      address: "240 Market Street, San Jose, CA 95113",
      licenseNumber: "CA-O9284412",
      licenseState: "CA",
      licenseStatus: "Valid",
      licensedDate: "1997-11-18",
      expirationDate: "2028-10-02",
      relationship: "Employee Driver",
      assignment: "2022 Ford F-150",
      riskScore: 42,
      verification: "Verified",
      underwritingStatus: "Approved"
    }
  ],
  driverViolations: [
    { id: "V-7001", driverId: "D-2201", date: "2024-08-18", type: "Speeding", points: 2, status: "Reviewed" },
    { id: "V-7002", driverId: "D-2201", date: "2023-04-02", type: "At-fault accident", points: 4, status: "Open" },
    { id: "V-7003", driverId: "D-2202", date: "2022-11-21", type: "Minor moving violation", points: 1, status: "Closed" }
  ],
  policies: [
    {
      number: "BOP-458901",
      accountId: "A-10091",
      lob: "Businessowners",
      status: "In Force",
      effective: "2026-01-01",
      expiration: "2027-01-01",
      premium: 14820,
      producer: "Keystone Agency",
      underwriter: "Nina Patel",
      uwCompany: "Pinnacle Mutual",
      paymentPlan: "Quarterly",
      coverages: [
        ["Business Personal Property", "$450,000"],
        ["General Liability Aggregate", "$2,000,000"],
        ["Hired and Non-owned Auto", "$1,000,000"]
      ]
    },
    {
      number: "PA-778204",
      accountId: "A-10132",
      lob: "Personal Auto",
      status: "Draft",
      effective: "2026-06-15",
      expiration: "2027-06-15",
      premium: 0,
      producer: "Northstar Producers",
      underwriter: "Owen Brooks",
      uwCompany: "Cascade Casualty",
      paymentPlan: "Monthly",
      coverages: [
        ["Bodily Injury", "$250,000 / $500,000"],
        ["Property Damage", "$100,000"],
        ["Comprehensive Deductible", "$500"]
      ]
    },
    {
      number: "CP-330118",
      accountId: "A-10044",
      lob: "Commercial Property",
      status: "In Force",
      effective: "2025-09-01",
      expiration: "2026-09-01",
      premium: 31740,
      producer: "Summit Retail Insurance",
      underwriter: "Maya Ellis",
      uwCompany: "Evergreen Commercial",
      paymentPlan: "Annual",
      coverages: [
        ["Building", "$1,800,000"],
        ["Business Income", "$600,000"],
        ["Equipment Breakdown", "$250,000"]
      ]
    }
  ],
  submissions: [
    {
      id: "S-88201",
      accountId: "A-10091",
      lob: "Commercial Property",
      quoteType: "Full Application",
      status: "Quoted",
      effective: "2026-06-01",
      expiration: "2027-06-01",
      producer: "Keystone Agency",
      producerCode: "KST-1048",
      uwCompany: "Pinnacle Mutual",
      stage: "Quote",
      premium: 38120,
      revenue: 4200000,
      payroll: 1150000,
      locations: 2,
      vehicles: 0,
      losses: 1,
      versions: [
        { name: "Standard deductibles", premium: 38120, status: "Quoted" },
        { name: "Higher deductible option", premium: 35260, status: "Quoted" }
      ],
      qualifications: { eligible: "Yes", priorLosses: "No", hazardous: "No" }
    },
    {
      id: "S-88232",
      accountId: "A-10132",
      lob: "Personal Auto",
      quoteType: "Quick Quote",
      status: "Draft",
      effective: "2026-06-15",
      expiration: "2027-06-15",
      producer: "Northstar Producers",
      producerCode: "NSP-2201",
      uwCompany: "Cascade Casualty",
      stage: "Qualification",
      premium: 0,
      revenue: 0,
      payroll: 0,
      locations: 1,
      vehicles: 2,
      losses: 0,
      versions: [],
      qualifications: { eligible: "Yes", priorLosses: "No", hazardous: "No" }
    }
  ],
  activities: [
    { id: "ACT-4101", subject: "Review high property limit referral", accountId: "A-10091", policyNumber: "BOP-458901", priority: "High", status: "Open", assignedTo: "Nina Patel", due: "2026-05-18", queue: "Underwriting" },
    { id: "ACT-4102", subject: "Upload loss run from producer", accountId: "A-10091", policyNumber: "S-88201", priority: "Normal", status: "Open", assignedTo: "Pavan Kumar", due: "2026-05-20", queue: "Producer Follow-up" },
    { id: "ACT-4103", subject: "Bind request pending approval", accountId: "A-10132", policyNumber: "S-88232", priority: "Normal", status: "Open", assignedTo: "Pavan Kumar", due: "2026-05-21", queue: "My Activities" },
    { id: "ACT-4104", subject: "Renewal quote comparison", accountId: "A-10044", policyNumber: "CP-330118", priority: "Low", status: "Complete", assignedTo: "Maya Ellis", due: "2026-05-12", queue: "Renewals" },
    { id: "ACT-4105", subject: "Verify MVR for Evelyn Carter", accountId: "A-10132", policyNumber: "PA-778204", priority: "High", status: "Open", assignedTo: "Pavan Kumar", due: "2026-05-17", queue: "Driver Verification" }
  ],
  documents: [
    { id: "DOC-5101", scope: "account", accountId: "A-10091", policyNumber: "", name: "Producer submission email.pdf", status: "Approved", type: "Email Sent", section: "Correspondence", hidden: false, updated: "2026-05-11" },
    { id: "DOC-5102", scope: "policy", accountId: "A-10091", policyNumber: "BOP-458901", name: "Policy summary.pdf", status: "Approved", type: "Policy Summary", section: "Policy", hidden: false, updated: "2026-01-01" },
    { id: "DOC-5103", scope: "account", accountId: "A-10044", policyNumber: "", name: "Fire protection inspection.docx", status: "Draft", type: "Inspection", section: "Risk", hidden: false, updated: "2026-04-29" }
  ],
  notes: [
    { id: "N-6101", accountId: "A-10091", policyNumber: "BOP-458901", author: "Pavan Kumar", topic: "Submission", text: "Producer confirmed two locations and requested higher deductible version.", created: "2026-05-10" },
    { id: "N-6102", accountId: "A-10091", policyNumber: "", author: "Nina Patel", topic: "Underwriting", text: "Need updated loss runs before bind authority can be granted.", created: "2026-05-12" },
    { id: "N-6103", accountId: "A-10044", policyNumber: "CP-330118", author: "Maya Ellis", topic: "Renewal", text: "Roastery added new equipment; review equipment breakdown limit at renewal.", created: "2026-05-02" }
  ],
  uwIssues: [
    { id: "UW-301", submissionId: "S-88201", policyNumber: "", accountId: "A-10091", title: "High building limit", blocking: "Bind", status: "Open", authority: "$2,000,000", value: "$2,400,000", reason: "Property limit exceeds producer authority." },
    { id: "UW-302", submissionId: "S-88201", policyNumber: "", accountId: "A-10091", title: "Prior loss review", blocking: "Quote", status: "Approved", authority: "2 losses", value: "1 loss", reason: "Loss run received and acceptable." }
  ],
  transactions: [
    { id: "T-1201", accountId: "A-10091", policyNumber: "BOP-458901", type: "Submission", status: "Issued", effective: "2026-01-01", premium: 14820 },
    { id: "T-1202", accountId: "A-10091", policyNumber: "S-88201", type: "Submission", status: "Quoted", effective: "2026-06-01", premium: 38120 },
    { id: "T-1203", accountId: "A-10044", policyNumber: "CP-330118", type: "Renewal", status: "Open", effective: "2026-09-01", premium: 0 }
  ],
  claims: [
    { id: "CLM-90211", accountId: "A-10132", policyNumber: "PA-778204", claimant: "Evelyn Carter", lossDate: "2023-04-02", type: "Collision", status: "Closed", incurred: 8600 },
    { id: "CLM-90244", accountId: "A-10091", policyNumber: "BOP-458901", claimant: "Metro Builders LLC", lossDate: "2025-10-11", type: "Property damage", status: "Open", incurred: 12400 }
  ]
};

let state = loadState();
const app = document.querySelector("#app");
const toastRoot = document.querySelector("#toast-root");

if (typeof location !== "undefined" && new URLSearchParams(location.search).get("demo") === "1" && !state.user) {
  state.user = { name: "Pavan Kumar", role: "Producer" };
}

render();

app.addEventListener("click", handleClick);
app.addEventListener("submit", handleSubmit);
app.addEventListener("change", handleChange);
app.addEventListener("keydown", handleKeydown);
app.addEventListener("input", handleInput);

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORE_KEY));
    if (saved && saved.accounts && saved.policies) {
      return { ...structuredClone(defaultState), ...saved };
    }
  } catch {
    localStorage.removeItem(STORE_KEY);
  }
  return structuredClone(defaultState);
}

function saveState() {
  localStorage.setItem(STORE_KEY, JSON.stringify(state));
}

function render() {
  if (!state.user) {
    app.innerHTML = renderLogin();
    return;
  }

  app.innerHTML = `
    <div class="app-shell ${state.sidebarCollapsed ? "sidebar-collapsed" : ""}">
      ${renderTopbar()}
      <div class="workspace">
        ${renderSidebar()}
        <main class="main">
          ${renderActiveView()}
        </main>
      </div>
      ${renderStickyActions()}
      ${renderModal()}
    </div>
  `;
}

function renderLogin() {
  return `
    <section class="login-screen">
      <form class="login-panel" data-form="login">
        <div class="brand">
          <span class="brand-mark">PC</span>
          <span>PolicyCenter Workbench<small>Training application</small></span>
        </div>
        <div>
          <h1>Policy administration workspace</h1>
          <p>Use a demo role to explore account files, policy transactions, quote workflows, underwriting issues, notes, documents, and queues.</p>
        </div>
        <div class="field">
          <label>User name</label>
          <input name="name" value="Pavan Kumar" autocomplete="name" />
        </div>
        <div class="field">
          <label>Role</label>
          <select name="role">
            <option>Producer</option>
            <option>Underwriter</option>
            <option>Service Representative</option>
            <option>Manager</option>
          </select>
        </div>
        <button class="btn primary" type="submit">Sign in</button>
      </form>
      <div class="login-visual">
        <div class="login-board">
          <div class="metric"><span class="metric-label">Open activities</span><b class="metric-value">18</b></div>
          <div class="metric"><span class="metric-label">Quoted premium</span><b class="metric-value">$38K</b></div>
          <div class="queue-preview"><b>My Submissions</b><br /><span>Qualification, Quote, Risk Analysis, Bind</span></div>
          <div class="queue-preview"><b>Policy File</b><br /><span>Actions, tools, documents, notes</span></div>
          <div class="flow-preview">
            <b>Submission general steps</b><br />
            <span>Account, product, pre-qualification, policy info, quote, bind, issue</span>
            <div class="flow-line"><i></i><i></i><i></i><i></i><i></i><i></i></div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderTopbar() {
  const tabs = [
    ["desktop", "Policy Search"],
    ["accounts", "Account"],
    ["policies", "Policies"],
    ["claims", "Claims"],
    ["drivers", "Driver Details"],
    ["renewals", "Renewals"],
    ["admin", "Administration"]
  ];
  return `
    <header class="topbar">
      <div class="topbar-main">
        <div class="brand">
          <span class="brand-mark">PC</span>
          <span>PolicyCenter<small>Underwriting workspace</small></span>
        </div>
        <nav class="tabbar" aria-label="Primary">
          ${tabs.map(([id, label]) => `<button class="tab ${state.activeTab === id ? "active" : ""}" data-action="tab" data-tab="${id}">${label}</button>`).join("")}
        </nav>
        <div class="top-tools">
          <input class="quickjump" data-quickjump placeholder="Policy / Account / Driver search" aria-label="QuickJump search" />
          <div class="user-chip"><span class="avatar">${initials(state.user.name)}</span><span>${escapeHtml(state.user.name)}</span></div>
          <button class="btn ghost" data-action="logout">Logout</button>
        </div>
      </div>
    </header>
  `;
}

function renderSidebar() {
  const openApprovals = state.uwIssues.filter((i) => i.status === "Open").length;
  const openRenewals = state.transactions.filter((t) => t.type === "Renewal" && t.status === "Open").length;
  const driverTasks = state.activities.filter((a) => a.queue === "Driver Verification" && a.status === "Open").length;
  const shortcuts = [
    ["desktop", "Task Queues", state.activities.filter((a) => a.status === "Open").length],
    ["search", "Policy Search", state.policies.length + state.submissions.length],
    ["accounts", "Account File", state.accounts.length],
    ["submission", "Submission Wizard", state.submissions.filter((s) => s.status !== "Issued").length],
    ["drivers", "Driver Verification", driverTasks],
    ["renewals", "Renewal Alerts", openRenewals],
    ["claims", "Claims Lookup", state.claims.length],
    ["team", "Team Queues", openApprovals]
  ];
  return `
    <aside class="workflow-sidebar" aria-label="Workflow navigation">
      <div class="sidebar-head">
        <span>Workflow</span>
        <button class="btn icon compact" data-action="toggle-sidebar" title="Collapse sidebar" aria-label="Collapse sidebar">${state.sidebarCollapsed ? ">" : "<"}</button>
      </div>
      <div class="sidebar-section">
        ${shortcuts.map(([tab, label, count]) => `
          <button class="sidebar-link ${state.activeTab === tab ? "active" : ""}" data-action="tab" data-tab="${tab}">
            <span>${escapeHtml(label)}</span>
            <b>${count}</b>
          </button>
        `).join("")}
      </div>
      <div class="sidebar-title">Policy Workflow</div>
      <div class="workflow-list">
        ${wizardSteps.map(([id, label], index) => `
          <button class="workflow-step ${state.wizardStep === id ? "active" : ""}" data-action="open-wizard-step" data-step="${id}">
            <i>${index + 1}</i><span>${label}</span>
          </button>
        `).join("")}
      </div>
    </aside>
  `;
}

function renderActiveView() {
  switch (state.activeTab) {
    case "accounts":
      return renderAccounts();
    case "policies":
      return renderPolicies();
    case "drivers":
      return renderDriverDetails();
    case "claims":
      return renderClaims();
    case "renewals":
      return renderRenewals();
    case "search":
      return renderSearch();
    case "team":
      return renderTeam();
    case "admin":
      return renderAdmin();
    case "submission":
      return renderSubmissionWizard();
    default:
      return renderDesktop();
  }
}

function renderDesktop() {
  const myActivities = state.activities.filter((a) => a.assignedTo === state.user.name || a.queue === "My Activities");
  const openSubmissions = state.submissions.filter((s) => !["Issued", "Withdrawn", "Declined", "Not Taken"].includes(s.status));
  const renewalAlerts = state.transactions.filter((t) => t.type === "Renewal" && t.status === "Open");
  const approvals = state.uwIssues.filter((i) => i.status === "Open");
  const driverTasks = state.activities.filter((a) => a.queue === "Driver Verification");

  return `
    <div class="page-head">
      <div class="page-title">
        <h1>Policy Search & Work Queues</h1>
        <p>Compact producer and underwriter workspace for policy lookup, assigned work, approvals, renewals, and driver verification.</p>
      </div>
      <div class="actions">
        <button class="btn primary" data-action="open-new-account">New Account</button>
        <button class="btn" data-action="new-submission">New Submission</button>
        <button class="btn" data-action="tab" data-tab="drivers">Driver Details</button>
      </div>
    </div>

    <section class="queue-strip">
      <button class="queue-tile active" data-action="tab" data-tab="desktop"><span>Task queues</span><b>${myActivities.filter((a) => a.status === "Open").length}</b></button>
      <button class="queue-tile" data-action="tab" data-tab="submission"><span>Recent submissions</span><b>${openSubmissions.length}</b></button>
      <button class="queue-tile" data-action="tab" data-tab="policies"><span>Assigned policies</span><b>${state.policies.length}</b></button>
      <button class="queue-tile" data-action="tab" data-tab="team"><span>Pending approvals</span><b>${approvals.length}</b></button>
      <button class="queue-tile" data-action="tab" data-tab="renewals"><span>Renewal alerts</span><b>${renewalAlerts.length}</b></button>
      <button class="queue-tile" data-action="tab" data-tab="drivers"><span>Driver verification</span><b>${driverTasks.filter((a) => a.status === "Open").length}</b></button>
    </section>

    <section class="workbench-grid">
      <div class="panel">
        <div class="panel-head"><h2>Task Queues</h2><span>Assigned and queue work</span></div>
        ${tableToolbar("activities", "Filter tasks")}
        <div class="table-wrap">${activityTable(myActivities, true)}</div>
      </div>
      <div class="panel">
        <div class="panel-head"><h2>Recent Submissions</h2><span>Open policy transactions</span></div>
        ${tableToolbar("submissions", "Filter submissions")}
        <div class="table-wrap">${submissionTable(openSubmissions)}</div>
      </div>
      <div class="panel">
        <div class="panel-head"><h2>Assigned Policies</h2><span>Policies currently in service</span></div>
        ${tableToolbar("policies", "Filter policies")}
        <div class="table-wrap">${policyTable(state.policies)}</div>
      </div>
      <div class="panel">
        <div class="panel-head"><h2>Pending Approvals</h2><span>Underwriting blocks</span></div>
        <div class="panel-body compact-body">${renderRiskIssues(approvals, true)}</div>
      </div>
      <div class="panel">
        <div class="panel-head"><h2>Renewal Alerts</h2><span>Upcoming policy actions</span></div>
        <div class="table-wrap">${transactionTable(renewalAlerts)}</div>
      </div>
      <div class="panel">
        <div class="panel-head"><h2>Driver Verification Tasks</h2><span>MVR and license workflow</span></div>
        <div class="table-wrap">${activityTable(driverTasks, true)}</div>
      </div>
    </section>
  `;
}

function renderAccounts() {
  const query = state.searchText.trim().toLowerCase();
  const accounts = state.accounts.filter((a) => !query || [a.id, a.name, a.producer, a.status].join(" ").toLowerCase().includes(query));
  const selected = getAccount(state.selectedAccountId) || state.accounts[0];
  if (selected && state.selectedAccountId !== selected.id) state.selectedAccountId = selected.id;

  return `
    <div class="page-head">
      <div class="page-title">
        <h1>Account</h1>
        <p>Search, create, and manage insured account information separately from policy transactions.</p>
      </div>
      <div class="actions">
        <button class="btn primary" data-action="open-new-account">Create Account</button>
        <button class="btn" data-action="new-submission">New Submission</button>
      </div>
    </div>

    ${state.newAccountOpen ? renderNewAccountForm() : ""}

    <section class="two-pane">
      <div class="panel">
        <div class="panel-head">
          <h2>Account Search</h2>
          <input class="search-input" data-search placeholder="Name, account number, producer" value="${escapeAttr(state.searchText)}" />
        </div>
        <div class="table-wrap">${accountTable(accounts)}</div>
      </div>
      ${selected ? renderAccountFile(selected) : `<div class="empty">No account selected.</div>`}
    </section>
  `;
}

function renderNewAccountForm() {
  return `
    <form class="panel" data-form="new-account">
      <div class="panel-head"><h2>Create Account</h2><button class="btn ghost" type="button" data-action="close-new-account">Close</button></div>
      <div class="panel-body field-grid cols-3">
        <div class="field"><label>Account name</label><input name="name" required placeholder="Company or person" /></div>
        <div class="field"><label>Type</label><select name="type"><option>Company</option><option>Person</option></select></div>
        <div class="field"><label>Service tier</label><select name="tier"><option>Gold</option><option>Platinum</option><option>Silver</option></select></div>
        <div class="field"><label>Producer</label><input name="producer" value="Keystone Agency" /></div>
        <div class="field"><label>Producer code</label><input name="producerCode" value="KST-1048" /></div>
        <div class="field"><label>Primary contact</label><input name="primaryContact" placeholder="Contact name" /></div>
        <div class="field"><label>Email</label><input name="email" type="email" /></div>
        <div class="field"><label>Phone</label><input name="phone" /></div>
        <div class="field"><label>Official ID</label><input name="officialId" placeholder="FEIN, DL, tax ID" /></div>
        <div class="field" style="grid-column: 1 / -1"><label>Address</label><input name="address" required /></div>
        <div class="actions" style="grid-column: 1 / -1"><button class="btn primary" type="submit">Create as New Account</button></div>
      </div>
    </form>
  `;
}

function renderAccountFile(account) {
  const sections = [
    ["summary", "Summary"],
    ["contacts", "Contacts"],
    ["locations", "Locations"],
    ["transactions", "Policy Transactions"],
    ["submissions", "Submission Manager"],
    ["documents", "Documents"],
    ["notes", "Notes"],
    ["billing", "Billing"],
    ["history", "History"]
  ];

  return `
    <div>
      <div class="info-bar">
        <span class="crumb"><strong>Account File</strong></span>
        <span class="divider"></span>
        <span class="crumb">Account <strong>${account.id}</strong></span>
        <span class="crumb">Name <strong>${escapeHtml(account.name)}</strong></span>
        <span class="crumb">Status ${status(account.status)}</span>
        <span class="crumb">Producer <strong>${escapeHtml(account.producerCode)}</strong></span>
      </div>
      <div class="layout">
        <aside class="side-rail">
          ${sections.map(([id, label]) => `<button class="side-item ${state.accountSection === id ? "active" : ""}" data-action="account-section" data-section="${id}">${label}<span>${accountSectionCount(account.id, id)}</span></button>`).join("")}
        </aside>
        <div class="panel">
          <div class="panel-head">
            <h2>${sections.find(([id]) => id === state.accountSection)?.[1] || "Summary"}</h2>
            <div class="actions">
              <button class="btn" data-action="add-note">New Note</button>
              <button class="btn" data-action="add-document">New Document</button>
            </div>
          </div>
          <div class="panel-body">${renderAccountSection(account)}</div>
        </div>
      </div>
    </div>
  `;
}

function renderAccountSection(account) {
  const accountPolicies = state.policies.filter((p) => p.accountId === account.id);
  const accountSubs = state.submissions.filter((s) => s.accountId === account.id);
  const txs = state.transactions.filter((t) => t.accountId === account.id);
  const docs = state.documents.filter((d) => d.accountId === account.id);
  const notes = state.notes.filter((n) => n.accountId === account.id);

  switch (state.accountSection) {
    case "contacts":
      return table(["Name", "Role", "Phone", "Email"], state.contacts.filter((c) => c.accountId === account.id).map((c) => [c.name, c.role, c.phone, c.email]));
    case "locations":
      return table(["Type", "Address", "Use"], state.locations.filter((l) => l.accountId === account.id).map((l) => [l.type, l.address, l.use]));
    case "transactions":
      return transactionTable(txs);
    case "submissions":
      return submissionTable(accountSubs);
    case "documents":
      return renderDocuments(docs);
    case "notes":
      return renderNotes(notes);
    case "billing":
      return `
        <div class="summary-list">
          <div class="summary-row"><span>Billing account</span><strong>BILL-${account.id.replace("A-", "")}</strong></div>
          <div class="summary-row"><span>Settlement currency</span><strong>${account.settlementCurrency}</strong></div>
          <div class="summary-row"><span>Coverage currency</span><strong>${account.coverageCurrency}</strong></div>
          <div class="summary-row"><span>Current balance</span><strong>${money(accountPolicies.reduce((sum, p) => sum + p.premium, 0) / 4)}</strong></div>
          <div class="summary-row"><span>Payment status</span><strong>Current</strong></div>
        </div>
      `;
    case "history":
      return `
        <div class="timeline">
          ${[
            ["Today", "Account viewed by " + state.user.name, "View"],
            ["May 12", "Underwriting referral added to submission S-88201", "UW"],
            ["May 10", "Producer email saved as account document", "Document"],
            ["Jan 01", "Policy BOP-458901 issued", "Issue"]
          ].map(([date, text, kind]) => `<div class="timeline-item"><strong>${date}</strong><span>${text}</span><span class="tag">${kind}</span></div>`).join("")}
        </div>
      `;
    default:
      return `
        <section class="grid cols-2">
          <div class="panel flat">
            <div class="panel-head"><h3>Basic Information</h3></div>
            <div class="panel-body summary-list">
              <div class="summary-row"><span>Name</span><strong>${escapeHtml(account.name)}</strong></div>
              <div class="summary-row"><span>Address</span><strong>${escapeHtml(account.address)}</strong></div>
              <div class="summary-row"><span>Email</span><strong>${escapeHtml(account.email)}</strong></div>
              <div class="summary-row"><span>Phone</span><strong>${escapeHtml(account.phone)}</strong></div>
              <div class="summary-row"><span>Official ID</span><strong>${escapeHtml(account.officialId)}</strong></div>
              <div class="summary-row"><span>Service tier</span><strong>${escapeHtml(account.tier)}</strong></div>
            </div>
          </div>
          <div class="panel flat">
            <div class="panel-head"><h3>Current Activity</h3></div>
            <div class="panel-body">
              ${activityTable(state.activities.filter((a) => a.accountId === account.id && a.status === "Open"), false)}
            </div>
          </div>
          <div class="panel flat">
            <div class="panel-head"><h3>Policy Terms</h3></div>
            <div class="table-wrap">${policyTable(accountPolicies)}</div>
          </div>
          <div class="panel flat">
            <div class="panel-head"><h3>Pending Policy Transactions</h3></div>
            <div class="table-wrap">${transactionTable(txs.filter((t) => t.status !== "Issued"))}</div>
          </div>
        </section>
      `;
  }
}

function renderPolicies() {
  const query = state.searchText.trim().toLowerCase();
  const policies = state.policies.filter((p) => !query || [p.number, p.lob, p.status, getAccount(p.accountId)?.name].join(" ").toLowerCase().includes(query));
  const selected = getPolicy(state.selectedPolicyId) || state.policies[0];
  if (selected && state.selectedPolicyId !== selected.number) state.selectedPolicyId = selected.number;

  return `
    <div class="page-head">
      <div class="page-title">
        <h1>Policy</h1>
        <p>Work with policy files, policy transactions, contract screens, tools, and contextual actions.</p>
      </div>
      <div class="actions">
        <button class="btn" data-action="policy-action" data-kind="Policy Change">Start Policy Change</button>
        <button class="btn" data-action="policy-action" data-kind="Renewal">Start Renewal</button>
        <button class="btn danger" data-action="policy-action" data-kind="Cancellation">Start Cancellation</button>
      </div>
    </div>

    <section class="two-pane">
      <div class="panel">
        <div class="panel-head">
          <h2>Policy Search</h2>
          <input class="search-input" data-search placeholder="Policy number, account, line" value="${escapeAttr(state.searchText)}" />
        </div>
        <div class="table-wrap">${policyTable(policies)}</div>
      </div>
      ${selected ? renderPolicyFile(selected) : `<div class="empty">No policy selected.</div>`}
    </section>
  `;
}

function renderPolicyFile(policy) {
  const account = getAccount(policy.accountId);
  const sections = [
    ["summary", "Summary"],
    ["policy-info", "Policy Info"],
    ["coverages", "Coverages"],
    ["billing", "Billing"],
    ["contacts", "Contacts"],
    ["participants", "Participants"],
    ["notes", "Notes"],
    ["documents", "Documents"],
    ["transactions", "Policy Transactions"],
    ["risk", "Risk Analysis"],
    ["forms", "Forms"]
  ];

  return `
    <div>
      <div class="info-bar">
        <span class="crumb"><strong>Policy File</strong></span>
        <span class="divider"></span>
        <span class="crumb">${escapeHtml(policy.lob)}</span>
        <span class="crumb">Insured <strong>${escapeHtml(account?.name || "Unknown")}</strong></span>
        <button class="btn ghost" data-action="select-account" data-account-id="${policy.accountId}">${policy.accountId}</button>
        <span class="crumb">Policy <strong>${policy.number}</strong></span>
        ${status(policy.status)}
      </div>
      <div class="layout">
        <aside class="side-rail">
          ${sections.map(([id, label]) => `<button class="side-item ${state.policySection === id ? "active" : ""}" data-action="policy-section" data-section="${id}">${label}<span>${policySectionCount(policy.number, id)}</span></button>`).join("")}
        </aside>
        <div class="panel">
          <div class="panel-head">
            <h2>${sections.find(([id]) => id === state.policySection)?.[1] || "Summary"}</h2>
            <div class="actions">
              <button class="btn" data-action="add-note">New Note</button>
              <button class="btn" data-action="add-document">New Document</button>
            </div>
          </div>
          <div class="panel-body">${renderPolicySection(policy)}</div>
        </div>
      </div>
    </div>
  `;
}

function renderDriverDetails() {
  const driver = getDriver(state.selectedDriverId) || state.drivers[0];
  if (driver && state.selectedDriverId !== driver.id) state.selectedDriverId = driver.id;
  if (!driver) return `<div class="empty">No driver records found.</div>`;
  const account = getAccount(driver.accountId);
  const violations = state.driverViolations.filter((v) => v.driverId === driver.id);
  const driverDocs = state.documents.filter((d) => d.accountId === driver.accountId);
  const relatedNotes = state.notes.filter((n) => n.accountId === driver.accountId);
  return `
    <div class="page-head">
      <div class="page-title">
        <h1>Driver Details</h1>
        <p>Driver underwriting workspace for license verification, policy assignment, violations, risk, notes, and documents.</p>
      </div>
      <div class="actions">
        <button class="btn primary" data-action="modal" data-modal="driver">Add Driver</button>
        <button class="btn" data-action="driver-verify">Verify MVR</button>
      </div>
    </div>

    <div class="driver-layout">
      <section class="panel driver-selector">
        <div class="panel-head"><h2>Driver Search</h2></div>
        ${tableToolbar("drivers", "Filter drivers")}
        <div class="table-wrap">${driverTable(state.drivers)}</div>
      </section>

      <section class="driver-workspace">
        <div class="info-bar dense">
          <span class="crumb"><strong>${escapeHtml(driver.name)}</strong></span>
          <span class="divider"></span>
          <span class="crumb">Driver <strong>${driver.id}</strong></span>
          <span class="crumb">Policy <strong>${driver.policyNumber}</strong></span>
          <span class="crumb">Account <strong>${driver.accountId}</strong></span>
          ${status(driver.verification)}
          ${status(driver.underwritingStatus)}
        </div>

        <div class="workflow-ribbon">
          ${["Account", "Policy Info", "Drivers", "Vehicles", "Coverages", "Risk Analysis", "Quote", "Review", "Payment", "Submission"].map((step, index) => `
            <button class="${step === "Drivers" ? "active" : ""}" data-action="workflow-toast">${index + 1}. ${step}</button>
          `).join("")}
        </div>

        <form class="compact-form" data-form="driver-update">
          <div class="form-section">
            <h2>Driver Information</h2>
            <div class="field-grid cols-4">
              <div class="field"><label>Driver ID</label><input value="${driver.id}" disabled /></div>
              <div class="field"><label>Full name</label><input name="name" value="${escapeAttr(driver.name)}" required /></div>
              <div class="field"><label>Date of birth</label><input type="date" name="dob" value="${driver.dob}" required /></div>
              <div class="field"><label>Relationship</label><select name="relationship">${optionSet(["Named Insured", "Spouse", "Employee Driver", "Household Driver"], driver.relationship)}</select></div>
              <div class="field"><label>Phone</label><input name="phone" value="${escapeAttr(driver.phone)}" /></div>
              <div class="field"><label>Email</label><input name="email" type="email" value="${escapeAttr(driver.email)}" /></div>
              <div class="field"><label>Marital status</label><select name="maritalStatus">${optionSet(["Single", "Married", "Divorced", "Widowed"], driver.maritalStatus)}</select></div>
              <div class="field"><label>Gender</label><select name="gender">${optionSet(["Female", "Male", "Non-disclosed"], driver.gender)}</select></div>
              <div class="field wide"><label>Address</label><input name="address" value="${escapeAttr(driver.address)}" /></div>
            </div>
          </div>

          <div class="form-section">
            <h2>License Information</h2>
            <div class="field-grid cols-4">
              <div class="field"><label>License number</label><input name="licenseNumber" value="${escapeAttr(driver.licenseNumber)}" required /></div>
              <div class="field"><label>State</label><select name="licenseState">${optionSet(["CA", "WI", "WA", "TX", "NY", "IL"], driver.licenseState)}</select></div>
              <div class="field"><label>Status</label><select name="licenseStatus">${optionSet(["Valid", "Pending", "Suspended", "Expired"], driver.licenseStatus)}</select></div>
              <div class="field"><label>First licensed</label><input type="date" name="licensedDate" value="${driver.licensedDate}" /></div>
              <div class="field"><label>Expiration</label><input type="date" name="expirationDate" value="${driver.expirationDate}" /></div>
              <div class="field"><label>Verification</label><input value="${escapeAttr(driver.verification)}" disabled /></div>
            </div>
          </div>

          <div class="form-grid">
            <div class="form-section">
              <h2>Violations History</h2>
              <div class="table-wrap">${table(["Date", "Violation", "Points", "Status"], violations.map((v) => [date(v.date), v.type, v.points, status(v.status)]))}</div>
            </div>
            <div class="form-section">
              <h2>Policy Assignment</h2>
              <div class="summary-list">
                <div class="summary-row"><span>Account</span><strong>${escapeHtml(account?.name || driver.accountId)}</strong></div>
                <div class="summary-row"><span>Policy / Job</span><strong>${driver.policyNumber}</strong></div>
                <div class="summary-row"><span>Assigned vehicle</span><strong>${escapeHtml(driver.assignment)}</strong></div>
                <div class="summary-row"><span>Producer code</span><strong>${escapeHtml(account?.producerCode || "")}</strong></div>
              </div>
            </div>
          </div>

          <div class="form-grid">
            <div class="form-section">
              <h2>Risk Analysis</h2>
              <div class="risk-meter"><span style="width:${Math.min(driver.riskScore, 100)}%"></span></div>
              <div class="summary-list">
                <div class="summary-row"><span>Risk score</span><strong>${driver.riskScore}</strong></div>
                <div class="summary-row"><span>Underwriting status</span>${status(driver.underwritingStatus)}</div>
                <div class="summary-row"><span>Open violations</span><strong>${violations.filter((v) => v.status === "Open").length}</strong></div>
              </div>
            </div>
            <div class="form-section">
              <h2>Underwriting Notes</h2>
              ${renderNotes(relatedNotes.slice(0, 3))}
            </div>
          </div>

          <div class="form-section">
            <h2>Documents Upload</h2>
            <div class="upload-row">
              <div>
                <strong>Attach license, MVR, or driver questionnaire</strong>
                <p class="muted">Demo upload section for document metadata and workflow tracking.</p>
              </div>
              <button class="btn" type="button" data-action="add-document">Upload Document</button>
            </div>
            <div class="table-wrap">${renderDocuments(driverDocs)}</div>
          </div>
        </form>
      </section>
    </div>
  `;
}

function renderClaims() {
  return `
    <div class="page-head">
      <div class="page-title">
        <h1>Claims</h1>
        <p>Claim lookup for policy underwriting review and prior loss context.</p>
      </div>
    </div>
    <section class="panel">
      <div class="panel-head"><h2>Claim Search</h2><span>Linked to accounts and policies</span></div>
      ${tableToolbar("claims", "Filter claims")}
      <div class="table-wrap">${claimTable(state.claims)}</div>
    </section>
  `;
}

function renderRenewals() {
  const renewals = state.transactions.filter((t) => t.type === "Renewal");
  return `
    <div class="page-head">
      <div class="page-title">
        <h1>Renewals</h1>
        <p>Renewal queue, alerts, assigned policies, and follow-up actions.</p>
      </div>
      <div class="actions"><button class="btn primary" data-action="policy-action" data-kind="Renewal">Start Renewal</button></div>
    </div>
    <section class="panel">
      <div class="panel-head"><h2>Renewal Alerts</h2><span>Open renewal jobs</span></div>
      ${tableToolbar("renewals", "Filter renewals")}
      <div class="table-wrap">${transactionTable(renewals)}</div>
    </section>
  `;
}

function renderPolicySection(policy) {
  const account = getAccount(policy.accountId);
  const notes = state.notes.filter((n) => n.policyNumber === policy.number);
  const docs = state.documents.filter((d) => d.policyNumber === policy.number);
  const txs = state.transactions.filter((t) => t.policyNumber === policy.number || t.accountId === policy.accountId);
  switch (state.policySection) {
    case "policy-info":
      return `
        <div class="summary-list">
          <div class="summary-row"><span>Primary named insured</span><strong>${escapeHtml(account?.name || "")}</strong></div>
          <div class="summary-row"><span>Policy number</span><strong>${policy.number}</strong></div>
          <div class="summary-row"><span>Term</span><strong>${date(policy.effective)} to ${date(policy.expiration)}</strong></div>
          <div class="summary-row"><span>Producer of service</span><strong>${escapeHtml(policy.producer)}</strong></div>
          <div class="summary-row"><span>Underwriting company</span><strong>${escapeHtml(policy.uwCompany)}</strong></div>
        </div>
      `;
    case "coverages":
      return table(["Coverage", "Limit"], policy.coverages);
    case "billing":
      return table(["Item", "Value"], [["Payment plan", policy.paymentPlan], ["Written premium", money(policy.premium)], ["Current balance", money(policy.premium / 4)], ["Billing status", "Current"]]);
    case "contacts":
      return table(["Name", "Role", "Phone", "Email"], state.contacts.filter((c) => c.accountId === policy.accountId).map((c) => [c.name, c.role, c.phone, c.email]));
    case "participants":
      return table(["Role", "User", "Group"], [["Requestor", state.user.name, "Producer Services"], ["Producer", policy.producer, "Distribution"], ["Underwriter", policy.underwriter, "Commercial Underwriting"], ["Processor", "Riley Stone", "Policy Operations"]]);
    case "notes":
      return renderNotes(notes);
    case "documents":
      return renderDocuments(docs);
    case "transactions":
      return transactionTable(txs);
    case "risk":
      return renderRiskIssues(state.uwIssues.filter((i) => i.accountId === policy.accountId), false);
    case "forms":
      return table(["Form", "Edition", "Status"], [["Common Policy Declarations", "01-26", "Included"], ["Businessowners Coverage Form", "07-23", "Included"], ["State Amendatory Endorsement", "05-24", "Included"]]);
    default:
      return `
        <section class="grid cols-2">
          <div class="panel flat">
            <div class="panel-head"><h3>Summary Details</h3></div>
            <div class="panel-body summary-list">
              <div class="summary-row"><span>Status</span><strong>${policy.status}</strong></div>
              <div class="summary-row"><span>Line of business</span><strong>${policy.lob}</strong></div>
              <div class="summary-row"><span>Term</span><strong>${date(policy.effective)} to ${date(policy.expiration)}</strong></div>
              <div class="summary-row"><span>Premium</span><strong>${money(policy.premium)}</strong></div>
              <div class="summary-row"><span>Underwriter</span><strong>${escapeHtml(policy.underwriter)}</strong></div>
            </div>
          </div>
          <div class="panel flat">
            <div class="panel-head"><h3>Tools</h3></div>
            <div class="panel-body mini-stack">
              ${["Billing", "Contacts", "Participants", "Notes", "Documents", "Policy Transactions", "Risk Analysis", "Forms"].map((x) => `<span class="tag">${x}</span>`).join("")}
            </div>
          </div>
          <div class="panel flat">
            <div class="panel-head"><h3>Open Activities</h3></div>
            <div class="panel-body">${activityTable(state.activities.filter((a) => a.policyNumber === policy.number && a.status === "Open"), false)}</div>
          </div>
          <div class="panel flat">
            <div class="panel-head"><h3>Current Contract</h3></div>
            <div class="table-wrap">${table(["Coverage", "Limit"], policy.coverages)}</div>
          </div>
        </section>
      `;
  }
}

function renderSubmissionWizard() {
  const submission = getSubmission(state.selectedSubmissionId);
  if (!submission) {
    state.activeTab = "desktop";
    return renderDesktop();
  }
  const account = getAccount(submission.accountId);
  const stepIndex = wizardSteps.findIndex(([id]) => id === state.wizardStep);
  return `
    <div class="page-head">
      <div class="page-title">
        <h1>Submission ${submission.id}</h1>
        <p>${escapeHtml(account?.name || "")} - ${submission.lob} - ${submission.quoteType} - ${submission.status}</p>
      </div>
      <div class="actions">
        <button class="btn" data-action="select-account" data-account-id="${submission.accountId}">Open Account</button>
        <button class="btn danger" data-action="close-submission" data-close-status="Withdrawn">Withdraw</button>
      </div>
    </div>
    <div class="wizard">
      <aside class="wizard-steps">
        ${wizardSteps.map(([id, label, hint], i) => `
          <button class="step ${id === state.wizardStep ? "active" : ""} ${i < stepIndex ? "done" : ""}" data-action="wizard-step" data-step="${id}">
            <span class="step-index">${i + 1}</span>
            <span><strong>${label}</strong><small>${hint}</small></span>
          </button>
        `).join("")}
      </aside>
      <div class="panel">
        <div class="panel-head">
          <h2>${wizardSteps[stepIndex]?.[1] || "Submission"}</h2>
          <span>${status(submission.status)} ${submission.premium ? money(submission.premium) : ""}</span>
        </div>
        <div class="panel-body">
          ${renderWizardStep(submission)}
        </div>
      </div>
    </div>
  `;
}

function renderWizardStep(submission) {
  const account = getAccount(submission.accountId);
  const idx = wizardSteps.findIndex(([id]) => id === state.wizardStep);
  const nav = `
    <div class="actions" style="margin-top: 16px">
      ${idx > 0 ? `<button class="btn" data-action="wizard-prev">Back</button>` : ""}
      ${idx < wizardSteps.length - 1 ? `<button class="btn primary" data-action="wizard-next">Next</button>` : ""}
    </div>
  `;

  switch (state.wizardStep) {
    case "product":
      return `
        <div class="field-grid">
          <div class="field"><label>Account</label><input value="${escapeAttr(account?.name || "")}" disabled /></div>
          <div class="field"><label>Producer code</label><input data-submission-field="producerCode" value="${escapeAttr(submission.producerCode)}" /></div>
          <div class="field"><label>Effective date</label><input type="date" data-submission-field="effective" value="${submission.effective}" /></div>
          <div class="field"><label>Quote type</label><select data-submission-field="quoteType"><option ${submission.quoteType === "Full Application" ? "selected" : ""}>Full Application</option><option ${submission.quoteType === "Quick Quote" ? "selected" : ""}>Quick Quote</option></select></div>
        </div>
        <h3>Product Offers</h3>
        <div class="choice-grid">
          ${products.map((p) => `<button class="choice ${submission.lob === p.lob ? "active" : ""}" data-action="select-product" data-lob="${p.lob}"><b>${p.lob}</b><span>${p.detail}</span></button>`).join("")}
        </div>
        ${nav}
      `;
    case "qualification":
      return `
        <p class="muted">Pre-qualification questions screen for applicant risk and eligibility.</p>
        <div class="field-grid">
          <div class="field"><label>Applicant eligible for selected product?</label><select data-qualification="eligible"><option ${submission.qualifications.eligible === "Yes" ? "selected" : ""}>Yes</option><option ${submission.qualifications.eligible === "No" ? "selected" : ""}>No</option></select></div>
          <div class="field"><label>More than two prior losses?</label><select data-qualification="priorLosses"><option ${submission.qualifications.priorLosses === "No" ? "selected" : ""}>No</option><option ${submission.qualifications.priorLosses === "Yes" ? "selected" : ""}>Yes</option></select></div>
          <div class="field"><label>Hazardous operations?</label><select data-qualification="hazardous"><option ${submission.qualifications.hazardous === "No" ? "selected" : ""}>No</option><option ${submission.qualifications.hazardous === "Yes" ? "selected" : ""}>Yes</option></select></div>
          <div class="field"><label>Underwriting company</label><select data-submission-field="uwCompany"><option>Pinnacle Mutual</option><option>Cascade Casualty</option><option>Evergreen Commercial</option></select></div>
        </div>
        ${nav}
      `;
    case "policy":
      return `
        <div class="field-grid">
          <div class="field"><label>Primary named insured</label><input value="${escapeAttr(account?.name || "")}" disabled /></div>
          <div class="field"><label>Account number</label><input value="${submission.accountId}" disabled /></div>
          <div class="field"><label>Effective date</label><input type="date" data-submission-field="effective" value="${submission.effective}" /></div>
          <div class="field"><label>Expiration date</label><input type="date" data-submission-field="expiration" value="${submission.expiration}" /></div>
          <div class="field"><label>Producer</label><input data-submission-field="producer" value="${escapeAttr(submission.producer)}" /></div>
          <div class="field"><label>Underwriting company</label><input data-submission-field="uwCompany" value="${escapeAttr(submission.uwCompany)}" /></div>
        </div>
        ${nav}
      `;
    case "details":
      return `
        <p class="muted">Line-specific screen. Fields change by product in a real implementation.</p>
        <div class="field-grid cols-3">
          <div class="field"><label>Annual revenue</label><input type="number" data-number-field="revenue" value="${submission.revenue || 0}" /></div>
          <div class="field"><label>Payroll</label><input type="number" data-number-field="payroll" value="${submission.payroll || 0}" /></div>
          <div class="field"><label>Locations</label><input type="number" data-number-field="locations" value="${submission.locations || 1}" /></div>
          <div class="field"><label>Vehicles</label><input type="number" data-number-field="vehicles" value="${submission.vehicles || 0}" /></div>
          <div class="field"><label>Prior losses</label><input type="number" data-number-field="losses" value="${submission.losses || 0}" /></div>
          <div class="field"><label>Coverage package</label><select data-submission-field="coveragePackage"><option>Standard</option><option>Enhanced</option><option>High deductible</option></select></div>
        </div>
        ${nav}
      `;
    case "risk":
      return `
        <div class="actions" style="margin-bottom: 12px">
          <button class="btn" data-action="run-risk">Run Risk Analysis</button>
          <button class="btn success" data-action="approve-issues">Approve Open Issues</button>
        </div>
        ${renderRiskIssues(state.uwIssues.filter((i) => i.submissionId === submission.id), false)}
        ${nav}
      `;
    case "quote":
      return `
        <div class="grid cols-2">
          <div class="quote-total"><span>Current quoted premium</span><b>${submission.premium ? money(submission.premium) : "Not quoted"}</b></div>
          <div class="panel flat">
            <div class="panel-head"><h3>Quote Actions</h3></div>
            <div class="panel-body actions">
              <button class="btn primary" data-action="generate-quote">Generate Quote</button>
              <button class="btn" data-action="new-version">New Version</button>
            </div>
          </div>
        </div>
        <h3>Versions</h3>
        ${submission.versions.length ? table(["Version", "Premium", "Status"], submission.versions.map((v) => [v.name, money(v.premium), v.status])) : `<div class="empty">No quote versions generated yet.</div>`}
        ${nav}
      `;
    case "bind":
      return `
        <div class="grid cols-2">
          <div class="panel flat">
            <div class="panel-head"><h3>Bind Options</h3></div>
            <div class="panel-body summary-list">
              <div class="summary-row"><span>Quote status</span><strong>${submission.status}</strong></div>
              <div class="summary-row"><span>Open UW issues</span><strong>${state.uwIssues.filter((i) => i.submissionId === submission.id && i.status === "Open").length}</strong></div>
              <div class="summary-row"><span>Premium</span><strong>${submission.premium ? money(submission.premium) : "Not quoted"}</strong></div>
            </div>
          </div>
          <div class="panel flat">
            <div class="panel-head"><h3>Finalize</h3></div>
            <div class="panel-body actions">
              <button class="btn success" data-action="bind-submission">Bind Only</button>
              <button class="btn primary" data-action="issue-submission">Issue Policy</button>
              <button class="btn danger" data-action="close-submission" data-close-status="Not Taken">Not Taken</button>
              <button class="btn danger" data-action="close-submission" data-close-status="Declined">Decline</button>
            </div>
          </div>
        </div>
      `;
    default:
      return nav;
  }
}

function renderSearch() {
  const q = state.searchText.trim().toLowerCase();
  const accountResults = state.accounts.filter((a) => !q || [a.id, a.name, a.producer, a.producerCode].join(" ").toLowerCase().includes(q));
  const policyResults = state.policies.filter((p) => !q || [p.number, p.lob, p.status, getAccount(p.accountId)?.name].join(" ").toLowerCase().includes(q));
  const submissionResults = state.submissions.filter((s) => !q || [s.id, s.lob, s.status, getAccount(s.accountId)?.name].join(" ").toLowerCase().includes(q));
  return `
    <div class="page-head">
      <div class="page-title">
        <h1>Search</h1>
        <p>Find accounts, policies, submissions, notes, documents, and producer codes.</p>
      </div>
    </div>
    <div class="panel">
      <div class="panel-body">
        <input class="search-input" data-search placeholder="Search account, policy, submission, producer code" value="${escapeAttr(state.searchText)}" autofocus />
      </div>
    </div>
    <section class="grid cols-3" style="margin-top: 14px">
      <div class="panel"><div class="panel-head"><h2>Accounts</h2></div><div class="table-wrap">${accountTable(accountResults)}</div></div>
      <div class="panel"><div class="panel-head"><h2>Policies</h2></div><div class="table-wrap">${policyTable(policyResults)}</div></div>
      <div class="panel"><div class="panel-head"><h2>Submissions</h2></div><div class="table-wrap">${submissionTable(submissionResults)}</div></div>
    </section>
  `;
}

function renderTeam() {
  const queues = groupBy(state.activities, "queue");
  return `
    <div class="page-head">
      <div class="page-title">
        <h1>Team</h1>
        <p>Monitor queues, activities, renewals, submissions, and other policy transactions.</p>
      </div>
    </div>
    <section class="grid cols-2">
      ${Object.entries(queues).map(([queue, items]) => `
        <div class="panel">
          <div class="panel-head"><h2>${escapeHtml(queue)}</h2><span>${items.filter((i) => i.status === "Open").length} open</span></div>
          <div class="table-wrap">${activityTable(items, true)}</div>
        </div>
      `).join("")}
    </section>
  `;
}

function renderAdmin() {
  return `
    <div class="page-head">
      <div class="page-title">
        <h1>Administration</h1>
        <p>Reference setup for product model, activity patterns, users, roles, and producer codes.</p>
      </div>
      <div class="actions"><button class="btn" data-action="reset-demo">Reset Demo Data</button></div>
    </div>
    <section class="grid cols-2">
      <div class="panel">
        <div class="panel-head"><h2>Lines of Business</h2></div>
        <div class="table-wrap">${table(["Product", "Category", "Quote Base", "Wizard Focus"], products.map((p) => [p.lob, p.type, money(p.base), p.detail]))}</div>
      </div>
      <div class="panel">
        <div class="panel-head"><h2>Activity Patterns</h2></div>
        <div class="table-wrap">${table(["Pattern", "Default Queue", "Escalation"], [["Loss run request", "Producer Follow-up", "3 business days"], ["UW referral", "Underwriting", "1 business day"], ["Renewal review", "Renewals", "15 days before expiration"], ["Document approval", "Policy Operations", "2 business days"]])}</div>
      </div>
      <div class="panel">
        <div class="panel-head"><h2>Producer Codes</h2></div>
        <div class="table-wrap">${table(["Producer Code", "Organization", "Lines"], [["KST-1048", "Keystone Agency", "BOP, CP, GL"], ["NSP-2201", "Northstar Producers", "Personal Auto"], ["SRI-5530", "Summit Retail Insurance", "Commercial Property"]])}</div>
      </div>
      <div class="panel">
        <div class="panel-head"><h2>Roles</h2></div>
        <div class="table-wrap">${table(["Role", "Authority"], [["Producer", "Create submissions and request bind"], ["Underwriter", "Approve issues and bind authority"], ["Processor", "Issue documents and maintain policy data"], ["Manager", "Assign queues and review operations"]])}</div>
      </div>
    </section>
  `;
}

function accountTable(accounts) {
  const rows = sortRows(filterRows(accounts, (a) => [a.id, a.name, a.producer, a.producerCode, a.status]), "accounts", {
    account: (a) => a.id,
    name: (a) => a.name,
    status: (a) => a.status,
    producer: (a) => a.producerCode
  });
  if (!rows.length) return `<div class="empty">No accounts found.</div>`;
  const page = paginate("accounts", rows);
  return `
    <table class="enterprise-table">
      <thead><tr>${sortHeader("Account", "accounts", "account")}${sortHeader("Name", "accounts", "name")}${sortHeader("Status", "accounts", "status")}${sortHeader("Producer", "accounts", "producer")}</tr></thead>
      <tbody>
        ${page.items.map((a) => `
          <tr class="clickable" data-action="select-account" data-account-id="${a.id}">
            <td><strong>${a.id}</strong></td>
            <td>${escapeHtml(a.name)}<br /><span class="muted">${escapeHtml(a.type)} - ${escapeHtml(a.tier)}</span></td>
            <td>${status(a.status)}</td>
            <td>${escapeHtml(a.producerCode)}<br /><span class="muted">${escapeHtml(a.producer)}</span></td>
          </tr>
        `).join("")}
      </tbody>
    </table>
    ${page.footer}
  `;
}

function policyTable(policies) {
  const rows = sortRows(filterRows(policies, (p) => [p.number, p.lob, p.status, getAccount(p.accountId)?.name, p.producer]), "policies", {
    policy: (p) => p.number,
    account: (p) => getAccount(p.accountId)?.name || "",
    line: (p) => p.lob,
    status: (p) => p.status,
    premium: (p) => p.premium
  });
  if (!rows.length) return `<div class="empty">No policies found.</div>`;
  const page = paginate("policies", rows);
  return `
    <table class="enterprise-table">
      <thead><tr>${sortHeader("Policy", "policies", "policy")}${sortHeader("Account", "policies", "account")}${sortHeader("Line", "policies", "line")}${sortHeader("Status", "policies", "status")}${sortHeader("Premium", "policies", "premium")}</tr></thead>
      <tbody>
        ${page.items.map((p) => `
          <tr class="clickable" data-action="select-policy" data-policy-number="${p.number}">
            <td><strong>${p.number}</strong><br /><span class="muted">${date(p.effective)} - ${date(p.expiration)}</span></td>
            <td>${escapeHtml(getAccount(p.accountId)?.name || p.accountId)}</td>
            <td>${escapeHtml(p.lob)}</td>
            <td>${status(p.status)}</td>
            <td>${p.premium ? money(p.premium) : "-"}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
    ${page.footer}
  `;
}

function submissionTable(submissions) {
  const rows = sortRows(filterRows(submissions, (s) => [s.id, s.lob, s.quoteType, s.status, getAccount(s.accountId)?.name]), "submissions", {
    submission: (s) => s.id,
    account: (s) => getAccount(s.accountId)?.name || "",
    line: (s) => s.lob,
    quoteType: (s) => s.quoteType,
    status: (s) => s.status,
    premium: (s) => s.premium
  });
  if (!rows.length) return `<div class="empty">No submissions found.</div>`;
  const page = paginate("submissions", rows);
  return `
    <table class="enterprise-table">
      <thead><tr>${sortHeader("Submission", "submissions", "submission")}${sortHeader("Account", "submissions", "account")}${sortHeader("Line", "submissions", "line")}${sortHeader("Quote Type", "submissions", "quoteType")}${sortHeader("Status", "submissions", "status")}${sortHeader("Premium", "submissions", "premium")}</tr></thead>
      <tbody>
        ${page.items.map((s) => `
          <tr class="clickable" data-action="select-submission" data-submission-id="${s.id}">
            <td><strong>${s.id}</strong><br /><span class="muted">${date(s.effective)}</span></td>
            <td>${escapeHtml(getAccount(s.accountId)?.name || s.accountId)}</td>
            <td>${escapeHtml(s.lob)}</td>
            <td>${escapeHtml(s.quoteType)}</td>
            <td>${status(s.status)}</td>
            <td>${s.premium ? money(s.premium) : "-"}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
    ${page.footer}
  `;
}

function transactionTable(transactions) {
  const rows = sortRows(filterRows(transactions, (t) => [t.id, t.policyNumber, t.type, t.status]), "transactions", {
    transaction: (t) => t.id,
    policy: (t) => t.policyNumber,
    type: (t) => t.type,
    status: (t) => t.status,
    effective: (t) => t.effective,
    premium: (t) => t.premium
  });
  if (!rows.length) return `<div class="empty">No policy transactions found.</div>`;
  const page = paginate("transactions", rows);
  return `
    <table class="enterprise-table">
      <thead><tr>${sortHeader("Transaction", "transactions", "transaction")}${sortHeader("Policy / Job", "transactions", "policy")}${sortHeader("Type", "transactions", "type")}${sortHeader("Status", "transactions", "status")}${sortHeader("Effective", "transactions", "effective")}${sortHeader("Premium", "transactions", "premium")}</tr></thead>
      <tbody>
        ${page.items.map((t) => `<tr><td><strong>${t.id}</strong></td><td>${escapeHtml(t.policyNumber)}</td><td>${escapeHtml(t.type)}</td><td>${status(t.status)}</td><td>${date(t.effective)}</td><td>${t.premium ? money(t.premium) : "-"}</td></tr>`).join("")}
      </tbody>
    </table>
    ${page.footer}
  `;
}

function activityTable(activities, showAccount) {
  const rows = sortRows(filterRows(activities, (a) => [a.subject, a.priority, a.status, a.assignedTo, a.queue, getAccount(a.accountId)?.name]), "activities", {
    subject: (a) => a.subject,
    account: (a) => getAccount(a.accountId)?.name || "",
    priority: (a) => a.priority,
    assigned: (a) => a.assignedTo,
    due: (a) => a.due,
    status: (a) => a.status
  });
  if (!rows.length) return `<div class="empty">No activities found.</div>`;
  const page = paginate("activities", rows);
  return `
    <table class="enterprise-table">
      <thead><tr>${sortHeader("Subject", "activities", "subject")}${showAccount ? sortHeader("Account", "activities", "account") : ""}${sortHeader("Priority", "activities", "priority")}${sortHeader("Assigned", "activities", "assigned")}${sortHeader("Due", "activities", "due")}${sortHeader("Status", "activities", "status")}</tr></thead>
      <tbody>
        ${page.items.map((a) => `
          <tr>
            <td><strong>${escapeHtml(a.subject)}</strong><br /><span class="muted">${escapeHtml(a.policyNumber)}</span></td>
            ${showAccount ? `<td>${escapeHtml(getAccount(a.accountId)?.name || a.accountId)}</td>` : ""}
            <td>${status(a.priority)}</td>
            <td>${escapeHtml(a.assignedTo)}</td>
            <td>${date(a.due)}</td>
            <td>${status(a.status)}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
    ${page.footer}
  `;
}

function driverTable(drivers) {
  const rows = sortRows(filterRows(drivers, (d) => [d.id, d.name, d.licenseNumber, d.licenseState, d.verification, d.underwritingStatus]), "drivers", {
    driver: (d) => d.id,
    name: (d) => d.name,
    license: (d) => d.licenseNumber,
    status: (d) => d.verification
  });
  if (!rows.length) return `<div class="empty">No drivers found.</div>`;
  const page = paginate("drivers", rows);
  return `
    <table class="enterprise-table">
      <thead><tr>${sortHeader("Driver", "drivers", "driver")}${sortHeader("Name", "drivers", "name")}${sortHeader("License", "drivers", "license")}${sortHeader("Status", "drivers", "status")}</tr></thead>
      <tbody>
        ${page.items.map((d) => `
          <tr class="clickable ${state.selectedDriverId === d.id ? "selected-row" : ""}" data-action="select-driver" data-driver-id="${d.id}">
            <td><strong>${d.id}</strong></td>
            <td>${escapeHtml(d.name)}<br /><span class="muted">${escapeHtml(d.relationship)}</span></td>
            <td>${escapeHtml(d.licenseState)} ${escapeHtml(d.licenseNumber)}</td>
            <td>${status(d.verification)}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
    ${page.footer}
  `;
}

function claimTable(claims) {
  const rows = sortRows(filterRows(claims, (c) => [c.id, c.claimant, c.policyNumber, c.type, c.status]), "claims", {
    claim: (c) => c.id,
    policy: (c) => c.policyNumber,
    claimant: (c) => c.claimant,
    type: (c) => c.type,
    status: (c) => c.status,
    incurred: (c) => c.incurred
  });
  if (!rows.length) return `<div class="empty">No claims found.</div>`;
  const page = paginate("claims", rows);
  return `
    <table class="enterprise-table">
      <thead><tr>${sortHeader("Claim", "claims", "claim")}${sortHeader("Policy", "claims", "policy")}${sortHeader("Claimant", "claims", "claimant")}${sortHeader("Type", "claims", "type")}${sortHeader("Status", "claims", "status")}${sortHeader("Incurred", "claims", "incurred")}</tr></thead>
      <tbody>
        ${page.items.map((c) => `<tr><td><strong>${c.id}</strong><br /><span class="muted">${date(c.lossDate)}</span></td><td>${escapeHtml(c.policyNumber)}</td><td>${escapeHtml(c.claimant)}</td><td>${escapeHtml(c.type)}</td><td>${status(c.status)}</td><td>${money(c.incurred)}</td></tr>`).join("")}
      </tbody>
    </table>
    ${page.footer}
  `;
}

function renderDocuments(documents) {
  if (!documents.length) return `<div class="empty">No documents found.</div>`;
  return `
    <div class="table-wrap">
      ${table(["Name", "Status", "Type", "Section", "Updated", "Hidden"], documents.map((d) => [d.name, status(d.status), d.type, d.section, date(d.updated), d.hidden ? "Yes" : "No"]))}
    </div>
  `;
}

function renderNotes(notes) {
  if (!notes.length) return `<div class="empty">No notes found.</div>`;
  return notes.map((n) => `
    <article class="note">
      <div class="note-head"><strong>${escapeHtml(n.topic)}</strong><span>${escapeHtml(n.author)} - ${date(n.created)}</span></div>
      <div>${escapeHtml(n.text)}</div>
    </article>
  `).join("");
}

function renderRiskIssues(issues, compact) {
  if (!issues.length) return `<div class="empty">No underwriting issues.</div>`;
  return `
    <div class="grid">
      ${issues.map((i) => `
        <div class="risk-card ${i.status === "Approved" ? "approved" : ""}">
          <div class="page-head" style="margin-bottom: 6px">
            <div><strong>${escapeHtml(i.title)}</strong><div class="muted">${escapeHtml(i.reason)}</div></div>
            <div>${status(i.status)}</div>
          </div>
          ${compact ? "" : `<div class="mini-stack"><span class="tag">Blocking ${escapeHtml(i.blocking)}</span><span class="tag">Authority ${escapeHtml(i.authority)}</span><span class="tag">Value ${escapeHtml(i.value)}</span></div>`}
        </div>
      `).join("")}
    </div>
  `;
}

function table(headers, rows) {
  if (!rows.length) return `<div class="empty">No rows.</div>`;
  return `
    <table class="enterprise-table">
      <thead><tr>${headers.map((h) => `<th>${escapeHtml(h)}</th>`).join("")}</tr></thead>
      <tbody>
        ${rows.map((row) => `<tr>${row.map((cell) => `<td>${typeof cell === "string" && cell.includes("<") ? cell : escapeHtml(String(cell))}</td>`).join("")}</tr>`).join("")}
      </tbody>
    </table>
  `;
}

function tableToolbar(scope, placeholder) {
  return `
    <div class="table-toolbar" data-table-scope="${scope}">
      <input class="search-input compact" data-search placeholder="${escapeAttr(placeholder)}" value="${escapeAttr(state.searchText)}" />
      <select aria-label="Filter ${escapeAttr(scope)}">
        <option>All statuses</option>
        <option>Open</option>
        <option>Quoted</option>
        <option>Approved</option>
      </select>
    </div>
  `;
}

function sortHeader(label, scope, key) {
  const active = state.sortScope === scope && state.sortKey === key;
  const arrow = active ? (state.sortDir === "asc" ? " up" : " down") : "";
  return `<th><button class="th-sort${arrow}" data-action="sort-table" data-scope="${scope}" data-key="${key}">${escapeHtml(label)}</button></th>`;
}

function filterRows(rows, picker) {
  const query = state.searchText.trim().toLowerCase();
  if (!query) return rows;
  return rows.filter((row) => picker(row).join(" ").toLowerCase().includes(query));
}

function sortRows(rows, scope, accessors) {
  if (state.sortScope !== scope || !state.sortKey || !accessors[state.sortKey]) return rows;
  const dir = state.sortDir === "desc" ? -1 : 1;
  return [...rows].sort((a, b) => {
    const av = accessors[state.sortKey](a);
    const bv = accessors[state.sortKey](b);
    if (typeof av === "number" && typeof bv === "number") return (av - bv) * dir;
    return String(av).localeCompare(String(bv)) * dir;
  });
}

function paginate(scope, rows) {
  const pageSize = 6;
  const pages = Math.max(1, Math.ceil(rows.length / pageSize));
  const current = Math.min(Math.max(1, state.tablePages[scope] || 1), pages);
  const start = (current - 1) * pageSize;
  return {
    items: rows.slice(start, start + pageSize),
    footer: `
      <div class="table-footer">
        <span>${rows.length} rows - Page ${current} of ${pages}</span>
        <div class="pagination">
          <button class="btn compact" data-action="page-prev" data-scope="${scope}" ${current === 1 ? "disabled" : ""}>Previous</button>
          <button class="btn compact" data-action="page-next" data-scope="${scope}" ${current === pages ? "disabled" : ""}>Next</button>
        </div>
      </div>
    `
  };
}

function renderStickyActions() {
  if (!state.user) return "";
  return `
    <div class="sticky-actions" role="toolbar" aria-label="Workflow actions">
      <button class="btn" data-action="driver-save">Save</button>
      <button class="btn" data-action="generate-quote">Quote</button>
      <button class="btn success" data-action="bind-submission">Bind</button>
      <button class="btn primary" data-action="issue-submission">Submit</button>
      <button class="btn ghost" data-action="cancel-action">Cancel</button>
    </div>
  `;
}

function renderModal() {
  if (!state.activeModal) return "";
  if (state.activeModal === "driver") {
    return `
      <div class="modal-backdrop" data-action="close-modal">
        <form class="modal" data-form="new-driver" onclick="event.stopPropagation()">
          <div class="modal-head">
            <h2>Add Driver</h2>
            <button class="btn icon compact" type="button" data-action="close-modal" aria-label="Close">x</button>
          </div>
          <div class="field-grid">
            <div class="field"><label>Full name</label><input name="name" required /></div>
            <div class="field"><label>Date of birth</label><input type="date" name="dob" required /></div>
            <div class="field"><label>License number</label><input name="licenseNumber" required /></div>
            <div class="field"><label>License state</label><select name="licenseState">${optionSet(["CA", "WI", "WA", "TX", "NY", "IL"], "CA")}</select></div>
            <div class="field"><label>Policy / Job</label><input name="policyNumber" value="${escapeAttr(state.selectedPolicyId)}" /></div>
            <div class="field"><label>Relationship</label><select name="relationship">${optionSet(["Named Insured", "Spouse", "Employee Driver", "Household Driver"], "Employee Driver")}</select></div>
          </div>
          <div class="modal-actions">
            <button class="btn ghost" type="button" data-action="close-modal">Cancel</button>
            <button class="btn primary" type="submit">Add Driver</button>
          </div>
        </form>
      </div>
    `;
  }
  return "";
}

function optionSet(options, selected) {
  return options.map((option) => `<option ${option === selected ? "selected" : ""}>${escapeHtml(option)}</option>`).join("");
}

function handleClick(event) {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;

  if (action === "tab") {
    state.activeTab = target.dataset.tab;
    state.searchText = "";
  }

  if (action === "toggle-sidebar") state.sidebarCollapsed = !state.sidebarCollapsed;
  if (action === "logout") state.user = null;
  if (action === "modal") state.activeModal = target.dataset.modal;
  if (action === "close-modal") state.activeModal = null;
  if (action === "workflow-toast") toast("Workflow step is shown in the submission wizard.");

  if (action === "open-new-account") {
    state.activeTab = "accounts";
    state.newAccountOpen = true;
  }

  if (action === "close-new-account") state.newAccountOpen = false;

  if (action === "select-account") {
    state.selectedAccountId = target.dataset.accountId;
    state.activeTab = "accounts";
    state.newAccountOpen = false;
  }

  if (action === "select-policy") {
    state.selectedPolicyId = target.dataset.policyNumber;
    state.activeTab = "policies";
  }

  if (action === "select-submission") {
    state.selectedSubmissionId = target.dataset.submissionId;
    state.activeTab = "submission";
    state.wizardStep = "product";
  }

  if (action === "select-driver") {
    state.selectedDriverId = target.dataset.driverId;
    state.activeTab = "drivers";
  }

  if (action === "account-section") state.accountSection = target.dataset.section;
  if (action === "policy-section") state.policySection = target.dataset.section;
  if (action === "wizard-step") state.wizardStep = target.dataset.step;
  if (action === "open-wizard-step") {
    state.activeTab = "submission";
    state.wizardStep = target.dataset.step;
  }
  if (action === "wizard-next") moveWizard(1);
  if (action === "wizard-prev") moveWizard(-1);
  if (action === "sort-table") {
    const sameColumn = state.sortScope === target.dataset.scope && state.sortKey === target.dataset.key;
    state.sortScope = target.dataset.scope;
    state.sortKey = target.dataset.key;
    state.sortDir = sameColumn && state.sortDir === "asc" ? "desc" : "asc";
  }
  if (action === "page-prev" || action === "page-next") {
    const scope = target.dataset.scope;
    const current = state.tablePages[scope] || 1;
    state.tablePages[scope] = Math.max(1, current + (action === "page-next" ? 1 : -1));
  }

  if (action === "new-submission") createSubmission();
  if (action === "select-product") updateSubmission({ lob: target.dataset.lob });
  if (action === "run-risk") runRiskAnalysis();
  if (action === "approve-issues") approveIssues();
  if (action === "generate-quote") generateQuote();
  if (action === "new-version") createQuoteVersion();
  if (action === "bind-submission") bindSubmission(false);
  if (action === "issue-submission") bindSubmission(true);
  if (action === "close-submission") closeSubmission(target.dataset.closeStatus);
  if (action === "policy-action") startPolicyAction(target.dataset.kind);
  if (action === "add-note") addNote();
  if (action === "add-document") addDocument();
  if (action === "driver-verify") verifyDriver();
  if (action === "driver-save") toast("Changes saved.");
  if (action === "cancel-action") toast("Action cancelled.");
  if (action === "reset-demo") {
    localStorage.removeItem(STORE_KEY);
    state = structuredClone(defaultState);
    toast("Demo data reset.");
  }

  saveState();
  render();
}

function handleSubmit(event) {
  const form = event.target.closest("form[data-form]");
  if (!form) return;
  event.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  if (form.dataset.form === "login") {
    state.user = { name: data.name || "Pavan Kumar", role: data.role || "Producer" };
    state.activeTab = "desktop";
    toast("Signed in.");
  }
  if (form.dataset.form === "new-account") {
    const id = `A-${10000 + state.accounts.length + 90}`;
    const account = {
      id,
      name: data.name,
      type: data.type,
      status: "Pending",
      tier: data.tier,
      address: data.address,
      email: data.email,
      phone: data.phone,
      officialId: data.officialId,
      producer: data.producer,
      producerCode: data.producerCode,
      primaryContact: data.primaryContact || data.name,
      created: isoToday(),
      settlementCurrency: "USD",
      coverageCurrency: "USD"
    };
    state.accounts.unshift(account);
    state.contacts.unshift({ id: `C-${Date.now()}`, accountId: id, name: account.primaryContact, role: "Primary Named Insured", phone: account.phone, email: account.email });
    state.selectedAccountId = id;
    state.newAccountOpen = false;
    toast("Account created.");
  }
  if (form.dataset.form === "driver-update") {
    const driver = getDriver(state.selectedDriverId);
    if (driver) {
      Object.assign(driver, data);
      toast("Driver details saved.");
    }
  }
  if (form.dataset.form === "new-driver") {
    const accountId = getPolicy(data.policyNumber)?.accountId || state.selectedAccountId;
    const driver = {
      id: `D-${2200 + state.drivers.length + 1}`,
      accountId,
      policyNumber: data.policyNumber || state.selectedPolicyId,
      name: data.name,
      dob: data.dob,
      gender: "Non-disclosed",
      maritalStatus: "Single",
      phone: "",
      email: "",
      address: getAccount(accountId)?.address || "",
      licenseNumber: data.licenseNumber,
      licenseState: data.licenseState,
      licenseStatus: "Pending",
      licensedDate: "",
      expirationDate: "",
      relationship: data.relationship,
      assignment: "Unassigned",
      riskScore: 10,
      verification: "Pending MVR",
      underwritingStatus: "Pending"
    };
    state.drivers.unshift(driver);
    state.selectedDriverId = driver.id;
    state.activeModal = null;
    state.activeTab = "drivers";
    toast("Driver added.");
  }
  saveState();
  render();
}

function handleChange(event) {
  const target = event.target;
  if (target.matches("[data-submission-field]")) {
    updateSubmission({ [target.dataset.submissionField]: target.value }, false);
  }
  if (target.matches("[data-number-field]")) {
    updateSubmission({ [target.dataset.numberField]: Number(target.value || 0) }, false);
  }
  if (target.matches("[data-qualification]")) {
    const submission = getSubmission(state.selectedSubmissionId);
    if (submission) submission.qualifications[target.dataset.qualification] = target.value;
  }
  saveState();
}

function handleInput(event) {
  if (event.target.matches("[data-search]")) {
    state.searchText = event.target.value;
    saveState();
    render();
  }
}

function handleKeydown(event) {
  if (!event.target.matches("[data-quickjump]") || event.key !== "Enter") return;
  const value = event.target.value.trim();
  event.target.value = "";
  quickJump(value);
}

function quickJump(value) {
  const lower = value.toLowerCase();
  const accountMatch = value.match(/account\s+([a-z]-?\d+)/i);
  const policyMatch = value.match(/policy\s+([a-z]+-?\d+)/i);
  const driverMatch = value.match(/driver\s+([a-z]-?\d+)/i);
  if (accountMatch) {
    const found = state.accounts.find((a) => a.id.toLowerCase() === accountMatch[1].toLowerCase());
    if (found) {
      state.selectedAccountId = found.id;
      state.activeTab = "accounts";
      toast(`Opened account ${found.id}.`);
    } else {
      toast("Account not found.");
    }
  } else if (policyMatch) {
    const found = state.policies.find((p) => p.number.toLowerCase() === policyMatch[1].toLowerCase());
    if (found) {
      state.selectedPolicyId = found.number;
      state.activeTab = "policies";
      toast(`Opened policy ${found.number}.`);
    } else {
      toast("Policy not found.");
    }
  } else if (driverMatch) {
    const found = state.drivers.find((d) => d.id.toLowerCase() === driverMatch[1].toLowerCase());
    if (found) {
      state.selectedDriverId = found.id;
      state.activeTab = "drivers";
      toast(`Opened driver ${found.id}.`);
    } else {
      toast("Driver not found.");
    }
  } else if (["desktop", "account", "accounts", "policy", "policies", "search", "team", "admin", "administration", "drivers", "driver", "claims", "renewals"].includes(lower)) {
    state.activeTab = lower === "account" ? "accounts" : lower === "policy" ? "policies" : lower === "admin" ? "admin" : lower === "administration" ? "admin" : lower;
    if (lower === "driver") state.activeTab = "drivers";
  } else {
    state.searchText = value;
    state.activeTab = "search";
  }
  saveState();
  render();
}

function createSubmission() {
  const account = getAccount(state.selectedAccountId) || state.accounts[0];
  const id = `S-${88000 + state.submissions.length + 41}`;
  const submission = {
    id,
    accountId: account.id,
    lob: "Businessowners",
    quoteType: "Full Application",
    status: "Draft",
    effective: isoToday(),
    expiration: plusYear(isoToday()),
    producer: account.producer,
    producerCode: account.producerCode,
    uwCompany: "Pinnacle Mutual",
    stage: "Product",
    premium: 0,
    revenue: 0,
    payroll: 0,
    locations: 1,
    vehicles: 0,
    losses: 0,
    versions: [],
    qualifications: { eligible: "Yes", priorLosses: "No", hazardous: "No" }
  };
  state.submissions.unshift(submission);
  state.transactions.unshift({ id: `T-${Date.now()}`, accountId: account.id, policyNumber: id, type: "Submission", status: "Draft", effective: submission.effective, premium: 0 });
  state.selectedSubmissionId = id;
  state.activeTab = "submission";
  state.wizardStep = "product";
  toast("New submission started.");
}

function updateSubmission(patch, rerender = true) {
  const submission = getSubmission(state.selectedSubmissionId);
  if (!submission) return;
  Object.assign(submission, patch);
  if (rerender) {
    saveState();
    render();
  }
}

function moveWizard(delta) {
  const idx = wizardSteps.findIndex(([id]) => id === state.wizardStep);
  const next = Math.max(0, Math.min(wizardSteps.length - 1, idx + delta));
  state.wizardStep = wizardSteps[next][0];
  const submission = getSubmission(state.selectedSubmissionId);
  if (submission) submission.stage = wizardSteps[next][1];
}

function runRiskAnalysis() {
  const submission = getSubmission(state.selectedSubmissionId);
  if (!submission) return;
  const existing = state.uwIssues.filter((i) => i.submissionId === submission.id);
  const newIssues = [];
  if (submission.qualifications.eligible === "No") {
    newIssues.push(["Eligibility review", "Quote", "Applicant did not pass base eligibility question."]);
  }
  if (submission.qualifications.priorLosses === "Yes" || submission.losses > 2) {
    newIssues.push(["Prior loss review", "Quote", "Loss history requires underwriter review."]);
  }
  if (submission.qualifications.hazardous === "Yes") {
    newIssues.push(["Hazardous operations", "Bind", "Operations are outside producer bind authority."]);
  }
  if (submission.revenue > 3000000 || submission.payroll > 1000000) {
    newIssues.push(["Large account authority", "Bind", "Premium basis exceeds producer authority."]);
  }
  newIssues.forEach(([title, blocking, reason]) => {
    if (!existing.some((i) => i.title === title)) {
      state.uwIssues.push({
        id: `UW-${Date.now()}-${Math.round(Math.random() * 1000)}`,
        submissionId: submission.id,
        policyNumber: "",
        accountId: submission.accountId,
        title,
        blocking,
        status: "Open",
        authority: blocking === "Bind" ? "Producer bind authority" : "Quote authority",
        value: "Referral required",
        reason
      });
    }
  });
  toast(newIssues.length ? "Risk analysis completed with referrals." : "Risk analysis completed with no new issues.");
}

function approveIssues() {
  const submission = getSubmission(state.selectedSubmissionId);
  if (!submission) return;
  state.uwIssues.forEach((i) => {
    if (i.submissionId === submission.id) i.status = "Approved";
  });
  toast("Open underwriting issues approved.");
}

function generateQuote() {
  const submission = getSubmission(state.selectedSubmissionId);
  if (!submission) return;
  const product = products.find((p) => p.lob === submission.lob) || products[0];
  const exposure =
    product.base +
    Number(submission.revenue || 0) * 0.003 +
    Number(submission.payroll || 0) * 0.004 +
    Number(submission.locations || 0) * 850 +
    Number(submission.vehicles || 0) * 420 +
    Number(submission.losses || 0) * 1200;
  const quickFactor = submission.quoteType === "Quick Quote" ? 0.92 : 1;
  const premium = Math.round((exposure * quickFactor) / 10) * 10;
  submission.premium = premium;
  submission.status = "Quoted";
  submission.stage = "Quote";
  if (!submission.versions.length) {
    submission.versions.push({ name: "Version 1 - Standard", premium, status: "Quoted" });
  } else {
    submission.versions[0].premium = premium;
  }
  syncTransaction(submission);
  toast("Quote generated.");
}

function createQuoteVersion() {
  const submission = getSubmission(state.selectedSubmissionId);
  if (!submission) return;
  if (!submission.premium) generateQuote();
  const base = submission.premium || 0;
  const index = submission.versions.length + 1;
  submission.versions.push({ name: `Version ${index} - Adjusted`, premium: Math.max(500, Math.round(base * (0.9 + index * 0.03))), status: "Quoted" });
  toast("New quote version created.");
}

function bindSubmission(issue) {
  const submission = getSubmission(state.selectedSubmissionId);
  if (!submission) return;
  const openBlocking = state.uwIssues.some((i) => i.submissionId === submission.id && i.status === "Open" && ["Bind", "Quote"].includes(i.blocking));
  if (!submission.premium) {
    toast("Generate a quote before binding.");
    return;
  }
  if (openBlocking) {
    toast("Approve open underwriting issues before bind.");
    return;
  }
  submission.status = issue ? "Issued" : "Bound";
  submission.stage = issue ? "Issued" : "Bound";
  syncTransaction(submission);

  const accountPolicies = state.policies.filter((p) => p.accountId === submission.accountId).length;
  const prefix = submission.lob.split(" ").map((w) => w[0]).join("").slice(0, 3).toUpperCase();
  const number = `${prefix}-${460000 + accountPolicies + state.policies.length}`;
  state.policies.unshift({
    number,
    accountId: submission.accountId,
    lob: submission.lob,
    status: issue ? "In Force" : "Bound",
    effective: submission.effective,
    expiration: submission.expiration,
    premium: submission.premium,
    producer: submission.producer,
    underwriter: "Nina Patel",
    uwCompany: submission.uwCompany,
    paymentPlan: "Quarterly",
    coverages: defaultCoverages(submission.lob)
  });
  state.selectedPolicyId = number;
  state.activeTab = "policies";
  toast(issue ? "Policy issued." : "Submission bound.");
}

function closeSubmission(closeStatus) {
  const submission = getSubmission(state.selectedSubmissionId);
  if (!submission) return;
  submission.status = closeStatus;
  submission.stage = closeStatus;
  syncTransaction(submission);
  toast(`Submission marked ${closeStatus}.`);
}

function syncTransaction(submission) {
  let tx = state.transactions.find((t) => t.policyNumber === submission.id);
  if (!tx) {
    tx = { id: `T-${Date.now()}`, accountId: submission.accountId, policyNumber: submission.id, type: "Submission", status: submission.status, effective: submission.effective, premium: submission.premium };
    state.transactions.unshift(tx);
  }
  tx.status = submission.status;
  tx.premium = submission.premium;
  tx.effective = submission.effective;
}

function startPolicyAction(kind) {
  const policy = getPolicy(state.selectedPolicyId);
  if (!policy) return;
  const tx = { id: `T-${Date.now()}`, accountId: policy.accountId, policyNumber: policy.number, type: kind, status: "Open", effective: isoToday(), premium: 0 };
  state.transactions.unshift(tx);
  state.activities.unshift({
    id: `ACT-${Date.now()}`,
    subject: `${kind} started for ${policy.number}`,
    accountId: policy.accountId,
    policyNumber: policy.number,
    priority: kind === "Cancellation" ? "High" : "Normal",
    status: "Open",
    assignedTo: state.user.name,
    due: addDays(isoToday(), kind === "Renewal" ? 10 : 3),
    queue: kind === "Renewal" ? "Renewals" : "My Activities"
  });
  toast(`${kind} transaction started.`);
}

function addNote() {
  const scopeAccountId = state.activeTab === "policies" ? getPolicy(state.selectedPolicyId)?.accountId : state.selectedAccountId;
  const policyNumber = state.activeTab === "policies" ? state.selectedPolicyId : "";
  const text = prompt("Enter note text");
  if (!text) return;
  state.notes.unshift({
    id: `N-${Date.now()}`,
    accountId: scopeAccountId,
    policyNumber,
    author: state.user.name,
    topic: policyNumber ? "Policy" : "Account",
    text,
    created: isoToday()
  });
  toast("Note added.");
}

function addDocument() {
  const scopeAccountId = state.activeTab === "policies" ? getPolicy(state.selectedPolicyId)?.accountId : state.selectedAccountId;
  const policyNumber = state.activeTab === "policies" ? state.selectedPolicyId : "";
  const name = prompt("Document name");
  if (!name) return;
  state.documents.unshift({
    id: `DOC-${Date.now()}`,
    scope: policyNumber ? "policy" : "account",
    accountId: scopeAccountId,
    policyNumber,
    name,
    status: "Draft",
    type: "Uploaded",
    section: "Correspondence",
    hidden: false,
    updated: isoToday()
  });
  toast("Document added.");
}

function verifyDriver() {
  const driver = getDriver(state.selectedDriverId);
  if (!driver) return;
  driver.verification = "Verified";
  driver.underwritingStatus = driver.riskScore > 35 ? "Referral" : "Approved";
  state.activities
    .filter((activity) => activity.queue === "Driver Verification" && activity.accountId === driver.accountId)
    .forEach((activity) => {
      activity.status = "Complete";
    });
  toast("Driver MVR verification completed.");
}

function defaultCoverages(lob) {
  if (lob === "Personal Auto") return [["Bodily Injury", "$250,000 / $500,000"], ["Property Damage", "$100,000"], ["Comprehensive Deductible", "$500"]];
  if (lob === "Workers Compensation") return [["Employers Liability", "$1,000,000"], ["Payroll Basis", "Reported"], ["Final Audit", "Physical"]];
  if (lob === "Commercial Property") return [["Building", "$2,000,000"], ["Business Personal Property", "$500,000"], ["Business Income", "$300,000"]];
  return [["General Liability Aggregate", "$2,000,000"], ["Each Occurrence", "$1,000,000"], ["Medical Expense", "$10,000"]];
}

function getAccount(id) {
  return state.accounts.find((a) => a.id === id);
}

function getPolicy(number) {
  return state.policies.find((p) => p.number === number);
}

function getSubmission(id) {
  return state.submissions.find((s) => s.id === id);
}

function getDriver(id) {
  return state.drivers.find((d) => d.id === id);
}

function accountSectionCount(accountId, section) {
  const counts = {
    contacts: state.contacts.filter((x) => x.accountId === accountId).length,
    locations: state.locations.filter((x) => x.accountId === accountId).length,
    transactions: state.transactions.filter((x) => x.accountId === accountId).length,
    submissions: state.submissions.filter((x) => x.accountId === accountId).length,
    documents: state.documents.filter((x) => x.accountId === accountId).length,
    notes: state.notes.filter((x) => x.accountId === accountId).length
  };
  return counts[section] ?? "";
}

function policySectionCount(policyNumber, section) {
  const counts = {
    notes: state.notes.filter((x) => x.policyNumber === policyNumber).length,
    documents: state.documents.filter((x) => x.policyNumber === policyNumber).length,
    transactions: state.transactions.filter((x) => x.policyNumber === policyNumber).length,
    risk: state.uwIssues.filter((x) => x.policyNumber === policyNumber || x.accountId === getPolicy(policyNumber)?.accountId).length
  };
  return counts[section] ?? "";
}

function status(value) {
  const text = String(value || "");
  const lower = text.toLowerCase();
  let color = "blue";
  if (["active", "in force", "approved", "issued", "complete", "bound", "normal"].some((x) => lower.includes(x))) color = "green";
  if (["draft", "quoted", "pending", "open", "high"].some((x) => lower.includes(x))) color = "amber";
  if (["declined", "withdrawn", "not taken", "canceled", "red"].some((x) => lower.includes(x))) color = "red";
  if (["platinum", "renewal", "low"].some((x) => lower.includes(x))) color = "violet";
  return `<span class="status ${color}">${escapeHtml(text)}</span>`;
}

function money(value) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(Number(value || 0));
}

function date(value) {
  if (!value) return "";
  const parsed = new Date(`${value}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return value;
  return parsed.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });
}

function isoToday() {
  return new Date().toISOString().slice(0, 10);
}

function addDays(iso, days) {
  const d = new Date(`${iso}T00:00:00`);
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

function plusYear(iso) {
  const d = new Date(`${iso}T00:00:00`);
  d.setFullYear(d.getFullYear() + 1);
  return d.toISOString().slice(0, 10);
}

function groupBy(items, key) {
  return items.reduce((acc, item) => {
    const value = item[key] || "Other";
    acc[value] ||= [];
    acc[value].push(item);
    return acc;
  }, {});
}

function initials(name) {
  return String(name || "User").split(/\s+/).slice(0, 2).map((x) => x[0]).join("").toUpperCase();
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/`/g, "&#096;");
}

function toast(message) {
  toastRoot.innerHTML = `<div class="toast">${escapeHtml(message)}</div>`;
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => {
    toastRoot.innerHTML = "";
  }, 2400);
}
