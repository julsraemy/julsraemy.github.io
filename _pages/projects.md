---
title: "Research Projects"
excerpt: "Research and infrastructure projects by Julien A. Raemy on IIIF, Linked Art, persistent identifiers (ARKs) and knowledge graphs, from participatory image archives (PIA) to linked government data (LINDASnext)."
toc: true
toc_label: Table of Contents
permalink: /projects/
---

## Projects

Most of these projects share a common thread: making data, from cultural heritage collections to public administration datasets, interoperable and persistently identifiable through open standards such as IIIF, Linked Art, Archival Resource Keys (ARKs) and RDF.

| **Timeline** | **Research Project**                                                                                   | **Institution (Position)**                     | **Funder**                                         |
|--------------|--------------------------------------------------------------------------------------------------------|------------------------------------------------|----------------------------------------------------|
| 2024-2026    | LINDASnext                                                                                             | Swiss Federal Archives (Data Scientist and Project Manager) | Swiss Federal Administration           |
| 2021-2025    | Participatory Knowledge Practices in Analogue and Digital Image Archives (PIA)                         | University of Basel (PhD Candidate)            | Swiss National Science Foundation (SNSF), Sinergia |
| 2020-2022[^1]    | Bilder der Schweiz Online (BSO)                                                                        | University of Zürich (Scientific Collaborator) | Stiftung Familie Fehlmann                          |
| 2020         | Infrastructure Nationale d’un Complément d’Identifiants Pérennes, Interopérables et Traçables (INCIPIT)| Haute école de gestion de Genève (Assistant)   | swissuniversities-p5                               |
| 2018-2019    | Towards IIIF-Compliance Knowledge in Switzerland (TICKS)                                               | Haute école de gestion de Genève (Assistant)    | Hasler Foundation                                  |
| 2017-2018    | Identités de confiance pour les données de l’art et du design (ICOPAD)                                 | Haute école de gestion de Genève (Assistant)   | HES-SO                                             |

### LINDASnext

![LINDAS logo](/assets/images/lindas-logo.png){: width="300" .align-center}

*LINDASnext* - next-generation platform evolved from [LINDAS][lindas], the Linked Data Service of the Swiss Federal Administration [:link:][lindas]

At the [Swiss Federal Archives][bar], I coordinated the development of LINDASnext, a scalable platform enabling Swiss public administrations to publish and visualise their data as knowledge graphs. I oversaw the contractual, financial and resource aspects of the project, with a CHF 2 million baseline and an implementation phase of approximately CHF 40 million, and coordinated a ten-person team across more than 15 stakeholders, including the Federal Office for the Environment (FOEN) and the Federal Statistical Office (FSO). This involved co-orchestrating a two-lot public tender, ensuring compliance with Open Government Data (OGD) directives, and working with the selected bidders and partners to define concepts and reports in line with the HERMES project management methodology.

### PIA

*Partizipative Wissenspraktiken in analogen und digitalen Bildarchiven / Participatory Knowledge Practices in Analogue and Digital Image Archives (PIA)* - Swiss National Science Foundation (SNSF) Sinergia funded project [:link:][pia]

Funded under the SNSF Sinergia programme ([grant 193788][snf-pia], CHF 2.9 million, February 2021 – August 2025), PIA was led by Walter Leimgruber (Seminar für Kulturwissenschaft und Europäische Ethnologie, University of Basel), Ulrike Felsing (Lucerne University of Applied Sciences and Arts) and Peter Fornaro (Digital Humanities Lab, University of Basel). It brought together cultural anthropology, design research and computer science around the photo archives of the Swiss Society for Folklore Studies, now [Empirische Kulturwissenschaft Schweiz (EKWS)][ekws-pia], exploring citizen science, interface design and machine learning to make these collections more accessible and participatory.

My [PhD thesis][phd] – Linked Open Usable Data for Cultural Heritage: Perspectives on Community Practices and Semantic Interoperability – was being carried out as part of the PIA research project.

PIA was a 20-person project rethinking how photographic archives can be opened up to participation. Working from the Digital Humanities Lab of the University of Basel, I focused on the infrastructure side: how community-driven standards such as IIIF and Linked Art could make the collections both machine-actionable and usable by people. This work became the core of my PhD, and it also led to workshops on citizen science, design research and Linked Art, as well as a research residency at Yale University.

### BSO
*Bilder der Schweiz Online (BSO)* - funded by the Stiftung Familie Fehlmann [:link:][bso]

As Knowledge Graph Engineer and IIIF Systems Architect for the [Swiss Art Research Infrastructure (SARI)][sari] at the University of Zurich, I worked on how IIIF should be integrated into Bilder der Schweiz Online. This meant outlining implementation scenarios, deciding which IIIF APIs to adopt, checking the conformance of the image formats and defining conversion recipes for the research platform and the public website. I also built a IIIF Manifest template that the project could reuse. BSO went on to develop well beyond my six months of involvement; the results can be explored on the [Bilder der Schweiz Online website][bso].

### INCIPIT

![INCIPIT logo](/assets/images/incipit-logo.png){: width="300" .align-center}

*Infrastructure Nationale d’un Complément d’Identifiants Pérennes, Interopérables et Traçables* (INCIPIT) - swissuniversities P-5 funded project [:link:][incipit]

INCIPIT continued the persistent identifier work started in ICOPAD and turned it into a service. Running from January to December 2020 with CHF 132,603 in funding from the swissuniversities P-5 "Scientific Information" programme, co-financed by the Haute école de gestion de Genève (HEG-GE), it set out to build a low-cost infrastructure for assigning persistent identifiers (PIDs) to any concept or resource, based on the Archival Resource Key (ARK) scheme. Its focus was the long tail of research data and the cultural heritage field (libraries, archives and museums).

I managed the project, which was carried out at the HEG-GE with the help of the [Swiss Institute of Bioinformatics (SIB)][sib]. It produced [ARKetype][arketype], an ARK allocation service through which registered organisations could create, reserve or modify ARKs via a user interface or an API, with resolution handled by the [Name-to-Thing (N2T)][n2t] resolver. Sadly, this allocation service has since been deprecated, and the link above points to an archived copy. We presented the service at the [CIDOC 2020 conference][cidoc2020] in Geneva, and the project was also where my involvement in the ARK Alliance began.

### TICKS

![TICKS logo](/assets/images/ticks-logo.jpg){: width="250" .align-center}

*Towards IIIF-Compliance Knowledge in Switzerland* (TICKS) - Hasler Foundation funded project [:link:][ticks]

TICKS set out to map and encourage the adoption of IIIF in Switzerland. Alongside managing the project, I wrote a [white paper][ticks-wp] on the state of IIIF compliance in Swiss institutions and organised the Bern IIIF Showcase at the Swiss National Library in 2018. It was my first sustained involvement in the IIIF community, which led to my roles on the Outreach Community Group and the Technical Review Committee.

### ICOPAD

*Identités de confiance pour les données de l’art et du design* (ICOPAD) [:link:][icopad]

ICOPAD looked at how trustworthy, persistent identifiers could be assigned to art and design data. With partners from the Swiss Institute for Art Research (SIK-ISEA), the Zentralbibliothek Zürich and the Zurich University of the Arts (ZHdK), I carried out research and developed models and approaches for assigning PIDs. ICOPAD laid the groundwork for INCIPIT.

[^1]: I was only involved between July and December 2020 on the BSO project before deciding to start a PhD in Digital Humanities at the University of Basel.

[bar]: https://www.bar.admin.ch/
[arketype]: https://web.archive.org/web/20230204083123/https://www.arketype.ch/
[bso]: https://www.bilder-der-schweiz.online/
[cidoc2020]: https://cidoc.mahgeneve.news/en/conference/
[ekws-pia]: https://www.ekws.ch/de/aktivitaeten/projekte/partizipative-wissenspraktiken-in-analogen-und-digitalen-bildarchiven-pia
[icopad]: https://campus.hesge.ch/id_bilingue/projekte/icopad/index_fr.asp
[incipit]: https://www.swissuniversities.ch/en/topics/digitalisation/p-5-scientific-information/projects/incipit
[lindas]: https://lindas.admin.ch/
[n2t]: https://n2t.net/
[phd]: https://phd.julsraemy.ch
[pia]: https://about.participatory-archives.ch/
[sari]: https://www.sari.uzh.ch/
[sib]: https://www.sib.swiss/
[snf-pia]: https://data.snf.ch/grants/grant/193788
[ticks]: https://campus.hesge.ch/id_bilingue/projekte/ticks/index_fr.asp
[ticks-wp]: https://doi.org/10.5281/zenodo.2640416