**WHO Digital Transformation Handbook for Health Workforce Registries and Planning**

**Manuscript Outline**

# **About this draft**

Each chapter gives objectives, key messages, proposed sections with the main points to be covered, suggested figures and tables, tools and checklists, and the outputs that a country would be expected to produce. The content draws on published WHO guidance listed at the end of this document. 

**Questions for the TWG**

* Does the five-part structure work for both health workforce and digital readers?  
* Is anything missing that countries are asking for?  
* Is anything included that does not belong in this handbook?   
* Is the level of technical detail right for the main text, or should some of Part 2 move to annexes or online resources?

**Points for discussion** 

* **One registry or one set of information?** The WHO 2015 minimum data set describes the registry as “the single authoritative source”, and the draft DPI-H reference architecture appears to describe it as a centralized system. This draft treats the registry as one trusted set of information that may sit in one system or several. The TWG should agree on the wording.

* **Boundary with HRIS:** The draft treats human resource management functions as out of scope. The TWG should confirm where the line is drawn, since many countries run the registry inside an HRIS.

* **Minimum data set:** The draft proposes updating the 2015 minimum data set within this handbook. The TWG should confirm whether the update belongs here or in a separate product.

* **Unique health worker identification:** Should this topic have a dedicated chapter?

* **Which health workers?** The draft assumes regulated professions first, extending to other occupations including community health workers and the private sector. The TWG should confirm the scope.

* **Overlap between chapters:** Governance appears in three chapters (Governance and Stewardship, Interoperability, Data Quality and Governance). Requirements appear in three (User Personas and Use Cases, Functional Requirements, Business Process Redesign). Use cases appear in two (User Personas and Use Cases, Illustrative Use Cases). Consider merging or cross-referencing, and renaming “Data Quality and Governance” to “Data Quality”.

* **Step-by-step or modular?** Part 3 is drafted as a pathway that countries can enter at different points, taking the parts they need. Is this the right framing.

* **Case studies:** No countries have been selected yet. The TWG should nominate cases.

# **Handbook at a glance**

| Part | Chapter | Sections |
| :---- | :---- | :---- |
| **Part 0\. Introduction** | 1\. Why Digital Health Workforce Registries Matter | Global challenges; Value proposition; Registry as digital public infrastructure; Benefits and outcomes |
|  | 2\. Scope and Boundaries | Included topics; Excluded topics; Target audiences |
|  | 3\. Digital Transformation Approach  | DIIG alignment; Transformation principles; Country pathway |
| **Part 1\. Foundations** | 4\. Purpose and Role of a Registry | Definitions; Authoritative source; Health worker lifecycle; Strategic uses |
|  | 5\. User Personas and Use Cases | Personas; Priority use cases; User stories; Requirements derivation |
|  | 6\. Governance and Stewardship | Institutions; Legal foundations; Data stewardship; Sustainability |
|  | 7\. Functional Requirements | Identity management; Records; Lifecycle management; Verification services; Analytics |
|  | 8\. Digital Architecture Principles | Architecture patterns; Federation; Scalability; Technology neutrality  |
| **Part 2\. Technical Design** | 9\. Registry within Ecosystem | System landscape; Data flows; Architecture examples |
|  | 10\. Interoperability | Standards; APIs; Data exchange patterns; Governance |
|  | 11\. Data Standards and Minimum Dataset | Core dataset; Classifications; Metadata; NHWA mapping |
|  | 12\. Privacy, Security and Trust | Privacy by design; Cybersecurity; Access control; Audit trails |
|  | 13\. Data Quality Management  | Quality dimensions; Validation; Monitoring  |
| **Part 3\.  Country Implementation** | 14\. Preparing for Transformation | Leadership; Teams; Readiness; Stakeholder engagement |
|  | 15\. Business Process Redesign | Current state mapping; Future workflows; Requirements |
|  | 16\. Planning and Procurement | Options analysis; Procurement approaches; Risk management |
|  | 17\. Implementation and Deployment | Migration; Testing; Rollout; Operations |
|  | 18\. Change Management | Communications; Adoption; Capacity strengthening |
|  | 19\. Monitoring and Continuous Improvement  | KPIs; Maturity; Evaluation |
| **Part 4\. Examples and Resources** | 20\. Illustrative Use Cases | Licensing; Verification; Emergency response; Mobility |
|  | 21\. Country Case Studies | Centralized; Federated; Fragile settings; Lessons learned |
|  | 22\. Tools and Templates | Checklists; Roadmaps; Assessment tools  |
| **Annexes** | Minimum Data Set; Data Dictionary; Governance Template; User Personas;  Functional Requirements Catalogue; Interoperability Models; Readiness Assessment; Maturity Model; Glossary; NHWA Mapping |  |

# **Part 0\. Introduction**

**Purpose:** This part explains why the handbook exists, what it covers and does not cover, who it is for, and the approach it takes: helping countries move from where they are today towards digital, interoperable health workforce registries built on shared digital building blocks.

## **Chapter 1\. Why Digital Health Workforce Registries Matter**

**Chapter objectives**

This chapter will help readers to:

* Explain the health workforce data problems that a digital registry helps to solve.  
* Describe the value of a registry for health workers, regulators, employers, planners and the public.  
* Position the registry as a shared, reusable part of a country's digital public infrastructure for health.

**Key messages**

* Countries cannot plan, deploy, pay or protect a workforce that they cannot count or verify.  
* A registry is a trusted, shared set of core information about health workers. It does not have to be one single system.  
* Most countries already hold the data in regulatory, payroll, human resources and training systems. The gap is that these systems do not connect.  
* Investing once in a shared registry serves many uses: regulation, service delivery, planning, emergencies and reporting.

**Proposed chapter sections**

### **1.1 Global challenges**

* WHO projects a global shortfall of about 11 million health workers by 2030, with uneven distribution within and between countries.  
* Workforce data are spread across ministries, regulatory councils, employers, training institutions and the private sector, often on paper or in stand-alone systems.  
* The results are duplicate and “ghost” records, unverified credentials, slow licensing, weak planning and difficulty reporting to National Health Workforce Accounts (NHWA).

### **1.2 Value proposition**

* One trusted identity and record for each health worker, reused by every system that needs it (“capture once, use many times”).  
* Faster and cheaper administrative processes: registration, licence renewal, verification, deployment and payroll reconciliation.  
* Better evidence for decisions on training, recruitment, distribution, retention and migration.

### **1.3 Registry as digital public infrastructure**

* The draft WHO/ITU reference architecture for digital public infrastructure for health (DPI-H) lists the health workforce registry as a foundational registry, alongside client, facility and product registries.  
* Shared building blocks (identity, registries, data exchange, terminology) are built once and reused by many applications.  
* The registry is publicly governed, interoperable and based on open standards, so countries stay in control and avoid dependence on one supplier.

### **1.4 Benefits and outcomes**

* For health workers: portable and verifiable credentials, simpler renewals, and recognition of training and continuing professional development.  
* For the public and employers: confidence that practitioners are qualified and authorized to practise.  
* For government: reliable workforce numbers for planning, financing, emergency response and international reporting (NHWA, the WHO Global Code of Practice).

**Suggested figures and tables**

* Figure: the registry at the centre, with inputs (training institutions, regulators, employers) and outputs (verification, planning, reporting).  
* Table: common workforce data problems and how a registry addresses each.

**Implementation tools and checklists**

* One-page advocacy brief template for senior decision-makers.  
* Quick checklist: “Do we have a registry problem?”

**Expected outputs for countries**

* A shared problem statement agreed by health workforce and digital leads.  
* A high-level vision for the national registry.

## **Chapter 2\. Scope and Boundaries**

**Chapter objectives**

This chapter will help readers to:

* Define what the handbook covers and what is left to other guidance.  
* Clarify how a registry differs from, and relates to, human resources information systems (HRIS), regulatory, payroll and education systems.  
* Identify the audiences and how each should use the handbook.

**Key messages**

* The handbook covers the registry as a shared foundation, not the full range of human resource management functions.  
* It applies to all health workers a country chooses to include: usually regulated professions first, then other occupations, including community health workers.  
* It is technology-neutral. It describes what a registry must do and exchange, not which product to buy.  
* It builds on existing WHO guidance on NHWA, practitioner regulation and digital health, and does not replace it.

**Proposed sections**

### **2.1 Included topics**

* Purpose, governance, minimum data set, functional requirements and architecture options for a registry.  
* Interoperability with regulators, employers, training institutions, the facility registry, identity systems and NHWA reporting.  
* A phased country pathway from assessment to routine operation, for paper-based, partly digital and fully digital starting points.

### **2.2 Excluded topics**

* Detailed human resource management functions (recruitment, performance appraisal, leave, payroll processing), which belong to HRIS and payroll systems.  
* Design of regulatory policy, scopes of practice and accreditation standards, which are covered by WHO guidance on health practitioner regulation.  
* Workforce planning and labour market analysis methods, and endorsement of specific software products.

### **2.3 Target audiences**

* Decision-makers: ministry of health leadership, health workforce directorates, digital health units, regulators and professional councils.  
* Implementers: enterprise architects, business analysts, software developers, data managers and implementing partners.  
* Supporters: funders, professional associations, training institutions, private sector employers, and WHO regional and country offices.

**Suggested figures and tables**

* Figure: the registry and its neighbouring systems (HRIS, regulatory systems, payroll, education systems, facility registry).  
* Table: in scope, out of scope, and covered by other guidance.  
* Table: reader guide showing which chapters matter most for each audience.

**Implementation tools and checklists**

* Scope definition worksheet: which occupations, sectors, levels and functions are included in the first phase.

**Expected outputs for countries**

* A documented national scope statement for the registry (occupations, sectors, functions and phases).

## **Chapter 3\. Digital Transformation Approach**

**Chapter objectives**

This chapter will help readers to:

* Explain how the handbook applies the WHO Digital Implementation Investment Guide (DIIG) to registries.  
* Describe the principles that guide a registry transformation.  
* Outline a phased pathway that a country can follow, whatever its starting point.

**Key messages**

* Digital transformation changes processes, governance and skills. It is not only about installing software.  
* Start from existing systems and improve them step by step. Full replacement is rarely necessary.  
* Countries enter the pathway at different points and use the parts of the handbook that they need.  
* Design for reuse from the start: standards, shared building blocks and open interfaces.

**Proposed sections**

### **3.1 DIIG alignment**

* The handbook follows the DIIG sequence: form the team, identify challenges, choose interventions, plan implementation, link to the enterprise architecture, budget and monitor.  
* It sits alongside the other WHO digital transformation handbooks (primary health care, health supply chain architecture, health product catalogue) and the SMART Guidelines approach.  
* It gives the health workforce detail that the DPI-H reference architecture does not go into.

### **3.2 Transformation principles**

* Country-owned and publicly governed: meet countries where they are.  
* Interoperable, standards-based, reusable, secure and privacy-protecting by design (in line with the draft DPI-H principles and the Principles for Digital Development).  
* People-centred: designed with health workers, regulators and employers as users.

### **3.3 Country pathway**

* Four broad stages: prepare and assess, design, implement, and operate and improve (detailed in Part 3).  
* Typical starting points: paper registers; stand-alone digital systems in each council or ministry; partly connected systems.  
* The guidance will also be published in a form that digital tools, including AI assistants, can use (for example machine-readable requirements and data dictionary).

**Suggested figures and tables**

* Figure: country pathway showing entry points for different starting points.  
* Table: handbook chapters mapped to DIIG steps.  
* Figure: how this handbook relates to other WHO digital health and health workforce guidance.

**Implementation tools and checklists**

* “Where are we now?” self-placement tool (linked to the maturity model annex).

**Expected outputs for countries**

* An agreed transformation approach and guiding principles.  
* The country's starting point and entry point on the pathway.

# **Part 1\. Foundations**

**Purpose:** This part sets out the common understanding that health workforce and digital teams need before design starts: what a registry is and what it is for, who uses it, who governs it, what it must do, and the architecture principles it should follow.

## **Chapter 4\. Purpose and Role of a Registry**

**Chapter objectives**

This chapter will help readers to:

* Define a health workforce registry and related terms in plain language.  
* Explain what “authoritative source” means and how it can be achieved with one system or several.  
* Show how the registry supports each stage of the health worker life cycle and its main strategic uses.

**Key messages**

* The registry holds a minimum set of trusted information that uniquely identifies each health worker, their qualifications, their authorization to practise and where they work.  
* “Authoritative” refers to the information and the rules for maintaining it, not to a single database.  
* Each data item should have one accountable owner. The registry brings these items together.  
* The registry is not an HRIS, but HRIS, regulatory and payroll systems should all supply data to it and draw on it.

**Proposed sections**

### **4.1 Definitions**

* Working definitions of health workforce registry, professional register, HRIS, health worker, registration, licence and credential (see Glossary annex).  
* Alignment with the WHO 2015 minimum data set definition (“the single authoritative source of health workforce information”) and with the draft DPI-H reference architecture.  
* The difference between a “registry” (the shared national capability) and a “register” (a regulator's legal list of those authorized to practise).

### **4.2 Authoritative source**

* Which institution is the source of truth for each data item, such as identity, qualification, licence status and employment.  
* How records from several sources are matched to one unique health worker identifier.  
* Options: a single national system, or several source systems connected to give one consistent view.

### **4.3 Health worker lifecycle**

* Stages: pre-service education, graduation, registration and licensing, employment and deployment, continuing professional development, renewal, mobility, exit and re-entry.  
* The events at each stage that create or change registry data, and who records them.  
* Link to the NHWA health labour market framework (education, labour force, and serving population health needs).

### **4.4 Strategic uses**

* Regulation and public protection: confirming that practitioners are qualified and in good standing.  
* Planning and management: stock, distribution, skill mix, attrition and migration.  
* Service delivery and digital health: identifying and authorizing health workers in electronic records, prescribing, telehealth and payment systems.

**Suggested figures and tables**

* Figure: health worker life cycle with the data events at each stage.  
* Figure: “one set of information, one or many systems”.  
* Table: registry compared with HRIS, professional register and payroll system.

**Implementation tools and checklists**

* Data ownership matrix template (data item by source institution).  
* Terminology alignment checklist.

**Expected outputs for countries**

* An agreed national definition and purpose statement for the registry.  
* A map of the authoritative source for each data item.

## **Chapter 5\. User Personas and Use Cases**

**Chapter objectives**

This chapter will help readers to:

* Identify the people and systems that supply or use registry information.  
* Prioritize a small set of use cases to drive the first phase.  
* Show how personas, use cases and user stories are turned into requirements.

**Key messages**

* Requirements should come from real users and tasks, not from software features.  
* Systems are users too: many registry “users” are other applications requesting information through interfaces.  
* Start with a few high-value use cases and add more over time.  
* The generic personas and use cases are a starting point. Countries need to adapt them.

**Proposed sections**

### **5.1 Personas**

* People: health worker, registration officer in a regulatory body, employer or facility human resources manager, training institution registrar, workforce planner, member of the public, emergency coordinator.  
* Systems: HRIS, payroll, electronic medical record, facility registry, national identity system, NHWA platform.  
* For each persona: goals, tasks, difficulties, digital skills and connectivity.

### **5.2 Priority use cases**

* Register and license a new graduate; renew a licence; update employment or place of practice.  
* Verify a health worker's status (by an employer, a patient, another system or another country).  
* Produce workforce counts and distribution for planning and NHWA reporting.

### **5.3 User stories**

* Standard format: “As a \[persona\], I need \[capability\], so that \[benefit\].”  
* Worked examples for each priority use case.

### **5.4 Requirements derivation**

* The chain from use case to business process, to functional and non-functional requirements, to data elements.  
* Traceability between each requirement and the use case it serves.  
* Prioritization (must have, should have, could have) to support phased delivery.

**Suggested figures and tables**

* Figure: persona cards.  
* Table: use case overview (actor, trigger, data used, systems involved).  
* Figure: traceability from use case to requirement to data element.

**Implementation tools and checklists**

* Persona template (full generic personas in annex).  
* Use case prioritization matrix (value against feasibility).  
* User story template.

**Expected outputs for countries**

* National personas adapted from the generic set.  
* A prioritized list of use cases for the first phase.  
* An initial set of user stories.

## **Chapter 6\. Governance and Stewardship**

**Chapter objectives**

This chapter will help readers to:

* Describe the institutional arrangements needed to govern a registry across health workforce, regulatory and digital bodies.  
* Identify the legal and policy foundations for collecting, sharing and publishing health worker data.  
* Plan for long-term stewardship, financing and sustainability.

**Key messages**

* Weak governance, not technology, is the most common reason registries stall or fail.  
* The registry needs a clear owner, a mandate, and formal agreements with every institution that supplies data.  
* Health workers' personal data must be protected in law and in practice, and health workers should be able to see and correct their own record.  
* Operating costs and staffing must be budgeted from the start, beyond project funding.

**Proposed sections**

### **6.1 Institutions**

* Roles of the ministry of health (health workforce and digital units), regulatory councils, public service commission, finance and payroll, education ministry and training institutions, private sector and sub-national authorities.  
* Governance structure: steering committee, technical working group, and registry operator or custodian.  
* Decision rights: who approves data standards, access, changes and new connections.

### **6.2 Legal foundations**

* A legal mandate to establish and operate the registry and to require institutions to submit data.  
* Data protection, privacy and consent, including what may be public (for example licence status) and what is restricted.  
* Data-sharing agreements between institutions and, where relevant, across borders.

### **6.3 Data stewardship**

* Named data owners, stewards and custodians for each group of data.  
* Policies for data access, use, retention, correction and release.  
* Health workers' rights to access and correct their own record.

### **6.4 Sustainability**

* Options for recurrent financing: government budget, registration and licensing fees, shared digital infrastructure budgets.  
* Institutional capacity: permanent posts for registry operation, data management and technical support.  
* Managing dependence on suppliers and external partners, including handover and exit planning.

**Suggested figures and tables**

* Figure: model governance structure.  
* Table: responsibility matrix (who is responsible, accountable, consulted and informed) for registry functions.  
* Table: legal and policy instruments typically needed.

**Implementation tools and checklists**

* Governance terms of reference template (annex).  
* Data-sharing agreement template.  
* Legal and policy checklist.

**Expected outputs for countries**

* A designated registry owner and governance body.  
* Signed data-sharing agreements with data-supplying institutions.  
* A costed sustainability plan.

## **Chapter 7\. Functional Requirements**

**Chapter objectives**

This chapter will help readers to:

* Describe the core functions that any health workforce registry should provide.  
* Distinguish minimum functions from optional or advanced ones.  
* Provide a requirements catalogue that countries can adapt for specification and procurement.

**Key messages**

* The core is small: identify each worker uniquely, hold a trusted record, keep it current, and answer queries.  
* Functions can be delivered by one system or shared across several connected systems.  
* Non-functional requirements (security, availability, offline use, languages) matter as much as functions.  
* Requirements should be written so that they can be tested.

**Proposed sections**

### **7.1 Identity management**

* Assign a unique, persistent health worker identifier, linked to the national identity number where available and lawful.  
* Search, match and merge duplicate records across source systems.  
* Manage changes of name and other identity details over a career.

### **7.2 Records**

* Create, view, update and archive the health worker record in line with the minimum data set.  
* Hold supporting evidence, such as certificates, or links to it.  
* Record the source and date of each data item.

### **7.3 Lifecycle management**

* Manage status changes: registered, licensed, suspended, lapsed, retired, deceased, emigrated.  
* Support renewals, recording of continuing professional development, and reminders.  
* Record changes of employment and place of practice over time.

### **7.4 Verification services**

* Confirm registration and licence status in real time for employers, the public and other systems.  
* Issue digital, verifiable credentials or certificates (for example a certificate of good standing).  
* Respond to verification requests from other countries.

### **7.5 Analytics**

* Standard reports and dashboards on stock, distribution, age, sex, occupation and status.  
* Data extracts for NHWA and national planning.  
* Data quality reports for registry managers.

**Suggested figures and tables**

* Figure: overview of registry functions.  
* Table: minimum and advanced functions.  
* Table: sample requirements (identifier, requirement, priority, linked use case).

**Implementation tools and checklists**

* Functional requirements catalogue (annex).  
* Non-functional requirements checklist.

**Expected outputs for countries**

* A national requirements specification, adapted from the catalogue and prioritized by phase.

## **Chapter 8\. Digital Architecture Principles**

**Chapter objectives**

This chapter will help readers to:

* Explain the main architecture options for a registry in non-technical terms.  
* Help countries choose a pattern that fits their governance, existing systems and capacity.  
* Set out principles that keep the registry scalable, reusable and independent of any one product.

**Key messages**

* There is no single correct architecture. The choice depends on how authority over health worker data is distributed in the country.  
* Centralized, federated and hybrid models can all provide one consistent view of the workforce.  
* Architecture should follow governance: do not centralize technically what is decentralized legally.  
* Open standards and interfaces protect the investment whichever product is used.

**Proposed sections**

### **8.1 Architecture patterns**

* The three main patterns and what each means in practice: centralized (one national system holds the master record), federated (source systems keep their data and are linked), and hybrid (a national index with detail held at source).  
* Criteria for choosing: legal mandates, number of regulators, existing systems, connectivity and capacity.  
* Fit with the national digital health enterprise architecture and the registry layer of the draft DPI-H reference architecture.

### **8.2 Federation**

* How several regulators or sub-national registries contribute to a national view through a shared identifier, a common data set and common interfaces.  
* Linking records and resolving conflicts between sources.  
* Responsibilities that stay with each source and those that sit at national level.

### **8.3 Scalability**

* Start with priority occupations or regions and expand without redesign.  
* Performance, availability and hosting options (government data centre or cloud), including for low-connectivity settings.  
* Modular design, so that functions can be added or replaced independently.

### **8.4 Technology neutrality**

* Specify standards and interfaces, not products.  
* Considerations for open-source, commercial and custom-built options, including digital public goods.  
* Avoiding dependence on one supplier: data ownership, data export, documentation and exit clauses.

**Suggested figures and tables**

* Figure: the three architecture patterns side by side.  
* Figure: decision tree for choosing a pattern.  
* Table: comparison of patterns (advantages, risks, prerequisites).

**Implementation tools and checklists**

* Architecture pattern selection checklist.  
* Architecture principles template for national adoption.

**Expected outputs for countries**

* A chosen architecture pattern with the reasons for the choice.  
* An adopted set of national architecture principles for the registry.

# **Part 2\. Technical Design**

**Purpose:** This part gives the technical guidance needed to design a registry that connects with the wider health and government digital ecosystem: where the registry sits, how it exchanges data, what data it holds, and how those data are kept secure and of good quality.

## **Chapter 9\. Registry within Ecosystem**

**Chapter objectives**

This chapter will help readers to:

* Map the systems that supply data to the registry or use data from it.  
* Describe the main data flows between these systems.  
* Illustrate how the registry fits into different national architectures.

**Key messages**

* The registry is one of several foundational registries. It is most valuable when linked to the facility registry and to identity systems.  
* Every connection needs a defined purpose, an owner and a documented data flow.  
* Mapping what already exists is the first design step.  
* Data should be captured once at source and reused, not re-entered.

**Proposed sections**

### **9.1 System landscape**

* Source systems: regulatory council systems, training institution records, HRIS, payroll, national identity and civil registration.  
* Systems that use registry data: electronic medical records, electronic prescribing, telehealth, insurance and claims, health management information systems, emergency rosters, the NHWA platform.  
* Shared services: facility registry, terminology service, interoperability layer, authentication.

### **9.2 Data flows**

* Who sends what to whom, when, and which event triggers it.  
* Flows into the registry (new records and updates) and out of it (queries, notifications, reports).  
* Periodic batch exchange compared with real-time exchange.

### **9.3 Architecture examples**

* Illustrative architectures for centralized, federated and hybrid models.  
* An example in which the registry is part of a national health information exchange.  
* An example for a country starting from paper registers or spreadsheets.

**Suggested figures and tables**

* Figure: ecosystem landscape diagram.  
* Figure: data flow diagram.  
* Table: systems, their owners, and the data they supply or use.

**Implementation tools and checklists**

* System inventory template.  
* Data flow mapping template.

**Expected outputs for countries**

* A national map of registry-related systems.  
* Documented current and target data flows.

## **Chapter 10\. Interoperability**

**Chapter objectives**

This chapter will help readers to:

* Explain the standards and interfaces that allow the registry to exchange data with other systems.  
* Describe common data exchange patterns and when to use each.  
* Define how interoperability is governed and tested.

**Key messages**

* Interoperability means that systems can exchange information and use it without manual re-entry.  
* Use existing open standards. Do not create national formats where a standard already exists.  
* Agreeing on meaning (shared codes and definitions) is as important as agreeing on technical format.  
* Interoperability needs ongoing governance: rules for who can connect, and testing that they conform.

**Proposed sections**

### **10.1 Standards**

* HL7 FHIR resources for health workers and where they work (Practitioner, PractitionerRole, Organization, Location) as the recommended exchange format.  
* IHE profiles such as Mobile Care Services Discovery (mCSD) for querying and updating health worker and facility directories.  
* Code systems and classifications, covered in the chapter on data standards.

### **10.2 APIs**

* Core interfaces: search for and read a health worker record; verify status; submit and update records; receive notice of changes.  
* Security of interfaces: authentication, authorization and consent.  
* Documentation and version management, so that other systems can connect.

### **10.3 Data exchange patterns**

* Query on demand, notification of changes, and bulk exchange through periodic files or extracts.  
* Direct connection compared with exchange through an interoperability layer.  
* Transitional approaches where source systems cannot yet use standards (for example structured file uploads).

### **10.4 Governance**

* Rules and agreements for systems that connect to the registry.  
* Conformance testing against published specifications before a connection goes live.  
* Managing changes to standards and interface versions.

**Suggested figures and tables**

* Figure: layers of interoperability (legal, organizational, semantic, technical).  
* Table: standards and what each is used for.  
* Figure: step-by-step sequence of a verification query.

**Implementation tools and checklists**

* Interoperability models (annex).  
* Interface specification checklist.  
* Conformance test checklist.

**Expected outputs for countries**

* A national interoperability specification for the registry.  
* A procedure for connecting new systems.

## **Chapter 11\. Data Standards and Minimum Dataset**

**Chapter objectives**

This chapter will help readers to:

* Present a minimum data set for a health workforce registry and the reason for each element.  
* Identify the classifications and code lists that make data comparable.  
* Show how registry data map to NHWA indicators.

**Key messages**

* Collect only what is needed, define it precisely, and keep it up to date.  
* The minimum data set is a floor, not a ceiling. Countries can extend it.  
* International classifications allow comparison across institutions and countries.  
* A well-designed registry can produce many NHWA indicators as a by-product of routine operation.

**Proposed sections**

### **11.1 Core dataset**

* The WHO 2015 minimum data set as the starting point: identification number, name, birth history, citizenship and language, address, contact information, professional licence and certification, employment status, employment address, and data submission institution.  
* Updates to consider: unique health worker identifier, more detail on education and qualifications, specialty, licence status and validity, place of practice linked to the facility registry, sector, and continuing professional development.  
* For each element: definition, format, whether mandatory, source and sensitivity.

### **11.2 Classifications**

* Occupations: International Standard Classification of Occupations (ISCO-08), with mapping from national occupational titles.  
* Education levels and fields (ISCED), facility types and ownership, and administrative geography.  
* Supporting standards for countries (ISO 3166), dates (ISO 8601\) and languages.

### **11.3 Metadata**

* Data dictionary structure: element name, definition, data type, permitted values and mapping to FHIR.  
* Information about each data item's origin: source, date recorded, date verified.  
* Version control and publication of the data dictionary and code lists.

### **11.4 NHWA mapping**

* NHWA indicators that can be derived from registry data, such as stock, density, distribution, age and sex, and place of training.  
* Indicators that need other sources, such as finance data and labour market surveys.  
* The breakdowns that NHWA requires and what they mean for the data set.

**Suggested figures and tables**

* Table: minimum data set.  
* Figure: logical data model (health worker, qualification, licence, role, facility).  
* Table: registry data elements mapped to NHWA indicators.

**Implementation tools and checklists**

* Minimum data set (annex) and data dictionary (annex).  
* Template for mapping national occupational titles to ISCO-08.  
* NHWA mapping (annex).

**Expected outputs for countries**

* A national minimum data set and data dictionary.  
* National occupational titles mapped to ISCO-08.  
* A list of the NHWA indicators that the registry will supply.

## **Chapter 12\. Privacy, Security and Trust**

**Chapter objectives**

This chapter will help readers to:

* Apply privacy by design to health workers' personal data.  
* Identify the security controls that a registry needs.  
* Describe how access is controlled and audited so that stakeholders can trust the registry.

**Key messages**

* A registry holds personal data about health workers. Protecting those data is a legal and ethical duty.  
* Decide what is public, what is shared between institutions and what is restricted, and be open about it.  
* Security is a continuous activity, not a one-off installation.  
* Trust depends on transparency: health workers should know who uses their data and why.

**Proposed sections**

### **12.1 Privacy by design**

* Collect the minimum data needed, use them only for stated purposes, and set retention limits.  
* Carry out a privacy impact assessment before implementation and before major changes.  
* Tiered disclosure: a public view, an institutional view and restricted data.

### **12.2 Cybersecurity**

* Risk assessment, secure hosting, encryption of stored and transmitted data, backup and recovery.  
* Incident response and notification of data breaches.  
* Alignment with national cybersecurity policies and standards.

### **12.3 Access control**

* Role-based access for people; authenticated and authorized access for systems.  
* Self-service access for health workers to their own record.  
* Regular review of user accounts and permissions.

### **12.4 Audit trails**

* A log of who viewed or changed which record, when and why.  
* Routine review of logs, with reports to the governance body.  
* Use of audit data to detect misuse and fraud.

**Suggested figures and tables**

* Figure: tiered data access model.  
* Table: main threats and the controls that address them.  
* Table: roles and permissions.

**Implementation tools and checklists**

* Privacy impact assessment template.  
* Security checklist.  
* Roles and permissions template.

**Expected outputs for countries**

* A completed privacy impact assessment.  
* A data classification and disclosure policy.  
* A security plan.

## **Chapter 13\. Data Quality Management**

**Chapter objectives**

This chapter will help readers to:

* Define data quality for a registry and how to measure it.  
* Describe validation when data are entered and when they are compared across sources.  
* Set up routine monitoring and improvement of data quality.

**Key messages**

* A registry is only as useful as its data are complete, accurate and current.  
* Quality is best assured at source, by the institution that owns the data.  
* Routine use of the data is the strongest driver of quality.  
* Data quality needs named responsibility and regular reporting.

**Proposed sections**

### **13.1 Quality dimensions**

* Completeness, accuracy, timeliness, uniqueness, consistency and validity.  
* Coverage: the proportion of the actual workforce that is in the registry, including the private sector.  
* Targets for each dimension.

### **13.2 Validation**

* Automated rules at data entry (formats, mandatory fields, code lists).  
* Verification against primary sources, such as training institutions, the national identity system and the issuing regulator.  
* Procedures for finding and resolving duplicate records.

### **13.3 Monitoring**

* Data quality indicators and dashboards.  
* Periodic audits and reconciliation with payroll, facility staffing lists or census data.  
* Feedback to data suppliers and corrective action.

**Suggested figures and tables**

* Table: data quality dimensions with example indicators.  
* Figure: data quality improvement cycle.

**Implementation tools and checklists**

* Data quality assessment checklist.  
* Catalogue of validation rules.  
* Standard operating procedure template for resolving duplicates.

**Expected outputs for countries**

* A data quality plan with indicators and targets.  
* A routine data quality report.

# **Part 3\. Country Implementation**

**Purpose:** This part guides countries through the practical steps of transformation, from preparing and assessing readiness to operating and improving the registry. Countries can enter at the step that matches their situation.

## **Chapter 14\. Preparing for Transformation**

**Chapter objectives**

This chapter will help readers to:

* Secure leadership and form the team that will lead the transformation.  
* Assess readiness and the current state of registry-related systems.  
* Engage the stakeholders on whose participation the registry depends.

**Key messages**

* Joint leadership by the health workforce and digital health units is essential.  
* A readiness assessment prevents costly surprises later.  
* Regulators and professional councils are partners and data owners, not only data suppliers.  
* Agree the vision and first-phase scope before choosing technology.

**Proposed sections**

### **14.1 Leadership**

* An executive sponsor and a clear mandate.  
* A shared vision and goals linked to the national health workforce and digital health strategies.  
* The registry's place in the national digital health architecture and investment plans.

### **14.2 Teams**

* Core team: health workforce lead, digital health lead, regulator representatives, business analyst, architect, data manager and legal adviser.  
* Roles, responsibilities and time commitment.  
* When to bring in external technical support.

### **14.3 Readiness**

* Assessment areas: governance and law, data, processes, technology and infrastructure, people and skills, and financing.  
* An inventory of existing registers and systems.  
* Placement on the maturity model and identification of gaps.

### **14.4 Stakeholder engagement**

* Stakeholder mapping, with analysis of interests and influence.  
* Engagement methods: workshops, one-to-one consultation with councils, and dialogue with health worker associations.  
* Responding to concerns about loss of control, workload and use of data.

**Suggested figures and tables**

* Figure: team structure.  
* Table: readiness assessment areas and sample questions.  
* Figure: stakeholder map.

**Implementation tools and checklists**

* Readiness assessment (annex).  
* Stakeholder mapping template.  
* Team terms of reference template.

**Expected outputs for countries**

* A mandated team and a vision statement.  
* A readiness assessment report.  
* A stakeholder engagement plan.

## **Chapter 15\. Business Process Redesign**

**Chapter objectives**

This chapter will help readers to:

* Document how registration, licensing and related processes work today.  
* Design improved processes that make use of digital capabilities.  
* Derive system requirements from the redesigned processes.

**Key messages**

* Digitizing a poor process produces a poor digital process. Simplify first.  
* Mapping processes with the people who do the work reveals the real bottlenecks.  
* Redesign should reduce the burden on health workers.  
* Some process changes need regulatory or policy change. Identify these early.

**Proposed sections**

### **15.1 Current state mapping**

* Map priority processes: first registration, licence renewal, verification, transfer and exit.  
* Record the steps, people involved, documents, time taken and difficulties.  
* Identify duplication across institutions.

### **15.2 Future workflows**

* Redesigned workflows using online application, automated checks, shared data and digital credentials.  
* Paper or assisted channels kept where connectivity or digital skills are limited.  
* Policy or legal changes needed to make the new workflows possible.

### **15.3 Requirements**

* Turn future workflows into functional and non-functional requirements (linked to the chapters on use cases and functional requirements).  
* Data requirements for each step.  
* Prioritization and phasing.

**Suggested figures and tables**

* Figure: example current and future workflow for licence renewal.  
* Table: common difficulties and redesign options.

**Implementation tools and checklists**

* Process mapping template.  
* Requirements template.

**Expected outputs for countries**

* Current and future process maps.  
* Validated requirements.  
* A list of policy changes needed.

## **Chapter 16\. Planning and Procurement**

**Chapter objectives**

This chapter will help readers to:

* Compare the options for delivering the registry.  
* Choose a procurement approach and prepare specifications.  
* Develop a costed implementation plan and manage risk.

**Key messages**

* Consider adapting or connecting existing systems before buying or building new ones.  
* The total cost of ownership over at least five years matters more than the purchase price.  
* Contracts must protect the country's ownership of its data and avoid dependence on one supplier.  
* Plan in phases with clear milestones.

**Proposed sections**

### **16.1 Options analysis**

* Options: enhance an existing system, adopt an open-source solution or digital public good, buy a commercial product, build a custom system, or use a shared government platform.  
* Criteria: fit with requirements, conformance to standards, cost, local capacity and sustainability.  
* Total cost of ownership and budgeting, following the DIIG approach.

### **16.2 Procurement approaches**

* Specifications and evaluation criteria based on the requirements and standards.  
* Contract terms: data ownership, access to source code, support, service levels, training and exit.  
* Coordination of funders and alignment with national procurement rules.

### **16.3 Risk management**

* Common risks: weak mandate, stakeholder resistance, poor data, funding gaps, supplier dependence and staff turnover.  
* A risk register with mitigation measures.  
* Phasing and pilots to reduce risk.

**Suggested figures and tables**

* Table: comparison of delivery options.  
* Figure: sample phased roadmap.  
* Table: risk matrix.

**Implementation tools and checklists**

* Options analysis template.  
* Total cost of ownership and budget template.  
* Risk register template.  
* Procurement specification checklist.

**Expected outputs for countries**

* An options appraisal and decision.  
* A costed implementation plan and roadmap.  
* A risk register.

## **Chapter 17\. Implementation and Deployment**

**Chapter objectives**

This chapter will help readers to:

* Plan the migration of existing records into the registry.  
* Test the registry before and during roll-out.  
* Roll out in phases and establish routine operations.

**Key messages**

* Data migration and cleaning usually take longer than expected. Plan and resource them.  
* Test with real users and realistic data.  
* Roll out in phases, learn, and adjust.  
* Put operations and support in place before going live.

**Proposed sections**

### **17.1 Migration**

* Take stock of existing paper and digital records, then clean, de-duplicate and map them.  
* Digitize paper registers and verify the records.  
* Load data in a planned order, for example by occupation or sector.

### **17.2 Testing**

* Functional, integration, performance, security and user acceptance testing.  
* Conformance testing of interfaces.  
* Test data and test environments.

### **17.3 Rollout**

* A pilot, followed by phased roll-out by occupation, institution or region.  
* Criteria for going live, and a period of running old and new processes in parallel.  
* User support during the transition.

### **17.4 Operations**

* Standard operating procedures, help desk and service levels.  
* Hosting, backup, maintenance and updates.  
* Bringing new data suppliers and connecting systems on board.

**Suggested figures and tables**

* Figure: data migration steps.  
* Table: types of testing and their purpose.  
* Figure: phased roll-out timeline.

**Implementation tools and checklists**

* Migration plan template.  
* Test plan and user acceptance test templates.  
* Go-live checklist.  
* Standard operating procedure template.

**Expected outputs for countries**

* Migrated and validated data.  
* Test reports.  
* An operating registry with procedures and support arrangements.

## **Chapter 18\. Change Management**

**Chapter objectives**

This chapter will help readers to:

* Plan communications for each stakeholder group.  
* Promote adoption and routine use of the registry.  
* Build the skills needed to operate, use and sustain the registry.

**Key messages**

* People adopt systems that make their work easier and whose purpose they understand.  
* Communicate early, often and in the language of each audience.  
* Health workers must see benefits for themselves.  
* Capacity strengthening is continuous and should be built into institutions.

**Proposed sections**

### **18.1 Communications**

* Key messages for each audience: health workers, regulators, employers, managers and the public.  
* Channels and timing.  
* Responding to concerns about data use and privacy.

### **18.2 Adoption**

* Champions, incentives, and links between the registry and processes that users already need, such as licence renewal and employment.  
* Monitoring uptake and removing barriers.  
* Ways for users to give feedback.

### **18.3 Capacity strengthening**

* Competencies for registry managers, data officers, technical staff and other users.  
* Training approaches: on-the-job training, e-learning, and peer learning between councils and countries.  
* Building registry skills into pre-service and in-service programmes, and retaining skilled staff.

**Suggested figures and tables**

* Table: communication matrix by stakeholder group.  
* Table: competencies by role.

**Implementation tools and checklists**

* Communications plan template.  
* Training plan template.  
* Change readiness checklist.

**Expected outputs for countries**

* A communications plan.  
* A training plan and materials.  
* An adoption monitoring report.

## **Chapter 19\. Monitoring and Continuous Improvement**

**Chapter objectives**

This chapter will help readers to:

* Define indicators to track the registry's performance and use.  
* Use a maturity model to plan progress.  
* Evaluate results and feed lessons into improvement.

**Key messages**

* Measure whether the registry is used and useful, not only whether it is installed.  
* Maturity is gradual. Set realistic targets for the next level.  
* Regular review keeps the registry in step with changing needs.  
* Share lessons with other countries.

**Proposed sections**

### **19.1 KPIs**

* Coverage and completeness, timeliness of updates, and data quality.  
* Service performance: time to register, renew and verify; system availability.  
* Use: number of connected systems, number of verification queries, and reports used for decisions.

### **19.2 Maturity**

* Maturity levels across governance, data, processes, technology, interoperability and use.  
* Self-assessment and target-setting.  
* Links to existing WHO assessments of health workforce information systems and digital health maturity.

### **19.3 Evaluation**

* Periodic evaluation of results against objectives and costs.  
* Learning reviews with stakeholders.  
* Updates to the roadmap, requirements and standards.

**Suggested figures and tables**

* Table: key performance indicators with definitions and data sources.  
* Figure: maturity model summary.  
* Figure: results chain from inputs to outcomes.

**Implementation tools and checklists**

* Indicator framework template.  
* Maturity self-assessment (annex).

**Expected outputs for countries**

* A monitoring and evaluation plan.  
* A baseline maturity assessment, repeated periodically.  
* An improvement plan.

# **Part 4\. Examples and Resources**

**Purpose:** This part illustrates the guidance with worked use cases and country experience, and provides practical tools and templates that countries can adapt.

## **Chapter 20\. Illustrative Use Cases**

**Chapter objectives**

This chapter will help readers to:

* Show how the registry supports specific real-world scenarios from start to finish.  
* Set out the people, data, workflows and interfaces involved in each scenario.  
* Help countries adapt the use cases to their own context.

**Key messages**

* Use cases make the value of a registry concrete for decision-makers and guide developers.  
* The same core data and interfaces serve all four use cases.  
* Each use case can be implemented in stages.  
* The use cases are illustrative, not prescriptive.

**Proposed sections**

### **20.1 Licensing**

* A new graduate applies, the qualification is verified with the training institution, a licence is issued and the registry is updated.  
* Renewal linked to continuing professional development.  
* Status changes, such as suspension and reinstatement, with notification to employers.

### **20.2 Verification**

* An employer or member of the public checks a health worker's status online.  
* A clinical system checks automatically that a prescriber is authorized.  
* A health worker holds a digital credential that can be verified online or offline.

### **20.3 Emergency response**

* Quickly identify available, qualified workers by skill and location for surge deployment.  
* Verify the credentials of emergency medical teams and volunteers.  
* Track deployment and return.

### **20.4 Mobility**

* Verify the credentials of internationally trained workers and issue certificates of good standing.  
* Track inflows and outflows to support reporting under the WHO Global Code of Practice on the International Recruitment of Health Personnel.  
* Movement within the country between regions, sectors and employers.

**Suggested figures and tables**

* Figure: workflow diagram for each use case.  
* Table: people, data and interfaces involved in each use case.

**Implementation tools and checklists**

* Use case template.  
* Scenario test scripts.

**Expected outputs for countries**

* National use cases adapted for priority scenarios.

## **Chapter 21\. Country Case Studies**

**Chapter objectives**

This chapter will help readers to:

* Present how countries with different governance models have built their registries.  
* Draw out practical lessons, including from fragile and low-resource settings.  
* Help readers find experience that is relevant to their own context.

**Key messages**

* Countries have succeeded with different models. Context determines the choice.  
* Progress is usually gradual, over several years.  
* Governance and data quality are recurring challenges everywhere.  
* Fragile settings can start with simple, robust solutions.

**Proposed sections**

### **21.1 Centralized**

* A country with a single national registry across professions (case to be confirmed by the working group).  
* How it was established: legal basis, governance and financing.  
* Results and challenges.

### **21.2 Federated**

* A country where several councils or sub-national authorities keep their own registers, linked to give a national view (case to be confirmed by the working group).  
* How identifiers, the data set and interfaces were harmonized.  
* Results and challenges.

### **21.3 Fragile settings**

* A fragile, conflict-affected or very low-resource setting, to be nominated through WHO regional offices.  
* A minimum workable approach, options for working offline, and coordination of partners.  
* Protecting data and health workers where security is poor.

### **21.4 Lessons learned**

* Common success factors and pitfalls.  
* What countries would do differently.  
* What the lessons mean for the country pathway.

**Suggested figures and tables**

* Summary box for each case study, in a standard format.  
* Table: comparison across the case studies.

**Implementation tools and checklists**

* Case study documentation template.

**Expected outputs for countries**

* A list of peer countries to learn from.  
* The country's own documented experience, to share with others.

## **Chapter 22\. Tools and Templates**

**Chapter objectives**

This chapter will help readers to:

* Provide ready-to-adapt tools for each step of the pathway.  
* Explain when and how to use each tool.  
* Point to the annexes and online resources where full versions are kept.

**Key messages**

* Tools save time but must be adapted to the national context.  
* Each tool is linked to a step in the country pathway.  
* Completed tools should be kept up to date as living documents.  
* Tools will be maintained online and, where relevant, in machine-readable form.

**Proposed sections**

### **22.1 Checklists**

* Legal and governance checklist.  
* Privacy and security checklist; interoperability checklist.  
* Go-live checklist.

### **22.2 Roadmaps**

* Sample phased roadmaps for each starting point: paper, stand-alone digital, and partly connected.  
* Milestones, dependencies and decision points.  
* Budget and resource planning linked to the roadmap.

### **22.3 Assessment tools**

* Readiness assessment, maturity model and data quality assessment.  
* How to carry out each assessment: who takes part, scoring, and use of results.  
* Repeating assessments to track progress.

**Suggested figures and tables**

* Table: all tools, with purpose, when to use, related chapter and annex.

**Implementation tools and checklists**

* The full set of tools and templates listed in this chapter and in the annexes.

**Expected outputs for countries**

* A completed set of adapted tools that together document the country's registry.

# **Annexes**

* **Annex 1\. Minimum Data Set:** Proposed core and optional data elements with definitions. An update of the WHO 2015 minimum data set.  
* **Annex 2\. Data Dictionary:** For each data element: definition, data type, permitted values, source, and mapping to FHIR.  
* **Annex 3\. Governance Template:** Model terms of reference for the steering committee and technical working group, a responsibility matrix, and a sample data-sharing agreement.  
* **Annex 4\. User Personas:** Full generic persona descriptions for countries to adapt.  
* **Annex 5\. Functional Requirements Catalogue:** Numbered functional and non-functional requirements, each with a priority and linked use case.  
* **Annex 6\. Interoperability Models:** Reference data flows, standard interfaces and example exchanges for centralized, federated and hybrid models.  
* **Annex 7\. Readiness Assessment:** Questionnaire and scoring guide for each assessment area.  
* **Annex 8\. Maturity Model:** Levels and criteria for each area, with a self-assessment form.  
* **Annex 9\. Glossary:** Plain-language definitions of health workforce and digital terms.  
* **Annex 10\. NHWA Mapping:** Table linking registry data elements to NHWA indicators.

# **References**

* WHO. Human resources for health information system: minimum data set for health workforce registry. 2015\.  
* WHO. Global strategy on human resources for health: Workforce 2030\. 2016\.  
* WHO. National health workforce accounts: a handbook, second edition. 2023\.  
* WHO. Global Code of Practice on the International Recruitment of Health Personnel. 2010\.  
* WHO. Health practitioner regulation: design, reform and implementation guidance. 2024\.  
* WHO. Digital implementation investment guide (DIIG): integrating digital interventions into health programmes. 2020\.  
* WHO. Digital transformation handbook for primary health care: optimizing person-centred point of service systems. 2024\.  
* WHO. Digital transformation handbook for health supply chain architecture. 2024\.  
* WHO. Digital transformation handbook for health product catalogue. 2025\.  
* WHO and ITU. Reference architecture guidance for digital public infrastructure for health (DPI-H). Draft for public comment, July 2026\.  
* WHO. Classification of digital interventions, services and applications in health, second edition. 2023\.  
* WHO. Global strategy on digital health 2020–2025.  
* WHO SMART Guidelines.  
* HL7 FHIR; IHE Mobile Care Services Discovery (mCSD) profile.  
* ILO. International Standard Classification of Occupations (ISCO-08). UNESCO. International Standard Classification of Education (ISCED).